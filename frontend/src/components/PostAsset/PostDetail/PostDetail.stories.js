import React from 'react'
import { MemoryRouter } from 'react-router-dom'

import { storiesOf, addDecorator } from '@storybook/react'
import backgrounds from '@storybook/addon-backgrounds'
import PostDetail from './PostDetail'

const postVote9 = {
  id: 'dfjkdfd890u38782hjh2d8',
  timestamp: 1568479768000,
  title: 'React Nanodegree Program',
  body: "For the Readable project, you will build a content and comment web app. Users will be able to post content to predefined categories, comment on their posts and other users' posts, and vote on posts and comments. Users will also be able to edit and delete posts and comments.",
  author: 'mentor',
  category: 'udacity',
  voteScore: 9,
  deleted: false,
  commentCount: 0
}

const postVote12 = {
  id: 'dfjkdfd890u38782hjh2d8',
  timestamp: 1568479768000,
  title: 'React Nanodegree Program',
  body: "For the Readable project, you will build a content and comment web app. Users will be able to post content to predefined categories, comment on their posts and other users' posts, and vote on posts and comments. Users will also be able to edit and delete posts and comments.",
  author: 'mentor',
  category: 'udacity',
  voteScore: 12,
  deleted: false,
  commentCount: 0
}
storiesOf('PostDetail', module)
  .addDecorator((story) => <div style={{ margin: '50px'}} >{story()}</div>)
  .addDecorator(backgrounds([
    { name: "white", value: "#ffffff", default: true },
    { name: "twitter", value: "#00aced" },
    { name: "facebook", value: "#3b5998" },
  ]))
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('vote: less than 10', () =>
    <PostDetail
      post={postVote9}
    />
  )
  .add('vote: 10 or more', () =>
    <PostDetail
      post={postVote12}
    />
  )