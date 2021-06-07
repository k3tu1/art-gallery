import React from "react";
import { useRef } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import SendIcon from "@material-ui/icons/Send";
import { useForm } from "@formspree/react";
import { Alert, AlertTitle } from "@material-ui/lab";

export default function FormDialog(props) {
  const [state, handleSubmit] = useForm("mleabywd");
  const nameRef = useRef("");
  const emailRef = useRef("");
  const messageRef = useRef("");
  const handleClose = () => {
    props.modalHandler(true);
  };
  if (state.succeeded) {
    return (
      <Alert variant="filled" severity="success">
        <AlertTitle>Message Sent</AlertTitle>
        Your message has <strong>successfully</strong> submited!
      </Alert>
    );
  }
  return (
    <div>
      <Dialog
        open={props.isOpen}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <form onSubmit={handleSubmit}>
          <DialogTitle id="form-dialog-title">Drop a message!</DialogTitle>
          <DialogContent>
            <DialogContentText>Please Leave a Brife Message!</DialogContentText>
            <TextField
              name="name"
              autoFocus
              required
              type="text"
              label="Name"
              style={{ margin: 8 }}
              placeholder="Your Name..."
              fullWidth
              margin="normal"
              variant="outlined"
              //   onChange={nameChangeHandler}
              inputRef={nameRef}
            />
            <TextField
              required
              name="email"
              type="email"
              label="Email"
              style={{ margin: 8 }}
              placeholder="Your Email Address..."
              fullWidth
              margin="normal"
              variant="outlined"
              inputRef={emailRef}
            />
            <TextField
              name="message"
              label="Message"
              style={{ margin: 8 }}
              placeholder="Your Message..."
              fullWidth
              multiline
              rows={4}
              margin="normal"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              inputRef={messageRef}
            />
          </DialogContent>
          <DialogActions>
            <Button
              type="submit"
              //   onClick={handleClose}
              color="primary"
              endIcon={<SendIcon />}
              disabled={state.submitting}
            >
              Send
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
