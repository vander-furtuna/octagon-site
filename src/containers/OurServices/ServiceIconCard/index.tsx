import { IServiceIcon } from '@/dtos/IService'

import { ServiceIconCardWrapper } from './styles'

interface IServiceIconCardProps {
  icon: IServiceIcon
}

export function ServiceIconCard({ icon }: IServiceIconCardProps) {
  const { Icon, title, href } = icon
  return (
    <ServiceIconCardWrapper href={href}>
      <div className="icon">{Icon}</div>
      <span>{title}</span>
    </ServiceIconCardWrapper>
  )
}
