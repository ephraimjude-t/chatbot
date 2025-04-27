import React from "react";
import ReactMarkdown from "react-markdown";

interface MessageListProps {
  messages: { sender: string; text: string }[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  return (
    <>
      {messages.map((msg, i) => (
        <div
          key={i}
          className={`p-3 rounded-xl  ${
            msg.sender === "user" ? "bg-blue-600 text-white ml-auto" : "bg-gray-200 text-white mr-auto"
          }`}
        >
          {msg.sender === "bot" ? (
            <ReactMarkdown>{msg.text}</ReactMarkdown>
          ) : (
            msg.text
          )}
        </div>
      ))}
    </>
  );
};

export default MessageList;