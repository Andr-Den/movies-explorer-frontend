import React from 'react'
import './MoviesCardList.css'
import MovieCard from '../MovieCard/MovieCard';

function MoviesCardList({ films, class_height, onClick, addCards }) {
  return (
    <>
        <ul className={`movies-card-list ${class_height}`}>
          {films.map((film) => (
            <MovieCard film={film}/>
          ))}
        </ul>
        <button className="movies-card-list__more-button" onClick={onClick}>Ещё</button>
        <h2>{addCards}</h2>
      </>
)}

export default MoviesCardList;