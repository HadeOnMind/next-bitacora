import TopNav from '@/app/components/bitacora-layouts/b-hnavbar-layout';
import Sidebar from '@/app/components/bitacora-layouts/b-sidebar-layout';

export default function DevLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">



      
      {children}
    </div>
  );
}