import './alltask.css'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { getAllTask } from '../API/api'
import Card from './Card'

function AllTask() {

    const [alltasks, setalltask] = useState()

    async function allTask() {
        const tasks = await axios.get(getAllTask)
        setalltask(tasks.data.allTask)
        console.log(tasks.data.allTask)
    }
    useEffect(() => { allTask() }, [])


    return (
        <div>
            <h1 className='h1'>Tasks</h1>
            <div className='alltasks'>
                {alltasks && alltasks.map((m) => {
                    return (<Card cards={m} />)
                })}
            </div>
        </div>
    )
}

export default AllTask