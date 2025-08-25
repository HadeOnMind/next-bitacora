'use client';
import { forwardRef, useImperativeHandle, useState } from 'react';
import { userAgent } from 'next/server';
import { stringify } from 'querystring';
import { text } from 'stream/consumers';
import { twMerge } from 'tailwind-merge';
import { useCellActions } from '@/app/store/sketchbookStore';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { Lora, Patrick_Hand } from "next/font/google";
import styles from "@/app/ui/sketchbook.module.css";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lora",
});

const patrick = Patrick_Hand({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-patrick",
});


const sketchbook = forwardRef((props, ref) => {
const setSetType = useCellActions((s) => s.setSetType)

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
const PageCount = 7;
const PagecountIdrest = PageCount - 1;

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
const SelectedCells = Cells.filter(cell => cell.selected);


{/*
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
*/}




const setType = useCallback((type: "text" | "image" | "canvas" | "empty") => {
  const SelectedCells = Cells.filter(cell => cell.selected);

  if (!SelectedCells) {
    console.log("No selected cells to apply type.");
    return;
  }
  SetCells(prev =>
    prev.map(cell => {
      if (cell.selected && cell.type !== type) {
        console.log(`Cell ${cell.id} type changed from ${cell.type} to ${type}`);
        return { ...cell, type };
      }
      return cell;
    })
  );

  SetCurrenType(type);
}, []);







const UnmergeSelected = () => { 
  const selectedCells = Cells.filter(cell => cell.selected);
  const mergedSelectedCells = Cells.some(cell => cell.merged && cell.selected);
  const masterIds = new Set( selectedCells.filter(cell => cell.merged).map(cell => cell.masterId) );

  if (!mergedSelectedCells) { alert("One of the selected cells is already unmerged"); } 
  else if 
  (selectedCells.length === 0)
  { alert("Select at least one merged cell to unmerge.");
  return; } else if (masterIds.size === 0) { alert("No merged cells selected.");
    return;
      } SetCells(prev => prev.map(cell => { if (masterIds.has(cell.masterId)) { return { ...cell, span: "empty", merged: false, hidden: false, masterId: cell.id, selected: false };
    } return cell; }) );
  console.log("Unmerged cells with masterIds:", [...masterIds].join(", "));
};



  useImperativeHandle(ref, () => ({
    MergeSelected,
    UnmergeSelected,
    setType
  }));


  useEffect(() => {
    setSetType(setType)
  }, [setSetType])



return (
<div className={`${styles.rim} rounded-2xl bg-[#f6efe0] shadow-xl p-4 relative`}>

      <div className={styles.stain} />

      <div className="flex gap-8 items-start justify-center">
        {/* Left Page */}
        <div className={`${styles.pageInner} ${styles.paperTexture} rounded-xl border-2 border-[#d6b48a] p-6 max-w-[520px] w-full`}>
          <div className="relative">
            <div className="absolute -left-4 top-6 w-6 h-12 rounded-sm bg-[#dcb67a] opacity-10 transform rotate-3" />
            <div className="absolute left-3 top-6 w-1 h-8 rounded bg-[rgba(0,0,0,0.03)]" />
            <div className={`${styles.cornerCurl}`} />
          </div>

          <div className="grid grid-cols-2 grid-rows-[100px_100px_100px] gap-4">
            {Cells.filter(cell => cell.page === currentLeftPage && !cell.hidden).map((cell) =>
              !cell.hidden && (
                <div
                  key={cell.id}
                  className={twMerge(
                    "relative bg-[#fff7ea] p-4 rounded-lg shadow-sm border border-[#e1ccb0] hover:translate-y-[-2px] transition-transform duration-180",
                    cell.span !== "empty" ? cell.span : "col-span-1",
                    cell.selected ? "ring-4 ring-[#b7e3b6] ring-offset-2 ring-offset-[#fff6ea] shadow-[inset_0_6px_12px_rgba(0,0,0,0.05)]" : ""
                  )}
                  onClick={() => ToggleIndividualSelection(cell.id)}
                >
                  <div className="text-xs serifTitle text-[#6b4f33] mb-2 select-none">
                    <span className="font-semibold">{`Page ${currentLeftPage}`}</span> — Cell {cell.id} /{" "}
                    <span className="text-[#7d5b3a]">{cell.type}</span>
                  </div>

                  {cell.type === "text" && (
                    <textarea
                      placeholder="Write your note..."
                      className="flex-grow w-full p-3 rounded bg-[#fff5e8] border border-[#e7d6be] resize-none text-[#3c2f23] shadow-inner"
                      style={{ fontFamily: "'Patrick Hand', cursive", fontSize: 15, minHeight: "64px" }}
                    />
                  )}

                  {cell.type === "image" && (
                    <textarea
                      placeholder="Image URL or description"
                      className="w-full h-full p-2 rounded bg-[#fff5e8] border border-[#e7d6be] resize-none text-[#3c2f23] shadow-inner text-sm"
                    />
                  )}

                  {cell.type === "canvas" && (
                    <canvas width={300} height={150} className="border border-[#b49f89] bg-[#fdf7ea] rounded shadow-inner" />
                  )}
                </div>
              )
            )}
          </div>
        </div>


        {/* Gutter stitching */}

        <div className={styles.binding} />


        {/* Right Page */}

        <div className={`${styles.pageInner} ${styles.paperTexture} rounded-xl border-2 border-[#d6b48a] p-6 max-w-[520px] w-full`}>
          <div className="relative">
            <div className={`${styles.cornerCurl} right-12 top-12`} />
          </div>

          <div className="grid grid-cols-2 grid-rows-[100px_100px_100px] gap-4">
            {Cells.filter(cell => cell.page === currentRightPage && !cell.hidden).map((cell) =>
              !cell.hidden && (
                <div
                  key={cell.id}
                  className={twMerge(
                    "relative bg-[#fff7ea] p-4 rounded-lg shadow-sm border border-[#e1ccb0] hover:translate-y-[-2px] transition-transform duration-180",
                    cell.span !== "empty" ? cell.span : "col-span-1",

                    cell.selected ? "ring-4 ring-[#b7e3b6] ring-offset-2 ring-offset-[#fff6ea] shadow-[inset_0_6px_12px_rgba(0,0,0,0.05)]" : ""
                  )}
                  onClick={() => ToggleIndividualSelection(cell.id)}
                >
                  <div className="text-xs serifTitle text-[#6b4f33] mb-2 select-none">
                    <span className="font-semibold">{`Page ${currentRightPage}`}</span> — {`Cell ${cell.id}`} / <span className="text-[#7d5b3a]">{cell.type}</span>
                  </div>

                  {cell.type === "text" && (
                    <textarea
                      placeholder="Write your note..."
                      className="w-full h-full p-2 rounded bg-[#fff5e8] border border-[#e7d6be] resize-none text-[#3c2f23] shadow-inner"
                      style={{ minHeight: 64, fontFamily: "'Patrick Hand', cursive", fontSize: 15 }}
                    />
                  )}

                  {cell.type === "image" && (
                    <textarea
                      placeholder="Image URL or description"
                      className="w-full h-full p-2 rounded bg-[#fff5e8] border border-[#e7d6be] resize-none text-[#3c2f23] shadow-inner text-sm"
                    />
                  )}

                  {cell.type === "canvas" && (
                    <canvas width={300} height={150} className="border border-[#b49f89] bg-[#fdf7ea] rounded shadow-inner" />
                  )}
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Controls + handwritten footer */}

      <div className="flex justify-between mt-6 items-center px-6">
        <button 
        onClick={ChangePrev} 
        disabled={currentLeftPage === 0} 
        className="disabled:opacity-50 bg-[#cfe7c8] rounded-xl shadow px-4 py-2 hover:bg-[#bfe0b5] transition">
          ← Previous
        </button>

        <div className={`${styles.handFooter} inline-block border-b border-dotted border-[#d1b38a] px-6 py-2`}>

          <span >Pages {currentLeftPage + 1} &amp; {currentRightPage + 1} of {PageCount}</span>

        </div>

        <button 
        onClick={ChangeNext} 
        disabled={currentRightPage >= PagecountIdrest} 
        className="disabled:opacity-50 bg-[#cfe7c8] rounded-xl shadow px-4 py-2 hover:bg-[#bfe0b5] transition">
          Next →
        </button>
      </div>

    </div>
    )
  }
);

export default sketchbook;