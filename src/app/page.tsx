import { Metadata } from 'next'

import { AboutUs } from '@/containers/AboutUs'
import { Banner } from '@/containers/Banner'
import { CommonQuestions } from '@/containers/CommonQuestions'
import { Footer } from '@/containers/Footer'
import { OurServices } from '@/containers/OurServices'
import { Sidebar } from '@/containers/Sidebar'
export const metadata: Metadata = {
  title: 'Octagon Engenharia',
  description:
    'A OCTAGON ENGENHARIA é uma Empresa Júnior do curso de Engenharia Elétrica da Universidade Federal do Ceará - Campus de Sobral. Constitui-se em uma associação civil sem fins lucrativos, de caráter multiprofissional e unidisciplinar.',
  keywords: [
    'octagon',
    'engenharia',
    'sobral',
    'engenharia',
    'empresa júnior',
    'elétrica',
    'solar',
  ],
  authors: [
    {
      name: 'Vanderlei Furtuna',
      url: 'https://github.com/vander115',
    },
  ],
  openGraph: {
    title: 'Octagon Engenharia',
    description:
      'A OCTAGON ENGENHARIA é uma Empresa Júnior do curso de Engenharia Elétrica da Universidade Federal do Ceará - Campus de Sobral. Constitui-se em uma associação civil sem fins lucrativos, de caráter multiprofissional e unidisciplinar.',
    type: 'website',
    locale: 'pt_BR',
    url: 'https://www.octagon.ufc.br/',
    images: ['https://www.octagon.ufc.br/banner.png'],
  },
}
export default function Home() {
  return (
    <>
      <Sidebar />
      <Banner />
      <OurServices />
      <AboutUs />
      <CommonQuestions />
      <Footer />
    </>
  )
}
