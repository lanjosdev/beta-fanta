// Funcionalidades / Libs:
import { useState } from "react";
import PropTypes from "prop-types";


// Assets:
// import { FiX, FiCheckCircle } from 'react-icons/fi';

// Estilo:
import './modal.scss';


export function Modal({ closeModal }) {

    return (
        <div className="Modal-container">

            <div className="modal-background" onClick={closeModal}></div>

            <div className="modal-window">
                <h2>Se prepare!</h2>

                <p>(Incluir texto de aviso que o jogo será iniciado no painel.)</p>

                <button onClick={closeModal}>ok</button>
            </div>

        </div>
    )
}

// ModalMedia.propTypes = {
//     closeModal: PropTypes.func.isRequired,
//     midiaEdit: PropTypes.object,
//     updateSequence: PropTypes.func.isRequired
// }