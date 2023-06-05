import React, {useEffect, useState} from 'react'
import api from "../../api/tasks"
import tasks from "../../api/tasks"
import "./modaledit.css"
import cancel_button from "../../assets/cancel_button.svg"

const ModalEdit = ({setEditModalState, taskId}) => {

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await api.get('/tasks/' + taskId);
                setData(response.data);
            } catch (err) {
                console.error('Error fetching data', err);
            }
        };
        fetchData();
    }, []);

    const cancel = () => {

        setEditModalState(prevState => !prevState);
    }
   

    const [data, setData] = useState({});

    const handleInputChange = (event) => {

        const {name, value} = event.target;

        setData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();


        try {
            await api.put('/tasks/' + taskId, data);
           } catch (err) {
             console.error('Error updating data', err);
           }
           window.location.reload();
        setEditModalState(false);
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
            // placeholder='Enter Task Name'
            name="title"
            value={data.title || ''}
            onChange={handleInputChange}
            required
            />
        </div>

        <div className='Modal-body'>
            <label>Details</label>
            <textarea 
            name="body"
            value={data.body}
            onChange={handleInputChange}
            className='txtArea' 
            // placeholder='Enter Task Details'
            required
            ></textarea>
        </div>

        <button className='Modal-button'> Edit Task </button>
    </form>

</div>

    
  )
}


export default ModalEdit