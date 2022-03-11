import React from 'react';
import PropTypes from 'prop-types';
import Barrasuperior from '../components/pure/barraSuperior';
import Formpregunta from '../components/pure/forms/formPregunta'

const Newpreguntapage = () => {
    return (
        <div>
            <Barrasuperior></Barrasuperior>
            <div style={{backgroundColor: "white", borderRadius: "10px", margin: "20px", padding: "20px"}}>
                <h5 style={{marginBottom: "40px"}}>Escribe tu pregunta sobre Módulo 1 de Angular</h5>
           
               <Formpregunta></Formpregunta>
               <button  type="button" class="btn" style={{margin: "20px 0px 0px 115px", padding: "0px 5px 0px 5px", height: "1.5em",  backgroundColor: "#32D4A4", color:"white"}}>Subir pregunta</button>

            </div>
        </div>
    );
};


Newpreguntapage.propTypes = {

};


export default Newpreguntapage;
