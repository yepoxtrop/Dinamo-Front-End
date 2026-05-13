{/* Componentes */}
import { Lineicons } from "@lineiconshq/react-lineicons";
import { LuEye } from "react-icons/lu";
import { LuEyeClosed } from "react-icons/lu";
{/* Hooks */}
import { useState } from "react";
{/* Estilos */}
import '../../styles/inputs.css';

export function InputPassword ({params}){
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return(
        <>  
            <div className="container-input">
                {params.icon}
                <input 
                    type={isPasswordVisible ? "text" : "password"} 
                    name={params.name} 
                    className={params.className} 
                    placeholder={params.placeholder}
                    required={params.required}
                    maxLength={params.maxLength}
                    minLength={params.minLength}
                    id={params.id}
                />
                <LuEye className={`icon-see-password${isPasswordVisible ? '-visible' : ''}`} onClick={togglePasswordVisibility}/>
                <LuEyeClosed className={`icon-hide-password${!isPasswordVisible ? '-visible' : ''}`} onClick={togglePasswordVisibility}/>
            </div>
        </>
    )
}