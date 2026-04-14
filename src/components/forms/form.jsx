{/* Componentes */}
import { InputSubmit } from "../../components/inputs/inputSubmit.jsx";
import { Label } from "../../components/labels/label.jsx";
import { TargetInputText, TargetInputPassword, TargetInputCheckbox } from "../combinations/targetInputs.jsx";
{/* Hooks */}
import { useEffect, useState, useRef, use } from "react";
import { useSendFormData } from "../../hooks/forms.jsx";
{/* Paquetes */}
import axios from "axios";
{/* Estilos */}
import '../../styles/forms.css';

export function Form ({params, api_url}){
    
    {/* Componentes de inputs */}
    const fieldComponents = {
        text: TargetInputText,
        password: TargetInputPassword,
        submit: InputSubmit,
        checkbox: TargetInputCheckbox
    };

    {/* Envio de datos con hook personalizado */}
    const handleSubmit = useSendFormData(api_url);

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