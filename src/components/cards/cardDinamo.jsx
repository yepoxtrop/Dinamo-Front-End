{/* Estilos */}
import '../../styles/cards.css';

export function CardDianmoo({params}){
    return(
        <>
            <div className={`${params.fatherClass}-card-dinamo-container`}>
                <div className={`${params.fatherClass}-card-dinamo-container-logo`}>
                    <img src={params.img} alt="logo-empresa" className={`${params.fatherClass}-card-dinamo-logo`}/> {/* Cambiar logo de la empresa */}
                </div>
                <div className={`${params.fatherClass}-card-dinamo-container-container-title`} >
                    <span className={`${params.fatherClass}-card-dinamo-title`}>Dinamo</span> {/* Cambiar el nombre de la empresa */}
                    <span className={`${params.fatherClass}-card-dinamo-title2`}>Gestión Documental</span>
                </div>
            </div>
        </>
    )
}