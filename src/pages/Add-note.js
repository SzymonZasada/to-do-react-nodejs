import { InputNote } from '../components/Input-note';

export function AddNotePage() {
  const addNewNote = (el) => {
    console.log(el);
  };

  return (
    <div className='add-note-template'>
      <InputNote saveNote={(el) => addNewNote(el)} />
    </div>
  );
}
