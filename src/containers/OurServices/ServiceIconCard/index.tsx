import { ServiceIconCardWrapper } from './styles';

interface IServiceIconCardProps {
  Icon: JSX.Element;
  title: string;
}

export function ServiceIconCard({ Icon, title }: IServiceIconCardProps) {
  return (
    <ServiceIconCardWrapper>
      <div className="icon">{Icon}</div>
      <span>{title}</span>
    </ServiceIconCardWrapper>
  );
}
