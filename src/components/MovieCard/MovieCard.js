import React from 'react'
import './MovieCard.css'

function MovieCard({film, class_active, onClick}) {
  return (
    <li className="movie-card">
      <div className="movie-card__header">
        <div>
          <h5 className="movie-card__name">{film.nameRU}</h5>
          <span className="movie-card__duration">{`${film.duration} мин.`}</span>
        </div>
        <button className={`movie-card__icon ${class_active}`} onClick={onClick}/>
      </div>
      <a href={film.trailerLink} target="_blank" rel="noreferrer"><img src={`https://api.nomoreparties.co/${film.image.url}`} alt="кадр" className="movie-card__film-image"/></a>
    </li>
)}

export default MovieCard;
