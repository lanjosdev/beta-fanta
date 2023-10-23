// Funcionalidades / Libs:
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from "js-cookie";

// Components:
// import { Cookie } from '../../components/Cookie/cookie';

// Assets:
import logoA from '../../assets/LogoTema.webp';
import logoB from '../../assets/AranhaTema.webp';
// import logoFanta from '../../assets/logo-fantaPreto.png';
import nuvem from "../../assets/icones/nuvem.png";
import olhos from "../../assets/icones/olhos.png";
import relampago from "../../assets/icones/raio.png";

// Estilo:
import './home.scss';


export default function Home() {
    // const [openCookie, setOpenCookie] = useState(true);
    const [clicou, setClicou] = useState(false);
    const navigate = useNavigate();

    // useEffect(()=> {
    //     function verificaCookie() {
    //         const hasCookie = Cookies.get('FantaKey');

    //         if(hasCookie) {
    //             setOpenCookie(false);
    //         }      
    //     }
    //     verificaCookie();
    // }, []);

    function effectButton() {
        setClicou(true);

        //////////////////
        const hasCookie = Cookies.get('FantaKey');

        if(hasCookie) {
            setTimeout(()=> {
                navigate('/blocked');      
            }, 400);
        } else {
            setTimeout(()=> {
                navigate('/termos');            
            }, 400);
        }
    }


    return (
        <main className='Home'>

            <div className='logo-tema fadeIn'>
                <img src={logoA} alt="" />
                <img src={logoB} className='spider-move' alt="" />
            </div>

            <button 
            className='movendo'
            onClick={effectButton}
            >
                Atreva-se a clicar
            </button>    
            

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