import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNote } from '../actions';

class NoteForm extends Component {
  state = {
    title: '',
    body: '',
    // category: '', // future '{business, personal}
    priority: '',
    urlAddress: `` // importance 1-5
  };
  
  handleInputChange = event => {
    this.setState({ [event.target.title]: event.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.postNote(this.state)
  }

  handleAddNote = _ => {
    const { title, priority, body, urlAddress } = this.state;
    this.props.createNote({ title, priority,  body, urlAddress });
    this.setState({ title: '', priority: '',  body: '', urlAddress: `` });
  };

  render() {
    return (
      <form className="column-Layout" onSubmit={this.handleSubmit}>
        <input
          className="Input"
          value={this.state.title}
          name="title"
          type="text"
          placeholder="Title"
          onChange={this.handleInputChange}
        />
        <input
          className="Input-priority"
          value={this.state.priority}
          name="priority"
          type="text"
          placeholder="Priority"
          onChange={this.handleInputChange}
        />
        <input
          className="Input"
          name="body"
          type="text"
          placeholder="Content"
          onChange={this.handleInputChange}
          value={this.state.body}
        />
        
        <input
          className="Input"
          value={this.state.urlAddress}
          name="urlAddress"
          type="text"
          placeholder="URL"
          onChange={this.handleInputChange}
        />
        <button className="btn-Input-save" onClick={() => this.handleAddNote()} type="button">
          Save New Note
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.error,
    creatingNote: state.creatingNote
  };
};

export default connect(mapStateToProps, { createNote })(NoteForm);



/*
// ***** MY LAYOUT ****
  return (
    <div>
      <div className="View-header">
        <h1>Create New Note</h1>
      </div>
      <form>
        <div>
          <input
            className="InputTitle"
            type="text"
            placeholder="Enter note title"
          />
        </div>
        <div>
          <input
            className="InputBody"
            type="text"
            placeholder="Enter note details"
          />
          <button className="btn-NavButton">Save note</button>
        </div>
      </form>
    </div>
  );
*/