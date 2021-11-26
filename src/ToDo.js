import React, {useState} from 'react';


const ToDo = ({ id="1", task="default todo", remove, update }) => {
    const [editTask, setEditTask] = useState(task);
    const [isEditing, setIsEditing] = useState(false);

    const toggleEdit = () => {
        setIsEditing(edit => !edit);
    };

    const handleChange = e => {
        setEditTask(e.target.value);
    }

    const handleDelete = () => remove(id)

    const handleUpdate = (e) => {
        e.preventDefault();
        update(id, editTask);
        setIsEditing(false)
    }

    // default todo view before user clicks edit
    let jsx = (
        <div>
            <li>{task}</li>
            <button onClick={toggleEdit}>Edit</button>
            <button onClick={handleDelete}>X</button>
        </div>
    )

    if(isEditing) {
        jsx = (
            <div>
                <form onSubmit={handleUpdate}>
                    <input type="text" value={editTask} onChange = {handleChange} 
                    />
                    <button>Update</button>
                </form>
            </div>
        )
    }

    return jsx;
}

export default ToDo;