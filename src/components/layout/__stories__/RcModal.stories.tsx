import { Story, Meta } from '@storybook/react/types-6-0';
import { RcModal, RcModalProps } from '../RcModal';
import { useState } from 'react';
import { LoremIpsum } from '../../helpers';

export default {
  title: 'Layout/RcModal',
  component: RcModal,
  argTypes: {
    allowClickOutsideToClose: { control: 'boolean' },
    noCloseButton: { control: 'boolean' },
    noHightlightCloseButton: { control: 'boolean' },
  },
} as Meta;

const Template: Story<RcModalProps> = (args) => {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(true)}>SHOW MODAL</button>
      <div>{LoremIpsum}</div>
      {show && (
        <RcModal
          {...args}
          onClose={() => setShow(false)}
          title="Notifications"
          cssTitle="font-weight: bold; color: #e62739;"
          height="70vh"
          width="90%"
        >
          {LoremIpsum}
        </RcModal>
      )}
    </div>
  );
};

export const Default = Template.bind({});

export const NoClickOutside = Template.bind({});
NoClickOutside.args = {
  ...Template.args,
  allowClickOutsideToClose: false,
};

export const NoCloseButton = Template.bind({});
NoCloseButton.args = {
  ...Template.args,
  noCloseButton: true,
};

export const NoCloseAction: Story<RcModalProps> = (args) => {
  return (
    <RcModal {...args} title="Fixed">
      <div style={{ padding: 20 }}>CANNOT CLOSE THIS!</div>
    </RcModal>
  );
};

export const WithUploadButton: Story<RcModalProps> = (args) => {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(true)}>SHOW MODAL</button>
      {show && (
        <RcModal {...args} onClose={() => setShow(false)} title="Upload file">
          <div style={{ padding: 20 }}>
            <input type="file" />
          </div>
        </RcModal>
      )}
    </div>
  );
};
