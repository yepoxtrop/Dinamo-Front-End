{/* Estilos */}
import '../../styles/cards.css'

/**
 * Parametros base para renderizar tarjetas de habilidades e informacion.
 *
 * @typedef {Object} CardSkillParams
 * @property {React.ReactNode} [icon] Icono o elemento visual de la tarjeta.
 * @property {string} [title] Titulo principal que se muestra en la tarjeta.
 * @property {string} [content] Texto complementario o contenido principal.
 * @property {string} [className] Sufijo usado para construir las clases CSS dinamicas.
 *
 * @author Luis Angel Sarmiento Diaz
 */

/**
 * Renderiza una tarjeta de habilidad con icono y titulo.
 *
 * Usa las clases base `card-skills`, `icon-card-skills-box` y
 * `title-card-skills` para mantener un diseno uniforme.
 *
 * @param {{ params: CardSkillParams }} props Propiedades del componente.
 * @returns {JSX.Element} Tarjeta de habilidad.
 *
 * @author Luis Angel Sarmiento Diaz
 */
export function CardSkill({params}){
    return(
        <div className="card-skills">
            <span className='icon-card-skills-box'>{params.icon}</span>
            <span className="title-card-skills">{params.title}</span>
        </div>
    )
}

/**
 * Renderiza una tarjeta simple de detalle con icono y titulo.
 *
 * Construye la clase principal con el formato `card-detail-${className}`,
 * por lo que `params.className` debe coincidir con una variante definida
 * en los estilos CSS.
 *
 * @param {{ params: CardSkillParams }} props Propiedades del componente.
 * @returns {JSX.Element} Tarjeta simple de detalle.
 *
 * @author Luis Angel Sarmiento Diaz
 */
export function CardSkillSimple({params}){
    return(
        <div className={`card-detail-${params.className}`}>
            {params.icon}
            <span className="card-detail-title-">{params.title}</span>
        </div>
    )
}

/**
 * Renderiza una tarjeta de detalle con icono, titulo y contenido secundario.
 *
 * Genera clases dinamicas para el contenedor, el bloque del icono y los
 * textos internos a partir de `params.className`.
 *
 * @param {{ params: CardSkillParams }} props Propiedades del componente.
 * @returns {JSX.Element} Tarjeta de detalle extendida.
 *
 * @author Luis Angel Sarmiento Diaz
 */
export function CardSkillDetail({params}){
    return(
        <div className={`card-detail-${params.className}`}> 
            <div className={`card-detail-icon-container-${params.className}`}>
                {params.icon}
            </div>
            <div className={`card-detail-info-container${params.className}`}>
                {params?.title?<span className={`card-detail-info-${params.className}`}>{params.title}</span>:<></>}
                {params?.content?<span className={`card-detail-info2-${params.className}`}>{params.content}</span>:<></>}
            </div>
        </div>
    )
}

export function CardSkillDetailStatus({params}){
    return(
        <div className={`card-detail-${params.className}`}> 
            <div className={`card-detail-icon-container-${params.className}`}>
                {params?.title?<span className={`card-detail-info-${params.className}`}>{params.title}</span>:<></>}
                {params.icon}
            </div>
            <CardSkillBasic params={{className: params.className, content: params.content}} />
        </div>
    )
}

/**
 * Renderiza un chip o tarjeta basica de informacion.
 *
 * El contenedor usa la clase dinamica `card-container-${className}` y el
 * texto usa `card-info-${className}`. El icono es opcional.
 *
 * @param {{ params: CardSkillParams }} props Propiedades del componente.
 * @returns {JSX.Element} Chip informativo basico.
 *
 * @author Luis Angel Sarmiento Diaz
 */
export function CardSkillBasic({params}){
    return(
        <div className={`card-container-${params.className}`}> 
            {params?.icon?params.icon:<></>}
            <span className={`card-info-${params.className}`}>{params.content}</span>
        </div>
    )
}
