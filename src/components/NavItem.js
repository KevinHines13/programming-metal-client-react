import React from "react";

const NavItem = ({selected, title, history, route}) =>
    <li className={"pm-hover nav-item ".concat(selected ? "active": "")}>
        <a className="nav-link" onClick={() => history.push(route)}>{title}</a>
    </li>

export default NavItem;