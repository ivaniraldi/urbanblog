"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import PostCard from "@/components/PostCard"

// Dados de exemplo movidos para fora do useEffect para evitar recriação desnecessária
const sampleFeaturedPosts = [
  {
    id: 1,
    title: "Explorando a Arte Urbana",
    image: "https://images.unsplash.com/photo-1601913463731-cfba9fd31ed3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content:
      "O graffiti evoluiu e se tornou uma forma de expressão artística urbana que transcende as ruas e chega às galerias de arte. Esse fenômeno cultural transformou a percepção da arte pública e deu voz a artistas que antes não tinham espaços tradicionais para mostrar seu trabalho.",
    author: "João Street",
    date: "2025-02-28",
    destacado: true,
  },
  {
    id: 3,
    title: "Técnicas de Graffiti Moderno",
    image: "https://plus.unsplash.com/premium_photo-1661389653135-2ba624c3eff2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content:
      "As técnicas de graffiti evoluíram enormemente nas últimas décadas. Do simples tag às elaboradas peças 3D, os artistas urbanos continuam inovando e desenvolvendo novos estilos e métodos para se expressar nas paredes das cidades.",
    author: "Carlos Spray",
    date: "2025-02-27",
    destacado: true,
  },
  {
    id: 5,
    title: "Os Melhores Artistas Urbanos de 2025",
    image: "https://plus.unsplash.com/premium_photo-1693000474956-1a5d8a85befc?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content:
      "Descubra os artistas urbanos que estão redefinindo o panorama do street art em 2025. De veteranos consagrados a novos talentos emergentes, esses criadores estão levando a arte de rua a novos patamares com suas técnicas inovadoras e mensagens poderosas.",
    author: "Ana Canvas",
    date: "2025-02-25",
    destacado: true,
  },
]

export default function TopsPage() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchFeaturedPosts = async () => {
      try {
        // Em um ambiente real, buscaria posts destacados do backend
        // const data = await getFeaturedPosts();

        // Usando dados de exemplo otimizados
        setPosts(sampleFeaturedPosts)
        setLoading(false)
      } catch (error) {
        console.error("Erro:", error)
        setLoading(false)
      }
    }

    fetchFeaturedPosts()
  }, []) // Array de dependências vazio para executar apenas uma vez

  return (
    <div className="montserrat-regular">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-center"
      >
        <h1 className="title mb-4 nosifer-regular">Posts em Destaque</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Uma seleção dos nossos melhores artigos sobre arte urbana e cultura de rua
        </p>
      </motion.div>

      {loading ? (
        <div className="text-center py-20">
          <p className="text-xl">Carregando posts em destaque...</p>
        </div>
      ) : posts.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-xl text-gray-400">Nenhum post em destaque disponível.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  )
}