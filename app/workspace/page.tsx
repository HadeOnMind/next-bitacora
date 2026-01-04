"use client";
import { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { useRouter } from "next/navigation";
import { MdAdd, MdWorkspaces } from "react-icons/md";
import { BiBookAdd } from "react-icons/bi";
import { BsPencilSquare } from "react-icons/bs";
import { CgCommunity } from "react-icons/cg";





export default function Home() {
  const router = useRouter();
  const [added, setAdded] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [Books, setSketchbooks] = useState<books[]>([]);
  const [selectedBooks, setSelectedBooks] = useState<string[]>([]);


  const [mode, SetMode] = useState<"none" | "delete" | "edit">( "none" ); 
  
  type books = {
    _id?: string;
    user: string;
    pages?: number;
    title: string;
    description: string;
    createdAt?: string;
    updatedAt?: string;
  };

 const toggleBookSelection = (id: string) => {
  setSelectedBooks(prev =>
    prev.includes(id)
      ? prev.filter(x => x !== id)
      : [...prev, id]
  );
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

const HandleBookClick = (id: string, title: string, descript: string) => {
  if (mode === "none") {
    router.push(`/sketchbook/${id}?title=${title}&desc=${descript}`);
    return;
  }

  toggleBookSelection(id)
}


const addbutton = (
  <button
    onClick={SetAdded}
    className={`w-full py-3 rounded-lg font-semibold transition-colors duration-200
                ${added ? "bg-blue-100 text-blue-700 hover:bg-cyan-200"
                        : "bg-blue-400 text-stone-800 hover:bg-cyan-400"}`}
  >
    {added ? (
      "Cancel"
    ) : (
      <span className="flex items-center justify-center gap-1">
        <MdAdd />
        Add
      </span>
    )}
  </button>
);

const deletebutton = (
  <button
    onClick={() => {
      SetMode("delete");
      setSelectedBooks([]);
    }}
    className="px-3 py-1 bg-blue-200 text-cyan rounded shadow hover:bg-blue-100"
  >
    <div>{mode === "delete" ? "DELETING BOOKS" : "DELETE"}</div>
  </button>
);

const CardEditor = (
  <div className="w-44 bg-sky-200 rounded-lg p-4 flex flex-col items-center space-y-4">

    
    {mode === "none" && addbutton}

    <div className="flex justify-between items-center w-full text-sm font-medium text-stone-700">

      
      {deletebutton}

     
      <button
        onClick={() => {
          SetMode("edit");
          setSelectedBooks([]);
        }}
        className="bg-blue-300 px-2 py-1 rounded hover:text-blue-600 hover:bg-blue-200 transition"
      >
        EDIT
      </button>
    </div>

  </div>
);


  return (
    <div className="min-h-screen bg-stone-100 p-4 font-sans my-12">
      <div className="bg-stone-200 rounded-xl p-6 shadow-md max-w-8xl mx-auto">
        <div className="flex">
          <MdWorkspaces className="text-blue-500 h-10 w-10"/>
          <header className="text-3xl text-stone-700 font-bold mb-4">Workspace</header>
        </div>

        <div className="flex flex-row gap-6">
          <div className="flex-1 space-y-6">
            

            <section className="bg-amber-50 p-4 rounded-lg">
              <h2 className="text-xl font-semibold text-blue-700 mb-2">Recientes</h2>
              <div className="flex gap-4 overflow-x-auto">
                {CardEditor}

                {added && (
                  <div className="max-w-md p-4 bg-[#f9f6f1] border border-[#d6cfc3] rounded-lg shadow-sm space-y-3">
                    <BiBookAdd className="text-blue-300 h-6 w-6"/>
                    <h3 className="text-xl font-semibold text-[#5a4633]">Create a New Book</h3>
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
                    className={twMerge(
                      "min-w-[200px] p-4 bg-[#fffaf4] border rounded-lg shadow transition cursor-pointer",
                      mode !== "none" && "hover:border-blue-400",
                      selectedBooks.includes(book._id) && "border-blue-500 ring-2 ring-blue-300"
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

          
          <div className="w-56 flex flex-col gap-4 overflow-y-auto bg-teal-50 px-2 py-4 rounded-md">
            <div className="flex">
              <CgCommunity className="h-5 w-5 text-sky-300"/>
              <h2 className="text-lg font-semibold text-stone-700 mb-2">Comunidad</h2>
            </div>
            {[1, 2, 3].map((id) => (
              <div
                key={id}
                className="h-20 bg-sky-200 rounded-xl shadow-sm flex items-center justify-center text-stone-700 text-sm hover:bg-cyan-200 cursor-pointer"
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