import { combineReducers } from 'redux'
import produce from "immer"
import {
  GET_ALL_CATEGORIES_SUCCESS,
  GET_POSTS_BY_CATEGORY_SUCCESS
} from '../constants/actionTypes'

const categoryReducer = (state = [], action) =>
  produce(state, draft => {
    if (action.type === GET_ALL_CATEGORIES_SUCCESS) {
      let index = 0
      action.categories.forEach(category =>
        draft[index++] = category.name
      )
    }
  })

const postReducer = (state = [], action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_POSTS_BY_CATEGORY_SUCCESS:
        let index = 0
        action.posts.forEach(post =>
          draft[index++] = post
        )
    }
  })

export default combineReducers({
  categories: categoryReducer,
  posts: postReducer
})