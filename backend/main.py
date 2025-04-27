from fastapi import FastAPI
from pydantic import BaseModel
import requests
from fastapi.middleware.cors import CORSMiddleware

origins = [
    "http://localhost",
    "http://localhost:3000",
    "http://localhost:8000",
    "http://localhost:5173",
    "http://localhost:5174",
]

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
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
