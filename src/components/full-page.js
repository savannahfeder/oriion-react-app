import React from 'react';

import graphicSrc from '../images/graphic.png';

const FullPage = () => {
  return (
    <div className="container">
      <section className="content">
        <img src={graphicSrc} alt="Welcome Graphic" />
        <h1>Full Page Starter Template</h1>
        <p>
          This is the full page portion of the Chrome extension (with some basic
          styling added) toggled by clicking the button in the popup portion.
          Please read the <b>README.md</b> for more information.
        </p>
      </section>
    </div>
  );
};

export default FullPage;
