import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

export default class CreateNoteView extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
        <div className="View-header">
          <h1>Edit Note</h1>
        </div>
    {/* 
Add edit button as footer to note or to left of title?
--OR--
Double click to edit?

--OR--

Helper: getNoteByID
    fetch note (needs axios?)
    edit button
    */}
        <form>
          <div>
            <input className="InputTitle" type="text" placeholder="Enter note title"></input>
          </div>
          <div>
            <input className="InputBody"  type="text" placeholder="Enter note content"></input>
            <button className="btn-NavButton">Save changes</button>
            <button className="btn-NavButton">Cancel</button>
          </div>
         </form>
    </div>
    )
  }
}
