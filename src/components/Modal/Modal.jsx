import React from 'react'
import cancel_button from "../../assets/cancel_button.svg";
import "./modal.css"

const Modal = ({setModalState}) => {

    const cancel = () => {
        setModalState(prevData => !prevData)
    }
  return (

   <div className='Modal-transparent'>

        <div className='Modal'>

        <img src={cancel_button} onClick={cancel} className='cancelButton' alt="cancel button" />

        <form className="Modal-form">

            <div className='Modal-title'>
                <label>Title</label>
                <input type="text" className="inputTitle" placeholder='Enter Task Name'/>
            </div>

            <div className='Modal-body'>
                <label>Details</label>
                <input type="text" className='inputBody' placeholder='Enter Task Details'/>
            </div>

            <button className='Modal-button'> Create Task </button>
        </form>
        </div>

   </div>
  )
}

export default Modal