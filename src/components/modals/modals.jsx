{/* Componentes */}
import { BsFillShieldLockFill } from "react-icons/bs";
import { FormAuthentication } from "../forms/form.jsx";
{/* Clases */}
import InputsForms from "../../utils/class/inputsClass.js";
{/* Hooks */}
import { useState, useEffect } from "react";
{/* Estilos */}
import "../../styles/modals.css";

export function ModalRegister(){

    const paramsFormInput = {
        "text":[
            new InputsForms("codigo-authentication", "label-username", "", "text", "codigo-authentication", true, 1, 1, "codigo-authentication", "codigo-authentication", null), 
            new InputsForms("codigo-authentication", "label-username", "", "text", "codigo-authentication", true, 1, 1, "codigo-authentication", "codigo-authentication", null), 
            new InputsForms("codigo-authentication", "label-username", "", "text", "codigo-authentication", true, 1, 1, "codigo-authentication", "codigo-authentication", null), 
            new InputsForms("codigo-authentication", "label-username", "", "text", "codigo-authentication", true, 1, 1, "codigo-authentication", "codigo-authentication", null), 
            new InputsForms("codigo-authentication", "label-username", "", "text", "codigo-authentication", true, 1, 1, "codigo-authentication", "codigo-authentication", null), 
            new InputsForms("codigo-authentication", "label-username", "", "text", "codigo-authentication", true, 1, 1, "codigo-authentication", "codigo-authentication", null), 
        ]
    }

    const paramsFormButton = {
        "submit":[
            new InputsForms("Comenzar Ahora", "label-submit", "", "submit", "submit", true, null, null, "input-submit-signature", "submit", null, "Verificar Código")
        ]
    }

    return(
        <>
            <div className="container-modal">
                
                <div className="card-modal-register">
                    <div>
                        <div>
                            <BsFillShieldLockFill className="icon-modal-register"/>
                        </div>
                    </div>
                    <div>
                        <span>Verifica tu cuenta</span>
                        <p> Hemos enviado un código de seguridad de 6 dígitos a tu correo electrónico. Por favor, ingrésalo a continuación para continuar. </p>
                    </div>
                    <div>
                        <FormAuthentication paramsInputs={paramsFormInput} paramsButtons={paramsFormButton} />
                    </div>
                    <div>
                        <span> ¿No recibiste el código? Reenviar código </span>
                        <span>Ya puedes solicitar un nuevo código.</span>
                    </div>
                </div>
            </div>
        </>
    )
}