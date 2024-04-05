'use client';
 
import { useChat } from 'ai/react';
import { useRouter } from 'next/navigation';
 
export default function Chat() {
    const router = useRouter();

  const { messages, input, handleInputChange, handleSubmit } = useChat();
 
  return (
    <div className="bg-gray-900 mx-auto w-[80%] py-24 flex flex-col ">
      {messages.map(m => (
        <div key={m.id}>
          <p>{m.role === 'user' ? 'User: ' : 'AI: '}</p>
          <p>{m.content}</p>
        </div>
      ))}
 
      <form onSubmit={handleSubmit}>
        <label>
          <input
            className="w-[70%] mr-4 mx-auto bg-gray-600 border border-gray-300 rounded my-4 shadow-xl p-2"
            value={input}
            onChange={handleInputChange}
          />
        </label>
        <button className="bg-violet-800 text-white rounded-xl py-2 px-6 hover:bg-violet-600"
        type="submit">Send</button>
      </form>
      <button className="bg-blue-500 text-white rounded-xl py-2 px-6 hover:bg-blue-400 my-4"
      onClick={() => router.push('/')}
      >Go to First Screen</button>
    </div>
  );
}