type PageProps = {
  params: { id: string };
  searchParams?: { title?: string; desc?: string };
};



export default async function SketchbookPage({ params, searchParams }: PageProps) {

const data = <div>
              <h1 className="text-xl font-semibold">Sketchbook ID: {params.id}</h1>
              <h2 className="text-lg font-medium text-stone-700">{searchParams?.title}</h2>
              <p className="text-stone-600">{searchParams?.desc}</p>
            </div>


  return (
    <div className="min-h-screen bg-stone-100 font-sans">
      
    </div>
  );
}
