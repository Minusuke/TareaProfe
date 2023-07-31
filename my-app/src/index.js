// Import react
import React from "react";
import ReactDOM from "react-dom";

// Include styles into the webpack bundle
import "../styles/index.css";

// Import components
import Home from "./component/home.jsx";

// Render app
ReactDOM.render(<Home />, document.querySelector("#app"));