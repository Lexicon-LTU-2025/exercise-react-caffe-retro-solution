import type { ReactElement } from 'react';
import type { IPage } from '../types';
import { RedBox } from './RedBox';
import { BlackBox } from './BlackBox';

interface IPageProps {
  page: IPage;
}

export const Page = ({ page }: IPageProps): ReactElement => {
  const { bg, data, id, slogans, title } = page;

  return (
    <section className="page" id={id} style={{ backgroundImage: `url(${bg})` }}>
      <h2>{title}</h2>
      {slogans.map((s, index) => (
        <RedBox key={s} position={index === 0 ? 'top' : 'bottom'} slogan={s} />
      ))}
      <BlackBox data={data} />
    </section>
  );
};
