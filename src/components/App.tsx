import { links, pages } from '../data';
import { Header } from './Header';
import { Page } from './Page';

export const App = () => {
  return (
    <main className="app">
      <Header links={links} />
      {pages.map((p) => (
        <Page key={p.id} page={p} />
      ))}
    </main>
  );
};
