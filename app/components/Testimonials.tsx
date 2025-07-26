import { Star, Play } from 'lucide-react'

const testimonials = [
  {
    name: 'João Silva',
    channel: 'TechBrasil',
    subscribers: '127K subscribers',
    content: 'TrendFinderIA me salvou de fazer 3 vídeos saturados. Primeiro mês: +127% views médias. Descobri trend que gerou 2.3M views antes de qualquer concorrente.',
    rating: 5,
    avatar: '🧑‍💻'
  },
  {
    name: 'Maria Santos',
    channel: 'Culinária Fácil',
    subscribers: '89K subscribers', 
    content: 'Nunca mais fico sem ideia do que postar. Os alertas chegam na hora certa e as sugestões personalizadas são perfeitas para meu público.',
    rating: 5,
    avatar: '👩‍🍳'
  },
  {
    name: 'Pedro Costa',
    channel: 'Fitness Brasil',
    subscribers: '234K subscribers',
    content: 'ROI absurdo. Pago R$ 97 e já recuperei em 1 vídeo viral que descobri através da plataforma. Ferramenta indispensável.',
    rating: 5,
    avatar: '💪'
  }
]

const stats = [
  { value: '2.847', label: 'Criadores ativos' },
  { value: '847', label: 'Trends detectados/semana' },
  { value: '96%', label: 'Precisão de previsão' },
  { value: 'R$ 2.3M', label: 'Em views geradas' }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Cases de <span className="text-gradient">sucesso reais</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Veja como criadores estão transformando seus canais
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass p-6 rounded-2xl">
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-white/80 mb-6 italic">"{testimonial.content}"</p>

              {/* Author */}
              <div className="flex items-center">
                <div className="text-3xl mr-4">{testimonial.avatar}</div>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-primary-400">{testimonial.channel}</div>
                  <div className="text-white/60 text-sm">{testimonial.subscribers}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Testimonial CTA */}
        <div className="text-center">
          <button className="inline-flex items-center px-8 py-4 glass rounded-xl text-white hover:bg-white/20 transition-all">
            <Play className="w-6 h-6 mr-3" />
            Ver mais cases em vídeo
          </button>
        </div>
      </div>
    </section>
  )
}
