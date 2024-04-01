
import './star-rating.css'
import { useMemo, useState } from 'react'
import StarIcon from '../../icons/Star';
import propTypes from 'prop-types'


const StarRating = ( {count, rate, color, defaultColor, onRating } ) => {


  const[hoverRate, setHoverRate] = useState(0);

  const getColor = (index) => {
    if(hoverRate >= index ) {
      return color;
    }
    if(!hoverRate && rate >= index) {
      return color; 
    }
    return defaultColor; 
  }

  const starsRating = useMemo(() => {
          return Array(count).fill(0)
          .map((_, i) =>  i + 1)
          .map((idx) => {
            return (
              <span key={idx}>
                <StarIcon
                  fillColor={getColor(idx)}
                  strokeColor={getColor(idx)}
                  width="24"
                  height="24"
                  strokeWidth="2"
                  onClick={() => onRating(idx)}
                  onMouseEnter={() => setHoverRate(idx)}
                  onMouseLeave={() => setHoverRate(0)}
                />
              </span>
            )
          });
    
  },[count, rate, onRating, hoverRate]);
    
  return (
      <div className="rating-group justify-content-center">
        {starsRating} 
      </div>
    );
};

StarRating.propTypes = {
  count: propTypes.number,
  rate: propTypes.number,
  color: propTypes.string,
  defaultColor: propTypes.string,
  onRating: propTypes.func,
}

StarRating.defaultProps = {
  count: 5, 
  rate: 0,
  color: "#ffdd00",
  defaultColor: "#dcdcdc",
  onRating: () => {},
}

export default StarRating
