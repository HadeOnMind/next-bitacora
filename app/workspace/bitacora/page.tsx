'use client';
import { useRouter } from 'next/navigation';


interface Book {
  id: string;
  title: string;
  description: string;
}


const SketchbookCard = ( { book }: { book: Book } ) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/workspace/bitacora/sketchbook/${book.id}`)}
      className="cursor-pointer p-4 border bg-white hover:shadow-md"
    >
      <h3 className="text-lg font-bold">{book.title}e</h3>
      <p>{book.description}e</p>
    </div>
  );
};