import React from 'react';

export default function TopBarPageSpecific(props) {
  return (
    <div className="TopBar">
      <div class="top-bar-page-specific--container">
        <span className="top-bar-page-specific--emoji">🚀</span>
        <h1 className="top-bar-page-specific--title">{props.page}</h1>
      </div>
      <hr></hr>
    </div>
  );
}
