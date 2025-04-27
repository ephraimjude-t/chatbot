return (
    <div className="h-scrren w-full bg-[#1a1a1a] text-white">
      <div className="h-screen w-full flex flex-col">
        {/* Messages Container */}
        <div className="flex-1 overflow-y-auto px-4 py-6 md:px-8">
          {messages.length === 0 && (
            <div className="flex flex-col items-center justify-center h-screen w-full text-center">
              <h1 className="text-4xl font-bold mb-6">What can I help with?</h1>
              <p className="text-gray-400">Ask anything...</p>
            </div>
          )}
          <div className="max-w-3xl mx-auto space-y-6">
            <AnimatePresence>
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                      msg.sender === "user"
                        ? "bg-[#1e40af] text-white"
                        : "bg-[#2d2d2d] text-gray-100"
                    }`}
                  >
                    {msg.sender === "bot" ? (
                      <div className="prose prose-invert prose-sm max-w-none">
                        <ReactMarkdown>{msg.text}</ReactMarkdown>
                      </div>
                    ) : (
                      <p>{msg.text}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Input Area */}
        <div className="border-t border-gray-700 bg-[#1a1a1a] p-4">
          <div className="max-w-3xl mx-auto">
            <div className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask anything..."
                className="w-full bg-[#2d2d2d] text-white rounded-lg pl-4 pr-20 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSend}
                className="absolute right-2 p-2 text-gray-400 hover:text-white transition-colors duration-200"
              >
              </motion.button>
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};