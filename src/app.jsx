{/* Componentes */}
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/login.jsx";
import { Index } from "./pages/index.jsx";

export const App = () => {
    return(
        <Routes>
            <Route path="/" element={<Login />} />{/* Pagina de login */}
            <Route path="/index" element={<Index />} />{/* Pagina principal después de login */}
        </Routes>
    );
}