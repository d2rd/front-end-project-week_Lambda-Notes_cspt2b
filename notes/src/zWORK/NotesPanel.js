import React from 'react';
import Notes from './Notes';

const NotesPanel = props => {
  return (
    <div className="Notes-panel">
      <div className="ModuleBorderGreen">
        <Notes />
      </div>
    </div>
  );
};

export default NotesPanel;