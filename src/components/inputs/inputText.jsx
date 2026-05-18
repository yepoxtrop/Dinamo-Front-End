{/* Estilos */}
import '../../styles/inputs.css';
{/* Hooks */}
import { useState } from "react";

export function InputText ({params}){

    const [inputValue, setInputValue] = useState("");

    function handleChange(event) {
        setInputValue(event.target.value);
    };

    return(
        <>
            <div className="container-input">
                {params.icon}
                <input 
                    type="text" 
                    name={params.name} 
                    className={params.className} 
                    placeholder={params.placeholder}
                    required={params.required}
                    maxLength={params.maxLength}
                    minLength={params.minLength}
                    id={params.id}
                    onChange={handleChange}
                />
            </div>
        </>
    )
}


export function InputTextSimple ({params}){

    const [inputValue, setInputValue] = useState("");

    function handleChange(event) {
        setInputValue(event.target.value);
    };

    return(
        <>
            <input 
                type="text" 
                name={params.name} 
                className={params.className} 
                placeholder={params.placeholder}
                required={params.required}
                maxLength={params.maxLength}
                minLength={params.minLength}
                id={params.id}
                onChange={handleChange}
            />
        </>
    )
}