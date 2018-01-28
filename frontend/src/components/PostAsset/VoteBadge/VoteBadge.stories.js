import React from 'react'

import { storiesOf, addDecorator } from '@storybook/react'
import backgrounds from '@storybook/addon-backgrounds'
import VoteBadge from './VoteBadge'

storiesOf('VoteBadge', module)
  .addDecorator((story) => <div style={{ margin: '50px'}} >{story()}</div>)
  .addDecorator(backgrounds([
    { name: "white", value: "#ffffff", default: true },
    { name: "twitter", value: "#00aced" },
    { name: "facebook", value: "#3b5998" },
  ]))
  .add('less than 10', () =>
    <VoteBadge
      voteScore="9"
    />
  )
  .add('10 or more', () =>
    <VoteBadge
      voteScore="10"
    />
  )