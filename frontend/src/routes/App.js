import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Filter from '../components/FIlter/Filter'

class App extends Component {
  selectFilter = (filter) => {
    console.log(filter)
  }
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() =>
            <Filter
              selectFilter={this.selectFilter}
              categories={[ 'All', 'React', 'Redux', 'Udacity' ]}
            />
          } />
          { /*
          <Route exact path="/search" component={Search} />
          <Route component={NotFound} />
          */ }
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App