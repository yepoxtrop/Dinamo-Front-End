{/* Componentes */}
import { Form } from "../../components/forms/form.jsx";
import { ToastLogin } from "../../components/combinations/toasts.jsx";
import { CardSkill } from "../../components/cards/cardSkills.jsx";
import { LeftPanelLogin, RightPanelLogin } from "../../components/sections/sectionsLogin.jsx";
{/* Iconos */}
import { RiUserLine } from "react-icons/ri";
import { BsExclamationSquareFill } from "react-icons/bs";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { PiCertificateFill } from "react-icons/pi";
import { SiReadthedocs } from "react-icons/si";
{/* Hooks */}
import { useSelector } from "react-redux";
import { useRenamePage } from "../../hooks/renamePage.jsx";
{/* Constantes */}
import { URL_API } from "../../settings/variablesEntrono.js";
{/* Estilos */}
import "../../styles/general/pages/general/login.css";

export const Login = () =>{
    {/* Estado del aplicativo */}
    {/* Envio de datos con hook personalizado */}
    const users = useSelector((state) => {
        return state.users.logIn
    });


    {/* Renombrar Pagina */}
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