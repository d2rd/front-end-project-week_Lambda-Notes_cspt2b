// 2a create reducer(s)

const noteReducer = (state =[], action) => { //creates blank array for state, 2nd argument is action.
  switch( action.type ){
    case 'GET_NOTES':
      // return [...state, ...action.payload]
      return state.concat(action.payload);
    
    case 'GETTING_NOTES':
    return state;

    case 'CREATE_NOTE':
    return state;

    case 'CREATING_NOTE':
    return state;

    case 'CREATE_NOTE':
    return state;

    case 'UPDATE_NOTE':
    return state;

    case 'UPDATING_NOTE':
    return state;

    case 'SINGLE_NOTE':
    return state;


    case 'TOGGLE_UPDATE_NOTE':
    return state;

    case 'UPDATE_TARGET':
    return state;

    case 'DELETE_NOTE':
    return state;

    case 'SINGLE_NOTE':
    return state;

    default: 
      return state
  }
}

export { noteReducer };