import { Story, Meta } from '@storybook/react/types-6-0';
import { Popup, IPopupProps } from '../Popup';
import { useState } from 'react';

export default {
  title: 'Composite/Popup',
  component: Popup,
} as Meta;

const Template: Story<IPopupProps> = (args) => <Popup {...args} />;

export const Default = Template.bind({});

export const Controlled: Story<IPopupProps> = (args) => {
  const [show, setShow] = useState(true);
  return (
    <div>
      <button onClick={() => setShow(true)}>Show Popup</button>
      {show && (
        <Popup {...args} title="Controlled" onClose={() => setShow(false)}>
          This is supposed to be a very, very, indeed very short message just to notify that
          something is happening.
        </Popup>
      )}
    </div>
  );
};

export const Error: Story<IPopupProps> = (args) => {
  const [show, setShow] = useState(true);
  return (
    <div>
      <button onClick={() => setShow(true)}>Show Popup</button>
      {show && (
        <Popup {...args} title="Error" onClose={() => setShow(false)} isError={true}>
          Some error happened
        </Popup>
      )}
    </div>
  );
};

export const Progress = Template.bind({});
Progress.args = {
  ...Template.args,
  title: 'Progress',
  progress: 50,
};

export const Loading = Template.bind({});
Loading.args = {
  ...Template.args,
  title: 'Loading',
  isLoading: true,
};
