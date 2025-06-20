import styles from "@/app/ui/services.module.css"

export default function Contact(){
    return(
        <div className="">
                <div className={`pt-16 min-h-screen bg-slate-50 text-slate-800 ${styles.servicesWrapper}`}>
                  <header className="text-center py-10">
                    <h1 className="text-4xl font-bold mb-2">Find us</h1>
                    <p className="text-lg text-slate-600">Explore multiple platforms and ways to contact us...</p>
                  </header>
            
                  <main className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-6 max-w-5xl mx-auto">
                    <div className="bg-cyan-200 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                      <h2 className="text-2xl font-semibold text-cyan-800 mb-2">World Categorization</h2>
                      <p className="text-slate-700">Create planets, regions, and locations using customizable categories.</p>
                    </div>
            
                    <div className="shadow-md p-6 hover:shadow-lg transition-shadow">
                      <h2 className="text-2xl font-semibold text-cyan-800 mb-2">Social Networks</h2>
                      <p className="text-slate-700">Youtube</p>
                      <p className="text-slate-700">Instagram</p>
                    </div>
            
                    <div className="shadow-md p-6 hover:shadow-lg transition-shadow">
                      <h2 className="text-2xl font-semibold text-cyan-800 mb-2">Direct Contact</h2>
                      <p className="text-slate-700"> ¡Phone!: 3102891973 </p>
                      <p className="text-slate-700"> ¡E-mail!: jpareja@bpogs.com </p>
                    </div>
                                
                    <div className="bg-cyan-200 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                      <h2 className="text-2xl font-semibold text-cyan-800 mb-2">Progress Tracker</h2>
                      <p className="text-slate-700">Keep track of your development goals and project progress visually.</p>
                    </div>
                  </main>


                  <div className=" flex items-center justify-center text-center pt-8 pl-16 pr-16">
                    <div className="flex flex-col w-3/4 pt-8">
                      <h2 className="font-bold mb-2 ">
                        Looking forward to expand our limits and capacities...
                      </h2>

                      <p className="font-light mb-2 text-lg text-slate-600 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nihil consequuntur et eaque praesentium eos inventore nisi. Voluptatibus totam pariatur provident eaque enim fuga ipsum fugiat ducimus. Sequi, suscipit saepe!
                      </p>
                    </div>
                  </div>
            
                  <footer className="text-center py-10 mt-16 border-t border-slate-200 text-sm text-slate-500">
                    © {new Date().getFullYear()} Bitácora Web App — All rights reserved.
                  </footer>
                </div> 
        </div>
    );
}