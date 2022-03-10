import React from 'react';
import PropTypes from 'prop-types';
import { tarjeta } from '../../models/tarjeta';
import TarjetaComponent from '../pure/tarjetaComponent';


const TarjetaList = () => {

const tarjeta1 = new tarjeta('General', 'Dudas general', 12000)
const tarjeta2 = new tarjeta('Errores', 'Errores', 432)
const tarjeta3 = new tarjeta('Proyectos', 'Proyectos', 543)
const tarjeta4 = new tarjeta('Modulo 1', 'Aprendiendo a usar el framework', 34)
const tarjeta5 = new tarjeta('Modulo 2', 'Utilizando funciones', 27)
const tarjeta6 = new tarjeta('Modulo 3', 'Programando mi primer proyecto', 164)
const tarjeta7 = new tarjeta('Modulo 4', 'Programando mi primer proyecto', 164)

let tarjetas=[tarjeta1, tarjeta2];
tarjetas.push(tarjeta3)
tarjetas.push(tarjeta4)
tarjetas.push(tarjeta5)
tarjetas.push(tarjeta6)
tarjetas.push(tarjeta7)


    return (
        
            <div className='contairner'>
            <div className='row row-cols-5'> 
                    { tarjetas.map((tarjeta, index) =>{
                            
                                return (
                                    <TarjetaComponent className='' key={index}
                                    tarjeta={tarjeta}>
                                    </TarjetaComponent>
                                )
                               
                        } )}
                   
                    </div>
                    
            </div>
          
    );
};


TarjetaList.propTypes = {

};


export default TarjetaList;
