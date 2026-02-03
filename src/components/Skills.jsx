import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
    Calculator,
    TrendingUp,
    Shield,
    AlertCircle,
    FileSpreadsheet,
    BarChart3,
    Database,
    Code
} from 'lucide-react'

const Skills = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const skillCategories = [
        {
            category: "Compétences Principales",
            skills: [
                { name: "Comptabilité", icon: Calculator, level: 95 },
                { name: "Analyse Financière", icon: TrendingUp, level: 90 },
                { name: "Audit Interne", icon: Shield, level: 85 },
                { name: "Contrôle des Risques", icon: AlertCircle, level: 85 },
            ]
        },
        {
            category: "Compétences Techniques",
            skills: [
                { name: "Excel (Avancé)", icon: FileSpreadsheet, level: 95 },
                { name: "Power BI", icon: BarChart3, level: 85 },
                { name: "SAP", icon: Database, level: 80 },
                { name: "VBA", icon: Code, level: 75 },
            ]
        }
    ]

    return (
        <section id="skills" className="bg-gray-50">
            <div className="section-container" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title text-center">Compétences & Expertise</h2>
                    <p className="section-subtitle text-center">Compétences Professionnelles & Maîtrises Techniques</p>

                    <div className="max-w-5xl mx-auto space-y-12">
                        {skillCategories.map((category, catIndex) => (
                            <div key={catIndex}>
                                <h3 className="text-2xl font-bold text-primary-900 mb-6 text-center">
                                    {category.category}
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {category.skills.map((skill, index) => {
                                        const Icon = skill.icon
                                        return (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                                                transition={{ duration: 0.5, delay: (catIndex * 0.4) + (index * 0.1) }}
                                                className="card hover:border-primary-200 border-2 border-transparent"
                                            >
                                                <div className="flex items-center gap-4 mb-3">
                                                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                                        <Icon className="w-6 h-6 text-primary-700" />
                                                    </div>
                                                    <h4 className="text-lg font-semibold text-gray-900">
                                                        {skill.name}
                                                    </h4>
                                                </div>

                                                <div className="relative pt-1">
                                                    <div className="flex mb-2 items-center justify-between">
                                                        <div>
                                                            <span className="text-xs font-semibold inline-block text-primary-700">
                                                                Maîtrise
                                                            </span>
                                                        </div>
                                                        <div className="text-right">
                                                            <span className="text-xs font-semibold inline-block text-primary-700">
                                                                {skill.level}%
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="overflow-hidden h-2 text-xs flex rounded-full bg-primary-100">
                                                        <motion.div
                                                            initial={{ width: 0 }}
                                                            animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                                                            transition={{ duration: 1, delay: (catIndex * 0.4) + (index * 0.1) + 0.3 }}
                                                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary-700"
                                                        />
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )
                                    })}
                                </div>
                            </div>
                        ))}

                        {/* Additional Skills Badge Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="text-center"
                        >
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Compétences Additionnelles</h3>
                            <div className="flex flex-wrap justify-center gap-3">
                                {["Business Intelligence", "Analyse de Données", "Reporting Financier", "Conformité", "Optimisation des Processus"].map((skill, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 bg-white border-2 border-primary-200 text-primary-800 rounded-full text-sm font-medium hover:bg-primary-50 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Skills
