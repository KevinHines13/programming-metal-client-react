import React from "react";
import NavComponent from "./NavComponent";
import HomePage from "./HomePage";
import PricingPage from "./PricingPage";

class PagesComponent extends React.Component {

    render = () => {
        return (
            <div>
                <NavComponent page={this.props.page} history={this.props.history}/>
                {
                    this.props.page === "home" && <HomePage/>
                }
                {
                    this.props.page === "pricing" && <PricingPage/>
                }
            </div>
        )
    }

}

export default PagesComponent;