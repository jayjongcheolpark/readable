import React from 'react'

import { storiesOf, addDecorator } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import backgrounds from '@storybook/addon-backgrounds'
import PostForm from './PostForm'

storiesOf('PostForm', module)
  .addDecorator((story) => <div style={{ margin: '50px'}} >{story()}</div>)
  .addDecorator(backgrounds([
    { name: "white", value: "#ffffff", default: true },
    { name: "twitter", value: "#00aced" },
    { name: "facebook", value: "#3b5998" },
  ]))
  .add('default', () =>
    <PostForm
      categories={["all", "react", "redux", "udacity"]}
      addPost={action('submitted')}
    />)