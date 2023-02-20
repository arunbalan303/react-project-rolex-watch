import Service from './components/Service';
import './App.css';
import Contact from './components/Contact';
import Login from './components/Login';
import Header from './components/Header';
import Registration from'./components/Registration';
import Store from './components/Store';
import About from './components/About';
import Footer from './components/Footer';
import Home from './components/Home';
import Apk from './components/Apk';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
      </header>
   

    <Router>
      <Header/>
         <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact/>}/>     
        <Route path='/store' element={<Store />}/>  
        <Route path='/login' element={<Login />}/>     
        <Route path='/registration' element={<Registration/>}/>  
        <Route path='/service' element={<Service />}/>  
        <Route path='/apk' element={<Apk />}/>  
       
        </Routes>
        <Footer/>

        
      </Router>

      
   
    </div>
  );
}

export default App;
