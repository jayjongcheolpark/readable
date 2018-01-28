import {
  GET_ALL_CATEGORIES,
  GET_POSTS_BY_CATEGORY,
  UPVOTE_TO_POST,
  DOWNVOTE_TO_POST,
  UPVOTE_TO_COMMENT,
  DOWNVOTE_TO_COMMENT,
  ADD_POST,
  DELETE_POST,
  GET_POST_BY_ID
} from '../constants/actionTypes'

export const getAllCategories = () => ({
  type: GET_ALL_CATEGORIES
})

export const getPostsByCategory = (category) => ({
  type: GET_POSTS_BY_CATEGORY,
  category
})

export const upVoteToPost = (id) => ({
  type: UPVOTE_TO_POST,
  id
})

export const downVoteToPost = (id) => ({
  type: DOWNVOTE_TO_POST,
  id
})

export const upVoteToComment = (id) => ({
  type: UPVOTE_TO_COMMENT,
  id
})

export const downVoteToComment = (id) => ({
  type: DOWNVOTE_TO_COMMENT,
  id
})

export const addPost = (post) => ({
  type: ADD_POST,
  post
})

export const deletePost = (id) => ({
  type: DELETE_POST,
  id
})

export const getPostById = (id) => ({
  type: GET_POST_BY_ID,
  id
})