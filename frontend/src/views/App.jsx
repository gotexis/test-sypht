import React from "react"
// eslint-disable-next-line import/no-extraneous-dependencies
import { Route, Switch } from "react-router-dom"
import Dashboard from "./Dashboard"
import Default from "../layouts/Default"
import Form from "./Form"

export default function App() {
  return (
    <Switch>
      <Route>
        <Default>
          <Route path="/" component={Dashboard} exact />
          <Route path="/form" component={Form} />
        </Default>
      </Route>
    </Switch>
  )
}
