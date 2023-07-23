import { Title } from '@/components/Title';
import {
    QuestionAccordionsContainer,
    QuestionsContainer,
    WhatsAppCard,
} from './styles';
import { questionsData } from '@/data/commonquestions/questionsData';
import { QuestionAccordion } from './QuestionAccordion';
import { WhatsAppIcon } from '@/assets/icons/whatsAppIcon';
import { Button } from '@/components/buttons/Button';

export function CommonQuestions() {
    const CONTACT_LINK = process.env.NEXT_PUBLIC_WHATSAPP_LINK || '';

    return (
        <QuestionsContainer id="faq">
            <header>
                <Title>FAQ</Title>
                <span className="subtitle">
                    Perguntas e respostas mais frequentes
                </span>
            </header>
            <QuestionAccordionsContainer>
                {questionsData.map((question) => (
                    <QuestionAccordion
                        key={question.question}
                        question={question}
                    />
                ))}
                <WhatsAppCard>
                    <WhatsAppIcon className="icon" />
                    <div className="informations">
                        <h2>Ainda tem alguma dúvida?</h2>
                        <span>Envie uma mensagem, estamos a disposição!</span>
                    </div>

                    <Button
                        className="button"
                        isExternalLink
                        href={CONTACT_LINK}
                    >
                        WhatsApp
                    </Button>
                </WhatsAppCard>
            </QuestionAccordionsContainer>
        </QuestionsContainer>
    );
}
