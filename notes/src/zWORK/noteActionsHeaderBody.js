const FETCH_NOTES = 'FETCH_NOTES';

const notes = [
  {
    title: '',
    body: '',
    id: null
  }
]
const fetchNotes = () => {
  return {
    type: FETCH_NOTES,
    payload: notes
  }
}

export { fetchNotes }