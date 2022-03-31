import React from 'react'
import './Footer.css'

const links = [
  {
    url: 'https://practicum.yandex.ru/',
    text: 'Яндекс.Практикум'
  },
  {
    url: 'https://github.com/',
    text: 'GitHub'
  },
  {
    url: 'https://facebook.com/',
    text: 'Facebook'
  }
]

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__nav">
        <span className="footer__copyright">&copy; 2022</span>
        <ul className="footer__links">
          {links.map(({url, text}) => (
            <li key={text}><a href={url} className="footer__link" target="_blank" rel="noreferrer">{text}</a></li>
          ))}
        </ul>
    </div>
  </footer>
  )
}

export default Footer;