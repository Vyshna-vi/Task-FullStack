import './edittask.css'
import { Button, OutlinedInput, TextareaAutosize } from '@mui/material'
import { red } from '@mui/material/colors'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

function EditTask() {

    const [task, setTask] = useState({})
    const location = useLocation()
    useEffect(() => { setTask(location.state) }, [])

    return (
        <div className='editpage'>
            <h1 className='hcom heading'>Edit Task</h1>
            <h3 className='hcom taskname'>Task Name</h3>
            <OutlinedInput placeholder="Enter Task" value={task.task_name} />
            <h3 className='hcom taskdescrip'>Task Description</h3>
            <TextareaAutosize aria-label="empty textarea" minRows={4} placeholder="Task Description" style={{ width: 220 }} value={task.task_descrip} /><br />
            <div className='btns'>
                <Button variant="outlined" className='addtaskbtn' >Edit Task</Button>
                <Button variant="outlined" className='alltaskbtn' >All Task</Button>
            </div>
        </div>
    )
}

export default EditTask