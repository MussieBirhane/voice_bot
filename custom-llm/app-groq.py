from flask import Flask, request, Response
import os
import requests
import json
from dotenv import load_dotenv
from groq import Groq

# Load environment variables
load_dotenv()

# Groq API setup

client = Groq(
    api_key=os.getenv("GROQ_API_KEY"),
)

app = Flask(__name__)

@app.route('/chat/completions', methods=['POST'])
def chat_completions():
    response = Response()
    response.headers['Content-Type'] = 'text/event-stream'
    response.headers['Cache-Control'] = 'no-cache'
    response.headers['Connection'] = 'keep-alive'

    request_data = request.get_json()

    messages = request_data.get('messages', [])  # Assuming 'messages' includes the conversation histor
    model = request_data.get('model')

    response_data = client.chat.completions.create(
            messages=messages,
            model=model                          # llama3-8b-8192
            
        )

    message = response_data.choices[0].message.content

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