import { Story, Meta } from '@storybook/react/types-6-0';
import { RcDualMenuHoriz, RcDualMenuHorizProps } from '../RcDualMenuHoriz';
import { IconAddressBook, IconGlobe, IconHouseThreeD, IconUser } from '@cpmech/react-icons';
import { RcMenuEntry } from '../../layout';

const entriesLeft: RcMenuEntry[] = [
  {
    icon: <IconHouseThreeD size="80px" />,
    onClick: () => window.alert('house selected'),
  },
  {
    icon: <IconGlobe />,
    label: 'Mundo',
    onClick: () => window.alert('mundo selected'),
  },
];

const entriesRight: RcMenuEntry[] = [
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
        icon: <IconUser size="16px" />,
        label: 'Bender',
        onClick: () => window.alert('Bender clicked'),
      },
      {
        icon: <IconUser size="16px" />,
        label: 'Leela',
        onClick: () => window.alert('Leela clicked'),
      },
      {
        icon: <IconUser size="16px" />,
        label: 'Fry',
        onClick: () => window.alert('Fry clicked'),
      },
    ],
  },
];

export default {
  title: 'Composite/RcDualMenuHoriz',
  component: RcDualMenuHoriz,
} as Meta;

const Template: Story<RcDualMenuHorizProps> = (args) => (
  <RcDualMenuHoriz
    {...args}
    left={{ entries: entriesLeft, gapHorizEntries: '20px' }}
    right={{ entries: entriesRight, gapHorizEntries: '50px' }}
  />
);

export const Default = Template.bind({});
