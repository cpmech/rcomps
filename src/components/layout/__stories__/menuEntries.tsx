import {
  IconGlobe,
  IconHouseThreeD,
  IconMoney,
  IconAddressBook,
  IconUser,
} from '@cpmech/react-icons';

export const entries = [
  {
    comp: <button onClick={() => window.alert('first clicked')}>First</button>,
  },
  {
    comp: <button onClick={() => window.alert('second clicked')}>Second</button>,
  },
  {
    icon: <IconHouseThreeD size={80} />,
    onClick: () => window.alert('house selected'),
  },
  {
    icon: <IconGlobe />,
    label: 'Mundo',
    onClick: () => window.alert('mundo selected'),
  },
  {
    icon: <IconMoney />,
    label: 'Dinheiro',
    onClick: () => window.alert('dinheiro selected'),
  },
  {
    icon: <IconHouseThreeD />,
    label: 'Casa',
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
    icon: <IconAddressBook />,
    label: 'Address book',
    entries: [
      {
        icon: <IconUser size={16} />,
        label: 'Bender',
        onClick: () => window.alert('Bender clicked'),
      },
      {
        icon: <IconUser size={16} />,
        label: 'Leela',
        onClick: () => window.alert('Leela clicked'),
      },
      {
        icon: <IconUser size={16} />,
        label: 'Fry',
        onClick: () => window.alert('Fry clicked'),
      },
    ],
  },
];
