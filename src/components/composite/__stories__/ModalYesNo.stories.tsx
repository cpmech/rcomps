import { Story, Meta } from '@storybook/react/types-6-0';
import { ModalYesNo, IModalYesNoProps } from '../ModalYesNo';
import { useState } from 'react';

export default {
  title: 'Components/ModalYesNo',
  component: ModalYesNo,
} as Meta;

const Template: Story<IModalYesNoProps> = (args) => {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(true)}>SHOW MODAL</button>
      {show && (
        <ModalYesNo
          {...args}
          onClose={() => setShow(false)}
          onYes={() => window.alert('YES')}
          onNo={() => window.alert('NO')}
          message="Are you having fun with React?"
        />
      )}
    </div>
  );
};

export const Default = Template.bind({});
