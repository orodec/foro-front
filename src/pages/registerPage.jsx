import React from 'react';
import Registerformik from '../components/pure/forms/register'
import '../styles/login.css'
import foto from '../media/sea-g7a5ef694d_640.jpg'

const Registerpage = () => {
    return (
        <div id="marco">
            <div id="responsive" className='col-4'>
            <Registerformik></Registerformik>
            </div>
            
            <div className='col-8' id="contenedor"> 
            <img 
            src={foto} 
            className="" alt="Responsive"/>
            <div className="texto-encima-1">REVOLUCIONA</div>
            <div className="texto-encima-2">TU CARRERA</div>
            <div className="texto-encima-3">Y  DA  EL  SALTO  AL  MUNDO  LABORAL</div>
            </div>
        </div>
    );
}

export default Registerpage;
