import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateSingleNote } from '../actions';

class UpdateNoteForm extends Component { 
  state = {
    title: '',
    // summary: '',
    body: '',
    // category: '', // future '{business, personal}
    priority: '',  // importance 1-5
    urlAddress: `` 
  };

  handleInputChange = event => {
    console.log(event)
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state);
  };

  handleAddNote = event => {
    event.preventDefault(); // prevents refreshing on button click
    const { title, priority, body, urlAddress } = this.state;
    this.props.updateSingleNote({ title, priority, body, urlAddress }, this.props.note.id);
    this.setState({ title: '', priority: '', body: '', urlAddress: `` });
  };

  render() {
    return (
      <form onSubmit={this.handleAddNote}>
        <input 
        className='Input' 
        value={this.state.title} 
        name='title' 
        type="text"
        placeholder={this.props.note.title} 
        onChange={this.handleInputChange} 
        />
        {/* <input name='summary' placeholder={this.props.note.summary} onChange= { this.handleInputChange } value={this.state.summary } /> */}
        
        <input 
        className="Input-priority" 
        name='priority' 
        placeholder={this.props.note.priority} 
        onChange= { this.handleInputChange} 
        value={this.state.priority}
        />
        
        <input 
        className='Input'
        name='body' 
        type="text"
        placeholder={this.props.note.body} 
        onChange= {this.handleInputChange} 
        value={this.state.body}
        />
        
        <input
          className="Input"
          name="urlAddress"
          type="text"
          placeholder={this.props.note.urlAddress}
          onChange={this.handleInputChange}
          value={this.state.urlAddress}
        />

        <button className="btn-Input-save" type='submit'>Save Changes</button>
      </form>
    );
  };
}

export default connect(null, { updateSingleNote })(UpdateNoteForm);
