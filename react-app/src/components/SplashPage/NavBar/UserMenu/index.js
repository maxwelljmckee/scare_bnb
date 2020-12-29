import React, { useState } from 'react'

export default function UserMenu({ authenticated, setAuthenticated }) {



  return (
    <div className="usermenu__dropdown_button">
      <i class="fas fa-user"></i>
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
