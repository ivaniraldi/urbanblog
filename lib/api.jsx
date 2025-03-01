import axios from "axios"

// Configuración base de axios
const api = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
})

// Funciones para obtener datos
export const getPosts = async () => {
  try {
    const response = await api.get("/posts")
    return response.data
  } catch (error) {
    console.error("Error fetching posts:", error)
    return []
  }
}

export const getPostById = async (id) => {
  try {
    const response = await api.get(`/posts/${id}`)
    return response.data
  } catch (error) {
    console.error(`Error fetching post with id ${id}:`, error)
    return null
  }
}

export const getFeaturedPosts = async () => {
  try {
    const response = await api.get("/posts")
    return response.data.filter((post) => post.destacado)
  } catch (error) {
    console.error("Error fetching featured posts:", error)
    return []
  }
}

export const getCommentsByPostId = async (postId) => {
  try {
    const response = await api.get(`/comments?postId=${postId}`)
    return response.data
  } catch (error) {
    console.error(`Error fetching comments for post ${postId}:`, error)
    return []
  }
}

export const submitContactForm = async (formData) => {
  try {
    const response = await api.post("/contact", formData)
    return { success: true, data: response.data }
  } catch (error) {
    console.error("Error submitting contact form:", error)
    return { success: false, error: error.message }
  }
}

