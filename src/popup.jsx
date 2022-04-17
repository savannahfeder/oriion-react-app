import React from "react";
import { render } from "react-dom";
import "./popup.css";
// import { HashRouter as Router } from "react-router-dom";
import App from "./pages/App.jsx";

function Popup() {
  return (
    // <React.StrictMode>
    //   <Router basename="/popup">
    <App />
    //   </Router>
    // </React.StrictMode>
  );
}

render(<Popup />, document.getElementById("popup-root"));
