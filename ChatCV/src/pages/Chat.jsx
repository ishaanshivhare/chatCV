import { useState } from "react";
import { UserIcon, SparklesIcon } from "@heroicons/react/24/outline";

export default function Chat() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        // Add user message
        setMessages([...messages, { text: input, isBot: false }]);

        // Simulate AI response
        setTimeout(() => {
            setMessages((prev) => [
                ...prev,
                {
                    text: "Here's a suggestion for your resume section: ...",
                    isBot: true,
                },
            ]);
        }, 1000);

        setInput("");
    };

    return (
        <div className='max-w-3xl mx-auto py-8 px-4'>
            <div className='bg-white rounded-lg shadow-xl p-6'>
                <div className='mb-4'>
                    <h2 className='text-2xl font-bold text-gray-900'>
                        AI Resume Assistant
                    </h2>
                    <p className='text-gray-600'>
                        Chat with our AI to build your resume
                    </p>
                </div>

                <div className='h-96 overflow-y-auto mb-4 space-y-4'>
                    {messages.map((msg, i) => (
                        <div
                            key={i}
                            className={`flex ${
                                msg.isBot ? "justify-start" : "justify-end"
                            }`}
                        >
                            <div
                                className={`max-w-xs p-3 rounded-lg ${
                                    msg.isBot
                                        ? "bg-gray-100"
                                        : "bg-blue-600 text-white"
                                }`}
                            >
                                <div className='flex items-center'>
                                    {msg.isBot ? (
                                        <SparklesIcon className='h-5 w-5 mr-2' />
                                    ) : (
                                        <UserIcon className='h-5 w-5 mr-2' />
                                    )}
                                    <p>{msg.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <form onSubmit={handleSubmit}>
                    <div className='flex gap-2'>
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className='flex-1 p-2 border rounded-lg'
                            placeholder='Ask AI for resume help...'
                        />
                        <button
                            type='submit'
                            className='bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700'
                        >
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
