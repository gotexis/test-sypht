import React from "react"
// eslint-disable-next-line import/no-extraneous-dependencies
import { Route, Switch } from "react-router-dom"
import Dashboard from "./Dashboard"
import Default from "../layouts/Default"
import Upload from "./Upload"
import Documents from "./Documents"
import Detail from "./Detail";

export default function App() {
  return (
    <Switch>
      <Route>
        <Default>
          <Route path="/" component={Dashboard} exact />
          <Route path="/upload" component={Upload} />
          <Route path="/documents" component={Documents} />
          <Route path="/document/:id" component={Detail} />
        </Default>
      </Route>
    </Switch>
  )
}
