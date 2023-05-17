import { ReactNode } from 'react';
import { Character, TitleContainer, Word } from './styles';

interface IAnimatedTextProps {
  children: ReactNode;
}

export function Title({ children }: IAnimatedTextProps) {
  const letters = Array.from(children!.toString());

  const wordAnimation = {
    hidden: {},
    visible: {},
  };

  const charAnimation = {
    hidden: {
      opacity: 0,
      y: `4rem`,
    },
    visible: {
      opacity: 1,
      y: `0rem`,
      transition: {
        duration: 0.5,
        type: 'spring',
      },
    },
  };

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: i * 0.04,
      },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <TitleContainer>
      <Word
        style={{ overflow: 'hidden', display: 'flex' }}
        aria-hidden="true"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={wordAnimation}
        transition={{
          delayChildren: 0.25,
          staggerChildren: 0.05,
        }}
      >
        {letters.map((character, index) => (
          <Character aria-hidden="true" key={index} variants={charAnimation}>
            {character === ' ' ? '\u00A0' : character}
          </Character>
        ))}
      </Word>
    </TitleContainer>
  );
}
