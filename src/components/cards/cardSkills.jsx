{/* Estilos */}
import '../../styles/cards.css'

export function CardSkill({params}){
    return(
        <div className="card-skills">
            <span className='icon-card-skills-box'>{params.icon}</span>
            <span className="title-card-skills">{params.title}</span>
        </div>
    )
}

export function CardSkillBasic({params}){
    return(
        <div className={`card-container-${params.className}`}> 
            <span className={`card-info-${params.className}`}>{params.content}</span>
        </div>
    )
}