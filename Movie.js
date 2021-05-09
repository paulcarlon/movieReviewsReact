import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';
import { Card } from 'react-bootstrap';

const Movie = (props) => {
  console.log(props);
  return (
    <div>
      <Card>
        <Card.Title className='text-center mt-3 text-info text-bold'>
          {props.title}
          <br />
          {props.year}
          <br />
          {props.genre}
          <div className='mt-3'>
            <h1 className='h1 text-warning'>Reviews</h1>
            <ReviewList movies={props} />
          </div>
        </Card.Title>
        <Card.Body className='text-center h4 text-dark'></Card.Body>
      </Card>
    </div>
  );
};

export default Movie;
