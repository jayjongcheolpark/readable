import {
  fork,
  put,
  call,
  all,
  takeLatest
} from 'redux-saga/effects'

import {
  GET_ALL_CATEGORIES,
  GET_ALL_CATEGORIES_SUCCESS,
  GET_POSTS_BY_CATEGORY,
  GET_POSTS_BY_CATEGORY_SUCCESS
} from '../constants/actionTypes'

import * as API from '../../utils/api'

export function* getAllCategories() {
  const categories = yield call(API.getAllCategories)
  categories.unshift({ name: 'all' })
  yield put({
    type: GET_ALL_CATEGORIES_SUCCESS,
    categories
  })
}

export function* getPostsByCategory(action) {
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

export function* watchGetAllCategories() {
  yield takeLatest(GET_ALL_CATEGORIES, getAllCategories)
}

export function* watchGetPostsByCategory() {
  yield takeLatest(GET_POSTS_BY_CATEGORY, getPostsByCategory)
}

export default function* rootSaga() {
  yield all([
    fork(watchGetAllCategories),
    fork(watchGetPostsByCategory)
  ])
}