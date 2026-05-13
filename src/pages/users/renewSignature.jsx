{/* Componentes */}
import { LeftMenu } from "../../components/menus/leftMenu.jsx";
import { Header } from "../../components/headers/header.jsx";
import { Form } from "../../components/forms/form.jsx";
import PrincipalLoader from "../../components/loaders/loaders.jsx";
import { CardSkillBasic, CardSkillDetail } from "../../components/cards/cardSkills.jsx";
import ToolBar from "../../components/combinations/toolbars.jsx";
import { FormRenewSignature, FormSignature } from "../../components/forms/form.jsx";

import { LuCircleUserRound } from "react-icons/lu";
import { HiOutlineIdentification, HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { MdOutlineMail, MdOutlineSecurity } from "react-icons/md";
import { GrUserManager } from "react-icons/gr";
import { RiLockPasswordLine } from "react-icons/ri";
import { VscEye,VscEyeClosed } from "react-icons/vsc";
import { PiUserListFill } from "react-icons/pi";
import { FaRegCheckCircle } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

{/* Constantes */}
import { URL_API } from "../../settings/variablesEntrono.js";
{/* Estilos */}
import '../../styles/general/pages/user/renewSignature.css';
{/* Imagenes */}
import logoTransparente from "../../assets/logo/logo_transparente.png"
import logoVector from "../../assets/dinamo_vector_minimalist.svg"
{/* Clases */}
import InputsForms from "../../utils/class/inputsClass.js";

export const RenewSignature = () => {
    {/* Parámetros del formulario */}
    const paramsFormn = {
        "password":[
            new InputsForms("Contraseña Antigua de Firma Digital", "label-password", "ej. 1234567890", "password", "password-signature", true, 15, 6, "input-password-signature", "password-signature", <RiLockPasswordLine className="icon-input-password"/>),
            new InputsForms("Nueva Contraseña de Firma Digital", "label-password", "ej. 1234567890", "password", "password-signature", true, 15, 6, "input-password-signature", "password-signature", <RiLockPasswordLine className="icon-input-password"/>),
            new InputsForms("Confirmar Nueva Contraseña de Firma Digital", "label-password", "ej. 1234567890", "password", "password-signature", true, 15, 6, "input-password-signature", "password-signature", <RiLockPasswordLine className="icon-input-password"/>)

        ]
    };

    const paramsFiles = [
        new InputsForms("Acepto los términos y condiciones sobre el uso de la firma digital.", "label-terms", "", "checkbox", "terms", true, null, null, "input-checkbox", "terms", LuCircleUserRound),
        new InputsForms("Quieres notificaciones sobre nuevas actualizaciones.", "label-terms", "", "checkbox", "terms", false, null, null, "input-checkbox", "terms", LuCircleUserRound)
    ]

    const paramsButtons = [
        new InputsForms("Iniciar Proceso", "label-submit", "", "submit", "submit", true, null, null, "input-submit-signature", "submit", null, "Generar Renovación")
    ]

        
    return(
        <>  
            <section className="section-container-index">
                
                {/* Menu */}
                <LeftMenu />
                
                {/* Contenido de la pagina */} 
                <section className="container-data-renewSignature">


                    {/* Contenido de la seccion */}
                    <div className="container-data-info-renewSignature">
                        
                        <div className="container-tile-form-renewSignature">
                            <span className="tile2-form-renewSignature">Digital Signatures  &gt; Renovar Firma Digital</span>
                            <span className="tile1-form-renewSignature">Renovar Firma Digital</span>
                            
                        </div>

                        {/* Contenedor de toda la pagina */}
                        <div className="conteiner-form-renewSignature">

                            


                            {/* Contenedor del título */}
                            <div className="container-tile-form-renewSignature">
                                <span className="tile1-form-renewSignature">Renovación de Certificado P12</span>
                                <span className="tile2-form-renewSignature">Asegure la continuidad de sus trámites legales renovando su identidad digital antes de su vencimiento.</span>
                            </div>
                            
                            <div>
                                <FormRenewSignature params={paramsFormn} paramsFiles={paramsFiles} paramsButtons={paramsButtons} />
                            </div>

                            <div>

                            </div>

                        </div>

                    </div>
                    
                </section>
            </section>
        </>
    )
}