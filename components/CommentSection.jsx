"use client"

import { useState, useEffect } from "react"
import axios from "axios"
import { motion } from "framer-motion"
import { MessageSquare, Send } from "lucide-react"

export default function CommentSection({ postId }) {
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(true)
  const [newComment, setNewComment] = useState({
    author: "",
    comment: "",
  })
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`/api/comments?postId=${postId}`)
        setComments(response.data)
        setLoading(false)
      } catch (error) {
        console.error("Erro ao buscar comentários:", error)
        setLoading(false)
      }
    }

    fetchComments()
  }, [postId])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!newComment.author.trim() || !newComment.comment.trim()) return // Validação mais robusta

    setSubmitting(true)
    try {
      // Em um ambiente real, enviaria o comentário ao backend
      // const response = await axios.post('/api/comments', {
      //   ...newComment,
      //   postId,
      //   date: new Date().toISOString()
      // });

      // Simulação de resposta
      const fakeResponse = {
        id: Date.now(),
        postId,
        author: newComment.author,
        comment: newComment.comment,
        date: new Date().toISOString(),
      }

      setComments((prev) => [...prev, fakeResponse]) // Usando função de atualização para melhor performance
      setNewComment({ author: "", comment: "" })
    } catch (error) {
      console.error("Erro ao enviar comentário:", error)
    } finally {
      setSubmitting(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setNewComment((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="mt-10">
      <h3 className="subtitle flex items-center gap-2 mb-6">
        <MessageSquare className="text-urban" />
        Comentários
      </h3>

      {loading ? (
        <p className="text-center py-4">Carregando comentários...</p>
      ) : comments.length === 0 ? (
        <p className="text-center py-4 text-gray-400">Ainda não há comentários. Seja o primeiro a comentar!</p>
      ) : (
        <div className="space-y-4 mb-8">
          {comments.map((comment) => (
            <motion.div
              key={comment.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }} // Ajustado para animação mais rápida
              className="bg-dark bg-opacity-60 border border-spray p-4 rounded-lg"
            >
              <div className="flex justify-between mb-2">
                <h4 className="font-bold text-spray">{comment.author}</h4>
                <span className="text-sm text-gray-400">
                  {new Date(comment.date).toLocaleDateString("pt-BR")} {/* Formato de data em PT-BR */}
                </span>
              </div>
              <p className="text-gray-300">{comment.comment}</p>
            </motion.div>
          ))}
        </div>
      )}

      <form onSubmit={handleSubmit} className="border-t border-gray-700 pt-6">
        <h4 className="text-xl font-bold mb-4">Deixe seu comentário</h4>
        <div className="mb-4">
          <label htmlFor="author" className="block mb-2">
            Nome
          </label>
          <input
            type="text"
            id="author"
            name="author"
            value={newComment.author}
            onChange={handleChange}
            required
            className="w-full rounded-md" // Adicionado arredondamento padrão
            disabled={submitting} // Desabilitado durante envio
          />
        </div>
        <div className="mb-4">
          <label htmlFor="comment" className="block mb-2">
            Comentário
          </label>
          <textarea
            id="comment"
            name="comment"
            value={newComment.comment}
            onChange={handleChange}
            required
            rows="4"
            className="w-full rounded-md" // Adicionado arredondamento padrão
            disabled={submitting} // Desabilitado durante envio
          />
        </div>
        <button
          type="submit"
          disabled={submitting}
          className="btn bg-neon hover:bg-pink-600 flex items-center gap-2"
        >
          <Send size={16} />
          {submitting ? "Enviando..." : "Enviar Comentário"}
        </button>
      </form>
    </div>
  )
}