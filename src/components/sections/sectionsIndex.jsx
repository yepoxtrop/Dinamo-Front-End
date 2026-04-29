{/* Componentes */}
import { CardInfoBasic } from "../cards/cardInfoBasico.jsx"
import { CardHelpProduct, CardHelpProductFlow, CardHelpProductFunctions } from "../cards/cardHelpsProduct.jsx";
import { IoCloseOutline, IoCheckboxOutline } from "react-icons/io5";
import { MdOutlineMoreTime } from "react-icons/md";
import { LuSquareArrowRight } from "react-icons/lu";
import { PiCubeFocus } from "react-icons/pi";
import { BsPlusSquareDotted } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { LuWorkflow } from "react-icons/lu";
import { AiOutlineAudit } from "react-icons/ai";
import { BsFiletypeDoc } from "react-icons/bs";
import { SiDocsdotrs } from "react-icons/si";

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
                    <CardHelpProductFlow params={{velue:"⚖️", title:"Reportes y analytics", subTitle:"Dashboard · Excel · PDF · Tiempo real", info:"KPIs en tiempo real: tiempos, firmas, cuellos de botella. Reportes programados automáticos.", extras:["Tiempo real", "Programado"], line:true}}/>
                    
                    <CardHelpProductFlow params={{icon:"👥", title:"Reportes y analytics", subTitle:"Dashboard · Excel · PDF · Tiempo real", info:"KPIs en tiempo real: tiempos, firmas, cuellos de botella. Reportes programados automáticos.", extras:["Tiempo real", "Programado"], line:true}}/>

                    <CardHelpProductFlow params={{icon:"🏦", title:"Reportes y analytics", subTitle:"Dashboard · Excel · PDF · Tiempo real", info:"KPIs en tiempo real: tiempos, firmas, cuellos de botella. Reportes programados automáticos.", extras:["Tiempo real", "Programado"], line:true}}/>

                    <CardHelpProductFlow params={{icon:"🏗️", title:"Reportes y analytics", subTitle:"Dashboard · Excel · PDF · Tiempo real", info:"KPIs en tiempo real: tiempos, firmas, cuellos de botella. Reportes programados automáticos.", extras:["Tiempo real", "Programado"], line:true}}/>
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
            <section>
                <div>
                    <span>¿Listo para digitalizar</span>
                    <span>tu gestión documental?</span>
                </div>
                <div>
                    <span>Sin instalación compleja. Sin contratos largos. Empieza ahora mismo</span>
                </div>
                <div>
                    <button>Iniciar Sesión</button>
                    <button>Registrarse</button>
                </div>
            </section>
        </>
    )
}