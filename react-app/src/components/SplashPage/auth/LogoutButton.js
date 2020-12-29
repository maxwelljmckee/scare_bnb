import React from "react";
import { logout } from "../../../services/auth";

const LogoutButton = ({ setAuthenticated }) => {
  const onLogout = async (e) => {
    await logout();
    setAuthenticated(false);
  };

  return <div className="usermenu__option" onClick={onLogout}>Logout</div>;
};

export default LogoutButton;
