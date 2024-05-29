import { Minus, Plus } from '@phosphor-icons/react'
import { useState } from 'react'

import { ICommonQuestion } from '@/dtos/ICommonQuestion'

import { AccordionContainer } from './styles'

interface IQuestionAccordion {
  question: ICommonQuestion
}

export function QuestionAccordion({
  question: { answer, question },
}: IQuestionAccordion) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <AccordionContainer>
      <div className="accordion-header">
        <span>{question}</span>
        <div className="icon-container">
          <Minus size={24} width="bold" className="minus" />
          <Plus size={24} weight="bold" className="plus" />
        </div>
      </div>
      <div className="accordion-content">
        <span>{answer}</span>
      </div>
    </AccordionContainer>
  )
}
