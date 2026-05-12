import { CardSkillDetail } from "../cards/cardSkills.jsx";
import { FaRegBell } from "react-icons/fa6";
import { GoQuestion } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import "../../styles/toolbar.css";
export default function ToolBar(){
    const fechaActual = new Date();
    const opcionesFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const fechaFormateada = fechaActual.toLocaleDateString('es-ES', opcionesFecha);
    return(
        <>
            <header className="toolbar-header">
                <div className="toolbar-container">
                    {/* Seccion de fecha */}
                    <div className="toolbar-container-date">
                        <span>{fechaFormateada}</span>
                    </div>
                    
                    <div className="toolbar-container-user">
                        {/* Seccion de busqueda */}
                        <div className="toolbar-container-search">
                            <div><IoSearch /></div>
                        </div>

                        {/* Seccion de notificaciones */}
                        <div className="toolbar-container-notifications">
                            <div><FaRegBell /></div>
                            <div><GoQuestion /></div>
                        </div>

                        {/* Seccion de usuario, nombre, perfil y rol */}
                        <div className="toolbar-container-user-info">
                            <CardSkillDetail params={{
                                className: "toolbar",
                                title: "Luis Angel Sarmiento Diaz",
                                content: "Desarrollador Frontend",
                                icon: <img src="https://avatars.githubusercontent.com/yepoxtrop" alt="Foto de perfil" className="toolbar-profile-pic"/>
                            }}/>
                        </div>
                    </div>
                    
                </div>
            </header>
        </>
    )
}