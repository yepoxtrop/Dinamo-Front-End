{/* Componentes */}
import { HeaderIndex } from "../../components/headers/headerIndex";
import { IndexWelcomeSection, IndexProblemsSection, IndexHelpsSection, IndexWorkFlowSection, IndexFunctionsSection, IndexProfileSection, IndexRequerimentsSection, IndexExprienceSection, IndexSuscriptionSection, IndexReadySection } from "../../components/sections/sectionsIndex.jsx";
import { FooterIndex } from "../../components/footers/footerIndex.jsx";
{/* Hooks */}
import { useRenamePage } from "../../hooks/renamePage.jsx";

/**
 * Renderiza la pagina principal del sitio.
 *
 * Compone el encabezado, las secciones informativas del index y el pie
 * de pagina para presentar la experiencia general de Dinamo.
 *
 * @returns {JSX.Element} Pagina principal del sitio.
 *
 * @author Luis Angel Sarmiento Diaz
 */
export const Index = () =>{
    {/* Renombrar Pagin */}
    useRenamePage("Dinamo - Firmas Digitales")

    return(
        <>
            {/* Encabezado */}
            <HeaderIndex/>

            {/* Secciones de la pagina */}
            <main>
                <IndexWelcomeSection />
                <IndexProblemsSection />
                <IndexHelpsSection />
                <IndexWorkFlowSection />
                <IndexFunctionsSection />
                <IndexProfileSection />
                <IndexRequerimentsSection />
                {/* <IndexExprienceSection /> 
                <IndexSuscriptionSection /> */}
                <IndexReadySection />
            </main>
            

            {/* Pie de página */}
            <FooterIndex />
        </>
    )
}
