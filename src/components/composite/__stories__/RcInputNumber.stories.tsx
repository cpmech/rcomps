import { Story, Meta } from '@storybook/react/types-6-0';
import { RcInputNumber, RcInputNumberProps } from '../RcInputNumber';
import { useState } from 'react';
import { cleanNumber } from '@cpmech/util';

export default {
  title: 'Composite/RcInputNumber',
  component: RcInputNumber,
} as Meta;

export const Default: Story<RcInputNumberProps> = (args) => {
  const prefix = '$ ';
  const [cost, setCost] = useState(prefix);
  const [energy, setEnergy] = useState('');
  return (
    <div>
      <RcInputNumber
        {...args}
        label="Cost in USD"
        value={cost}
        onChange={(v) => setCost(v)}
        prefix={prefix}
      />
      <RcInputNumber
        {...args}
        label="Energy in kWh"
        value={energy}
        onChange={(v) => setEnergy(v)}
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
};

const prefix = 'R$ ';

export const Brazil: Story<RcInputNumberProps> = (args) => {
  const [cost, setCost] = useState(prefix);
  const [energy, setEnergy] = useState('');
  return (
    <div>
      <RcInputNumber
        {...args}
        label="Preço em Reais"
        value={cost}
        onChange={(v) => setCost(v)}
        prefix={prefix}
        swapDotByComma={true}
      />
      <RcInputNumber
        {...args}
        label="Energia em kWh"
        value={energy}
        onChange={(v) => setEnergy(v)}
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
};
