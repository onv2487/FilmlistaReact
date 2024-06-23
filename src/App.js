import React, { useState } from 'react';
import NewMovie from './components/NewMovie';
import Movies from './components/Movies';
import OrderByLetter from './components/OrderByLetter';
import OrderByGrade from './components/OrderByGrade';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);

  function addMovie(movie) {
    setMovies([...movies, movie]);
  }

  function sortMoviesByTitle() {
    const sortedMovies = [...movies].sort((a, b) => a.title.localeCompare(b.title));
    setMovies(sortedMovies);
  }

  function sortMoviesByRating() {
    const sortedMovies = [...movies].sort((a, b) => b.rating - a.rating);
    setMovies(sortedMovies);
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Min filmlista</h1>
      <NewMovie addMovie={addMovie} />
      <Movies movies={movies} setMovies={setMovies} />
      <div className="d-flex justify-content-between mt-3">
        <OrderByLetter sortMovies={sortMoviesByTitle} />
        <OrderByGrade sortMovies={sortMoviesByRating} />
      </div>
    </div>
  );
}

export default App;
