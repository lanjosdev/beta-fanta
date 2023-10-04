// Funcionalidades / Libs:
import { useNavigate } from 'react-router-dom';

// Assets:
import logo from '../../assets/GifLogo.gif';
import logoFanta from '../../assets/logo-fanta.png';
import logoBiz from '../../assets/logo_branco_2.png';

// Estilo:
import './home.scss';


export default function Home() {
    const navigate = useNavigate();

    return (
        <main className='Home'>

            <div className='logo-tema'>
                <img src={logo} alt="" />
            </div>

            <button 
            className='movendo'
            onClick={()=> navigate('/termos')}
            >
                Atreva-se a clicar
            </button>

            <div className='rodape'>
                <img src={logoFanta} alt="" />
                <img src={logoBiz} alt="" />
            </div>
            
        </main>
    )
}