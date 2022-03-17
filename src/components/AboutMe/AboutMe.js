import React from 'react'
import './AboutMe.css'

import student from '../../images/Student.png'

function AboutMe() {
  return (
    <div className="about-me">
      <h3 className="about-project__title">Студент</h3>
      <div className="about-me__container">
        <div>
        <h2 className="about-me__title">Виталий</h2>
        <p className="about-me__subtitle">Фронтенд-разработчик, 30 лет</p>
        <p className="about-me__description">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
        <div className="about-me__links">
          <p>Facebook</p>
          <p>Github</p>
        </div>
        </div>
        <img src={student} alt="фотография студента" className="about-me__image"/>
      </div>
    </div>
  )
}

export default AboutMe;