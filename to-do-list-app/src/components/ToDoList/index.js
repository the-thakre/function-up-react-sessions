import React, { useState, useEffect } from 'react'
import { addNewIcon, checkIcon, crossIcon, deleteIcon, editIcon } from '../../HelperFunctions';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './styles.scss'

const ToDoList = () => {
    const [toDoList, setToDoList] = useState([]);
    const [taskId, setTaskId] = useState(0);
    const [editTaskId, setEditTaskId] = useState();
    const [editTaskName, setEditTaskName] = useState();

    const singleTask = (item) => {
        return <div className='xi-single-task-wrapper'>
            {editTaskId === item.id ?
                <input value={editTaskName}
                    placeholder='Add new task....'
                    onChange={(e) => {
                        setEditTaskName(e.target.value);
                    }} /> :
                <div className='task-content'>{item.content}</div>
            }
            {editTaskId === item.id ? <div className='task-actions'>
                <div className='action' onClick={() => onCheckHandler(editTaskId, editTaskName)}>{checkIcon}</div>
            </div> : <div className='task-actions'>
                {item.is_deleted ? <div className='action' onClick={() => deleteTaskHandler(item.id, true)}>{crossIcon}</div> :
                    <><div className='action' onClick={() => editTaskHandler(item.id, item.content)}>{editIcon}</div>
                        <div className='action' onClick={() => deleteTaskHandler(item.id)}>{deleteIcon}</div></>}
            </div>}
        </div>
    }

    const onCheckHandler = (id, name) => {
        if (name === '' || !name) {
            toast.error('Please enter something to create task.')
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
            return item
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
                    is_deleted: !addBack
                }
            }
            return item
        })
        setToDoList(modifiedList);
    }

    const getSizeOfToDoList = (isDeleted) => {
        if (isDeleted) {
            return toDoList.filter(item => item.is_deleted).length;
        }
        return toDoList.filter(item => !item.is_deleted).length;
    }

    return (
        <div className='xi-to-do-list-wrapper'>
            <div className='xi-page-title'>MY TO-DO LIST</div>
            {getSizeOfToDoList() > 0 && <div className='pending-tasks-title list-title '>PENDING TASKS</div>}
            <div className='xi-pending-task-list-wrapper list-wrapper'>
                {toDoList && toDoList.filter(item => item.is_deleted === false).map((item, index) => singleTask(item))}
            </div>
            <div className='xi-add-new-btn'><div className='btn-text' onClick={() => {
                let isEmptyTask = toDoList.filter(item => item.id === editTaskId);
                if (toDoList.length > 0 && (editTaskName === '')) {
                    toast.error('Please enter your task before adding new task.')
                    return;
                }
                setToDoList([...toDoList, { id: taskId, content: '', is_deleted: false }]);
                setTaskId(taskId + 1);
                editTaskHandler(taskId, '');
            }}><span className='add-icon'>{addNewIcon}</span>Add new task</div></div>
            {getSizeOfToDoList(true) > 0 && <div className='completed-tasks-title list-title '>COMPLETED TASKS</div>}
            <div className='xi-completed-task-list-wrapper list-wrapper'>
                {toDoList && toDoList.filter(item => item.is_deleted === true).map((item, index) => singleTask(item))}
            </div>
            <ToastContainer />
        </div>
    )
}

export default ToDoList