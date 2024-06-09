import requests

def test_endpoint(url, data, headers):
    try:
        response = requests.post(url, headers=headers, json=data)
        if response.status_code == 200:
            print("Success:", response.json())
        else:
            print("Failed to get a valid response:", response.status_code, response.text)
    except requests.RequestException as e:
        print("Request failed:", e)
    except ValueError as e:
        print("JSON decode error:", e)

# Endpoint URL
url = "http://127.0.0.1:5000/chat/completions"
#url = "http://127.0.0.1:5000/openai-sse/chat/completions"

# Headers
headers = {
    "Content-Type": "application/json"
}

# Data payload
data = {
    "messages": [
        {"role": "user", "content": "Hello, where is Pesaro located in Italy?"}
    ],
    "model": "gpt-3.5-turbo",
    "stream": False
}

# Run the test
test_endpoint(url, data, headers)