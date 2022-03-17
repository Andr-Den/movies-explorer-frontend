import React from 'react'
import './MoviesCardList.css'
import MovieCard from '../MovieCard/MovieCard';

function MoviesCardList({ films, children }) {
  return (
    <>
      <ul className="movies-card-list">
        {films.map(({save, image}) => (
          <MovieCard name='33 слова о дизайне' duration='1ч 47м' save={save} image={image}/>
        ))}
      </ul>
      {children}
    </>
)}

export default MoviesCardList;