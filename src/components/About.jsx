import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section id="about" className="bg-white">
            <div className="section-container" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title text-center">À Propos de Moi</h2>

                    <div className="max-w-4xl mx-auto">
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Je suis étudiant en Master <span className="font-semibold text-primary-800">Expert en Audit Interne et Contrôle de Gestion</span> à TBS Education,
                            avec une solide formation en comptabilité, finance et business intelligence. Mon parcours académique m'a doté de connaissances
                            approfondies en analyse financière, gestion des risques et systèmes de contrôle interne.
                        </p>

                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Au cours de mes expériences professionnelles, j'ai développé une expertise en analyse financière, conformité comptable et gestion de trésorerie.
                            Je suis particulièrement passionné par <span className="font-semibold text-primary-800">l'audit interne</span>, <span className="font-semibold text-primary-800">la gestion des risques</span>,
                            et la garantie de la <span className="font-semibold text-primary-800">transparence financière</span> au sein des organisations.
                        </p>

                        <p className="text-lg text-gray-700 leading-relaxed">
                            Ma maîtrise technique comprend Excel avancé, Power BI, SAP et VBA, que j'utilise pour fournir des analyses basées sur les données
                            et optimiser les processus financiers. Je m'engage dans l'apprentissage continu et me tiens au courant des meilleures pratiques
                            du secteur en matière d'audit et de finance.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default About
