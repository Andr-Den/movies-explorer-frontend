import React from 'react'
import './Techs.css'

const technologies = [
'HTML',
'CSS',
'JS',
'React',
'Git',
'Express.js',
'MongoDB'
]

function Techs() {
  return (
    <div className="techs">
      <div className="techs__container">
        <h3 className="about-project__title">Технологии</h3>
        <h2 className="techs__title">7 технологий</h2>
        <p className="techs__description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <div className="techs__list">
          {technologies.map((text) => (
            <h4 className="techs__names">{text}</h4>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Techs;