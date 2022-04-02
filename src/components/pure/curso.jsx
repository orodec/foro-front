import React from 'react';
import PropTypes from 'prop-types';




const Curso = ({curso, setnameCurso, setidCurso, setlogoCurso}) => {





    function seleccionar(){
        setidCurso(curso.id);
        setnameCurso(curso.name);
        setlogoCurso(curso.logo);
    }


    return (
        <div>
            <p style={{cursor: "pointer"}} onClick={seleccionar}><img style={{ width: "30px" }} src={curso.logo}/>{curso.name}</p>
           

        </div>
    );
};


Curso.propTypes = {

};


export default Curso;
