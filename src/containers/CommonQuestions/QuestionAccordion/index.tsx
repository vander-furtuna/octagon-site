import { Minus, Plus } from 'lucide-react'

import { ICommonQuestion } from '@/dtos/ICommonQuestion'

import { AccordionContainer } from './styles'

interface IQuestionAccordion {
  question: ICommonQuestion
}

export function QuestionAccordion({
  question: { answer, question },
}: IQuestionAccordion) {
  const slug = question.toLowerCase().replace(/ /g, '-')
  return (
    <AccordionContainer>
      <label className="accordion-header" htmlFor={slug}>
        <span>{question}</span>
        <div className="icon-container">
          <Minus size={24} className="minus" />
          <Plus size={24} className="plus" />
        </div>
        <input type="checkbox" id={slug} />
      </label>
      <div className="accordion-content">
        <span>{answer}</span>
      </div>
    </AccordionContainer>
  )
}
