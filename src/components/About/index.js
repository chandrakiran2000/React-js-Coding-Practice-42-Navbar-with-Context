// Write your code here

// Write your code here

import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgColor = isDarkTheme ? 'bg-black' : 'bg-white'

      const aboutImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      return (
        <div className={`about-card ${bgColor}`}>
          <Navbar />
          <div className="image-card">
            <img className="image-link " src={aboutImg} alt="about" />
            <h1 className={`text ${bgColor}`}>theme</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
