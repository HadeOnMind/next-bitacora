import HorzNavbar from "@/app/components/hnavbar";

export default function AboutLayout({
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
