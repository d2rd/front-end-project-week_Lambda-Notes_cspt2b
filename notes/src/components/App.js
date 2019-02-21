import React, { Component } from 'react';
import logo from './D2rdroid2.png';
import './App.css';
import Notes from './Notes';
import NoteForm from './NoteForm';
import { getNotes } from '../actions';
// import { createNote } from '../actions'; // added Dec 8
import { connect } from 'react-redux';

class App extends Component {
  state = {
    renderedResponse: ''
  }
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }
  // getResponse = async() => {
    //   const response = await fetch('/ElectricUprights');
    //   const body = await response.json();
    //   if (response.status !== 200) throw Error(body.message);
    //   return body;
    // }
    // componentDidMount() {
    //   this.getResponse()
    //   .then(res => {
    //     const someData = res;
    //     this.setState({ renderedResponse: someData });
    //   })
    // }

    callAPI() {
      fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res })); 
    }
  componentWillMount() {
    this.callAPI();
  }
  render() {
    const { renderedResponse } = this.state

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

export default connect(mapStateToProps, { getNotes })(App);

