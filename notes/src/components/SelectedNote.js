import React from 'react';

export default function SelectedNote(props) {
  return (
    <div>
      {/* <h4>{props.selected.title}</h4> */}
      <span onClick={() => props.handleShowNote({})}> Hide </span>
      <div className="Note-header-showNote">{props.selected.title}</div>
      <div className="Note-body-showNote">{props.selected.body}
      </div>
      {/* <div>{props.selected.priority}</div> */}
      <button className="btn-showNote-update"  onClick={() => props.toggleShowUpdate()}>{`Update ${
        props.selected.title
      }`}</button>
      <button className="btn-showNote-delete" onClick={() => props.handleDeleteNote()}>{`Delete ${
        props.selected.title
      }`}</button>
    </div>
  );
}
