import React from 'react';
import PropTypes from 'prop-types';
import Barrasuperior from '../components/pure/barraSuperior';
import Formpregunta from '../components/pure/forms/formPregunta'
import {nuevaPregunta} from '../utils/request'
import {useLocation, useNavigate} from 'react-router-dom';


const Newpreguntapage = () => {

    const location = useLocation();
    
   

    let nuevaRespuesta;
    let title;

    function cuerporespuesta(parametro){
        nuevaRespuesta=parametro
        console.log(nuevaRespuesta)
    }

    function nuevoTitulo(parametro){
        title=parametro
    }

   
    
    function hadleClic(){
        nuevaPregunta(location.state.idMod, nuevaRespuesta, title)
    }

    return (
        <div>
            <Barrasuperior></Barrasuperior>
            <div style={{backgroundColor: "white", borderRadius: "10px", margin: "20px", padding: "20px"}}>
                <h5 style={{marginBottom: "40px"}}>Escribe tu pregunta sobre Módulo 1 de Angular</h5>
           
               <Formpregunta cuerporespuesta={cuerporespuesta} nuevoTitulo={nuevoTitulo}></Formpregunta>
               <button onClick={hadleClic} type="button" className="btn" style={{margin: "20px 0px 0px 115px", padding: "0px 5px 0px 5px", height: "1.5em",  backgroundColor: "#32D4A4", color:"white"}}>Subir pregunta</button>

            </div>
        </div>
    );
};


Newpreguntapage.propTypes = {

};


export default Newpreguntapage;
