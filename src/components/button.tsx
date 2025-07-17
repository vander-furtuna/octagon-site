import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import type { ComponentProps } from 'react'

type ButtonProps = ComponentProps<'button'> & {
  asChild?: boolean
}

export function Button({
  className,
  children,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp
      className={cn(
        'bg-primary-300 hover:bg-primary-100 border-primary-100 focus-visible:ring-primary-300 flex size-fit items-center justify-center gap-1 rounded-sm border-l-4 px-5 py-4 text-base font-bold text-stone-900 uppercase transition-colors disabled:pointer-events-none disabled:opacity-50',
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}
