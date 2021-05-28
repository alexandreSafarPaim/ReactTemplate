import <FTName> from './';

export default {
  title: '<FTName>',
  component: <FTName>,
  args: {
    children: 'children...',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => <<FTName> {...args} />;
