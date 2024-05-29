import electricProjectImg from '@/assets/images/services/electric-project.jpg'
import energyEfficiencyImg from '@/assets/images/services/energy-efficiency.jpg'
import photovoltaicProjectImg from '@/assets/images/services/photovoltaic-project.jpg'
import technicalReportImg from '@/assets/images/services/technical-report.jpg'
import { IService } from '@/dtos/IService'

const CONTACT_LINK = process.env.NEXT_PUBLIC_WHATSAPP_LINK || ''

export const serviceData: IService[] = [
  {
    title: 'Projetos de Sistemas Fotovoltaicos',
    options: [
      'Elaboração de projetos',
      'Instalação de equipamentos',
      'Manutenção do sistema',
    ],
    image_url: photovoltaicProjectImg.src,
    href_id: 'projeto-fotovoltaico',
    button: {
      url: CONTACT_LINK,
      label: 'Saiba Mais',
    },
  },
  {
    title: 'Projetos de Instalações Elétricas',
    options: [
      'Instalações prediais e residenciais',
      'Orçamento de material',
      'SPDA',
      'Consultoria e assessoria',
      'Manutenção preventiva e corretiva',
      'Inspeção da instalação elétrica',
    ],
    image_url: electricProjectImg.src,
    href_id: 'projeto-eletrico',
    button: {
      url: CONTACT_LINK,
      label: 'Saiba Mais',
    },
  },
  {
    title: 'Elaboração de Laudo Técnico',
    options: [
      'Laudo de aterramento',
      'Laudo de instalação elétrica',
      'Laudo de SPDA',
    ],
    image_url: technicalReportImg.src,
    href_id: 'laudos-tecnicos',
    button: {
      url: CONTACT_LINK,
      label: 'Saiba Mais',
    },
  },
  {
    title: 'Análise de Eficiência Energética',
    options: [
      'Análise da fatura de conta de energia',
      'Elaboração e implementação de medidas de eficiência energética',
      'Projetos de geração de energia com painéis fotovoltaicos',
    ],
    image_url: energyEfficiencyImg.src,
    href_id: 'eficiencia-energetica',
    button: {
      url: CONTACT_LINK,
      label: 'Saiba Mais',
    },
  },
]
