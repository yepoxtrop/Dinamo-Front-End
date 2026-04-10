{/* Componentes */}
import { InputSubmit } from "../../components/inputs/inputSubmit.jsx";
import { Label } from "../../components/labels/label.jsx";
import { TargetInputText, TargetInputPassword, TargetInputCheckbox } from "../combinations/targetInputs.jsx";

{/* Hooks */}
import { useEffect, useState, useRef } from "react";
import axios from "axios";
{/* Estilos */}
import '../../styles/forms.css';

export function Form ({params, api_url}){

    
    const fieldComponents = {
        text: TargetInputText,
        password: TargetInputPassword,
        submit: InputSubmit,
        checkbox: TargetInputCheckbox
    };

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
        
            const data = {
                "usuario": event.target.username.value,
                "contrasena": event.target.password.value,
                "fecha": new Date()
            }

            const peticion = await axios.post(`${api_url}`, data);

        } catch (error) {

            console.error("Error al enviar el formulario:", error);
        }
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                {Object.entries(params).map(([key, value]) => {
                    const Component = fieldComponents[key];
                    return <div className="container-inputs">{Component ? <Component key={key} params={value.campo} /> : null}</div>;
                })}
            </form>
        </>
    )
}