import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = (props) => {
  console.log(props);
  const [hover, setHover] = useState(null);

  return (
    <div className='text-center'>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label>
            <input type='radio' name='rating' value={ratingValue} />
            <FaStar
              className='star'
              color={ratingValue <= hover ? 'yellow' : 'gray'}
              size={50}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
