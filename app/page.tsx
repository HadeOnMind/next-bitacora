import Hero from "./components/hero";

export default function Home() {
  return (
    <div className="h-screen flex">
      <div className="bg-slate-500 flex-1"></div>
      <div className="bg-slate-400 flex-1"></div>
      <Hero />
    </div>
  );
}
