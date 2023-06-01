import { useEffect, useState } from 'react';
import useDataFetching from '../../hooks/useDataFetching';
import Lane from '../../components/Lane/Lane';
import add from "../../assets/add_task.svg"
import "./board.css"
import Modal from '../../components/Modal/Modal';
import tasks from '../../api/tasks';


const Board = () => {

    let dataLength;

    const lanes = [
        { id: 1, title: 'To Do', bColor: "#4026B7"},
        { id: 2, title: 'In Progress', bColor: "#FFBC12" },
        { id: 3, title: 'Review', bColor: "#2FB02B" },
        { id: 4, title: 'Done', bColor: "#4026B7" },
      ];

      const [modalState, setModalState] = useState(false);

      const modalSwitch = () => {
        setModalState(prevData => !prevData);
      }

      
      
      const [loading, error, datas] = useDataFetching('/tasks');
      console.log(datas)
      
      if(datas.length){
       dataLength = datas.length;
       console.log(dataLength);
      }

  return (
    <div className='Board-wrapper'>

      {modalState && dataLength && <Modal setModalState={setModalState} />}
    
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
     />
    ))}
    </div>
  </div>
  )
}

export default Board