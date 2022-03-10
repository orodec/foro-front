import React from 'react';
import PropType from 'prop-types';
import { tarjeta } from '../../models/tarjeta';

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



const TarjetaComponent = ({ tarjeta }) => {

    return (
        <div>
            <div  style={{height: "200px", margin:"10px", borderRadius: "15px"}} className='card col'>
                <div >
                <h5 style={estiloTitulo(tarjeta.title)} className='card-header'>{ tarjeta.title }</h5>
                </div>
                <div id="tarjeta-interior" className='card-body'>
                    <h5 style={{textAlign: "left", fontSize: "calc(3vmin)"}} className='card-title'>{ tarjeta.description }</h5>
                        <div id="abajo">
                            <i style={{margin:"5px"}}class="bi bi-chat-left-text"></i>
                            <p id="Npreguntas" className='card-text'>{ tarjeta.question } preguntas</p>
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
