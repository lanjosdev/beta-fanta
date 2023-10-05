// Funcionalidades / Libs:
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Assets:
import logo from '../../assets/GifLogo.gif';
import logoFanta from '../../assets/logo-fantaPreto.png';
import nuvem from "../../assets/icones/nuvem.png"
import olhos from "../../assets/icones/olhos.png"
import relampago from "../../assets/icones/raio.png"


// Estilo:
import './home.scss';


export default function Home() {
    const [clicou , setClicou] = useState(false);
    const navigate = useNavigate();

    function effectButton() {
        setClicou(true);

        setTimeout(()=> {
            navigate('/termos');            
        }, 300);
    }

    return (
        <main className='Home'>

            <div className='logo-tema fadeIn'>
                <img src={logo} alt="" />
            </div>

            <button 
            className='movendo'
            onClick={effectButton}
            >
                Atreva-se a clicar
            </button>

            <div className='rodape'>
                <img src={logoFanta} alt="" />
            </div>


            <img className='cloud1 nuvem-goR' src={nuvem} alt="" />
            <img className='cloud2 nuvem-goL' src={nuvem} alt="" />
            <img className='cloud3 nuvem-goR' src={nuvem} alt="" />

            <img className='olhos1 aparecendo' src={olhos} alt="" />
            <img className='olhos2 aparecendo2' src={olhos} alt="" />
            
            {clicou && (
            <div className='bg-raio flash'>
                <img className='raio' src={relampago} alt="" />
            </div>
            )}
            
        </main>
    )
}