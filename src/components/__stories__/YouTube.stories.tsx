import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { YouTube } from '../YouTube';

const stories = storiesOf('YouTube', module);

stories.addDecorator(withKnobs);

stories.add('default', () => <YouTube youtubeId="UxoX2faIgDQ" />);
