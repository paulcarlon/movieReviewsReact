import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Stars from './Stars';

const ReviewForm = (props) => {
  console.log(props);
  const [name, setName] = useState('');
  const [rating, setRating] = useState(null);
  const [body, setBody] = useState('');

  const onChange = (e) => console.log(e);
  const onSubmit = (e) => {
    e.preventDefault();

    setName('');
    setRating(null);
    setBody('');
  };
  return (
    <div>
      <h3>Leave your Review!</h3>
      <Form onSubmit={onSubmit}>
        <Form.Group>
          <Stars onClick={onChange} />
        </Form.Group>
        <Form.Group controlId='reviewerName'>
          <Form.Label>Name:&nbsp;</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter your name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId='reviewBody'>
          <Form.Label>Review:&nbsp;</Form.Label>
          <Form.Control
            as='textarea'
            rows={5}
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ReviewForm;
