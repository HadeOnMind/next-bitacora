'use client';
import { useState } from 'react';



export default function AdvancedListDeploy() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative flex flex-col items-center">

      <div className="bg-[#c9d6d5] rounded-xl shadow px-4 py-2 hover:bg-[#1b1b1b] transition">
        <button
          onClick={() => setOpen(!open)}
          className="text-[#3e3e3e] font-medium"
        >
          List
        </button>
      </div>


      {open && (
        <div className="absolute bottom-full mb-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg">
          <button className="w-full px-4 py-2 text-left hover:bg-gray-100">Save</button>
          <button className="w-full px-4 py-2 text-left hover:bg-gray-100">Delete</button>
        </div>
      )}
    </div>
  );
}
