import React from 'react';
import Movie from './Movie';
import ReviewForm from './ReviewForm';

const MovieList = (props) => {
  console.log(props);
  const movieData = props.movies.map((movie) => (
    <div>
      <Movie {...movie} key={movie.id} onAdd={props.onSubmit} />
      <ReviewForm movies={props} onSubmit={props.submitReview} />
    </div>
  ));

  return <div>{movieData}</div>;
};

export default MovieList;
