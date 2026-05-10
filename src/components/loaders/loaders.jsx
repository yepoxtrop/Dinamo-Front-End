{/* Componentes */}
import { IoWifi } from "react-icons/io5";
import { CardDinamo } from "../cards/cardDinamo.jsx";
import { GoShieldCheck } from "react-icons/go";
import { CardSkillBasic } from "../cards/cardSkills.jsx";
import { TbLockPassword } from "react-icons/tb";
{/* Estilos */}
import "../../styles/loaders.css";
import "../../styles/animations/loader.css";
{/* Media */}
import logoTransparente from "../../assets/logo/logo_transparente.png";

export default function PrincipalLoader(){
    return(
        <>
            <section className="section-loader">

                <CardDinamo params={{fatherClass:"loader", img:logoTransparente, }}/>

                <div className="container-principal-section-loader">
                    <div className="container-loader-animation">
                        <div className="figure-loader" id=""></div>
                        <div className="figure-loader" id=""></div>
                        <div className="figure-loader" id=""></div>
                        <div className="figure-loader" id=""></div>
                        <div className="figure-loader" id=""></div>
                        <div className="figure-loader" id=""></div>
                        <div className="figure-loader" id=""></div>
                        <div className="figure-loader" id=""></div>
                        <div className="figure-loader" id=""></div>
                        <div className="figure-loader" id=""></div>
                    </div>

                    <div className="message-under-loader">
                        <CardSkillBasic params={{className:"messageLoader", icon:<GoShieldCheck />, content:"Procesando Solicitud..."}}/>
                        <CardSkillBasic params={{className:"messageLoader2", content:"Por favio, espere un momento mientras preparamos todo."}}/>
                    </div>
                </div>

                <div className="footer-loader">
                    <CardSkillBasic params={{className:"securityVersion", icon:<TbLockPassword />, content:"Dinamo Secutiry v1.0"}}/>
                    <span>&copy; 2026 Dinamo. Todos los derechos reservados</span>
                </div>                

            </section>
        </>
    )
}