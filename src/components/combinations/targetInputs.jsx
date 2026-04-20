{/* Componentes */}
import { InputText } from "../inputs/inputText.jsx";
import { InputPassword } from "../inputs/inputPassword.jsx";
import { InputCheckbox } from "../inputs/inputCheckbox.jsx";
import { Label } from "../labels/label.jsx";
{/* Estilos */}
import '../../styles/targets.css'

/**
 * Componente que combina un label y un input de tipo texto.
 * @param {Object} params - Objeto con las propiedades del input y label.
 * @param {string} params.name - Nombre del input para el atributo name y htmlFor del label.
 * @param {string} params.label - Texto del label.
 * @param {string} params.placeholder - Placeholder del input.
 * @param {string} params.type - Tipo del input (debe ser 'text').
 * @param {boolean} params.required - Si el input es requerido.
 * @param {number} params.maxLength - Longitud máxima del input.
 * @param {number} params.minLength - Longitud mínima del input.
 * @param {string} params.className - Clase CSS del input.
 * @param {string} params.id - ID del input.
 * @returns {JSX.Element} Elemento JSX que renderiza un div con label e input de texto.
 * @author Luis Angel Sarmiento Diaz
 */
export function TargetInputText ({params}){
    return(
        <div className="target-input-text">
            <Label params={{"htmlFor":params.name, "value": params.label}} />
            <InputText params={params} />
        </div>
    )
}

/**
 * Componente que combina un label y un input de tipo contraseña.
 * @param {Object} params - Objeto con las propiedades del input y label.
 * @param {string} params.name - Nombre del input para el atributo name y htmlFor del label.
 * @param {string} params.label - Texto del label.
 * @param {string} params.placeholder - Placeholder del input.
 * @param {string} params.type - Tipo del input (debe ser 'password').
 * @param {boolean} params.required - Si el input es requerido.
 * @param {number} params.maxLength - Longitud máxima del input.
 * @param {number} params.minLength - Longitud mínima del input.
 * @param {string} params.className - Clase CSS del input.
 * @param {string} params.id - ID del input.
 * @returns {JSX.Element} Elemento JSX que renderiza un div con label e input de contraseña.
 * @author Luis Angel Sarmiento Diaz
 */
export function TargetInputPassword ({params}){
    return(
        <div className="target-input-password">
            <Label params={{"htmlFor":params.name, "value": params.label}} />
            <InputPassword params={params} />
        </div>
    )
}

export function TargetInputCheckbox ({params}){
    return(
        <div className="target-input-checkbox">
            <InputCheckbox params={params} />
            <Label params={{"htmlFor":params.name, "value": params.label}} />
            {/* <a href="#" className="forgot-password">¿Olvidaste tu contraseña?</a> */}
        </div>
    )
}

export function TargetItemMenu({params}){
    return(
        <>
            <div className="target-item-menu">
                {params.icon}
                <span className="text-item-menu">{params.info}</span>
            </div>
        </>
    )
}


export function TargetSubItemMenu({params}){
    return(
        <>
            <div className="target-sub-item-menu">
                {params.icon}
                <span className="text-sub-item-menu">{params.info}</span>
            </div>
        </>
    )
}