import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          { /*
          <Route exact path="/" component={ListBooks} />
          <Route exact path="/search" component={Search} />
          <Route component={NotFound} />
          */ }
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App