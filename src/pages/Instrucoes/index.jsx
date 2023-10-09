// Funcionalidades / Libs:
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// Components:
import { Modal } from '../../components/Modal/modal';

// Assets:
import step1 from '../../assets/instrucoes/aranha_step1.jpg';
import step2 from '../../assets/instrucoes/jogo_3.jpg';
import step3 from '../../assets//instrucoes/jogo_4.jpg';

// Estilo:
import './instrucoes.scss';


export default function Instrucoes() {
    const [step, setStep] = useState(1);
    const [modalOpen, setModalOpen] = useState(false);
    // const navigate = useNavigate();

    function handleNext() {
        if(step === 3) {
            setModalOpen(true);
        } else {
            setStep(step + 1);
        }
    }

    return (
        <main className='Container fadeIn3'>
            <div className="grid">
                
            
            <h1>Instruções do Jogo:</h1>

            <div className="instrucoes">
                <div className={`step ${step === 1 && 'exibir'}`}>
                    <p>Se posicione na marcação do chão (no caso, a marcação seria a imagem abaixo).</p>

                    <img src={step1} alt="" />
                </div>

                <div className={`step ${step === 2 && 'exibir'}`}>
                    <p>O jogo irá iniciar no painel a sua frente, o objetivo é fazer a caveira tomar a lata da Fanta, a partir dos seus movimentos.</p>

                    <img src={step2} alt="" />
                    {/* <p>O jogo irá iniciar no painel a sua frente, o objetivo é fazer o esqueleto pegar a lata da Fanta com seus movimentos.</p> */}
                </div>

                <div className={`step ${step === 3 && 'exibir'}`}>
                    <p>Essa será a imagem exibida ao atingir o objetivo, e você ganhará uma Fanta após o jogo! E ai, bora jogar?</p>

                    <img src={step3} alt="" />
                    {/* <p>Essa será a imagem exibida ao atingir o objetivo, e você ganhará uma Fanta após o jogo! E ai, bora jogar?</p> */}
                </div>                
            </div>            

            <div className={`div-btn ${step > 1 && 'tutorial'}`}>
                {step > 1 && (
                <button className='voltar' onClick={()=> setStep(step - 1)}>
                    Anterior
                </button>
                )}

                <button className='next' onClick={handleNext}>
                    {step === 3 ? 'Quero jogar!' : "Próximo"}
                </button>
            </div>

            {modalOpen && <Modal closeModal={()=> setModalOpen(false)} />}


            </div>            
        </main>
    )
}