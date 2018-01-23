import { combineReducers } from 'redux'
import produce from "immer"
import { GET_ALL_CATEGORIES_SUCCESS } from '../constants/actionTypes'
import _ from 'lodash'

const categoryReducer = (state = [ 'All' ], action) =>
  produce(state, draft => {
    if (action.type === GET_ALL_CATEGORIES_SUCCESS) {
        action.categories.forEach(category => {
          draft.push(_.capitalize(category.name))
        })
    }
  })

export default combineReducers({
  categories: categoryReducer
})