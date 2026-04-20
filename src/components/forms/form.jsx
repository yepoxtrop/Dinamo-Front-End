{/* Componentes */}
import { InputSubmit } from "../../components/inputs/inputSubmit.jsx";
import { Label } from "../../components/labels/label.jsx";
import { TargetInputText, TargetInputPassword, TargetInputCheckbox } from "../combinations/targetInputs.jsx";
{/* Hooks */}
import { useEffect, useState, useRef, use } from "react";
import { useSendFormData } from "../../hooks/forms.jsx";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
{/* Estado */}
import { store } from "../../services/stores/store.js";
{/* Actions */}
import { setLogin } from "../../services/users/slice.js";
import { setWait } from "../../services/buttons/slice.js";
{/* Paquetes */}
import axios from "axios";
{/* Estilos */}
import '../../styles/forms.css';
import { Link } from "react-router-dom";

export function Form ({params, api_url}){
    
    {/* Componentes de inputs */}
    const fieldComponents = {
        text: TargetInputText,
        password: TargetInputPassword,
        submit: InputSubmit,
        checkbox: TargetInputCheckbox
    };

    {/* Envio de datos con hook personalizado */}
    const users = useSelector((state) => {
        return state.users.logIn;
    });
    const buttons = useSelector((state)=>{
        return state.buttons.onWait;
    })

    const dispatch = store.dispatch;
    const navigate = useNavigate();

    const handleSubmit = async (event) =>{
        
        try {
            /* El formulario no se recarga */
            event.preventDefault();

            dispatch(setWait(true)); 
            
            /* Objeto con los datos del form */
            const data = {
                "usuario": event.target.username.value,
                "contrasena": event.target.password.value,
                "fecha": new Date()
            }
            
            dispatch(setLogin(undefined));

            const peticion = await axios.post(`${api_url}`, data);

            if (peticion.status == 200){
                dispatch(setLogin(true));
                navigate("/index");
                //console.log(users)
            }else{
                dispatch(setLogin(false));
                //console.log(users)
            }

            dispatch(setWait(false));

        } catch (error) {
            //console.log(users)
            dispatch(setLogin(false));
            dispatch(setWait(false));

        }
        
    }; 

    return(
        <>
            <form onSubmit={handleSubmit}>
                {Object.entries(params).map(([key, value]) => {
                    const Component = fieldComponents[key];
                    return <div key={key} className="container-inputs">{Component ? <Component params={value.campo} /> : null}</div>;
                })}
            </form>
        </>
    )
}