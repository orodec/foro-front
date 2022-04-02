import React from 'react';
import PropTypes from 'prop-types';
import Respuesta from '../pure/respuestaComponent'



const RespuestaList = ({respuestas}) => {
    return (
        <div>
        { respuestas.map((respuesta, index) =>{
                       
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
