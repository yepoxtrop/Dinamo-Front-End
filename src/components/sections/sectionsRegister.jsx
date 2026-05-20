{/* Componentes */}
import { CardDinamo } from "../cards/cardDinamo.jsx";
import { CardSkillSimple } from "../cards/cardSkills.jsx";
import { FormRegister } from "../forms/form.jsx";
import { Link } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import { GmailButtonLogin, OutlookButtonLogin, GithubButtonLogin } from "../buttons/buttons.jsx";
import { ModalRegister } from "../modals/modals.jsx";
{/* Clases */}
import InputsForms from "../../utils/class/inputsClass.js";
{/* Iconos */}
import { LuUserRound } from "react-icons/lu";
import { TbLockPassword } from "react-icons/tb";
import { MdOutlineEmail } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { SiGoogledocs } from "react-icons/si";
import { IoBarChart } from "react-icons/io5";
{/* Estilos */}
import "../../styles/general/pages/general/sectionsRegister.css";
{/* Media */}
import logoV2 from "../../assets/logo/logo_v2.png"
import imagenVector from "../../assets/svg/tarjetas.svg";
{/* Constantes */}
import { ID_CLIENTE_GOOGLE } from "../../settings/variablesEntrono.js";

export function LeftPanelRegister(){
    return(
        <>
            <section className="left-panel-register">
                
                <div>
                    <CardDinamo params={{fatherClass:"loginLeft", img:logoV2, }} />
                </div>
                
                <div>
                    <img src={imagenVector} alt="" />
                </div>
                
                <div>
                    <div>
                        <h2>Únete a la gestión documental segura</h2>
                        <p> Proteja sus activos digitales con validez legal garantizada. Dinamo ofrece una infraestructura de grado empresarial para la firma, trazabilidad y auditoría de sus documentos más críticos. </p>
                    </div>
                    <div>
                        <CardSkillSimple params={{className:"", title:"Firma Electrónica", icon:<FaCheckCircle />}} />
                        <CardSkillSimple params={{className:"", title:"Certificado X.509", icon:<SiGoogledocs />}} />
                        <CardSkillSimple params={{className:"", title:"Trazabilidad PKI", icon:<MdOutlineSecurity />}} />
                        <CardSkillSimple params={{className:"", title:"Reportes Digitales", icon:<IoBarChart />}} />
                    </div>
                </div>
            </section>
        </>
    )
}

export function RightPanelRegister(){
    const paramsFormn = {
        "text":[
            new InputsForms("Nombre Usuario", "label-username", "ej. Linus.Torvalds", "text", "userName", true, 100, 5, "input-text-username", "username", <LuUserRound className="icon-input-text"/>), 
        ],
        "email":[
            new InputsForms("Correo Electrónico", "label-email", "ej. email@example.com", "email", "emailAdress", true, 100, 3, "input-email-user", "email", <MdOutlineEmail className="icon-input-email"/>)
        ],
        "password":[
            new InputsForms("Contraseña", "label-password", "* * * * * * * * * *", "password", "contrasena", true, 15, 6, "input-password-user", "password-signature", <TbLockPassword className="icon-input-password"/>)
        ],
        "checkbox":[
            new InputsForms("Acepto los términos y condiciones.", "label-terms", "", "checkbox", "terms", true, null, null, "input-checkbox", "terms", null),
        ],
        "submit":[
            new InputsForms("Comenzar Ahora", "label-submit", "", "submit", "submit", true, null, null, "input-submit-signature", "submit", null, "Comenzar Ahora")
        ],
        
    };

    return(
        <>
            <section className="right-panel-register">

                <div className="container-right-panel-register-form">
                    

                    <div className="form-title-register">
                        <span className="title1-register">Crea tu cuenta</span>
                        <span className="title2-register">Únete a la plataforma líder en gestión documental.</span>
                    </div>
 
                    <div className="container-form-register">
                        <FormRegister params={paramsFormn} />
                        
                        <div className="form-register-extra-options-container">
                            <hr />
                            <p>O registrate con</p>
                            <hr />
                        </div>
                
                        <div className="form-register-extra-logins-container">
                            {/* Boton de inicio de sesión google */}
                            <GoogleOAuthProvider clientId={ID_CLIENTE_GOOGLE}>
                                <GmailButtonLogin params={{className:"google-btn-regsiter", iconClassName:"google-icon-register", textClassName:"google-txt-register"}}/>
                            </GoogleOAuthProvider>

                            {/* Boton de inicio de sesión outlook */}
                            <OutlookButtonLogin params={{className:"outlook-btn-regsiter", iconClassName:"outlook-icon-register", textClassName:"outlook-txt-register"}}/>

                            {/* Boton de inicio de sesión github */}
                            <GithubButtonLogin params={{className:"github-btn-regsiter", iconClassName:"github-icon-register", textClassName:"github-txt-register"}}/>
                        </div>
                    </div>

                    <div className="form-redirect-login-container-register">
                        <span>¿Ya tienes una cuenta? <Link to="/login" className="link-to-login">Inicia sesión</Link></span>
                    </div>
                </div>
            </section>
        </>
    )
}