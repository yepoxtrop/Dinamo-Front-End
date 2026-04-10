{/* Componentes */}
import { InputText } from "../../components/inputs/inputText.jsx";
import { InputPassword } from "../../components/inputs/inputPassword.jsx";
import { InputSubmit } from "../../components/inputs/inputSubmit.jsx";
import { Label } from "../../components/labels/label.jsx";
{/* Librerias */}
import { useEffect, useState, useRef } from "react";
import axios from "axios";
{/* Estilos */}
import '../../styles/forms.css';

export function Form ({params, api_url}){
    
    const fieldComponents = {
        text: InputText,
        password: InputPassword,
        submit: InputSubmit,
    };

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
        
            const datos = {
                "usuario": event.target.username.value,
                "contrasena": event.target.password.value,
                "fecha": new Date()
            }

            const peticion = await axios.post(`${api_url}`, datos);

        } catch (error) {

            console.error("Error al enviar el formulario:", error);
        }
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                {Object.entries(params).map(([key, value]) => {
                    const Component = fieldComponents[key];
                    return <div className="container-inputs">{Component ? <><Label params={{"htmlFor":value.campo.name, "value": value.campo.label, "className": value.campo.labelClassName}} /><Component key={key} params={value.campo} /></> : null}</div>;
                })}
            </form>
        </>
    )
}