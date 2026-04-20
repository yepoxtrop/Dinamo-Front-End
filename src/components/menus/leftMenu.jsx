{/* Componentes */}
import { AiTwotoneDashboard } from "react-icons/ai";
import { SiGoogledocs } from "react-icons/si";
import { PiSignatureBold } from "react-icons/pi";
import { BiSolidReport } from "react-icons/bi";
import { IoSettings } from "react-icons/io5";
import { TargetItemMenu } from "../combinations/targetInputs.jsx";
//import ClipboardDocumentList from "../icons/ClipboardDocumentList.jsx";
{/* Media */}
import logo from "../../assets/logo/logo_v2.png";
{/* Estilos */}
import '../../styles/leftMenu.css'; 

export function LeftMenu (){
    return(
        <>
            <div className="container-left-menu">
                
                <div className="container-logo-left-menu">
                    <img src={logo} alt="logo" className="logo-left-menu"/>
                    <div className="container-title-left-menu">
                        <span className="title-left-menu">Dinamo</span>
                        <span className="title2-left-menu">Gestión Documental</span>
                    </div>
                </div>
                <hr className="hr-left-menu"/>
                <nav>
                    <ul className="list-left-menu">
                        <li><TargetItemMenu params={{icon:<AiTwotoneDashboard className="icon-target-menu"/>, info:"Dashboard"}}/></li>
                        <li><SiGoogledocs /> Documentos</li>
                            <ul className="sublist-left-menu">
                                <li>Documentos firmados</li>
                                <li>Documentos cargados</li>
                                <li>Documentos compartidos</li>
                            </ul>
                        <li><PiSignatureBold /> Firmas Digitales</li>
                            <ul className="sublist-left-menu">
                                <li>Firmas creadas</li>
                                <li>Firmas cargadas</li>
                            </ul>
                        <li><BiSolidReport /> Reportes</li>
                            <ul className="sublist-left-menu">
                                <li>Reportes generados</li>
                            </ul>
                        <li><IoSettings />Configuración</li>
                        <li>Acerca de nosotros</li>
                            <ul className="sublist-left-menu">
                                <li>Aciel Colombia</li>
                            </ul>
                        <li>Soporte Técnico</li>
                            <ul className="sublist-left-menu">
                                <li>Mesa de ayuda</li>
                            </ul>
                    </ul>
                </nav>
            </div>
        </>
    )
}