import { Story, Meta } from '@storybook/react/types-6-0';
import { RcSwitchAndText, RcSwitchAndTextProps } from '../RcSwitchAndText';
import { useState } from 'react';

export default {
  title: 'Composite/RcSwitchAndText',
  component: RcSwitchAndText,
  argTypes: {
    on: { controle: 'boolean' },
  },
} as Meta;

const Template: Story<RcSwitchAndTextProps> = (args) => {
  const [onA, setOnA] = useState(false);
  const [onB, setOnB] = useState(false);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <RcSwitchAndText
        {...args}
        text="This is a very long text used to decide if this switch should be turned on or not"
        on={onA}
        onClick={() => setOnA(!onA)}
      />
      <RcSwitchAndText
        {...args}
        text="This is a very long text used to decide if this switch should be turned on or not"
        on={onB}
        onClick={() => setOnB(!onB)}
        textAtRight={true}
      />
    </div>
  );
};

export const Default = Template.bind({});
