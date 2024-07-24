import { NavLink } from "react-router-dom";
import './style.css';

const NavBar = () => {
  return (
    <nav>
      <ul style={{overflow:"hidden" , textDecoration:"none" , fontSize:"20px"}}>
        <li style={{float:"left" , padding:"10px", textDecoration:"none", textDecorationStyle:"none" ,fontSize:"20px"}}  >
          <NavLink id="dummy" to="/home">Home</NavLink>
        </li>
        <li style={{float:"left"  , padding:"10px" ,fontSize:"20px"}}  >
          <NavLink to="/about">Basic Component Creation</NavLink>
        </li>
        <li style={{float:"left"  , padding:"10px" ,fontSize:"20px"}}  >
          <NavLink to="/Project3">Conditional Rendering</NavLink>
        </li>
       
        <li style={{float:"left"  , padding:"10px" ,fontSize:"20px"}}  >
          <NavLink to="/Project2">State Management</NavLink>
        </li>
        <li style={{float:"left"  , padding:"10px" ,fontSize:"20px"}}  >
          <NavLink to="/Project4">Form and Controll</NavLink>
        </li>
        <li style={{float:"left"  , padding:"10px" ,fontSize:"20px"}}  >
          <NavLink to="/Project6">Lifecycle Method</NavLink>
        </li>
        <li style={{float:"left"  , padding:"10px" ,fontSize:"20px"}}  >
          <NavLink to="/Project11">Error boundaries</NavLink>
        </li>
      </ul>

      
    </nav>
  );
};

export default NavBar;