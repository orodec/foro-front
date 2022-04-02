import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Barrasuperior from '../components/pure/barraSuperior'
import RespuestaList from '../components/containers/respuesta_List'
import RichTextEditor from '../components/pure/editor'
import {detallePregunta, responder} from '../utils/request'
import {useLocation} from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
 

const Preguntapage = () => {

    const location = useLocation();
    console.log(location.state.pregunta);
    const nombre = location.state.username;
    const [pregunta, setpregunta] = useState(null);
    let nuevaRespuesta;

    function cuerporespuesta(parametro){
        nuevaRespuesta=parametro
        console.log(nuevaRespuesta)
    }
   
    
  
    useEffect(() => { 
         
        detallePregunta(location.state.pregunta.id)
       .then  ((response)=>{            
           setpregunta(response.data)
           console.log(response.data)
       }) ; 
    }, []);

const [ver, setver] = useState(true);



   
 function show(ver) {
   
     if (ver) {
       return (
         <div style={{display: "flex"}}>
         <i style={{marginRight: "10px"}} className="bi bi-person-circle"></i>
         <div onClick={()=>setver(false)} style={{width: "100%", height: "30px", backgroundColor: "#F0F0F3"}}>
         <p>Escribe una respuesta</p>
         </div>
         </div>
       )
     }else{
         return (
        <div>
            <div style={{display: "flex"}}>
                <i style={{marginRight: "10px"}} className="bi bi-person-circle"></i>
                <div style={{width: "100%"}}>
                <RichTextEditor cuerporespuesta={cuerporespuesta}></RichTextEditor>
                </div>
            </div>   
            <div style={{display: "flex"}}>
                <button onClick={()=>setver(true)} type="button" style={{marginTop: "20px", height: "30px", backgroundColor: "white", borderRadius: "10px"}}>Cancelar</button>
                <button onClick={()=>responder(location.state.pregunta.id, nuevaRespuesta)} type="button" className="btn" style={{margin: "23px 0px 0px 8px", padding: "0px 5px 0px 5px", height: "1.6em",  backgroundColor: "#32D4A4", color:"white"}}>Subir pregunta</button>
            </div>
            
        </div>  
         )
     }
    
   }


    return (
        <div>
            <Barrasuperior username={nombre}></Barrasuperior>
            { pregunta != null ? 
            <div style={{backgroundColor: "white", borderRadius: "10px", margin: "20px", padding: "20px"}}>
               <div style={{display: "flex", justifyContent: "space-between"}}>
                <div style={{backgroundColor: "rgba(40, 237, 178, 0.15)", borderRadius: "10px", width: "140px"}}>    
                    <p style={{color: "#09C598", margin: "4px 3px 0px 3px"}}> Angular/Modulo 1</p>
                </div>
                <button type="button" style={{backgroundColor: "white", borderRadius: "10px"}}><i className="bi bi-person-check"></i> Seguir pregunta</button>
               </div>
                <p style={{fontWeight: "bold", margin: "0px"}}> { pregunta.preguntasDTO.title } </p>
                    <p style={{fontSize: "0.7em"}} >Publicado por <span style={{display: "inline", fontWeight: "bold"}}> {pregunta.preguntasDTO.username} </span> hace 4 días</p>

                 <div>
                 {ReactHtmlParser (pregunta.preguntasDTO.body)} 
                 </div>

                 <div style={{display: "flex", justifyContent: "space-between"}}>
                    <div style={{display: "flex"}}>
                       <div style={{display: "flex", backgroundColor: "#32D4A4", borderRadius: "10px", height: "30px"}}>
                        <i  style={{margin: "2px 2px 0px 8px", color: "white"}} className="bi bi-hand-thumbs-up-fill"></i>
                        <p style={{margin: "2px 8px 0px 2px", color: "white"}} >{pregunta.preguntasDTO.votosPositivos}</p>
                       </div>
                       <div style={{height: "30px", margin: "0px 10px 0px 10px", display: "flex", borderWidth: "1px", borderStyle: "solid", borderColor: "red", borderRadius: "10px"}}>
                        <i style={{margin: "2px 2px 0px 8px", color: "red"}} className="bi bi-hand-thumbs-down"></i>
                        <p style={{margin: "2px 8px 0px 2px", color: "red"}} >{pregunta.preguntasDTO.votosNegativos}</p>
                       </div>                        

                    <button type="button" style={{height: "30px", backgroundColor: "white", borderRadius: "10px"}}><i className="bi bi-chat-dots"></i> Responder</button>
                
                    </div>
                    <div>
                    <i style={{backgroundColor: "#A1A1A3"}} className="bi bi-pin"></i>
                    </div>
                 </div>

            </div>
        : null}
            <p style={{fontWeight: "bold", margin: "0px 0px -10px 20px"}}> {pregunta != null ? pregunta.preguntasDTO.numeroRespuestas : null} Respuestas</p>
            <div style={{backgroundColor: "white", borderRadius: "10px", margin: "20px", padding: "20px"}} >
                { pregunta != null ? <RespuestaList respuestas={pregunta.answer}></RespuestaList> :null }
            </div>
            <div style={{backgroundColor: "white", borderRadius: "10px", margin: "20px", padding: "20px"}}>
               {show(ver)}
            </div>

        </div>
    );
};


Preguntapage.propTypes = {

};


export default Preguntapage;
