import { TrendingUp, Target, Zap, Shield, Users, BarChart } from 'lucide-react'

const features = [
  {
    icon: TrendingUp,
    title: 'Detecção de Saturação',
    description: 'Sistema visual de semáforo mostra quando trend está emergindo, no pico ou saturado.',
    color: 'text-success-500'
  },
  {
    icon: Target,
    title: 'IA Personalizada',
    description: 'Analisa seu canal e sugere trends customizados baseados no seu DNA de conteúdo.',
    color: 'text-primary-500'
  },
  {
    icon: Zap,
    title: 'Alertas em Tempo Real',
    description: 'Notificações instantâneas quando oportunidades emergem no seu nicho.',
    color: 'text-warning-500'
  },
  {
    icon: Shield,
    title: 'Multi-Plataforma',
    description: 'YouTube, TikTok e Google integrados em um dashboard único.',
    color: 'text-danger-500'
  },
  {
    icon: Users,
    title: 'Análise de Concorrentes',
    description: 'Monitore competidores e descubra estratégias que funcionam.',
    color: 'text-purple-500'
  },
  {
    icon: BarChart,
    title: 'Performance Tracking',
    description: 'Acompanhe ROI dos seus vídeos e otimize baseado em dados.',
    color: 'text-blue-500'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Features que <span className="text-gradient">mudam o jogo</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Tudo que você precisa para never mais perder uma oportunidade viral
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass p-8 rounded-2xl hover:bg-white/20 transition-all duration-300 group"
            >
              <feature.icon className={`w-12 h-12 ${feature.color} mb-6 group-hover:scale-110 transition-transform`} />
              <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105">
            Ver Todas as Features
          </button>
        </div>
      </div>
    </section>
  )
}
