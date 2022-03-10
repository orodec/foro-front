import React from 'react';
import PropTypes from 'prop-types';
import foto1 from '../../media/ProfilePhoto1.png'
import foto2 from '../../media/ProfilePhoto2.png'
import { useNavigate } from 'react-router';




const Discusionprecomponent = ({ discusion }) => {
    discusion.avatares[0] = foto1
    discusion.avatares[1] = foto2
    return (
        <div>
           <div style={{display: "flex", justifyContent: "space-between"}}>
            <div style={{display: "flex"}}>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "rgba(40, 237, 178, 0.15)", borderRadius: "10px", height: "45px", width: "45px", margin: "0px 10px 0px 10px"}}>
                <i style={{color: "#09C598", marginTop: "2px"}} class="bi bi-hand-thumbs-up-fill"></i>
                <p style={{color: "#09C598", marginTop: "-6px"}}>{discusion.likes}</p>
                </div>
                <div>
                    <p style={{fontWeight: "bold", margin: "0px"}}>{discusion.titulo}</p>
                    <p style={{fontSize: "0.7em"}} >Publicado por <p style={{display: "inline", fontWeight: "bold"}}>{discusion.usuario}</p> hace {discusion.tiempo} días</p>
                </div>
            </div>    
                <div style={{marginRight: "10px"}}>
                    <img style={{width: "30px", height: "30px"}} src={discusion.avatares[0]}></img>
                    <img style={{width: "30px", height: "30px"}} src={discusion.avatares[1]}></img>
                    <i style={{margin:"5px"}}class="bi bi-chat-left-text"></i>
                    {discusion.respuestas}
                </div>
            </div>    
        </div>
    );
};


Discusionprecomponent.propTypes = {

};


export default Discusionprecomponent;
