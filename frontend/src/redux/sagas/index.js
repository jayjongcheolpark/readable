import {
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
  UPVOTE_TO_COMMENT,
  UPVOTE_TO_COMMENT_SUCCESS,
  DOWNVOTE_TO_COMMENT,
  DOWNVOTE_TO_COMMENT_SUCCESS,
  ADD_POST,
  ADD_POST_SUCCESS,
  DELETE_POST,
  DELETE_POST_SUCCESS,
  GET_POST_BY_ID,
  GET_POST_BY_ID_SUCCESS,
  EDIT_POST_BY_ID,
  EDIT_POST_BY_ID_SUCCESS,
  GET_ALL_COMMENTS_BY_ID,
  GET_ALL_COMMENTS_BY_ID_SUCCESS,
  GET_ALL_COMMENTS_BY_ID_RESET,
  DELETE_COMMENT,
  ADD_COMMENT,
  EDIT_COMMENT,
  EDIT_COMMENT_SUCCESS
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

  posts = yield call(API.getPostsByCategory, action.category)

  yield put({
    type: GET_POSTS_BY_CATEGORY_SUCCESS,
    posts,
    category: action.category
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

function* upVoteToComment(action) {
  const comment = yield call(API.upVoteToComment, action.id)
  yield put({
    type: UPVOTE_TO_COMMENT_SUCCESS,
    comment
  })
}

function* downVoteToComment(action) {
  const comment = yield call(API.downVoteToComment, action.id)
  yield put({
    type: DOWNVOTE_TO_COMMENT_SUCCESS,
    comment
  })
}

function* addPost(action) {
  const post = yield call(API.addPost, action.post)
  yield put({
    type: ADD_POST_SUCCESS,
    post
  })
}

function* deletePost(action) {
  const post = yield call(API.deletePost, action.id)
  yield put({
    type: DELETE_POST_SUCCESS,
    post
  })
}

function* getPostById(action) {
  const post = yield call(API.getPostById, action.id)
  yield put({
    type: GET_POST_BY_ID_SUCCESS,
    post
  })
}

function* editPostById(action) {
  const post = yield call(API.editPostById, action.post)
  yield put({
    type: EDIT_POST_BY_ID_SUCCESS,
    post
  })
}

function* getAllCommentsById(action) {
  const comments = yield call(API.getAllCommentsById, action.id)
  if (comments.length > 0) {
    yield put({
      type: GET_ALL_COMMENTS_BY_ID_SUCCESS,
      comments
    })
  } else {
    yield put({
      type: GET_ALL_COMMENTS_BY_ID_RESET
    })
  }
}

function* deleteComment(action) {
  const comment = yield call(API.deleteComment, action.id)
  const comments = yield call(API.getAllCommentsById, comment.parentId)
  if (comments.length > 0) {
    yield put({
      type: GET_ALL_COMMENTS_BY_ID_SUCCESS,
      comments
    })
  } else {
    yield put({
      type: GET_ALL_COMMENTS_BY_ID_RESET
    })
  }
}

function* addComment(action) {
  const comment = yield call(API.addComment, action.comment)
  const comments = yield call(API.getAllCommentsById, comment.parentId)
  if (comments.length > 0) {
    yield put({
      type: GET_ALL_COMMENTS_BY_ID_SUCCESS,
      comments
    })
  } else {
    yield put({
      type: GET_ALL_COMMENTS_BY_ID_RESET
    })
  }
}

function* editComment(action) {
  const comment = yield call(API.editComment, action.comment)
  yield put({
    type: EDIT_COMMENT_SUCCESS,
    comment
  })
}

const categorySaga = [
  takeLatest(GET_ALL_CATEGORIES, getAllCategories)
]

const postSaga = [
  takeEvery(GET_POSTS_BY_CATEGORY, getPostsByCategory),
  takeEvery(UPVOTE_TO_POST, upVoteToPost),
  takeEvery(DOWNVOTE_TO_POST, downVoteToPost),
  takeLatest(ADD_POST, addPost),
  takeLatest(DELETE_POST, deletePost),
  takeLatest(GET_POST_BY_ID, getPostById),
  takeLatest(EDIT_POST_BY_ID, editPostById)
]

const commentSaga = [
  takeLatest(GET_ALL_COMMENTS_BY_ID, getAllCommentsById),
  takeEvery(UPVOTE_TO_COMMENT, upVoteToComment),
  takeEvery(DOWNVOTE_TO_COMMENT, downVoteToComment),
  takeLatest(DELETE_COMMENT, deleteComment),
  takeLatest(ADD_COMMENT, addComment),
  takeLatest(EDIT_COMMENT, editComment)
]

export default function* rootSaga() {
  yield all([
    ...categorySaga,
    ...postSaga,
    ...commentSaga
  ])
}