type PageProps = {
  params: { id: string };
  searchParams?: { title?: string; desc?: string };
};

export default async function SketchbookPage({ params, searchParams }: PageProps) {
  return (
    <div className="p-2 bg-amber-500">
      <h1 className="text-xl font-semibold">Sketchbook ID: {params.id}</h1>
      <h2 className="text-lg font-medium text-stone-700">{searchParams?.title}</h2>
      <p className="text-stone-600">{searchParams?.desc}</p>
    </div>
  );
}
