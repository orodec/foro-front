import React from 'react';
import PropTypes from 'prop-types';
import angular from '../../media/Icon.svg'

const Barrasuperior = () => {
    return (
        <div id='superior' className="col-12">
            <div id='superior-dx'>    
            
            <button type="button" class="btn" style={{backgroundColor: "#E6E6EA", fontWeight: "bold", height: "30px", padding: "0px 5px 0px 5px"}}>
            <i class="bi bi-arrow-left"></i> Volver</button>
            </div>
            <div id="superior-sx">
                <i id="opciones" className="bi bi-arrow-bar-down"></i> 
                <p style={{fontWeight: "bold", marginLeft: "5px", marginRight: "5px"}}>Óscar</p>
                <i style={{margin:"5px"}} class="bi bi-person-circle"></i>  
                <input style={{marginRight: "5px", height: "30px"}} id="buscar" type="text" placeholder=" Buscar"></input>
            </div>  
        </div>
    );
};


Barrasuperior.propTypes = {

};


export default Barrasuperior;
