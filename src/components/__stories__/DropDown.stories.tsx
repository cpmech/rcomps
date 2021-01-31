import { Story, Meta } from '@storybook/react/types-6-0';
import { DropDown, IDropDownProps } from '../DropDown';

const entries = [
  {
    message: 'First entry',
    onClick: () => window.alert('First entry was clicked'),
  },
  {
    message: 'Second entry',
    onClick: () => window.alert('Second entry was clicked'),
  },
  {
    message: 'Third entry',
    onClick: () => window.alert('Third entry was clicked'),
  },
];

const manyEntries = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map(
  (i) => ({
    message: `Number ${i}`,
    onClick: () => window.alert(`${i} clicked`),
  }),
);

export default {
  title: 'Components/DropDown',
  component: DropDown,
  argTypes: {
    showOnHover: { control: 'boolean' },
    withIcon: { control: 'boolean' },
    boxToRight: { control: 'boolean' },
    color: { control: 'color' },
    backgroundColor: { control: 'color' },
    hoverColor: { control: 'color' },
  },
} as Meta;

const Template: Story<IDropDownProps> = (args) => <DropDown {...args} title="Please select one" />;

export const Default = Template.bind({});
Default.args = {
  ...Template.args,
  entries,
};

export const NoHover = Template.bind({});
NoHover.args = {
  ...Template.args,
  entries,
  showOnHover: false,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  ...Template.args,
  entries,
  width: '100%',
};

export const FixedWidth = Template.bind({});
FixedWidth.args = {
  ...Template.args,
  entries,
  width: '400px',
};

export const NoIcon = Template.bind({});
NoIcon.args = {
  ...Template.args,
  entries,
  withIcon: false,
};

export const BoxToRight = Template.bind({});
BoxToRight.args = {
  ...Template.args,
  entries,
  boxToRight: true,
};

export const WithScrollbar = Template.bind({});
WithScrollbar.args = {
  ...Template.args,
  entries: manyEntries,
  heightBox: 200,
};

export const Styled = Template.bind({});
Styled.args = {
  ...Template.args,
  entries,
  color: 'blue',
  cssMessage: `line-height: 2; font-size: 20px; color: red;`,
};
