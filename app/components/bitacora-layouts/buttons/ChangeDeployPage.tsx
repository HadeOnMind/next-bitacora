'use client';
import { useState } from 'react';

export default function ChangeDeploy() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative flex flex-col items-center">

      <div className="bg-[#c9d6d5] rounded-xl shadow px-4 py-2 hover:bg-[#89c2bd] transition">

        <button
          onClick={() => setOpen(!open)}
          className="text-[#3e3e3e] font-medium w-full h-full"
        >
          Change Type
        </button>

      </div>

      {open && (
        <div className="absolute bottom-full mb-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg">
          <button className="w-full px-4 py-2 text-left hover:bg-gray-200">Text</button>
          <button className="w-full px-4 py-2 text-left hover:bg-gray-200">Image</button>
          <button className="w-full px-4 py-2 text-left hover:bg-gray-200">Canvas</button>
        </div>
      )}

    </div>
  );
}
