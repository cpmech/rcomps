import { Story, Meta } from '@storybook/react/types-6-0';
import { ErrorModal, IErrorModalProps } from '../ErrorModal';
import { useState } from 'react';

export default {
  title: 'Composite/ErrorModal',
  component: ErrorModal,
} as Meta;

const Template: Story<IErrorModalProps> = (args) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(true)}>Show modal</button>
      {open && <ErrorModal onClose={() => setOpen(false)} message="User name is incorrect" />}
    </div>
  );
};

export const Default = Template.bind({});
