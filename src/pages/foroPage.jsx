import React, { useEffect, useState }from "react";
import "../styles/foro.css";
import logo from '../media/Group 106.svg'
import angular from '../media/Icon.svg'



import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css'
import TarjetaList from "../components/containers/tarjeta_List";
import { principal } from "../utils/request";
import CursoList from "../components/containers/curso_List"



const Foropage = () => {

  
    
   
    const [nombre, setnombre] = useState();
    const [idCurso, setidCurso] = useState(null);
    const [nameCurso, setnameCurso] = useState(null);
    const [logoCurso, setlogoCurso] = useState(null);
    const [cursos, setcursos] = useState(null);
    const [modulos, setmodulos] = useState(null);



    useEffect(() => {        
         principal()
        .then  ((response)=>{            
            setnombre(response.data.nombre)
            setcursos(response.data.cursos) 
            setmodulos(response.data.modulos)   
        }) ; 
    }, []);


  return (
    
      <div>
            <div id='superior' className="col-12">
                <div id='superior-dx'>    
                <img id='logo-foro' src={logo}/>
                <p>Open Bootcamp</p>
                </div>
                <div id="superior-sx">
                <i id="opciones" className="bi bi-arrow-bar-down"></i> 
                <p style={{fontWeight: "bold", marginLeft: "5px", marginRight: "5px"}}>{nombre}</p>
                <i style={{margin:"5px"}} className="bi bi-person-circle"></i>  
                <input style={{marginRight: "5px", height: "30px"}} id="buscar" type="text" placeholder=" Buscar"></input>
            </div>  
            </div>
            <div id="contenedor">
                
                <div className="col-2" id="lateral">
                <a style={{color:"black", fontWeight: "bold"}} href="/login"><i className="bi bi-house-fill"></i> Pagina Principal</a>
                <p style={{marginTop: "30px", marginLeft: "-90px", fontWeight: "bold"}}>Cursos</p>
                    <div style={{textAlign: "left", marginLeft:"60px"}}>
                   
                   { (cursos != null) ? <CursoList lista={cursos} setnameCurso={setnameCurso} setidCurso={setidCurso} setlogoCurso={setlogoCurso}></CursoList> : <p>cursos sin asignar</p>}

                    </div>

                </div>
                
                <div id="derecha" className="col-10">
                    <div className="" id="cabecera-foro">
                            
                            <div id="cabecera-foro-interior">
                            <div style={{display:"flex", width: "100%", alignItems: "flex-end"}}>
                                <div id='superior-dx'>
                                    <img id='icon-foro' src={logoCurso}/>
                                    <p style={{fontSize: "30px"}}>{nameCurso}</p>
                                </div>
                                <div  style={{marginRight: "30px", display:"flex", backgroundColor: "rgba(50, 213, 164, 0.1)", borderRadius: "10px", height: "25px", width: "130px"}}>
                                <i style={{ width: "30px" }} className="bi bi-person-check"></i>
                                <p style={{}}> Siguiendo</p>
                                </div>
                            </div>
                             <input style={{width: "500px"}} id="buscar" type="text" placeholder=" Buscar temas"></input>
                        </div>
                    </div>
                   
                    <div className="col-10" id="cuerpo">
                        
                        { (modulos != null) ? <TarjetaList modulos={modulos} idCurso={idCurso} username={nombre}></TarjetaList> : <p></p>}
                    </div>
                    
                </div>
        </div>
    </div>
  );
};

export default Foropage;
