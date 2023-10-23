// Funcionalidades / Libs:
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Assets:
import logo from '../../assets/logo.webp';
// import logoFanta from '../../assets/logo-fanta.png';
// import logoBiz from '../../assets/logo_branco_2.png';

// Estilo:
import './brocked.scss';


export default function Brocked() {
    const navigate = useNavigate();

    useEffect(()=> {
        function contagem() {
            setTimeout(()=> {
                navigate('/');
            }, 15000);
        }
        contagem();
    }, [navigate]);

    return (
        <main className='Container fim'>
            <div className="grid">
                
            <img src={logo} alt="" />

            <h1>Obrigado por <br /> participar!</h1>
            <p>Volte em outra hora para participar novamente.</p>

            </div>            
        </main>
    )
}