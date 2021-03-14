import { RcMenuEntry } from '../RcMenuEntry';
import { IconEarth } from './IconEarth';
import { IconHeart } from './IconHeart';
import { IconHome } from './IconHome';
import { IconImage } from './IconImage';
import { IconRocket } from './IconRocket';
import { IconSparkles } from './IconSparkles';
import { IconStar } from './IconStar';

export const entries: RcMenuEntry[] = [
  {
    comp: <button onClick={() => window.alert('first clicked')}>First</button>,
  },
  {
    comp: <button onClick={() => window.alert('second clicked')}>Second</button>,
  },
  {
    icon: <IconHome size="48px" />,
    href: 'route',
  },
  {
    icon: <IconEarth size="48px" />,
    label: 'Hello World',
    href: 'route',
    underline: true,
  },
  {
    icon: <IconEarth size="48px" />,
    link: <button onClick={() => window.alert('earth clicked')}>Link</button>,
  },
  {
    icon: <IconHeart size="32px" />,
    label: 'Gimme some love',
    underline: true,
    onClick: () => window.alert('Gimme some love selected'),
  },
  {
    icon: <IconHeart size="32px" />,
    label: 'Gimme some love',
    onClick: () => window.alert('Gimme some love selected'),
  },
  {
    icon: <IconImage size="32px" />,
    label: 'Little house',
    entries: [
      {
        label: 'First',
        onClick: () => window.alert('First clicked'),
      },
      {
        label: 'Second',
        href: 'route',
      },
      {
        label: 'Third',
        onClick: () => window.alert('Third clicked'),
      },
    ],
  },
  {
    icon: <IconRocket size="32px" />,
    label: 'Address book with nice people in it',
    entries: [
      {
        icon: <IconSparkles size="24px" />,
        label: 'Bender Rodriguez',
        onClick: () => window.alert('Bender clicked'),
        subSubEntries: [1, 2, 3, 4].map((num) => ({
          icon: <IconStar size="18px" />,
          label: `${num}`,
          onClick: () => window.alert(`Bender clicked on number ${num}`),
        })),
      },
      {
        icon: <IconSparkles size="24px" />,
        label: 'Turanga Leela',
        onClick: () => window.alert('Leela clicked'),
        subSubEntries: [1, 2].map((num) => ({
          icon: <IconStar size="18px" />,
          label: `${num}`,
          href: 'route',
          underline: true,
        })),
      },
      {
        icon: <IconSparkles size="24px" />,
        label: 'Philip J Fry',
        onClick: () => window.alert('Fry clicked'),
      },
    ],
  },
];
