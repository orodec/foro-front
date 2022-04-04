import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import "../../../styles/login.css";
import logo from "../../../media/Group 106.svg";
import  {logarse}  from "../../../utils/request";
import socket from "../../../utils/sockets";


const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const Loginformik = () => {

  const initialCredentials = {
    email: "",
    password: "",
  };


  const navigate = useNavigate();
 
  function handleClick(values) {
    socket(values.email);
    navigate("/foro");
  }

  function registrate(){
    navigate("/register");
  }

  return (
    <div className="login">
      <div id="cabecera">
        <img id="logo" src={logo} />
        <div>
          <p id="open">Open</p>
          <p id="boot">Bootcamp</p>
        </div>
      </div>
      <Formik
        className="d-grid gap-2 col-6 mx-auto"
        initialValues={initialCredentials}
        validationSchema={loginSchema}
        onSubmit={async (values) => {
          /*
          await new Promise((r) => setTimeout(r, 1000));
          alert(JSON.stringify(values, null, 2));
          await localStorage.setItem("credential", values);
          navigate("/foro");
          */
           await logarse(values)
           .then((response) => {   
        // console.log(response);
        // console.log(response.data.token);
         localStorage.setItem('token', response.data.token)
        // let codigo = localStorage.getItem('token')
        //   console.log(localStorage.getItem('token'))  
        handleClick(values)
            })
            .catch((error) => {
                alert(`Usuario o contraseña no validos \n ${error}`);
            })
                  }}
      >
      
        {(props) => {
          const {
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
          } = props;

          return (
            <Form>
              <label className="loginItem" htmlFor="email">
                Email
              </label>
              <Field
                size="35"
                id="email"
                type="email"
                name="email"
                placeholder="example@email.com"
              />
              {errors.email && touched.email && (
                <div className="error">
                  <p>{errors.email}</p>
                </div>
              )}
              <label className="loginItem" htmlFor="password">
                Password
              </label>
              <Field
                size="35"
                id="password"
                name="password"
                placeholder="password"
                type="password"
              />
              {errors.password && touched.password && (
                <div className="error">
                  <p>{errors.password}</p>
                </div>
              )}
              <input
                className="loginItem"
                type="checkbox"
                values="Recuerdame"
              />
              Recuerdame
              <a href="">¿Has olvidado la contraeña?</a>
              <button
                type="submit"
                className="btn btn-success "
                id="boton-login"
              >
                Login
              </button>
              <p onClick={registrate} style={{cursor:"pointer", color:"#198754", display: "flex", flexDirection: "row", justifyContent: "center"}}>Registrate</p>
              {isSubmitting ? <p>Login your credentials</p> : null}
            </Form>
          );
        }}
      </Formik>
      <footer>
        <p>Copyright © 2022 Óscar Ródenas</p>
        <p>Todos los derechos reservados</p>
        <p>
          <a href="">Politica de privacidad</a>
        </p>
      </footer>
    </div>
  );
};

export default Loginformik;
