// Funcionalidades / Libs:
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import PropTypes from "prop-types";

// Assets:
// import { FiX, FiCheckCircle } from 'react-icons/fi';

// Estilo:
import './modal.scss';


export function Modal({ closeModal }) {
    const navigate = useNavigate();

    function handleOk() {
        closeModal(); 
        navigate('/fim', { replace: true });       
    }

    return (
        <div className="Modal-container">

            <div className="modal-background" onClick={closeModal}></div>

            <div className="modal-window">
                <h2>Prepare-se!</h2>

                <p>Se posicione na marcação que o jogo será iniciado no painel.</p>

                <button onClick={handleOk}>Ok</button>
            </div>

        </div>
    )
}

// ModalMedia.propTypes = {
//     closeModal: PropTypes.func.isRequired,
//     midiaEdit: PropTypes.object,
//     updateSequence: PropTypes.func.isRequired
// }