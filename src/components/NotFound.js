import React from 'react'
import { Link } from 'react-router-dom'
import MovieCard from './MovieCard';

function NotFound() {
  return (
    <div className="page">
      <div className="not-found">
       <h1 className="not-found__title">404</h1>
       <p className="not-found__subtitle">Страница не найдена</p>
       <Link to="/" className="not-found__button">Назад</Link>
      </div>
    </div>
  )
};

export default NotFound;