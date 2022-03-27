import React from 'react'
import './Portfolio.css'
import arrow from '../../images/arrow.svg'

const links = [
  {
    link: 'https://github.com/Andr-Den/russian-travel',
    text: 'Статичный сайт'},
  {
    link: 'https://andr-den.github.io/mesto/index.html',
    text: 'Адаптивный сайт'},
  {
    link: 'https://andr-den.github.io/mesto/index.html',
    text: 'Одностраничное приложение'}
  ]

function Portfolio() {
  return (
    <div className="portfolio">
      <h4 className="portfolio__title">Портфолио</h4>
      <ul className="portfolio__list">
        {links.map(({link, text}) => (
          <li className="portfolio__links" key={text}>
            <a href={link} target="_blank" rel="noreferrer" className="portfolio__link"><span>{text}</span></a>
            <img src={arrow} alt=""/>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Portfolio;