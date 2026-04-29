{/* Componentes */}
import { FaArrowRightLong } from "react-icons/fa6";
import { CardSkillBasic } from "./cardSkills.jsx";

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

export function CardHelpProductFunctions({params}){
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
                {params.line?<hr />:<></>}
                <div>
                    <span>{params.info}</span>
                </div>
                <div>
                    {params.extras.map((valor, llave)=>{
                        return(
                            <>
                                <CardSkillBasic params={{content:valor}} key={llave} />
                            </>
                        )
                        
                    })}
                </div>
            </div>
        </>
    )
}