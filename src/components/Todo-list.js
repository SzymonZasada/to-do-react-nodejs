import React from 'react';
import TodoItem from './Todo-item';
import axios from 'axios';
import { ApiEnum } from '../helpers/enums';
import Modal from 'react-modal';
import { InputNote } from './Input-note';

class TodoList extends React.Component {
  //use class od useSate without class?
  componentDidMount() {
    this.getNotes();
  }

  state = {
    elements: [],
    showModal: false,
    editableNote: {},
  };

  async getNotes() {
    try {
      await axios.get(ApiEnum.AllNotes).then((el) => this.setState({ elements: el.data }));
    } catch (err) {
      console.warn(err);
    }
  }

  async updateNote(data) {
    try {
      await axios
        .put(`${ApiEnum.AllNotes}/${data.id}`, data)
        .then((el) => this.setState({ elements: el.data }));
    } catch (err) {
      console.warn(err);
    }
  }

  setComplete(element, isComplete) {
    const newObjToBackend = { ...element };
    newObjToBackend.isComplete = isComplete;
    this.updateNote(newObjToBackend);
  }

  markDone(element) {
    this.setComplete(element, true);
  }

  markUnDone(element) {
    this.setComplete(element, false);
  }

  closeModal() {
    this.setState({ showModal: false });
  }

  openModal() {
    this.setState({ showModal: true });
  }

  saveEditedNote(el) {
    this.updateNote(el);
    this.closeModal();
  }

  modify(el) {
    this.setState({ editableNote: el });
    this.openModal();
  }

  // which spelling is correct-its ok?
  noReference = () => {
    console.log('click from child to parent!');
  };

  customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  render() {
    const elements = this.state.elements.map((el, i) => {
      //el key here or inside TodoItem?
      return (
        <TodoItem
          key={i}
          element={el}
          //which is corect? with ()=> or bind?
          done={(el) => this.markDone(el)}
          unDone={this.markUnDone.bind(this)}
          modify={(el) => this.modify(el)}
          reference={this.noReference}
        />
      );
    });
    return (
      <div>
        <Modal
          isOpen={this.state.showModal}
          style={this.customStyles}
          appElement={document.getElementById('root')}
        >
          <div>
            <InputNote
              elements={this.state.editableNote}
              saveNote={(el) => this.saveEditedNote(el)}
              closeModal={this.closeModal.bind(this)}
            />
          </div>
        </Modal>
        <div>
          <h1 className='header'>To-Do list</h1>
        </div>
        <div>{elements}</div>
      </div>
    );
  }
}

export default TodoList;
