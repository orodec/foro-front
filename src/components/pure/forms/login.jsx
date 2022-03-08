import React from 'react';
import { useNavigate } from "react-router-dom";
import  {Formik, Field, Form} from 'formik';
import * as Yup from 'yup';
import '../../../styles/login.css'
import logo from '../../../media/Group 106.svg'


const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
        .email('Invalid email format')
        .required('Email is required'),
        password: Yup.string().required('Password is required')
    }
)

const Loginformik = () => {
    const initialCredentials={
        email:'',
        password:''
    }

    // const navigate = useNavigate();
	//  function handleClick() {
    //      navigate('/home');
    //      };

    return (
       
            
        <div className="login" >
        <div id="cabecera">
           <img id='logo' src={logo}/>
            <div>
            <p id="open">Open</p>
            <p id="boot">Bootcamp</p>
            </div>
            </div>
            <Formik className=""
                initialValues={ initialCredentials }
                validationSchema = {loginSchema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                    await localStorage.setItem('credential', values)
                    //navigate('/profile');
                }}
            >

                { props => {
                    const {
                        values,
                        touched,
                        errors,
                        isSubmitting,
                        handleChange,
                        handleBlur                    
                    } = props

                    return (
                        <Form>
                <label className="loginItem" htmlFor="email">Email</label>
                <Field size="35" id="email" type="email" name="email" placeholder="example@email.com" />

                        {
                            errors.email && touched.email && 
                            (
                                <div className='error'>
                                    <p>{errors.email}</p>
                                </div>
                            )
                        }

                <label  className="loginItem" htmlFor='password'>Password</label>
                <Field 
                    size="35"
                    id="password"
                    name="password"
                    placeholder="password"
                    type="password"
                />
                 {
                            errors.password && touched.password && 
                            (
                                <div className='error'>
                                    <p>{errors.password}</p>
                                </div>
                            )
                        }

                <input className="loginItem" type="checkbox" values="Recuerdame"/>Recuerdame
                <a href="">¿Has olvidado la contraeña?</a>
                <button type="submit" className="btn btn-success " id="boton-login">Login</button>
                {isSubmitting ? <p>Login your credentials</p>:null}

            </Form>
                    )
                }}

            

            </Formik>
            <footer> 
            <p>Copyright © 2022 Óscar Ródenas</p>
            <p>Todos los derechos reservados</p>
            <p><a href="">Politica de privacidad</a></p>
            </footer> 
        </div>
       
    );
}

export default Loginformik;