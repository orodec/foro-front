import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Barrasuperior from '../components/pure/barraSuperior';
import { Flex } from '@chakra-ui/react';
import angular from '../media/Icon.svg'
import { discusion } from '../utils/request';
import DiscusionList from '../components/containers/discusion_List'
import {useLocation, useNavigate} from 'react-router-dom';
import DiscusionListNoFixed from '../components/containers/discusion_List_NoFixed'

const Discusionespage = () => {
    
    const location = useLocation();
    console.log(location.state.mod)
    const nombre = location.state.username;
    
    const [preguntas, setpreguntas] = useState(null);
  
    useEffect(() => { 
        
        discusion(location.state.mod.id)
       .then  ((response)=>{            
           setpreguntas(response.data)
           console.log(response.data)
       }) ; 


   }, []);

   const navigate = useNavigate();
 
   function handleClick() {
     navigate("/new-pregunta", {state:{idMod:location.state.mod.id, nombre}});
   }


    return (
        <div >
            <div style={{height: "180px", width:"100%", backgroundColor: "#FFFFFF", marginTop: "-20px"}}>
                <Barrasuperior username={location.state.username}></Barrasuperior>
                <div style={{display: "flex", justifyContent: "space-between", marginRight: "45px", marginTop: "40px"}}>
                    <div style={{display: "flex", alignItems: "center", marginLeft:"50px"}}>
                        <img style={{ width: "40px", marginRight: "10px" }} src={location.state.mod.course.logo}/>
                        <div style={{display: "flex", flexDirection: "column", lineHeight: "20%", marginTop: "5px"}} >
                        <p style={{fontWeight: "bold"}}> {location.state.mod.course.name} / {location.state.mod.title}</p>
                        <p>{location.state.mod.description}</p>
                        </div>
                    </div>
                    <div style={{display: "flex", alignItems: "flex-end", flexDirection: "row-reverse", marginRight:"20px"}}>
                        <i className="bi bi-pin"></i>
                        <button onClick={handleClick} type="button" className="btn" style={{padding: "0px 5px 0px 5px", height: "1.5em",  backgroundColor: "#32D4A4", color:"white"}}>Añadir pregunta</button>
                        <div  style={{marginRight: "10px", display:"flex", backgroundColor: "rgba(50, 213, 164, 0.1)", borderRadius: "10px", height: "25px", width: "130px"}}>
                                <i style={{ width: "30px" }} className="bi bi-person-check"></i>
                                <p style={{}}> Siguiendo</p>
                                </div>
                        
                    </div>
                </div>
                        <div id="abajo" style={{marginLeft: "50px"}}>
                            <i style={{margin:"5px"}}className="bi bi-chat-left-text"></i>
                            <p id="Npreguntas" className='card-text'>{location.state.mod.preguntas} preguntas</p>
                        </div>
            </div>

            <div  style={{backgroundColor: "white", borderRadius: "10px", margin: "20px"}} >
                <p style={{margin:"20px", fontWeight: "bold"}}>Discusiones Fijadas</p>
                {preguntas != null ? <DiscusionList preguntas={preguntas} username={nombre}></DiscusionList> : <p>No hay preguntas</p>}
                
            </div>

            <div style={{backgroundColor: "white", borderRadius: "10px", margin: "20px"}} >
                <p style={{margin:"20px", fontWeight: "bold"}}>Más recientes</p>
                {preguntas != null ? <DiscusionListNoFixed preguntas={preguntas} username={nombre}></DiscusionListNoFixed> : <p>No hay preguntas</p>}
                
                
            </div>
       
        </div>
    );
};


Discusionespage.propTypes = {

};


export default Discusionespage;
