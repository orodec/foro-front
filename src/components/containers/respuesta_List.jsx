import React from 'react';
import PropTypes from 'prop-types';
import Respuesta from '../pure/respuestaComponent'

let respuestasArray=[1,2,3]

const RespuestaList = () => {
    return (
        <div>
        { respuestasArray.map((respuesta, index) =>{
                       
                       return (
                           <Respuesta className='' key={index}
                           respuesta={respuesta}>
                           </Respuesta>
                       )
                      
               } )}
   </div>
    );
};


RespuestaList.propTypes = {

};


export default RespuestaList;
