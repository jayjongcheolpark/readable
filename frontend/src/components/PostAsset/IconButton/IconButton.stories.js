import React from 'react'

import { storiesOf, addDecorator } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import backgrounds from '@storybook/addon-backgrounds'
import IconButton from './IconButton'

storiesOf('IconButton', module)
  .addDecorator((story) => <div style={{ margin: '50px'}} >{story()}</div>)
  .addDecorator(backgrounds([
    { name: "white", value: "#ffffff", default: true },
    { name: "twitter", value: "#00aced" },
    { name: "facebook", value: "#3b5998" },
  ]))
  .add('upvote', () =>
    <IconButton
      buttonClass="btn btn-outline-primary"
      iconClass="fa fa-thumbs-o-up"
      clickHandler={action('clicked')}
    />
  )
  .add('downvote', () =>
    <IconButton
      buttonClass="btn btn-outline-secondary"
      iconClass="fa fa-thumbs-o-down"
      clickHandler={action('clicked')}
    />
  )