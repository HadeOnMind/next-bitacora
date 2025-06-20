import styles from "@/app/ui/services.module.css";
import { FaRegCompass } from "react-icons/fa";
import { HiOutlineBookOpen } from "react-icons/hi";

export default function about(){
    return(

      <div
      className={`pt-8 min-h-screen bg-slate-100 text-slate-800 ${styles.servicesWrapper}`}
    >
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold mb-2">About us</h1>
        <p className="text-lg text-slate-600">
          Welcome to Bitacora, our core project!.
        </p>
      </header>

            <div className="flex items-center justify-center">
                <div className="bg-cyan-200 rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow w-1/3 h-1/4 text-center duration-500 ease-in-out">
                    <h2 className="text-2xl font-semibold text-cyan-800 mb-2">
                        Bitacora CORP
                    </h2>
                    <p className="text-slate-700">
                        Organize your stories, designs, or ideas into structured digital
                        notebooks.
                    </p>
                </div>
            </div>



<div>
<div className="flex items-center justify-center gap-6 p-6 pt-15">
  
      <div className="flex items-center justify-center">
        <div className="w-96 h-52 rounded-xl bg-cyan-50 p-4 shadow-md hover:shadow-lg transition-shadow duration-300 border border-cyan-500/30">
          
          <div className="flex items-center justify-center gap-2 mb-2">
            <FaRegCompass className="h-8 w-8 text-slate-800 drop-shadow-sm hover:hover:[filter:drop-shadow(0_0_6px_rgba(16,185,129,0.8))]" />
            <h2 className="text-slate-900 font-semibold text-lg tracking-wide [filter:drop-shadow(0_0_6px_rgba(16,185,129,0.8))]">
              Future Vision
            </h2>
          </div>

          <p className="text-center text-slate-800 text-sm leading-relaxed">
            To become the go-to platform for worldbuilding and creative documentation, helping users shape detailed, meaningful projects through structured exploration and design.
          </p>
          
        </div>
      </div>


      {/* LINEA DIVISORA */}
            <div className="flex items-center justify-center h-38">
                <div className="w-1 h-full bg-slate-500 shadow-[2px_0_5px_rgba(100,116,139,0.7)] rounded-full " />
            </div>
      {/* LINEA DIVISORA */}
      

      <div className="flex items-center justify-center">
        <div className="w-96 h-52 rounded-xl bg-cyan-50 p-4 shadow-md hover:shadow-lg transition-shadow duration-300 border border-cyan-500/30">

          <div className="flex items-center justify-center ">
            <HiOutlineBookOpen className="h-8 w-8 text-slate-800 hover:hover:[filter:drop-shadow(0_0_6px_rgba(16,185,129,0.8))]"/>
            <h2 className="text-slate-900 font-semibold text-lg tracking-wide [filter:drop-shadow(0_0_6px_rgba(16,185,129,0.8))]">Future Mision</h2>
          </div>

          <p className="text-center text-slate-800 text-sm leading-relaxed">
            Bitácora empowers creators to document, organize, and visualize their worlds through customizable digital sketchbooks. We provide intuitive tools for artists, writers, and researchers to structure ideas, characters, and discoveries in one creative space.
          </p>

        </div>
      </div>
     
</div>
</div>






        <main className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-6 max-w-5xl mx-auto pt-8">


                <div className="bg-cyan-200 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <h2 className="text-2xl font-semibold text-cyan-800 mb-2">
                    Work in progress
                </h2>
                <p className="text-slate-700">
                    Work in progress
                </p>
                </div>

                <div className="bg-cyan-200 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <h2 className="text-2xl font-semibold text-cyan-800 mb-2">
                    Work in progress
                </h2>
                <p className="text-slate-700">
                    Work in progress
                </p>
                </div>
                


        </main>

        


      <footer className="text-center py-10 mt-16 border-t border-slate-200 text-sm text-slate-500">
        © {new Date().getFullYear()} Bitácora Web App — All rights reserved.
      </footer>
    </div>
    );
}