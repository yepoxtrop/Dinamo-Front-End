{/* Componentes */}
import { BsFillShieldLockFill } from "react-icons/bs";
import { FormAuthentication } from "../forms/form.jsx";
{/* Clases */}
import InputsForms from "../../utils/class/inputsClass.js";
{/* Hooks */}
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
{/* Estilos */}
import "../../styles/modals.css";
{ /* Store */ }
import { store } from "../../services/stores/store.js";
import axios from "axios";
{/* Constantes */}
import { URL_API, URL_USUARIO_NUEVO_TOKEN_AUTH } from "../../settings/variablesEntrono.js";

export function ModalRegister(){
    const dispatch = store.dispatch;
    const dataGlobalStatus = useSelector((state)=>{
        return state.register.normalRegister;
    });
    const [visibleModal, setVisibleModal] = useState(false)
    useEffect(()=>{
        if (dataGlobalStatus.authRegister == false ){
            setVisibleModal(true);
        }
    }, [dataGlobalStatus]);

    const [timeNewCode, setTimeNewCode] = useState(30);
    const [newCode, setNewCode] = useState(false);

    useEffect(()=>{
        const interval = setInterval(()=>{
            setTimeNewCode(prev => {
                if (prev === 1) {
                    setNewCode(true);
                    clearInterval(interval);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return ()=>{
            clearInterval(interval)
        }
    },[newCode]);


    async function getNewCode(dataGlobalStatu) {
        try{
            const peticion = await axios.post(`${URL_API}${URL_USUARIO_NUEVO_TOKEN_AUTH}`, {'email':dataGlobalStatu.emailUser});
        }catch(error){
            console.log(error);
        }
    }

    const paramsFormInput = {
        "text":[
            new InputsForms("codigo-authentication", "label-username", "", "text", "codigoAuthentication1", true, 1, 1, "codigo-authentication", "codigo-authentication", null), 
            new InputsForms("codigo-authentication", "label-username", "", "text", "codigoAuthentication2", true, 1, 1, "codigo-authentication", "codigo-authentication", null), 
            new InputsForms("codigo-authentication", "label-username", "", "text", "codigoAuthentication3", true, 1, 1, "codigo-authentication", "codigo-authentication", null), 
            new InputsForms("codigo-authentication", "label-username", "", "text", "codigoAuthentication4", true, 1, 1, "codigo-authentication", "codigo-authentication", null), 
            new InputsForms("codigo-authentication", "label-username", "", "text", "codigoAuthentication5", true, 1, 1, "codigo-authentication", "codigo-authentication", null), 
            new InputsForms("codigo-authentication", "label-username", "", "text", "codigoAuthentication6", true, 1, 1, "codigo-authentication", "codigo-authentication", null), 
        ]
    }

    const paramsFormButton = {
        "submit":[
            new InputsForms("Comenzar Ahora", "label-submit", "", "submit", "submit", true, null, null, "input-submit-signature", "submit", null, "Verificar Código")
        ]
    }

    return(
        <>
            <div className="container-modal" id={visibleModal?'modal-oauth-visible':'modal-oauth-hidden'}> 
                
                <div className="card-modal-register">

                    <div className="container-icon-modal-register">
                        <div className="container-icon-modal">
                            <BsFillShieldLockFill className="icon-modal-register"/>
                        </div>
                    </div>

                    <div className="container-title-modal-register">
                        <span className="title-modal-register">Verifica tu cuenta</span>
                        <p className="description-modal-register"> Hemos enviado un código de seguridad de 6 dígitos a tu correo electrónico. Por favor, ingrésalo a continuación para continuar. </p>
                    </div>

                    <div className="container-form-modal-register">
                        <FormAuthentication paramsInputs={paramsFormInput} paramsButtons={paramsFormButton} className={"form-modal-register"}/>
                    </div>
                     
                    <div className="container-footer-modal-register">
                        <span 
                            className="link-modal-register" 
                            onClick={()=>{
                                setTimeNewCode(30);
                                setNewCode(false);
                                getNewCode(dataGlobalStatus);
                            }} 
                            id={newCode?'link-new-code-enable':'link-new-code-disable'}
                        >¿No recibiste el código? Reenviar código{newCode?'':` en ${timeNewCode} Seg`}</span>
                        <span className="time-modal-register">{newCode?'Ya puedes solicitar un nuevo código.':''}</span>
                    </div>
                </div>
            </div>
        </>
    )
}