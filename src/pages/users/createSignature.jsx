{/* Componentes */}
import { LeftMenu } from "../../components/menus/leftMenu.jsx";
import { Header } from "../../components/headers/header.jsx";
import { Form } from "../../components/forms/form.jsx";
import PrincipalLoader from "../../components/loaders/loaders.jsx";
import { CardSkillBasic, CardSkillDetail } from "../../components/cards/cardSkills.jsx";
import ToolBar from "../../components/combinations/toolbars.jsx";
import { FormSignature } from "../../components/forms/form.jsx";

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
import '../../styles/general/pages/user/createSignature.css';
{/* Imagenes */}
import logoTransparente from "../../assets/logo/logo_transparente.png"
import logoVector from "../../assets/dinamo_vector_minimalist.svg"
{/* Clases */}
import InputsForms from "../../utils/class/inputsClass.js";

export const CreateSignature = () => {
    {/* Parámetros del formulario */}
    const paramsFormn = {
        "text":[
            new InputsForms("Nombre Completo", "label-username", "Linus Benedict Torvalds", "text", "realName", true, 100, 15, "input-text-signature", "realName", <LuCircleUserRound className="icon-input-text"/>), 
            new InputsForms("Numero de Identificación", "label-identification", "1234567890", "text","identification", true, 15, 6, "input-text-signature", "identification", <HiOutlineIdentification className="icon-input-text" />), 
        ],
        "email":[
            new InputsForms("correo Electrónico", "label-email", "ej. linus@github.com", "email", "email", true, 100, 3, "input-email-signature", "email", <MdOutlineMail className="icon-input-email"/>)
        ],
        "password":[
            new InputsForms("Contraseña de Firma Digital", "label-password", "ej. 1234567890", "password", "password-signature", true, 15, 6, "input-password-signature", "password-signature", <RiLockPasswordLine className="icon-input-password"/>)
        ]
    };

    const paramsTerms = [
        new InputsForms("Acepto los términos y condiciones sobre el uso de la firma digital.", "label-terms", "", "checkbox", "terms", true, null, null, "input-checkbox", "terms", LuCircleUserRound),
        new InputsForms("Quieres notificaciones sobre nuevas actualizaciones.", "label-terms", "", "checkbox", "terms", false, null, null, "input-checkbox", "terms", LuCircleUserRound)
    ]

    const paramsButtons = [
        new InputsForms("Guardar Borrador", "label-submit", "", "submit", "submit", true, null, null, "input-submit-signature-draft", "submit", null, "Guardar Borrador"),
        new InputsForms("Iniciar Proceso", "label-submit", "", "submit", "submit", true, null, null, "input-submit-signature", "submit", null, "Iniciar Proceso")
    ]

        
    return(
        <>  
            <section className="section-container-index">
                
                {/* Menu */}
                <LeftMenu />
                
                {/* Contenido de la pagina */} 
                <section className="container-data-index">
        

                    {/* Contenido de la seccion */}
                    <div className="container-data-info">
                        
                        {/* Formulario de inicio de sesion */}
                        <div className="conteiner-form-createSignature">
                            
                            <div className="container-tile-form-createSignature">
                                <span className="tile1-form-createSignature">Información del solicitante</span>
                                <span className="tile2-form-createSignature">Complete los datos requeridos para la generación de su firma digital.</span>
                            </div>
                            <hr />
                            <div>
                                <FormSignature params={paramsFormn} classNameForm={"form-create-signature"} paramsButtons={paramsButtons} paramsTerms={paramsTerms}/>
                            </div>

                        </div>

                        {/* Articulos de seguridad */}
                        <div className="container-articles-security">

                            <article className="todo-list-articles-createSignature1">
                                
                                <div className="container-info-article-createSignature1">
                                    <CardSkillBasic params={{className:"title-article-security", icon: <MdOutlineSecurity className="icon-title-article-security"/>, content: "Parametros De Seguridad"}}/>
                                    
                                    <div className="container-list-article-createSignature1">
                                        <ul>
                                            <li>
                                                <CardSkillDetail params={{className:"item-article-security", icon: <FaRegCheckCircle className="check-list-security-article1" />, content: "La contraseña debe tener al menos 12 caracteres y contener una combinación de letras, números y caracteres especiales."}}/>
                                            </li>
                                            <li>
                                                <CardSkillDetail params={{className:"item-article-security", icon: <FaRegCheckCircle className="check-list-security-article1" />, content: "La firma digital es personal e intransferible, y el usuario es responsable de su uso."}}/>
                                            </li>
                                            <li>
                                                <CardSkillDetail params={{className:"item-article-security", icon: <FaRegCheckCircle className="check-list-security-article1" />, content: "El usuario declara haber leído y acepta los términos y condiciones para el uso de la firma digital."}}/>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </article>

                            <article className="todo-list-articles-createSignature2">
                                <div className="container-info-article-createSignature2">
                                    <CardSkillBasic params={{className:"title-article-security2", icon: <MdOutlineSecurity className="icon-title-article-security2"/>, content: "Siguientes Pasos"}}/>
                                    <div className="container-list-article-createSignature2">
                                        <ul>
                                            <li>
                                                <CardSkillDetail params={{className:"item-article-security2", icon: <FaRegCheckCircle className="check-list-security-article2"/>, content: "Validación de correo electrónico"}}/>
                                            </li>
                                            <li>
                                                <CardSkillDetail params={{className:"item-article-security2", icon: <FaRegCheckCircle className="check-list-security-article2"/>, content: "Creación de firma digital(p12)"}}/>
                                            </li>
                                            <li>
                                                <CardSkillDetail params={{className:"item-article-security2", icon: <FaRegCheckCircle className="check-list-security-article2"/>, content: "Descarga de firma privada"}}/>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </article>

                            <article className="todo-list-articles-createSignature3">
                                <CardSkillDetail params={{className:"article3", icon:<img src={logoVector} alt="logoTransparente" className="img-logo-article3"/>, title: "Firmas Digitales"}} />
                                <div className="container-image-article-createSignature3">
                                    <div className="container-logo-article3">
                                        <img src={logoTransparente} alt="logoTransparente" className="img-logo-article3"/>
                                    </div>
                                    <div className="container-info-article3">
                                        <span className="info-article3">Nuevas Mejoras</span>
                                        <span className="info-article3-1">Proximamente</span>
                                    </div>
                                    
                                </div>
                            </article>
                        </div>


                    </div>
                    
                </section>
            </section>
        </>
    )
}