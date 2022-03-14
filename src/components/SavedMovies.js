import React from 'react'
import Header from './Header'
import Footer from './Footer';
import SearchForm from './SearchForm';

function SavedMovies() {
  return (
      <div className="profile">
        <Header />
        <SearchForm />
        <Footer />
      </div>
  )
};

export default SavedMovies;