import { PropTypes } from 'prop-types'

const AlertIcon = ( {color, fill, width, height, strokeWidth} ) => {
  return (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={fill} 
      stroke={color} 
      strokeWidth={strokeWidth}
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className="feather feather-star"

    >
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>

    </svg>
  );
};

AlertIcon.propTypes = {
  color: PropTypes.string,
  fill: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  strokeWidth: PropTypes.string

}

AlertIcon.defaultProps = {
  color: 'currentColor',
  fill: 'none',
  width: "24",
  height: "24",
  strokeWidth: "2"
}

export default AlertIcon
