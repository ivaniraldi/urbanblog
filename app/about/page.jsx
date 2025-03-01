"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="title mb-8 text-center nosifer-regular">Sobre o UrbanBlog</h1>

        <div className="relative h-[40vh] w-full mb-8 rounded-lg overflow-hidden">
          <Image
            src="https://plus.unsplash.com/premium_photo-1692311474471-4ee63c95c5e1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Equipe do UrbanBlog"
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-6 text-lg montserrat-regular">
          <h2 className="subtitle permanent-marker-regular">Nossa Missão</h2>
          <p>
            No UrbanBlog, nossa missão é documentar, celebrar e promover a arte urbana em todas as suas formas. Acreditamos
            que o graffiti, o street art e outras expressões artísticas de rua são manifestações culturais importantes
            que merecem ser reconhecidas e valorizadas.
          </p>

          <h2 className="subtitle permanent-marker-regular">Nossa História</h2>
          <p>
            O UrbanBlog nasceu em 2020 como um pequeno projeto pessoal de um grupo de entusiastas da arte urbana. O que
            começou como um simples blog para compartilhar fotos de graffitis locais rapidamente cresceu e se tornou uma
            plataforma de referência para artistas, aficionados e curiosos pelo mundo da arte de rua.
          </p>

          <h2 className="subtitle permanent-marker-regular">Nossa Equipe</h2>
          <p>
            Somos uma equipe diversa de escritores, fotógrafos, artistas e apaixonados por arte urbana. Cada um de nós
            traz uma perspectiva única e valiosa ao nosso conteúdo, permitindo-nos oferecer uma visão completa e
            nuançada do mundo do graffiti e do street art.
          </p>

          <h2 className="subtitle permanent-marker-regular">Nossos Valores</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="text-spray font-bold">Autenticidade:</span> Valorizamos a expressão genuína e a voz única
              de cada artista.
            </li>
            <li>
              <span className="text-spray font-bold">Comunidade:</span> Acreditamos no poder da arte para unir as pessoas
              e criar comunidades vibrantes.
            </li>
            <li>
              <span className="text-spray font-bold">Acessibilidade:</span> Trabalhamos para tornar a arte urbana
              acessível e compreensível para todos.
            </li>
            <li>
              <span className="text-spray font-bold">Respeito:</span> Promovemos o respeito pelos espaços públicos e
              privados e defendemos a prática responsável da arte urbana.
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  )
}