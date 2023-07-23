import { ICommonQuestion } from '@/dtos/ICommonQuestion';
import { AccodionHeader, AccordionContainer, AccordionContent } from './styles';
import { useState } from 'react';
import { Minus, Plus } from '@phosphor-icons/react';

interface IQuestionAccordion {
    question: ICommonQuestion;
}

export function QuestionAccordion({
    question: { answer, question },
}: IQuestionAccordion) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <AccordionContainer>
            <AccodionHeader
                isOpen={isOpen}
                onClick={() => setIsOpen((prev) => !prev)}
            >
                <span>{question}</span>
                <div className="icon-container">
                    {isOpen ? (
                        <Minus size={24} width="bold" />
                    ) : (
                        <Plus size={24} weight="bold" />
                    )}
                </div>
            </AccodionHeader>
            <AccordionContent isOpen={isOpen}>
                <span>{answer}</span>
            </AccordionContent>
        </AccordionContainer>
    );
}
