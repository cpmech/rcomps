import { Story, Meta } from '@storybook/react/types-6-0';
import { useEffect, useState } from 'react';
import { RcReadyOrErrorPopup, RcReadyOrErrorPopupProps } from '../RcReadyOrErrorPopup';

export default {
  title: 'Composite/RcReadyOrErrorPopup',
  component: RcReadyOrErrorPopup,
  argTypes: {
    color: { control: 'color' },
  },
} as Meta;

const Template: Story<RcReadyOrErrorPopupProps> = (args) => {
  const [ready, setReady] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setTimeout(() => setReady(true), 1000);
  }, []);

  const clear = () => {
    setReady(true);
    setError('');
  };

  if (ready && !error) {
    return (
      <div>
        <button
          onClick={() => {
            setReady(false);
            setTimeout(() => setReady(true), 1000);
          }}
        >
          Load again
        </button>
        <button
          onClick={() => {
            setReady(false);
            setTimeout(() => {
              setError('Cannot load data');
            }, 1000);
          }}
        >
          Try to load again
        </button>
      </div>
    );
  }

  return <RcReadyOrErrorPopup {...args} ready={ready} error={error} onClose={clear} />;
};

export const Default = Template.bind({});
