export default function SketchbookPage({ params }: { params: { id: string } }) {
  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold">Sketchbook ID: {params.id}</h1>
    </div>
  );
}
