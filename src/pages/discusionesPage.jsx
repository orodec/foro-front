import React from 'react';
import PropTypes from 'prop-types';
import Barrasuperior from '../components/pure/barraSuperior';
import { Flex } from '@chakra-ui/react';
import angular from '../media/Icon.svg'
import DiscusionList from '../components/containers/discusion_List'

const Discusionespage = () => {
    return (
        <div style={{background: "#E5E5E5"}}>
            <div style={{height: "180px", width:"100%", backgroundColor: "#FFFFFF", marginTop: "-20px"}}>
                <Barrasuperior></Barrasuperior>
                <div style={{display: "flex", justifyContent: "space-between", marginRight: "45px", marginTop: "40px"}}>
                    <div style={{display: "flex", alignItems: "center", marginLeft:"50px"}}>
                        <img style={{ width: "40px", marginRight: "10px" }} src={angular}/>
                        <div style={{display: "flex", flexDirection: "column", lineHeight: "20%", marginTop: "5px"}} >
                        <p style={{fontWeight: "bold"}}> Angular / Módulo 1</p>
                        <p>Aprendiendo a utilizar el framework</p>
                        </div>
                    </div>
                    <div style={{display: "flex", alignItems: "flex-end", flexDirection: "row-reverse", marginRight:"20px"}}>
                        <i class="bi bi-pin"></i>
                        <button  type="button" class="btn" style={{padding: "0px 5px 0px 5px", height: "1.5em",  backgroundColor: "#32D4A4", color:"white"}}>Añadir pregunta</button>
                        <div  style={{marginRight: "10px", display:"flex", backgroundColor: "rgba(50, 213, 164, 0.1)", borderRadius: "10px", height: "25px", width: "130px"}}>
                                <i style={{ width: "30px" }} class="bi bi-person-check"></i>
                                <p style={{}}> Siguiendo</p>
                                </div>
                        
                    </div>
                </div>
                        <div id="abajo" style={{marginLeft: "50px"}}>
                            <i style={{margin:"5px"}}class="bi bi-chat-left-text"></i>
                            <p id="Npreguntas" className='card-text'>14k preguntas</p>
                        </div>
            </div>

            <div  style={{backgroundColor: "white", borderRadius: "10px", margin: "20px"}} >
                <p style={{margin:"20px", fontWeight: "bold"}}>Discusiones Fijadas</p>
                <DiscusionList></DiscusionList>
            </div>

            <div style={{backgroundColor: "white", borderRadius: "10px", margin: "20px"}} >
                <p style={{margin:"20px", fontWeight: "bold"}}>Más recientes</p>
                <DiscusionList></DiscusionList>
                
            </div>

        </div>
    );
};


Discusionespage.propTypes = {

};


export default Discusionespage;
