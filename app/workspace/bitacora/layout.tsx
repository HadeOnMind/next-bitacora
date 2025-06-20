import TopNav from '@/app/components/bitacora-layouts/b-hnavbar-layout';
import Sidebar from '@/app/components/bitacora-layouts/b-sidebar-layout';

export default function BookselectionLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <TopNav/>
        <Sidebar/>
        {children}
        
    </div>
  );
}
