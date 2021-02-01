import { Story, Meta } from '@storybook/react/types-6-0';
import { YouTube, IYouTubeProps } from '../YouTube';

export default {
  title: 'Components/YouTube',
  component: YouTube,
} as Meta;

const Template: Story<IYouTubeProps> = (args) => <YouTube {...args} youtubeId="UxoX2faIgDQ" />;

export const Default = Template.bind({});
