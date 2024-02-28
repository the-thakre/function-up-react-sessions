import React, { useEffect, useState } from 'react';
import { addNewIcon, checkIcon, crossIcon, deleteIcon, editIcon } from '../../HelperFunctions';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './styles.scss';


// sass 
// {id:1,content:'',is_deleted:t/f}


const ToDoList = () => {
    const [toDoList, setToDoList] = useState([]);
    const [taskId, setTaskId] = useState(0);
    const [editTaskId, setEditTaskId] = useState();
    const [editTaskName, setEditTaskName] = useState();

    const singleTask = (data) => {
        return <div className='xi-single-task-wrapper'>
            {editTaskId === data.id ? <input value={editTaskName} onChange={(e) => {
                setEditTaskName(e.target.value);
            }} /> : <div className='task-content'>{data.content}</div>}

            {editTaskId === data.id ?
                <div className='task-actions' onClick={() => {
                    onCheckHandler(editTaskId, editTaskName);
                }}>{checkIcon}</div>
                :
                <div className='task-actions'>
                    {data.is_deleted ? <div className='action' onClick={() => {
                        deleteTaskHandler(data.id, true);
                    }} >{crossIcon}</div> : <><div className='action' onClick={() => {
                        editTaskHandler(data.id, data.content)
                    }}>{editIcon}</div>
                        <div className='action' onClick={() => {
                            deleteTaskHandler(data.id);
                        }}>{deleteIcon}</div></>}

                </div>
            }

        </div>
    }

    const onCheckHandler = (id, name) => {
        if (name === '') {
            toast.error('Please enter something to create a new task.')
            return;
        }
        setEditTaskId();
        let modifiedList = toDoList.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    content: name
                }
            }
            return item;
        })
        setToDoList(modifiedList);
    }

    const editTaskHandler = (id, name) => {
        setEditTaskId(id);
        setEditTaskName(name);
    }

    const deleteTaskHandler = (id, addBack) => {
        let modifiedList = toDoList.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    is_deleted: addBack ? false : true,
                }
            }
            return item;
        })
        setToDoList(modifiedList);
    }

    const getSizeOfToDoList = (isDeleted) => {
        if (isDeleted) {
            return toDoList.filter(item => item.is_deleted).length
        }
        return toDoList.filter(item => !item.is_deleted).length
    }


    return (
        <div className='xi-to-do-list-wrapper'>
            <div className='xi-page-title'>MY TO-DO LIST</div>
            {getSizeOfToDoList() > 0 && <div className='pending-tasks-title list-title'>PENDING TASKS</div>}

            <div className='xi-pending-task-list-wrapper list-wrapper'>
                {toDoList.filter(item => item.is_deleted === false).map((item, index) => singleTask(item))}
            </div>


            <div className='xi-add-new-btn'>
                <div className='btn-text' onClick={() => {
                    if (editTaskName === '') {
                        toast.error('Please fill your old task to create new one.');
                        return;
                    }
                    setToDoList([...toDoList, { id: taskId, content: '', is_deleted: false }]);
                    setTaskId(taskId + 1);
                    editTaskHandler(taskId, '')
                }}><span className='add-icon'>{addNewIcon}</span>Add new task</div>
            </div>

            {getSizeOfToDoList(true) > 0 && <div className='completed-tasks-title list-title'>COMPLETED TASKS</div>}

            <div className='xi-completed-task-list-wrapper list-wrapper'>
                {toDoList.filter(item => item.is_deleted === true).map((item, index) => singleTask(item))}
            </div>
            <ToastContainer />
        </div>
    )
}

export default ToDoList;