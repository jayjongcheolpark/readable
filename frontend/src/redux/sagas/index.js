import {
  fork,
  put,
  call,
  all,
  takeLatest,
  takeEvery
} from 'redux-saga/effects'

import {
  GET_ALL_CATEGORIES,
  GET_ALL_CATEGORIES_SUCCESS,
  GET_POSTS_BY_CATEGORY,
  GET_POSTS_BY_CATEGORY_SUCCESS,
  UPVOTE_TO_POST,
  UPVOTE_TO_POST_SUCCESS,
  DOWNVOTE_TO_POST,
  DOWNVOTE_TO_POST_SUCCESS,
} from '../constants/actionTypes'

import * as API from '../../utils/api'

function* getAllCategories() {
  const categories = yield call(API.getAllCategories)
  categories.unshift({ name: 'all' })
  yield put({
    type: GET_ALL_CATEGORIES_SUCCESS,
    categories
  })
}

function* getPostsByCategory(action) {
  let posts

  if (action.category === 'all') {
    const react = yield call(API.getPostsByCategory, 'react')
    const redux = yield call(API.getPostsByCategory, 'redux')
    const udacity = yield call(API.getPostsByCategory, 'udacity')
    posts = [ ...react, ...redux, ...udacity ]
  } else {
    posts = yield call(API.getPostsByCategory, action.category)
  }

  yield put({
    type: GET_POSTS_BY_CATEGORY_SUCCESS,
    posts
  })
}

function* upVoteToPost(action) {
  const post = yield call(API.upVoteToPost, action.id)
  yield put({
    type: UPVOTE_TO_POST_SUCCESS,
    post
  })
}

function* downVoteToPost(action) {
  const post = yield call(API.downVoteToPost, action.id)
  yield put({
    type: DOWNVOTE_TO_POST_SUCCESS,
    post
  })

}

function* watchGetAllCategories() {
  yield takeLatest(GET_ALL_CATEGORIES, getAllCategories)
}

function* watchGetPostsByCategory() {
  yield takeLatest(GET_POSTS_BY_CATEGORY, getPostsByCategory)
}

function* watchUpVoteToPost() {
  yield takeEvery(UPVOTE_TO_POST, upVoteToPost)
}

 function* watchDownVoteToPost() {
  yield takeEvery(DOWNVOTE_TO_POST, downVoteToPost)
}

export default function* rootSaga() {
  yield all([
    fork(watchGetAllCategories),
    fork(watchGetPostsByCategory),
    fork(watchUpVoteToPost),
    fork(watchDownVoteToPost)
  ])
}