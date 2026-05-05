{/* Componentes */}
import { HeaderIndex } from "../../components/headers/headerIndex";
import { IndexWelcomeSection, IndexProblemsSection, IndexHelpsSection, IndexWorkFlowSection, IndexFunctionsSection, IndexProfileSection, IndexRequerimentsSection, IndexExprienceSection, IndexSuscriptionSection, IndexReadySection } from "../../components/sections/sectionsIndex.jsx";
import { FooterIndex } from "../../components/footers/footerIndex.jsx";


export const Index = () =>{
    return(
        <>
            {/* Encabezado */}
            <HeaderIndex/>

            {/* Secciones de la pagina */}
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

            {/* Pie de página */}
            <FooterIndex />
        </>
    )
}