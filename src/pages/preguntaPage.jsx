import React from 'react';
import PropTypes from 'prop-types';
import Barrasuperior from '../components/pure/barraSuperior'
import RespuestaList from '../components/containers/respuesta_List'
const Preguntapage = () => {
    return (
        <div>
            <Barrasuperior></Barrasuperior>
            <div style={{backgroundColor: "white", borderRadius: "10px", margin: "20px", padding: "20px"}}>
               <div style={{display: "flex", justifyContent: "space-between"}}>
                <div style={{backgroundColor: "rgba(40, 237, 178, 0.15)", borderRadius: "10px", width: "140px"}}>    
                    <p style={{color: "#09C598", margin: "4px 3px 0px 3px"}}> Angular/Modulo 1</p>
                </div>
                <button type="button" style={{backgroundColor: "white", borderRadius: "10px"}}><i class="bi bi-person-check"></i> Seguir pregunta</button>
               </div>
                <p style={{fontWeight: "bold", margin: "0px"}}>Este es el título de la pregunta explicado por el usuario</p>
                    <p style={{fontSize: "0.7em"}} >Publicado por <p style={{display: "inline", fontWeight: "bold"}}>Óscar</p> hace 4 días</p>

                 <div>
                     <p>Texto de la pregunta</p>
                     <p>Texto de la pregunta</p>
                     <p>Texto de la pregunta</p>
                     <p>Texto de la pregunta</p>
                     <p>Texto de la pregunta</p>
                 </div>

                 <div style={{display: "flex", justifyContent: "space-between"}}>
                    <div style={{display: "flex"}}>
                       <div style={{display: "flex", backgroundColor: "#32D4A4", borderRadius: "10px", height: "30px"}}>
                        <i  style={{margin: "2px 2px 0px 8px", color: "white"}} class="bi bi-hand-thumbs-up-fill"></i>
                        <p style={{margin: "2px 8px 0px 2px", color: "white"}} >123</p>
                       </div>
                       <div style={{height: "30px", margin: "0px 10px 0px 10px", display: "flex", borderWidth: "1px", borderStyle: "solid", borderColor: "red", borderRadius: "10px"}}>
                        <i style={{margin: "2px 2px 0px 8px", color: "red"}} class="bi bi-hand-thumbs-down"></i>
                        <p style={{margin: "2px 8px 0px 2px", color: "red"}} >23</p>
                       </div>                        

                    <button type="button" style={{height: "30px", backgroundColor: "white", borderRadius: "10px"}}><i class="bi bi-chat-dots"></i> Responder</button>
                
                    </div>
                    <div>
                    <i style={{backgroundColor: "#A1A1A3"}} class="bi bi-pin"></i>
                    </div>
                 </div>

            </div>
            
            <p style={{fontWeight: "bold", margin: "0px 0px -10px 20px"}}> 2 respuestas</p>
            <div style={{backgroundColor: "white", borderRadius: "10px", margin: "20px", padding: "20px"}} >
                <RespuestaList></RespuestaList>
            </div>

        </div>
    );
};


Preguntapage.propTypes = {

};


export default Preguntapage;
