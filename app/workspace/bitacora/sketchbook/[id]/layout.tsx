export default function SketchbookLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-6 bg-white min-h-screen">
      {/* You can style this however you like later */}
      {children}
    </div>
  );
}