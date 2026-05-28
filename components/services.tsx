"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  Brain,
  Heart,
  Smile,
  MessageCircle,
  Clock,
  Users,
  Sparkles,
  BookOpen,
  Lightbulb,
  Volume2,
  Zap
} from "lucide-react"
import Image from "next/image"

const capacitaciones = [
  { icon: Sparkles, title: "Estilos de Vida Saludables" },
  { icon: Brain, title: "Manejo del Estres" },
  { icon: Heart, title: "Autoestima Enfocada al Amor Propio" },
  { icon: MessageCircle, title: "Comunicacion Asertiva" },
  { icon: Clock, title: "Manejo del Tiempo Libre" },
  { icon: Users, title: "Relaciones Interpersonales Afectivas" },
  { icon: Zap, title: "Inteligencia Emocional para Empresas" },
  { icon: BookOpen, title: "Depresion en Adolescencia y Edad Adulta" },
  { icon: Lightbulb, title: "Manejo de la Voluntad" },
  { icon: Volume2, title: "Educacion de la Voz Interior" },
]

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="servicios" className="py-16 md:py-24 bg-background relative">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase">
            Mis Servicios
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Areas de Trabajo
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            Trabajo con personas y empresas en todas las areas que nos desempenamos 
            en la vida diaria: mental, fisica, social y laboral.
          </p>
        </motion.div>

        {/* Service Areas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-20">
          {[
            {
              icon: Brain,
              title: "Area Mental",
              description: "Trabajo en pensamientos, emociones y patrones conductuales para lograr equilibrio emocional.",
              color: "from-primary/20 to-primary/5",
            },
            {
              icon: Heart,
              title: "Area Fisica",
              description: "Desarrollo de habitos de vida saludables que mejoren tu bienestar fisico.",
              color: "from-accent/20 to-accent/5",
            },
            {
              icon: Users,
              title: "Area Social",
              description: "Mejora de relaciones interpersonales y habilidades de comunicacion.",
              color: "from-primary/20 to-primary/5",
            },
            {
              icon: Smile,
              title: "Area Laboral",
              description: "Inteligencia emocional y productividad en el ambiente de trabajo.",
              color: "from-accent/20 to-accent/5",
            },
          ].map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className={`p-5 md:p-8 rounded-2xl bg-gradient-to-br ${area.color} border border-border hover:border-primary/30 transition-all group`}
            >
              <div className="w-14 h-14 bg-card rounded-xl flex items-center justify-center mb-5 shadow-sm group-hover:shadow-md transition-shadow">
                <area.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                {area.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Capacitaciones */}
        <motion.div
          id="capacitaciones"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-card rounded-3xl p-5 sm:p-8 md:p-12 border border-border overflow-hidden"
        >
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="relative h-48 sm:h-64 lg:h-80 rounded-2xl overflow-hidden"
            >
              <Image
                src="/images/capacitaciones.png"
                alt="Capacitaciones empresariales - Formacion profesional"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-primary text-xs font-medium tracking-widest uppercase">
                  Para Empresas e Instituciones
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mt-1">
                  Capacitaciones
                </h3>
              </div>
            </motion.div>

            {/* Capacitaciones Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
              {capacitaciones.map((cap, index) => (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                  className="flex items-center gap-3 p-3 bg-background rounded-xl hover:bg-secondary/50 transition-colors group"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <cap.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="text-sm font-medium text-foreground leading-tight">
                    {cap.title}
                  </h4>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
