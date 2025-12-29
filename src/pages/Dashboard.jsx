import './Dashboard.css'

import { useState } from 'react'

import logo from '../assets/imgs/geral/logo.png'
import toggle from '../assets/imgs/header/toggle-theme.png'
import notification from '../assets/imgs/header/notification.png'
import arrowDown from '../assets/imgs/geral/arrow-down.png'

import toggleBar from '../assets/imgs/navigation-bar/toggle-bar.png'

import navigationDashboard from '../assets/imgs/navigation-bar/dashboard-nav.png'
import navigationAssistente from '../assets/imgs/navigation-bar/assistente-nav.png'
import navigationCalendario from '../assets/imgs/navigation-bar/calendario-nav.png'
import navigationRecursos from '../assets/imgs/navigation-bar/recursos-nav.png'
import navigationMural from '../assets/imgs/navigation-bar/mural-nav.png'
import navigationEntregas from '../assets/imgs/navigation-bar/entregas-nav.png'
import navigationRanking from '../assets/imgs/navigation-bar/ranking-nav.png'
import navigationChats from '../assets/imgs/navigation-bar/chats-nav.png'
import navigationConfig from '../assets/imgs/navigation-bar/configuracoes-nav.png'

function App() {

  const [menuClosed, setMenuClosed] = useState(false)

  const toggleMenu = () => {
    setMenuClosed(prev => !prev)
  }

  return (
  <div id='body'>
        <header>
          <div id="logo">
            <img src={logo} alt="" />
            <label htmlFor="">Analytica AI</label>
          </div>
          <div id="buttons">
            <div className="button">
              <img src={toggle} alt="" />
            </div>
            <div className="button">
              <img src={notification} alt="" />
            </div>
            <div id="perfil">
              <div id="icon"></div>
              <label htmlFor="">João Campos</label>
              <img src={arrowDown} alt="" />
            </div>
          </div>
        </header>
        <main>
          <div id="navigation-bar" className={`navigation-bar${menuClosed ? '-closed' : ''}`}>
            <img src={toggleBar} alt="" id='toggle-bar' onClick={toggleMenu} />
            <div id="menu">
              <div className="menu-item active">
                <img src={navigationDashboard} alt="" />
                <label htmlFor="">Dashboard</label>
              </div>
              <div className="menu-item">
                <img src={navigationAssistente} alt="" />
                <label htmlFor="">Assistente</label>
              </div>
              <div className="menu-item">
                <img src={navigationCalendario} alt="" />
                <label htmlFor="">Calendário</label>
              </div>

              <hr />

              <div className="menu-item">
                <img src={navigationRecursos} alt="" />
                <label htmlFor="">Recursos</label>
              </div>
              <div className="menu-item">
                <img src={navigationRanking} alt="" />
                <label htmlFor="">Ranking</label>
              </div>
              <div className="menu-item">
                <img src={navigationChats} alt="" />
                <label htmlFor="">Chats</label>
              </div>

              <div id="spacer"></div>

              <div className="menu-item">
                <img src={navigationConfig} alt="" />
                <label htmlFor="">Configurações</label>
              </div>

            </div>
          </div>
          <div id="dashboard-container">
            <div id="dashboard-content">
              <h1>Dashboard</h1>

              <div id="card1">card 1</div>
              <div id="card2">card 2</div>
            </div>
          </div>
        </main>
      </div>
  )
}

export default App
