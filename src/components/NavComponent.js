import React from "react";

import "./NavComponent.css"
import NavItem from "./NavItem";

const NavComponent = ({page, history}) =>
    <nav className="navbar navbar-expand-md static-top navbar-dark bg-primary">
        <div className="navbar-brand text-truncate pm-hover font-weight-bolder"
             onClick={() => history.push("/home")}>
            Programming Metal
        </div>

        <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#mainNavbar">
            <span className="navbar-toggler-icon"/>
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav mr-auto">
                <NavItem selected={page === "home"}
                         history={history}
                         route="/home"
                         title="Home"
                />
                <NavItem selected={page === "pricing"}
                         history={history}
                         route="/pricing"
                         title="Pricing"
                />
            </ul>
        </div>
    </nav>

export default NavComponent;