// Funcionalidades / Libs:
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// Assets:
import step1 from '../../assets/instrucoes/jogo_02.png';
import step2 from '../../assets/instrucoes/jogo_03.png';
import step3 from '../../assets//instrucoes/jogo_04.png';

// Estilo:
import './instrucoes.scss';


export default function Instrucoes() {
    const [step, setStep] = useState(1);
    // const navigate = useNavigate();

    function handleNext() {
        if(step < 3) {
            setStep(step + 1);
        }
    }

    return (
        <main className='Container fadeIn3'>
            <div className="grid">
                
            
            <h1 className='title'>Instruções do Jogo:</h1>

            <div className="instrucoes">

                {step === 1 ? (

                <div className="step">
                    <img src={step1} alt="" />

                    <p>Quer saber como jogar e ganhar uma Fanta? Avance para saber.</p>
                </div>

                ) : (
                step === 2 ? (

                <div className="step">
                    <img src={step2} alt="" />

                    <p>O jogo irá iniciar no painel, e você terá que copiar os movimentos da caveira a sua frente.</p>
                </div>

                ) : (

                <div className="step">
                    <img src={step3} alt="" />

                    <p>Acertando os movimentos, você ganhará uma Fanta no final do jogo!</p>
                </div>

                )

                )}
                
            </div>            

            <div className={`div-btn ${step > 1 && 'tutorial'}`}>
                {step > 1 && (
                <button className='voltar' onClick={()=> setStep(step - 1)}>
                    Anterior
                </button>
                )}

                <button className={`next`} onClick={handleNext}>
                    {step == 1 ? 'Quero saber' : step === 3 ? 'Quero jogar!' : "Próximo"}
                </button>
            </div>


            </div>            
        </main>
    )
}