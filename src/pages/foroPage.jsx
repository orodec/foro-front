import React from "react";
import "../styles/foro.css";
import logo from '../media/Group 106.svg'
import angular from '../media/Icon.svg'
import react from '../media/react.svg'
import spring from '../media/spring.svg'
import jScript from '../media/jScript.svg'
import git from '../media/git.svg'
import azure from '../media/azure.svg'

import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css'
import TarjetaList from "../components/containers/tarjeta_List";


const Foropage = () => {
  return (
    
      <div>
            <div id='superior' className="col-12">
                <div id='superior-dx'>    
                <img id='logo-foro' src={logo}/>
                <p>Open Bootcamp</p>
                </div>
                <div id="superior-sx">
                <i id="opciones" className="bi bi-arrow-bar-down"></i> 
                <p style={{fontWeight: "bold", marginLeft: "5px", marginRight: "5px"}}>Óscar</p>
                <i style={{margin:"5px"}} class="bi bi-person-circle"></i>  
                <input style={{marginRight: "5px", height: "30px"}} id="buscar" type="text" placeholder=" Buscar"></input>
            </div>  
            </div>
            <div id="contenedor">
                
                <div className="col-2" id="lateral">
                <a style={{color:"black", fontWeight: "bold"}} href="/login"><i class="bi bi-house-fill"></i> Pagina Principal</a>
                <p style={{marginTop: "30px", marginLeft: "-90px", fontWeight: "bold"}}>Cursos</p>
                    <div style={{textAlign: "left", marginLeft:"60px"}}>
                    <p><img style={{ width: "30px" }} src={angular}/> Angular</p>
                    <p><img style={{ width: "30px" }} src={react}/> React JS</p>
                    <p><img style={{ width: "30px" }} src={spring}/> Spring</p>
                    <p><img style={{ width: "30px" }} src={jScript}/> Java Script</p>
                    <p><img style={{ width: "30px" }} src={azure}/> Azure</p>
                    </div>

                </div>
                
                <div id="derecha"clasName="col-10">
                    <div className="" id="cabecera-foro">
                            
                            <div id="cabecera-foro-interior">
                            <div style={{display:"flex", width: "100%", alignItems: "flex-end"}}>
                                <div id='superior-dx'>
                                    <img id='icon-foro' src={angular}/>
                                    <p style={{fontSize: "30px"}}>Angular</p>
                                </div>
                                <div  style={{marginRight: "30px", display:"flex", backgroundColor: "rgba(50, 213, 164, 0.1)", borderRadius: "10px", height: "25px", width: "130px"}}>
                                <i style={{ width: "30px" }} class="bi bi-person-check"></i>
                                <p style={{}}> Siguiendo</p>
                                </div>
                            </div>
                             <input style={{width: "500px"}} id="buscar" type="text" placeholder=" Buscar temas"></input>
                        </div>
                    </div>
                   
                    <div className="col-10" id="cuerpo">
                        <TarjetaList></TarjetaList>
                    </div>
                    
                </div>
        </div>
    </div>
  );
};

export default Foropage;
