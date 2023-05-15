import { ICommonQuestion } from "@/dtos/ICommonQuestion";
import { AccodionHeader, AccordionContainer, AccordionContent } from "./styles";
import { useState } from "react";
import { CaretDown } from "@phosphor-icons/react";

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

        <CaretDown size={24} weight="fill" />
      </AccodionHeader>
      <AccordionContent isOpen={isOpen}> {answer}</AccordionContent>
    </AccordionContainer>
  );
}
