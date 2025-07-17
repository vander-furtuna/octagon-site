import { cn } from '@/lib/utils'
import type { ComponentProps } from 'react'

type NavItemProps = ComponentProps<'a'>

export function NavItem({ className, ...props }: NavItemProps) {
  return (
    <a
      className={cn(
        'text-primary-300 after:bg-primary-700 relative flex items-center rounded-md text-base font-semibold uppercase ease-in-out after:absolute after:-bottom-1 after:left-1/2 after:h-0.5 after:w-0 after:-translate-x-1/2 after:transition-all after:duration-300 after:content-[""] hover:after:w-10/12',
        className,
      )}
      {...props}
    />
  )
}
