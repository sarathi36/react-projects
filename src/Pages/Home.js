import React from "react";
import logo from './logo.svg';
import './Page.css';
import ErrorBoundary from "../Components/Error";

const Home = () => {
   return(
      <div>
      <img id='image' src={logo} width={"100%"} />


    <div>
    <h3 style={{fontSize:"30px"}}>Contact </h3>
    </div>

      <div id="contact">
     <a href="https://github.com/sarathi36"><img src="https://icons.iconarchive.com/icons/arturo-wibawa/akar/128/github-icon.png" width="100%" height="128"/>   </a> 
      <a href="https://www.linkedin.com/in/sarathi36"><img src="https://icons.iconarchive.com/icons/danleech/simple/128/linkedin-icon.png" width="100%" height="128"/></a>
      <a href="https://wa.me/6374517428"><img src="https://icons.iconarchive.com/icons/tinylab/android-lollipop-apps/128/Whatsapp-icon.png" width="100%" height="128"/> </a>
     
      <a href="mailto:sarathii2011@gmail.com"><img src="https://icons.iconarchive.com/icons/johnathanmac/mavrick/128/Mail-icon.png" width="100%" height="128"/> </a>
     




      </div>
      
      </div>
   ) 
}

export default Home;