import { Story, Meta } from '@storybook/react/types-6-0';
import { RcModalYesNo, RcModalYesNoProps } from '../RcModalYesNo';
import { useState } from 'react';

export default {
  title: 'Composite/RcModalYesNo',
  component: RcModalYesNo,
} as Meta;

const Template: Story<RcModalYesNoProps> = (args) => {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(true)}>SHOW MODAL</button>
      {show && (
        <RcModalYesNo
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
