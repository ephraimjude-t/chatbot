from fastapi import FastAPI
from pydantic import BaseModel
import requests
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class UserMessage(BaseModel):
    message: str


API_KEY = "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"
API_URL = "https://openrouter.ai/api/v1/chat/completions"

@app.get("/")
def read_root():
    return {"message": "Greetings, How can I assist you today?"}

@app.post("/chat")
def chat(user_msg: UserMessage):
    headers = {
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json"
    }

    payload = {
        "model": "nvidia/llama-3.3-nemotron-super-49b-v1:free",  
        "messages": [
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": user_msg.message}
        ]
    }

    response = requests.post(API_URL, headers=headers, json=payload)

    if response.status_code == 200:
        result = response.json()
        reply = result['choices'][0]['message']['content']
        return {"reply": reply}
    else:
        return {"error": f"API Error: {response.status_code} - {response.text}"}
