import HorzNavbar from "../components/hnavbar";
import TopNav from "@/app/components/bitacora-layouts/b-hnavbar-layout";
import Sidebar from "@/app/components/bitacora-layouts/b-sidebar-layout";

export default function WorkspaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
     
  <div>

    <HorzNavbar />

    
   {/*  
    <Sidebar /> */}

    {children}
  </div>

  );
}

