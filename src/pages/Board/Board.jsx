import { useEffect, useState } from 'react';
import useDataFetching from '../../hooks/useDataFetching';
import Lane from '../../components/Lane/Lane';
import add from "../../assets/add_task.svg"
import "./board.css"
import Modal from '../../components/Modal/Modal';
import ModalEdit from '../../components/ModalEdit/ModalEdit';
import tasks from '../../api/tasks';


const Board = () => {

    let dataLength;

    const lanes = [
        { id: 1, title: 'To Do', bColor: "#4026B7"},
        { id: 2, title: 'In Progress', bColor: "#0074D9" },
        { id: 3, title: 'Review', bColor: "#FFA500" },
        { id: 4, title: 'Done', bColor: "#2FB02B" },
      ];

     

      const [modalState, setModalState] = useState(false);
      const [editModalState, setEditModalState] = useState(false);

      const [taskId, setTaskId] = useState('');

      console.log(taskId);
      const handleIdRetrieval = (data) => {
        setTaskId(data)
      }

      const modalSwitch = () => {
        setModalState(prevData => !prevData);
      }

      const handlEditModal = () => {
        console.log(editModalState);
        setEditModalState(prevState => !prevState);
      }
      
      
      const [loading, error, datas] = useDataFetching('/tasks');
      
      if(datas.length){
       dataLength = datas.length;
      }

  return (
    <div className='Board-wrapper'>

      {modalState && dataLength && <Modal setModalState={setModalState} />}
      
      
      {editModalState ? <ModalEdit setEditModalState={setEditModalState} taskId={taskId} /> : ""}

    <div className='Board-top'>
    <h2 className="Board-title">Tasks</h2>

    <div className='add_task' onClick={modalSwitch}>
      <span>Add new task </span> <img src={add} alt="add a task" />
    </div>

    </div>

    <div className='Board-lane'>
    {lanes.map((lane) => (
      <Lane
       key={lane.id} 
       title={lane.title} 
       tBackground={lane.bColor}
       loading={loading}
       error={error}
       tasks={Array.isArray(datas) && datas.filter((task) => task.lane === lane.id)}
       setEditModalState={setEditModalState}
       editModal={handlEditModal}    
       sendIdToParent={handleIdRetrieval}
     />
    ))}
    </div>
  </div>
  )
}

export default Board