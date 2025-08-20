import type { ReactElement } from 'react';
import type { ILink } from '../types';
import { Link } from './Link';

interface IHeaderProps {
  links: ILink[];
}

export const Header = ({ links }: IHeaderProps): ReactElement => {
  return (
    <header className="header">
      {links.map((l) => (
        <Link key={l.id} link={l} />
      ))}
    </header>
  );
};
