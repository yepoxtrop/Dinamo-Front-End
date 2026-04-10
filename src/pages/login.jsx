{/* Componentes */}
import { Form } from "../components/forms/form.jsx";
import { Lineicons } from "@lineiconshq/react-lineicons";
import { ToastLogin } from "../components/combinations/toasts.jsx";
import {  User4Outlined,   Locked2Outlined,} from "@lineiconshq/free-icons";
{/* Constantes */}
import { URL_API } from "../settings/variablesEntrono.js";
{/* Estilos */}
import '../styles/login.css';
{/* Imagenes */}
import logo from "../assets/logo/logo.png";

export const Login = () =>{
    return(
        <>  

            {/* Pagina de inicio de sesión */}
            <section className="body-login" id="body-login">

                <ToastLogin params={{
                    "icon":"",
                    "title":"Fallo En Inicio De Sesion",
                    "message":"Credenciales invalidas, reviselas e intente nuevamente"
                }} />

                {/* Panel izquierdo(diseño) */}
                <section className="left-panel-login" id="left-panel-login">

                </section>

                {/* Panel derecho(formulario de inicio de sesión) */}
                <section className="right-panel-login" id="right-panel-login">

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