import React from 'react';
import PropTypes from 'prop-types';
import foto from '../../media/ProfilePhoto1.png'
import ReactHtmlParser from 'react-html-parser'; 


const Respuesta = ({respuesta}) => {

    function verCuerpo(){

    }

    function calculaDias(){
       
      var fechaInicio = new Date(respuesta.createTime).getTime();
      
      var fechaFin    = new Date(Date.now()).getTime();

      var diff = fechaFin - fechaInicio;

      var dias = (diff/(1000*60*60*24) );
                      // (1000*60*60*24) --> milisegundos -> segundos -> minutos -> horas -> días
                      return parseInt(dias)
              }


    return (
        <div style={{marginBottom: "20px"}}>
             <div style={{display: "flex"}}>
             <img src={respuesta.avatar} style={{width: "30px", height: "30px"}}></img>
             <div style={{width: "100%"}}>
             <p style={{fontWeight: "bold", margin: "0px"}}>{respuesta.user}</p>
                    <p style={{fontSize: "0.7em"}} >Publicado hace {calculaDias()} días</p>

                 <div>
                   { ReactHtmlParser (respuesta.body)  }     
                 </div>

                 <div style={{display: "flex", justifyContent: "space-between"}}>
                    <div style={{display: "flex"}}>
                       <div style={{display: "flex", backgroundColor: "#32D4A4", borderRadius: "10px", height: "30px"}}>
                        <i  style={{margin: "2px 2px 0px 8px", color: "white"}} className="bi bi-hand-thumbs-up-fill"></i>
                        <p style={{margin: "2px 8px 0px 2px", color: "white"}} >{respuesta.votosPositivos}</p>
                       </div>
                       <div style={{height: "30px", margin: "0px 10px 0px 10px", display: "flex", borderWidth: "1px", borderStyle: "solid", borderColor: "red", borderRadius: "10px"}}>
                        <i style={{margin: "2px 2px 0px 8px", color: "red"}} className="bi bi-hand-thumbs-down"></i>
                        <p style={{margin: "2px 8px 0px 2px", color: "red"}} >{respuesta.votosNegativos}</p>
                       </div>                        

                   
                
                    </div>
                    <div>
                    <i style={{backgroundColor: "#A1A1A3"}} className="bi bi-pin"></i>
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
