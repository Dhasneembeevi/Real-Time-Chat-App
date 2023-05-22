import React from 'react'
//import { BsFillSendFill } from "react-icons/bs";
import { FaSignOutAlt } from 'react-icons/fa';
import "./header.css"
import logo1 from "../../asserts/logo1.png"

function Header({auth, user}) {
  return (
    <header className='head'>
      
     <img src={logo1} alt='logo'  className='logo'/>
      <h2 className='chat-head'>Real time chat App</h2>

      {user && <FaSignOutAlt className='signout' onClick={()=> auth.signOut()}/>}


    </header>
  )
}

export default Header
     // <BsFillSendFill />