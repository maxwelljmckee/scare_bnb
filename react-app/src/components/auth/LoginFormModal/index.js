// frontend/src/components/LoginFormModal/index.js
import React, { useState } from 'react';
import LoginForm from './LoginForm';

import { Dialog } from '@material-ui/core'
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function LoginFormDialog(props) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <div onClick={handleClickOpen}>Log In</div>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogContent>
          <LoginForm {...props} />
        </DialogContent>
      </Dialog>
    </>
  );
}

export default LoginFormDialog;
