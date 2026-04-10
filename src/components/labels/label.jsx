{/* Estilos */}
import '../../styles/labels.css';

export function Label ({params}){
    return(
        <>
            <label htmlFor={params.htmlFor} className={params.classNameLabel !== undefined ? params.classNameLabel : "label-default"}>
                {params.value}
            </label>
        </>
    )
}