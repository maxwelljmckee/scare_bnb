import React, { useState, useEffect, useRef } from 'react'

import LogoutButton from '../../auth/LogoutButton';
import LoginFormModal from '../../auth/LoginFormModal'
import SignUpFormModal from '../../auth/SignUpFormModal'

import './UserMenu.css'

export default function UserMenu({ authenticated, setAuthenticated }) {
  const [open, setOpen] = useState(false)
  const anchorRef = useRef(null)

  useEffect(() => {
    if (!open) return

    const close = () => {
      setOpen(false)
    }

    document.addEventListener('click', close)

    return () => {
      document.removeEventListener('click', close)
    }
  }, [open])

  const openMenu = (e) => {
    if (!open) {
      setOpen(true)
    }
  }

  return (
    <div className="usermenu__container">
      <div ref={anchorRef} className="usermenu__dropdown_button" onClick={openMenu}>
        <i className="fas fa-bars"></i>
        {!authenticated && (
          <i className="fas fa-user-circle"></i>
        )}
        {authenticated && !authenticated.profile_pic_url && (
          <i className="fas fa-user-circle"></i>
        )}
        {authenticated && authenticated.profile_pic_url && (
          <img className="usermenu__profile-pic" src={authenticated.profile_pic_url} />
        )}
      </div>
      <div className={open ? "usermenu__dropdown" : "usermenu__dropdown--hidden"}>
        <LoginFormModal
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />

        <SignUpFormModal
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />

        {!authenticated && (<hr />)}


        {authenticated && (
          <>
            <div className="usermenu__option">
              Host a home
            </div>
            <LogoutButton
              setAuthenticated={setAuthenticated}
            />
          </>
        )}
      </div>

    </div>
  )
}
