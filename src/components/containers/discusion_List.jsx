import React from 'react';
import PropTypes from 'prop-types';
import Discusionprecomponent from '../pure/discusionPreComponent'

const avatar =["user1", "user2", "user3"]
const discusion1={
    likes: 24,
    titulo: "El contenido del curso se ha actualizado",
    usuario: "oscar",
    tiempo: "12",
    avatares: [avatar[0], avatar[1], avatar[2]],
    respuestas: 5
}

const discusion2={
    likes: 24,
    titulo: "El contenido del curso se ha actualizado",
    usuario: "oscar",
    tiempo: "12",
    avatares: [avatar[0], avatar[1], avatar[2]],
    respuestas: 5
}

const discusion3={
    likes: 24,
    titulo: "El contenido del curso se ha actualizado",
    usuario: "oscar",
    tiempo: "12",
    avatares: [avatar[0], avatar[1], avatar[2]],
    respuestas: 5
}

let discusionArray=[discusion1, discusion2, discusion3]

const DiscusionList = () => {
    return (
        <div>
             { discusionArray.map((discusion, index) =>{
                            
                            return (
                                <Discusionprecomponent className='' key={index}
                                discusion={discusion}>
                                </Discusionprecomponent>
                            )
                           
                    } )}
        </div>
    );
};


DiscusionList.propTypes = {

};


export default DiscusionList;
