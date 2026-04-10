{/* Componentes */}
import { Lineicons } from "@lineiconshq/react-lineicons";
{/* Estilos */}
import '../../styles/inputs.css';
{/* Hooks */}
import { useState } from "react";

export function InputText ({params}){

    const [inputValue, setInputValue] = useState("");
    const [className, setClassName] = useState(params.className);
    const handleChange = (event) => {
        setInputValue(event.target.value);
        if (inputValue === "") {
            setClassName(params.className);
        }else{
            setClassName(params.className + "-active");
        }
    };

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
                    onChange={handleChange}
                />
            </div>
            
        </>
    )
}