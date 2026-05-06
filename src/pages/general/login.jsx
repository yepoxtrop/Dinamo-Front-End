{/* Componentes */}
import { Form } from "../../components/forms/form.jsx";
import { ToastLogin } from "../../components/combinations/toasts.jsx";
import { CardSkill } from "../../components/cards/cardSkills.jsx";
import {  User4Outlined,   Locked2Outlined, XmarkSolid} from "@lineiconshq/free-icons";
import { BsExclamationSquareFill } from "react-icons/bs";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { PiCertificateFill } from "react-icons/pi";
import { SiReadthedocs } from "react-icons/si";
import { LeftPanelLogin, RightPanelLogin } from "../../components/sections/sectionsLogin.jsx";
{/* Hooks */}
import { useSelector } from "react-redux";
import { useRenamePage } from "../../hooks/renamePage.jsx";
{/* Constantes */}
import { URL_API } from "../../settings/variablesEntrono.js";
{/* Estilos */}
import "../../styles/general/pages/general/login.css";

export const Login = () =>{

    {/* Parámetros del formulario */}
    const paramsFormn = {
        "text":{
            "campo":{
                "label": "Usuario De Dominio",
                "labelClassName": "label-username",
                "placeholder": "luis.sarmiento",
                "type": "text",
                "name": "username",
                "required": true,
                "maxLength": 50,
                "minLength": 3,
                "className": "input-text",
                "id": "username",
                "icon": User4Outlined
            }, 
        }, 
        "password": {
            "campo":{
                "label": "Contraseña",
                "labelClassName": "label-password",
                "placeholder": "Ingresa tu contraseña",
                "type": "password",
                "name": "password",
                "required": true,
                "maxLength": 100,
                "minLength": 6,
                "className": "input-password",
                "id": "password",
                "icon": Locked2Outlined
            }
        },
        "checkbox": {
            "campo":{
                "label": "Recordar mis credenciales",
                "type": "checkbox",
                "name": "remember",
                "className": "input-checkbox",
                "id": "remember",
                "required": false,
            }
        },
        "submit": {
            "campo":{
                "label": "Iniciar Sesión",
                "type": "submit",
                "className": "input-submit",
                "value": "Iniciar Sesión",
                "id": "submit"
            }
        }
    }; 
    const url = `${URL_API}/Inicio_Sesion`;
    const url2 = `${URL_API}/Datos_Sesion`;


    {/* Estado del aplicativo */}
    {/* Envio de datos con hook personalizado */}
    const users = useSelector((state) => {
        return state.users.logIn
    });


    {/* Renombrar Pagin */}
    useRenamePage("Incia Sesión");
    
    return(
        <>  

            {/* Pagina de inicio de sesión */}
            <section className="body-login">

                {!users?<ToastLogin params={{
                    "icon":< BsExclamationSquareFill className="icon-alert-toast"/>,
                    "title":"Fallo En Inicio De Sesion",
                    "message":"Credenciales invalidas, reviselas e intente nuevamente",
                }} />:<></>}

                {/* Panel izquierdo(diseño) */}
                <LeftPanelLogin />

                {/* Panel derecho(formulario de inicio de sesión) */}
                <RightPanelLogin />
                
            </section>
            
        </>
    )
}