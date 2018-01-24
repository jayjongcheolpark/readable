import React from 'react'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducers from '../../redux/reducers'
import rootSaga from '../../redux/sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

import { storiesOf, addDecorator } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import backgrounds from '@storybook/addon-backgrounds'
import PostList from './PostList'

const defaultData = [
  {
    id: '8xf0y6ziyjabvozdd253nd',
    timestamp: 1467166872634,
    title: 'Udacity is the best place to learn React',
    body: 'Everyone says so after all.',
    author: 'thingtwo',
    category: 'react',
    voteScore: 6,
    deleted: false,
    commentCount: 2
  },
  {
    id: '6ni6ok3ym7mf1p33lnez',
    timestamp: 1468479767190,
    title: 'Learn Redux in 10 minutes!',
    body: 'Just kidding. It takes more than 10 minutes to learn technology.',
    author: 'thingone',
    category: 'redux',
    voteScore: -5,
    deleted: false,
    commentCount: 0
  }
]


storiesOf('PostList', module)
  .addDecorator((story) => <div style={{ margin: '50px'}}>{story()}</div>)
  .addDecorator(backgrounds([
    { name: "white", value: "#ffffff", default: true },
    { name: "twitter", value: "#00aced" },
    { name: "facebook", value: "#3b5998" },
  ]))
  .addDecorator((getStory) => (
    <Provider store={store}>
      { getStory() }
    </Provider>
 ))
  .add('default', () =>
    <PostList
      posts={defaultData}
      filter={'all'}
    />
  )