import type { ReactElement } from 'react';
import type { IData } from '../types';

interface IBlackBoxProps {
  data: IData[];
}

export const BlackBox = ({ data }: IBlackBoxProps): ReactElement => {
  return (
    <article className="black-box g-box">
      {data.map((d) => (
        <div className="row" key={d.key}>
          <p>{d.key}</p>
          <p>{d.value}</p>
        </div>
      ))}
    </article>
  );
};
