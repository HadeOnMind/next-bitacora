import styles from "@/app/ui/services.module.css";
import DefaultCard from "@/app/components/defaultcard"
import { FaBookOpen, FaWrench, FaPalette, FaLock, FaMapMarkedAlt, FaIndustry, FaPencilRuler } from "react-icons/fa";
import Link from 'next/link';


export default function DashboardPage() {
      

const features = [
    {
      icon: <FaBookOpen className="text-cyan-300 w-6 h-6" />,
      title: "Sketchbook Creation",
      desc: "Start new books with custom categories, pages, and styles."
    },
    {
      icon: <FaMapMarkedAlt className="text-cyan-300 w-6 h-6" />,
      title: "Intuitive Navigation",
      desc: "Quickly access your projects with smart layout panels."
    },
    {
      icon: <FaPalette className="text-cyan-300 w-6 h-6" />,
      title: "Mixed Media Support",
      desc: "Add text, images, or drawings to each section."
    },
    {
      icon: <FaLock className="text-cyan-300 w-6 h-6" />,
      title: "Private & Organized",
      desc: "Your data is yours—secure and easy to browse."
    },
    {
      icon: <FaWrench className="text-cyan-300 w-6 h-6" />,
      title: "Creative Flow Tools",
      desc: "Structure characters, species, or planets for worldbuilding."
    },
    {
      icon: <FaIndustry className="text-cyan-300 w-6 h-6" />,
      title: "More coming soon",
      desc: "We are actively working on more and more features."
    }
  ];



  const refItems = [
    { label: 'Go to Bitacoras Workspace', href: '/workspace' }
  ];
  

  return (
    <div className={`pt-8 min-h-screen bg-slate-100 text-slate-800 ${styles.servicesWrapper}`}>

      <header className="text-center py-10">
        <h1 className="text-7xl font-bold mb-2">Bitacora</h1>
        <p className="text-lg text-slate-800">
            work in progress...
        </p>
      </header>


      {/*SEPARACION!!!! */}
        <div className="flex items-center justify-center">
          <div className="h-1 w-1/6 my-12 bg-slate-400 shadow-[0_4_20px_rgba(100,116,139,0.7)] rounded-full" />
        </div>
      {/*SEPARACION!!!! */}


        <div className="flex justify-center items-center">
        <div className="w-1/2 text-center">

                <div className="p-4 hover:shadow-lg hover:rounded-xl transition-shadow">
                <h2 className="text-3xl font-semibold text-cyan-900 mb-2">
                    WorkSpace
                </h2>
                <p className="text-slate-700 font-light">
                    In the WorkSpace, there will be no limits for your <span className="italic">imagination</span>,
                    incluiding multiple features, such as free will to create all the
                    sketchbooks you desire...
                </p>
                </div>  

        </div>
        </div>



        <div className="flex gap-6 justify-center items-center pt-8">

          
          <div className="grid gap-6 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
            {features.map((f, i) => (
              <div key={i} className="bg-cyan-500 rounded-xl p-6 shadow-lg hover:shadow-cyan-500/30 transition group ">
                <div className="flex items-center gap-4 mb-3">
                  {f.icon}
                  <h3 className="text-xl font-bold text-rose-200 group-hover:text-cyan-300 transition">
                    {f.title}
                  </h3>
                </div>
                <p className="text-slate-50 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
          

        </div>


      <div className="flex flex-col items-center justify-center pt-12 px-4 text-center">
          <h3 className="italic font-semibold text-2xl text-slate-700 ">
            Let’s get started...
          </h3>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6 bg-slate-100 px-6 py-4 rounded-xl shadow-lg border border-slate-300">
            <FaPencilRuler className="text-cyan-500 w-8 h-8" />

            <div className="flex gap-3">
              {refItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 rounded-md bg-cyan-400 text-white font-medium shadow hover:bg-cyan-600 hover:shadow-cyan-400/40 transition"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

      

      {/*SEPARACION!!!! */}
      <div className="flex items-center justify-center">
        <div className="h-1 w-1/4 my-12 bg-slate-500 shadow-[0_4_20px_rgba(100,116,139,0.7)] rounded-full" />
      </div>
      {/*SEPARACION!!!! */}


      <div className="flex items-center justify-center">
        <DefaultCard/>
      </div>

      <div className="flex items-center justify-center pt-16">
        <DefaultCard/>
      </div>

      <footer className="text-center py-10 mt-16 border-t border-slate-200 text-sm text-slate-500">
        © {new Date().getFullYear()} Bitácora Web App — All rights reserved.
      </footer>
    </div>
  );
}