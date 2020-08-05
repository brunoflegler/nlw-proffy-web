import React from 'react';

import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'

import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

import './index.css'

function Landing () {
  return <div id="page-landing">
    <div id="page-landing-content" className="container">
      <div className="logo-container">
        <img src={logoImg} alt="Proffy" />
        <h2>Sua plataforma de estudos online.</h2>
      </div>

      <img
        className="hero-image"
        alt="Plataforma de estudos."
        src={landingImg}
      />

      <div className="buttons-container">
        <a href="#/" className="study">
          <img alt="Estudar" src={studyIcon} />
          Estudar
        </a>
        <a href="#/" className="give-classes">
          <img alt="Estudar" src={giveClassesIcon} />
          Dar aulas
        </a>
      </div>

      <span className="total-connections">
        Total de 200 conexões já realizadas
        <img src={purpleHeartIcon}  alt="Coração roxo"/>
      </span>
    </div>
  </div>
}

export default Landing;
