{/* Componentes */}
import { Lineicons } from "@lineiconshq/react-lineicons";
{/* Estilos */}
import '../../styles/inputs.css';

export function InputText ({params}){
    return(
        <>
            <div className="container-input">
                <Lineicons icon={params.icon} className="icon-input-text" />
                <input 
                    type="text" 
                    name={params.name} 
                    className={params.className} 
                    placeholder={params.placeholder}
                    required={params.required}
                    maxLength={params.maxLength}
                    minLength={params.minLength}
                    id={params.id}
                />
            </div>
            
        </>
    )
}