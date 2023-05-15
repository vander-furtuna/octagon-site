import { IService } from "@/dtos/IService";

export const serviceData: IService[] = [
  {
    title: "Projetos de Sistemas Fotovoltaicos",
    options: ["Elaboração", "Instalação", "Manutenção do sistema"],
    image_url:
      "https://images.unsplash.com/photo-1615630859219-0459703c34e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    href_id: "servico-fotovoltaico",
    button: {
      url: "",
      label: "Saiba Mais",
    },
  },
  {
    title: "Projetos de Instalações Elétricas",
    options: [
      "Atualização da instalação elétrica",
      "Orçamento do material",
      "Instalações elétricas prediais",
      "Consultoria e assesoria",
    ],
    image_url:
      "https://images.unsplash.com/photo-1615630859219-0459703c34e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    href_id: "servico-projeto",
    button: {
      url: "",
      label: "Saiba Mais",
    },
  },
  {
    title: "Manutenção de Instalações Elétricas",
    options: [
      "Manutenção preventiva",
      "Inspeção de instalação elétrica",
      "Manutenção do sistema",
    ],
    image_url:
      "https://images.unsplash.com/photo-1615630859219-0459703c34e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    href_id: "servico-manutencao",
    button: {
      url: "",
      label: "Saiba Mais",
    },
  },
];
