"use client"

import { motion } from "framer-motion"
import { ArrowDown, Phone, Instagram } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-muted" />
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="currentColor" className="text-primary/20" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20 pb-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          {/* Doctor Image — visible en móvil arriba, en desktop a la derecha */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative block lg:hidden order-first"
          >
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full transform rotate-3" />
              <div className="absolute inset-0 bg-card rounded-full shadow-2xl overflow-hidden">
                <Image
                  src="/images/dra-jenny.jpg"
                  alt="Dra. Jenny Bautista Garcia - Psicoterapeuta Conductual"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 mb-4 text-xs font-medium tracking-widest uppercase bg-primary/10 text-primary rounded-full">
                Psicoterapeuta Conductual
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-4 md:mb-6 text-balance"
            >
              Jenny Bautista García
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base md:text-lg lg:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed text-pretty"
            >
              Transformando vidas a través de la terapia conductual. Te ayudo a alcanzar 
              el equilibrio emocional y desarrollar hábitos de vida saludables.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center"
            >
              <Link
                href="#contacto"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 text-sm sm:text-base"
              >
                <Phone size={18} />
                Agenda tu Cita
              </Link>
              <Link
                href="#sobre-mi"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-card text-foreground rounded-full font-medium hover:bg-secondary transition-all border border-border text-sm sm:text-base"
              >
                Conoce Más
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-6"
            >
              <a
                href="tel:+573106139879"
                className="flex items-center justify-center sm:justify-start gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone size={16} />
                +57 310 613 9879
              </a>
              <a
                href="https://www.instagram.com/jennybautista_oficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center sm:justify-start gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram size={16} />
                @jennybautista_oficial
              </a>
            </motion.div>
          </div>

          {/* Doctor Image — solo en desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-[3/4] max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl transform rotate-3" />
              <div className="absolute inset-0 bg-card rounded-3xl shadow-2xl overflow-hidden">
                <Image
                  src="/images/dra-jenny.jpg"
                  alt="Dra. Jenny Bautista Garcia - Psicoterapeuta Conductual"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <Link
          href="#sobre-mi"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs tracking-widest uppercase">Descubre</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown size={20} />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  )
}
