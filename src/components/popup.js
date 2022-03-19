/* global chrome */
import React from 'react';

import graphicSrc from '../images/graphic.png';

const Popup = () => {
  const handleClick = () => {
    // When the icon is clicked, create a new tab pointing to the index page
    // Change this depending on your routes (in this case, the full page is the "/" route)
    chrome.tabs.create({
      url: chrome.runtime.getURL('/index.html'),
    });
  };

  return (
    <div>
      <section className="popup-content">
        <img src={graphicSrc} alt="Welcome Graphic" />
        <h1>Popup Starter Template</h1>
        <p>
          This is the popup portion of the Chrome extension (with some basic
          styling added) toggled by clicking the extension's icon. Please read
          the <b>README.md</b> for more information.
        </p>
        <br />
        <p>
          <button onClick={handleClick}>View Full Page Portion</button>
        </p>
      </section>
    </div>
  );
};

export default Popup;
