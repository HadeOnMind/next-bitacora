"use client"

import { useState } from "react";
import { userAgent } from 'next/server';
import { text } from 'stream/consumers';
import { stringify } from 'querystring';
import { get } from "http";
import { twMerge } from "tailwind-merge";

export default function Home() {
  const [added, setAdded] = useState(false);



type books = {
  id: Number,
  user: String,
  pages: Number,
  name: String,
  description: String,
  createdAt: String,
  updatedAt: String,
};

const createdBooks = 0;
const [name, setName] = useState(""); 
const [description, setDescription] = useState("");

const [selectedBook, setSelectedBook] = useState<books | null>(null);


const [Books, setSketchbooks] = useState<books[]>(
  Array.from({ length: createdBooks }, (_, i) => ({
    div: i,
    id: i,
    user: `Empty`,
    pages: 0,
    name: `Empty`,
    description: 'Empty',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }))
);



function SetAdded() {
    const newAddedState = !added;
    setAdded(newAddedState);
    console.log("added");
  }


/*
const HandleBookcreation = () => {

  setSketchbooks(prev =>
    prev.map(books => ({
      ...books,
      user: "Jhojan"
    }))
  );


};
*/

const HandleBookcreation = () => {
  const newBook: books = {
    id: Books.length,
    user: "Jhojan",
    pages: 0,
    name,
    description,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  setSketchbooks((prev) => [...prev, newBook]);

  setName("");
  setDescription("");
  setAdded(false);
};




  const Addcard = (
    <div
      className="w-20 h-20 bg-amber-200 rounded-xl shadow flex items-center justify-center cursor-pointer transition hover:bg-amber-300"
      onClick={SetAdded}
    >
      <span className="text-stone-800 text-sm font-semibold select-none">
        {added ? 'Cancel...' : '➕ Add'}
      </span>
    </div>
  );

  return (
    <div className="min-h-screen bg-stone-100 p-4 font-sans my-12">
      <div className="bg-stone-200 rounded-xl p-6 shadow-md max-w-8xl mx-auto">
        
        <header className="text-3xl text-stone-700 font-bold mb-4">Bitácora</header>

        <div className="flex flex-row gap-6">
          
          <div className="flex-1 space-y-6">

            <section className="bg-amber-50 p-4 rounded-lg">

              <h2 className="text-xl font-semibold text-amber-700 mb-2">Recientes</h2>
              <div className="flex gap-4 overflow-x-auto">
                
                {Addcard}


                  {added ? 
                  
                  <div className="max-w-md p-4 bg-[#f9f6f1] border border-[#d6cfc3] rounded-lg shadow-sm space-y-3">
                  <h3 className="text-xl font-semibold text-[#5a4633]">📘 Create a New Book</h3>
                  <input
                    type="text"
                    placeholder="Book name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 border rounded text-[#3c2e1f]"
                  />
                  <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full p-2 border rounded text-[#3c2e1f] resize-none"
                    rows={3}
                  />
                  <button
                    onClick={HandleBookcreation}
                    className="bg-[#7c5c3e] text-white px-4 py-2 rounded hover:bg-[#6b4f34]"
                  >
                    Create Book
                  </button>
                  </div>

                  : ""
                
                  }
 


                    {Books.map((book) => (
                      <div
                      key={String(book.id)}
                      onClick={() => setSelectedBook(prev => prev?.id === book.id ? null : book)}
                        className= {twMerge("min-w-[200px] p-4 bg-[#fffaf4] border border-[#d6cfc3] rounded-lg shadow hover:shadow-md transition space-y-2",
                          selectedBook ? "border-4 border-amber-200" : ""
                        )}
                      >
                        <h4 className="text-lg font-bold text-[#5a4633]">{book.name}</h4>
                        <p className="text-sm text-[#3c2e1f]">{book.description}</p>
                        <div className="text-xs text-[#a09481] italic">
                          Created at: {book.createdAt}
                        </div>
                      </div>
                    ))}





              </div>

            </section>

            <section className="bg-emerald-50 p-4 rounded-lg">

              <h2 className="text-xl font-semibold text-emerald-700 mb-2">📌 Changelogs</h2>
              <p className="text-stone-600 text-sm">Small notes - Also coming soon...</p>
            
            </section>

            <section className="bg-teal-50 p-4 rounded-lg">

              <h2 className="text-xl font-semibold text-teal-700 mb-2">🌱 Community Takes</h2>
              <p className="text-stone-500 text-sm italic">Coming soon...</p>
            
            </section>

          </div>


           


          <div className="w-56 flex flex-col gap-4 overflow-y-auto bg-gray-300 px-2 py-4 rounded">
            <h2 className="text-lg font-semibold text-stone-700 mb-2">👥 Comunidad</h2>
            {[1, 2, 3].map(id => (
              <div
                key={id}
                className="h-20 bg-amber-200 rounded-xl shadow-sm flex items-center justify-center text-stone-700 text-sm hover:bg-amber-200 cursor-pointer"
              >
                Usuario {id}
              </div>
            ))}
          </div>
        </div>



        <footer className="text-center text-sm text-stone-500 mt-12 pt-6">
          ©{new Date().getFullYear()} Bitácora Web App — All rights reserved.
        </footer>
      </div>
    </div>
  );
}