import React from "react";
import { Dropdown } from "react-bootstrap";

export default function DevDropDown() {
  return (
    //inside of return
    <div className="dropdown">
      <Dropdown>
        <Dropdown.Toggle variant="secondary btn-sm" id="dropdown-basic" style={{ backgroundColor: "white", color: "black" , fontFamily: "Roboto", borderRadius: "30px", border: '1px solid lightgrey' }}>
          Meet the Devs!
        </Dropdown.Toggle>

        <Dropdown.Menu style={{ backgroundColor: "white", color: "black" , fontFamily: "Roboto",borderRadius: "10px" }}>
          <Dropdown.Item target='_blank' href="https://pgjessee.github.io">Peter Jessee</Dropdown.Item>
          <Dropdown.Item target='_blank' href="https://mmckee-dev.com/">Maxwell McKee</Dropdown.Item>
          <Dropdown.Item target='_blank' href="https://www.samstark.me">Sam Stark</Dropdown.Item>
          <Dropdown.Item target='_blank' href="https://www.blewishbear.github.io/mathiasanderson.github.io/linkedin.com/in/mathias-anderson-42167b137/">Mathias Anderson</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
