// Funcionalidades / Libs:
import PropTypes from "prop-types";

// Assets:
import {IoMdClose} from 'react-icons/io';

// Estilo:
import './cookie.scss';


export function Cookie({ closeCookie }) {
    

    return (
        <div className='cookies'>
            <div className='bg-cookies' onClick={closeCookie}></div>

            <div className='window-cookies'>
                <button onClick={closeCookie}>
                    <IoMdClose size={20} />
                </button>

                <h3>Nós usamos cookies!</h3>
                <p>Eles são usados para aprimorar a sua experiência. <br />Ao fechar este banner ou continuar na página, você concorda com o uso de cookies.</p>
            </div>
        </div>
    )
}

Cookie.propTypes = {
    closeCookie: PropTypes.func.isRequired,
}