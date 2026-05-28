"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Clock, Check, Star } from "lucide-react"
import Link from "next/link"

const planes = [
  {
    name: "Sesión Estándar",
    duration: "90 Minutos",
    price: "300.000",
    features: [
      "Sesión personalizada de 90 minutos",
      "Evaluación inicial completa",
      "Plan de acción personalizado",
      "Técnicas conductuales aplicadas",
      "Seguimiento por mensaje",
    ],
    popular: false,
  },
  {
    name: "Sesión Extendida",
    duration: "2 Horas",
    price: "360.000",
    features: [
      "Sesión completa de 2 horas",
      "Evaluación profunda",
      "Plan de acción detallado",
      "Técnicas conductuales avanzadas",
      "Material de apoyo incluido",
      "Seguimiento personalizado",
    ],
    popular: true,
  },
]

export function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="precios" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-border" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase">
            Inversión en tu Bienestar
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Precios de Capacitaciones
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Elige el plan que mejor se adapte a tus necesidades. 
            Cada sesión está diseñada para ayudarte a alcanzar tu bienestar.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {planes.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className={`relative bg-card rounded-3xl p-8 border-2 transition-all hover:shadow-xl ${
                plan.popular
                  ? "border-primary shadow-lg shadow-primary/10"
                  : "border-border hover:border-primary/30"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-4 py-1.5 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    <Star size={12} fill="currentColor" />
                    Más Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-center justify-center gap-2 text-muted-foreground mb-6">
                  <Clock size={16} />
                  <span>{plan.duration}</span>
                </div>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-2xl font-medium text-muted-foreground">$</span>
                  <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">COP</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={12} className="text-primary" />
                    </div>
                    <span className="text-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="#contacto"
                className={`w-full py-4 rounded-full font-medium transition-all flex items-center justify-center ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                Reservar Ahora
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-sm text-muted-foreground mt-12 max-w-xl mx-auto"
        >
          * Los precios son por sesión individual o capacitación grupal. 
          Para cotizaciones empresariales personalizadas, contáctame directamente.
        </motion.p>
      </div>
    </section>
  )
}
