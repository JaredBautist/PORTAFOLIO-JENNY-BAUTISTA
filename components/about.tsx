"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Target, Eye, Heart } from "lucide-react"
import Image from "next/image"

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
}

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="sobre-mi" className="py-16 md:py-24 bg-card relative overflow-hidden">
      {/* Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary/50 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase">
            Conoceme
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mt-2">
            Perfil Profesional
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Profile Text */}
          <motion.div
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 md:space-y-6"
          >
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Soy una persona comprometida con mi trabajo, emprendedora, paciente y con 
              mucha inteligencia emocional. Siempre entrego lo mejor de mi a las personas 
              que me necesitan, doy acompanamiento y soy una mujer de soluciones, muy proactiva.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Terapeuta ocupacional</strong> de profesion, 
              <strong className="text-foreground"> Especialista en Alta Gerencia</strong>, 
              <strong className="text-foreground"> Especialista en Gerencia en Salud Ocupacional</strong> y 
              <strong className="text-foreground"> Psicoterapeuta Conductual</strong>.
            </p>
            <p className="text-xl font-serif text-primary italic">
              A tu servicio.
            </p>

            {/* Credentials */}
            <div className="flex flex-wrap gap-2 md:gap-3 pt-2 md:pt-4">
              {["Terapeuta Ocupacional", "Alta Gerencia", "Salud Ocupacional", "Psicoterapeuta Conductual"].map((cred) => (
                <span
                  key={cred}
                  className="px-3 md:px-4 py-1.5 md:py-2 bg-secondary text-secondary-foreground text-xs md:text-sm rounded-full"
                >
                  {cred}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Mission & Vision Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            <motion.div
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-background rounded-2xl border border-border hover:border-primary/30 transition-colors group overflow-hidden"
            >
              <div className="relative h-40 overflow-hidden">
                <Image
                  src="/images/mision.png"
                  alt="Mision - Ayudando a personas a cambiar sus vidas"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className="absolute bottom-4 left-4 w-10 h-10 bg-primary/90 rounded-xl flex items-center justify-center">
                  <Target className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                  Mision
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Trabajar con personas y empresas para ayudarles a cambiar sus sentimientos, emociones y actitudes ante la vida, creando patrones de conducta donde puedan ser mas productivos, saludables y felices.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-background rounded-2xl border border-border hover:border-primary/30 transition-colors group overflow-hidden"
            >
              <div className="relative h-40 overflow-hidden">
                <Image
                  src="/images/vision.png"
                  alt="Vision - Alcanzar el bienestar emocional"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className="absolute bottom-4 left-4 w-10 h-10 bg-primary/90 rounded-xl flex items-center justify-center">
                  <Eye className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                  Vision
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Lograr que todas las personas, empresas e instituciones que reciban mis servicios alcancen el bienestar que necesitan, desarrollando comportamientos fisicos, emocionales y sociales adecuados.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Objectives Section with Image */}
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 md:mt-20"
        >
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="relative h-56 sm:h-72 lg:h-96 rounded-2xl overflow-hidden"
            >
              <Image
                src="/images/objetivos.png"
                alt="Objetivos - Crecimiento personal y equilibrio emocional"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
            </motion.div>

            {/* Objectives List */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                  Mis Objetivos
                </h3>
              </div>

              <div className="space-y-4">
                {[
                  "Lograr un equilibrio emocional funcional en las personas",
                  "Desarrollar habitos de vida saludables",
                  "Incrementar el positivismo y las ganas de vivir",
                  "Enfocar a las personas en hacer su vida productiva",
                  "Crear impacto social a traves de tecnicas conductuales",
                ].map((objective, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="flex items-start gap-4 p-4 bg-gradient-to-r from-secondary to-transparent rounded-xl hover:from-primary/10 transition-colors"
                  >
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-foreground leading-relaxed pt-1">{objective}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
