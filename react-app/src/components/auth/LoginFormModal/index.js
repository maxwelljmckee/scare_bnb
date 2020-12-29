import React, { useState } from 'react'

import { Modal } from '../../../context/Modal.js'

import LoginForm from './LoginForm'

export default function LoginFormModal(props) {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <button onClick={() => {
        setShowModal(true)
      }}>Log In</button>
      {showModal && (
        <>
          <Modal onClose={() => setShowModal(false)}>
            Hello
            {/* <LoginForm {...props} /> */}
          </Modal>
        </>
      )}
    </>
  )
}
