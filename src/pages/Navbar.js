
import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = ({isLogedIn}) => {
  return (
    <nav>
        <NavLink to="/Home" className="nav-link">Home</NavLink>
        <NavLink to="/contact" className="nav-link">Contact</NavLink>
        <NavLink to="/blogs" className="nav-link">Blogs</NavLink>
        <NavLink to="/addblog" className="nav-link">Add-Blog</NavLink>
        {isLogedIn? <button>LogIn</button>: <button>LogOut</button>}
    </nav>
  )
}

export default Navbar