import { Title } from "@/components/Title";
import { QuestionAccordionsContainer, QuestionsContainer } from "./styles";
import { questionsData } from "@/data/commonquestions/questionsData";
import { QuestionAccordion } from "./QuestionAccordion";

export function CommonQuestions() {
  return (
    <QuestionsContainer>
      <header>
        <Title>Perguntas Frequentes</Title>
      </header>
      <QuestionAccordionsContainer>
        {questionsData.map((question) => (
          <QuestionAccordion key={question.question} question={question} />
        ))}
      </QuestionAccordionsContainer>
    </QuestionsContainer>
  );
}
