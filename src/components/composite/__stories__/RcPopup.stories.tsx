import { Story, Meta } from '@storybook/react/types-6-0';
import { RcPopup, RcPopupProps } from '../RcPopup';
import { useState } from 'react';

export default {
  title: 'Composite/RcPopup',
  component: RcPopup,
} as Meta;

const Template: Story<RcPopupProps> = (args) => <RcPopup {...args} />;

export const Default = Template.bind({});

export const Controlled: Story<RcPopupProps> = (args) => {
  const [show, setShow] = useState(true);
  return (
    <div>
      <button onClick={() => setShow(true)}>Show Popup</button>
      {show && (
        <RcPopup {...args} title="Controlled" onClose={() => setShow(false)}>
          This is supposed to be a very, very, indeed very short message just to notify that
          something is happening.
        </RcPopup>
      )}
    </div>
  );
};

export const Error: Story<RcPopupProps> = (args) => {
  const [show, setShow] = useState(true);
  return (
    <div>
      <button onClick={() => setShow(true)}>Show Popup</button>
      {show && (
        <RcPopup {...args} title="Error" onClose={() => setShow(false)} isError={true}>
          Some error happened
        </RcPopup>
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
