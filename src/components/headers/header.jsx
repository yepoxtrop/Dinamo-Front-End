{/* Compoenentes */}
import { useState } from "react";
import { FaBell } from "react-icons/fa6";
{/* Estilos */}
import '../../styles/headers.css';

export function Header({params}){

    const [todayDate, setTodayDate] = useState(new Date()); 
    const numberDay = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"]; 
    const numberMonth = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]; 

    function makeSmallName(){
        //const listName = params.userName.split(".");
        //return `${listName[0][0].toUpperCase()}${listName[1][0].toUpperCase()}`
        console.log(params.userName)
    }

    return(
        <>
            <header className="header-bar-info">
                <div className="header-bar-left">
                    <div><span className="header-name-page">{params.namePage}</span></div>
                    <div><span className="header-date-page">{`${numberDay[todayDate.getDay()-1]}, ${todayDate.getDate()} de ${numberMonth[todayDate.getMonth()]} de ${todayDate.getFullYear()}`}</span></div>
                </div>

                <div className="header-bar-info-right">
                    <div className="bar-info-right-notifications">
                        <span>{makeSmallName()}</span>
                        <FaBell />
                    </div>

                    <div className="bar-info-right-data1">
                        <div>
                            <span></span>{/* Iniciales Dominio */}
                        </div>
                        <div className="bar-info-right-data1_2">
                            <span>{params.userRealName}</span>{/* Nombre Usuario */}
                            <span>Empleado</span>{/* Empleo Usuario */}
                            <span>{params.userRol ==4?"Normal":"Otro"}</span>{/* Rol Usuario */}
                        </div>
                    </div>

                    <div className="bar-info-right-data2">
                        <span>Dominio</span>
                        <span>Aciel.co</span>{/* Dominio */}
                        <span>Activo</span>{/* Estado */}
                    </div>

                    <div className="bar-info-right-data3">
                        <span>Último Acceso</span>
                        <span>{numberMonth[todayDate.getMonth()]}</span>{/* Ultoimo acceso activo */}
                    </div>
                </div>            
            </header>
        </>
    )
}