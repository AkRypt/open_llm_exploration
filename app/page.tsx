'use client';

import { useChat } from "ai/react";
import { query } from "./api/inference/route";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  // const { messages, input, handleInputChange, handleSubmit } = useChat();
  const router = useRouter();

  const [messages, setMessages] = useState<{role: string, content: string}[]>([]);

  const [textInput, setTextInput] = useState("");
  const [loading, setLoading] = useState(false);

  const submitQuery = () => {
    setTextInput("");
    setLoading(true);
    query({"inputs": textInput}).then((response) => {
      setMessages([...messages, { role: "user", content: textInput }, { role: "ai", content: response }]);
      setLoading(false);
    })
  }

  return (
    <div className="bg-gray-900 mx-auto w-[80%] py-24 flex flex-col">
      {loading && <p>Loading...</p>}
      {messages.map((m, i) => (
        <div className="flex flex-col items-start" key={i}>
          <p>{m.role === 'user' ? 'User: ' : 'AI: '}</p>
          <p>{m.content}</p>
        </div>
      ))}
 
      <label>
        <input
          className="w-[80%] mx-auto mr-4 bg-gray-600 border border-gray-300 rounded my-4 shadow-xl p-2"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              submitQuery();
            }
          }}
        />
      </label>
      <button className="bg-violet-800 w-[300px] text-white rounded-xl py-2 px-6 hover:bg-violet-600"
      onClick={submitQuery}
      >Send</button>


      <button className="bg-blue-500 w-[500px] text-white rounded-xl py-2 px-6 hover:bg-blue-400 my-4"
      onClick={() => router.push('/second')}
      >Go to Second Screen</button>
    </div>
  );
}
