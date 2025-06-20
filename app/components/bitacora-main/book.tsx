import card from "../defaultcard";

export default function BookWorkspace() {
  return (
    <div className="flex justify-center items-center min-h-[80vh] bg-slate-900 p-8">
      <div className="flex gap-4 shadow-lg rounded-xl border border-slate-700 p-4 bg-slate-800 max-w-5xl w-full">
        {/* Left Page */}
        <div className="flex-1 grid grid-cols-3 grid-rows-3 gap-2 p-4 bg-cyan-100/5 backdrop-blur-md rounded-lg shadow-inner">
          <div className="aspect-[2/3] bg-cyan-300/10 border border-cyan-400/20 rounded-md shadow hover:shadow-cyan-400/40 hover:ring-2 hover:ring-cyan-300 transition-all" />
          <div className="aspect-[2/3] bg-cyan-300/10 border border-cyan-400/20 rounded-md shadow hover:shadow-cyan-400/40 hover:ring-2 hover:ring-cyan-300 transition-all" />
          <div className="aspect-[2/3] bg-cyan-300/10 border border-cyan-400/20 rounded-md shadow hover:shadow-cyan-400/40 hover:ring-2 hover:ring-cyan-300 transition-all" />
          {/* Add more cells individually later */}
        </div>

        {/* Book Divider */}
        <div className="w-1 bg-gradient-to-b from-cyan-500/50 to-slate-400/30 rounded-full shadow-md" />

        {/* Right Page */}
        <div className="flex-1 grid grid-cols-3 grid-rows-3 gap-2 p-4 bg-cyan-100/5 backdrop-blur-md rounded-lg shadow-inner">
          <div className="aspect-[2/3] bg-cyan-300/10 border border-cyan-400/20 rounded-md shadow hover:shadow-cyan-400/40 hover:ring-2 hover:ring-cyan-300 transition-all" />
          <div className="aspect-[2/3] bg-cyan-300/10 border border-cyan-400/20 rounded-md shadow hover:shadow-cyan-400/40 hover:ring-2 hover:ring-cyan-300 transition-all" />
          <div className="aspect-[2/3] bg-cyan-300/10 border border-cyan-400/20 rounded-md shadow hover:shadow-cyan-400/40 hover:ring-2 hover:ring-cyan-300 transition-all" />
          {/* Add more cells individually later */}
        </div>
      </div>
    </div>
  );
}
