import React, { useState } from 'react';

function NewMovie(props) {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState(0);

  function handleSubmit(event) {
    event.preventDefault();
    if (title && rating) {
      props.addMovie({ title: title, rating: rating });
      setTitle('');
      setRating(0);
    } else {
      alert('Ange en titel och betyg.');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <fieldset>
        <legend>Lägg till en film</legend>
        <div className="mb-3">
          <label htmlFor="title-field" className="form-label">Titel:</label>
          <input
            type="text"
            id="title-field"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="rating-field" className="form-label">Betyg:</label>
          <select
            id="rating-field"
            className="form-control"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
          >
            <option value="0">Välj betyg här...</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <button type="submit" className="btn btn-success mt-3">
          Spara film
        </button>
      </fieldset>
    </form>
  );
}

export default NewMovie;
