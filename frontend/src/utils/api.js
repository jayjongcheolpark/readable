import axios from 'axios'
import uuid from 'node-uuid'

const headers = {
  'Accept': 'application/json',
  'Authorization': 'ReadableJay'
}

export async function getAllCategories() {
  const res = await axios.get(`/categories`, { headers })
  return res.data.categories
}

export async function getPostsByCategory(category) {
  const res = await axios.get(`/${category}/posts`, { headers })
  return res.data
}

export async function upVoteToPost(id) {
  const res = await axios.post(`/posts/${id}`, {
    option: "upVote"
  }, { headers })

  return res.data
}

export async function downVoteToPost(id) {
  const res = await axios.post(`/posts/${id}`, {
    option: "downVote"
  }, { headers })

  return res.data
}

export async function addPost({ category, title, body, author }) {
  const id = uuid.v1
  const timestamp = Date.now()
  const res = await axios.post(`/posts`, {
    id, timestamp, title, body, author, category
  }, { headers })

  return res.data
}

