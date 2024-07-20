// Write your code here

import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const bgColor = isDarkTheme ? 'navbar-black' : 'navbar-white'

      const logoImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const lightDartBtnImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const onClickBtn = () => {
        // console.log('clicked')
        toggleTheme()
      }

      return (
        <div className={`navbar-mian-card ${bgColor}`}>
          <div className="navbar-card">
            <img className="logo-img" src={logoImg} alt="website logo" />

            <ul className="home-about-card">
              <Link to="/" className="links">
                <li className="home-text">
                  <h1 className={bgColor}>Home</h1>
                </li>
              </Link>
              <Link to="/about" className="links">
                <li className="about-text">
                  <h1 className={bgColor}>About</h1>
                </li>
              </Link>
            </ul>

            <button
              onClick={onClickBtn}
              className="light-dark-btn"
              label="theme"
              type="button"
              data-testid="theme"
            >
              <img
                className="light-dark-img"
                src={lightDartBtnImg}
                alt="theme"
              />
            </button>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
