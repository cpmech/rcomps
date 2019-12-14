/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { InputTypeA } from '../InputTypeA';
import { IconExclamation, IconEye, IconEyeNo } from '@cpmech/react-icons';

const stories = storiesOf('InputTypeA', module);

stories.addDecorator(withKnobs);

stories.add('default', () => (
  <div>
    <InputTypeA
      name="email"
      label="Email"
      value="testing@example.com"
      readOnly={boolean('readOnly', false)}
    />
    <InputTypeA name="email" label="Email" readOnly={boolean('readOnly', false)} />
  </div>
));

stories.add('error', () => <InputTypeA name="email" label="Email" error={true} />);

stories.add('stacked', () => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
    `}
  >
    <InputTypeA name="name" label="Name" value="Hello World!" />
    <InputTypeA name="email" label="Email" />
    <InputTypeA name="password" label="Password" password={true} />
  </div>
));

stories.add('on row', () => (
  <div
    css={css`
      display: flex;
      flex-direction: row;
    `}
  >
    <InputTypeA name="name" label="Name" value="Hello World!" flatRight={true} />
    <InputTypeA name="email" label="Email" flatLeft={true} flatRight={true} />
    <InputTypeA name="password" label="Password" password={true} flatLeft={true} />
  </div>
));

stories.add('with suffix', () => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      width: 250px;
    `}
  >
    <InputTypeA label="Energy" value="123.456" suffix="kWh" />
    <InputTypeA label="Energy" value="123.456" suffix={<IconExclamation size={18} />} />
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
        password={true}
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
        password={true}
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

const Password = () => {
  const [value, setValue] = useState('1234-5678');
  const [show, setShow] = useState(false);
  const icon = (
    <div onClick={() => setShow(!show)}>
      {show ? <IconEye size={18} /> : <IconEyeNo size={18} />}
    </div>
  );
  return (
    <InputTypeA
      label="Password"
      password={!show}
      value={value}
      suffix={icon}
      onChange={e => setValue(e.target.value)}
    />
  );
};

stories.add('password', () => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      width: 250px;
    `}
  >
    <Password />
  </div>
));
