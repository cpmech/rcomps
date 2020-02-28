import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { Popup } from '../Popup';
import { Button } from '../Button';

const stories = storiesOf('Popup', module);

stories.addDecorator(withKnobs);

stories.add('default', () => {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <Button
        onClick={() => setOpen(true)}
        fontWeight="bold"
        color="white"
        backgroundColor="#803ced"
        borderRadius={300}
      >
        Show Popup
      </Button>
      {open && (
        <Popup title="Default Popup" onClose={() => setOpen(false)}>
          This is supposed to be a very, very, indeed very short message just to notify that
          something is happening.
        </Popup>
      )}
    </div>
  );
});

stories.add('error', () => {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <Button
        onClick={() => setOpen(true)}
        fontWeight="bold"
        color="white"
        backgroundColor="#803ced"
        borderRadius={300}
      >
        Show Popup
      </Button>
      {open && (
        <Popup title="Error" onClose={() => setOpen(false)} isError={true}>
          Some error happened
        </Popup>
      )}
    </div>
  );
});

stories.add('progress', () => <Popup title="Uploading..." progress={50}></Popup>);

stories.add('loading', () => <Popup title="Loading..." isLoading={true}></Popup>);
