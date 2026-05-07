{/* Componentes */}
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { Login } from "./pages/general/login.jsx";
import { Index } from "./pages/general/index.jsx";
import { DashBoard } from "./pages/users/dashBoard.jsx";
import { Error404 } from "./pages/general/404.jsx";

export const App = () => {
    return(
        <Routes>
            <Route path="/" element={<Index />} />{/* Pagina de login */}
            <Route path="/login" element={<Login />} />{/* Pagina de login */}
            <Route path="/index" element={<Index />} />{/* Pagina principal después de login */}
            <Route path="/dashBoard" element={<DashBoard />} />{/* Pagina principal después de login */}
            
            <Route path="/documents">
                <Route path="signDocuments" element={<DashBoard />} />
                <Route path="uploadedFiles" element={<DashBoard />} />
                <Route path="sharedFiles" element={<DashBoard />} />
            </Route>

            <Route path="/signatures">
                <Route path="createSignatures" element={<DashBoard />} />
                <Route path="totalSignatures" element={<DashBoard />} />
            </Route>

            <Route path="*" element={<Error404 />} />{/* Pagina para error 404 */}
        </Routes>
    );
}