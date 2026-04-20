{/* Componentes */}
import { useSelector } from "react-redux";
import { useState } from "react";
{/* Estilos */}
import '../../styles/inputs.css'
import { useEffect } from "react";

export function InputSubmit ({params}){

    const [isBlock, setIsBlock] = useState(false)

    const buttons = useSelector((state)=>{
        return state.buttons.onWait;
    })

    useEffect(()=>{

        if (buttons){
            setIsBlock(true);
            console.log("se bloquea boton")
        }else{
            setIsBlock(false)
        }

    }, [buttons])

    return(
        <>
            <input 
                type="submit" 
                className={`${params.className}${isBlock?'-block':''}`} 
                id={params.id}
                value={params.value}
            />
        </>
    )
}