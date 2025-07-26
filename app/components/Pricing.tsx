import { Check, Star } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: 'Grátis',
    period: 'para sempre',
    description: 'Perfeito para começar',
    features: [
      '3 análises por semana',
      'Alertas básicos',
      'Dashboard simples',
      'Suporte por email'
    ],
    cta: 'Começar Grátis',
    popular: false
  },
  {
    name: 'Pro',
    price: 'R$ 97',
    period: '/mês',
    description: 'Para criadores sérios',
    features: [
      'Análises ilimitadas',
      'Alertas em tempo real',
      'IA personalizada',
      '10 nichos monitorados',
      'Análise de concorrentes',
      'Suporte prioritário'
    ],
    cta: 'Começar Trial 7 dias',
    popular: true
  },
  {
    name: 'Creator',
    price: 'R$ 297',
    period: '/mês',
    description: 'Para múltiplos canais',
    features: [
      'Tudo do Pro',
      'Multi-canais ilimitados',
      'White-label reports',
      'API access',
      'Manager dedicado',
      'Consultoria mensal'
    ],
    cta: 'Falar com Vendas',
    popular: false
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Preços que <span className="text-gradient">cabem no bolso</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Comece grátis e escale conforme seu crescimento
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-2xl ${
                plan.popular 
                  ? 'bg-gradient-to-b from-primary-600 to-primary-700 ring-2 ring-primary-400' 
                  : 'glass'
              } hover:scale-105 transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Mais Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-white/70 ml-1">{plan.period}</span>
                </div>
                <p className="text-white/70">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-success-500 mr-3 flex-shrink-0" />
                    <span className="text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all ${
                plan.popular
                  ? 'bg-white text-primary-600 hover:bg-gray-100'
                  : 'bg-primary-600 text-white hover:bg-primary-700'
              }`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 glass rounded-full text-white">
            <Shield className="w-5 h-5 mr-2 text-success-500" />
            Garantia de 30 dias - 100% do dinheiro de volta
          </div>
        </div>
      </div>
    </section>
  )
}
