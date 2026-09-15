import type { ReactNode } from 'react';
import { CardContainer, CardTags, CardTitle, TagCustom, CardInfos } from './style';

export interface CardProps {
  title: string;
  image: string;
  icon?: string;
  nota?: number;
  description: string;
  infos?: string[];
  children: ReactNode;
}

export default function Card({
  title,
  image,
  nota,
  description,
  children,
  icon,
  infos = [],
}: CardProps) {
  return (
    <CardContainer>
      <img src={image} alt={title} />
      <CardTags>
        {infos.map((info) => (
          <TagCustom key={info}>{info}</TagCustom>
        ))}
      </CardTags>
      <CardInfos>
        <CardTitle>
          <h3>{title}</h3>
          <div>
            <h3>{nota}</h3>
            {icon && <img src={icon} alt={`Ícone de ${title}`} />}
          </div>
        </CardTitle>
        <p>{description}</p>
        {children}
      </CardInfos>
    </CardContainer>
  );
}
