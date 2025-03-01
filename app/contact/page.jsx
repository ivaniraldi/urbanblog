"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    success: false,
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus((prev) => ({ ...prev, submitting: true })) // Usando função de atualização para evitar sobrescrever diretamente

    try {
      // Em um ambiente real, enviaria o formulário ao backend
      // const result = await submitContactForm(formData);

      // Simulação de resposta bem-sucedida
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setStatus({
        submitting: false,
        submitted: true,
        success: true,
        message: "Mensagem enviada com sucesso! Entraremos em contato em breve.",
      })

      // Resetar o formulário
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      setStatus({
        submitting: false,
        submitted: true,
        success: false,
        message: "Houve um erro ao enviar sua mensagem. Por favor, tente novamente.",
      })
    }
  }

  return (
    <div className="max-w-4xl mx-auto montserrat-regular">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="title mb-8 text-center nosifer-regular">Contato</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Informações de contato */}
          <div>
            <h2 className="subtitle mb-6 permanent-marker-regular">Fale Conosco</h2>
            <p className="text-gray-300 mb-8">
              Tem alguma pergunta, sugestão ou quer colaborar conosco? Adoraríamos ouvir você! Preencha o formulário ou
              use qualquer um dos nossos canais de contato.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="text-spray" />
                <span>info@urbanblog.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-spray" />
                <span>+34 123 456 789</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-spray" />
                <span>Rua Arte Urbana, 123, Madri, Espanha</span>
              </div>
            </div>
          </div>

          {/* Formulário de contato */}
          <div>
            {status.submitted && status.success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-spray bg-opacity-20 border border-spray p-6 rounded-lg text-center"
              >
                <h3 className="text-xl font-bold text-spray mb-2">Mensagem Enviada!</h3>
                <p className="text-gray-300">{status.message}</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-[4px]" // Movido borderRadius para className
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-[4px]" // Movido borderRadius para className
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full rounded-[4px]" // Movido borderRadius para className
                  />
                </div>

                <button
                  type="submit"
                  disabled={status.submitting}
                  className="btn bg-neon hover:bg-pink-600 w-full flex items-center justify-center gap-2 rounded-[4px]" // Movido borderRadius para className
                >
                  <Send size={16} />
                  {status.submitting ? "Enviando..." : "Enviar Mensagem"}
                </button>

                {status.submitted && !status.success && (
                  <p className="text-red-500 text-center">{status.message}</p>
                )}
              </form>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  )
}