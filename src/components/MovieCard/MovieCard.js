import React from 'react'
import './MovieCard.css'
import * as MainApi from '../../utils/MainApi';

function MovieCard({data, page, onMovieDelete, getId, setSavedFilms, savedFilms}) {
  const [saved, setSaved] = React.useState(savedFilms.map((savedFilm) => savedFilm.movieId).includes(data.id));

  function handleDeleteClick() {
    onMovieDelete(data)
  };

  function handleMovieSave(data) {
    if (!saved) {
      const token = localStorage.getItem('token');
      MainApi.saveMovie(data, token).then((data) =>  setSavedFilms([...savedFilms, data.data]))
     
      setSaved(true)
    } else {
      setSaved(false)
      const token = localStorage.getItem('token');
      MainApi.deleteMovie(getId, token)

      setSavedFilms(savedFilms.filter((film) => film !== data))

    }
  }

  return (
    <li className="movie-card">
      <div className="movie-card__header">
        <div>
          <h5 className="movie-card__name">{data.nameRU}</h5>
          <span className="movie-card__duration">{`${data.duration} мин.`}</span>
        </div>
        {page ? <button className={`movie-card__icon movie-card__icon_delete`} onClick={handleDeleteClick}/> :
          <button className={`movie-card__icon ${saved ? 'movie-card__icon_active' : ''}`} onClick={() => handleMovieSave(data)}/>
        }
      </div>
      <a href={data.trailerLink} target="_blank" rel="noreferrer"><img src={`https://api.nomoreparties.co/${data.image.url ?? data.image}`} alt="кадр" className="movie-card__film-image"/></a>
    </li>
)}

export default MovieCard;
