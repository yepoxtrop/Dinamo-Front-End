{/* Estilos */}
import '../../styles/toasts.css'
{/* Componentes */}
import { Lineicons } from "@lineiconshq/react-lineicons";
import { XmarkSolid } from "@lineiconshq/free-icons";
{ /* Hooks */ }
import { useState, useEffect } from "react";

export function ToastLogin({params}){
    const [time, setTime] = useState(10);
    
    useEffect(()=>{
        let newTime = time;
        if (time > 0){
            const interval = setInterval(()=>{
                newTime -= 1;
                setTime(newTime);
            }, 1000);
            clearInterval(interval);
        }else{
            
        }
        

    }, [time])

    return(
        <>
            <div className='container-toast'>
                <div className='header-toast'>
                    <div>
                        <div>{params.icon}</div>
                        <div>{params.title}</div>
                    </div>

                    <div>
                        <div>{time} seg</div>
                        <div><Lineicons icon={XmarkSolid} /></div>
                    </div>
                    
                    
                </div>
                <div className='body-toast'>
                    <span>{params.message}</span>
                </div>
            </div>
        </>
    )
}