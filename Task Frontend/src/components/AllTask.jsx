import './alltask.css'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import { getAllTask } from '../API/api'
import Card from './Card'
import { useNavigate } from 'react-router-dom';



function AllTask() {

    const [alltasks, setalltask] = useState()
    const navigate = useNavigate()

    async function allTask() {
        const tasks = await axios.get(getAllTask)
        setalltask(tasks.data.allTask)
        console.log(tasks.data.allTask)
    }
    useEffect(() => { allTask() }, [])

    function addTask() {
        navigate("/")
    }


    return (
        <div className='alltask'>
            <div className='top'>
                <h1 className='h1'>Tasks</h1>
                <div className='topb'>
                    <Button onClick={addTask}>Add Task</Button>
                </div>
            </div>
            <div className='alltasks'>
                {alltasks && alltasks.map((m) => {
                    return (<Card cards={m} />)
                })}
            </div>
        </div>
    )
}

export default AllTask