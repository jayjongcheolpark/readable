import React from 'react'

import { storiesOf, addDecorator } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import backgrounds from '@storybook/addon-backgrounds'
import RadioButton from './RadioButton'

storiesOf('RadioButton', module)
  .addDecorator((story) => <div style={{ margin: '50px'}} >{story()}</div>)
  .addDecorator(backgrounds([
    { name: "white", value: "#ffffff", default: true },
    { name: "twitter", value: "#00aced" },
    { name: "facebook", value: "#3b5998" },
  ]))
  .add('default', () =>
    <div
      className="btn-group btn-group-toggle mb-4"
      data-toggle="buttons"
    >
      <RadioButton
        name="categories"
        category="react"
        handleChange={action("clicked")}
        checked={false}
      />
    </div>
  )
  .add('checked', () =>
    <div
      className="btn-group btn-group-toggle mb-4"
      data-toggle="buttons"
    >
      <RadioButton
        name="categories"
        category="react"
        handleChange={action("clicked")}
        checked={true}
      />
    </div>
  )