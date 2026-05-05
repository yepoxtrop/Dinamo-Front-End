{/* Componentes */}
import { CardDianmoo } from "../cards/cardDinamo.jsx"
{/* Media */}
import logoTransparente from "../../assets/logo/logo_transparente.png"
{/* Estilos */}
import '../../styles/headers.css';

export function HeaderIndex(){
    return(
        <>
            <header className="header-index">
                <CardDianmoo params={{img:logoTransparente, fatherClass:"header"}}/>

                <div className="header-index-container-list">
                    <ul className="header-index-list">
                        <li className="header-index-list-info">
                            <a href="">¿Qué es Dinamo?</a>
                        </li>
                        <li className="header-index-list-info">
                            <a href="">Funcionalidades</a>
                        </li>
                        <li className="header-index-list-info">
                            <a href="">¿Para quién?</a>
                        </li>
                        <li className="header-index-list-info">
                            <a href="">Seguridad</a>
                        </li>
                        {/* <li>Precios</li> */}
                        <li className="header-index-list-info">
                            <a href="https://github.com/yepoxtrop" target="blank">Contacto</a>
                        </li>
                        <li className="header-index-list-button">
                            <button className="header-index-button1">Iniciar Sesión</button>
                        </li>
                        <li className="header-index-list-button">
                            <button className="header-index-button2">Registrarse</button>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    )
}