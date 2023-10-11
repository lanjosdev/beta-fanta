// Funcionalidades / Libs:
import { Routes, Route } from "react-router-dom";

// Pages:
import Home from "./pages/Home";
import Termos from "./pages/Termos";
import Instrucoes from "./pages/Instrucoes";
import Fim from "./pages/Fim";
import Brocked from "./pages/Brocked";

// Components:
import PrivateRoute from "./utils/PrivateRoute";


export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={ <Home/> } />


            <Route path="/termos" element={ 
                <PrivateRoute> <Termos/> </PrivateRoute>  
            }/>

            <Route path="/instrucoes" element={ 
                <PrivateRoute> <Instrucoes/> </PrivateRoute>  
            }/>


            <Route path="/fim" element={ <Fim/> } />
            <Route path="/blocked" element={ <Brocked/> } />
        </Routes>
    )
}