import React from 'react'
import './FilterCheckbox.css'

function FilterCheckbox({onClick, page}) {
  return (
    <div className="filter">
      <label className="filter__label">
        <input type="checkbox" className="filter__checkbox filter__checkbox_visible" onClick={onClick} defaultChecked={page ? '' : JSON.parse(localStorage.getItem('checkbox'))}/>
        <span className="filter__checkbox_visible"></span>
      </label>
      <span>Короткометражки</span>
    </div>
  )
}

export default FilterCheckbox;
