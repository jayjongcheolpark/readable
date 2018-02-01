import { combineReducers } from 'redux'
import {
  GET_ALL_CATEGORIES_SUCCESS,
  GET_POSTS_BY_CATEGORY_SUCCESS,
  UPVOTE_TO_POST_SUCCESS,
  DOWNVOTE_TO_POST_SUCCESS,
  ADD_POST_SUCCESS,
  DELETE_POST_SUCCESS,
  GET_POST_BY_ID_SUCCESS,
  EDIT_POST_BY_ID_SUCCESS,
  GET_ALL_COMMENTS_BY_ID_SUCCESS,
  GET_ALL_COMMENTS_BY_ID_RESET,
} from '../constants/actionTypes'

const categoryReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_CATEGORIES_SUCCESS:
      let array = []
      action.categories.forEach(category => {
        array.push(category.name)
      })
      return array
    default:
      return state
  }
}
const postsReducer = (state = [], action) => {
  switch (action.type) {
      case GET_POSTS_BY_CATEGORY_SUCCESS:
        const resetState = state.filter(post => post.category !== action.category)
        return [ ...resetState, ...action.posts]
      case UPVOTE_TO_POST_SUCCESS:
      case DOWNVOTE_TO_POST_SUCCESS:
        const newState = state.map(post => {
          if (post.id === action.post.id) {
            return action.post
          }
          return post
        })
        return [ ...newState ]
      case ADD_POST_SUCCESS:
        return [ ...state, action.post ]
      case DELETE_POST_SUCCESS:
        const rest = state.filter(post => {
          return post.id !== action.post.id
        })
        return [ ...rest ]
      case EDIT_POST_BY_ID_SUCCESS:
        const copyState = state.map(post => {
          if (post.id === action.post.id) {
            return action.post
          }
          return post
        })
        return [...copyState]
      default:
        return state
  }
}

const postReducer = (state = {}, action) => {
  switch (action.type) {
      case GET_POST_BY_ID_SUCCESS:
        return { ...action.post }
      default:
        return state
  }
}

const commentsReducer = (state = [], action) => {
  switch (action.type) {
      case GET_ALL_COMMENTS_BY_ID_SUCCESS:
        return [ ...action.comments ]
      case GET_ALL_COMMENTS_BY_ID_RESET:
        return []
      default:
        return state
  }
}

export default combineReducers({
  categories: categoryReducer,
  posts: postsReducer,
  post: postReducer,
  comments: commentsReducer
})