import { PropTypes } from 'prop-types'

const StarIcon = ( {strokeColor, fillColor, width, height, strokeWidth, onClick, onMouseEnter, onMouseLeave} ) => {
  return (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={fillColor} 
      stroke={strokeColor} 
      strokeWidth={strokeWidth}
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className="feather feather-star"
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >

      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>

    </svg>
  );
};

StarIcon.propTypes = {
  strokeColor: PropTypes.string,
  fillColor: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  strokeWidth: PropTypes.string,
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func
}

StarIcon.defaultProps = {
  strokeColor: 'currentColor',
  fillColor: 'currentColor',
  width: "24",
  height: "24",
  strokeWidth: "2"
}

export default StarIcon 
