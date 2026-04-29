import { CardDianmoo } from "../cards/cardDinamo.jsx"

export function HeaderIndex(){
    return(
        <>
            <header>
                <CardDianmoo />

                <div>
                    <ul>
                        <li>¿Qué es Dinamo?</li>
                        <li>Funcionalidades</li>
                        <li>¿Para quién?</li>
                        <li>Seguridad</li>
                        {/* <li>Precios</li> */}
                        <li>Contacto</li>
                        <li><button>Iniciar Sesión</button></li>
                        <li><button>Registra</button></li>
                    </ul>
                </div>
            </header>
        </>
    )
}