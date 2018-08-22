import React from "react";
import ReactDOM from "react-dom";

import style from "../style/main.css";

const App = () => {
  return (
    <div>
      <p className="text">Dive Map</p>
    </div>
  );
};
export default App;
ReactDOM.render(<App />, document.getElementById("app"));
