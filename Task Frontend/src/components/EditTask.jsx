import './edittask.css'
import { Button, OutlinedInput, TextareaAutosize } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { addTask, editTask } from '../API/api'

function EditTask() {

    const navigate = useNavigate()

    // const [task, setTask] = useState({})
    const [taskname, setTaskname] = useState({})
    const [description, setDesription] = useState({})
    const location = useLocation()
    useEffect(() => {
        setTaskname(location.state.task_name)
        setDesription(location.state.task_descrip)
    }, [])

    async function Submit() {

        let task = {
            task_name: taskname,
            task_descrip: description,
        }
        console.log(task);
        const res = await axios.patch(editTask + location.state._id,task)
        console.log(res);
        if (res.data.sucess == true) {
            navigate("/alltask")
        } else {
            alert(res.data.message)
        }
    }


    function ViewAllTask() {
        navigate("/alltask")
    }


    return (
        <div className='editpage'>
            <h1 className='hcom heading'>Edit Task</h1>
            <h3 className='hcom taskname'>Task Name</h3>
            <OutlinedInput placeholder="Enter Task" value={taskname} onChange={(e) => {
                setTaskname(e.target.value)
                // console.log(e.target.value)
            }} />
            <h3 className='hcom taskdescrip'>Task Description</h3>
            <TextareaAutosize aria-label="empty textarea" minRows={4} placeholder="Task Description" style={{ width: 220 }} value={description} onChange={(e) => setDesription(e.target.value)} /><br />
            <div className='btns'>
                <Button variant="outlined" className='addtaskbtn' onClick={Submit} >Edit Task</Button>
                <Button variant="outlined" className='alltaskbtn' onClick={ViewAllTask}>Back</Button>
            </div>
        </div>
    )
}

export default EditTask