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

  setComplete(element, isComplete) {
    const index = this.state.elements.findIndex((el) => el.id === element.id);
    const newElements = this.state.elements;
    newElements[index].isComplete = isComplete;
    this.setState({ element: newElements });
  }

  markDone(element) {
    this.setComplete(element, true);
    console.log(Date.now());
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
    console.log(el);
  }

  modify(el) {
    this.setState({ editableNote: el });
    this.openModal();
  }

  // which spelling is correct?
  // noReference() {
  //   console.log('click from child to parent!');
  // }

  noReference = () => {
    console.log('click from child to parent!');
  };

  render() {
    const elements = this.state.elements.map((el, i) => {
      //el key here or inside TodoItem?
      return (
        <TodoItem
          key={i}
          element={el}
          //which is corect?
          done={(el) => this.markDone(el)}
          unDone={this.markUnDone.bind(this)}
          modify={(el) => this.modify(el)}
          reference={this.noReference}
        />
      );
    });
    return (
      <div>
        <Modal isOpen={this.state.showModal}>
          <div>
            <InputNote
              elements={this.state.editableNote}
              // saveNote={(el) => this.saveEditedNote(el)}
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
