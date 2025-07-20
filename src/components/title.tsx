'use client'

import { motion } from 'motion/react'
import type { ComponentProps } from 'react'

type TitleProps = ComponentProps<'strong'>

export function Title({ children }: TitleProps) {
  const letters = Array.from(children!.toLocaleString())

  return (
    <motion.h2 className="text-primary-300 after:bg-primary-700 font-heading relative size-fit text-center text-4xl font-bold uppercase">
      <strong className="size-fit overflow-hidden">
        {letters.map((character, index) => (
          <motion.span
            key={`${character}-${index}`}
            aria-hidden="true"
            className="inline-block"
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,

              type: 'spring',
              delay: 0.05 * index,
            }}
          >
            {character === ' ' ? '\u00A0' : character}
          </motion.span>
        ))}
      </strong>
      <motion.div
        className="bg-primary-700 absolute -bottom-2 left-1/2 h-1 w-10/12 -translate-x-1/2 rounded-full"
        initial={{
          width: '0%',
        }}
        whileInView={{
          width: '85%',
        }}
        transition={{
          type: 'spring',
          duration: 2,
        }}
      />
    </motion.h2>
  )
}
