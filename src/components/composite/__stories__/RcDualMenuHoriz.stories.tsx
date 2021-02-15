import { Story, Meta } from '@storybook/react/types-6-0';
import { RcDualMenuHoriz, RcDualMenuHorizProps } from '../RcDualMenuHoriz';
import { RcMenuEntry } from '../../layout';

const entriesLeft: RcMenuEntry[] = [
  {
    icon: <div>ICON</div>,
    onClick: () => window.alert('house selected'),
  },
  {
    icon: <div>ICON</div>,
    label: 'Mundo',
    onClick: () => window.alert('mundo selected'),
  },
];

const entriesRight: RcMenuEntry[] = [
  {
    icon: <div>ICON</div>,
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
    icon: <div>ICON</div>,
    label: 'Address book',
    entries: [
      {
        icon: <div>ICON</div>,
        label: 'Bender',
        onClick: () => window.alert('Bender clicked'),
      },
      {
        icon: <div>ICON</div>,
        label: 'Leela',
        onClick: () => window.alert('Leela clicked'),
      },
      {
        icon: <div>ICON</div>,
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
