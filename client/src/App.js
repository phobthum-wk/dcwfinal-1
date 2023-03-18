import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import {BrowserRouter ,Routes, Route, Link, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import Cartscreen from './screens/Cartscreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter forceRefresh={false} >
        <Routes>
          <Route path="/" element={<Homescreen/>}></Route>
          <Route path="/cart" element={<Cartscreen/>} ></Route>
          <Route path="/register" element={<Registerscreen/>}></Route>
          <Route path="/login" element={<Loginscreen/>}></Route>
        </Routes>  
      
      </BrowserRouter>
    </div>
  );
}

export default App;
