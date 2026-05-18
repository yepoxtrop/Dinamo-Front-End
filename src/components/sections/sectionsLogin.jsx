{/* Componentes */}
import { Form } from "../forms/form";
import { CardSkill } from "../../components/cards/cardSkills.jsx";
import { ToastLogin } from "../../components/combinations/toasts.jsx";
import {  User4Outlined,   Locked2Outlined, XmarkSolid} from "@lineiconshq/free-icons";
import { BsExclamationSquareFill } from "react-icons/bs";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { PiCertificateFill } from "react-icons/pi";
import { SiReadthedocs } from "react-icons/si";
import { CardDinamo } from "../cards/cardDinamo.jsx";
import { RiUserLine } from "react-icons/ri";
{/* Hooks */}
import { useSelector } from "react-redux";
{/* Constantes */}
import { URL_API } from "../../settings/variablesEntrono.js";
{/* Estilos */}
import "../../styles/general/pages/general/sectionsLogin.css";
{/* Media */}
import logoTransparente from "../../assets/logo/logo_transparente.png";
import logoV2 from "../../assets/logo/logo_v2.png"
import vector from "../../assets/circulo.svg";
import vector2 from "../../assets/circulo2.svg";
import vector3 from "../../assets/circulo3.svg";   
import vector4 from "../../assets/documentos.svg";
import logo from "../../assets/logo/logo.png";

/**
 * Renderiza el panel izquierdo de la pantalla de inicio de sesion.
 *
 * Este componente muestra la identidad visual de Dinamo, los vectores
 * decorativos, la imagen central del panel y las tarjetas con las
 * caracteristicas principales del producto.
 *
 * @returns {JSX.Element} Panel izquierdo informativo del login.
 *
 * @author Luis Angel Sarmiento Diaz
 */
export function LeftPanelLogin(){
    return(
        <>
            <section className="left-panel-login">

                {/* Vectores circulares */}
                <img src={vector2} alt="" className="vector2-login"/>
                <img src={vector3} alt="" className="vector3-login"/>

                {/* Contendo del panel izquierdo */}
                <div className="container-father-info-left-panel">
                    
                    {/* Tarjeta de encabezado */}
                    <CardDinamo params={{fatherClass:"loginLeft", img:logoV2, }} />

                    {/* Vecotr del medio */}
                    <div className="container-vector-panel-left">
                        <img src={vector4} alt="vector" className="vector-panel-left"/>
                    </div>
                    
                    {/* Caracteristicas finales */}
                    <div className="skill-description-login">
                        <div className="container-skills-login">
                            <CardSkill params={{icon: < IoIosCheckmarkCircle className="icon-card-skills"/>, title: "Firma Electrónica"}} />
                            <CardSkill params={{icon: < BsExclamationSquareFill className="icon-card-skills"/>, title: "Trazabilidad PKI"}} />
                            <CardSkill params={{icon: < PiCertificateFill className="icon-card-skills"/>, title: "Certificado X.509"}} />
                            <CardSkill params={{icon: < SiReadthedocs className="icon-card-skills"/>, title: "Reportes Digitales"}} />
                        </div>
                        <div className="container-description-login">
                            <span className="skill-description1">Documentos con Validez legal.</span>
                            <span className="skill-description2">Firma, gestiona y audita desde un solo lugar.</span>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    )
}


export function RightPanelLogin(){
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
                "icon": <RiUserLine />
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
                "icon": <PiCertificateFill />
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
    {/* */}
    return(
        <>
            <section className="right-panel-login">

                    {/* <img src={vector} alt="" className="vector-login"/> */}

                    {/* Contedor padre del formulario */}
                    <div className="container-father-form-login">
                        
                        {/* Tarjeta de Dinamo */}
                        <CardDinamo params={{fatherClass:"loginRight", img:logoTransparente, }} />
                        
                        <hr className="line-form-login" />
                        
                        {/* Titulo del formulario */}
                        <div className="container-description-form-login" id="container-description-form-login">
                            <span className="description-login">Bienvenido</span>
                            <span className="description2-login">Ingresa tus credenciales</span>
                        </div>

                        {/* Contendor del formulario de inicio de sesión */}
                        <div className="container-form-login">
                            <Form 
                                params={paramsFormn} 
                                api_url={url}
                                api_url2={url2}
                            />
                        </div>

                        {/* Footer del formulario */}
                        <div className="container-footer-form-login">
                            <span className="info-footer-form-login">ACS Soluciones Integrales S.A.S</span>
                        </div>
                         
                    </div>
                </section>
        </>
    )
}
