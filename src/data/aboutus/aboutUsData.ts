interface IAboutUs {
    title: string;
    description: string[];
}

export const aboutUsData: IAboutUs[] = [
    {
        title: 'Quem somos',
        description:
            ['A OCTAGON ENGENHARIA é uma Empresa Júnior do curso de Engenharia Elétrica da Universidade Federal do Ceará - Campus de Sobral. Constitui-se em uma associação civil sem fins lucrativos, de caráter multiprofissional e unidisciplinar.'],
    },
    {
        title: 'Missão',
        description:
            ['Nossa missão é proporcionar aos membros efetivos, condições necessárias à aplicação prática dos conhecimentos obtidos durante a graduação e dar à sociedade o retorno aos investimentos que ela realiza na universidade pública através de serviços de baixo custo e qualidade, ofertados por alunos da UFC.'],
    },
    {
        title: 'Visão e Valores',
        description:
            ['Aprendizado contínuo: Buscar sempre aprimorar e adquirir novos conhecimentos, valorizando o aprendizado como base para o crescimento pessoal e profissional.', 'Excelência: Buscar a excelência em todas as atividades realizadas, oferecendo serviços de qualidade e buscando constantemente a melhoria dos processos.', 'Paixão: sentir empolgação com o que é feito, como é feito e pelas pessoas envolvidas, inspirando excelência e promovendo criatividade para superar obstáculos.', 'Valorização das pessoas: Reconhecer e valorizar o potencial de cada membro da equipe, promovendo um ambiente inclusivo e respeitoso.', 'Inovação e criatividade: Estimular a criatividade e a busca por soluções inovadoras, buscando sempre novas abordagens para os desafios apresentados.'],
    },
];
