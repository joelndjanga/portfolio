import React from 'react'
import { motion } from 'framer-motion'
import { Download, Mail } from 'lucide-react'

const Hero = () => {
    const scrollToContact = (e) => {
        e.preventDefault()
        const element = document.querySelector('#contact')
        if (element) {
            const offset = 80
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - offset
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
        }
    }

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 pt-20">
            <div className="section-container text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary-900 mb-4">
                        Joël NDJANGA
                    </h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl sm:text-2xl lg:text-3xl text-gray-700 mb-6 font-medium"
                    >
                        Auditeur Interne Junior | Spécialiste Comptabilité & Finance | Business Intelligence
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-10 italic"
                    >
                        "Comprendre les flux financiers, détecter les anomalies et assurer la transparence et la fiabilité."
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <a
                            href="/public/cv.pdf"
                            download="Joel_NDJANGA_CV.pdf"
                            className="btn-primary group"
                        >
                            <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                            Télécharger le CV
                        </a>
                        <a
                            href="#contact"
                            onClick={scrollToContact}
                            className="btn-secondary group"
                        >
                            <Mail className="mr-2 h-5 w-5" />
                            Me Contacter
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero
