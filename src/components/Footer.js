import React from 'react'
import Style from "../styles/Footer.module.css"
import Logo from "../images/logo-athena.png"

function Footer() {
  return (
    <div className={Style.Footer}>
      <a href=''>
        <img src={Logo} className={Style.logoImg}/>
      </a>
        <p>Copyright Athena - 2023</p>
    </div>
  )
}

export default Footer