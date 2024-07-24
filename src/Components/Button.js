import React, { Children } from 'react';



function Button(props){

    const Greedings = () => {
       alert("Hello Folks !!! :)");
    }

    const {Children, style} = props
    return(
        <div id='pro-button'>
            <button style={style ? style: {backgroundColor:"green" , width:'15%'}} onClick={Greedings}  >  {Children} <h2> Click</h2>  </button>
        </div>
        
    )
}


export default Button;