import React,{useState} from 'react';
import PropTypes from 'prop-types';
import RichTextEditor from '../editor'


const Formpregunta = ({cuerporespuesta, nuevoTitulo}) => {

// const [title, settitle] = useState(null);

    return (
        <div>
            <form>
                <div style={{display: "flex", marginBottom: "10px"}}>
                    <label style={{fontWeight: "bold", fontSize: "0.8em"}} for="titulo-pregunta">Título pregunta</label>
                    <input style={{width: "90%"}} id="titulo-pregunta" type="test" onChange={(event) => nuevoTitulo(event.target.value)}></input>
                </div>
                <div style={{display: "flex", marginBottom: "10px"}}>
                    <label style={{fontWeight: "bold", fontSize: "0.8em", marginRight: "11px"}} for="categoria">Categoria</label>
                    <input style={{width: "90%"}} id="categoria" type="test"></input>
                </div>
                <div style={{display: "flex"}}>
                    <label style={{fontWeight: "bold", fontSize: "0.8em", marginRight: "11px"}} for="contenido" >Contenido</label>  
                    <div id="contenido" style={{width: "90%"}}>
                    <RichTextEditor cuerporespuesta={cuerporespuesta}></RichTextEditor>   
                    </div>
                </div>
            </form>
        </div>
    );
};


Formpregunta.propTypes = {

};


export default Formpregunta;
