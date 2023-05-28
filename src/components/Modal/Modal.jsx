import React from 'react'
import cancel_button from "../../assets/cancel_button.svg";
import "./modal.css"

const Modal = ({setModalState}) => {

    const cancel = () => {
        setModalState(prevData => !prevData)
    }
  return (

   <div className='Modal-transparent'>

        <form className='Modal'>

        <img src={cancel_button} onClick={cancel} className='cancelButton' alt="cancel button" />

            <div className='Modal-title'>
                <label>Title</label>
                <input type="text" className="inputTitle" placeholder='Enter Task Name'/>
            </div>

            <div className='Modal-body'>
                <label>Details</label>
                <textarea className='txtArea' placeholder='Enter Task Details'></textarea>
            </div>

            <button className='Modal-button'> Create Task </button>
        </form>

   </div>
  )
}

export default Modal