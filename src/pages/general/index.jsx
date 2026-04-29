import { HeaderIndex } from "../../components/headers/headerIndex";
import { IndexWelcomeSection, IndexProblemsSection, IndexHelpsSection, IndexWorkFlowSection, IndexFunctionsSection, IndexProfileSection, IndexExprienceSection, IndexSuscriptionSection, IndexReadySection } from "../../components/sections/sectionsIndex.jsx";
import { FooterIndex } from "../../components/footers/footerIndex.jsx";

export const Index = () =>{
    return(
        <>
            {/* Encabezado */}
            <HeaderIndex />

            {/* Secciones de la pagina */}
            <ndexWelcomeSection />
            <IndexProblemsSection />
            <IndexHelpsSection />
            <IndexWorkFlowSection />
            <IndexFunctionsSection />
            <IndexProfileSection />
            <IndexExprienceSection />
            <IndexSuscriptionSection />
            <IndexReadySection />

            {/* Pie de página */}
            <FooterIndex />
        </>
    )
}