import type { Metadata } from 'next'
import './globals.css'
import localFont from 'next/font/local'

const inter = localFont({
  src: '../assets/fonts/inter/inter-variable.ttf',
  variable: '--font-inter',
  display: 'swap',
})

const baiJamjuree = localFont({
  src: [
    {
      path: '../assets/fonts/bai-jamjuree/BaiJamjuree-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/bai-jamjuree/BaiJamjuree-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/bai-jamjuree/BaiJamjuree-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../assets/fonts/bai-jamjuree/BaiJamjuree-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-bai-jamjuree',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Octagon Jr. Engenharia',
  description:
    'A Octagon Engenharia é uma Empresa Júnior do curso de Engenharia Elétrica da Universidade Federal do Ceará - Campus de Sobral. Constitui-se em uma associação civil sem fins lucrativos, de caráter multiprofissional e unidisciplinar.',
  keywords: [
    'Octagon Jr.',
    'Engenharia Elétrica',
    'Empresa Júnior',
    'UFC Sobral',
    'Engenharia',
    'Empreendedorismo',
    'Inovação',
    'Tecnologia',
    'Consultoria',
    'Projetos Elétricos',
    'Sustentabilidade',
    'Educação',
    'Desenvolvimento',
    'Comunidade',
    'Empresas Juniores',
    'Energia',
    'Energia Solar',
    'Eficiência Energética',
    'Energia Renovável',
  ],
  authors: [
    {
      name: 'Vanderlei Furtuna',
      url: 'https://github.com/vander-furtuna',
    },
  ],
  openGraph: {
    title: 'Octagon Engenharia | Empresa Júnior de Engenharia Elétrica',
    description:
      'A Octagon Engenharia é uma Empresa Júnior do curso de Engenharia Elétrica da Universidade Federal do Ceará - Campus de Sobral.',
    images: ['https://octagon.ufc.br/banner.png'],
    url: 'https://octagon.ufc.br',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${inter.variable} ${baiJamjuree.variable} bg-stone-900 font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
