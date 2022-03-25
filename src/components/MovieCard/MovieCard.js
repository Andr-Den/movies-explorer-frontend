import React from 'react'
import './MovieCard.css'
import * as MainApi from '../../utils/MainApi';

function MovieCard({data, page, onMovieDelete, isSaved = false, getId}) {
  const [save, setSave] = React.useState(isSaved);
  const cardLikeButtonClassName =  (
    `${save ? 'movie-card__icon_active' : ''}`
  );
  function handleDeleteClick() {
    onMovieDelete(data)
  };

  function handleMovieSave(data) {
    if (!save) {
      const token = localStorage.getItem('token');
      MainApi.saveMovie(data, token)
      .then((data) =>{
      })
      setSave(true)
    } else {
      setSave(false)
      const token = localStorage.getItem('token');
      MainApi.deleteMovie(getId, token)
      .then(() => {
      })
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
          <button className={`movie-card__icon ${cardLikeButtonClassName}`} onClick={() => handleMovieSave(data)}/>
        }
      </div>
      <a href={data.trailerLink} target="_blank" rel="noreferrer"><img src={`https://api.nomoreparties.co/${data.image.url ?? data.image}`} alt="кадр" className="movie-card__film-image"/></a>
    </li>
)}

export default MovieCard;
