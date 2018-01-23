import {
  fork,
  put,
  call,
  all,
  takeLatest
} from 'redux-saga/effects'

import {
  GET_ALL_CATEGORIES,
  GET_ALL_CATEGORIES_SUCCESS
} from '../constants/actionTypes'

import * as API from '../../utils/api'

export function* getAllCategories() {
  const categories = yield call(API.getAllCategories)
  yield put({
    type: GET_ALL_CATEGORIES_SUCCESS,
    categories
  })
}

export function* watchGetAllCategories() {
  yield takeLatest(GET_ALL_CATEGORIES, getAllCategories)
}

export default function* rootSaga() {
  yield all([
    fork(watchGetAllCategories)
  ])
}