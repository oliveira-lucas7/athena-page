import React from 'react'
import Style from "../styles/Footer.module.css"
import Logo from "../images/logo-athena.png"

function Footer() {
  return (
    <div className={Style.Footer}>
        <img src={Logo} className={Style.logoImg}/>
        <p>Copyright Athena - 2023</p>
    </div>
  )
}

export default Footer