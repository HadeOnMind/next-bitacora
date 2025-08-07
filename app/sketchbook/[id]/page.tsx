type PageProps = {
  params: { id: string };
  searchParams?: { title?: string; desc?: string };
};



export default async function SketchbookPage({ params, searchParams }: PageProps) {

  return (
    <div className="min-h-screen bg-stone-100 font-sans ">

      <header>

        <div className="flex h-1/5 w-full bg-amber-200 pt-16">
        Header
        </div>

      </header>
      
      <main>


    <section>

      <div>

        This is the Sketchbook

      </div>

    </section>


      </main>


   
      <footer>

      <div className="flex h-1/5 w-full bg-amber-200">
        Footer
      </div>

      </footer>

    </div>
  );
}
