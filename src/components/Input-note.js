import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

export function InputNote(props) {
  const [title, setTile] = useState(props.elements.title ? props.elements.title : '');

  const changeTitleEvent = (event) => {
    const value = event.target.value;
    setTile(value);
  };

  const editNote = () => {
    const newNote = {
      title: title,
      id: props.elements.id ? props.elements.id : 0,
      isComplete: props.elements.isComplete ? props.elements.isComplete : false,
    };
    props.saveNote(newNote);
  };

  return (
    <div className='input-note'>
      <div>
        <TextField onChange={changeTitleEvent} value={title} label='Title' variant='outlined' />
        <div className='new-note-buttons'>
          {/*remember no ()=> xx.xx but xx -when click without data inside*/}
          <Button className='new-note-cancel' variant='contained' onClick={props.closeModal}>
            Cancel
          </Button>
          <Button className='new-note-save' variant='contained' onClick={() => editNote()}>
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}
