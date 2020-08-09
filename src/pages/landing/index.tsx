import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useObserver } from 'mobx-react-lite'
import 'mobx-react-lite/batchingForReactDom'
import { useStores } from '../../models/root-store/root-store-context'

import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

import './styles.css'

export const Landing: React.FC = () => {
  const { proffy } = useStores()

  useEffect(() => {
    proffy.totalConnections()
    // eslint-disable-next-line
    }, [])

  return useObserver(() => (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>
        <img
          src={landingImg}
          alt="Plataforma de estudos."
          className="hero-image"
        />
        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </Link>
          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Dar Aulas" />
            Dar Aulas
          </Link>
        </div>
        <span className="total-connections">
          Total de {proffy.connection.total} conexoes ja realizadas
          <img src={purpleHeartIcon} alt="Coracao roxo." />
        </span>
      </div>
    </div>
  ))
}
