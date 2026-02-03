import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Globe } from 'lucide-react'

const Languages = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const languages = [
        {
            language: "Français",
            proficiency: "Langue Maternelle",
            level: 100,
            flag: "🇫🇷"
        },
        {
            language: "Anglais",
            proficiency: "Professionnel",
            level: 85,
            flag: "🇬🇧"
        }
    ]

    return (
        <section id="languages" className="bg-white">
            <div className="section-container" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title text-center">Langues</h2>
                    <p className="section-subtitle text-center">Compétences Linguistiques</p>

                    <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                        {languages.map((lang, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="card hover:border-primary-200 border-2 border-transparent text-center"
                            >
                                <div className="text-5xl mb-4">{lang.flag}</div>
                                <h3 className="text-2xl font-bold text-primary-900 mb-2">
                                    {lang.language}
                                </h3>
                                <p className="text-gray-600 mb-4 font-medium">
                                    {lang.proficiency}
                                </p>

                                <div className="relative pt-1">
                                    <div className="overflow-hidden h-2 text-xs flex rounded-full bg-primary-100">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={isInView ? { width: `${lang.level}%` } : { width: 0 }}
                                            transition={{ duration: 1, delay: index * 0.2 + 0.3 }}
                                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary-700"
                                        />
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

export default Languages
