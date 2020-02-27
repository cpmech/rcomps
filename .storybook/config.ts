import { configure } from '@storybook/react';
import requireContext from 'require-context.macro';

configure(requireContext('../src', true, /\.stories\.tsx?$/), module);
