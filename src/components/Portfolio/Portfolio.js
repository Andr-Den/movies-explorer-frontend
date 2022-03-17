import React from 'react'
import './Portfolio.css'
import arrow from '../../images/arrow.svg'

const links = [
  'Статичный сайт',
  'Адаптивный сайт',
  'Одностраничное приложение'
  ]

function Portfolio() {
  return (
    <div className="portfolio">
      <h4 className="portfolio__title">Портфолио</h4>
      <ul className="portfolio__links">
        {links.map((text) => (
          <li className="portfolio__link">
            <span>{text}</span>
            <img src={arrow} alt=""/>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Portfolio;