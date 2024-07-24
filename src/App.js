import logo from './logo.svg';
import { Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import { useEffect } from 'react';
import Project from './Pages/Project4';
import Project2 from './Pages/Project2';
import NavBar from "./Components/Navigaiton";
import Button from './Components/Button';
import Counter from './Components/Counter';
import Conditional from './Components/Conditional';
import Form from './Components/Form';
import Container from './Components/Life';
import './App.css';
import Project6 from './Pages/Project6';
import ErrorBoundary, { RatingComponent } from './Components/Error';
import Login from './Components/Login';
import LoginControl from './Components/Conditional';
import Project3 from './Pages/Project3';
import Error from './Components/Error';
import Project11 from './Pages/Project11';





function App() {

  useEffect(() =>{
      document.title = "React Projects :)  ";
  })

  
  return (


    <div className="App">

       <>

       <div>
        <h1 id='react'> <strong style={{fontSize:"45px",color:"#61DBFB"}}>React</strong> Projects Examples</h1>
       </div>
       <NavBar />
         <Routes>
            <Route path="Home" element={<Home />} />
            <Route path="/about" element={<About />}/>
            <Route path="/Project2" element ={<Project2 />}/>
            <Route path="/Project3" element ={<Project3 />}/>
            

            <Route path="/Project4" element ={<Project />}/>
            <Route path="/Project6" element ={<Project6 />}/>
            <Route path="/Project11" element ={<Project11 />}/>
         </Routes>
      </>
      

      
      

      

       

      
      

      

      
       <br style={{padding:"20px"}}></br>

      

     

       
    </div>

   
  );
}

export default App;
