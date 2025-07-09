"use client"
import { userAgent } from 'next/server';
import { stringify } from 'querystring';
import { useState } from 'react';
import { text } from 'stream/consumers';

export default function DevPage() {

const [Merging, setMerging] = useState(false);

const MergingSet = () => {
  setMerging(!Merging)

  if(Merging){
    console.log("Merging activated")
  } else {
    console.log("Merging Deactivated")
  }
};

const type = ["none",
  "text",
  "img",
  "canvas",
];

type cell = {
id: number,
row: number,
col: number,
masterId: number,
merged: boolean,
selected: boolean,
span: string,
hidden: boolean,
type: "empty" | "image" | "text" | "canvas",
};

const rowCount = 2;
const colCount = 3;

const [Cells, SetCells] = useState<cell[]>(
  Array.from({ length: rowCount * colCount }, (_, i) => ({
    div: i,
    id: i,
    row: Math.floor(i / colCount),
    col: i % colCount,
    masterId: i,
    merged: false,
    type: "empty",
    span: "empty",
    hidden: false,
    selected: false,
})));

type pages = {
  id: Number,
  idBook: Number,
  masterId: Number,
  active: Boolean,
  widht: Number,
  height: Number
};

type books = {
  id: Number,
  user: String,
  pages: Number,
  name: String,
  createdAt: String,
  updatedAt: String,
};


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

    SetCells(p => p.map(cell =>
      cell.id === id ? { ...cell, selected: !cell.selected } : cell,
    )
  )

  const selectedCell = Cells[id];

  if (selectedCell.selected) {
      console.log("Unselected cell: " + id)
  } else {
        console.log("Selected cell: " + id)
  }

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
            masterId: cell.id
          };
        }
        return cell;
      })
    );
  }
};

const areCellsContiguous = (selected: cell[]) => {
  const sameRow = selected.every(c => c.row === selected[0].row);
  const sorted = [...selected].sort((a, b) => a.col - b.col);
  const contiguous = sorted.every((c, i) =>
    i === 0 || c.col === sorted[i - 1].col + 1
  );
  return sameRow && contiguous;
};


const [currenType, SetCurrenType] = useState<"text" | "image" | "canvas" | "empty">("empty");

const setType = (type: "text" | "image" | "canvas" | "empty") => {
  const SelectedCells = Cells.some(cell => cell.selected);



  if (!SelectedCells) {
    console.log("No selected cells to apply type.");
    return;
  }

  SetCells(prev =>
    prev.map(cell => {
      if (cell.selected) {
        console.log(`Cell ${cell.id} type set to: ${type}`);
        return { ...cell, type };
      }
      return cell;
    })
  );

  SetCurrenType(type);
};



  return (
    <div className="p-10 text-black text-2xl pt-25">
      <div>🧪 Hello from DEV page!</div>

      <div className='text-center'>opcion 1 - mapping</div>


      <div className='pt-3 bg-amber-200 rounded-xl my-8 pb-3'>
         

       <div className='grid grid-cols-2 grid-rows-3 gap-2 max-w-4xl mx-auto'>
          {Cells.map((cell) =>
            !cell.hidden && (
              <div
                key={cell.id}
                className={`bg-slate-200 p-4 rounded-xl shadow hover:bg-slate-300 select-none h-full w-full
                  ${cell.span !== "empty" ? cell.span : "col-span-1 place-items-center "} ${cell.hidden ? "hidden" : ""} ${cell.selected ? "border-4 border-emerald-500" : ""}`}
                onClick={() => ToggleIndividualSelection(cell.id)}
              >
                Cell {cell.id}, {cell.selected ? "✓" : " "} { cell.type}
              </div>
            )
          )}
        </div>

      </div>

      <div className='pt-3 bg-amber-200 rounded-xl my-8 pb-4'>
        <div className='text-center'>opcion 2 - checkbox merge</div>

        <div className='grid grid-cols-2 grid-rows-3 place-items-center gap-3'>
          {Cells.map((cell) =>
            !cell.hidden && (
              <div
                key={cell.id}
                className={`select-none 
                  ${cell.span !== "empty" ? cell.span : "col-span-1"} ${cell.hidden ? "hidden" : ""} ${Merging ? 'bg-slate-400 p-4 rounded-xl shadow-2xl' : 'bg-slate-200 p-4 rounded-xl shadow hover:bg-slate-300 select-none w-1/4'}`}
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
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={MergingSet} >Merge2</button>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        onClick={() => setType("image")}>Type Image</button>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        onClick={() => setType("text")}>Type Text</button>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        onClick={() => setType("canvas")}>Type Canvas</button>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={ToggleGlobalSelection}>Select All</button>
        
      </div>
    
    </div>

  );}
