// Write your code here

import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgColor = isDarkTheme ? 'bg-black' : 'bg-white'

      const htext = isDarkTheme ? 'htext-white' : 'htext-black'

      const ptext = isDarkTheme ? 'ptext-white' : 'ptext-black'

      const notFoundImg =
        'https://assets.ccbp.in/frontend/react-js/not-found-img.png'

      return (
        <div className={`notfound-card ${bgColor}`}>
          <Navbar />
          <div className="image-card">
            <img className="image" src={notFoundImg} alt="not found" />
            <h1 className={htext}>Lost Your Way?</h1>
            <p className={ptext}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
