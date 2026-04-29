{/* Componentes */}
import { CardInfoBasic } from "../cards/cardInfoBasico.jsx"
import { CardHelpProduct, CardHelpProductFlow, CardHelpProductFunctions } from "../cards/cardHelpsProduct.jsx";
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
            <section>
                <div>
                    <span>¿TE SUENA FAMILIAR ALGUNO DE ESTOS PROBLEMNAS?</span>
                    <span>El caos documental cuesta tiempo y dinero</span>
                </div>
                <div>
                    <CardInfoBasic params={{icon:<IoCloseOutline />, title:"Documentos perdidos", info:"¿Dónde quedó la versión final del contrato que firmamos el mes pasado?Horas buscando emails.", time:"18 min por búsqueda · 6 veces/semana", percentage:"81" , percentageAlert:"del tiempo perdido"}}/>

                    <CardInfoBasic params={{icon:<IoCloseOutline />, title:"Aprobaciones Externas", info:"Necesito que 3 personas firmen esto, pero cada una está en una ciudad distinta. Días en espera.", time:"4.2 días por aprobación multi-firma", percentage:"66", percentageAlert:"tiempo en espera"}}/>

                    <CardInfoBasic params={{icon:<IoCloseOutline />, title:"Sin trazabilidad ni auditoría", info:"¿Quién cambió este contrato y cuándo? No hay forma de saberlo. Registros legalales latentes", time:"Indefinido falta de lof de cambios documentales", percentage:"73", percentageAlert:"en riesgo"}}/>
                </div>
                <div>Dinamo resuelve los tres. Desde el primer día</div>
            </section>
        </>
    )
}


export function IndexHelpsSection(){
    return(
        <>
            <section>
                <div>
                    <span>LO QUE DINAMO TE OFRECE</span>
                    <span>Beneficios reales desde el día uno</span>
                </div>
                <div>
                    <CardHelpProduct params={{icon:< MdOutlineMoreTime />, title:"Ahorra tiempo", subTitle:"72% menos gestión", info:"De días a horas. Firma y aprueba desde donde estés, en minutos.", extras:["4.2 días", "1.2 días"] }}/>
                    
                    <CardHelpProduct params={{icon:< IoCheckboxOutline />, title:"Validez legal total", subTitle:"Ley 527 · X.509 · RFC 3161", info:"Cada firma tiene validez jurídica. Certificados verificables ante terceros.", extras:["100% admisible en juicio"] }}/>
                    
                    <CardHelpProduct params={{icon:< PiCubeFocus />, title:"Todo centralizado", subTitle:"Un solo repositorio seguro", info:"Encuentra cualquier documento en segundos con búsqueda inteligente.", extras:["Búsqueda en menos de 3 seg"] }}/>
                    
                    <CardHelpProduct params={{icon:< LuSquareArrowRight />, title:"Sin papel ni impresión", subTitle:"100% digital · Sostenible", info:"Elimina costos de papel, impresión, mensajería y almacenamiento físico.", extras:["Ahorro $18M/año aprox."] }}/>
                </div>
            </section>
        </>
    )
}


export function IndexWorkFlowSection(){
    return(
        <>
            <section>
                <div>
                    <span>ASÍ DE SENCILLO</span>
                    <span>¿Cómo funciona Dinamo?</span>
                    <span>Tres pasos para digitalizar tu gestión documental completamente</span>
                </div>
                <div>
                    <CardHelpProductFlow params={{value:"1", title:"Sube o crea", subTitle:"tu documento", info:"Arrastra un PDF, Word o Excel. O usa una plantilla prediseñada para generar el documento con tus datos en segundos.", extras:["PDF/DOCX", "Plntaillas", "Drag&Drop"]}}/>

                    <CardHelpProductFlow params={{value:"2", title:"Define el flujo", subTitle:"y envía a firmar", info:"Selecciona quiénes deben revisar, aprobar o firmar. En qué orden. Cada persona recibe un email con enlace directo. Sin instalar nada.", extras:["Multi-firma", "Recordatorio", "Por email&Drop"]}}/>
                
                    <CardHelpProductFlow params={{value:"3", title:"Archivado y listo", subTitle:"automáticamente", info:"Cuando todos firman, el documento queda archivado con sello de tiempo, hash de integridad y certificado digital verificable. Para siempre.", extras:["Certificado", "Inmutable", "Auditable"]}}/>
                </div>
            </section>
        </>
    )
}


export function IndexFunctionsSection(){
    return(
        <>
            <section>
                <div>
                    <span>TODO EN UN SOLO PRODUCTO</span>
                    <span>Funcionalidades diseñadas para tu equipo</span>
                    <span>Cada módulo resuelve un dolor específico de tu operación</span>
                </div>
                <div>
                    <CardHelpProductFunctions params={{icon:<BsPlusSquareDotted />, title:"Firma digital certificada", subTitle:"X.509 · PKI · RFC 3161 · OCSP", info:"Firma con validez legal plena. Sello de tiempo, verificación OCSP en tiempo real y soporte para múltiples firmantes.", extras:["Firma avanzada", "Co-firma", "Timestamp"], line:true}}/>

                    <CardHelpProductFunctions params={{icon:<LuWorkflow />, title:"Flujos de aprobación", subTitle:"BPMN · Secuencial · Paralelo", info:"Define quién aprueba qué y en qué orden. Con condiciones, SLAs y escalamiento automático.", extras:["Editor visual", "BPMN 2.0", "Recordatorio auto"], line:true}}/>

                    <CardHelpProductFunctions params={{icon:<AiOutlineAudit />, title:"Auditoría e historial", subTitle:"Inmutable · Exportable · Blockchain-hash", info:"Cada acción queda registrada: quién, cuándo y qué cambió. Hash encadenado por documento.", extras:["Log inmutable", "Export PDF/Excel"], line:true}}/>

                    <CardHelpProductFunctions params={{icon:<BsFiletypeDoc />, title:"Plantillas inteligentes", subTitle:"DOCX · PDF · Variables dinámicas", info:"Crea plantillas con campos variables. Genera 100 contratos iguales en segundos, con datos distintos.", extras:["Campo {{variable}}", "Versionado"], line:true}}/>

                    <CardHelpProductFunctions params={{icon:<FaRegUser />, title:"Gestión de usuarios", subTitle:"LDAP · AD · SSO · MFA · Roles", info:"Integración con Active Directory. SSO corporativo. Permisos por área, rol y tipo de documento.", extras:["LDAP / AD", "MFA"], line:true}}/>

                    <CardHelpProductFunctions params={{icon:<SiDocsdotrs />, title:"Reportes y analytics", subTitle:"Dashboard · Excel · PDF · Tiempo real", info:"KPIs en tiempo real: tiempos, firmas, cuellos de botella. Reportes programados automáticos.", extras:["Tiempo real", "Programado"], line:true}}/>

                </div>
            </section>
        </>
    )
}


export function IndexProfileSection(){
    return(
        <>
            <section>
                <div>
                    <span>SECTORES Y EQUIPOS</span>
                    <span>¿Para quién es Dinamo?</span>
                    <span>Diseñado para cualquier empresa que mueva documentos y necesite control total</span>
                </div>
                <div>
                    <CardHelpProductFlow params={{value:"⚖️", title:"Legal y Contratos", subTitle:"Firmas, NDAs, contratos", info:"Gestiona contratos con clientes, proveedores y empleados. Alertas de vencimiento automáticas.", extras:["Contratos & NDAs", "Vencimientos"], line:false, className:""}}/>
                    
                    <CardHelpProductFlow params={{value:"👥", title:"Recursos Humanos", subTitle:"Onboarding, nómina, acuerdos", info:"Automatiza la firma de contratos laborales. Guarda acuerdos de confidencialidad y evaluaciones firmadas.", extras:["Onboarding dig.", "Acuerdos RR.HH"], line:false, className:""}}/>

                    <CardHelpProductFlow params={{value:"🏦", title:"Financiero y Banca", subTitle:"Pagarés, órdenes, aprobaciones", info:"Digitaliza pagarés, órdenes de pago y aprobaciones de crédito con trazabilidad regulatoria completa.", extras:["Pagarés dig.", "Trazabilidad reg."], line:false, className:""}}/>

                    <CardHelpProductFlow params={{value:"🏗️", title:"Compras y Logística", subTitle:"Órdenes, proveedores, actas", info:"Gestiona órdenes de compra, cotizaciones y actas de entrega con firma digital del proveedor incluida.", extras:["Órds. de compra", "Órds. de compra"], line:false, className:""}}/>
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
                    <CardHelpProductFunctions params={{icon:<MdOutlineSecurity />, title:"Cifrado AES-256", subTitle:"Datos en reposo y tránsito", info:"Todos tus documentos están cifrados con AES-256, el estándar del sistema bancario internacional.", extras:["AES-256-GCM", "TLS 1.3"], line:false, className:"card-uniform-lite-blue"}}/>
                    
                    <CardHelpProductFunctions params={{icon:<FaRegUser />, title:"Autenticación fuerte", subTitle:"MFA · SSO · OAuth2", info:"MFA obligatorio para roles sensibles. SSO con tu proveedor de identidad corporativo ya existente.", extras:["MFA", "SSO", "SSO"], line:false, className:"card-uniform-lite-green"}}/>

                    <CardHelpProductFunctions params={{icon:<FaBalanceScaleRight />, title:"Cumplimiento legal", subTitle:"Ley 527 · GDPR compatible", info:"Cumple con la Ley 527 de 1999 (comercio electrónico Colombia) y compatible con GDPR y ISO 27001.", extras:["Ley 527", "ISO 27001", "GDPR"], line:false, className:"card-uniform-lite-purple"}}/>

                    <CardHelpProductFunctions params={{icon:<IoMdCloudUpload />, title:"On-premise o nube", subTitle:"Tus datos no salen de tu empresa", info:"Dinamo se instala en tus propios servidores (on-prem) o en nube privada. Cero dependencia de terceros.", extras:["On-premise", "Nube privada"], line:false, className:"card-uniform-lite-orange"}}/>
                </div>
            </section>
        </>
    )
}

export function IndexExprienceSection(){
    return(
        <>
            <section>
                
            </section>
        </>
    )
}

export function IndexSuscriptionSection(){
    return(
        <>
            <section>
                
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