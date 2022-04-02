import React from 'react';
import PropTypes from 'prop-types';
import { tarjeta } from '../../models/tarjeta';
import TarjetaComponent from '../pure/tarjetaComponent';


const TarjetaList = ({modulos, idCurso, username}) => {

    return (
        
            <div className='contairner'>
            <div className='row row-cols-5'> 
                    { modulos.map((modulo, index) =>{
                            if(modulo.course.id === idCurso){
                                return (
                                    
                                    <TarjetaComponent className='' key={index}
                                    username={username}
                                    modulo={modulo}>
                                    </TarjetaComponent>
                                   
                                )
                            }
                        } )}
                   
                    </div>
                    
            </div>
          
    );
};


TarjetaList.propTypes = {

};


export default TarjetaList;
