import React from 'react';
import { IconButton } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import RemoveDoneIcon from '@mui/icons-material/RemoveDone';
import DoneIcon from '@mui/icons-material/Done';
import EditIcon from '@mui/icons-material/Edit';

const TodoNote = (props) => {
  const isDone = props.element.isComplete;

  return (
    <div className='todo-item' key={props.element.id}>
      <div className={`show-done  ${isDone ? 'done' : 'undone'} `}>
        {isDone ? 'Done' : 'Undone'}
      </div>
      <div className='todo-title'>{props.element.title}</div>
      <div className='buttons'>
        <Tooltip title='Done' placement='bottom'>
          <IconButton onClick={() => props.done(props.element)}>
            <DoneIcon style={{ fill: 'green' }} fontSize='small' />
          </IconButton>
        </Tooltip>
        <Tooltip title='Undone' placement='bottom'>
          <IconButton onClick={() => props.unDone(props.element)}>
            <RemoveDoneIcon color='warning' fontSize='small' />
          </IconButton>
        </Tooltip>
        <Tooltip title='Edit' placement='bottom'>
          <IconButton onClick={() => props.modify(props.element)}>
            <EditIcon color='primary' fontSize='small' />
          </IconButton>
        </Tooltip>
      </div>
      {/*click without pass value*/}
      {/*<button onClick={props.reference}></button>*/}
    </div>
  );
};

export default TodoNote;
