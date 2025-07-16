'use client'

import { motion } from 'framer-motion'
import styled from 'styled-components'

import { ColorVariantType } from '.'

interface ITitleContainer {
  variant: ColorVariantType
}

export const TitleContainer = styled(motion.h1)<ITitleContainer>`
  font-size: 2rem;
  color: ${({ theme, variant }) =>
    variant === 'dark' ? theme.title.color.bold : theme.title.color.primary};
  position: relative;
  text-align: center;
  text-transform: uppercase;
  width: fit-content;
  height: fit-content;

  &::after {
    content: '';
    position: absolute;
    width: 85%;
    bottom: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
    height: 4px;
    border-radius: 10px;

    background: ${({ theme, variant }) =>
      variant === 'dark'
        ? theme.title.underline.bold
        : theme.title.underline.primary};
  }

  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
  }
`

export const Character = styled(motion.span)`
  display: inline-block;
  margin-right: 0.05rem;
  font-family: inherit;
`

export const Word = styled(motion.div)`
  & + span {
    margin-left: 0.35rem;
  }
  font-family: inherit;
  display: inline-block;
  line-height: 1.2;

  white-space: nowrap;
`
