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
                
                <div className="text-2xl font-bold mb-6 text-gray-100"> 
                    CONFIGURATIONS 
                </div>

                <div className="flex border-b border-gray-200 dark:border-gray-700 mb-4 space-x-0.5">
                {configItems.map(item => (
                    <button
                    key={item.label}
                    onClick={() => handleSetOption(item.label)}
                    className={twMerge(
                        "px-6 py-3 text-sm font-medium transition-colors border-b-2 rounded-t-lg bg-emerald-300",
                        activeOption === item.label
                        ? "border-cyan-500 text-cyan-400"
                        : "border-transparent text-gray-400 hover:text-white hover:border-gray-500"
                    )}
                    >
                    {item.label}
                    </button>
                ))}
                </div>


                <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">

                    {handleItemView(activeOption)}

                </div>
                

                


            </div>


        </div>

    );
} 