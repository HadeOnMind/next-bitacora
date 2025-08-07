import Sidebar from "@/app/components/bitacora-layouts/b-sidebar-layout";
import HorzNavbar from "@/app/components/hnavbar";

export default function BookLayout({ children }: { children: React.ReactNode }) {
  return (
<section className="bg-[#e7d0ba] min-h-screen flex flex-col">

  <HorzNavbar />
    

  <div className="flex h-full">
    <Sidebar/>
    <main className="flex-1">{children}</main>
  </div>
</section>

  );
}
