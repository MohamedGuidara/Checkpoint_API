import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const AppNav = () => {
    return (
        <div>
           <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home"> 
      <Link to="/">Home</Link>
    </Navbar.Brand>
  </Navbar> 
        </div>
    )
}

export default AppNav
