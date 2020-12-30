import React, { useState, useEffect } from 'react';
import SignUpForm from './SignUpForm';

import { Dialog } from '@material-ui/core'
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function SignUpFormDialog(props) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      {!props.authenticated && (
        <div
          className="usermenu__option"
          onClick={handleClickOpen}
        >
          Sign Up
        </div>
      )}
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <SignUpForm {...props} onClose={handleClose} />
      </Dialog>
    </>
  );
}

export default SignUpFormDialog;
