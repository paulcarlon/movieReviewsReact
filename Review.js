import { Card } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';

const Review = (props) => {
  return (
    <div>
      <Card>
        <Card.Title className='text-center mt-3 text-info'>
          {props.name}
          <br />
          {props.rating} <FaStar color='yellow' />
        </Card.Title>
        <Card.Body className='text-center h4 text-dark'>{props.body}</Card.Body>
      </Card>
    </div>
  );
};

export default Review;
