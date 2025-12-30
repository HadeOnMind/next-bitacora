"use client";

import styles from "@/app/ui/settingsGlobal.module.css"
import ConfigGeneral from "./configs/configGeneral";
import ConfigSoundandNot from "./configs/configSoundandNot";
import ConfigSecurity from "./configs/configSecurity";
import { useState } from "react";
import { twMerge } from "tailwind-merge";


export default function configComp() {
    type ConfigLabel =
    | "General"
    | "View and Misc"
    | "Personal Info"
    | "Security"
    | "Sound and Notifications"
    | "Storage";

    const configItems: readonly { label: ConfigLabel }[] = [
    { label: "General" },
    { label: "View and Misc" },
    { label: "Personal Info" },
    { label: "Security" },
    { label: "Sound and Notifications" },
    { label: "Storage" },
    ] as const;

    const [activeOption, setActiveOption] = useState<ConfigLabel>("General");
   
   
    function handleSetOption(option: string) {
    if (configItems.some(item => item.label === option)) {
        setActiveOption(option as ConfigLabel);
    } else {
        console.warn("Invalid option attempted:", option);
    }
    };
    function handleItemView(option: ConfigLabel){
        switch (option) {
            case "General":
            return <ConfigGeneral />;
            case "Security":
            return <ConfigSecurity />;
            case "Sound and Notifications":
            return <ConfigSoundandNot />;
            default:
            return null;
        }
    };



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
                        onClick={() => {handleSetOption(item.label)}}
                        className={twMerge("font-bold rounded-t-lg  text-md w-38 h-16 bg-[#5a7299] text-[#ffffff] justify-center text-center",
                            activeOption == item.label && "bg-cyan-900"
                        )
                        }>
                        {item.label}
                        </ul>
                        
                    ))}
                </div>


                <div className="bg-[#374151]">

                    {handleItemView(activeOption)}

                </div>
                

                


            </div>


        </div>

    );
} 