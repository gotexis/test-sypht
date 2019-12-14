import React from "react";
import {Route, Switch} from "react-router-dom";
import Dashboard from "views/Dashboard";
import Default from "../layouts/Default";
import Upload from "./Upload";


export default function App() {
    return (
        <Switch>
            <Route path="/about" component={About}/>
            <Route path="/users">
                <Users/>
            </Route>
            <Route>
              <Default>
                <Route path="/" component={Dashboard} exact />
                <Route path="/form" component={Upload}/>
              </Default>
            </Route>
        </Switch>
    );
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}
