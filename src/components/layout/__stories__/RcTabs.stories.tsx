import { Story, Meta } from '@storybook/react/types-6-0';
import { RcTabs, RcTabsProps } from '../RcTabs';
import { LoremIpsumSmall } from '../../helpers';
import { RcMenuEntry } from '../RcMenuHoriz';

const entries: RcMenuEntry[] = [
  {
    icon: <div>ICON</div>,
    label: 'Home',
  },
  {
    icon: <div>ICON</div>,
    label: 'Mundo',
  },
  {
    icon: <div>ICON</div>,
    label: 'Dinheiro',
  },
];

export default {
  title: 'Layout/RcTabs',
  component: RcTabs,
} as Meta;

const Template: Story<RcTabsProps> = (args) => <RcTabs {...args} entries={entries} />;

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
  tabMinWidth: '200px',
};

export const Children: Story<RcTabsProps> = (args) => (
  <div>
    <RcTabs bgColor="white" tabMinWidth="150px" entries={entries} iniActive={1} />
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
      {LoremIpsumSmall}
    </div>
  </div>
);
