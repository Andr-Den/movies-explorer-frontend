import React from 'react'
import './MovieCard.css'

function MovieCard({name, duration, save, image}) {
  return (
    <li className="movie-card">
      <div className="movie-card__header">
        <div>
          <h5 className="movie-card__name">{name}</h5>
          <span className="movie-card__duration">{duration}</span>
        </div>
        <button alt="иконка сохранения" className={`movie-card__icon ${save} `}/>
      </div>
      <img src={image} alt="кадр" className="movie-card__film-image"/>
    </li>
)}

export default MovieCard;
