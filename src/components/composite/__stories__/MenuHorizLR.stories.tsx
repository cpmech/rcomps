import { Story, Meta } from '@storybook/react/types-6-0';
import { MenuHorizLR, IMenuHorizLRProps } from '../MenuHorizLR';
import { IconAddressBook, IconGlobe, IconHouseThreeD, IconUser } from '@cpmech/react-icons';

const entriesLeft = [
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

const entriesRight = [
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

export default {
  title: 'Composite/MenuHorizLR',
  component: MenuHorizLR,
} as Meta;

const Template: Story<IMenuHorizLRProps> = (args) => (
  <MenuHorizLR
    {...args}
    left={{ entries: entriesLeft, gapHorizEntries: 20 }}
    right={{ entries: entriesRight, gapHorizEntries: 50 }}
  />
);

export const Default = Template.bind({});
