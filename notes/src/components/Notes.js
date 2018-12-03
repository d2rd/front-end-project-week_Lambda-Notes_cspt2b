import React, { Component } from 'react';
import './App.css';
import logo from './D2rdroid2.png';
import SelectedNote from './SelectedNote';
import { connect } from 'react-redux';
import { deleteNote, updateSingleNote, toggleShowUpdate, showSelectedNote } from '../actions';
import UpdateNoteForm from './UpdateNoteForm';

class Notes extends Component {
  handleDeleteNote = () => {
    const { id } = this.props.noteSelected;
    this.props.deleteNote(id);
  };

  handleShowNote = note => {
    this.props.showSelectedNote(note);
  };


  toggleShowUpdate = () => {
    this.props.toggleShowUpdate();
  };
  render() {
    return (
      <div className="Note-Container">
        <div className="View-header">
          <h1>Your Notes</h1>
        </div>
        <div className="PanelContainer">
          <div className="Nav-panel">
            <div>
              <button className="btn-NavButton" onClick={() => this.props.getNotes}>View Your Notes</button>
            </div>
            <div>
              <button className="btn-NavButton">Search Notes</button>
            </div>
            <div>
              <button className="btn-NavButton">+ Create New Note</button>
            </div>
          </div>
          <div className="Notes-panel">
              <ul className="Note-row">
                {!this.props.noteSelected.id &&  this.props.notes.map(note => {
                  return (
                    <div className="Note-header" onClick={() => this.props.showSelectedNote(note)} key={note.id}>
                      <h4>{note.title}</h4>
                    <div className="Note-summary">
                      {note.body.slice(0,200)+"..."}
                    </div>  
                    {/* make function to create summary on rendering notes list */}
                </div>  // shows note contents on click
                  );
                })}
              </ul>
          </div>
        </div>
        {this.props.showUpdate ? (
          <UpdateNoteForm note={this.props.noteSelected} />
        ) : null}
        {Object.keys(this.props.noteSelected).length > 0 ? (
          <SelectedNote
            handleShowNote={this.handleShowNote}
            toggleShowUpdate={this.toggleShowUpdate}
            handleDeleteNote={this.handleDeleteNote}
            selected={this.props.noteSelected}
          />
        ) : null}

        {this.props.deletingNote ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    deletingNote: state.notesReducer.deletingNote,
    error: state.notesReducer.error,
    showUpdate: state.singleNoteReducer.showUpdate,
    noteSelected: state.singleNoteReducer.noteSelected
  };
};

export default connect(mapStateToProps, {
  deleteNote,
  updateSingleNote,
  toggleShowUpdate,
  showSelectedNote
})(Notes);



// // MY LAYOUT

// return (
//   <div>
//     {/* <ul>
//       <li><h3>Notes:</h3></li>
//     </ul> */}

//     <div className="View-header">
//       <h1>Your Notes</h1>
//     </div>
//     <div>
//       <ul>
//         {/* <li>
//           {this.props.notes.map( notes => {
//                   return <div>{ notes }</div>
//                 })}
//         </li> */}
//         <li className="Note-row">
//           {this.props.notes.map((note, i) => {
//             return (
//               <div key = {i}>
//                 <header className="Note-header">
//                   <h3> {note.title}</h3>
//                 </header>
//                 <p className="Note-item"> {note.body}</p>
//               </div>
//             );
//           })}
//         </li>
//       </ul>
//     </div>
//   </div>
// );