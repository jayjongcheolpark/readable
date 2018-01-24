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


