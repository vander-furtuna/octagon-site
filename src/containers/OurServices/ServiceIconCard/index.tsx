import { IServiceIcon } from "@/dtos/IService";
import { ServiceIconCardWrapper } from "./styles";

interface IServiceIconCardProps extends IServiceIcon {}

export function ServiceIconCard({ Icon, title, href }: IServiceIconCardProps) {
  return (
    <ServiceIconCardWrapper href={href}>
      <div className="icon">{Icon}</div>
      <span>{title}</span>
    </ServiceIconCardWrapper>
  );
}
