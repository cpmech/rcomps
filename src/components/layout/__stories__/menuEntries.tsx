import {
  IconGlobe,
  IconHouseThreeD,
  IconMoney,
  IconAddressBook,
  IconUser,
} from '@cpmech/react-icons';
import { RcMenuEntry } from '../RcMenuHoriz';

export const entries: RcMenuEntry[] = [
  {
    comp: <button onClick={() => window.alert('first clicked')}>First</button>,
  },
  {
    comp: <button onClick={() => window.alert('second clicked')}>Second</button>,
  },
  {
    icon: <IconHouseThreeD size="80px" />,
    onClick: () => window.alert('house selected'),
  },
  {
    icon: <IconGlobe />,
    label: 'Hello World',
    onClick: () => window.alert('Hello World selected'),
  },
  {
    icon: <IconMoney />,
    label: 'Setup Payments',
    onClick: () => window.alert('Setup Payments selected'),
  },
  {
    icon: <IconHouseThreeD />,
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
    icon: <IconAddressBook />,
    label: 'Address book with nice people in it',
    entries: [
      {
        icon: <IconUser size="16px" />,
        label: 'Bender Rodriguez',
        onClick: () => window.alert('Bender clicked'),
      },
      {
        icon: <IconUser size="16px" />,
        label: 'Turanga Leela',
        onClick: () => window.alert('Leela clicked'),
      },
      {
        icon: <IconUser size="16px" />,
        label: 'Philip J Fry',
        onClick: () => window.alert('Fry clicked'),
      },
    ],
  },
];
