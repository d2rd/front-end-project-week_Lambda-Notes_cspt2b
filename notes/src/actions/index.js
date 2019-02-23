import axios from 'axios';

export const ERROR = 'ERROR';
export const GET_NOTES = 'GET_NOTES';
export const GETTING_NOTES = 'GETTING_NOTES';
export const CREATE_NOTE = 'CREATE_NOTE';
export const CREATING_NOTE = 'CREATING_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTES';
export const UPDATING_NOTE = 'UPDATING_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const DELETING_NOTE = 'DELETING_NOTE';
export const SINGLE_NOTE = 'SINGLE_NOTE';
export const TOGGLE_UPDATE_NOTE = 'TOGGLE_UPDATE_NOTE';
export const UPDATE_TARGET = 'UPDATE_TARGET';

export const URL = 'http://localhost:5500/api/notes';

// GET
export const getNotes = () => {
  const notes = axios.get(`${URL}/get`);
  return dispatch => {
    dispatch({
      type: GETTING_NOTES
    });
    notes
      .then(response => {
        dispatch({
          type: GET_NOTES,
          payload: response.data
        });
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          payload: err
        });
      });
  };
};

// POST
export const createNote = note => {
  const newNote = axios.post(`${URL}/create`, note);
  return dispatch => {
    dispatch({
      type: CREATING_NOTE
    });
    newNote
      .then(({
        data
      }) => {
        dispatch({
          type: CREATE_NOTE,
          payload: data
        });
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          payload: err
        });
      });
  };
};

// DELETE
export const deleteNote = id => {
  const deletedNote = axios.delete(`${URL}/delete`, {
    data: {
      id
    }
  });
  return dispatch => {
    dispatch({
      type: DELETING_NOTE
    });
    deletedNote
      .then(({
        data
      }) => {
        dispatch({
          type: DELETE_NOTE,
          payload: data
        });
        dispatch({
          type: SINGLE_NOTE,
          payload: {}
        });
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          payload: err
        });
      });
  };
};

// ?? PUT
export const toggleShowUpdate = () => {
  return {
    type: TOGGLE_UPDATE_NOTE
  };
};

// ?? PUT ??
export const updateSingleNote = (note, id) => {
  return dispatch => {
    axios.put(URL + "/update/" + id, note)
      .then(response => {
        console.log(response)
        dispatch({
            type: UPDATE_TARGET,
            payload: response.data
          })
          
        })
        .catch(err => console.log(err.message))
  };
};

// ?? GET single note ??
export const showSelectedNote = (note, id) => {
  return {
    type: SINGLE_NOTE,
    payload: note

  }
}