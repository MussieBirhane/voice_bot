from flask import Flask, request, Response
import os
import openai
import time
import requests
import json
from dotenv import load_dotenv
from groq import Groq
from pinecone import Pinecone, PodSpec, ServerlessSpec

# Load environment variables
load_dotenv()

# OpenAI setup
openai.api_key = os.getenv("OPENAI_API_KEY")

# Instantiate a Pinecone database
pinecone_mussie_api_key = os.getenv("PINECONE_MUSSIE_API_KEY")

pc_mussie = Pinecone(api_key=pinecone_mussie_api_key)               # Mussie
index_name_mussie = "kargo-trans-00"
index_mussie = pc_mussie.Index(index_name_mussie)

app = Flask(__name__)

@app.route('/chat/completions', methods=['POST'])
def chat_completions():
    response = Response()
    response.headers['Content-Type'] = 'text/event-stream'
    response.headers['Cache-Control'] = 'no-cache'
    response.headers['Connection'] = 'keep-alive'

    request_data = request.get_json()

    #print("Request data from Vapi: ", request_data)

    messages = request_data.get('messages', [])  # Assuming 'messages' includes the conversation history
    model = request_data.get('model')
    query = messages[-1]['content']

    print("User query: ", query)

    try:
        # Handle FAQ Using the RAG
        # Embed the user query

        # record the time before the request is sent
        start_time = time.time()

        res = openai.embeddings.create(input=[query], model="text-embedding-3-small")
        xq = res.data[0].embedding

        # Retrieve from Pinecone
        retrieved_data = index_mussie.query(vector=xq, top_k=1, include_metadata=True)
        print('retrieved data: ', retrieved_data)

        ## calculate the time it took to retrieve the response from Pinecone
        pinecone_retrieval_time = time.time() - start_time
        print("Pinecone_retrieval_time: ", pinecone_retrieval_time, "\n")

        score = retrieved_data["matches"][0]["score"]

        if score > 0.5:
            response_data = retrieved_data["matches"][0]["metadata"]["answer"]
            message = response_data
        else:
            # Go get the response from the LLM (Groq)
            ## record the time before the request is sent
            start_time = time.time()

            response_data = openai.chat.completions.create(
                            model=model,                          # model from Vapi request
                            messages=messages,
                            stream=True
            )

            # create variables to collect the stream of chunks
            collected_chunks = []
            collected_messages = []
            buffer = ""  # Initialize an empty buffer

            for chunk in response_data:
                chunk_time = time.time() - start_time           # calculate the time delay of the chunk
                text = chunk.choices[0].delta.content
                if text is not None:
                    buffer += str(text)  # Add text to buffer

                # Check if the buffer ends with a sentence-ending punctuation
                if buffer.strip().endswith(('.', '!', '?')):
                    collected_chunks.append(chunk)                # Save the event response
                    collected_messages.append(buffer.strip())     # Save the complete sentence
                    #print(f"Complete sentence received: {buffer.strip()}")
                    buffer = ""  # Reset buffer for the next sentence

            # In case the final text doesn't end with punctuation
            if buffer:
                collected_messages.append(buffer.strip())
                #print(f"Remaining text received: {buffer.strip()}")

            ## calculate the time it took to receive the response
            response_time = time.time() - start_time

            #print("First token time: ", chunk_time, "\n")
            #print("Complete LLM response time: ", response_time, "\n")

            #print("collected messages: ", collected_messages)
            message = collected_messages
    
    except ValueError as e:
        print("error:", e)
        message = "Кажется, я пропустил часть того, что вы сказали. Не могли бы вы повторить это для меня?"

    print("AI: ", message, "\n")
    #print(f"Full LLM response received {response_time:.2f} seconds after request")

    # record the time before the request is sent
    #start_time = time.time()

    data_chunks = [{
        "id": "chatcmpl-8c78110d-a5cf-4585-8619-c1f59b714a70",
        "object": "chat.completion.chunk",
        "created": 1713300428,
        "model": 'gpt-4-1106-preview',
        "system_fingerprint": 'fp_5c95a4634e',
        "choices": [{
            "index": 0,
            "delta": {"content": message},
            "logprobs": None,
            "finish_reason": None,
        }],
    }]

    # what are this line doing? and how can I reduce the time spent here?l
    for chunk in data_chunks:
        response.stream.write(f"data: {json.dumps(chunk)}\n\n")

    response.stream.write("data: [DONE]\n\n")

    ## calculate the time it took for Vapi to receive the response
    #processing_time = time.time() - start_time
    #print("LLM response processing time: ", processing_time, "\n")

    return response

@app.route('/', methods=['POST'])
def index():
    print(request.json)
    return request.json

if __name__ == '__main__':
    app.run(port=3030)