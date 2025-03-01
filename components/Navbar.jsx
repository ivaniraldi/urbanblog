"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

// Links de navegação movidos para constante fora do componente
const navLinks = [
  { name: "Início", path: "/" },
  { name: "Destaques", path: "/tops" },
  { name: "Sobre Nós", path: "/about" },
  { name: "Contato", path: "/contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // Fecha o menu móvel ao mudar de rota
  useEffect(() => {
    setIsOpen(false)
  }, [pathname]) // Dependência corrigida para pathname em vez de array vazio

  const toggleMenu = () => setIsOpen((prev) => !prev) // Função simplificada

  return (
    <nav className="permanent-marker-regular text-2xl sticky top-0 py-2 z-50 bg-dark bg-opacity-15 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center py-4">
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="h-16"
              src="https://i.imgur.com/OaNNORy.png"
              alt="Logo"
            />
          </Link>

          {/* Navegação Desktop */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`nav-link ${pathname === link.path ? "active-link" : ""}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Botão do Menu Móvel */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-spray focus:outline-none"
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Navegação Móvel */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`nav-link ${pathname === link.path ? "active-link" : ""}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  )
}