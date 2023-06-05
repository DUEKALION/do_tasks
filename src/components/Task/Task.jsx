import React, {useState} from 'react';
import calendar_icon from "../../assets/calendar_icon.svg";
import styled from 'styled-components';
import ModalEdit from "../ModalEdit/ModalEdit";
import threeDots from "../../assets/threeDots.svg"
import edit_button from "../../assets/edit_button.svg";
import delete_button from "../../assets/delete_button.svg";
import api from "../../api/tasks"
import "./task.css";

const Task = ({id,title, body, genColor, editModal, sendIdToParent}) => {
  // const TaskStyles = {
  //   '::before': {
  //       backgroundColor: `${rodColor}`
  //   }
  // }

  console.log("These are my colors", `${genColor}`);
  const [dotState, setDotState] = useState(false);

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
      background-color: ${props => props.genColor} !important;
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

  const handleSendId = () => {

    sendIdToParent(id);
  }

  const handleDotState = () => {
    setDotState(prevData => !prevData);
  }

  const  falseDotState = () => {
    setDotState(false);
  }

  const handleDeleteTask = async () => {

    try {
      await api.delete('/tasks/' + id);
    } catch (err) {
      console.log('Encountered error on delete', err);
    }
  }
  return (
    <ComponentTask genColor={genColor} onClick={handleDotState} >

      {/* <div className='Task'> */}
      <div>
        
       {dotState ? ( <div className="threedots-conts">
          <img src={edit_button} className='butt_edit' onClick={() => {editModal(); handleSendId(); }}/>
          <img src={delete_button} className='del_edit' onClick={handleDeleteTask}/>
        </div>) : <img src={threeDots} onClick={handleDotState} className="dots" style={{ color: genColor}} alt="edit and delete hidden button" /> }
      </div>

     

      <p className="Task-title">{title}</p>
      <p className="Task-body">{body}</p>

      <div className='calend' style={{ background: genColor}}>
          <img src={calendar_icon} className='calendarIcon' alt="CalendarIcon"/>
          <span></span>
      </div>

      {/* </div> */}

    </ComponentTask>
  )
}

export default Task