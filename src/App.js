/* eslint-disable react/prop-types */
import React from 'react'
import { Route, Switch } from 'react-router-dom'

const CreateUserPage = React.lazy(() => import('./pages/CreateUserPage'))
const UpdateUserPage = React.lazy(() => import('./pages/UpdateUserPage'))

const App = () => (
  <Switch>
    <Route path="/create"><CreateUserPage /></Route>
    <Route path="/update"><UpdateUserPage /></Route>
  </Switch>
)

export default App
