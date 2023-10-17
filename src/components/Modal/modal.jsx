// Funcionalidades / Libs:
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import {CALL_SERVER} from '../../API/postApi';
import PropTypes from "prop-types";
import Cookies from "js-cookie";

// Assets:
// import { FiX, FiCheckCircle } from 'react-icons/fi';

// Estilo:
import './modal.scss';


export function Modal({ closeModal }) {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleOk() {
        setLoading(true);

        const previousKey = Cookies.get('FantaKey');
        let session_key = null;        

        if(!previousKey) {
            console.log('criando novo record, vamos enviar');

            let randomNumber = (Math.random() * 100 ) + 1;
            let date = (Date.now() / 1000) + randomNumber;
            let dateEncoded = btoa(""+date);
            // console.log(dateEncoded);

            // Gera um cookie para indicar que já entrou no jogo:
            Cookies.set('FantaKey', JSON.stringify(dateEncoded), { expires: 1 }); // Expira em 1dia (24h)
            session_key = dateEncoded;
        } else {
            console.log('record já existe');
        }

        try {
            const response = await CALL_SERVER(session_key);
            console.log(response);
        } catch(erro) {
            console.log(erro);
        } finally {
            setLoading(false);
        }

        closeModal(); 
        navigate('/fim', { replace: true });       
    }

    return (
        <div className="Modal-container">

            <div className="modal-background" onClick={closeModal}></div>

            <div className="modal-window">
                <h2>Prepare-se!</h2>

                <p>Se posicione na marcação que o jogo será iniciado no painel.</p>

                <button onClick={handleOk}>{loading ? 'Aguarde...' : 'Ok'}</button>
            </div>

        </div>
    )
}

Modal.propTypes = {
    closeModal: PropTypes.func.isRequired,
}