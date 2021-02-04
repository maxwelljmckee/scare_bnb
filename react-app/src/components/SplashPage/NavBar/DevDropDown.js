import { Dropdown } from "react-bootstrap";
import React from "react";

export default function DevDropDown() {
  return (
    //inside of return
    <div className="dropdown">
      <Dropdown>
        <Dropdown.Toggle variant="secondary btn-sm" id="dropdown-basic" style={{ backgroundColor: "white", color: "black" , fontFamily: "Roboto", borderRadius: "30px" }}>
          Meet the Devs!
        </Dropdown.Toggle>

        <Dropdown.Menu style={{ backgroundColor: "white", color: "black" , fontFamily: "Roboto",borderRadius: "30px" }}>
          <Dropdown.Item href="https://github.com/pgjessee/">Peter Jessee</Dropdown.Item>
          <Dropdown.Item href="https://mmckee-dev.com/">Maxwell McKee</Dropdown.Item>
          <Dropdown.Item href="#">Sam Stark</Dropdown.Item>
          <Dropdown.Item href="#">Mathias Anderson</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
