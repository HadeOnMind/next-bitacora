"use client"
import HorzNavbar from "../components/hnavbar";
import Sidebar from "@/app/components/bitacora-layouts/b-sidebar-layout";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";




export default function WorkspaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {

const pathname = usePathname();
const inSketchbook = pathname?.includes('/sketchbook/');

  return (

    <div className={twMerge("flex flex-row h-screen", inSketchbook ? "" : "")}>
        
      <HorzNavbar />

      <div className="flex flex-1 overflow-hidden">
         
       <Sidebar /> 

        <main className="flex-1 overflow-y-auto p-6 bg-gray-100">
          {children}
        </main>

      </div>
    </div>
  );
}

