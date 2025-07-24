import HorzNavbar from "../components/hnavbar";
import TopNav from "@/app/components/bitacora-layouts/b-hnavbar-layout";
import Sidebar from "@/app/components/bitacora-layouts/b-sidebar-layout";

export default function WorkspaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <div className="flex flex-col h-screen">
      <HorzNavbar />

      <div className="flex flex-1 overflow-hidden">
        <aside>
          <Sidebar />
        </aside>

        <main className="flex-1 overflow-y-auto p-6 bg-gray-100">
          {children}
        </main>
      </div>
    </div>
  );
}

