import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './Components/NavBar';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Services from './Components/Pages/Services';
import Footer from './Components/Pages/Footer';

function App() {
  const menu = [
        {
           id: 1,
           page: "Home",
           url: "/"
        },
        {
           id: 2,
           page: "Services",
           url: "/services"
        },
        {
           id: 3,
           page: "About",
           url: "/"
        },
        {
           id: 4,
           page: "Contact",
           url: "/"
        },
  ]
  return (
    <div className="App">
         <BrowserRouter>
             <NavBar menu={menu}/>
             <Routes>
                  <Route path='/' Component={Home}/>
                  <Route path='/services' Component={Services}/>
             </Routes>
         </BrowserRouter>
         <Footer/>
        
    </div>
  );
}

export default App;
