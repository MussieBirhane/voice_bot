# Reference documentation: https://docs.vapi.ai/custom-llm-guide
# Example of custom llm on Vapi: https://github.com/VapiAI/server-side-example-python-flask/blob/main/app/api/custom_llm.py

from flask import Flask, request, jsonify, Response
from dotenv import load_dotenv
import openai
import os
import logging

# Load environment variables
load_dotenv()

# OpenAI setup
openai.api_key = os.getenv("OPENAI_API_KEY")

# Set up logging to a file
logging.basicConfig(filename='app.log', level=logging.INFO, format='%(asctime)s %(levelname)s:%(message)s')

app = Flask(__name__)

@app.route("/chat/completions", methods=["POST"])
def chat_completions():
    # Extract relevant information from data (e.g., prompt, message, conversation history)
    # Vapi sends the same way as openai
    try:
        request_data = request.get_json()

        # Log incoming request data
        logging.info(f"Request data: {request.json}")

        messages = request_data.get('messages', [])  # Assuming 'messages' includes the conversation histor
        model = request_data.get('model')
        #temprature = request_data.get('temprature')

        # Prepare conversation history for the API
        history = [{"role": "system", "content": "You are a helpful assistant."}]
        
        if messages:
            history.extend([{"role": msg['role'], "content": msg['content']} for msg in messages])
        
        #last_message = data['messages'][-1]

        response = openai.chat.completions.create(
            model=model,
            messages=messages
        )

        # Vapi's expected response structure is the same as OpenAI

        # Log the response data
        logging.info(f"Response data: {response}")

        return Response(response.model_dump_json(), content_type='application/json')

    except Exception as e:
        # Handle errors and exceptions, providing a fallback response
        formatted_response = {
            "error": "An error occurred",
            "details": str(e)
        }

        return jsonify(formatted_response)

if __name__ == "__main__":
    app.run(debug=True, port=5000)  # You can adjust the port if needed
