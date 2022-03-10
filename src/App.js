
import './App.css';
import{ BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Homepage from './pages/homePage'
import Loginpage from './pages/loginPage'
import Registerpage from './pages/registerPage';
import Notfoundpage from './pages/notFoundPage';
import Foropage from './pages/foroPage';
import Discusionespage from './pages/discusionesPage'
import Preguntapage from './pages/preguntaPage'
function App() {
  return (
    <Router>
    <div>
      
    </div>
    <Routes>
      
    <Route path='/' element={ <Homepage/> }/> 
    <Route path='/login' element={ <Loginpage/> }/> 
    <Route path='/register' element={ <Registerpage/> }/> 
    <Route path='/foro' element={ <Foropage/> }/> 
    <Route path='/discusiones' element={ <Discusionespage/> }/> 
    <Route path='/pregunta' element={ <Preguntapage/> }/> 




    <Route path='*' element={ <Notfoundpage/> }/>
    </Routes>
   

  </Router>
   
  );
}

export default App;
