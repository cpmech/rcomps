import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { InputNumber } from '../InputNumber';

const stories = storiesOf('InputNumber', module);

stories.addDecorator(withKnobs);

stories.add('default', () => {
  const [cost, setCost] = useState('$ ');
  const [energy, setEnergy] = useState('');
  return (
    <div>
      <InputNumber label="Cost in USD" value={cost} onChange={v => setCost(v)} prefix="$ " />
      <InputNumber
        label="Energy in kWh"
        value={energy}
        onChange={v => setEnergy(v)}
        suffix="kWh"
        numDigits={4}
      />
      <div>
        Cost = <b>{cost}</b>
      </div>
      <div>
        Energy = <b>{energy}</b>
      </div>
    </div>
  );
});

stories.add('Brazil', () => {
  const [cost, setCost] = useState('R$ ');
  const [energy, setEnergy] = useState('');
  return (
    <div>
      <InputNumber
        label="Preço em Reais"
        value={cost}
        onChange={v => setCost(v)}
        prefix="R$ "
        swapDotByComma={true}
      />
      <InputNumber
        label="Energia em kWh"
        value={energy}
        onChange={v => setEnergy(v)}
        swapDotByComma={true}
        suffix="kWh"
        numDigits={4}
      />
    </div>
  );
});
