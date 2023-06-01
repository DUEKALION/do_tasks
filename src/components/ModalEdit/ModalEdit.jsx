import React, {useState} from 'react'
import "./modaledit.css"

const ModalEdit = ({setEditPopupState}) => {

    const cancel = () => {
        setEditPopupState(prevData => !prevData)
    }

    const [editData, setEditData] = useState({
        id: '',
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

       

        setModalState(false);

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
}

export default ModalEdit