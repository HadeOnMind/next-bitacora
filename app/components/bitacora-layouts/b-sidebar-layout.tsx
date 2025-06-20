"use client";

import { useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <aside className={`bg-slate-800 text-white transition-all duration-300 ${open ? 'w-56' : 'w-12'} p-2`}>
      <button onClick={() => setOpen(!open)} className="mb-4 text-cyan-400">
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