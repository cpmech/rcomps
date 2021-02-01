import { IconGlobe, IconHouseThreeD, IconMoney } from '@cpmech/react-icons';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Tabs, ITabsProps } from '../Tabs';
import { loremIpsumFew } from './loremIpsum';

const entries = [
  {
    icon: <IconHouseThreeD />,
    label: 'Home',
  },
  {
    icon: <IconGlobe />,
    label: 'Mundo',
  },
  {
    icon: <IconMoney />,
    label: 'Dinheiro',
  },
];

export default {
  title: 'Components/Tabs',
  component: Tabs,
} as Meta;

const Template: Story<ITabsProps> = (args) => <Tabs {...args} entries={entries} />;

export const Default = Template.bind({});

export const IniActive = Template.bind({});
IniActive.args = {
  ...Template.args,
  iniActive: 1,
};

export const MinWidth = Template.bind({});
MinWidth.args = {
  ...Template.args,
  bgColor: '#cecece',
  tabMinWidth: 200,
};

export const Children: Story<ITabsProps> = (args) => (
  <div>
    <Tabs bgColor="white" tabMinWidth={150} entries={entries} iniActive={1} />
    <div
      style={{
        borderColor: '#17b580',
        borderWidth: 1,
        borderStyle: 'solid',
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 20,
        paddingBottom: 20,
        borderTopWidth: 0,
      }}
    >
      {loremIpsumFew}
    </div>
  </div>
);
