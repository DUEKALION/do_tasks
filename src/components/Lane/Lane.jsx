import React from 'react';
import "./lane.css";


const Lane = ({title, count, tBackground}) => {
  return (
    <div className='Lane-wrapper'>
        <div className='Lane-title' style={{backgroundColor: tBackground}}><span className='title'>{title}</span><span className="count">{count}</span></div>
    </div>
  )
}

export default Lane