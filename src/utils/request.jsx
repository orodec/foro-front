import axios from 'axios';


export function hola(){
   return axios.get('http://localhost:3333/users/hola')
}

export function logarse(credenciales){
 // console.log(credenciales)
    return axios.post('http://localhost:3333/users/authenticate', credenciales)
 }

 export function registrarse(credenciales){
//  console.log(credenciales)
    return axios.post('http://localhost:3333/users/register', credenciales)
 }


 export async function principal(){
   let token = localStorage.getItem('token');  
   return Promise.resolve ( axios.get(
      'http://localhost:3333/foro/principal', {
  headers: {
    'Authorization': `Bearer ${token}`
  }
}) ) 
 }

 export async function discusion(id){
  let token = localStorage.getItem('token');  
  return Promise.resolve ( axios.get(
     `http://localhost:3333/foro/principal/${id}`, {
 headers: {
   'Authorization': `Bearer ${token}`
 }
}) ) 
}

export async function detallePregunta(id){
  let token = localStorage.getItem('token');  
  return Promise.resolve ( axios.get(
     `http://localhost:3333/foro/discusiones/${id}`, {
 headers: {
   'Authorization': `Bearer ${token}`
 }
}) ) 
}

export async function SeguirPreguntaRequest(id){
  let token = localStorage.getItem('token');  
  return Promise.resolve ( axios.get(
     `http://localhost:3333/foro/discusiones-seguir/${id}`, {
 headers: {
   'Authorization': `Bearer ${token}`
 }
}) ) 
}


export async function responder(id, respuesta){
  let token = localStorage.getItem('token');  
 // console.log("Este el mi token: " + token)
  // console.log("Este el id pregunta: " + id)
  // console.log("cuerpo respuesta: " + respuesta)

  axios.defaults.baseURL = 'http://localhost:3333/' 
  axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}

  return Promise.resolve ( axios.post(
     `foro/discusiones/${id}`, {
     respuesta
 }) ) 
}


export async function nuevaPregunta(id, body, title){
  let token = localStorage.getItem('token');  
  
  axios.defaults.baseURL = 'http://localhost:3333/' 
  axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
  
  return Promise.resolve ( axios.post(
     `foro/nueva_pregunta/${id}`, {

      body,
      title

 }) ) 
}


