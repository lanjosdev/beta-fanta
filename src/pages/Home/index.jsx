// Funcionalidades / Libs:
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from "js-cookie";

// Components:
import { Cookie } from '../../components/Cookie/cookie';

// Assets:
import logo from '../../assets/GifLogo.gif';
// import logoFanta from '../../assets/logo-fantaPreto.png';
import nuvem from "../../assets/icones/nuvem.png"
import olhos from "../../assets/icones/olhos.png"
import relampago from "../../assets/icones/raio2.png"

// Estilo:
import './home.scss';


export default function Home() {
    const [openCookie, setOpenCookie] = useState(true);
    const [clicou, setClicou] = useState(false);
    const navigate = useNavigate();


    useEffect(()=> {
        function verificaCookie() {
            const hasCookie = Cookies.get('FantaKey');

            if(hasCookie) {
                setOpenCookie(false);
            }      
        }
        verificaCookie();
    }, []);

    function effectButton() {
        setClicou(true);

        setTimeout(()=> {
            navigate('/termos');            
        }, 400);
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

            {openCookie && (
            <Cookie closeCookie={()=> setOpenCookie(false)} />            
            )}
    

            <img className='cloud1 nuvem-goR' src={nuvem} alt="" />
            <img className='cloud2 nuvem-goL' src={nuvem} alt="" />
            <img className='cloud3 nuvem-goR' src={nuvem} alt="" />

            <img className='olhos1 aparecendo' src={olhos} alt="" />
            <img className='olhos2 aparecendo2' src={olhos} alt="" />
            
            {clicou && (
            <div className='div-raio'>

                <div className='bg flash'></div>

                <img className='raio flash' src={relampago} alt="" />

            </div>
            )}
            
        </main>
    )
}