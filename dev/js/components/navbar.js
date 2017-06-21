import React from 'react'

const Navbar = ({className}) => (
  <nav className={className}>
    <img src='/images/logo.png'/>
    <input type='text' placeholder='Buscar'/>
    <img src='/images/facebook.png' width="48px"/>
    <img src='/images/twitter.png' width="48px"/>
  </nav>
)

export default Navbar
