import React from "react";

interface ChatInputProps {
  input: string;
  setInput: (value: string) => void;
  onSendMessage: () => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ input, setInput, onSendMessage }) => {
  return (
    <div className="flex flex-row text-white">
        <input
        className="bg-[#1E1E1E] opacity-50 text-[#D9D9D9] 
        relative w-[70vw] h-[5vh] top-[90vh] left-[0vw] rounded-[15px]
        "
        placeholder="Type your message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onSendMessage()}
        />
        <button
        className="bg-[#1E1E1E] opacity-50 text-[#D9D9D9]
        relative w-[15vw] h-[5vh] top-[90vh] left-[0vw] rounded-[15px]
        "
        onClick={onSendMessage}
        >
        Send
        </button>
    </div>
  );
};

export default ChatInput;