"use client";

import { useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { twMerge } from 'tailwind-merge';

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  
const topItems = [
  "My Sketchbooks",
  "Task List",
  "Schedule"
];
const bottomItems = [
  "Profile",
  "Achievements",
  "Configs"
];

  return (
    <aside className={`bg-cyan-500 text-white transition-all duration-300 h-screen ${open ? 'w-56' : 'w-12'} mt-16 pb-28 p-2 shadow-lg`}>
      <button onClick={() => setOpen(!open)} className={twMerge(
            "mb-3 p-1 text-cyan-400 hover:bg-cyan-800 rounded-xl flex justify-center",
            open ? "w-full" : "w-8 pr-2"
          )}
        >
        {open ? <HiChevronLeft /> : <HiChevronRight />}
      </button>

      {open && (
        <ul className="h-full flex flex-col">
          <ul className="h-full flex flex-col">
            {topItems.map(item => (
              <li key={item} className="hover:text-cyan-300 cursor-pointer">{item}</li>
            ))}
            <li className="hover:text-cyan-300 cursor-pointer flex-grow invisible"></li>
            {bottomItems.map(item => (
              <li key={item} className="hover:text-cyan-300 cursor-pointer">{item}</li>
            ))}
          </ul>
        </ul>
      )}
    </aside>
  );
}