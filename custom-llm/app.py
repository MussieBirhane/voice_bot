from flask import Flask, request, Response
import os
import openai
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

    print("Request data from Vapi: ", request_data)

    messages = request_data.get('messages', [])  # Assuming 'messages' includes the conversation history
    model = request_data.get('model')
    query = messages[-1]['content']

    print("User query: ", query)

    try:
        # Handle FAQ Using the RAG
        # Embed the user query
        res = openai.embeddings.create(input=[query], model="text-embedding-3-small")
        xq = res.data[0].embedding

        # Retrieve from Pinecone
        retrieved_data = index_mussie.query(vector=xq, top_k=2, include_metadata=True)
        print('retrieved data: ', retrieved_data)

        score = retrieved_data["matches"][0]["score"]
        if score > 0.5:
            response_data = retrieved_data["matches"][0]["metadata"]["answer"]
            message = response_data
        else:
            # Go get the response from the LLM (Groq)
            response_data = openai.chat.completions.create(
                            model=model,                          # llama3-8b-8192
                            messages=messages
            )
            message = response_data.choices[0].message.content
    
    except ValueError as e:
        print("error:", e)
        message = "It seems I missed part of what you said. Could you kindly repeat it for me?"

    print("AI: ", message)

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

    for chunk in data_chunks:
        response.stream.write(f"data: {json.dumps(chunk)}\n\n")

    response.stream.write("data: [DONE]\n\n")
    return response

@app.route('/', methods=['POST'])
def index():
    print(request.json)
    return request.json

if __name__ == '__main__':
    app.run(port=3030)