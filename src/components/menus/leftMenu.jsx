{/* Componentes */}
import { AiTwotoneDashboard } from "react-icons/ai";
import { SiGoogledocs } from "react-icons/si";
import { PiSignatureBold, PiSignatureFill } from "react-icons/pi";
import { BiSolidReport } from "react-icons/bi";
import { IoSettings, IoDocumentAttach } from "react-icons/io5";
import { TargetItemMenu, TargetSubItemMenu } from "../combinations/targetInputs.jsx";
import { MdOutlineCorporateFare } from "react-icons/md";
import { FaCircleInfo, FaGithub, FaFileSignature } from "react-icons/fa6";
import { FaFileUpload } from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";
import { IoMdCloudUpload } from "react-icons/io";
//import ClipboardDocumentList from "../icons/ClipboardDocumentList.jsx";
{/* Media */}
import logo from "../../assets/logo/logo_v2.png";
{/* Estilos */}
import '../../styles/leftMenu.css'; 

export function LeftMenu (){
    return(
        <>
            <div className="container-father-menu">
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
                        <li><TargetItemMenu params={{icon:<SiGoogledocs className="icon-target-menu"/>, info:"Documentos"}}/></li>
                            <ul className="sublist-left-menu">
                                <li><TargetSubItemMenu params={{icon:<FaFileSignature className="icon-target-sub-menu" />, info:"Documentos firmados"}} /></li>
                                <li><TargetSubItemMenu params={{icon:<FaFileUpload className="icon-target-sub-menu" />, info:"Documentos cargados"}} /></li>
                                <li><TargetSubItemMenu params={{icon:<IoDocumentAttach className="icon-target-sub-menu" />, info:"Colaboraciones"}} /></li>
                            </ul>
                        <li><TargetItemMenu params={{icon:<PiSignatureBold className="icon-target-menu"/>, info:"Firmas Digitales"}}/></li>
                            <ul className="sublist-left-menu">
                                <li><TargetSubItemMenu params={{icon:<PiSignatureFill className="icon-target-sub-menu" />, info:"Firmas creadas"}} /></li>
                                <li><TargetSubItemMenu params={{icon:<IoMdCloudUpload className="icon-target-sub-menu" />, info:"Firmas cargadas"}} /></li>
                            </ul>
                        <li><TargetItemMenu params={{icon:<BiSolidReport className="icon-target-menu"/>, info:"Reportes"}}/></li>
                            <ul className="sublist-left-menu">
                                <li><TargetSubItemMenu params={{icon:<VscGraph  className="icon-target-sub-menu"/>, info:"Reportes generados"}} /></li>
                            </ul>
                        <li><TargetItemMenu params={{icon:<IoSettings className="icon-target-menu"/>, info:"Configuración"}}/></li>
                        <li><TargetItemMenu params={{icon:<MdOutlineCorporateFare className="icon-target-menu"/>, info:"Acerca de nosotros"}}/></li>
                            <ul className="sublist-left-menu">
                                <li><TargetSubItemMenu params={{icon:<FaGithub className="icon-target-sub-menu"/>, info:"Neo Dev"}} /></li>
                            </ul>
                    </ul>
                    
                </nav>
                </div>

                <div className="container-left-menu">
                    <hr className="hr-left-menu"/>
                    <ul className="list-left-menu">
                        <li><TargetItemMenu params={{icon:<FaCircleInfo className="icon-target-menu"/>, info:"Soporte Técnico"}}/></li>
                    </ul>
                    <span className="description-left-menu">V1.0 &bull; &copy; 2025 Dinamo</span>
                </div>
            </div>
            
        </>
    )
}