import React from "react";
import ReactDOM from "react-dom";
import CsvUploader from "./CsvUploader";
import HeaderBar from "./HeaderBar";

import "./styles.css";

function App() {
  return (
    <div>
      <HeaderBar />
      <CsvUploader />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
