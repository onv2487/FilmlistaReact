function OrderByGrade(props) {
    return (
      <button onClick={props.sortMovies} className="btn btn-primary">
        Betygsordning
      </button>
    );
  }
  
  export default OrderByGrade;
  