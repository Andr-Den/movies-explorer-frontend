import React from 'react'
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
        <p>&copy; 2022</p>
        <ul className="footer__links">
          {links.map(({url, text}) => (
            <li><a href={url} className="footer__link" target="_blank">{text}</a></li>
          ))}
        </ul>
    </div>
  </footer>
  )
}

export default Footer;