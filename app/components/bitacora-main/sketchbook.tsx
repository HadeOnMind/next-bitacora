'use client';
import { forwardRef, useImperativeHandle, useState } from 'react';
import { userAgent } from 'next/server';
import { stringify } from 'querystring';

import { text } from 'stream/consumers';
import { twMerge } from 'tailwind-merge';


export default function sketchbook() {

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
page: number;
merged: boolean,
selected: boolean,
span: string,
hidden: boolean,
type: "empty" | "image" | "text" | "canvas",
canMerge: boolean,
};

const rowCount = 3;
const colCount = 2;
const PageCount = 6;

const [Cells, SetCells] = useState<cell[]>(
  Array.from({ length: rowCount * colCount * PageCount }, (_, i) => {
    const cellsPerPage = rowCount * colCount;
    const page = Math.floor(i / cellsPerPage);
    const localIndex = i % cellsPerPage;

    return {
      div: i,
      id: i,
      page,
      row: Math.floor(localIndex / colCount),
      col: localIndex % colCount,
      masterId: i,
      merged: false,
      type: "empty",
      span: "empty",
      hidden: false,
      canMerge: false,
      selected: false,
    };
  })
);


const [pages, setPages] = useState<number[]>([0, 1]);

const addPage = () => {
  const newPage = pages.length;
  setPages([...pages, newPage]);
};

const [currentPages, setCurrentPages] = useState(0);
const [currentLeftPage, setCurrentLeftPage] = useState(0);
const [currentRightPage, setCurrentRightPage] = useState(1);

const visibleLeftCells = Cells.filter(cell => cell.page === currentLeftPage && !cell.hidden);
const visibleRightCells = Cells.filter(cell => cell.page === currentRightPage && !cell.hidden);


const ChangeNext = () => {

    setCurrentLeftPage(currentLeftPage + 2);
  
    setCurrentRightPage(currentRightPage + 2);

    console.log("changed pages to", currentLeftPage, currentRightPage)


};

const ChangePrev = () => {

    setCurrentLeftPage(currentLeftPage - 2);
  
    setCurrentRightPage(currentRightPage - 2);

    console.log("changed pages to", currentLeftPage, currentRightPage)


};




const ToggleGlobalSelection = () => {
  SetCells(prev =>
    prev.map(cell => ({
      ...cell,
      selected: !cell.selected,
      canMerge: false,
      
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


const MergeSelected = () => {
  const selectedCells = Cells.filter(cell => cell.selected);
  const mergedCells = Cells.some(cell => cell.merged)
  const mergedSelectedCells = Cells.some(cell => cell.merged && cell.selected)


  if (selectedCells.length < 2 && mergedSelectedCells) {
    alert("The selected cell is already merged!!");
    return;
  } else if (selectedCells.length < 2) {
    alert("Not enough cells selected");
    return;
  }


  if (mergedSelectedCells) {
    alert("One or many cells are already merged");
    return;
  }


  if (!areCellsContiguousX(selectedCells) && !areCellsContiguousY(selectedCells ) && !areCellsContiguousXY(selectedCells)) {
    alert("Selected cells are not contiguous in the same row.");
    return;
  }




  let spanClass = "empty";
  const master = selectedCells[0];


  if (areCellsContiguousXY(selectedCells)) {
    const cols = new Set(selectedCells.map(c => c.col)).size;
    const rows = new Set(selectedCells.map(c => c.row)).size;
    spanClass = `col-span-${cols} row-span-${rows}`;
  } else if (areCellsContiguousX(selectedCells)) {
    spanClass = `col-span-${selectedCells.length}`;
  } else if (areCellsContiguousY(selectedCells)) {
    spanClass = `row-span-${selectedCells.length}`;
  }





  SetCells(prev =>
    prev.map(cell => {
      if (selectedCells.some(sc => sc.id === cell.id)) {
        if (cell.id === master.id) {
          return {
            ...cell,
            span: spanClass,
            merged: true,
            masterId: master.id,
            type: 'empty'
          };
        } else {
          return {
            ...cell,
            hidden: true,
            span: 'col-span-0 row-span-0',
            merged: true,
            masterId: master.id,
            selected: false
          };
        }
      }
      return cell;
    })
  );



  if (selectedCells.length === 0) {
    alert("Select at least one merged cell to unmerge.");
    return;
  }
};



const areCellsContiguousX = (selected: cell[]) => {

  const sameRow = selected.every(c => c.row === selected[0].row);
  const sorted = [...selected].sort((a, b) => a.col - b.col);

  const contiguous = sorted.every((c, i) =>
    i === 0 || c.col === sorted[i - 1].col + 1
);

  return sameRow && contiguous;

};


const areCellsContiguousY = (selected: cell[]) => {
  const sameCol = selected.every(c => c.col === selected[0].col);
  const sorted = [...selected].sort((a, b) => a.row - b.row);

  const contiguous = sorted.every((c, i) =>
    i === 0 || c.row === sorted[i - 1].row + 1
  );

  return sameCol && contiguous;
};

const areCellsContiguousXY = (selected: cell[]) => {
  if (selected.length < 2) return false;

  const rows = [...new Set(selected.map(c => c.row))].sort((a, b) => a - b);
  const cols = [...new Set(selected.map(c => c.col))].sort((a, b) => a - b);

  const rowsContiguous = rows.every((r, i) =>
    i === 0 || r === rows[i - 1] + 1
  );
  const colsContiguous = cols.every((c, i) =>
    i === 0 || c === cols[i - 1] + 1
  );

  const expectedCount = rows.length * cols.length;

  return rowsContiguous && colsContiguous && selected.length === expectedCount;
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


const UnmergeSelected = () => {
  const selectedCells = Cells.filter(cell => cell.selected);
  const mergedSelectedCells = Cells.some(cell => cell.merged && cell.selected)
  const masterIds = new Set(
      selectedCells.filter(cell => cell.merged).map(cell => cell.masterId)
    );


  if (!mergedSelectedCells) {
    alert("One of the selected cells is already unmerged");
  } else if (selectedCells.length === 0) {
    alert("Select at least one merged cell to unmerge.");
    return;
  } else if (masterIds.size === 0) {
    alert("No merged cells selected.");
    return;
  } 

  

  SetCells(prev =>
    prev.map(cell => {
      if (masterIds.has(cell.masterId)) {
        return {
          ...cell,
          span: "empty",
          merged: false,
          hidden: false,
          masterId: cell.id,
          selected: false
        };
      }
      return cell;
    })
  );

  console.log("Unmerged cells with masterIds:", [...masterIds].join(", "));
};




return (
<div className="rounded-2xl bg-[#fdf6e3] shadow-xl p-4 border-4 border-[#e0c097]">

  <div className="flex gap-10">



    {/* Left Page */}
    <div className="grid grid-cols-2 grid-rows-[100px_100px_100px] gap-4 max-w-4xl w-full bg-[#fefaf1] p-6 rounded-xl border-2 border-[#d8b17b] shadow-inner">
      {Cells.filter(cell => cell.page === currentLeftPage && !cell.hidden).map((cell) =>
        !cell.hidden && (
          <div
            key={cell.id}
            className={twMerge(`
              bg-[#f9f3e8] p-4 rounded-lg shadow-sm border border-[#cab38a] hover:bg-[#f6eddd] transition
              ${cell.span !== "empty" ? `${cell.span}` : "col-span-1"}
              ${cell.hidden ? "hidden" : ""}
              ${cell.selected ? "border-4 border-emerald-500" : ""}
            `)}
            onClick={() => ToggleIndividualSelection(cell.id)}
          >
            <div className="text-sm font-semibold text-[#5e503f] mb-2">
              Cell {cell.id} , {cell.type}
            </div>

            {cell.type == "text" && (
              <textarea
                placeholder="Place some text here"
                className="w-full h-full p-2 rounded bg-[#fffaf3] border border-[#e1d5c5] resize-none text-[#3b3b3b] shadow-inner"
              />
            )}
            {cell.type == "image" && (
              <textarea
                placeholder="Place image URL or description"
                className="w-full h-full p-2 rounded bg-[#fffaf3] border border-[#e1d5c5] resize-none text-[#3b3b3b] shadow-inner"
              />
            )}
            {cell.type == "canvas" && (
              <canvas
                width={300}
                height={150}
                className="border border-[#b49f89] bg-[#fef9ec] rounded shadow-inner"
              />
            )}
          </div>
        )
      )}
    </div>




    {/* Right Page */}
    <div className="grid grid-cols-2 grid-rows-[100px_100px_100px] gap-4 max-w-4xl w-full bg-[#fefaf1] p-6 rounded-xl border-2 border-[#d8b17b] shadow-inner">
      {Cells.filter(cell => cell.page === currentRightPage && !cell.hidden).map((cell) =>
        !cell.hidden && (
          <div
            key={cell.id}
            className={twMerge(`
              bg-[#f9f3e8] p-4 rounded-lg shadow-sm border border-[#cab38a] hover:bg-[#f6eddd] transition
              ${cell.span !== "empty" ? `${cell.span}` : "col-span-1"}
              ${cell.hidden ? "hidden" : ""}
              ${cell.selected ? "border-4 border-emerald-500" : ""}
            `)}
            onClick={() => ToggleIndividualSelection(cell.id)}
          >
            <div className="text-sm font-semibold text-[#5e503f] mb-2">
              Cell {cell.id} , {cell.type}
            </div>

            {cell.type == "text" && (
              <textarea
                placeholder="Place some text here"
                className="w-full h-full p-2 rounded bg-[#fffaf3] border border-[#e1d5c5] resize-none text-[#3b3b3b] shadow-inner"
              />
            )}
            {cell.type == "image" && (
              <textarea
                placeholder="Place image URL or description"
                className="w-full h-full p-2 rounded bg-[#fffaf3] border border-[#e1d5c5] resize-none text-[#3b3b3b] shadow-inner"
              />
            )}
            {cell.type == "canvas" && (
              <canvas
                width={300}
                height={150}
                className="border border-[#b49f89] bg-[#fef9ec] rounded shadow-inner"
              />
            )}
          </div>
        )
      )}
    </div>

  </div>

  <div className="flex justify-between mt-6">
  <button
    onClick={ChangePrev}
    disabled={currentLeftPage == 0}
    className="bg-[#c7e6c4] rounded-xl shadow px-4 py-2 hover:bg-[#b3dbb0] transition"
  >
    ← Previous
  </button>

  <span className="text-[#5e503f] font-semibold">Pages {currentLeftPage} & {currentRightPage} of {PageCount}</span>

  <button
    onClick={ChangeNext}
    disabled={currentRightPage >= PageCount}
    className="bg-[#c7e6c4] rounded-xl shadow px-4 py-2 hover:bg-[#b3dbb0] transition"
  >
    Next →
  </button>
  </div>


  <div className="hidden col-span-1 row-span-2 border border-red-500">
    force tailwind rebuild
  </div>
  
</div>


);}