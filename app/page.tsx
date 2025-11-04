"use client";


import Hero from "./components/hero";
import { useEffect } from "react";
import { useState } from "react";


export default function Home() {
  const [sketchbooks, setSketchbooks] = useState<any[]>([]);
  const [message, setMessage] = useState("");

  return (
    <div>
    <div className="invisible h-screen flex flex-col items-center justify-center bg-slate-800 text-white">
      <p className="text-lg font-semibold mb-4">
        Backend says: {message || "Loading..."}
      </p>

      <h2 className="text-xl font-bold mb-2">📚 Sketchbooks:</h2>
      {sketchbooks.length === 0 ? (
        <p>No sketchbooks found.</p>
      ) : (
        <ul className="space-y-2">
          {sketchbooks.map((skt) => (
            <li key={skt._id} className="bg-slate-700 px-4 py-2 rounded-lg">
              <strong>{skt.title}</strong>
              <p className="text-sm text-gray-300">{skt.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
    <Hero/>
    </div>
  );
}