import React from 'react';
import PropTypes from 'prop-types';
import foto from '../../media/ProfilePhoto1.png'

const Respuesta = () => {
    return (
        <div style={{marginBottom: "20px"}}>
             <div style={{display: "flex"}}>
             <img src={foto} style={{width: "30px", height: "30px"}}></img>
             <div style={{width: "100%"}}>
             <p style={{fontWeight: "bold", margin: "0px"}}>Username</p>
                    <p style={{fontSize: "0.7em"}} >Publicado hace 4 días</p>

                 <div>
                     <p>Texto de la respuesta</p>
                     <p>Texto de la respuesta</p>
                     <p>Texto de la respuesta</p>
                   
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
                <div style={{backgroundColor: "grey", height: "2px", width: "100%", marginTop: "20px"}}></div>
                </div>
            </div>    
            </div>
    );
};


Respuesta.propTypes = {

};


export default Respuesta;
