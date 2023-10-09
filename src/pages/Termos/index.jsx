// Funcionalidades / Libs:
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Assets:
// import logo from '../../assets/GifLogo.gif';
// import logoFanta from '../../assets/logo-fanta.png';
// import logoBiz from '../../assets/logo_branco_2.png';

// Estilo:
import './termos.scss';


export default function Termos() {
    const [isChecked, setIsChecked] = useState(false);

    const navigate = useNavigate();


    return (
        <main className='Container fadeIn'>
            <div className="grid">
                
            
            <h1>Avisos e termos de uso:</h1>

            <div className="termo-scroll">
                <h2>Termos de Aceite</h2>

                <ul>
                    <li>
                        <p><b>Não haverá armazenamento dos dados:</b> <br />
                        Para esta campanha, a Fanta declara e garante que não haverá qualquer captação, armazenamento ou tratamento de dados pessoais, se responsabilizando exclusivamente por tal declaração, além de esclarecer que atua segundo as regras e em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), garantindo a sua privacidade e segurança.
                        </p>
                    </li>
                    <li>
                        <p><b>Responsabilidade de idade:</b> <br />
                        Esta campanha é destinada a todo e qualquer consumidor que adere de forma livre e consciente, desde que pessoa física com idade igual ou superior a 12 (doze) anos. A Fanta declara que está em conformidade com as orientações previstas na legislação para a distribuição dos seus produtos e reforça que é proibida a distribuição de refrigerantes à pessoas menores de 12 anos.
                        </p>
                    </li>
                </ul>
            </div>
            <label className="checkbox-label" htmlFor="checkboxID">
                <input type="checkbox" id="checkboxID" onClick={() => setIsChecked(!isChecked)} />

                <p>Declaro que li e aceito os Termos acima.</p>
            </label>

            <div className="div-btn">
                <button className='next' onClick={()=> navigate('/instrucoes')} disabled={!isChecked}>
                    Avançar
                </button>
            </div>
            

            </div>            
        </main>
    )
}