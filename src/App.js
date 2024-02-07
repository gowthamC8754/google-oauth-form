
import './App.css';
import GoogleLoginButton from './components/GoogleLoginButton';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loginform from './components/Loginform';
import  Navigation from'./components/Navigation';
 


 
function App() {
  
  return (
    <Router>
        <Routes>
         <Route path='/login' element={<GoogleLoginButton/>}/>
        <Route path="/" element={<Loginform/>} />
        <Route path='/navigation' element={<Navigation/>}/>
      </Routes>
    </Router>
  );
}

export default App;
