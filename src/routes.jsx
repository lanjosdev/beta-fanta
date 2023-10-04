// Funcionalidades / Libs:
import { Routes, Route } from "react-router-dom";

// Pages:
import Home from "./pages/Home";
import Termos from "./pages/Termos";
import Instrucoes from "./pages/Instrucoes";


export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={ <Home/> } />

            <Route path="/termos" element={ <Termos/> } />

            <Route path="/instrucoes" element={ <Instrucoes/> } />
        </Routes>
    )
}