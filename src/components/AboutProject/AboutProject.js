import React from 'react'
import './AboutProject.css'

const items = [
  {
    subtitle: 'Дипломный проект включал 5 этапов',
    description: 'Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.',
  },
  {
    subtitle: 'На выполнение диплома ушло 5 недель',
    description: 'У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.',
  },
];

function AboutProject() {
  return (
    <div className="about-project">
      <h3 className="about-project__title">О проекте</h3>
      <div className="about-project__info">
        {items.map(({ subtitle, description }) => (
          <div key={subtitle}>
          <h4 className="about-project__subtitle">{subtitle}</h4>
          <p className="about-project__description">{description}</p>
          </div>
        ))}
      </div>
      <div className="about-project__graph">
        <p className="about-project__digitals about-project__digitals_backend">1 неделя</p>
        <p className="about-project__digitals about-project__digitals_frontend">4 недели</p>
        <p className="about-project__digitals">Back-end</p>
        <p className="about-project__digitals">Front-end</p>
      </div>
    </div>
  )
}

export default AboutProject;