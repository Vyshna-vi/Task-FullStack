import React from 'react'
import './addtask.css'
import OutlinedInput from '@mui/material/OutlinedInput';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Button from '@mui/material/Button';
import { blue } from '@mui/material/colors';
import { useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddTask() {

    const navigate = useNavigate()

    const taskname = useRef()
    const taskdescrip = useRef()

    async function Submit() {

        let tasks = {
            task_name: taskname.current.value,
            task_descrip: taskdescrip.current.value,
        }
        const res = await axios.post("http://localhost:5000/add-task", tasks)
        console.log(res)
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
        <div className='main'>
            <h1 className='hcom heading'>Add Task</h1>
            <h3 className='hcom taskname'>Task Name</h3>
            <OutlinedInput placeholder="Enter Task" inputRef={taskname} />
            <h3 className='hcom taskdescrip'>Task Description</h3>
            <TextareaAutosize aria-label="empty textarea" minRows={4} placeholder="Task Description" style={{ width: 220, color: blue }} ref={taskdescrip} /><br />
            <div className='btns'>
                <Button variant="outlined" className='addtaskbtn' onClick={Submit}>Add Task</Button>
                <Button variant="outlined" className='alltaskbtn' onClick={ViewAllTask}>All Task</Button>
            </div>
        </div>
    )
}

export default AddTask