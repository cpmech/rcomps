import { Story, Meta } from '@storybook/react/types-6-0';
import { RcYouTube, RcYouTubeProps } from '../RcYouTube';

export default {
  title: 'Layout/RcYouTube',
  component: RcYouTube,
} as Meta;

const Template: Story<RcYouTubeProps> = (args) => <RcYouTube {...args} youtubeId="UxoX2faIgDQ" />;

export const Default = Template.bind({});
