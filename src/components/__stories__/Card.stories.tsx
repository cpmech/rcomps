import { IconHouseThreeD } from '@cpmech/react-icons';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Card, ICardProps } from '../Card';
import { loremIpsumFew } from './loremIpsum';

const Hero: React.FC = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    }}
  >
    <IconHouseThreeD size={90} />
    <p
      style={{
        paddingLeft: 20,
        fontSize: '1.2em',
        fontWeight: 'bold',
        color: '#4a76ff',
        width: 120,
        lineHeight: '1.2em',
      }}
    >
      Found my new house!
    </p>
  </div>
);

const Buttons: React.FC = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <button onClick={() => window.alert('visiting...')}>Vist my website</button>
    <button onClick={() => window.alert('nada...')}>Nada</button>
  </div>
);

export default {
  title: 'Components/Card',
  component: Card,
} as Meta;

const Template: Story<ICardProps> = (args) => (
  <Card {...args} title="Good News!">
    {loremIpsumFew}
  </Card>
);

export const Default = Template.bind({});

export const ZoomOnHover = Template.bind({});
ZoomOnHover.args = {
  ...Template.args,
  noZoom: false,
};

export const WithHero = Template.bind({});
WithHero.args = {
  ...Template.args,
  hero: <Hero />,
};

export const WithButtons = Template.bind({});
WithButtons.args = {
  ...Template.args,
  buttons: <Buttons />,
};

export const WithHeroAndButtons = Template.bind({});
WithHeroAndButtons.args = {
  ...Template.args,
  hero: <Hero />,
  buttons: <Buttons />,
};

export const WithMenu = Template.bind({});
WithMenu.args = {
  ...Template.args,
  menuEntries: [
    { message: 'do something', onClick: () => window.alert('do something') },
    { message: 'do something else', onClick: () => window.alert('do something else') },
  ],
};
