import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default class MyInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      isTrue: false, //for activating the Agree button in dialog box
      open: false //for opening and closing of dialog box
    };
    // this.handleChange = this.handleChange.bind(this);
    this.radioSelected = this.radioSelected.bind(this); // for radio button event
    this.handleClose = this.handleClose.bind(this); // for opening and closing of dialog box
    this.handleAgree = this.handleAgree.bind(this); // handle the event when agree button press
    this.handleUpload = this.handleUpload.bind(this); // uploading the file
    this.handleDisagree = this.handleDisagree.bind(this); // handle the event when disagree button is press in dialog box
  }

  handleClose = () => {
    this.setState({ open: !this.state.open });
  };
  radioSelected = () => {
    console.log(this.state.image);
    this.setState({ isTrue: true });
  };
  handleAgree = () => {
    this.setState({ open: false });
    this.handleUpload();
  };
  handleDisagree = () => {
    this.setState({ open: false });
  };
  handleChange = e => {
    // this.handleClose()
    console.log(e);
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
      // TODO selected file is store in this.state.image
      // write a code to upload to database
    }
  };

  handleUpload = () => {
    this.upload.click();
  };
  render() {
    if (this.state.isTrue) {
      return (
        <div>
          <input
            id="myInput"
            type="file"
            accept=".csv"
            onChange={this.handleChange}
            ref={ref => (this.upload = ref)}
            style={{ display: "none" }}
          />
          <button
            className="button"
            onClick={e => {
              this.handleClose();
            }}
          >
            {" "}
            Upload File(s){" "}
          </button>

          <Dialog
            open={this.state.open}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title" style={{ color: "#A9A9A9" }}>
              {"Your Radio button"}
            </DialogTitle>
            <DialogContent style={{ justifyContent: "center" }}>
              <DialogContentText id="alert-dialog-description">
                <div className="card">
                  <label>Your Branch is : </label> <br />
                  <input
                    type="radio"
                    name="answer"
                    value="cse"
                    onChange={this.radioSelected}
                    style={{ height: "20px", width: "20px" }}
                  />{" "}
                  CSE
                  <input
                    type="radio"
                    name="answer"
                    value="eee"
                    onChange={this.radioSelected}
                    style={{ height: "20px", width: "20px" }}
                  />{" "}
                  <lable style={{ fontSize: "1" }}>EEE</lable>
                  <input
                    type="radio"
                    name="answer"
                    value="etc"
                    onChange={this.radioSelected}
                    style={{ height: "20px", width: "20px" }}
                  />
                  <lable style={{ height: "20px", width: "20px" }}>ETC</lable>
                </div>
              </DialogContentText>
            </DialogContent>
            <DialogActions
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <center>
                <Button
                  onClick={this.handleDisagree}
                  style={{
                    backgroundColor: "#81abf9",
                    color: "white"
                  }}
                >
                  CANCEL
                </Button>
                <Button
                  onClick={this.handleAgree}
                  style={{
                    backgroundColor: "#81abf9",
                    color: "white"
                  }}
                  autoFocus
                >
                  OK
                </Button>
              </center>
            </DialogActions>
          </Dialog>
        </div>
      );
    } else {
      return (
        <div>
          <input
            id="myInput"
            type="file"
            accept=".csv"
            onChange={this.handleChange}
            ref={ref => (this.upload = ref)}
            style={{ display: "none" }}
          />
          <button
            className="button"
            onClick={e => {
              this.handleClose();
            }}
          >
            {" "}
            Upload File(s){" "}
          </button>

          <Dialog
            open={this.state.open}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title" style={{ color: "#A9A9A9" }}>
              {"Your Radio button"}
            </DialogTitle>
            <DialogContent style={{ justifyContent: "center" }}>
              <DialogContentText id="alert-dialog-description">
                <div className="card">
                  <label>Your Branch is : </label> <br />
                  <input
                    type="radio"
                    name="answer"
                    value="cse"
                    onChange={this.radioSelected}
                    style={{ height: "20px", width: "20px" }}
                  />{" "}
                  CSE
                  <input
                    type="radio"
                    name="answer"
                    value="eee"
                    onChange={this.radioSelected}
                    style={{ height: "20px", width: "20px" }}
                  />{" "}
                  <lable style={{ fontSize: "1" }}>EEE</lable>
                  <input
                    type="radio"
                    name="answer"
                    value="etc"
                    onChange={this.radioSelected}
                    style={{ height: "20px", width: "20px" }}
                  />
                  <lable style={{ height: "20px", width: "20px" }}>ETC</lable>
                </div>
              </DialogContentText>
            </DialogContent>
            <DialogActions
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <center>
                <Button
                  onClick={this.handleDisagree}
                  style={{
                    backgroundColor: "#81abf9",
                    color: "white"
                  }}
                >
                  CANCEL
                </Button>
                <Button
                  onClick={this.handleAgree}
                  disabled={true}
                  style={{
                    backgroundColor: "#cccccc",
                    color: "white"
                  }}
                  autoFocus
                >
                  OK
                </Button>
              </center>
            </DialogActions>
          </Dialog>
        </div>
      );
    }
  }
}
