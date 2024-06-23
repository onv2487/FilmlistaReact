import deleteImg from '../images/delete.png';
import starImg from '../images/star.png';

function Movie(props) {
  const { title, rating } = props.movie;

  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<img key={i} src={starImg} alt="star" className="star-icon" />);
  }
  for (let i = rating; i < 5; i++) {
    stars.push(<img key={i} src={starImg} alt="star" className="star-icon faded" />);
  }

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center movie-item">
      <div>
        {title}
        {stars}
      </div>
      <button onClick={() => props.deleteMovie(title)} className="btn btn-danger btn-sm">
        <img src={deleteImg} alt="delete" className="delete-icon" />
      </button>
    </li>
  );
}

export default Movie;
