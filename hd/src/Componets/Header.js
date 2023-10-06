import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <div className='containerMain'>
      <ul>

      {
        localStorage.getItem("user-info")?
        <>
        <li><Link to='/Home'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        </>
        :
        <>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/'>Registration</Link></li>
        </>
      }
   
     
      </ul>
    </div>
  )
}
