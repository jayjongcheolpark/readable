import { combineReducers } from 'redux'
import produce from "immer"
import { GET_ALL_CATEGORIES_SUCCESS } from '../constants/actionTypes'

const categoryReducer = (state = [ 'ALL' ], action) =>
  produce(state, draft => {
    if (action.type === GET_ALL_CATEGORIES_SUCCESS) {
        action.categories.forEach(category => {
          draft.push(category.name.toUpperCase())
        })
    }
  })

export default combineReducers({
  categories: categoryReducer
})