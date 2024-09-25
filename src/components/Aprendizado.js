import React from 'react'
import Style from "../styles/Aprendizado.module.css"
import celular from "../images/celular.png"
import baixar from "../images/baixar.png"

function Aprendizado() {
  return (
    <section className={Style.Aprendizado}>
        <div>
            <img src={celular}/>
        </div>
        <div>
            <div className={Style.controle}>
                <p>TODO O CONTROLE SOBRE O APRENDIZADO NA PALMA DA</p>
                <p className={Style.textColor}>SUA MÃO</p>
            </div>
            <div className={Style.baixar}>
                <p>Baixe o Portal Athena</p>
                <img src={baixar} className={Style.image}/>
            </div>            
        </div>
    </section>
  )
}

export default Aprendizado