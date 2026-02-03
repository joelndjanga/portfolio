import React from 'react'
import { Linkedin, Mail, Github } from 'lucide-react'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-primary-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* About */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Joël NDJANGA</h3>
                        <p className="text-gray-300 text-sm">
                            Auditeur Interne Junior & Spécialiste Finance dédié à assurer la transparence financière,
                            la gestion des risques et l'excellence en business intelligence.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Liens Rapides</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                                    À Propos
                                </a>
                            </li>
                            <li>
                                <a href="#experience" className="text-gray-300 hover:text-white transition-colors">
                                    Expérience
                                </a>
                            </li>
                            <li>
                                <a href="#skills" className="text-gray-300 hover:text-white transition-colors">
                                    Compétences
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Connexion</h3>
                        <div className="flex gap-4">
                            <a
                                href="https://linkedin.com/in/joël-ndjanga"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-primary-800 hover:bg-primary-700 rounded-full flex items-center justify-center transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a
                                href="mailto:ndjangaeldad@gmail.com"
                                className="w-10 h-10 bg-primary-800 hover:bg-primary-700 rounded-full flex items-center justify-center transition-colors"
                                aria-label="Email"
                            >
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-primary-800 pt-8 text-center text-sm text-gray-300">
                    <p>
                        © {currentYear} Joël NDJANGA. Tous droits réservés.
                    </p>
                    <p className="mt-2 text-xs">
                        Développé avec React, Vite, TailwindCSS & Framer Motion
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
