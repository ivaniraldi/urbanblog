"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import PostCard from "@/components/PostCard"

// Dados de exemplo movidos para fora do useEffect para evitar recriação desnecessária
const samplePosts = [
  {
    id: 1,
    title: "Explorando a Arte Urbana",
    image: "https://images.unsplash.com/photo-1530406831759-15c5c0cbce8b?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content:
      "O graffiti evoluiu e se tornou uma forma de expressão artística urbana que transcende as ruas e chega às galerias de arte. Esse fenômeno cultural transformou a percepção da arte pública e deu voz a artistas que antes não tinham espaços tradicionais para mostrar seu trabalho.",
    author: "João Street",
    date: "2025-02-28",
    destacado: true,
  },
  {
    id: 2,
    title: "História do Hip-Hop",
    image: "https://images.unsplash.com/photo-1601643157091-ce5c665179ab?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content:
      "O hip-hop não é apenas música, é uma cultura que influenciou a arte urbana de várias maneiras. Desde suas origens no Bronx nos anos 70, esse movimento cresceu até se tornar uma das expressões culturais mais importantes do mundo, impactando a moda, a arte, a linguagem e a política.",
    author: "Maria Flow",
    date: "2025-02-28",
    destacado: false,
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
    id: 4,
    title: "Festivais de Arte Urbana",
    image: "https://images.unsplash.com/photo-1601913463731-cfba9fd31ed3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content:
      "Os festivais de arte urbana se multiplicaram pelo mundo, oferecendo espaços legais e reconhecimento aos artistas de graffiti. Esses eventos não apenas transformam visualmente as cidades, mas também geram diálogo e reflexão sobre o espaço público.",
    author: "Laura Wall",
    date: "2025-02-26",
    destacado: false,
  },
]

export default function Home() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Em um ambiente real, buscaria posts do backend
        // const data = await getPosts();

        // Usando dados de exemplo otimizados
        setPosts(samplePosts)
        setLoading(false)
      } catch (error) {
        console.error("Erro:", error)
        setLoading(false)
      }
    }

    fetchPosts()
  }, []) // Array de dependências vazio para executar apenas uma vez

  return (
    <div className="montserrat-regular">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-center"
      >
        <h1 className="title mb-4 nosifer-regular">POSTS DIÁRIOS</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Seu portal para o mundo da arte urbana, graffiti e cultura de rua
        </p>
      </motion.div>

      {loading ? (
        <div className="text-center py-20">
          <p className="text-xl">Carregando posts...</p>
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