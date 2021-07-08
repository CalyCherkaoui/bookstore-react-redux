import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

const ProgressBar = (props) => {
  const [offset, setOffset] = useState(0); //
  // eslint-disable-next-line max-len
  const circleRef = useRef(null); // produces a reference to the second circle, adds a CSS transition property to the circle
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

  // calculate the position of the progress
  // After calculating the progressOffset, the setOffset method is used to update the offset
  useEffect(() => {
    const progressOffset = ((100 - percentage) / 100) * circumference;
    setOffset(progressOffset);
    circleRef.current.style = 'transition: 1500ms ease-in-out;';
  }, [offset, setOffset, circumference, percentage]); // These properties are dependencies
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
          // eslint-disable-next-line max-len
          strokeDasharray={circumference} // To control the dash's length and the spacing between each dash
        />
        <circle
          className="exo_circle"
          ref={circleRef}
          cx={center}
          cy={center}
          r={radius}
          stroke={exoCircleStroke}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
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
