"use client";

import { useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <aside className={`bg-cyan-500 text-white transition-all duration-300 h-screen ${open ? 'w-56' : 'w-12'} p-2 my-16 z-50 shadow-lg`}>
      <button onClick={() => setOpen(!open)} className={"mb-4 p-1 text-cyan-400 hover:bg-cyan-800 rounded-xl flex justify-center"}>
        {open ? <HiChevronLeft /> : <HiChevronRight />}
      </button>

      {open && (
        <ul className="space-y-2">
          <li className="hover:text-cyan-300 cursor-pointer">My Books</li>
          <li className="hover:text-cyan-300 cursor-pointer">Categories</li>
          <li className="hover:text-cyan-300 cursor-pointer">Archives</li>
        </ul>
      )}
    </aside>
  );
}