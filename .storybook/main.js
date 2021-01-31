module.exports = {
  stories: ['../src/components/**/*.stories.tsx'],
  addons: [
    { name: '@storybook/preset-create-react-app' },
    { name: '@storybook/addon-backgrounds' },
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
      },
    },
  ],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
};
