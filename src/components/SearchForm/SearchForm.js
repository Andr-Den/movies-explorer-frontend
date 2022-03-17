import React from 'react'
import './SearchForm.css'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

import search from '../../images/search.svg'

function SearchForm() {
  return (
    <div className="search-form">
      <div className="search-form__container">
        <img src={search} alt="поиск"/>
        <form className="search-form__search">
          <input placeholder="Фильм" className="search-form__input"/>
          <button type="submit" className="search-form__button" />
        </form>
        <FilterCheckbox />
      </div>
    </div>
  )
}

export default SearchForm;