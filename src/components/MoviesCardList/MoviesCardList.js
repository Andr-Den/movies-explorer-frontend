import React from 'react'
import './MoviesCardList.css'
import MovieCard from '../MovieCard/MovieCard';

function MoviesCardList({ films, class_height, onClick, class_active }) {
  const [isLiked, setIsLiked] = React.useState(false);
  const cardLikeButtonClassName =  (
    `${isLiked ? 'movie-card__icon_active' : ''}`
  );
  return (
    <>
        <ul className={`movies-card-list ${class_height}`}>
          {films.map((film) => (
            <MovieCard film={film} class_active={cardLikeButtonClassName}/>
          ))}
        </ul>
        {films.length >= 12 ? <button className="movies-card-list__more-button" onClick={onClick}>Ещё</button> : ''}
      </>
)}

export default MoviesCardList;