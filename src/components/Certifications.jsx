import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award, CheckCircle } from 'lucide-react'

const Certifications = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const certifications = [
        {
            title: "Gestion Responsable",
            issuer: "Université Laval",
            year: "2024",
            description: "Certification en pratiques de gestion durable et responsable"
        }
    ]

    return (
        <section id="certifications" className="bg-gray-50">
            <div className="section-container" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title text-center">Certifications</h2>
                    <p className="section-subtitle text-center">Accréditations Professionnelles & Réalisations</p>

                    <div className="max-w-3xl mx-auto">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="card hover:border-primary-200 border-2 border-transparent"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg flex items-center justify-center shadow-lg">
                                            <Award className="w-8 h-8 text-white" />
                                        </div>
                                    </div>

                                    <div className="flex-1">
                                        <div className="flex items-start justify-between mb-2">
                                            <h3 className="text-xl font-bold text-primary-900">
                                                {cert.title}
                                            </h3>
                                            <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 ml-2" />
                                        </div>

                                        <div className="text-lg font-semibold text-gray-800 mb-2">
                                            {cert.issuer}
                                        </div>

                                        <div className="text-sm text-gray-600 mb-3">
                                            {cert.year}
                                        </div>

                                        <p className="text-gray-700">
                                            {cert.description}
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

export default Certifications
