import axios from 'axios'

const headers = {
  'Accept': 'application/json',
  'Authorization': 'ReadableJay'
}

export async function getAllCategories() {
  try {
    const res = await axios.get(`/categories`, { headers })
    return res.data.categories
  } catch (e) {
    console.log(e)
    return []
  }
}


