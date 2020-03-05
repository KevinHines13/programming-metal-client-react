import React from "react";
import PagesComponent from "../components/PagesComponent";
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

class WebsiteContainer extends React.Component {
    render = () =>
        <div>
            <Router>
                <Route path="/"
                       exact
                       render={() => <Redirect to="/home"/>}
                />

                <Route path="/home"
                       exact
                       render={(props) => <PagesComponent {...props} page={"home"}/>}
                />
                <Route path="/pricing"
                       exact
                       render={(props) => <PagesComponent {...props} page={"pricing"}/>}
                />
            </Router>
        </div>
}

export default WebsiteContainer;