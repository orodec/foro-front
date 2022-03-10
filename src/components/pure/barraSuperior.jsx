import React from 'react';
import PropTypes from 'prop-types';
import angular from '../../media/Icon.svg'

const Barrasuperior = () => {
    return (
        <div id='superior' className="col-12">
            <div id='superior-dx'>    
            
            <button type="button" class="btn" style={{backgroundColor: "#A1A1A3", fontWeight: "bold"}}>
            <i class="bi bi-arrow-left"></i> Volver</button>
            </div>
            <div id="superior-sx">
                <i id="opciones" className="bi bi-arrow-bar-down"></i> 
                <p style={{fontWeight: "bold"}}>Óscar</p>
                <i id="avatar" class="bi bi-person-circle"></i>  
                <input id="buscar" type="text" placeholder=" Buscar"></input>
            </div>  
        </div>
    );
};


Barrasuperior.propTypes = {

};


export default Barrasuperior;
