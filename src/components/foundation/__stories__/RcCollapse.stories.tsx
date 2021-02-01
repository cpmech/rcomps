import { Story, Meta } from '@storybook/react/types-6-0';
import { RcCollapse, RcCollapseProps } from '../RcCollapse';

export default {
  title: 'Foundation/RcCollapse',
  component: RcCollapse,
  argTypes: {
    initShow: { control: 'boolean' },
  },
} as Meta;

const content = (
  <div>
    <p>This information can be hidden or not</p>
    <p>Hello World!</p>
    <p>Hello Again.</p>
    <p>Goodbye.</p>
  </div>
);

const something = (
  <div>
    <p>More stuff goes here. And can be any kind of ReactNode.</p>
    <p>Information.</p>
    <p>Information.</p>
    <p>Information.</p>
    <p>Information.</p>
    <p>Information.</p>
    <p>Information.</p>
    <p>Information.</p>
    <p>Information.</p>
    <p>Information.</p>
  </div>
);

const Template: Story<RcCollapseProps> = (args) => (
  <RcCollapse {...args} title="Here you go more information">
    {content}
  </RcCollapse>
);

export const Default = Template.bind({});

export const InitShow = Template.bind({});
InitShow.args = {
  ...Template.args,
  initShow: true,
};

export const Styled = Template.bind({});
Styled.args = {
  ...Template.args,
  titleBgColor: '#cccccc',
  titleBorderColor: 'red',
};

export const SideBySide: Story<RcCollapseProps> = (args) => (
  <div style={{ display: 'flex', flexDirection: 'row' }}>
    <RcCollapse
      {...args}
      title="Here you go more information"
      color="white"
      bgColor="#2ecc71"
      width="50%"
      cssTitle="font-weight: bold;"
    >
      {content}
    </RcCollapse>
    <RcCollapse
      {...args}
      title="And here you'll have something else"
      width="50%"
      cssTitle="font-weight: bold;"
    >
      {something}
    </RcCollapse>
  </div>
);
