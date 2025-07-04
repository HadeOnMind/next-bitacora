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
span: string,
hidden: boolean,
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
    span: "empty",
    hidden: false,
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



const HandleMerge = (id: number, colCount: number) => {
  console.log("Attempting merge for ID:", id);

  SetCells(prev => {
    const updated = [...prev];
    const current = updated.find(cell => cell.id === id);
    if (!current) return updated;



    const { row, col } = current;
    const neighborCol = col + 1;

    const neighbor = updated.find(c => c.row === row && c.col === neighborCol);
    if (!neighbor) {
      console.log("No valid neighbor to the right for merging");
      return updated;
    }

    return updated.map(cell => {
      if (cell.id === current.id) {
        return {
          ...cell,
          span: "col-span-2",
          merged: true,
          masterId: current.id
        };
      }
      if (cell.id === neighbor.id) {
        return {
          ...cell,
          hidden: true,
          merged: true,
          masterId: current.id
        };
      }
      return cell;
    });
  });
};


const MergeSelected = () => {
  const selected = Cells.find(cell => cell.selected);

  if (!selected) {
        console.log("No cell selected to merge from.");
        return;
  }

  if (!selected.merged) {
    HandleMerge(selected.id, 2);
  } else {
    const masterId = selected.masterId
    
     SetCells(prev =>
      prev.map(cell => {
        if (cell.masterId === masterId) {
          return {
            ...cell,
            span: "empty",
            merged: false,
            hidden: false,
            masterId: cell.id // reset master
          };
        }
        return cell;
      })
    );
  }
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
          {Cells.map((cell) =>
            !cell.hidden && (
              <div
                key={cell.id}
                className={`bg-slate-200 p-4 rounded-xl shadow hover:bg-slate-300 select-none ${cell.span !== "empty" ? cell.span : "col-span-1"} ${cell.hidden ? "hidden" : ""}`}
                onClick={() => ToggleIndividualSelection(cell.id)}
              >
                Cell {cell.id}, {cell.selected ? "s" : "n"}
              </div>
            )
          )}
        </div>

      </div>



      <div className="flex bg-blue-400 rounded-xl mt-12 gap-8 items-center justify-center-safe  
        fixed bottom-0 left-0 w-full z-50 shadow-md p-4">

        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={MergeSelected} >Merge</button>
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
