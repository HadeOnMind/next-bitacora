"use client";
import styles from "@/app/ui/settingsGlobal.module.css"



export default function configComp() {


    const configItems = [
        {label: "View and Misc"},
        {label: "General"},
        {label: "Personal Info"},
        {label: "Security"},
        {label: "Sound and Notifications"},
        {label: "Storage"}
    ]


    return(

        <div>
            

            <div className="flex-col">
                
                <div> 
                    Title 
                </div>

                <div className="flex row space-x-1">
                    {configItems.map(item => (
                        <ul
                        key={item.label}
                        className="font-bold rounded-t-lg  text-md w-36 h-24 bg-[#374151] text-[#ffffff] justify-center text-center"
                        >
                        {item.label}
                        </ul>
                        
                    ))}
                </div>
                <div className="bg-[#374151] w-full h-full">

                    config voxel

                </div>
                

                


            </div>


        </div>

    );
} 