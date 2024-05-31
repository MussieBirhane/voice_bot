from flask import Flask, request, jsonify
from dotenv import load_dotenv
import openai
import os

app = Flask(__name__)

# Load environment variables
load_dotenv()

# OpenAI setup
openai.api_key = os.getenv("OPENAI_API_KEY")

@app.route("/chat/completions", methods=["POST"])
def chat_completions():
    # Extract relevant information from data (e.g., prompt, conversation history)
    # How is Vapi sending the information to the custom LLM??????????????????
    try:
        data = request.get_json()
        messages = data.get('messages', [])  # Assuming 'messages' includes the conversation history
        
        response = openai.chat.completions.create(
            model="gpt-3.5-turbo-instruct",
            messages=[
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": messages}
                # ... (Add messages from conversation history and current prompt)
            ]
        )
        

        # Format response according to Vapi's structure
        # How is Vapi sending the information to the custom LLM??????????????????
        # Extract the 'choices' from the response and format it according to Vapi's expected response structure
        formatted_response = response
        
        #formatted_response = {
        #    "response": response.choices[0].message.content
        #}
    
    except Exception as e:
        # Handle errors and exceptions, providing a fallback response
        formatted_response = {
            "error": "An error occurred",
            "details": str(e)
        }

    return jsonify(formatted_response)

if __name__ == "__main__":
    app.run(debug=True, port=5000)  # You can adjust the port if needed
