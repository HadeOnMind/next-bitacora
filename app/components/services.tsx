import styles from "@/app/ui/services.module.css";
import { HiSquare3Stack3D } from "react-icons/hi2";

export default function Services() {
  return (
    <div
      className={`pt-16 min-h-screen bg-slate-100 text-slate-800 ${styles.servicesWrapper}`}
    >
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold mb-2">Our Services</h1>
        <p className="text-lg text-slate-600">
          Explore the core features we provide to help you succeed
        </p>
      </header>

      <main className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-6 max-w-5xl mx-auto">
        <div className="bg-cyan-200 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold text-cyan-800 mb-2">
            Creative Notebook System
          </h2>
          <p className="text-slate-700">
            Organize your stories, designs, or ideas into structured digital
            notebooks.
          </p>
        </div>

        <div className="bg-cyan-50 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold text-cyan-800 mb-2">
            Character & Lore Builder
          </h2>
          <p className="text-slate-700">
            Build characters, species, cities, and more with interconnected
            relationships.
          </p>
        </div>

        <div className="bg-cyan-200 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold text-cyan-800 mb-2">
            World Categorization
          </h2>
          <p className="text-slate-700">
            Create planets, regions, and locations using customizable
            categories.
          </p>
        </div>

        <div className="bg-cyan-50 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 ease-in-out">
          <h2 className="text-2xl font-semibold text-cyan-800 mb-2">
            Progress Tracker
          </h2>
          <p className="text-slate-700">
            Keep track of your development goals and project progress visually.
          </p>
        </div>
      </main>

      <div className="flex items-center justify-center">
        <div className="h-1 w-1/2 my-12 bg-slate-500 shadow-[0_4_20px_rgba(100,116,139,0.7)] rounded-full" />
      </div>

      <div className="flex items-center justify-center">
        <div className="flex w-1/2 align-middle justify-center items-center">
          <span className="pr-4">
            <HiSquare3Stack3D className="w-60 h-60 text-cyan-700  hover:text-cyan-600 transition-colors duration-300 rounded-2xl" />
          </span>
          <div className="p-4 rounded-xl hover:shadow-[14px_12px_30px_5px_#81e6d9] transition-shadow duration-300 ease-in-out bg-blend-overlay ">
            <h2 className="font-stretch-105%">Layers Capacity</h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            alias eius libero, nobis perferendis sit perspiciatis. Ipsa,
            delectus quidem ipsam voluptatem quo amet, quam similique laborum
            natus sapiente eveniet culpa.
          </div>
        </div>
      </div>

      <footer className="text-center py-10 mt-16 border-t border-slate-200 text-sm text-slate-500">
        © {new Date().getFullYear()} Bitácora Web App — All rights reserved.
      </footer>
    </div>
  );
}
