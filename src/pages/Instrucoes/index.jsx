// Funcionalidades / Libs:
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// Assets:
// import step1 from '../../assets/jogo_02.png';
// import step2 from '../../assets/jogo_03.png';
// import step3 from '../../assets/jogo_04.png';

// Estilo:
import './instrucoes.scss';


export default function Instrucoes() {
    // const [isChecked, setIsChecked] = useState(false);
    // const navigate = useNavigate();


    return (
        <main className='Container'>
            <div className="grid">
                
            
            <h1>Instruções</h1>

            <div className="instrucoes">
                {/* <img src={step1} alt="" />
                <img src={step2} alt="" />
                <img src={step3} alt="" /> */}
            </div>            

            <div className="div-btn">
                <button>
                    Quero jogar!
                </button>
            </div>


            </div>            
        </main>
    )
}