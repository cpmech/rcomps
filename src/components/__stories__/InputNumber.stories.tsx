import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { cleanNumber } from '@cpmech/util';
import { InputNumber } from '../InputNumber';

const stories = storiesOf('InputNumber', module);

stories.addDecorator(withKnobs);

stories.add('default', () => {
  const prefix = '$ ';
  const [cost, setCost] = useState(prefix);
  const [energy, setEnergy] = useState('');
  return (
    <div>
      <InputNumber label="Cost in USD" value={cost} onChange={v => setCost(v)} prefix={prefix} />
      <InputNumber
        label="Energy in kWh"
        value={energy}
        onChange={v => setEnergy(v)}
        suffix="kWh"
        numDigits={4}
      />
      <div>
        Cost = <b>{cleanNumber(cost, false, prefix)}</b>
      </div>
      <div>
        Energy = <b>{cleanNumber(energy)}</b>
      </div>
    </div>
  );
});

stories.add('Brazil', () => {
  const prefix = 'R$ ';
  const [cost, setCost] = useState(prefix);
  const [energy, setEnergy] = useState('');
  return (
    <div>
      <InputNumber
        label="Preço em Reais"
        value={cost}
        onChange={v => setCost(v)}
        prefix={prefix}
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
      <div>
        Preço = <b>{cleanNumber(cost, true, prefix)}</b>
      </div>
      <div>
        Energia = <b>{cleanNumber(energy, true)}</b>
      </div>
    </div>
  );
});
