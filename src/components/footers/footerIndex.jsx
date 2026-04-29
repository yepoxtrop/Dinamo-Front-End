import { CardDianmoo } from "../cards/cardDinamo.jsx"

export function FooterIndex(){
    return(
        <>
            <footer>
                <CardDianmoo />

                <div>
                    <table>
                        <tr>
                            <td>
                                <ul>
                                    <li>Producto</li>
                                    <li>Funcionalidades</li>
                                    <li>Seguridad</li>
                                    <li>Precios</li>
                                </ul>
                            </td>
                            <td>
                                <ul>
                                    <li>Desarrollador</li>
                                    <li>Sobre Dinamo</li>
                                    <li>Team</li>
                                    <li>Blog</li>
                                </ul>
                            </td>
                            <td>
                                <ul>
                                    <li>Soporte</li>
                                    <li>Documentación</li>
                                    <li>API Reference</li>
                                    <li>soporte@dinamo.co</li>
                                </ul>
                            </td>
                            <td>
                                <ul>
                                    <li>Legal</li>
                                    <li>Términos de uso</li>
                                    <li>Politicas de privacidad</li>
                                    <li>Seguridad</li>
                                </ul>
                            </td>
                            <td>
                                <ul>
                                    <li>Colombia &#8226; Bogotá D.C. </li>
                                    <li>Desarrollo Colombiano </li>
                                    <li>&copy; 2026 Dinamo &#8226; v1.0</li>
                                    <li>Todos los derechos reservados</li>
                                </ul>
                            </td>
                        </tr>
                    </table>
                </div>

            </footer>
        </>
    )
}