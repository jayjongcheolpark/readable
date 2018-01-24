import axios from 'axios'

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
  }, {
    headers
  })
  return res.data
}

export async function downVoteToPost(id) {
  const res = await axios.post(`/posts/${id}`, {
    option: "downVote"
  }, {
    headers
  })
  return res.data
}


