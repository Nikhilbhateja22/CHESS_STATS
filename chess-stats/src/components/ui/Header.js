import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChess } from '@fortawesome/free-solid-svg-icons'

const Header = () => (
  <div className="header">
    <h1>
      <FontAwesomeIcon icon={faChess} /> Chess Stats
    </h1>
    <a
      href="https://github.com/Nikhilbhateja22/chess-stats"
      target="_blank"
      rel="noopener noreferrer"
      className="developer-plug"
    >
      Developed by Nikhil_Bhateja
    </a>
  </div>
)

export default Header
