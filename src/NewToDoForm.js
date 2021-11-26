import React, { useState } from 'react';
import { v4 as uuid } from "uuid"



const NewToDoForm = ({addItem}) => {
    const [task, setTask] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        addItem({task, id: uuid()});
        setTask('')
    }

    const handleChange = (e) => {
        setTask(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='item'>To Do Item</label>
            <input
                id='item'
                name='item'
                value={task}
                onChange={handleChange}
            />
            <button>Add</button>
        </form>
    )


}

export default NewToDoForm;