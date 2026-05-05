{/* Componentes */}
import { FaArrowRightLong } from "react-icons/fa6";
import { CardSkillBasic } from "./cardSkills.jsx";
{/* Estilos */}
import '../../styles/cards/cardHelpsProduct.css';
{/* Hooks */}
import { useClassCards } from "../../hooks/clases/useClassCards.jsx";

export function CardInfoBasic({params}){

    const clase = useClassCards(params.className);
    
    return(
        <>
            <div className={params.className}>

                <div className={`info-basic-container-icon-${clase}`}>
                    <div className={`info-basic-icon-${clase}`}>
                        {params.icon}
                    </div>
                    <div className={`info-basic-container-title-${clase}`}>
                        <span className={`info-basic-title-${clase}`}>{params.title}</span>
                    </div>
                </div>
                <div className={`info-basic-container-info-${clase}`}>
                    <span className={`info-basic-info-${clase}`}>{params.info}</span>
                </div>
                <div className={`info-basic-container-time-${clase}`}>
                    <span className={`info-basic-time-${clase}`}>Promedio {params.time}</span>
                </div>
                <div className={`info-basic-container-percentage-${clase}`}>
                    <div className={`info-basic-percentage-line-${clase}`} id={`percentage`}>

                    </div>
                    <span className={`info-basic-percentage-${clase}`}>{params.percentage}% {params.percentageAlert}</span>
                </div>
            </div>
        </>
    )
}


export function CardHelpProduct({params}){
    const clase = useClassCards(params.className);
    return(
        <>
            <div className={params.className}>

                <div className={`help-container-icon-${clase}`}>
                    <div className={`help-icon-${clase}`}>
                        {params.icon}
                    </div>
                    <div className={`help-container-title-${clase}`}>
                        <span className={`help-title-${clase}`}>{params.title}</span>
                        <span className={`help-subTitle-${clase}`}>{params.subTitle}</span>
                    </div>
                </div>
                <hr />
                <div className={`help-container-info-${clase}`}>
                    <span className={`help-info-${clase}`}>{params.info}</span>
                </div>
                <div className={`help-container-extra-rows-${clase}`}>
                    {params.extras.map((valor, indice)=>{
                        return(
                            <>
                                <div className="container-infor-row">
                                    <FaArrowRightLong /><span key={indice}>{valor}</span>
                                </div>
                                
                            </>
                        )
                        
                    })}
                </div>
            </div>
        </>
    )
}

export function CardHelpProductFlow({params}){

    const clase = useClassCards(params.className);

    return(
        <>
            <div className={params.className}>

                <div className={`help-flow-container-icon-${clase}`}>
                    <div className={`help-flow-icon-${clase}`}>
                        <span>{params.value}</span>
                    </div>
                    <div className={`help-flow-container-title-${clase}`}>
                        <span className={`help-flow-title-${clase}`}>{params.title}</span>
                        <span className={`help-flow-subTitle-${clase}`}>{params.subTitle}</span>
                    </div>
                </div>
                <div className={`help-flow-container-info-${clase}`}>
                    <span className={`help-flow-info-${clase}`}>{params.info}</span>
                </div>
                <div className={`help-flow-container-card-basics-${clase}`}>
                    {params.extras.map((valor, llave)=>{
                        return(
                            <>
                                <CardSkillBasic params={{content:valor, className:clase}} key={llave}/>
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

    const clase = useClassCards(params.className);
    
    return(
        <>
            <div className={params.className}>

                <div className={`help-functions-container-icon-${clase}`}>
                    <div className={`help-functions-icon-${clase}`}>{params.icon}</div>
                    <div className={`help-functions-container-title-${clase}`}>
                        <span className={`help-functions-title-${clase}`}>{params.title}</span>
                        <span className={`help-functions-subTitle-${clase}`}>{params.subTitle}</span>
                    </div>
                </div>
                {params.line?<hr className={`help-functions-line-${clase}`}/>:<></>}
                <div className={`help-functions-container-info-${clase}`}>
                    <span className={`help-functions-info-${clase}`}>{params.info}</span>
                </div>
                <div className={`help-functions-container-card-basics-${clase}`}>
                    {params.extras.map((valor, llave)=>{
                        return(
                            <>
                                <CardSkillBasic params={{content:valor, className:clase}} key={llave} />
                            </>
                        )
                        
                    })}
                </div>
            </div>
        </>
    )
}