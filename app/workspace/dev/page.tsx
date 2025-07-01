"use client"
import { stringify } from 'querystring';
import { useState } from 'react';
import { text } from 'stream/consumers';



export default function DevPage() {

const [IsSelected, setIsSelected] = useState(false);

const ToggleSelection = () => {
setIsSelected(!IsSelected);
if(IsSelected){
  console.log("SELECCIONADO")
}
};







const [IsMerged, setIsMerged] = useState(false);

const type = ["none",
  "text",
  "img",
  "canvas",
];

const [currenType, SetCurrenType] = useState("none")

const setType = (type: string) => {
    switch (type) {
      case "none":
        SetCurrenType(type[0]);
        console.log(currenType)
        break;
      case "text":
        SetCurrenType(type[1]);
        console.log(currenType)
        break;
      case "img":
        SetCurrenType(type[2]);
        console.log(currenType)
        break;
      case "canvas":
        SetCurrenType(type[3]);
        console.log(currenType)
        break;
      default:
        SetCurrenType(type[0]);
        console.log(currenType)
        break;
    }
};


type cell = {
id: number,
row: number,
col: number,
masterId: number,
merged: boolean,
selected: boolean,
type: "empty" | "image" | "text";
};


const [Cells, SetCells] = useState<cell[]>(
  Array.from({ length: 6 }, (_, i) => ({
    div: i,
    id: i,
    row: 0,
    col: i,
    masterId: i,
    merged: false,
    type: "empty",
    selected: false,
})));

const ToggleGlobalSelection = () => {
  SetCells(prev =>
    prev.map(cell => ({
      ...cell,
      selected: !cell.selected
    }))
  );
console.log("Selected cell")
};


const ToggleIndividualSelection = (id: number) => {

    SetCells(e =>(e.map(cell =>
      cell.id === id ? { ...cell, selected: !cell.selected } : cell,
      console.log("Selected cell: " + id)
    )
  )
)
};

const HandleMerge = (id: number, col: number) => {
    const Fila = Math.floor(id / 2);
    const Columna = id % 2;

    const neighborCol = Columna + 1;
    const neighborId = Fila * col + neighborCol;

};





  return (
    <div className="p-10 text-black text-2xl pt-25">
      <div>🧪 Hello from DEV page!</div>
      





      <div className="pt-8 bg-amber-500 grid grid-cols-2 gap-6">


        <div className="bg-red-400 rounded-xl ">

          <div  onClick={ToggleSelection} className="text-center hover:bg-amber-300 rounded-xl" >
        
        {IsSelected ? 'Selected' : 'Not Selected'}, 
        {currenType}

          </div>

        </div>

        <div className="bg-red-400 rounded-xl">

          <div className="text-center hover:bg-amber-300">

            inside card 

          </div>

        </div>

        <div className="bg-red-400 rounded-xl ">

          <div className="text-center hover:bg-amber-300">

            inside card 

          </div>

        </div>
        <div className="bg-red-400 rounded-xl ">

          <div className="text-center hover:bg-amber-300">

            inside card 

          </div>

        </div>
        



      </div>


      <div className="pt-8 bg-amber-400">
page2
      </div>


      <div className='pt-3 bg-amber-200 rounded-xl my-8'>
        <div className='text-center'>opcion 2 - mapping</div>

        <div className='grid grid-cols-2 grid-rows-3 place-items-center gap-4'>

          {Cells.map((cell) => (
            <div key={cell.id} className='bg-slate-200 p-4 rounded-xl shadow w-1/5 hover:bg-slate-300 select-none' onClick={() => ToggleIndividualSelection(cell.id)}>

              Cell {cell.id},

              {cell.selected ? "s" : "n"}

            </div>

                        

          ))}

        </div>

      </div>



      <div className="flex bg-blue-400 rounded-xl mt-12 gap-8 items-center justify-center-safe  
        fixed bottom-0 left-0 w-full z-50 shadow-md p-4">

        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Merge</button>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        onClick={() => setType("img")}>Type Image</button>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        onClick={() => setType("text")}>Type Text</button>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        onClick={() => setType("canvas")}>Type Canvas</button>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={ToggleGlobalSelection}>Select All</button>
        
      </div>

      

    
    </div>

  );}
