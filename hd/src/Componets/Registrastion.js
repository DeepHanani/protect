import React, { useEffect, useState } from 'react'
import Header from './Header'
import { useNavigate,useHistory } from 'react-router-dom';


export default function Registrastion() {

    const history = useHistory();

    const[input,setInput] =  useState({
        firstname:"",
        email:"",
        password:""
    })

    const navigate = useNavigate();

  


    const handalchange = (e)=>{
        setInput({...input ,[e.target.name]:e.target.value})
 
     }

     const handalSubmit = ()=>{
       localStorage.setItem("user-info",JSON.stringify(input))
       navigate("/login")

     }

     useEffect(()=>{

        if(localStorage.getItem("user-info")){
            history.push('/Home')
        }
  
      },[])

     console.log(input)


  return (
    <div>
    <Header/>
    <input type="text" onChange={handalchange} name='firstname'/><br />
    <input type='email' onChange={handalchange}  name='email' /><br />
    <input type='password' onChange={handalchange}  name='password' /><br />

    <button onClick={handalSubmit}>Registration</button>
    </div>
  )
}
