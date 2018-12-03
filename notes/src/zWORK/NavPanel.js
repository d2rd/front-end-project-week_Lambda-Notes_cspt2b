import React from 'react';

const NavPanel = props => {
  return (
    <div className="Nav-panel">
      <div>
        <button className="btn-NavButton">View Your Notes</button>
      </div>
      <div>
        <button className="btn-NavButton">+ Create New Note</button>
      </div>
    </div>
  );
};

export default NavPanel;