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
            <div className="container-input">
                {params?.icon?params.icon: <></>}
                <input 
                    type="submit" 
                    className={`${params.className}${isBlock?'-block':''}`} 
                    id={params.id}
                    value={params?.value?params.value:""}
                />
            </div>
        </>
    )
}