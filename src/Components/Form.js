import { useState } from "react";
import './style.css';

export default function Form()  {
	const [selectedOption, setSelectedOption] = useState("----");
    const [selectedName, setSelectedName] = useState("");
    const [selectedPhone, setSelectedPhone] = useState("");
    const [selectedAge, setSelectedAge] = useState("");
    const [selectedAddress, setSelectedAddress] = useState("");
     
    const Phone = (p) => {
        setSelectedPhone(p.target.value);
    };
    const Name = (e) =>{
        setSelectedName(e.target.value);
    };
    const Age = (a) => {
        setSelectedAge(a.target.value);
    };
    const Address = (ad) => {
        setSelectedAddress(ad.target.value);
    };
	const  handleDropdownChange = (event) => {
        
		setSelectedOption(event.target.value);
	};

return  (
	<div className="ok">

        <h2>Form and Controlls</h2>
        <form id="name" action="post">

            <label style={{padding:"10px", margin:"auto"}} id="lab-name">Name is :  </label> 
                <input type="text" value={selectedName} onChange={Name} placeholder="Tom" required></input><br style={{padding:"20px"}}></br>
           
            <label  style={{padding:"10px", margin:"auto"}} id="lab-phone">Phone No is :  </label> 
                <input type="text" value={selectedPhone} onChange={Phone} placeholder="9876543210" required></input><br style={{padding:"20px"}}></br>
           
            <label  style={{padding:"10px", margin:"auto"}}>Age is :  </label> 
                <input type="number" value={selectedAge} onChange={Age} placeholder="20" max={"60"} min={"15"} required></input><br style={{padding:"20px"}}></br>
           
            <label  style={{padding:"10px", margin:"auto",}}>Address is : </label> 
                <input type="text" value={selectedAddress} onChange={Address} placeholder="USA"required ></input><br style={{padding:"20px"}}></br>
            
            
        <label  style={{marginTop:"20px", marginBottom:"20px"}} id="lab-select">
			Select Your Skills
				<select  value={selectedOption} onChange={handleDropdownChange} placeholder="ok" required>
                <option>UI / UX Developer</option>
                <option> Software Developer</option>
                <option> Web Developer</option>
                <option>Software Engineer</option>
                <option> Data Analysis</option>
				<option  >Front End Developer</option>
				<option  >Back End Developer</option>
				<option  >Full Stack Developer</option>
			</select>
		</label> <br style={{padding:"20px"}}></br>

        <button style={{marginTop:"20px", marginBottom:"20px"}} >Submit</button><br style={{padding:"20px"}}></br>
        </form>

        <div id="answer">
        <p>Your Name is : {selectedName}</p>
        <p>Your Phone No is : {selectedPhone}</p>
        <p>Your Age is : {selectedAge}</p>
        <p>Your Address is : {selectedAddress}</p>
		<p>Your Skills: {selectedOption}</p>
        </div>
		
	</div>
	);
}