import styles from "@/app/ui/home.module.css"
import { FaReact } from "react-icons/fa"
import {roboto} from "@/app/ui/fonts"


export default function Header(){
    return(

        <header className={`bg-slate-800`}>
            <div className={`${roboto.className} flex h-20 shrink-0 md-h:52 bg-slate-800 items-end mx-auto` }>
                <div>
                    <strong className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</strong>
                </div>

                <div>
                    <div>
                        <FaReact className="w-20 h-20"/>
                    </div>
                </div>
            </div>
        </header>
    
    )
}