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
{/* Constantes */}
import { URL_API } from "../../settings/variablesEntrono.js";
{/* Estilos */}
import '../../styles/general/pages/user/createSignature.css';
{/* Imagenes */}
import logoTransparente from "../../assets/logo/logo_transparente.png"
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
                <PrincipalLoader />
                
                {/* Menu */}
                <LeftMenu />
                
        
                {/* Contenido de la pagina */} 
                <section className="container-data-index">
        
                    {/* Encabezado */}

                    {/* Contenido de la seccion */}
                    <div className="container-data-info">
                        
                        {/* Formulario de inicio de sesion */}
                        <div>
                            <div>
                                <span>Información del solicitante</span>
                            </div>

                        </div>

                        {/* Articulos de seguridad */}
                        <div>
                            <article>
                                <div>
                                    <div>
                                        <MdOutlineSecurity />
                                        <span>Parametros De Seguridad</span>
                                    </div>
                                    <div>
                                        <ul>
                                            <li>
                                                <FaRegCheckCircle />
                                                <span>La contraseña debe tener al menos 12 caracteres y contener una combinación de letras, números y caracteres especiales.</span>
                                            </li>
                                            <li>
                                                <FaRegCheckCircle />
                                                <span>La firma digital es personal e intransferible, y el usuario es responsable de su uso.</span>
                                            </li>
                                            <li>
                                                <FaRegCheckCircle />
                                                <span>El usuario declara haber leído y acepta los términos y condiciones para el uso de la firma digital.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </article>

                            <article>
                                <div>
                                    <div>
                                        <MdOutlineSecurity />
                                        <span>Siguientes Pasos</span>
                                    </div>
                                    <div>
                                        <ul>
                                            <li>
                                                <span>1</span>
                                                <span>Validación de correo electrónico</span>
                                            </li>
                                            <li>
                                                <span>2</span>
                                                <span>Creación de firma digital(p12)</span>
                                            </li>
                                            <li>
                                                <span>3</span>
                                                <span>Descarga de firma privada</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </article>

                            <article>
                                <div>
                                    <img src={logoTransparente} alt="logoTransparente" />
                                    <span>Nuevas Mejoras Pronto</span>
                                </div>
                            </article>
                        </div>


                    </div>
                    
                </section>
            </section>
        </>
    )
}