"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Phone, Instagram, Mail, Send, CheckCircle } from "lucide-react"

const Facebook = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
)

const TikTok = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
  </svg>
)

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const { name, email, phone, message } = formState
    
    // Mensaje formateado para WhatsApp
    const whatsappText = 
      `*Nuevo mensaje desde el portafolio web*\n\n` +
      `*Nombre:* ${name}\n` +
      `*Email:* ${email}\n` +
      `*Teléfono:* ${phone || "No proporcionado"}\n\n` +
      `*Mensaje:*\n${message}`

    const whatsappUrl = `https://wa.me/573106139879?text=${encodeURIComponent(whatsappText)}`

    // Asunto y cuerpo del correo
    const emailSubject = `Nuevo mensaje de ${name} - Portafolio Web`
    const emailBody = 
      `Nombre: ${name}\n` +
      `Email: ${email}\n` +
      `Teléfono: ${phone || "No proporcionado"}\n\n` +
      `Mensaje:\n${message}`

    const mailtoUrl = `mailto:jennybautista28@hotmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`

    // Abrir WhatsApp primero (requiere interacción directa del usuario)
    window.open(whatsappUrl, "_blank")

    // Abrir el cliente de correo con un pequeño delay para evitar bloqueo del navegador
    setTimeout(() => {
      window.location.href = mailtoUrl
    }, 500)
    
    // Mostrar mensaje de éxito y limpiar formulario
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
    setFormState({ name: "", email: "", phone: "", message: "" })
  }

  const contactInfo = [
    {
      icon: Phone,
      label: "Telefono",
      value: "+57 310 613 9879",
      href: "tel:+573106139879",
    },
    {
      icon: Mail,
      label: "Email",
      value: "jennybautista28@hotmail.com",
      href: "mailto:jennybautista28@hotmail.com",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@jennybautista_oficial",
      href: "https://www.instagram.com/jennybautista_oficial/",
    },
    {
      icon: Facebook,
      label: "Facebook",
      value: "Jenny Bautista Garcia",
      href: "https://www.facebook.com/jenny.bautista.garcia.2025?locale=es_LA",
    },
    {
      icon: TikTok,
      label: "TikTok",
      value: "@jennybautistagarcia",
      href: "https://www.tiktok.com/@jennybautistagarcia",
    },
  ]

  return (
    <section id="contacto" className="py-16 md:py-24 bg-card relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase">
            Hablemos
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Contáctame
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            ¿Listo para comenzar tu camino hacia el bienestar? 
            Estoy aquí para ayudarte. Escríbeme o llámame.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-background rounded-3xl p-5 sm:p-8 border border-border"
          >
            <h3 className="font-serif text-xl font-bold text-foreground mb-6">
              Envíame un Mensaje
            </h3>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <CheckCircle className="w-16 h-16 text-primary mb-4" />
                <h4 className="text-xl font-bold text-foreground mb-2">
                  ¡Mensaje Enviado!
                </h4>
                <p className="text-muted-foreground">
                  Te contactaré lo antes posible.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-foreground"
                    placeholder="Tu nombre"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-foreground"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-foreground"
                      placeholder="+57 300 000 0000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none text-foreground"
                    placeholder="Cuéntame en qué puedo ayudarte..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/25"
                >
                  <Send size={18} />
                  Enviar Mensaje
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col justify-center"
          >
            <h3 className="font-serif text-xl font-bold text-foreground mb-8">
              Información de Contacto
            </h3>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-background rounded-xl border border-border hover:border-primary/30 transition-all group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">
                      {info.label}
                    </p>
                    <p className="text-foreground font-medium">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 md:mt-12 p-5 md:p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl border border-border"
            >
              <blockquote className="font-serif text-lg italic text-foreground mb-4">
                &ldquo;Tu bienestar emocional es mi prioridad. Juntos trabajaremos para 
                crear la vida que mereces.&rdquo;
              </blockquote>
              <p className="text-primary font-medium">— Jenny Bautista García</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
