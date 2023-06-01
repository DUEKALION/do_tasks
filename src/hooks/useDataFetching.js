import { useState, useEffect } from "react";
import api from "../api/tasks"
import React from 'react'

const useDataFetching = (dataSource) => {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState('');

        useEffect(() => {

            const fetchData = async() => {

                try {
                    const response = await api.get(dataSource);
                    
                    if (response && response.data) {
                        // console.log(response.data)
                        setData(response.data);
                        setLoading(false);
                    }
        
                } catch (err) {
                    setLoading(false);
                    setError(err.messsage);
                }
            }
            fetchData();
    
        }, [dataSource])
        
        // postData();


    return [loading, error, data];
   
}

export default useDataFetching;