import React from 'react'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducers from '../../../redux/reducers'
import rootSaga from '../../../redux/sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

import { storiesOf, addDecorator } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import backgrounds from '@storybook/addon-backgrounds'
import CommentList from './CommentList'

const comments = [{
  id: '894tuq4ut84ut8v4t8wun89g',
  parentId: "8xf0y6ziyjabvozdd253nd",
  timestamp: 1468166872634,
  body: 'Hi there! I am a COMMENT.',
  author: 'thingtwo',
  voteScore: 6,
  deleted: false,
  parentDeleted: false
},
{
  id: '8tu4bsun805n8un48ve89',
  parentId: "8xf0y6ziyjabvozdd253nd",
  timestamp: 1469479767190,
  body: 'Comments. Are. Cool.',
  author: 'thingone',
  voteScore: -5,
  deleted: false,
  parentDeleted: false
}]

storiesOf('CommentList', module)
  .addDecorator((story) => <div style={{ margin: '50px'}} >{story()}</div>)
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
    <CommentList
      comments={comments}
    />
  )