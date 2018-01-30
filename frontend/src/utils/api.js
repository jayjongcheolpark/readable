import axios from 'axios'
import uuidV1 from 'uuid/v1'

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
  const id = uuidV1()
  const timestamp = Date.now()
  const res = await axios.post(`/posts`, {
    id, timestamp, title, body, author, category
  }, { headers })

  return res.data
}

export async function deletePost(id) {
  const res = await axios.delete(`/posts/${id}`, { headers })

  return res.data
}

export async function getPostById(id) {
  const res = await axios.get(`/posts/${id}`, { headers })

  return res.data
}

export async function editPostById({ id, title, body }) {
  const res = await axios.put(`/posts/${id}`, {
    title, body
  }, { headers })

  return res.data
}

export async function getAllCommentsById(id) {
  const res = await axios.get(`/posts/${id}/comments`, {
    headers
  })

  return res.data
}

