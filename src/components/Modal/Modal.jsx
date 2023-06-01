import React, { useEffect, useState } from 'react'
import cancel_button from "../../assets/cancel_button.svg";
import { format } from 'date-fns';
import api from "../../api/tasks"
import "./modal.css"
// import useDataAdd from '../../hooks/useDataAdd';
import useDataFetching from '../../hooks/useDataFetching';

const Modal = ({setModalState, fLength}) => {

    const cancel = () => {
        setModalState(prevData => !prevData)
    }

    const [addData, setAddData] = useState({
        id: fLength + 1,
        title: '',
        body: '',
        lane: 1
    });

    const handleInputChange = (event) => {

        const {name, value} = event.target;

        setAddData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {

            await api.post('/tasks', addData);

        } catch (err) {
            console.log('Error adding data')

        }

        setModalState(false);

      
    }



  return (

   <div className='Modal-transparent'>

        <form className='Modal' onSubmit={handleSubmit}>

        <img src={cancel_button} onClick={cancel} className='cancelButton' alt="cancel button" />

            <div className='Modal-title'>
                <label>Title</label>
                <input 
                type="text" 
                className="inputTitle" 
                placeholder='Enter Task Name'
                name="title"
                value={addData.title}
                onChange={handleInputChange}
                required
                />
            </div>

            <div className='Modal-body'>
                <label>Details</label>
                <textarea 
                name="body"
                value={addData.body}
                onChange={handleInputChange}
                className='txtArea' 
                placeholder='Enter Task Details'></textarea>
                required
            </div>

            <button className='Modal-button'> Create Task </button>
        </form>

   </div>
  )
}

export default Modal