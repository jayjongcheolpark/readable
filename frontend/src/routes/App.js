import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Main from './Main'
import PostDetailView from './PostDetailView'
import FormView from './FormView'
import NotFound from '../components/NotFound/NotFound'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/post/new" component={FormView} />
          <Route exact path="/post/:id" component={PostDetailView} />
          <Route exact path="/post/edit/:id" component={FormView} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App