import React from 'react'
import Style from "../styles/Equipe.module.css"
import Lucas from "../images/lucas.png"
import Rodrigo from "../images/rodrigo.png"
import Valmir from "../images/valmir.png"
import Tomas from "../images/tomas.png"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Equipe() {
  return (
    <section className={Style.Equipe}>
      <div>
        <h3>NOSSA EQUIPE</h3>
      </div>

      <divn className={Style.membros}>
        <div className={Style.membroImpar}>
          <img src={Lucas} className={Style.image}/>
          <h4>Lucas Oliveira</h4>
          <p>Desenvolvedor FullStack</p>
          <div className={Style.icones}>
          <a target='_blank' href='https://www.linkedin.com/in/lucas-oliveira-715767291/'>
              <LinkedInIcon/>
            </a>
            <a target='_blank' href='https://github.com/oliveira-lucas7'>
              <GitHubIcon/>
            </a>
          </div>
        </div>
        <div className={Style.membroPar}>
          <img src={Valmir} className={Style.image}/>
          <h4>Valmir Borges</h4>
          <p>Desenvolvedor FullStack</p>
          <div className={Style.icones}>
          <a target='_blank' href='https://www.linkedin.com/in/valmir-borges-5966b9291/'>
              <LinkedInIcon/>
            </a>
            <a target='_blank' href='https://github.com/valmir-borges/valmir-borges'>
              <GitHubIcon/>
            </a>
          </div>
        </div>
        <div className={Style.membroImpar}>
          <img src={Tomas} className={Style.image}/>
          <h4>Tomás Nogueira</h4>
          <p>Desenvolvedor FullStack</p>
          <div className={Style.icones}>
            <a target='_blank' href='https://www.linkedin.com/in/tomas-nogueira-824295291/'>
              <LinkedInIcon/>
            </a>
            <a target='_blank' href='https://github.com/tomas-nogueira'>
              <GitHubIcon/>
            </a>
          </div>
        </div>
        <div className={Style.membroPar}>
          <img src={Rodrigo} className={Style.image}/>
          <h4>Rodrigo</h4>
          <p>Desenvolvedor FullStack</p>
          <div className={Style.icones}>
          <a target='_blank' href='https://www.linkedin.com/in/dev-rodrigo-seabra/'>
              <LinkedInIcon/>
            </a>
            <a target='_blank' href='https://github.com/rodrigo-seabra'>
              <GitHubIcon/>
            </a>
          </div>
        </div>
      </divn>
    </section>
  )
}

export default Equipe