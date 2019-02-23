import React, { Component } from 'react';
import logo from './D2rdroid2.png';
import './App.css';
import Notes from './Notes';
import NoteForm from './NoteForm';
// import { getNotes } from '../actions';
// import { createNote } from '../actions';
// import { deleteNote } from '../actions';
// import { toggleShowUpdate } from '../actions';
// import { updateSingleNote } from '../actions';
// import { showSelectedNote} from '../actions';
import { getNotes, createNote, deleteNote, toggleShowUpdate,  showSelectedNote } from '../actions';

import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    this.props.getNotes();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-Title">{`Proximo Notes`}</h1>
          <NoteForm />
        </header>
        {this.props.error ? <h3>Error Fetching Notes</h3> : null}
        <div className="Flex-Container">
          {this.props.gettingNotes ? (
            <img src={logo} className="App-logo" alt="logo" />
          ) : (
            <Notes notes={this.props.notes} />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { notesReducer } = state;
  return {
    notes: notesReducer.notes,
    error: notesReducer.error,
    gettingNotes: notesReducer.gettingNotes
  };
};

export default connect(mapStateToProps, { getNotes,  createNote, deleteNote, toggleShowUpdate,  showSelectedNote })(App);

