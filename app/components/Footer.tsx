import { TrendingUp, Mail, Twitter, Instagram, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <TrendingUp className="h-8 w-8 text-primary-500" />
              <span className="text-2xl font-bold text-white">TrendFinderIA</span>
            </div>
            <p className="text-white/70 mb-6 max-w-md">
              A ferramenta que criadores brasileiros usam para nunca mais perder uma oportunidade viral.
            </p>
            <div className="flex space-x-4">
              <Twitter className="w-6 h-6 text-white/60 hover:text-primary-400 cursor-pointer" />
              <Instagram className="w-6 h-6 text-white/60 hover:text-primary-400 cursor-pointer" />
              <Youtube className="w-6 h-6 text-white/60 hover:text-primary-400 cursor-pointer" />
              <Mail className="w-6 h-6 text-white/60 hover:text-primary-400 cursor-pointer" />
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Produto</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-white">Features</a></li>
              <li><a href="#" className="text-white/70 hover:text-white">Preços</a></li>
              <li><a href="#" className="text-white/70 hover:text-white">API</a></li>
              <li><a href="#" className="text-white/70 hover:text-white">Integrações</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Suporte</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-white">Central de Ajuda</a></li>
              <li><a href="#" className="text-white/70 hover:text-white">Contato</a></li>
              <li><a href="#" className="text-white/70 hover:text-white">Status</a></li>
              <li><a href="#" className="text-white/70 hover:text-white">Roadmap</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-white/60">
            © 2024 TrendFinderIA. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
