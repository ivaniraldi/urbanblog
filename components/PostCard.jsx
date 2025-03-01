"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function PostCard({ post }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="card flex flex-col justify-between rounded-[3px]" // Movido borderRadius para className
    >
      <div className="relative h-48 w-full montserrat-regular">
        <Image
          src={post.image || "/images/placeholder.jpg"}
          alt={post.title}
          fill
          className="object-cover"
        />
        {post.destacado && (
          <div className="absolute top-2 right-2 bg-urban text-dark px-2 py-1 rounded-md text-sm font-bold">
            Destaque
          </div>
        )}
      </div>

      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2 text-urban permanent-marker-regular">
          {post.title}
        </h2>
        <div className="flex justify-between text-sm text-gray-400 mb-3">
          <span>{post.author}</span>
          <span>{new Date(post.date).toLocaleDateString("pt-BR")}</span> {/* Formato de data em PT-BR */}
        </div>
        <p className="text-gray-300 mb-4 line-clamp-3">{post.content}</p>
        <Link
          href={`/post/${post.id}`}
          className="btn bg-neon hover:bg-pink-600 inline-block rounded-[3px]" // Movido borderRadius para className
        >
          Ler mais
        </Link>
      </div>
    </motion.div>
  )
}