import Link from "next/link"
import { Instagram, Twitter, Facebook } from "lucide-react"

// Dados de links e redes sociais movidos para constantes fora do componente
const navLinks = [
  { name: "Início", path: "/" },
  { name: "Destaques", path: "/tops" },
  { name: "Sobre Nós", path: "/about" },
  { name: "Contato", path: "/contact" },
]

const socialLinks = [
  { icon: Instagram, url: "https://instagram.com" },
  { icon: Twitter, url: "https://twitter.com" },
  { icon: Facebook, url: "https://facebook.com" },
]

export default function Footer() {
  const currentYear = new Date().getFullYear() // Calculado uma vez para reutilização

  return (
    <footer className="permanent-marker-regular text-xl bg-dark bg-opacity-15 backdrop-blur-sm py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Descrição */}
          <div>
            <h3 className="text-2xl text-spray mb-4">UrbanBlog</h3>
            <p className="text-gray-300">Seu portal para o mundo da arte urbana, graffiti e cultura de rua.</p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-2xl text-spray mb-4">Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link href={link.path} className="nav-link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="text-2xl text-spray mb-4">Siga-nos</h3>
            <div className="flex justify-center md:justify-start space-x-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-spray transition-all duration-300 hover:scale-110"
                  aria-label={`Siga-nos no ${social.icon.name?.replace(/([A-Z])/g, " $1").trim()}`} // Acessibilidade
                >
                  <social.icon size={28} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Direitos Reservados */}
        <div className="mt-8 pt-4 border-t border-gray-700 text-center text-gray-400">
          <p>© {currentYear} UrbanBlog. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}