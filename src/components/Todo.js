import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import './Todo.css';

export const Todo = ({ task, toggleComplete,deleteTodo,editTodo }) => {
  return (
    <div className='Todo'>
      <p onClick={() => toggleComplete(task.id)} className={`Todo-item-text ${task.completed ? 'completed' : ''}`}>{task.task}</p>
      <div className='Todo-item-actions'>
        <FontAwesomeIcon icon={faPenToSquare} onClick={()=> editTodo(task.id)  } className='icon edit-icon' />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} className='icon delete-icon' />
      </div>
    </div>
  );
};
 
