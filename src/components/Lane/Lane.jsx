import React from 'react';
import "./lane.css";
import Task from '../Task/Task';


const Lane = ({title, coount, tBackground, loading, error, tasks, editModal, sendIdToParent}) => {
console.log("Original colors are:", tBackground);
  const handleEditMv = ({id}) => {
    onSendData(id);
  }

  const cnt = tasks.length;
  return (
    <div className='Lane-wrapper'>
        <div className='Lane-title' style={{backgroundColor: tBackground}}>
          <span className='title'>{title}</span>
          <span className="count" style={{ color: tBackground}}>{cnt}</span>
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
              genColor={tBackground}
              editModal={editModal}
              onClick={handleEditMv}
              sendIdToParent={sendIdToParent}
              />
          ))
        )}
    </div>
  )
}

export default Lane