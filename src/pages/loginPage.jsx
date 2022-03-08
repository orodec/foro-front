import React from 'react';
import Loginformik from '../components/pure/forms/login'
import '../styles/login.css'
import foto from '../media/sea-g7a5ef694d_640.jpg'

const Loginpage = () => {
    return (
        <div id="marco">
            <div id="responsive" className='col-4'>
            <Loginformik></Loginformik>
            </div>
            
            <div className='col-8' id="contenedor"> 
            <img 
            src={foto} 
            className="" alt="Responsive"/>
            <div class="texto-encima-1">REVOLUCIONA</div>
            <div class="texto-encima-2">TU CARRERA</div>
            <div class="texto-encima-3">Y  DA  EL  SALTO  AL  MUNDO  LABORAL</div>
            </div>
        </div>
    );
}

export default Loginpage;
