import React, { useState } from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { InputTypeA } from '../InputTypeA';

const stories = storiesOf('InputTypeA', module);

stories.addDecorator(withKnobs);

stories.add('default', () => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
    `}
  >
    <form>
      <InputTypeA name="name" label="Name" value="Hello World!" />
      <InputTypeA name="email" label="Email" />
      <InputTypeA name="password" label="Password" type="password" />
    </form>
  </div>
));

stories.add('sizing', () => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
    `}
  >
    <form>
      <InputTypeA
        name="name"
        label="Name"
        value="Hello World!"
        marginVert={40}
        width="400px"
        labelFontSize={12}
        scaleLabel={1}
      />
      <InputTypeA
        name="email"
        label="Email"
        marginVert={40}
        width="400px"
        labelFontSize={12}
        scaleLabel={1}
      />
      <InputTypeA
        name="password"
        label="Password"
        type="password"
        marginVert={40}
        width="400px"
        labelFontSize={12}
        scaleLabel={1}
      />
    </form>
  </div>
));

const bgColor = '#2ecc71';

stories.add('light and dark bg', () => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `}
  >
    <div
      css={css`
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        background-color: ${bgColor};
        height: 50vh;
        width: 100%;
      `}
    >
      <InputTypeA name="name" label="Name" value="Hello World!" bgColor={bgColor} darkMode={true} />
      <InputTypeA name="email" label="Email" bgColor={bgColor} darkMode={true} />
      <InputTypeA
        name="password"
        label="Password"
        type="password"
        bgColor={bgColor}
        darkMode={true}
      />
    </div>
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50vh;
        width: 100%;
      `}
    >
      <InputTypeA name="email" label="Email" />
    </div>
  </div>
));

const Controlled = () => {
  const [value, setValue] = useState();
  return (
    <InputTypeA name="name" label="Name" value={value} onChange={e => setValue(e.target.value)} />
  );
};

stories.add('controlled', () => <Controlled />);
