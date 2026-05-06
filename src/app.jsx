{/* Componentes */}
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/general/login.jsx";
import { Index } from "./pages/general/index.jsx";

export const App = () => {
    return(
        <Routes>
            <Route path="/" element={<Index />} />{/* Pagina de login */}
            <Route path="/login" element={<Login />} />{/* Pagina de login */}
            <Route path="/index" element={<Index />} />{/* Pagina principal después de login */}
        </Routes>
    );
}