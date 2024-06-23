import Movie from './Movie';

function Movies(props) {
  function deleteMovie(title) {
    props.setMovies(props.movies.filter((movie) => movie.title !== title));
  }

  return (
    <ul className="list-group">
      {props.movies.map((movie, index) => (
        <Movie key={index} movie={movie} deleteMovie={deleteMovie} />
      ))}
    </ul>
  );
}

export default Movies;
