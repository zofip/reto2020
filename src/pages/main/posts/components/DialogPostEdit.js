import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";

import {
  DialogTitle,
  DialogContent,
  Dialog,
  DialogActions,
  Button,
  TextField,
  Grid
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import { EDIT } from '../../../../util/constants';
import Context from "../Context";

const useStyles = makeStyles(theme => ({
  textField: {
    width: 355
  }
}));

const DialogPostEdit = props => {

  const classes = useStyles();
  const dispatch = useContext(Context);

  const { onClose, onCancel, open } = props;
  const [values, setValues] = useState(props.post);

  useEffect(() => {
    setValues(props.post);
  }, [props.post])

  const handleChange = input => event => {
    setValues({ ...values, [input]: event.target.value });
  }

  function handleClose() {
    dispatch({
      type: EDIT,
      post: values
    });
    onClose(values);
  }

  function handleCancel() {
    onCancel();
  }

  return (
    <Dialog onClose={handleCancel} aria-labelledby="dialog-post-edit"
      open={open}
      maxWidth="xs"
    >
      <DialogTitle id="dialog-post-edit">
        Edit Post
      </DialogTitle>

      <DialogContent>
        <Grid container >
          <Grid item xs={12}>
            <TextField
              className={classes.textField}
              margin="dense"
              id="title"
              label="Title"
              value={values.title}
              onChange={handleChange("title")}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className={classes.textField}
              margin="dense"
              id="body"
              label="Content"
              value={values.body}
              onChange={handleChange("body")}
            />
          </Grid>
        </Grid>

        <DialogActions>
          <Button id="btnCancel" onClick={handleCancel} color="primary">
            Cancel
          </Button>
          <Button id="btnClose" onClick={handleClose} color="primary">
            Save
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog >
  );
};

DialogPostEdit.propTypes = {
  onClose: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default DialogPostEdit;