import React from 'react';
import "./lane.css";
import Task from '../Task/Task';


const Lane = ({title, count, tBackground, loading, error, tasks}) => {
  return (
    <div className='Lane-wrapper'>
        <div className='Lane-title' style={{backgroundColor: tBackground}}>
          <span className='title'>{title}</span>
          <span className="count">{count}</span>
        </div>

        {loading || error ? (
          <span>{error || 'Loading...'}</span>
        ) : (
          tasks.map((task) => (
            <Task
              key={task.id}
              id={task.id}
              title={task.title}
              body={task.body}
              />
          ))
        )}
    </div>
  )
}

export default Lane