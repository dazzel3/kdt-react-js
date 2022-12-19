import Toggle from '../components/Toggle/index';

export default {
  title: 'Component/Toggle',
  component: Toggle,
  argTypes: {
    disabled: { control: 'boolean' },
  },
};

export const Default = (args) => {
  return <Toggle {...args} />;
};
