'use client'
import { ArrowRight, Play, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section className="pt-32 pb-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full glass text-white text-sm mb-8 animate-fade-in">
            <Star className="w-4 h-4 mr-2 text-yellow-400" />
            Usado por 2.847 criadores brasileiros
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up">
            Nunca mais perca uma
            <span className="text-gradient block">oportunidade viral</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto animate-slide-up">
            Detecte trends emergindo antes da saturação. IA personalizada que analisa YouTube, TikTok e Google em tempo real.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up">
            <button className="bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center">
              Analisar Meu Canal Grátis
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="flex items-center text-white hover:text-primary-400 transition-colors">
              <Play className="w-6 h-6 mr-2" />
              Ver Demo (2 min)
            </button>
          </div>

          {/* Social Proof */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto text-white/60 animate-fade-in">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">847</div>
              <div className="text-sm">Trends detectados esta semana</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">2.3M</div>
              <div className="text-sm">Views geradas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">96%</div>
              <div className="text-sm">Precisão de previsão</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
