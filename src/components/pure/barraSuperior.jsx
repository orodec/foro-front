import React from 'react';
import PropTypes from 'prop-types';
import angular from '../../media/Icon.svg'
import { useLocation, useNavigate } from 'react-router-dom'

const Barrasuperior = ({username}) => {
   
    const navigate = useNavigate();
    const goBack = ()=>{
        navigate(-1)
    }

    return (
        <div id='superior' className="col-12">
            <div id='superior-dx'>    
            
            <button onClick={goBack} type="button" className="btn" style={{backgroundColor: "#E6E6EA", fontWeight: "bold", height: "30px", padding: "0px 5px 0px 5px"}}>
            <i className="bi bi-arrow-left"></i> Volver</button>
            </div>
            <div id="superior-sx">
                <i id="opciones" className="bi bi-arrow-bar-down"></i> 
                <p style={{fontWeight: "bold", marginLeft: "5px", marginRight: "5px"}}>{username}</p>
                <i style={{margin:"5px"}} className="bi bi-person-circle"></i>  
                <input style={{marginRight: "5px", height: "30px"}} id="buscar" type="text" placeholder=" Buscar"></input>
            </div>  
        </div>
    );
};


Barrasuperior.propTypes = {

};


export default Barrasuperior;
