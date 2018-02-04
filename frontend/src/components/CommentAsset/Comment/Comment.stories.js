import React from 'react'

import { storiesOf, addDecorator } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import backgrounds from '@storybook/addon-backgrounds'
import Comment from './Comment'

const comment = {
  id: '894tuq4ut84ut8v4t8wun89g',
  parentId: "8xf0y6ziyjabvozdd253nd",
  timestamp: 1468166872634,
  body: 'Hi there! I am a COMMENT.',
  author: 'thingtwo',
  voteScore: 6,
  deleted: false,
  parentDeleted: false
}
const comment10 = {
  id: '894tuq4ut84ut8v4t8wun89g',
  parentId: "8xf0y6ziyjabvozdd253nd",
  timestamp: 1468166872634,
  body: 'Hi there! I am a COMMENT.',
  author: 'thingtwo',
  voteScore: 10,
  deleted: false,
  parentDeleted: false
}
storiesOf('Comment', module)
  .addDecorator((story) => <div style={{ margin: '50px'}} >{story()}</div>)
  .addDecorator(backgrounds([
    { name: "white", value: "#ffffff", default: true },
    { name: "twitter", value: "#00aced" },
    { name: "facebook", value: "#3b5998" },
  ]))
  .add('less than 10', () =>
    <Comment
      key={comment.id}
      comment={comment}
      upVote={action('up')}
      downVote={action('down')}
      deleteComment={action('delete')}
    />
  )
  .add('10 or more', () =>
    <Comment
      key={comment.id}
      comment={comment10}
      upVote={action('up')}
      downVote={action('down')}
      deleteComment={action('delete')}
    />
  )