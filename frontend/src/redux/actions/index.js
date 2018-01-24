import {
  GET_ALL_CATEGORIES,
  GET_POSTS_BY_CATEGORY
} from '../constants/actionTypes'

export const getAllCategories = () => ({
  type: GET_ALL_CATEGORIES
})

export const getPostsByCategory = (category) => ({
  type: GET_POSTS_BY_CATEGORY,
  category
})