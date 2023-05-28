import React from 'react';
import calendar_icon from "../../assets/calendar_icon.svg";
import "./task.css";

const Task = ({title, body}) => {

  return (
    <div className='Task'>

        <p className="Task-title">{title}</p>
        <p className="Task-body">{body}</p>

        <div className='calend'>
            <img src={calendar_icon} className='calendarIcon' alt="Calendar Icon" />
        </div>
    </div>
  )
}

export default Task