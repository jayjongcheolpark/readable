import React from 'react'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { MemoryRouter } from 'react-router-dom'

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
import Post from './Post'
import './Post.css'


const defaultData = {
  id: '8xf0y6ziyjabvozdd253nd',
  timestamp: 1467166872634,
  title: 'Udacity is the best place to learn React',
  body: 'Everyone says so after all.',
  author: 'thingtwo',
  category: 'react',
  voteScore: 6,
  deleted: false,
  commentCount: 2
}

storiesOf('Post', module)
  .addDecorator((story) => <div style={{ margin: '50px'}}>{story()}</div>)
  .addDecorator(backgrounds([
    { name: "white", value: "#ffffff", default: true },
    { name: "twitter", value: "#00aced" },
    { name: "facebook", value: "#3b5998" },
  ]))
  .addDecorator((getStory) => (
    <Provider store={store}>
      <MemoryRouter initialEntries={['/']}>
      { getStory() }
      </MemoryRouter>
    </Provider>
 ))
  .add('default', () =>
    <Post
      post={defaultData}
    />
  )