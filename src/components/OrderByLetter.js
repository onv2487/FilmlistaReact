function OrderByLetter(props) {
    return (
      <button onClick={props.sortMovies} className="btn btn-primary">
        Alfabetisk ordning
      </button>
    );
  }
  
  export default OrderByLetter;
  