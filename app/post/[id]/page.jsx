import Image from "next/image"
import { Calendar, User } from "lucide-react"
import CommentSection from "@/components/CommentSection"

export async function generateStaticParams() {
  const samplePosts = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
  ]

  return samplePosts.map((post) => ({
    id: post.id.toString(),
  }))
}

// Busca simulada de dados no lado do servidor
async function getPost(id) {
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

  return samplePosts.find((post) => post.id === Number.parseInt(id)) || null
}

export default async function PostPage({ params }) {
  const { id } = params
  const post = await getPost(id)

  if (!post) {
    return (
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold mb-4">Post não encontrado</h1>
        <p className="text-xl text-gray-300">O post que você está procurando não existe ou foi removido.</p>
      </div>
    )
  }

  return (
    <article className="max-w-4xl mx-auto">
      <div>
        {/* Cabeçalho do Post */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex flex-wrap gap-4 text-gray-400">
            <div className="flex items-center gap-1">
              <User size={16} />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar size={16} />
              <span>{new Date(post.date).toLocaleDateString("pt-BR")}</span> {/* Formato de data em PT-BR */}
            </div>
            {post.destacado && (
              <span className="bg-urban text-dark px-2 py-1 rounded-md text-sm font-bold">Destaque</span>
            )}
          </div>
        </div>

        {/* Imagem em Destaque */}
        <div className="relative h-[40vh] md:h-[50vh] w-full mb-8 rounded-lg overflow-hidden">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
        </div>

        {/* Conteúdo do Post */}
        <div
          className="prose prose-invert prose-lg max-w-none mb-10"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Seção de Comentários */}
        <CommentSection postId={post.id} />
      </div>
    </article>
  )
}