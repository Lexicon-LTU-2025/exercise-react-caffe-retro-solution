import type { ReactElement } from 'react';
import type { ILink } from '../types';

interface ILinkProps {
  link: ILink;
}

export const Link = ({ link }: ILinkProps): ReactElement => {
  const { href, label } = link;

  return (
    <a href={href} className="link">
      {label}
    </a>
  );
};
