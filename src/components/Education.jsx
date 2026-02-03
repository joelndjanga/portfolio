import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, MapPin, Calendar } from 'lucide-react'

const Education = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const education = [
        {
            degree: "Master Expert en Audit Interne et Contrôle de Gestion",
            institution: "TBS Education",
            location: "France",
            period: "En cours",
            description: "Programme spécialisé axé sur l'audit interne, le contrôle de gestion, l'évaluation des risques et la gouvernance financière."
        },
        {
            degree: "Licence + Master en Comptabilité & Finance",
            institution: "Université",
            location: "Cameroun",
            period: "Terminé",
            description: "Formation complète en principes comptables, analyse financière, fiscalité et finance d'entreprise."
        }
    ]

    return (
        <section id="education" className="bg-gray-50">
            <div className="section-container" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title text-center">Formation</h2>
                    <p className="section-subtitle text-center">Parcours Académique & Qualifications</p>

                    <div className="max-w-4xl mx-auto space-y-6">
                        {education.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -30 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="card hover:border-primary-200 border-2 border-transparent"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                                            <GraduationCap className="w-6 h-6 text-primary-700" />
                                        </div>
                                    </div>

                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-primary-900 mb-2">
                                            {edu.degree}
                                        </h3>
                                        <div className="text-lg font-semibold text-gray-800 mb-3">
                                            {edu.institution}
                                        </div>

                                        <div className="flex flex-wrap gap-4 mb-3 text-sm text-gray-600">
                                            <div className="flex items-center gap-1">
                                                <MapPin className="w-4 h-4" />
                                                {edu.location}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-4 h-4" />
                                                {edu.period}
                                            </div>
                                        </div>

                                        <p className="text-gray-700">
                                            {edu.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Education
