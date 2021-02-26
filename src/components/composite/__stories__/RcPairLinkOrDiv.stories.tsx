import { Story, Meta } from '@storybook/react/types-6-0';
import { RcPairLinkOrDiv, RcPairLinkOrDivProps } from '../RcPairLinkOrDiv';
import { IconEarth } from '../../layout/__stories__/IconEarth';

export default {
  title: 'Composite/RcPairLinkOrDiv',
  component: RcPairLinkOrDiv,
  argTypes: {
    on: { controle: 'boolean' },
  },
} as Meta;

const Template: Story<RcPairLinkOrDivProps> = (args) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '50px',
        width: '200px',
      }}
    >
      <RcPairLinkOrDiv
        {...args}
        onClick={() => alert('clicked')}
        left={<IconEarth size="48px" />}
        right="This is a very long text to see if word wrap is working of not. Let's see..."
      />
    </div>
  </div>
);

export const Default = Template.bind({});
