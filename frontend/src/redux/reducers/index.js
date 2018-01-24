import { combineReducers } from 'redux'
import produce from "immer"
import {
  GET_ALL_CATEGORIES_SUCCESS,
  GET_POSTS_BY_CATEGORY_SUCCESS,
  UPVOTE_TO_POST_SUCCESS,
  DOWNVOTE_TO_POST_SUCCESS
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
        break
      case UPVOTE_TO_POST_SUCCESS:
      case DOWNVOTE_TO_POST_SUCCESS:
        if (draft.length > 0) {
          let index = 0
          draft.forEach(post => {
            if(post.id === action.post.id) {
              draft[index] = action.post
            }
            index++
          })
        }
        break
    }
  })

export default combineReducers({
  categories: categoryReducer,
  posts: postReducer
})