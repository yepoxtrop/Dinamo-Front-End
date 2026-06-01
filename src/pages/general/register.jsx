{/* Componentes */}
import { LeftPanelRegister, RightPanelRegister } from "../../components/sections/sectionsRegister.jsx";
import { ModalRegister } from "../../components/modals/modals.jsx";
{/* Hooks */}
import { useRenamePage } from "../../hooks/renamePage.jsx"
import { useSelector } from "react-redux";
{/* Estilos */}
import "../../styles/general/pages/general/register.css";



export const Register = () =>{
    {/* Renombrar Pagina */}
    useRenamePage("Crea tu cuenta");
    {/* Obtener el estado del register */}
    const registerGlobalStatus = useSelector((state)=>{
        return state.register.normalRegister;
    }); 

    return(
        <>
            {/* Pagina de inicio de sesión */}
            <section className="body-register" >

                {!registerGlobalStatus.authRegister?<ModalRegister />:<></>}
                 
                {/* Panel izquierdo(diseño) */}
                <LeftPanelRegister />
                
                {/* Panel derecho(formulario de inicio de sesión) */}
                <RightPanelRegister />

            </section>
        </>
    )
}