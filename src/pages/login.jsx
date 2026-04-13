{/* Componentes */}
import { Form } from "../components/forms/form.jsx";
import { ToastLogin } from "../components/combinations/toasts.jsx";
import { CardSkill } from "../components/cards/cardSkills.jsx";
import {  User4Outlined,   Locked2Outlined, XmarkSolid} from "@lineiconshq/free-icons";
import { BsExclamationSquareFill } from "react-icons/bs";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { PiCertificateFill } from "react-icons/pi";
import { SiReadthedocs } from "react-icons/si";
{/* Constantes */}
import { URL_API } from "../settings/variablesEntrono.js";
{/* Estilos */}
import '../styles/login.css';
{/* Imagenes */}
import logo from "../assets/logo/logo.png";
import logoTransparente from "../assets/logo/logo_transparente.png";
import vector from "../assets/circulo.svg";
import vector2 from "../assets/circulo2.svg";
import vector3 from "../assets/circulo3.svg";   
import vector4 from "../assets/documentos.svg";

export const Login = () =>{
    return(
        <>  

            {/* Pagina de inicio de sesión */}
            <section className="body-login" id="body-login">

                <ToastLogin params={{
                    "icon":< BsExclamationSquareFill className="icon-alert-toast"/>,
                    "title":"Fallo En Inicio De Sesion",
                    "message":"Credenciales invalidas, reviselas e intente nuevamente"
                }} />

                {/* Panel izquierdo(diseño) */}
                <section className="left-panel-login" id="left-panel-login">

                    {/* Vectores circulares */}
                    <img src={vector2} alt="" className="vector2-login"/>
                    <img src={vector3} alt="" className="vector3-login"/>

                    {/* Contendo del panel */}
                    <div className="container-father-info-left-panel">
                        <div className="container-header-skills-login">
                            <div className="container-logo-header-panel-left">
                                <img src={logoTransparente} alt="logo-empresa" className="logo-png-empresa-panel-left"/> {/* Cambiar logo de la empresa */}
                            </div>
                            <div className="container-title-header-panel-left" >
                                <span className="title-login-panel-left">Dinamo</span> {/* Cambiar el nombre de la empresa */}
                                <span className="title2-login-panel-left">Gestión Documental</span>
                            </div>
                        </div>
                        <div className="container-logo-header-panel-left">
                            <img src={vector4} alt="logo-empresa" className="logo-png-empresa-panel-left"/>
                        </div>
                        <div className="container-skills-login">
                            <div className="skills-login1">
                                <CardSkill params={{icon: < IoIosCheckmarkCircle className="icon-card-skills"/>, title: "Firma Electrónica"}} />
                                <CardSkill params={{icon: < BsExclamationSquareFill className="icon-card-skills"/>, title: "Trazabilidad PKI"}} />
                            </div>

                            <div className="skills-login2">
                                <CardSkill params={{icon: < PiCertificateFill className="icon-card-skills"/>, title: "Certificado X.509"}} />
                                <CardSkill params={{icon: < SiReadthedocs className="icon-card-skills"/>, title: "Reportes Digitales"}} />
                            </div>
                            
                        </div>
                        <div className="skill-description-login">
                            <span className="skill-description1">Documentos con Validez legal.</span>
                            <span className="skill-description2">Firma, gestiona y audita desde un solo lugar.</span>
                        </div>
                    </div>
                </section>

                {/* Panel derecho(formulario de inicio de sesión) */}
                <section className="right-panel-login" id="right-panel-login">

                    <img src={vector} alt="" className="vector-login"/>
                    {/* Contedor padre del formulario */}
                    <div className="container-father-form-login" id="container-father-form-login">

                        <div className="container-title-form-login" id="container-title-form-login">
                            <div className="container-logo-header" id="container-logo-header">
                                <img src={logo} alt="logo-empresa" id="logo-png-empresa"/> {/* Cambiar logo de la empresa */}
                            </div>
                            <div className="container-title-header" id="container-title-header">
                                <span className="title-login">Dinamo</span> {/* Cambiar el nombre de la empresa */}
                                <span className="title2-login">Gestión Documental</span>
                            </div>
                        </div>

                        <hr className="line-form-login" />

                        <div className="container-description-form-login" id="container-description-form-login">
                            <span className="description-login">Bienvenido</span>
                            <span className="description2-login">Ingresa tus credenciales</span>
                        </div>


                        {/* Contendor del formulario de inicio de sesión */}
                        <div className="container-form-login">
                            <Form 
                                params={
                                    {
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

                                    }
                                } 
                                api_url={`${URL_API}/Inicio_Sesion`}
                            />
                        </div>


                        <div className="container-footer-form-login">
                            <span className="info-footer-form-login">ACS Soluciones Integrales S.A.S</span>
                        </div>
                         
                    </div>
                </section>
            </section>
            
        </>
    )
}