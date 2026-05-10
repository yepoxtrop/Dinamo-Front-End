import { CardDinamo } from "../cards/cardDinamo.jsx"
{/* Media */}
//import logoTransparente from "../../assets/logo/logo_transparente.png"
import logoTransparenteV2 from "../../assets/logo/logo_v2.png"
{/* Estilos */}
import "../../styles/footer.css"

export function FooterIndex(){
    return(
        <>
            <footer className="footer-index">
                <CardDinamo params={{img:logoTransparenteV2, fatherClass:"footer"}}/>

                <div className="footer-table-container">

                    <div className="footer-table">
                        <div>
                            <ul className="footer-list" >
                                <li className="footer-title"><b>Producto</b></li>
                                <li className="footer-subTitle"><a href="#">Funcionalidades</a></li>
                                <li className="footer-subTitle"><a href="#">Seguridad</a></li>
                                <li className="footer-subTitle"><a href="#">Precios</a></li>
                            </ul>
                        </div>

                        <div>
                            <ul className="footer-list" >
                                <li className="footer-title"><b>Desarrollo</b></li>
                                <li className="footer-subTitle"><a href="">Sobre Dinamo</a></li>
                                <li className="footer-subTitle"><a href="">Team</a></li>
                                <li className="footer-subTitle"><a href="">Blog</a></li>
                            </ul>
                        </div>

                        <div>
                            <ul className="footer-list" >
                                <li className="footer-title"><b>Soporte</b></li>
                                <li className="footer-subTitle"><a href="">Documentación</a></li>
                                <li className="footer-subTitle"><a href="">API Reference</a></li>
                                <li className="footer-subTitle"><a href="">soporte@dinamo.co</a></li>
                            </ul>
                        </div>

                        <div className="container-last-item-footer-table">
                            <ul className="footer-list" >
                                <li className="footer-title"><b>Legal</b></li>
                                <li className="footer-subTitle"><a href="">Términos de uso</a></li>
                                <li className="footer-subTitle"><a href="">Politicas de privacidad</a></li>
                                <li className="footer-subTitle"><a href="">Seguridad</a></li>
                            </ul>
                        </div>

                        <div>
                            <ul className="footer-list" >
                                <li className="footer-subTitle3">Colombia &#8226; Bogotá D.C. </li>
                                <li className="footer-subTitle3">Desarrollo Colombiano </li>
                                <li className="footer-subTitle2" >&copy; 2026 Dinamo &#8226; v1.0</li>
                                <li className="footer-subTitle2" >Todos los derechos reservados</li>
                            </ul>
                        </div>                    
                    </div>
                    
                </div>

            </footer>
        </>
    )
}