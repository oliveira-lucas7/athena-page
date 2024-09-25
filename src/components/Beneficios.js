import React from 'react'
import Style from "../styles/Beneficios.module.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';
import { Diversity1 } from '@mui/icons-material';
import Diretoria from "../images/diretoria.png"
import Professor from "../images/professor.png"
import Aluno from "../images/aluno.png"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function Beneficios() {
  return (
   <Swiper className={Style.container}
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      loop
      autoplay={{ 
        delay: 3000, // Delay de 3 segundos
        disableOnInteraction: false, // Continua mesmo após interação
      }}
      // pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <div className={Style.slideContainer}>
          <div>
            <h3>Para a Diretoria</h3>
            <p>Monitore todos os processo de sua escola</p>
          </div>
          <div>
            <img src={Diretoria}/>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={Style.slideContainer}>
          <div>
            <h3>Para o Professor</h3>
            <p>Monitore todo o processo de ensino</p>
          </div>
          <div>
            <img src={Professor}/>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={Style.slideContainer}>
          <div>
            <h3>Para o Aluno</h3>
            <p>Amplie seus conhecimento com o melhor da tecnologia</p>
          </div>
          <div>
            <img src={Aluno}/>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default Beneficios