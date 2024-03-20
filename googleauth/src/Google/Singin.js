import React, { useEffect, useState } from "react"
import{signInWithPopup}from 'firebase/auth'
import { auth, provider } from "./Config";
import Home from "./Home";
function Singnin()
{
     const  [value, setValue]= useState('');
     const HandleClick=()=>
     {
        signInWithPopup(auth,provider).then((data)=>
        {
            setValue(data.user.email)
            localStorage.setItem('email', data.user.email)
        });
     }
     useEffect(()=> {setValue(localStorage.getItem('email'))},[])
    return(
        <div className="App">
            {value ? <Home/>: <button onClick={HandleClick}>SingninWithGoogle</button>}
        </div>
    )
}
export default Singnin;