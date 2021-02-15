import { RcMenuEntry } from '../RcMenuHoriz';

export const entries: RcMenuEntry[] = [
  {
    comp: <button onClick={() => window.alert('first clicked')}>First</button>,
  },
  {
    comp: <button onClick={() => window.alert('second clicked')}>Second</button>,
  },
  {
    icon: <div>ICON</div>,
    onClick: () => window.alert('house selected'),
  },
  {
    icon: <div>ICON</div>,
    label: 'Hello World',
    onClick: () => window.alert('Hello World selected'),
  },
  {
    icon: <div>ICON</div>,
    label: 'Setup Payments',
    onClick: () => window.alert('Setup Payments selected'),
  },
  {
    icon: <div>ICON</div>,
    label: 'Little house',
    entries: [
      {
        label: 'First',
        onClick: () => window.alert('First clicked'),
      },
      {
        label: 'Second',
        onClick: () => window.alert('Second clicked'),
      },
      {
        label: 'Third',
        onClick: () => window.alert('Third clicked'),
      },
    ],
  },
  {
    icon: <div>ICON</div>,
    label: 'Address book with nice people in it',
    entries: [
      {
        icon: <div>ICON</div>,
        label: 'Bender Rodriguez',
        onClick: () => window.alert('Bender clicked'),
      },
      {
        icon: <div>ICON</div>,
        label: 'Turanga Leela',
        onClick: () => window.alert('Leela clicked'),
      },
      {
        icon: <div>ICON</div>,
        label: 'Philip J Fry',
        onClick: () => window.alert('Fry clicked'),
      },
    ],
  },
];
