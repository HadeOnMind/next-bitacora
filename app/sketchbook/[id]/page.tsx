"use client";
import { useRef } from "react";
import ChangeDeploy from "@/app/components/bitacora-layouts/buttons/ChangeDeployPage";
import ListDeploy from "@/app/components/bitacora-layouts/buttons/ListDeployPage";
import Mainbook from "@/app/components/bitacora-main/sketchbook";
import { useCellActions } from "@/app/store/sketchbookStore";




type PageProps = {
  params: { id: string };
  searchParams?: { title?: string; desc?: string };

};

type SketchbookPage = {
onMerge: () => void;
};






export default function SketchbookPage({onMerge}: SketchbookPage) {

  const mainBookRef = useRef<any>(null);
  const setSetType = useCellActions((s) => s.setSetType)

  return (
    <div className="min-h-screen bg-stone-100 font-sans p-4 pt-24">

      <div className="bg-white rounded-xl shadow-md p-4 h-[80vh] flex flex-col justify-between">
        
     
        <div className="bg-blue-100 p-2 rounded-md">
          <p>Top annotations / indicators</p>
        </div>

        
        <div className="flex-grow bg-white border border-dashed border-gray-300 my-4 flex items-center justify-center">

            <Mainbook
            ref={mainBookRef}
            />

        </div>


        <div className="bg-[#f3e8d5] p-3 rounded-xl flex gap-4 border-2 border-[#d8b17b] shadow-md items-center">

            <ListDeploy
            ></ListDeploy>


          <div className="bg-[#e5c9a4] rounded-xl shadow px-4 py-2 hover:bg-[#dcb991] transition">
            <button className="text-[#3e3e3e] font-medium" onClick={() => mainBookRef.current?.UnmergeSelected()}>Unmerge</button>
          </div>

          <div className="bg-[#d6c7b0] rounded-xl shadow px-4 py-2 hover:bg-[#cbb89d] transition">
            <button className="text-[#3e3e3e] font-medium">Theme</button>
          </div>

          <div className="flex-grow border-t border-dashed border-[#c0a97d] mx-2 text-center text-sm italic text-[#8c7753]">
            Panel
          </div>

          <div className="bg-[#d3d1cb] rounded-xl shadow px-4 py-2 hover:bg-[#c7c5be] transition">
            <button className="text-[#3e3e3e] font-medium">Comments</button>
          </div>
          
          <ChangeDeploy></ChangeDeploy>

          <div className="bg-[#c7e6c4] rounded-xl shadow px-4 py-2 hover:bg-[#b3dbb0] transition">
            <button className="text-[#3e3e3e] font-medium" onClick={() => mainBookRef.current?.MergeSelected()}>Merge</button>
          </div>

          <div className="bg-[#c7e6c4] rounded-xl shadow px-4 py-2 hover:bg-[#b3dbb0] transition">
            <button className="text-[#3e3e3e] font-medium">Add</button>
          </div>

        </div>

      </div>
    </div>
  );
}
