import React from 'react';
import PropTypes from 'prop-types';

const ProgressBar = (props) => {
  const {
    size, // width and height of the square SVG
    percentage, // progress value
    strokeWidth, // the width of the stroke
    innCircleStroke, // Stroke color of the inner circle
    exoCircleStroke, // Stroke color of the extern circle
  } = props;

  const center = size / 2;
  const radius = (size - strokeWidth) / 2; // rdius of the path to fit perfectly inside the viewBox
  const circumference = 2 * Math.PI * radius;

  return (
    <div>
      <svg
        className="svg_progress_bar"
        width={size}
        height={size}
      >
        <circle // the inner circle
          className="in_circle"
          cx={center} // coordinate x axis
          cy={center} // coordinate y axis
          r={radius} // circle radius
          stroke={innCircleStroke} // color of the stroke
          strokeWidth={strokeWidth} // width of the stroke
        />
        <circle
          className="exo_circle" // Placed on the top to display the progress bar according to the percentage
          cx={center} // coordinate x axis
          cy={center} // coordinate y axis
          r={radius} // circle radius
          stroke={exoCircleStroke} // color of the stroke
          strokeWidth={strokeWidth} // width of the stroke
        />
      </svg>
    </div>
  );
};

ProgressBar.propTypes = {
  size: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
  strokeWidth: PropTypes.number.isRequired,
  innCircleStroke: PropTypes.string.isRequired,
  exoCircleStroke: PropTypes.string.isRequired,
};

export default ProgressBar;
