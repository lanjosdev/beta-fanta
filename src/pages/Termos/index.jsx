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
        <main className='Container'>
            <div className="grid">
                
            
            <h1>Avisos e termos de uso</h1>

            <div className="termo-scroll">
                <h2>Termos de Compromisso</h2>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam labore, molestias, aliquam ab molestiae temporibus voluptatum dolor praesentium, a minus enim ullam quibusdam officiis sequi excepturi aliquid doloremque assumenda soluta.</p>
                <p>Ipsum dolor sit amet consectetur adipisicing elit. Dicta, minus tenetur voluptatibus obcaecati nostrum molestiae eaque iste quos cupiditate odit exercitationem totam eligendi minima adipisci fugiat incidunt, labore magnam cum!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam labore, molestias, aliquam ab molestiae temporibus voluptatum dolor praesentium, a minus enim ullam quibusdam officiis sequi excepturi aliquid doloremque assumenda soluta.</p>
            </div>
            <label className="checkbox-label" htmlFor="checkboxID">
                <input type="checkbox" id="checkboxID" onClick={() => setIsChecked(!isChecked)} />

                <p>Declaro que li e aceito os termos de compromisso acima.</p>
            </label>

            <div className="div-btn">
                <button onClick={()=> navigate('/instrucoes')} disabled={!isChecked}>
                    Avançar
                </button>
            </div>
            

            </div>            
        </main>
    )
}