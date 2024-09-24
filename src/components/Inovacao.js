import React from 'react'
import Style from "../styles/Inovacao.module.css"

import rosto from "../images/rosto.png"
import lampada from "../images/lampada.png"
import cell from "../images/cell.png"

function Inovacao() {
  return (
    <section className={Style.inovacao}>
        <div className={Style.textoInova}>
            <p>Transforme seu aprendizado e alcance o próximo nível com inovação, excelência e</p>
            <p className={Style.atributos}>[crescimento/sucesso/conquista].</p>
        </div>
        <div>
            <div className={Style.container}>
                <div className={Style.secondary}>
                    <img src={cell} alt="celular" className={Style.img} />
                    <span className={Style.text}>Athena</span>
                    <span className={Style.textmain}>
                    Athena é um sistema de gestão escolar desenvolvido para otimizar o acompanhamento acadêmico e administrativo dentro das instituições de ensino. 
                    Ele integra diversas funcionalidades para facilitar a comunicação e a gestão entre todos os envolvidos no ambiente escolar, 
                    incluindo alunos, professores, coordenadores, e outros funcionários.
                    </span>
                </div>
            <div className={Style.secondary}>
                <img src={lampada} alt="lampada" className={Style.img} />
                <span className={Style.text}>Inovação</span>
                <span className={Style.textmain}>Athena revoluciona a gestão escolar com inovação e tecnologia de ponta. Integrando reconhecimento facial para controle de frequência, 
                    o sistema Profólio para gerenciamento eficiente de atividades e um acesso personalizado por níveis, Athena simplifica a administração escolar e 
                    promove uma experiência de aprendizado conectada e produtiva. 
                    Transforme a educação com uma plataforma que une eficiência, comunicação e inovação em um só lugar.</span>
            </div>
            <div className={Style.secondary}>
                <img src={rosto} alt="rosto" className={Style.img}/>
                <span className={Style.text}>Profólio</span>
                <span className={Style.textmain}>Profólio é uma funcionalidade dentro do Athena que atua como uma plataforma de gerenciamento de atividades escolares. 
                    Inspirado em sistemas como o Google Classroom, o Profólio permite aos professores postar atividades, monitorar o progresso dos alunos e fornecer feedback especializado. 
                    Ele possibilita a organização eficiente das tarefas e o acompanhamento detalhado do desempenho dos alunos.</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Inovacao