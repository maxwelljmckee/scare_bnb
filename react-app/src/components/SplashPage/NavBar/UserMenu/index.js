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

  console.log(authenticated)

  return (
    <div className="usermenu__container">
      <div ref={anchorRef} className="usermenu__dropdown_button" onClick={openMenu}>
        <i className="fas fa-bars"></i>
        {!authenticated && (
          <i className="fas fa-user-circle"></i>
        )}
        {/* {authenticated && (
          <img src={}
        )} */}
      </div>
      <div className={open ? "usermenu__dropdown" : "usermenu__dropdown--hidden"}>
        {!authenticated && (
          <>
            <LoginFormModal
              authenticated={authenticated}
              setAuthenticated={setAuthenticated}
            />

            <SignUpFormModal
              authenticated={authenticated}
              setAuthenticated={setAuthenticated}
            />

            <hr />
          </>

        )}

        <div className="usermenu__option">
          Host a home
        </div>

        {authenticated && (
          <>
            <LogoutButton
              setAuthenticated={setAuthenticated}
            />
          </>
        )}
      </div>

    </div>
  )
}

/*

      <ul>
        <li>
          <LoginFormModal
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </li>
        <li>
          <SignUpFormModal
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
          <li>
            <LogoutButton setAuthenticated={setAuthenticated} />
          </li>
      </ul>

*/
