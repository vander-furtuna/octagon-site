import styled from 'styled-components';
import { motion } from 'framer-motion';

export const TitleContainer = styled(motion.h1)`
  font-size: 2rem;
  color: ${({ theme }) => theme.title.color};
  position: relative;
  text-align: center;
  text-transform: uppercase;
  width: fit-content;

  &::after {
    content: '';
    position: absolute;
    width: 85%;
    bottom: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
    height: 4px;
    border-radius: 10px;

    background: ${({ theme }) => theme.title.underline};
  }

  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

export const Character = styled(motion.span)`
  display: inline-block;
  margin-right: 0.05rem;
`;

export const Word = styled(motion.div)`
  & + span {
    margin-left: 0.35rem;
  }
  display: inline-block;
  line-height: 1.2;

  white-space: nowrap;
`;
