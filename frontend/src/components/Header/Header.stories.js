import React from 'react'
import { MemoryRouter } from 'react-router-dom'

import { storiesOf, addDecorator } from '@storybook/react'
import backgrounds from '@storybook/addon-backgrounds'
import Header from './Header'

storiesOf('Header', module)
  .addDecorator((story) => <div style={{ margin: '50px'}} >{story()}</div>)
  .addDecorator(backgrounds([
    { name: "white", value: "#ffffff", default: true },
    { name: "twitter", value: "#00aced" },
    { name: "facebook", value: "#3b5998" },
  ]))
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
))
  .add('default', () => <Header />)