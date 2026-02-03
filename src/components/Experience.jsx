import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Briefcase, MapPin, Calendar } from 'lucide-react'

const Experience = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const experiences = [
        {
            title: "Analyste Financier & Contrôle Interne",
            company: "DKP B-Learning",
            location: "France",
            period: "Récent",
            responsibilities: [
                "Réalisation d'analyses financières complètes pour soutenir la prise de décision stratégique",
                "Mise en place de procédures de contrôle interne pour assurer la conformité et l'atténuation des risques",
                "Développement de rapports financiers et tableaux de bord avec Power BI pour la direction",
                "Analyse des données financières pour identifier les tendances, anomalies et opportunités d'amélioration"
            ]
        },
        {
            title: "Comptable & Spécialiste Conformité Fiscale",
            company: "Cabinet Bumo'o",
            location: "Cameroun",
            period: "Précédent",
            responsibilities: [
                "Gestion complète des opérations comptables pour plusieurs portefeuilles clients",
                "Assurance de la conformité avec les réglementations fiscales locales et les exigences de reporting",
                "Préparation des états financiers et déclarations fiscales avec précision et ponctualité",
                "Conseil en matière de meilleures pratiques comptables et d'optimisation fiscale"
            ]
        },
        {
            title: "Assistant Gestion de Trésorerie",
            company: "Graphics System",
            location: "Cameroun",
            period: "Précédent",
            responsibilities: [
                "Suivi quotidien des flux de trésorerie et gestion des opérations de trésorerie",
                "Préparation des prévisions de trésorerie et rapports de liquidité pour la direction",
                "Coordination avec les banques pour le traitement des paiements et le rapprochement des comptes",
                "Assistance dans l'optimisation du fonds de roulement et des stratégies de gestion de trésorerie"
            ]
        }
    ]

    return (
        <section id="experience" className="bg-white">
            <div className="section-container" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title text-center">Expérience Professionnelle</h2>
                    <p className="section-subtitle text-center">Parcours Professionnel & Réalisations Clés</p>

                    <div className="max-w-5xl mx-auto">
                        <div className="relative">
                            {/* Timeline line */}
                            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary-200"></div>

                            <div className="space-y-12">
                                {experiences.map((exp, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                        transition={{ duration: 0.6, delay: index * 0.2 }}
                                        className={`relative md:flex md:items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                    >
                                        {/* Timeline dot */}
                                        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-700 rounded-full border-4 border-white shadow"></div>

                                        <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                                            <div className="card hover:border-primary-200 border-2 border-transparent">
                                                <div className="flex items-start gap-3 mb-4">
                                                    <div className="flex-shrink-0">
                                                        <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                                                            <Briefcase className="w-5 h-5 text-primary-700" />
                                                        </div>
                                                    </div>
                                                    <div className="flex-1">
                                                        <h3 className="text-xl font-bold text-primary-900 mb-1">
                                                            {exp.title}
                                                        </h3>
                                                        <div className="text-lg font-semibold text-gray-800 mb-2">
                                                            {exp.company}
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex flex-wrap gap-3 mb-4 text-sm text-gray-600">
                                                    <div className="flex items-center gap-1">
                                                        <MapPin className="w-4 h-4" />
                                                        {exp.location}
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <Calendar className="w-4 h-4" />
                                                        {exp.period}
                                                    </div>
                                                </div>

                                                <ul className="space-y-2">
                                                    {exp.responsibilities.map((resp, idx) => (
                                                        <li key={idx} className="flex items-start gap-2 text-gray-700">
                                                            <span className="text-primary-700 mt-1.5">•</span>
                                                            <span>{resp}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
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

export default Experience
