import React from "react";
import { useState } from 'react';
import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Login(){
    const [isSignedIn, setIsSignedIn] = useState(null);

    const signin = () => {
        setIsSignedIn(true);
      }

      const signout = () => {
        setIsSignedIn(false);
      }

      return(
        <div >
            {isSignedIn ? (
          <div  >
            <button onClick={signout}>
              Sign out
            </button>
          </div>
        ) : (
          <div >
            <button onClick={signin}>
              Sign in
            </button>
          </div>
        )}
        </div>
      )
}

export default Login;

