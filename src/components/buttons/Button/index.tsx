import { ButtonHTMLAttributes, ReactNode } from 'react'

import { Icon, IconName } from '@/components/Icon'

import { ButtonContainer, ButtonIcon } from './styles'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  icon?: IconName
  href?: string
  iconPosition?: 'right' | 'left'
  isExternalLink?: boolean
}

export function Button({
  children,
  href = '#',
  icon,
  iconPosition = 'left',
  isExternalLink = false,
  ...rest
}: IButtonProps) {
  return (
    <ButtonContainer {...rest} iconPosition={iconPosition}>
      {icon && (
        <ButtonIcon>
          <Icon name={icon} />
        </ButtonIcon>
      )}

      <a
        href={href}
        target={isExternalLink ? '_blank' : '_self'}
        rel="noreferrer"
      >
        {children}
      </a>
    </ButtonContainer>
  )
}
