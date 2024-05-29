import { EnergyEfficiencyIcon } from '@/assets/icons/energy_efficiency'
import { MaintenanceIcon } from '@/assets/icons/maintenance_icon'
import { PhotovoltaicIcon } from '@/assets/icons/photovoltaic_icon'
import { ProjectIcon } from '@/assets/icons/project_icon'
import { IServiceIcon } from '@/dtos/IService'

export const iconsData: IServiceIcon[] = [
  {
    title: 'Projetos de Sistemas Fotovotaicos',
    Icon: <PhotovoltaicIcon />,
    href: '#projeto-fotovoltaico',
  },
  {
    title: 'Projetos de Instalações Elétricas',
    Icon: <ProjectIcon />,
    href: '#projeto-eletrico',
  },
  {
    title: 'Láudos Técnicos',
    Icon: <MaintenanceIcon />,
    href: '#laudos-tecnicos',
  },
  {
    title: 'Eficiência Energética',
    Icon: <EnergyEfficiencyIcon />,
    href: '#eficiencia-energetica',
  },
]
