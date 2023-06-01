import React, {useState} from 'react';
import calendar_icon from "../../assets/calendar_icon.svg";
import styled from 'styled-components';
import ModalEdit from "../ModalEdit/ModalEdit";
import threeDots from "../../assets/threeDots.svg"
import edit_button from "../../assets/edit_button.svg";
import delete_button from "../../assets/delete_button.svg";
import "./task.css";

const Task = ({title, body, rodColor}) => {
  // const TaskStyles = {
  //   '::before': {
  //       backgroundColor: `${rodColor}`
  //   }
  // }

  const [dotState, setDotState] = useState(false);

  const [editPopupState, setEditPopupState] = useState(false);
  console.log(editPopupState);

  const ComponentTask = styled.div`
      position: relative;
      width: 90%;
      height: 200px;
      padding: 10px 10px;
      margin: 1rem 0;
      display: flex;
      flex-direction: column;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      background-color: #FFFFFF;
    &::before {
      background-color: ${props => props.rod};
      display: block;
      content: "";
      height: 220px;
      width: 7px;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      border-radius: 10px;
    }
  `
  
  const handlEditPopup = () => {

    setEditPopupState(prevState => !prevState);
  }

  const handleDotState = () => {
    setDotState(prevData => !prevData);
  }
  return (
    <ComponentTask rod={`${rodColor}`} onClick={handleDotState}>

      {/* <div className='Task'> */}
      <div>
        
       {dotState ? ( <div className="threedots-conts">
          <img src={edit_button} className='butt_edit' onClick={handlEditPopup}/>
          <img src={delete_button} className='del_edit' />
        </div>): <img src={threeDots} onClick={handleDotState} className="dots" alt="edit and delete hidden button" /> }
      </div>

      {editPopupState ? <ModalEdit setEditPopupState={setEditPopupState} /> : ""}

      <p className="Task-title">{title}</p>
      <p className="Task-body">{body}</p>

      <div className='calend'>
          <img src={calendar_icon} className='calendarIcon' alt="CalendarIcon" />
          <span></span>
      </div>

      {/* </div> */}

    </ComponentTask>
  )
}

export default Task