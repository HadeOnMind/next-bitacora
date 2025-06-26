"use client"
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
type: "empty" | "image" | "text";
};






  return (
    <div className="p-10 text-black text-2xl pt-25">
      🧪 Hello from DEV page!





      <div className="pt-8 bg-amber-500 grid grid-cols-2 gap-6">


        <div className="bg-red-400 rounded-xl ">

          <div  onClick={ToggleSelection} className="text-center hover:bg-amber-300 rounded-xl" >
        
        {IsSelected ? 'Selected' : 'Not Selected'}, 
        {currenType}

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
        <div className="bg-red-400 rounded-xl ">

          <div className="text-center hover:bg-amber-300">

            inside card 

          </div>

        </div>
        



      </div>


      <div className="pt-8 bg-amber-400">
page2
      </div>



      <div className="flex bg-blue-400 rounded-xl mt-12 gap-8 items-center justify-center-safe">
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Merge</button>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        onClick={() => setType("img")}>Type Image</button>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        onClick={() => setType("text")}>Type Text</button>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        onClick={() => setType("canvas")}>Type Canvas</button>
      </div>

      

    
    </div>
  );
}
