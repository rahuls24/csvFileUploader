import React, { Component } from "react";
import "./InputCsv.css";
import MyTab from "./MyTab";
import MyInput from "./MyInput";
import Mymsg from "./Mymsg";

export default class CsvUploader extends Component {
  render() {
    return (
      <div>
        <div className="myDiv" />
        <Mymsg />
        <MyTab />
        <MyInput />
      </div>
    );
  }
}
