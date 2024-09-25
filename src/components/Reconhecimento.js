import React from 'react'
import Style from "../styles/Reconhecimento.module.css"
import Avatar from "../images/avatarDois.png"

function Reconhecimento() {
  return (
    <section className={Style.Reconhecimento}>
        <div>
            <div className={Style.Sistema}>
                <p>UM SISTEMA DE RECONHECIMENTO DE PRESENÇA BASEADO NA</p>
                <p className={Style.textEffect}>SUA FACE</p>
            </div>
            <button>Venha para a Athena</button>
        </div>
        <div>
            <img src={Avatar} className={Style.Avatar}/>
        </div>
    </section>
  )
}

export default Reconhecimento