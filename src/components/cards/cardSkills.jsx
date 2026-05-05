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

export function CardSkillSimple({params}){
    return(
        <div className={`card-detail-${params.className}`}>
            {params.icon}
            <span className="card-detail-title-">{params.title}</span>
        </div>
    )
}

export function CardSkillDetail({params}){
    return(
        <div className={`card-detail-${params.className}`}> 
            <div className={`card-detail-icon-container${params.className}`}>
                {params.icon}
            </div>
            <div className={`card-detail-info-container${params.className}`}>
                <span className={`card-detail-info-${params.className}`}>{params.title}</span>
                <span className={`card-detail-info-${params.className}`}>{params.content}</span>
            </div>
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