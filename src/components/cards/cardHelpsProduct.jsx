{/* Componentes */}
import { FaArrowRightLong } from "react-icons/fa6";
import { CardSkillBasic } from "./cardSkills.jsx";
{/* Estilos */}
import '../../styles/cards/cardHelpsProduct.css';
{/* Hooks */}
import { useEffect, useState } from "react";

export function CardHelpProduct({params}){
    return(
        <>
            <div>

                <div>
                    <div>{params.icon}</div>
                    <div>
                        <span>{params.title}</span>
                        <span>{params.subTitle}</span>
                    </div>
                </div>
                <hr />
                <div>
                    <span>{params.info}</span>
                </div>
                <div>
                    {params.extras.map((valor, indice)=>{
                        return(
                            <>
                                <FaArrowRightLong /><span key={indice}>{valor}</span>
                            </>
                        )
                        
                    })}
                </div>
            </div>
        </>
    )
}

export function CardHelpProductFlow({params}){
    return(
        <>
            <div>

                <div>
                    <div>
                        <span>{params.value}</span>
                    </div>
                    <div>
                        <span>{params.title}</span>
                        <span>{params.subTitle}</span>
                    </div>
                </div>
                <div>
                    <span>{params.info}</span>
                </div>
                <div>
                    {params.extras.map((valor, llave)=>{
                        return(
                            <>
                                <CardSkillBasic params={{content:valor}} key={llave}/>
                            </>
                        )
                        
                    })}
                </div>
            </div>
        </>
    )
}


/**
 * 
 * @param {*} param0 
 * @returns 
 */

export function CardHelpProductFunctions({params}){

    const [baseClass, setBaseClass] = useState("");

    useEffect(()=>{
        if(!params?.className){
            const sufijo = "lite-gray"
            setBaseClass(sufijo);
            return;
        }
        
        const arrayList = params.className.split("-");

        if (arrayList.length < 2) {
            setBaseClass("lite-gray");
            return;
        }

        const sufijo = `${arrayList[arrayList.length -2]}-${arrayList[arrayList.length -1]}`;
        setBaseClass(sufijo);
        
    }, [params?.className])
    


    return(
        <>
            <div className={params.className}>

                <div className={`help-functions-container-icon-${baseClass}`}>
                    <div className={`help-functions-icon-${baseClass}`}>{params.icon}</div>
                    <div className={`help-functions-container-title-${baseClass}`}>
                        <span className={`help-functions-title-${baseClass}`}>{params.title}</span>
                        <span className={`help-functions-subTitle-${baseClass}`}>{params.subTitle}</span>
                    </div>
                </div>
                {params.line?<hr />:<></>}
                <div className={`help-functions-container-info-${baseClass}`}>
                    <span className={`help-functions-info-${baseClass}`}>{params.info}</span>
                </div>
                <div className={`help-functions-container-card-basics-${baseClass}`}>
                    {params.extras.map((valor, llave)=>{
                        return(
                            <>
                                <CardSkillBasic params={{content:valor, className:baseClass}} key={llave} />
                            </>
                        )
                        
                    })}
                </div>
            </div>
        </>
    )
}