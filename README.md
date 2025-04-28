# 🤖 AI Chatbot (Frontend + Backend)

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react)
![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss)

---

## 🛠️ Built With
- React (Frontend)
- TailwindCSS
- FastAPI (Backend)
- OpenRouter API (Model: Nemotron-8B)

---

## 🚀 Features
- Send messages to an AI assistant
- Real-time response from AI model
- Clean, simple user interface

---

## 📂 How to Run Locally

### Backend
```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload

### Frontend
cd frontend
npm install
npm run dev
