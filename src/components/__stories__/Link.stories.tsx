import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import { Link } from '../Link';

const stories = storiesOf('Link', module);

stories.addDecorator(withKnobs);

stories.add('default', () => <Link onClick={action('Link')}>{text('Link', 'Hello World')}</Link>);
