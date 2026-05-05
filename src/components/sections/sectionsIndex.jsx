{/* Componentes */}
import { CardHelpProduct, CardHelpProductFlow, CardHelpProductFunctions, CardInfoBasic } from "../cards/cardHelpsProduct.jsx";
import { IoCloseOutline, IoCheckboxOutline } from "react-icons/io5";
import { MdOutlineMoreTime, MdOutlineSecurity } from "react-icons/md";
import { LuSquareArrowRight, LuWorkflow } from "react-icons/lu";
import { PiCubeFocus } from "react-icons/pi";
import { BsPlusSquareDotted, BsFiletypeDoc } from "react-icons/bs";
import { FaRegUser, FaBalanceScaleRight } from "react-icons/fa";
import { AiOutlineAudit } from "react-icons/ai";
import { SiDocsdotrs } from "react-icons/si";
import { IoMdCloudUpload } from "react-icons/io";
{/* Estilos */}
import "../../styles/sectionsIndex.css";
{/* Media */}
import ovalo1 from "../../assets/svg/ovalo.svg";
import ovalo2 from "../../assets/svg/ovalo2.svg";

export function IndexWelcomeSection(){
    return(
        <>
            <section>

            </section>
        </>
    )
}

export function IndexProblemsSection(){
    return(
        <>
            <section className="index-problems-section">
                <div className="title-container-index-problems-section">
                    <span className="title1-index-problems-section">¿TE SUENA FAMILIAR ALGUNO DE ESTOS PROBLEMNAS?</span>
                    <span className="title2-index-problems-section">El caos documental cuesta tiempo y dinero</span>
                </div>
                <div className="cards-container-index-problems-section">
                    <CardInfoBasic params={{icon:<IoCloseOutline className="icon-circle-light-red"/>, title:"Documentos perdidos", info:"¿Dónde quedó la versión final del contrato que firmamos el mes pasado?Horas buscando emails.", time:"18 min por búsqueda · 6 veces/semana", percentage:"81" , percentageAlert:"del tiempo perdido", className:"card-circle-light-red"}}/>

                    <CardInfoBasic params={{icon:<IoCloseOutline className="icon-circle-light-orange"/>, title:"Aprobaciones Externas", info:"Necesito que 3 personas firmen esto, pero cada una está en una ciudad distinta. Días en espera.", time:"4.2 días por aprobación multi-firma", percentage:"66", percentageAlert:"tiempo en espera",  className:"card-circle-light-orange"}}/>

                    <CardInfoBasic params={{icon:<IoCloseOutline className="icon-circle-light-purple"/>, title:"Sin trazabilidad ni auditoría", info:"¿Quién cambió este contrato y cuándo? No hay forma de saberlo. Registros legalales latentes", time:"7.8 horas en busqueda de logs transcacionales", percentage:"73", percentageAlert:"en riesgo",  className:"card-circle-light-purple"}}/>
                </div>
                <div>
                    <span className="title3-index-problems-section">Dinamo resuelve los tres. Desde el primer día</span>
                </div>
            </section>
        </>
    )
}


export function IndexHelpsSection(){
    return(
        <>
            <section className="index-help-section">
                <div className="title-container-index-help-section">
                    <span className="title1-index-help-section">LO QUE DINAMO TE OFRECE</span>
                    <span className="title2-index-help-section">Beneficios reales desde el día uno</span>
                </div>
                <div className="cards-container-index-help-section">
                    <CardHelpProduct params={{icon:< MdOutlineMoreTime className="icon-circle-dark-blue"/>, title:"Ahorra tiempo", subTitle:"72% menos gestión", info:"De días a horas. Firma y aprueba desde donde estés, en minutos.", extras:["4.2 días", "1.2 días"] , className:"card-circle-dark-blue"}}/>
                    
                    <CardHelpProduct params={{icon:< IoCheckboxOutline className="icon-circle-dark-green"/>, title:"Validez legal total", subTitle:"Ley 527 · X.509 · RFC 3161", info:"Cada firma tiene validez jurídica. Certificados verificables ante terceros.", extras:["100% admisible en juicio"] , className:"card-circle-dark-green"}}/>
                    
                    <CardHelpProduct params={{icon:< PiCubeFocus className="icon-circle-dark-purple"/>, title:"Todo centralizado", subTitle:"Un solo repositorio seguro", info:"Encuentra cualquier documento en segundos con búsqueda inteligente.", extras:["Búsqueda en menos de 3 seg"] , className:"card-circle-dark-purple"}}/>
                    
                    <CardHelpProduct params={{icon:< LuSquareArrowRight className="icon-circle-dark-orange"/>, title:"Sin papel ni impresión", subTitle:"100% digital · Sostenible", info:"Elimina costos de papel, impresión, mensajería y almacenamiento físico.", extras:["Ahorro $18M/año aprox."] , className:"card-circle-dark-orange"}}/>
                </div>
            </section>
        </>
    )
}


export function IndexWorkFlowSection(){
    return(
        <>
            <section className="index-workflow-section">
                <div className="title-container-index-workflow-section">
                    <span className="title1-index-workflow-section">ASÍ DE SENCILLO</span>
                    <span className="title2-index-workflow-section">¿Cómo funciona Dinamo?</span>
                    <span className="title3-index-workflow-section">Tres pasos para digitalizar tu gestión documental completamente</span>
                </div>
                <div className="cards-container-index-functions-section">
                    <hr className="hr-index-workflow-section"/>
                    <CardHelpProductFlow params={{value:"1", title:"Sube o crea", subTitle:"tu documento", info:"Arrastra un PDF, Word o Excel. O usa una plantilla prediseñada para generar el documento con tus datos en segundos.", extras:["PDF/DOCX", "Plntaillas", "Drag&Drop"], className:"card-circle-dark-blueNumber"}}/>

                    <CardHelpProductFlow params={{value:"2", title:"Define el flujo", subTitle:"y envía a firmar", info:"Selecciona quiénes deben revisar, aprobar o firmar. En qué orden. Cada persona recibe un email con enlace directo. Sin instalar nada.", extras:["Multi-firma", "Recordatorio", "Por email&Drop"], className:"card-circle-dark-greenNumber"}}/>
                
                    <CardHelpProductFlow params={{value:"3", title:"Archivado y listo", subTitle:"automáticamente", info:"Cuando todos firman, el documento queda archivado con sello de tiempo, hash de integridad y certificado digital verificable. Para siempre.", extras:["Certificado", "Inmutable", "Auditable"], className:"card-circle-dark-purpleNumber"}}/>
                </div>
            </section>
        </>
    )
}


export function IndexFunctionsSection(){
    return(
        <>
            <section className="index-functions-section">
                <div className="title-container-index-functions-section">
                    <span className="title1-index-functions-section">TODO EN UN SOLO PRODUCTO</span>
                    <span className="title2-index-functions-section">Funcionalidades diseñadas para tu equipo</span>
                    <span className="title3-index-functions-section">Cada módulo resuelve un dolor específico de tu operación</span>
                </div>
                <div className="cards-container-index-functions-section">
                    <CardHelpProductFunctions params={{icon:<BsPlusSquareDotted className="icon-dark-blue" />, title:"Firma digital certificada", subTitle:"X.509 · PKI · RFC 3161 · OCSP", info:"Firma con validez legal plena. Sello de tiempo, verificación OCSP en tiempo real y soporte para múltiples firmantes.", extras:["Firma avanzada", "Co-firma", "Timestamp"], line:true, className:"card-uniform-dark-blue"}}/>

                    <CardHelpProductFunctions params={{icon:<LuWorkflow className="icon-dark-green" />, title:"Flujos de aprobación", subTitle:"BPMN · Secuencial · Paralelo", info:"Define quién aprueba qué y en qué orden. Con condiciones, SLAs y escalamiento automático.", extras:["Editor visual", "BPMN 2.0", "Recordatorio auto"], line:true, className:"card-uniform-dark-green"}}/>

                    <CardHelpProductFunctions params={{icon:<AiOutlineAudit className="icon-dark-purple" />, title:"Auditoría e historial", subTitle:"Inmutable · Exportable · Blockchain-hash", info:"Cada acción queda registrada: quién, cuándo y qué cambió. Hash encadenado por documento.", extras:["Log inmutable", "Export PDF/Excel"], line:true, className:"card-uniform-dark-purple"}}/>

                    <CardHelpProductFunctions params={{icon:<BsFiletypeDoc className="icon-dark-orange"/>, title:"Plantillas inteligentes", subTitle:"DOCX · PDF · Variables dinámicas", info:"Crea plantillas con campos variables. Genera 100 contratos iguales en segundos, con datos distintos.", extras:["Campos", "Versionado"], line:true, className:"card-uniform-dark-orange"}}/>

                    <CardHelpProductFunctions params={{icon:<FaRegUser className="icon-dark-red"/>, title:"Gestión de usuarios", subTitle:"LDAP · AD · SSO · MFA · Roles", info:"Integración con Active Directory. SSO corporativo. Permisos por área, rol y tipo de documento.", extras:["LDAP / AD", "MFA"], line:true, className:"card-uniform-dark-red"}}/>

                    <CardHelpProductFunctions params={{icon:<SiDocsdotrs className="icon-dark-cian"/>, title:"Reportes y analytics", subTitle:"Dashboard · Excel · PDF · Tiempo real", info:"KPIs en tiempo real: tiempos, firmas, cuellos de botella. Reportes programados automáticos.", extras:["Tiempo real", "Programado"], line:true, className:"card-uniform-dark-cian"}}/>

                </div>
            </section>
        </>
    )
}


export function IndexProfileSection(){
    return(
        <>
            <section className="index-profile-section">
                <div className="title-container-index-profile-section">
                    <span className="title1-index-profile-section">SECTORES Y EQUIPOS</span>
                    <span className="title2-index-profile-section">¿Para quién es Dinamo?</span>
                    <span className="title3-index-profile-section">Diseñado para cualquier empresa que mueva documentos y necesite control total</span>
                </div>
                <div className="cards-container-index-profile-section">
                    <CardHelpProductFlow params={{value:"⚖️", title:"Legal y Contratos", subTitle:"Firmas, NDAs, contratos", info:"Gestiona contratos con clientes, proveedores y empleados. Alertas de vencimiento automáticas.", extras:["Contratos", "Vencimientos"], line:false, className:"card-uniform-light-blueEmoji"}}/>
                    
                    <CardHelpProductFlow params={{value:"👥", title:"Recursos Humanos", subTitle:"Onboarding, nómina, acuerdos", info:"Automatiza la firma de contratos laborales. Guarda acuerdos de confidencialidad y evaluaciones firmadas.", extras:["Onboarding dig.", "Acuerdos RR.HH"], line:false, className:"card-uniform-light-greenEmoji"}}/>

                    <CardHelpProductFlow params={{value:"🏦", title:"Financiero y Banca", subTitle:"Pagarés, órdenes, aprobaciones", info:"Digitaliza pagarés, órdenes de pago y aprobaciones de crédito con trazabilidad regulatoria completa.", extras:["Pagarés dig.", "Trazabilidad reg."], line:false, className:"card-uniform-light-purpleEmoji"}}/>

                    <CardHelpProductFlow params={{value:"🏗️", title:"Compras y Logística", subTitle:"Órdenes, proveedores, actas", info:"Gestiona órdenes de compra, cotizaciones y actas de entrega con firma digital del proveedor incluida.", extras:["Órds. de compra", "Órds. de compra"], line:false, className:"card-uniform-light-orangeEmoji"}}/>
                </div>
            </section>
        </>
    )
}

export function IndexRequerimentsSection(){
    return(
        <>
            <section className="index-requeriments-section">
                <div className="title-container-index-requeriments-section"> 
                    <span className="title1-index-requeriments-section">CONFIANZA Y CUMPLIMIENTO NORMATIVO</span>
                    <span className="title2-index-requeriments-section">Tu información, protegida al máximo nivel</span>
                    <span className="title3-index-requeriments-section">Seguridad bancaria aplicada a tus documentos corporativos</span>
                </div>
                <div className="cards-container-index-requeriments-section">
                    <CardHelpProductFunctions params={{icon:<MdOutlineSecurity className="icon-light-blue"/>, title:"Cifrado AES-256", subTitle:"Datos en reposo y tránsito", info:"Todos tus documentos están cifrados con AES-256, el estándar del sistema bancario internacional.", extras:["AES-256", "TLS 1.3"], line:false, className:"card-uniform-light-blue"}}/>
                    
                    <CardHelpProductFunctions params={{icon:<FaRegUser className="icon-light-green"/>, title:"Autenticación fuerte", subTitle:"MFA · SSO · OAuth2", info:"MFA obligatorio para roles sensibles. SSO con tu proveedor de identidad corporativo ya existente.", extras:["MFA", "SSO", "SSO"], line:false, className:"card-uniform-light-green"}}/>

                    <CardHelpProductFunctions params={{icon:<FaBalanceScaleRight className="icon-light-purple"/>, title:"Cumplimiento legal", subTitle:"Ley 527 · GDPR compatible", info:"Cumple con la Ley 527 de 1999 (comercio electrónico Colombia) y compatible con GDPR y ISO 27001.", extras:["Ley 527", "ISO 27001", "GDPR"], line:false, className:"card-uniform-light-purple"}}/>

                    <CardHelpProductFunctions params={{icon:<IoMdCloudUpload className="icon-light-orange"/>, title:"On-premise o nube", subTitle:"Tus datos no salen de tu empresa", info:"Dinamo se instala en tus propios servidores (on-prem) o en nube privada. Cero dependencia de terceros.", extras:["On-premise", "Nube privada"], line:false, className:"card-uniform-light-orange"}}/>
                </div>
            </section>
        </>
    )
}

export function IndexExprienceSection(){
    return(
        <>
            <section className="index-experience-section">
                <div className="title-container-index-experience-section">
                    <span className="title1-index-experience-section">ASÍ DE SENCILLO</span>
                    <span className="title2-index-experience-section">¿Cómo funciona Dinamo?</span>
                    <span className="title3-index-experience-section">Tres pasos para digitalizar tu gestión documental completamente</span>
                </div>
                <div className="cards-container-index-experience-section">
                    <CardHelpProductFlow params={{value:"1", title:"Sube o crea", subTitle:"tu documento", info:"Arrastra un PDF, Word o Excel. O usa una plantilla prediseñada para generar el documento con tus datos en segundos.", extras:["PDF/DOCX", "Plntaillas", "Drag&Drop"], className:""}}/>

                    <CardHelpProductFlow params={{value:"2", title:"Define el flujo", subTitle:"y envía a firmar", info:"Selecciona quiénes deben revisar, aprobar o firmar. En qué orden. Cada persona recibe un email con enlace directo. Sin instalar nada.", extras:["Multi-firma", "Recordatorio", "Por email&Drop"], className:""}}/>
                
                    <CardHelpProductFlow params={{value:"3", title:"Archivado y listo", subTitle:"automáticamente", info:"Cuando todos firman, el documento queda archivado con sello de tiempo, hash de integridad y certificado digital verificable. Para siempre.", extras:["Certificado", "Inmutable", "Auditable"], className:""}}/>
                </div>
            </section>
        </>
    )
}

export function IndexSuscriptionSection(){
    return(
        <>
            <section className="index-suscription-section">
                <div className="title-container-index-suscription-section">
                    <span className="title1-index-suscription-section">PLANES Y PRECIOS</span>
                    <span className="title2-index-suscription-section">Elige el plan que se adapta a tu empresa</span>
                    <span className="title3-index-suscription-section">Todos incluyen soporte, actualizaciones y 30 días de prueba gratis</span>
                </div>
                <div className="cards-container-index-suscription-section">
                    <CardHelpProductFlow params={{value:"1", title:"Sube o crea", subTitle:"tu documento", info:"Arrastra un PDF, Word o Excel. O usa una plantilla prediseñada para generar el documento con tus datos en segundos.", extras:["PDF/DOCX", "Plntaillas", "Drag&Drop"], className:""}}/>

                    <CardHelpProductFlow params={{value:"2", title:"Define el flujo", subTitle:"y envía a firmar", info:"Selecciona quiénes deben revisar, aprobar o firmar. En qué orden. Cada persona recibe un email con enlace directo. Sin instalar nada.", extras:["Multi-firma", "Recordatorio", "Por email&Drop"], className:""}}/>
                
                    <CardHelpProductFlow params={{value:"3", title:"Archivado y listo", subTitle:"automáticamente", info:"Cuando todos firman, el documento queda archivado con sello de tiempo, hash de integridad y certificado digital verificable. Para siempre.", extras:["Certificado", "Inmutable", "Auditable"], className:""}}/>
                </div>
            </section>
        </>
    )
}

export function IndexReadySection(){
    return(
        <>
            <section className="index-ready-section">
                <img src={ovalo1} alt="ovalo1--svg" className="ovalo1-index-ready-section"/>
                <img src={ovalo2} alt="ovalo2-svg" className="ovalo2-index-ready-section"/>
                <div className="title-container-index-ready-section">
                    <span className="title1-index-ready-section">¿Listo para digitalizar</span>
                    <span className="title2-index-ready-section">tu gestión documental?</span>
                </div>
                <div className="subTitle-container-index-ready-section">
                    <span className="subTitle1-index-ready-section">Sin instalación compleja. Sin contratos largos. Empieza ahora mismo</span>
                </div>
                <div className="buttons-container-index-ready-section">
                    <button className="button1-index-ready-section">Iniciar Sesión</button>
                    <button className="button2-index-ready-section">Registrarse</button>
                </div>
            </section>
        </>
    )
}