import { useState, useEffect } from "react";
import api from "../api/tasks";


const useDataAdd = (dataSource, data) => {

    // const [data, setData] = useState({})
    // const [error, setError] = useState('');

   useEffect(() => {

    const AddTask = async() => {

        try {
             await api.post(dataSource, data);
            // setData(response.data);
            console.log('Data added successfully!!!!!!');
        } catch (err) {
            console.log('Errors while adding data');
        }

    }

    AddTask();
   }, [dataSource]);

  
}

export default useDataAdd;