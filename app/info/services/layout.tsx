import HorzNavbar from "@/app/components/hnavbar";

export default function servicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        {children}
        <HorzNavbar/>
    </div>
  );
}