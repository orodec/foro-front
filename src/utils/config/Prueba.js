
import axios from 'axios'; 

let token = localStorage.getItem('token');  
axios.defaults.baseURL = 'http://localhost:3333/' 
axios.defaults.headers.common = {'Authorization': `Bearer ${token}`} 

export default axios;