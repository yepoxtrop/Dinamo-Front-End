{/* Componentes */}
import { LeftMenu } from "../../components/menus/leftMenu.jsx";
import { Header } from "../../components/headers/header.jsx";
import { Form } from "../../components/forms/form.jsx";
import { LuCircleUserRound } from "react-icons/lu";
import { HiOutlineIdentification } from "react-icons/hi2";
import { MdOutlineMail } from "react-icons/md";
import { GrUserManager } from "react-icons/gr";
import { RiLockPasswordLine } from "react-icons/ri";
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { PiUserListFill } from "react-icons/pi";
import { MdOutlineSecurity } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
import PrincipalLoader from "../../components/loaders/loaders.jsx";
import { CardSkillBasic, CardSkillDetail } from "../../components/cards/cardSkills.jsx";
import ToolBar from "../../components/combinations/toolbars.jsx";
{/* Constantes */}
import { URL_API } from "../../settings/variablesEntrono.js";
{/* Estilos */}
import '../../styles/general/pages/user/createSignature.css';
{/* Imagenes */}
import logoTransparente from "../../assets/logo/logo_transparente.png"
import logoVector from "../../assets/dinamo_vector_minimalist.svg"
{/* Estado */}
import {store} from "../../services/stores/store.js";
{/* Actions */}
{/* Hooks */}
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
{/* Paquetes */}
import axios from "axios";


export const CreateSignature = () => {
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
                    "icon": LuCircleUserRound
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
                    "icon": LuCircleUserRound
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
                            <div>
                                <span>Información del solicitante</span>
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