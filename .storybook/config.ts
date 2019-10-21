import { configure } from '@storybook/react';
import requireContext from 'require-context.macro';
import '../src/styles/index.scss';

configure(requireContext('../src', true, /\.stories\.tsx?$/), module);
