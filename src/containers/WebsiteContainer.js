import React from "react";
import PagesComponent from "../components/PagesComponent";
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

class WebsiteContainer extends React.Component {
    render = () =>
        <div>
            <Router basename={process.env.PUBLIC_URL}>
                <Route path="/"
                       exact
                       render={() => {
                           let path = localStorage.getItem('path');
                           console.log(path)
                           console.log(process.env.PUBLIC_URL)
                           if (path && process.env.PUBLIC_URL) {
                               path = path.split('/')[2];
                               console.log(path)
                               localStorage.removeItem('path');
                               return <Redirect to={path}/>
                           } else {
                               return <Redirect to="/home"/>
                           }
                       }}
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