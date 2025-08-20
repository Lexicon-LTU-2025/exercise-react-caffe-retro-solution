import type { ReactElement } from 'react';

interface IRedBoxProps {
  position: 'top' | 'bottom';
  slogan: string;
}

export const RedBox = ({ position, slogan }: IRedBoxProps): ReactElement => {
  return (
    <article className={`red-box g-box ${position}`}>
      <p>{slogan}</p>
    </article>
  );
};
