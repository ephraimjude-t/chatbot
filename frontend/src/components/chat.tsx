import React, { useState, useRef, useEffect } from "react";
import MessageList from "./output";
import ChatInput from "./input";

interface Message {
  sender: string;
  text: string;
}

const Chat = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesContainerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  };

  useEffect(() => {
    scrollToBottom(); // Scroll to bottom on new messages
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newUserMessage = { sender: "user", text: input };
    setMessages((prevMessages) => [...prevMessages, newUserMessage]);
    setInput("");

    try {
      const res = await fetch("http://localhost:8000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data: { reply: string } = await res.json();
      const newBotMessage = { sender: "bot", text: data.reply };
      setMessages((prevMessages) => [...prevMessages, newBotMessage]);
    } catch (err) {
      console.error("Error sending message:", err);
      const errorBotMessage = { sender: "bot", text: "❌ Failed to get response." };
      setMessages((prevMessages) => [...prevMessages, errorBotMessage]);
    }
  };

  return (
    <div className="flex flex-col h-screen text-white">
      <div>
        <ChatInput input={input} setInput={setInput} onSendMessage={handleSend} />
      </div>
      <div className="bg-[#1E1E1E] opacity-75 rounded-[15px] overflow-y-scroll
      relative w-[90vw] h-[80vh] top-[0vh] left-[0vw]
      " ref={messagesContainerRef}>
        <MessageList messages={messages} />
      </div>
        
    </div>
  );
};

export default Chat;