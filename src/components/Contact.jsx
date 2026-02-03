import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Phone, Linkedin, Send, MapPin } from 'lucide-react'

const Contact = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const [errors, setErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }))
        }
    }

    const validateForm = () => {
        const newErrors = {}

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required'
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required'
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email'
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required'
        }

        return newErrors
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const newErrors = validateForm()

        if (Object.keys(newErrors).length === 0) {
            // In a real application, you would send this data to a backend
            console.log('Form submitted:', formData)
            setSubmitted(true)
            setFormData({ name: '', email: '', message: '' })

            // Reset submitted state after 5 seconds
            setTimeout(() => setSubmitted(false), 5000)
        } else {
            setErrors(newErrors)
        }
    }

    const contactInfo = [
        {
            icon: Mail,
            label: "Email",
            value: "ndjangaeldad@gmail.com",
            href: "mailto:ndjangaeldad@gmail.com"
        },
        {
            icon: Phone,
            label: "Phone",
            value: "+33 7 46 28 23 10",
            href: "tel:+33746282310"
        },
        {
            icon: Linkedin,
            label: "LinkedIn",
            value: "linkedin.com/in/joël-ndjanga",
            href: "https://linkedin.com/in/joël-ndjanga"
        },
        {
            icon: MapPin,
            label: "Location",
            value: "France",
            href: null
        }
    ]

    return (
        <section id="contact" className="bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="section-container" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title text-center">Contactez-Moi</h2>
                    <p className="section-subtitle text-center">Discutons de comment je peux contribuer à votre organisation</p>

                    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h3 className="text-2xl font-bold text-primary-900 mb-6">Informations de Contact</h3>
                            <p className="text-gray-700 mb-8">
                                Je suis toujours ouvert à discuter de nouvelles opportunités, collaborations, ou simplement avoir une conversation
                                sur la finance, l'audit et la business intelligence. N'hésitez pas à me contacter !
                            </p>

                            <div className="space-y-4">
                                {contactInfo.map((info, index) => {
                                    const Icon = info.icon
                                    return (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                            transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                                            className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                                        >
                                            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                <Icon className="w-6 h-6 text-primary-700" />
                                            </div>
                                            <div>
                                                <div className="text-sm text-gray-600 font-medium">{info.label}</div>
                                                {info.href ? (
                                                    <a
                                                        href={info.href}
                                                        target={info.label === "LinkedIn" ? "_blank" : undefined}
                                                        rel={info.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                                                        className="text-primary-700 hover:text-primary-900 font-medium transition-colors"
                                                    >
                                                        {info.value}
                                                    </a>
                                                ) : (
                                                    <div className="text-gray-900 font-medium">{info.value}</div>
                                                )}
                                            </div>
                                        </motion.div>
                                    )
                                })}
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <form onSubmit={handleSubmit} className="card">
                                <h3 className="text-2xl font-bold text-primary-900 mb-6">Envoyer un Message</h3>

                                {submitted && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800"
                                    >
                                        Merci pour votre message ! Je vous répondrai bientôt.
                                    </motion.div>
                                )}

                                <div className="space-y-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                            Votre Nom *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all ${errors.name ? 'border-red-500' : 'border-gray-300'
                                                }`}
                                            placeholder="Jean Dupont"
                                        />
                                        {errors.name && (
                                            <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                            Votre Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all ${errors.email ? 'border-red-500' : 'border-gray-300'
                                                }`}
                                            placeholder="jean@exemple.com"
                                        />
                                        {errors.email && (
                                            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                            Votre Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows="5"
                                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none ${errors.message ? 'border-red-500' : 'border-gray-300'
                                                }`}
                                            placeholder="Parlez-moi de votre projet ou opportunité..."
                                        />
                                        {errors.message && (
                                            <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                                        )}
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full btn-primary justify-center group"
                                    >
                                        <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                        Envoyer le Message
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Contact
