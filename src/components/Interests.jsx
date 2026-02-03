import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { BookOpen, Newspaper, Dumbbell } from 'lucide-react'

const Interests = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const interests = [
        {
            title: "Développement Personnel",
            icon: BookOpen,
            description: "Apprentissage continu et amélioration personnelle à travers livres, formations et mentorat"
        },
        {
            title: "Actualités Financières",
            icon: Newspaper,
            description: "Suivi des marchés financiers mondiaux, tendances économiques et développements du secteur"
        },
        {
            title: "Sports",
            icon: Dumbbell,
            description: "Course à pied et football pour maintenir la forme physique et le bien-être mental"
        }
    ]

    return (
        <section id="interests" className="bg-white">
            <div className="section-container" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title text-center">Centres d'Intérêt & Loisirs</h2>
                    <p className="section-subtitle text-center">Au-delà de la Vie Professionnelle</p>

                    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                        {interests.map((interest, index) => {
                            const Icon = interest.icon
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ duration: 0.5, delay: index * 0.15 }}
                                    className="card hover:border-primary-200 border-2 border-transparent text-center group hover:scale-105 transition-transform"
                                >
                                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-700 transition-colors">
                                        <Icon className="w-8 h-8 text-primary-700 group-hover:text-white transition-colors" />
                                    </div>

                                    <h3 className="text-xl font-bold text-primary-900 mb-3">
                                        {interest.title}
                                    </h3>

                                    <p className="text-gray-700">
                                        {interest.description}
                                    </p>
                                </motion.div>
                            )
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Interests
