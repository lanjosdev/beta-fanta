// Funcionalidades / Libs:
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Assets:
// import logo from '../../assets/GifLogo.gif';
// import logoFanta from '../../assets/logo-fanta.png';
// import logoBiz from '../../assets/logo_branco_2.png';

// Estilo:
import './fim.scss';


export default function Fim() {
    const navigate = useNavigate();

    useEffect(()=> {
        function contagem() {
            setTimeout(()=> {
                navigate('/', { replace: true });
            }, 10000);
        }
        contagem();
    }, [navigate]);


    return (
        <main className='Container fim fadeIn3'>
            <div className="grid">
                
            
            <h1>Boa sorte!</h1>

            <p>Agora já pode guardar o celular e se divertir.</p>


            </div>            
        </main>
    )
}