"use client"
import { useState } from 'react';



export default function DevPage() {

const [IsSelected, setIsSelected] = useState(false);

const ToggleSelection = () => {
setIsSelected(!IsSelected);
if(IsSelected){
  alert("SELECCIONADO")
}
};




  return (
    <div className="p-10 text-black text-2xl pt-25">
      🧪 Hello from DEV page!





      <div className="pt-8 bg-amber-500 grid grid-cols-2 gap-6">


        <div className="bg-red-400 rounded-xl ">

          <div  onClick={ToggleSelection} className="text-center hover:bg-amber-300 ${
        isSelected ? 'bg-green-600' : 'bg-gray-400'
      }`" >
        
        {IsSelected ? 'Selected' : 'Not Selected'}

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
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Type Image</button>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Type Text</button>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Type Canvas</button>
      </div>


    </div>
  );
}
