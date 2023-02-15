import React from 'react';
import { TextField } from '@mui/material';

export function InputNote(props) {
  const changeTitleEvent = (event) => {
    console.log(event.target.value);
  };
  const changeDescEvent = (event) => {
    console.log(event.target.value);
  };

  return (
    <div className='input-note'>
      <div>{props.elements.title}</div>
      <TextField
        onChange={changeTitleEvent}
        value={props.elements.title}
        label='Title'
        variant='outlined'
      />
      <TextField onChange={changeDescEvent} label='Description' variant='outlined' />
    </div>
  );
}
