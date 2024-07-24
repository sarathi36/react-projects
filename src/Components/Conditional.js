import React from "react";
import ReactDOM from 'react-dom/client';
import './style.css';

class LoginControl extends React.Component {
   constructor(props) {
     super(props);
     this.handleLoginClick = this.handleLoginClick.bind(this);
     this.handleLogoutClick = this.handleLogoutClick.bind(this);
     this.state = {isLoggedIn: false};
   }
 
   handleLoginClick() {
     this.setState({isLoggedIn: true});
   }
 
   handleLogoutClick() {
     this.setState({isLoggedIn: false});
   }
 
   render() {
     const isLoggedIn = this.state.isLoggedIn;
     let button;
 
     if (isLoggedIn) {
       button = <LogoutButton onClick={this.handleLogoutClick} />;
     } else {
       button = <LoginButton onClick={this.handleLoginClick} />;
     }
 
     return (
       <div>
         <Greeting isLoggedIn={isLoggedIn} />
         {button}
       </div>
     );
   }
 }
 
 function UserGreeting(props) {
   return <h1>Welcome back!</h1>;
 }
 
 function GuestGreeting(props) {
   return <h1>Please Log In.</h1>;
 }
 
 function Greeting(props) {
   const isLoggedIn = props.isLoggedIn;
   if (isLoggedIn) {
     return <UserGreeting />;
   }
   return <GuestGreeting />;
 }
 
 function LoginButton(props) {
   return (
      <div id="life">
          <button onClick={props.onClick}>
       Login
     </button>
      </div>
     
   );
 }
 
 function LogoutButton(props) {
   return (
      <div id="life">
         <button onClick={props.onClick}>
       Logout
     </button>
      </div>
     
   );
 }
 
 const root = ReactDOM.createRoot(document.getElementById('root')); 
 root.render(<LoginControl />);

 export default LoginControl;