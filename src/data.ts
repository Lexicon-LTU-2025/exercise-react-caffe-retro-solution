import type { ILink, IPage } from './types';

export const links: ILink[] = [
  { id: '1', href: '#hot', label: 'hot' },
  { id: '2', href: '#juicy', label: 'juicy' },
  { id: '3', href: '#cosy', label: 'cosy' },
];

export const pages: IPage[] = [
  {
    bg: '/hot.jpg',
    data: [
      { key: 'Mocha Latte', value: '€ 7.50' },
      { key: 'Caffe Formaggio', value: '€ 5.00' },
      { key: 'Espresso', value: '€ 3.50' },
      { key: 'Chai Verde Latte', value: '€ 5.50' },
    ],
    id: 'hot',
    slogans: [
      'Hot freshly ground black coffee or a cup of exquisite tea?',
      'We give you that perfect cup every time.',
    ],
    title: 'hot',
  },
  {
    bg: '/juicy.jpg',
    data: [
      { key: 'Branched Apricots', value: '€ 4.20' },
      { key: 'Deep Rasberries', value: '€ 3.50' },
      { key: 'Smooth Oranges ', value: '€ 6.50' },
    ],
    id: 'juicy',
    slogans: [
      'Hot freshly ground black coffee or a cup of exquisite tea?',
      'We give you that perfect cup every time.',
    ],
    title: 'juicy',
  },
  {
    bg: '/cosy.jpg',
    data: [
      { key: 'Mon-Sun', value: '8am – 11pm' },
      { key: 'Caffe Retro', value: 'Canto VI' },
      { key: '0123-45 67 89', value: 'caffe@lorem.pge' },
    ],
    id: 'cosy',
    slogans: [
      'Hang around. Enjoy the settings.',
      'Use our fast WiFi. Borrow a newspaper or a novel.',
    ],
    title: 'cosy',
  },
];
