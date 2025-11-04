"use client";
import { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();
  const [added, setAdded] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [Books, setSketchbooks] = useState<books[]>([]);


  
  type books = {
    _id?: string;
    user: string;
    pages?: number;
    title: string;
    description: string;
    createdAt?: string;
    updatedAt?: string;
  };

 
  useEffect(() => {
    async function fetchBooks() {
      try {
        const response = await fetch("http://localhost:5000/api/sketchbooks");
        const data = await response.json();
        setSketchbooks(data);
      } catch (error) {
        console.error("❌ Error fetching sketchbooks:", error);
      }
    }

    fetchBooks();
  }, []);


  function SetAdded() {
    setAdded((prev) => !prev);
  }


  const HandleBookcreation = async () => {
    const newBook = {
      title: name,
      description,
      user: "DEV",
    };

    try {
      const res = await fetch("http://localhost:5000/api/sketchbooks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newBook),
      });

      if (!res.ok) throw new Error("Failed to create book");

      const data = await res.json();
      setSketchbooks((prev) => [...prev, data]);
      setName("");
      setDescription("");
      setAdded(false);
    } catch (err) {
      console.error("!!Error creating sketchbook:", err);
    }
  };

  const CardEditor = (
    <div className="bg-amber-100 rounded-xl shadow flex-col items-center">
      <div
        className="bg-amber-300 rounded-xl w-20 h-20 flex items-center justify-center cursor-pointer transition hover:bg-amber-400"
        onClick={SetAdded}
      >
        <span className="text-stone-800 text-sm font-semibold select-none">
          {added ? "Cancel..." : "➕ Add"}
        </span>
      </div>

      <div className="flex flex-row">
        <div>Delete</div>
        <div>Update</div>
      </div>

    </div>
  );

  return (
    <div className="min-h-screen bg-stone-100 p-4 font-sans my-12">
      <div className="bg-stone-200 rounded-xl p-6 shadow-md max-w-8xl mx-auto">
        <header className="text-3xl text-stone-700 font-bold mb-4">Bitacora</header>

        <div className="flex flex-row gap-6">
          <div className="flex-1 space-y-6">
            

            <section className="bg-amber-50 p-4 rounded-lg">
              <h2 className="text-xl font-semibold text-amber-700 mb-2">Recientes</h2>
              <div className="flex gap-4 overflow-x-auto">
                {CardEditor}

                {added && (
                  <div className="max-w-md p-4 bg-[#f9f6f1] border border-[#d6cfc3] rounded-lg shadow-sm space-y-3">
                    <h3 className="text-xl font-semibold text-[#5a4633]">📘 Create a New Book</h3>
                    <input
                      type="text"
                      placeholder="Book title"
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
                )}

                {Books.map((book) => (
                  <div
                    key={book._id}
                    onClick={() =>
                      router.push(`/sketchbook/${book._id}?title=${book.title}&desc=${book.description}`)
                    }
                    className={twMerge(
                      "min-w-[200px] p-4 bg-[#fffaf4] border border-[#d6cfc3] rounded-lg shadow hover:shadow-md transition space-y-2"
                    )}
                  >
                    <h4 className="text-lg font-bold text-[#5a4633]">{book.title}</h4>
                    <p className="text-sm text-[#3c2e1f]">{book.description}</p>
                    <div className="text-xs text-[#a09481] italic">
                      Created at: {book.createdAt ? new Date(book.createdAt).toLocaleString() : "—"}
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

          
          <div className="w-56 flex flex-col gap-4 overflow-y-auto bg-gray-300 px-2 py-4 rounded-md">
            <h2 className="text-lg font-semibold text-stone-700 mb-2">👥 Comunidad</h2>
            {[1, 2, 3].map((id) => (
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
          🌓{new Date().getFullYear()} Bitacora Web App — All rights reserved.
        </footer>

      </div>
    </div>
  );
}