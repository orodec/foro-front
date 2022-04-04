import React from 'react';
import PropTypes from 'prop-types';
import Discusionprecomponent from '../pure/discusionPreComponent'


const DiscusionListNoFixed = ({preguntas, username}) => {
   // console.log(preguntas)

    return (
        <div>
             { preguntas.map((pregunta, index) =>{
                            if(!pregunta.fixed){
                            return (
                                <Discusionprecomponent className='' key={index}
                                username={username}
                                pregunta={pregunta}>
                                </Discusionprecomponent>
                            )
                        }
                           
                    } )}
        </div>
    );
};


DiscusionListNoFixed.propTypes = {

};


export default DiscusionListNoFixed;
