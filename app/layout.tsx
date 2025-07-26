import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TrendFinderIA - Curadoria Inteligente de Conteúdo',
  description: 'Nunca mais perca uma oportunidade viral. Detecte trends emergindo antes da saturação.',
  keywords: 'trends, youtube, tiktok, criadores, conteúdo, viral',
  authors: [{ name: 'TrendFinderIA Team' }],
  openGraph: {
    title: 'TrendFinderIA - Curadoria Inteligente de Conteúdo',
    description: 'Detecte trends emergindo antes da saturação',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
