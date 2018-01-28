import React from 'react'

import { storiesOf, addDecorator } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import backgrounds from '@storybook/addon-backgrounds'
import CloseButton from './CloseButton'

storiesOf('CloseButton', module)
  .addDecorator((story) => <div style={{ margin: '50px'}} >{story()}</div>)
  .addDecorator(backgrounds([
    { name: "white", value: "#ffffff", default: true },
    { name: "twitter", value: "#00aced" },
    { name: "facebook", value: "#3b5998" },
  ]))
  .add('default', () =>
    <CloseButton
      closeStyle="close text-muted"
      toggleHover={action('hovered')}
      handleDeletePost={action('deleted')}
    />
  )
  .add('hover', () =>
    <CloseButton
      closeStyle="close text-danger"
      toggleHover={action('hovered')}
      handleDeletePost={action('deleted')}
    />
  )