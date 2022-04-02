import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import foto1 from '../../media/ProfilePhoto1.png'
import foto2 from '../../media/ProfilePhoto2.png'
import { useNavigate } from 'react-router';




const Discusionprecomponent = ({ pregunta, username }) => {

        function calculaDias(){
       
        var fechaInicio = new Date(pregunta.createTime).getTime();
        
        var fechaFin    = new Date(Date.now()).getTime();

        var diff = fechaFin - fechaInicio;

        var dias = (diff/(1000*60*60*24) );
                        // (1000*60*60*24) --> milisegundos -> segundos -> minutos -> horas -> días
                        return parseInt(dias)
                }
        
                const navigate = useNavigate();
                function handleClick() {
                    navigate("/pregunta",{state:{pregunta:pregunta, username}});
                
                  }
     
    return (
        <div onClick={handleClick} style={{cursor: "pointer"}}>
           <div style={{display: "flex", justifyContent: "space-between"}}>
            <div style={{display: "flex"}}>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "rgba(40, 237, 178, 0.15)", borderRadius: "10px", height: "45px", width: "45px", margin: "0px 10px 0px 10px"}}>
                <i style={{color: "#09C598", marginTop: "2px"}} className="bi bi-hand-thumbs-up-fill"></i>
                <p style={{color: "#09C598", marginTop: "-6px"}}>{pregunta.votosPositivos}</p>
                </div>
                <div>
                    <p style={{fontWeight: "bold", margin: "0px"}}>{pregunta.title}</p>
                    <p style={{fontSize: "0.7em"}} >Publicado por <span style={{display: "inline", fontWeight: "bold"}}>{pregunta.username}</span> hace {calculaDias()} días</p>
                </div>
            </div>    
                <div style={{marginRight: "10px"}}>
                    <img style={{width: "30px", height: "30px"}} src={pregunta.avatarUsuariosResponden[0]}></img>
                    <img style={{width: "30px", height: "30px"}} src={pregunta.avatarUsuariosResponden[1]}></img>
                    <i style={{margin:"5px"}}className="bi bi-chat-left-text"></i>
                    {pregunta.numeroRespuestas}
                </div>
            </div>    
        </div>
    );
};


Discusionprecomponent.propTypes = {

};


export default Discusionprecomponent;
