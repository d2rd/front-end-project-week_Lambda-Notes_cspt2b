const FETCH_NOTES = 'FETCH_NOTES';

//refactor to pull from server
let note1 = {
  title: 'Note 1',
  body: 'This the text for note1'
}
let note2 = {
  title: 'Note 2',
  body: 'This the text for note2'
}
let note3 = {
  title: 'Note 3',
  body: 'This the text for note3'
}
let note4 = {
  title: 'Note 4',
  body: 'This the text for note4'
}
let note5 = {
  title: 'Note 5',
  body: 'This the text for note5'
}
const notes = [note1, note2, note3, note4, note5];

//action creator is 9-15
const fetchNotes = () => {
  return {  //action object
    type: FETCH_NOTES,
    payload: notes
  }
}

export { fetchNotes }