
'use client'
import { useState } from 'react'
import { Menu, X, TrendingUp } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed w-full z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <TrendingUp className="h-8 w-8 text-primary-500" />
            <span className="text-2xl font-bold text-white">TrendFinderIA</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-white hover:text-primary-400 transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-white hover:text-primary-400 transition-colors">
              Preços
            </a>
            <a href="#testimonials" className="text-white hover:text-primary-400 transition-colors">
              Cases
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex space-x-4">
            <button className="text-white hover:text-primary-400 transition-colors">
              Login
            </button>
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg transition-colors">
              Começar Grátis
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-primary-400"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-white hover:text-primary-400">Features</a>
              <a href="#pricing" className="text-white hover:text-primary-400">Preços</a>
              <a href="#testimonials" className="text-white hover:text-primary-400">Cases</a>
              <button className="bg-primary-600 text-white px-4 py-2 rounded-lg w-full">
                Começar Grátis
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
