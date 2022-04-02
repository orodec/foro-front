import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Curso from '../pure/curso'


const CursoList = ({lista, setnameCurso, setidCurso, setlogoCurso}) => {



    return (
        <div>
                       
            {lista.map((curso, index) =>{
           
        
                return ( 
                    <Curso className='' key={index}
                    curso={curso} setnameCurso={setnameCurso} setidCurso={setidCurso} setlogoCurso={setlogoCurso}>
                    </Curso>
                
                
               )
            }
            )}
            
        </div>
    );
};


CursoList.propTypes = {

};


export default CursoList;
