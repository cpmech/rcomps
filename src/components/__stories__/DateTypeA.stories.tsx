import { Story, Meta } from '@storybook/react/types-6-0';
import { DateTypeA, IDateTypeAProps } from '../DateTypeA';
import { dateTranslationPt } from '@cpmech/util';
import { useState } from 'react';

export default {
  title: 'Components/DateTypeA',
  component: DateTypeA,
} as Meta;

const Template: Story<IDateTypeAProps> = (args) => <DateTypeA {...args} />;

export const Default = Template.bind({});

export const MonthFirst = Template.bind({});
MonthFirst.args = {
  ...Template.args,
  monthFirst: true,
};

export const PtBr = Template.bind({});
PtBr.args = {
  ...Template.args,
  translation: dateTranslationPt,
};

export const Touched: Story<IDateTypeAProps> = (args) => (
  <div>
    <DateTypeA {...args} date="1995-03-03T00:00:00.000Z" touched={true} />
    <DateTypeA {...args} date="" touched={true} />
  </div>
);

export const InitialDate: Story<IDateTypeAProps> = (args) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <DateTypeA date="2020-04-13T01:53:30.000Z" touched={true} />
    <DateTypeA date="1908-08-08T00:00:00.000Z" touched={true} />
    <DateTypeA date={new Date().toISOString()} touched={true} />
  </div>
);

export const Controlled: Story<IDateTypeAProps> = (args) => {
  const [touched, setTouched] = useState(false);
  const [date, setDate] = useState('');
  const [error, setError] = useState('');

  const onChange = (date: string) => {
    setDate(date);
    if (!date) {
      setError('INVALID');
    } else {
      setError('');
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: 300,
      }}
    >
      <div>
        <DateTypeA date={date} touched={touched} onChange={onChange} />
      </div>

      <div
        style={{
          fontWeight: 'bold',
          fontSize: '1.2em',
        }}
      >
        {date}
      </div>

      {error && (
        <div>
          <div>{error}</div>
        </div>
      )}

      <button
        onClick={() => {
          setTouched(true);
          if (date) {
            alert(`sending ${date} to someone`);
          }
        }}
      >
        SUBMIT
      </button>
    </div>
  );
};
