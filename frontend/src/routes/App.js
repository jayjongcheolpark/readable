import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Main from './Main'
import PostDetail from './PostDetail'
import FormView from './FormView'
import NotFound from '../components/NotFound/NotFound'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" Component={Main} />
          <Route exact path="/post/:id" component={PostDetail} />
          <Route exact path="/post/new" component={FormView} />
          <Route exact path="/post/edit/:id" component={FormView} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App