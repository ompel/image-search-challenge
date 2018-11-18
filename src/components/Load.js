import React from 'react';
import './Load.css';

const Load = (props) => {
  return(
    <div className="d-flex h-100 w-100 justify-content-center align-items-center align-content-center">
      <div>
        <div className="loader">{props.loadingText}</div>
        <h2 className="text-center">{props.loadingText}</h2>
      </div>
    </div>
  )
}


export default Load;