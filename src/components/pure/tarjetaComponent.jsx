import React from 'react';
import PropType from 'prop-types';
import { tarjeta } from '../../models/tarjeta';
import { Link, useNavigate } from "react-router-dom";
import Discusionespage from '../../pages/discusionesPage'


const estiloRojo={backgroundColor: "red", color: "white", height: "50px", borderRadius: "15px 15px 0 0"}
const estiloNegro={backgroundColor: "black", color: "white", height: "50px", borderRadius: "15px 15px 0 0"}
const estiloAzul={backgroundColor: "blue", color: "white", height: "50px", borderRadius: "15px 15px 0 0"}
const estiloVerde={backgroundColor: "green", color: "white", height: "50px", borderRadius: "15px 15px 0 0"}


function estiloTitulo(titulo){
    if (titulo === "Errores"){ return estiloRojo }
    if (titulo === "Proyectos"){ return estiloAzul }
    if (titulo === "General"){ return estiloVerde }


    else{ return estiloNegro}   
}



const TarjetaComponent = ({ modulo, username }) => {

    const navigate = useNavigate();
    function handleClick() {
        navigate("/discusiones",{state:{mod:modulo, username}});
    
      }
   

    return (
        <div>
            <div  onClick={handleClick} style={{height: "200px", margin:"10px", borderRadius: "15px", cursor: "pointer"}} className='card col'>
                <div >
                <h5 style={estiloTitulo(modulo.title)} className='card-header'>{ modulo.title }</h5>
                </div>
                <div id="tarjeta-interior" className='card-body'>
                    <h5 style={{textAlign: "left", fontSize: "calc(3vmin)"}} className='card-title'>{ modulo.description }</h5>
                        <div id="abajo">
                            <i style={{margin:"5px"}}className="bi bi-chat-left-text"></i>
                            <p id="Npreguntas" className='card-text'>{ modulo.preguntas } preguntas</p>
                        </div>
                </div>      
            </div>
        </div>
    );
}

TarjetaComponent.prototype ={
    tarjeta: PropType.instanceOf(tarjeta)
}

export default TarjetaComponent;
