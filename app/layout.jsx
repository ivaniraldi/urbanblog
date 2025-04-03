import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { AnimatePresence } from "framer-motion"

// Configuração da fonte Inter
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

// Metadados base para SEO
export const metadata = {
  title: {
    default: "UrbanBlog - Arte Urbana e Cultura de Rua",
    template: "%s | UrbanBlog",
  },
  description: "Seu portal para o mundo da arte urbana, graffiti e cultura de rua. Explore posts, destaques e mais!",
  keywords: ["arte urbana", "graffiti", "cultura de rua", "street art", "urbanblog"],
  generator: "Next.js",
  authors: [{ name: "UrbanBlog Team" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://urbanbloghttps://urbanblog.onrender.com", // Substitua pelo seu domínio real
    siteName: "UrbanBlog",
    images: [
      {
        url: "https://i.imgur.com/qiBCPxn.png", // URL do logo ou imagem representativa
        width: 1200,
        height: 630,
        alt: "UrbanBlog - Arte Urbana e Cultura de Rua",
      },
    ],
  },
  twitter: {
    card: "https://i.imgur.com/qiBCPxn.png",
    site: "@urbanblog", // Substitua pelo seu handle real do Twitter
    creator: "@ewebrush",
  },
  robots: "index, follow",
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${inter.variable}`}>
      <head>
        <link rel="icon" href="public/favicon.ico" type="image/x-icon" />
        {/* Ensure the favicon path is correct and accessible */}
        {/* Título base (substituído por metadata.title) */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Preconnect para fontes */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Nosifer&family=Permanent+Marker&display=swap"
          rel="stylesheet"
        />
        {/* Meta tags adicionais para SEO */}
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <meta name="robots" content={metadata.robots} />
        {/* Open Graph */}
        <meta property="og:title" content={metadata.title.default} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height} />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        {/* Twitter Card */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:creator" content={metadata.twitter.creator} />
        <meta name="twitter:title" content={metadata.title.default} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.openGraph.images[0].url} />
      </head>
      <body className={`${inter.variable} bg-dark text-white min-h-screen`}>
        <div className="graffiti-bg"></div>
        <Navbar />
        <AnimatePresence mode="wait">
          <main className="container mx-auto px-4 py-8">{children}</main>
        </AnimatePresence>
        <Footer />
      </body>
    </html>
  )
}