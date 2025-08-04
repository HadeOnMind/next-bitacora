"use client";

import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { FiSettings, FiUser, FiAward } from "react-icons/fi";
import { BsFillBookFill, BsListTask, BsCalendarDate, BsPeople, BsPen } from "react-icons/bs";
import { twMerge } from "tailwind-merge";

export default function Sidebar() {
  const [open, setOpen] = useState(true);


  const topItems = [
    { label: "My Sketchbooks", icon: <BsFillBookFill /> },
    { label: "Task List", icon: <BsListTask /> },
    { label: "Schedule", icon: <BsCalendarDate /> },
    { label: "Team", icon: <BsPeople /> },
    { label: "Work in progress", icon: <BsPen /> },
  ];



  const bottomItems = [
    { label: "Achievements", icon: <FiAward /> },
    { label: "Configs", icon: <FiSettings /> },
    { label: "Profile", icon: <FiUser />, isProfile: true },
  ];



  return (
    <aside
      className={twMerge(
        "bg-cyan-500 text-white transition-all duration-300 h-screen  p-2 shadow-lg flex flex-col justify-between",
        open ? "w-56" : "w-12"
      )} style={{ height: "calc(100vh - 4rem)", marginTop: "4rem" }}
    >


      <div>

        <div className="flex items-center gap-2 px-2 mb-4">
          <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center text-cyan-500 font-bold">
            B
          </div>
          {open && (
            <div className="text-lg font-semibold tracking-wide">
              Bitácora Studios
            </div>
          )}
        </div>


        <hr className="border-white/30 mb-3" />


        <button
          onClick={() => setOpen(!open)}
          className={twMerge(
            "p-1 text-cyan-400 hover:bg-cyan-800 rounded-xl flex justify-center transition-colors mb-3",
            open ? "w-full" : "w-8 pr-2"
          )}
        >
          {open ? <HiChevronLeft /> : <HiChevronRight />}
        </button>


        <div
          className={twMerge(
            "bg-white/20 rounded-lg flex items-center gap-2 px-2 py-1 mb-4",
            open ? "w-full" : "justify-center"
          )}
        >
          <BiSearch />
          {open && (
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none placeholder-white text-sm w-full"
            />
          )}
        </div>


        <hr className="border-white/30 mb-3" />


        <ul className="flex flex-col gap-3">
          {topItems.map(({ label, icon }) => (
            <li
              key={label}
              className="flex items-center gap-2 cursor-pointer hover:text-cyan-300 px-2"
            >
              <span>{icon}</span>
              {open && <span>{label}</span>}
            </li>
          ))}


          <li className="flex-grow invisible" />
        </ul>
      </div>
          <li className="flex-grow invisible" />

          {open && (


            <div className="px-3 py-2 bg-white/10 rounded-lg text-white">
              <div className="flex justify-between items-center text-sm font-medium mb-1">
                <span>Used Space</span>
                <span className="text-white/70">2.1 GB / 5 GB</span>
              </div>
              <div className="text-sm font-medium mb-1 flex justify-between">
                <span>Total Books</span>
                <span className="text-white/70">0</span>
              </div>
              <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-cyan-400 w-[50%]" />
              </div>
            </div>


          )}
      
        

      <ul className="flex flex-col gap-3 mb-20">
        <hr className="border-white/30 mb-0" />

        {bottomItems.map(({ label, icon, isProfile }) => (
          <li
            key={label}
            className={twMerge(
              "flex items-center gap-2 cursor-pointer hover:text-cyan-300 px-2",
              isProfile && "bg-white/10 rounded-lg py-1"
            )}
          >
            <span>{icon}</span>
            {open && (
              <span className={isProfile ? "font-semibold" : ""}>
                {label}
              </span>
            )}
          </li>
        ))}
      </ul>

  
    </aside>
  );
}