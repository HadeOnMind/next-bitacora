import Sidebar from "@/app/components/bitacora-layouts/b-sidebar-layout";

export default function BookLayout({ children }: { children: React.ReactNode }) {
  return (
<section className="bg-[#e7d0ba] min-h-screen p-2">
  <div className="flex h-full">
    <Sidebar/>
    <main className="flex-1 bg-stone-100 p-4 font-sans">
      {children}
    </main>
  </div>
</section>

  );
}
