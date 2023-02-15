import { InputNote } from '../components/Input-note';
import axios from 'axios';
import { ApiEnum, RouterEnum } from '../helpers/enums';
import { useNavigate } from 'react-router-dom';

export function AddNotePage() {
  const navigate = useNavigate();

  const addNewNote = async (data) => {
    try {
      await axios.post(ApiEnum.AllNotes, data).then((res) => {
        if (res.status === 200) {
          navigate(RouterEnum.todoList);
        }
      });
    } catch (err) {
      console.warn(err);
    }
  };

  const handleNewNote = (el) => {
    addNewNote(el);
  };

  return (
    <div className='add-note-template'>
      <InputNote saveNote={(el) => handleNewNote(el)} />
    </div>
  );
}
