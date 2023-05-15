import { MaintenanceIcon } from "@/assets/icons/maintenance_icon";
import { PhotovoltaicIcon } from "@/assets/icons/photovoltaic_icon";
import { ProjectIcon } from "@/assets/icons/project_icon";
import { IServiceIcon } from "@/dtos/IService";

export const iconsData: IServiceIcon[] = [
  {
    title: "Projetos de Sistemas Fotovotáicos",
    Icon: <PhotovoltaicIcon />,
    href: "#servico-fotovoltaico",
  },
  {
    title: "Projetos de Instalações Elétricas",
    Icon: <ProjectIcon />,
    href: "#servico-projeto",
  },
  {
    title: "Manutenção de Instalações Elétricas",
    Icon: <MaintenanceIcon />,
    href: "#servico-manutencao",
  },
];
