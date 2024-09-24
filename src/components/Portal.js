import React, { useState } from 'react';
import Style from '../styles/Portal.module.css';
import avatarUm from "../images/avatarUm.png";

function Portal() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email enviado:', email);
    // Aqui você pode adicionar a lógica para enviar o e-mail, por exemplo, para uma API.
  };

  return (
    <section className={Style.bannerGeral}>
      <div className={Style.containerImagem}>
        <img src={avatarUm} className={Style.Imagem} alt="Avatar" />
      </div>
      <div className={Style.infosAthena}>
        <h2>VENHA PARA O PORTAL ATHENA</h2>
        <div className={Style.frase}>
          <p>Eleve seu aprendizado ao</p>
          <p className={Style.max}>MÁXIMO</p>
        </div>
        <form className={Style.inputGroup} onSubmit={handleSubmit}>
        <input
          type="email"
          className={Style.input}
          id="Email"
          name="Email"
          placeholder="Insira o seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="off"
        />
        <input className={Style.buttonSubmit} value="Venha para a Athena" type="submit" />
      </form>
      </div>
    </section>
  );
}

export default Portal;
