import React from 'react'

import { storiesOf, addDecorator } from '@storybook/react'
import backgrounds from '@storybook/addon-backgrounds'
import Filter from './Filter'

const categories = [ 'All', 'React', 'Redux', 'Udacity' ]
const selectFilter = (filter) => (filter)

storiesOf('Filter', module)
  .addDecorator((story) => <div style={{ margin: '50px'}} >{story()}</div>)
  .addDecorator(backgrounds([
    { name: "white", value: "#ffffff", default: true },
    { name: "twitter", value: "#00aced" },
    { name: "facebook", value: "#3b5998" },
  ]))
  .add('default', () => <Filter selectFilter={selectFilter} categories={categories} />)