import React from 'react'

import { storiesOf, addDecorator } from '@storybook/react'
import backgrounds from '@storybook/addon-backgrounds'
import CategoryBadge from './CategoryBadge'


storiesOf('CategoryBadge', module)
  .addDecorator((story) => <div style={{ margin: '50px'}} >{story()}</div>)
  .addDecorator(backgrounds([
    { name: "white", value: "#ffffff", default: true },
    { name: "twitter", value: "#00aced" },
    { name: "facebook", value: "#3b5998" },
  ]))
  .add('default', () =>
    <CategoryBadge
      category="react"
    />
  )