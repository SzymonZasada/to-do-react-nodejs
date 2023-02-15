import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RouterEnum } from '../helpers/enums';

export function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Choose what do you want</h1>
      <div className='home-buttons'>
        <span className='home-button'>
          <Button variant='contained' onClick={() => navigate(RouterEnum.addNote)}>
            Add new note
          </Button>
        </span>
        <span className='home-button'>
          <Button variant='contained' onClick={() => navigate(RouterEnum.todoList)}>
            Show todo list
          </Button>
        </span>
      </div>
    </div>
  );
}
