"use client"

import { useState } from "react";

export default function Home() {
  const [added, setAdded] = useState(false);

  const card = (
    <div
      className="w-20 h-20 bg-amber-200 rounded-xl shadow flex items-center justify-center cursor-pointer transition hover:bg-amber-300"
      onClick={() => setAdded(!added)}
    >
      <span className="text-stone-800 text-sm font-semibold select-none">
        {added ? '✔️ Added' : '➕ Add'}
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
              <div className="flex gap-4 overflow-x-auto">{card}{card}{card}</div>

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