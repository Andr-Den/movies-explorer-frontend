import React from 'react'
import './AboutMe.css'

import student from '../../images/Student.jpeg'

function AboutMe() {
  return (
    <div className="about-me">
      <h3 className="about-project__title">Студент</h3>
      <div className="about-me__container">
        <div>
          <h2 className="about-me__title">Андрей</h2>
          <p className="about-me__subtitle">Фронтенд-разработчик, 28 лет</p>
          <p className="about-me__description">Я родился и живу в Екатеринбурге. Закончил Уральский Федеральный университет имени первого Президента Росиии Б.Н.Ельцина, кафедру Электропривода промышленных установок и технологических комплексов. Работал по специальности 6 лет, после чего решил сменить профессию и пошкл на курсы Яндекс.Практикума по веб-разработке.</p>
          <div className="about-me__links">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="about-me__link">Facebook</a>
            <a href="https://github.com/Andr-Den" target="_blank" rel="noreferrer" className="about-me__link">Github</a>
          </div>
        </div>
        <img src={student} alt="фотография студента" className="about-me__image"/>
      </div>
    </div>
  )
}

export default AboutMe;