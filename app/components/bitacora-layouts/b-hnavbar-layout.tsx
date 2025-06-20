"use client";

import { useState } from 'react';
import { HiMenuAlt2 } from 'react-icons/hi';


export default function TopNav() {
  const [open, setOpen] = useState(true);

  return (
    <nav className="bg-cyan-700 text-white px-4 py-3 shadow-md flex items-center justify-between">
      <div className="text-xl font-semibold tracking-wider">Bitácora</div>
      <button onClick={() => setOpen(!open)} className="text-white">
        <HiMenuAlt2 className="w-6 h-6" />
      </button>
      {open && (
        <div className="space-x-4 hidden md:flex">
          <button className="hover:text-cyan-300 transition">Dashboard</button>
          <button className="hover:text-cyan-300 transition">Settings</button>
        </div>
      )}
    </nav>
  );
}