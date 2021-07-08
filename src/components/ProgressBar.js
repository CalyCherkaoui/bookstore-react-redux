import React from 'react';

const ProgressBar = (props) => {
  const { 
    percentage
    } = props;


  return (
    <div>
      <svg
        className="svg_progress_bar"
        width={}
        height={}
      >
        <circle
          className="in_circle"
          cx={} // coordinate x axis
          cy={} // coordinate y axis
          r={} // circle radius
          stroke={} // color of the stroke
          strokeWidth={} // width of the stroke
        />
        <circle
          className="exo_circle"
          cx={} // coordinate x axis
          cy={} // coordinate y axis
          r={} // circle radius
          stroke={} // color of the stroke
          strokeWidth={} // width of the stroke
        />
      </svg>
    </div>
  )
}

export default ProgressBar;
