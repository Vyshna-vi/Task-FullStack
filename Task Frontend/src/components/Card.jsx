import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./card.css"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import { deleteTask, editTask } from '../API/api';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';



function Card({ cards }) {

    const [alltask, setalltask] = useState()
    const navigate = useNavigate()


    async function deletTask() {
        const deletetask = await axios.delete(deleteTask + cards._id)
        window.location.replace("http://localhost:5173/alltask")
        console.log(deletetask);
    }

    async function ediTask() {
        navigate("/edittask", { state: cards })
    }


    return (
        <div className='card'>
            <h5 className='name'>Task Name :</h5>
            <p className='para1'>{cards.task_name}</p>
            <h5 className='descrip'>Details :</h5>
            <p className='para2'>{cards.task_descrip}</p>
            <h5 className='complete'>{cards.completed ? <DoneIcon className='done' /> : <CloseIcon className='close' />}</h5>
            <div className='icons'>
                <EditIcon className='icon' onClick={ediTask} />
                <DeleteIcon className='icon' onClick={deletTask} />
                <UpdateIcon className='icon' />
            </div>
        </div>
    )
}

export default Card