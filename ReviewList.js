import React, { useState } from 'react';
import Review from './Review';
import ReviewForm from './ReviewForm';

const ReviewList = (props) => {
  console.log(props);
  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);
  const [body, setBody] = useState('');

  //submit Review
  const submitReview = (review) => {
    const newReview = { ...review };
  };

  let movieReviews = props.movies.reviews;
  let reviews = movieReviews.map((review) => (
    <Review {...review} key={review.name} reviewFields={props} />
  ));

  return <div>{reviews}</div>;
};
export default ReviewList;
