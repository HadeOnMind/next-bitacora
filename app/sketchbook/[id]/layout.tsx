export default function BookLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-[#e7d0ba] min-h-screen p-6">
      {/* No top nav, no sidebar */}
      {children}
    </section>
  );
}
