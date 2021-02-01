import {
  IconGlobe,
  IconHouseThreeD,
  IconMoney,
  IconAddressBook,
  IconUser,
} from '@cpmech/react-icons';
import { Button } from '../foundation/Button';

export const entries = [
  {
    comp: <Button onClick={() => window.alert('first clicked')}>First</Button>,
  },
  {
    comp: <Button onClick={() => window.alert('second clicked')}>Second</Button>,
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

export const entriesLeft = [
  {
    icon: <IconHouseThreeD size={80} />,
    onClick: () => window.alert('house selected'),
  },
  {
    icon: <IconGlobe />,
    label: 'Mundo',
    onClick: () => window.alert('mundo selected'),
  },
];

export const entriesRight = [
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
