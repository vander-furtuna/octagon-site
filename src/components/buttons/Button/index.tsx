import { ButtonHTMLAttributes, ReactNode } from 'react'

import { ButtonContainer, ButtonIcon } from './styles'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  Icon?: JSX.Element
  href?: string
  iconPosition?: 'right' | 'left'
  isExternalLink?: boolean
}

export function Button({
  children,
  href = '#',
  Icon,
  iconPosition = 'left',
  isExternalLink = false,
  ...rest
}: IButtonProps) {
  return (
    <ButtonContainer {...rest} iconPosition={iconPosition}>
      {Icon && <ButtonIcon>{Icon}</ButtonIcon>}

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
