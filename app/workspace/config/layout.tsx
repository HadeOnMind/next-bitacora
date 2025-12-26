"use client";

import HorzNavbar from "@/app/components/hnavbar";




export default function configLayout( {
  children,
}: {
  children: React.ReactNode;
}) {
    return(

        <div className="mt-12">
          
            <main className="flex-1 overflow-y-auto p-6 bg-gray-100">
                {children}
            </main>
        </div>

    );
} 