import React from 'react'
import Logo from '../images/logo-athena.png'
import Style from '../styles/Header.module.css'

function Header() {
  return (
    <div className={Style.header}>
      <a href=''>
        <img src={Logo}/>
      </a>
    </div>
  )
}

export default Header