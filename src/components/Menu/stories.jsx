import Menu from './';

export default {
  title: 'Menu',
  component: Menu,
  args: {
    children: 'children...',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => <Menu {...args} />;
