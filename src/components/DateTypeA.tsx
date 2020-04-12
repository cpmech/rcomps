import React, { useState, useEffect } from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { getYear, getMonth, getDate } from 'date-fns';
import { InputTypeA } from './InputTypeA';

const styles = {
  onRow: css`
    display: flex;
    flex-direction: row;
    align-items: center;
  `,
};

interface IValues {
  year: string;
  month: string;
  day: string;
}

type IVerrors = IValues;

const newZeroValues = (): IValues => {
  return { year: '', month: '1', day: '' };
};

const newZeroVerrors = (): IVerrors => ({ year: '', month: '', day: '' });

const date2values = (date?: Date): IValues => {
  if (!date) {
    return newZeroValues();
  }
  return {
    year: getYear(date).toString(),
    month: getMonth(date).toString(),
    day: getDate(date).toString(),
  };
};

const values2errors = (values: IValues): { errors: IVerrors; hasError: boolean } => {
  const errors: IVerrors = {
    year: values.year ? '' : 'Please enter year',
    month: values.month ? '' : 'Please enter month',
    day: values.day ? '' : 'Please enter day',
  };
  const hasError = !!errors.year || !!errors.month || !!errors.day;
  return { errors, hasError };
};

export interface IDateTypeAProps {
  unix?: number; // unix date in milliseconds (aka standard JS)
  date?: Date;
  onSubmit?: (unix: number) => Promise<void>;
}

export const DateTypeA: React.FC<IDateTypeAProps> = ({ unix, date, onSubmit }) => {
  const [touchedButtons, setTouchedButtons] = useState(false);
  const [values, setValues] = useState<IValues>(newZeroValues());
  const [vErrors, setVerrors] = useState<IVerrors>(newZeroVerrors());

  useEffect(() => {
    if (unix) {
      setValues(date2values(new Date(unix)));
    }
    if (date) {
      setValues(date2values(date));
    }
  }, [unix, date]);

  const validate = (): boolean => {
    const { errors, hasError } = values2errors(values);
    setVerrors(errors);
    return !hasError;
  };

  const submit = async () => {
    setTouchedButtons(true);
    if (validate()) {
      if (onSubmit) {
        await onSubmit(Date.parse(`${values.year}-${values.month}-${values.day}`));
      }
    }
  };

  const setVal = <K extends keyof IValues>(key: K, valOk: string) => {
    const newValues = { ...values, [key]: valOk };
    setValues(newValues);
    if (touchedButtons) {
      const { errors } = values2errors(newValues);
      setVerrors(errors);
    }
  };

  const setDay = (value: string) => {
    const v = value.trimLeft().replace(/\D/g, '');
    if (/^[0-3]{0,1}[0-9]{0,1}$/.test(v)) {
      setVal('day', v);
    }
  };

  const setMonth = (value: string) => {
    const v = value.trimLeft().replace(/\D/g, '');
    if (/^[0-1]{0,1}[0-9]{0,1}$/.test(v)) {
      if (v.length === 2) {
        if (/^(0?[1-9]|1[012])$/.test(v)) {
          setVal('month', v);
        }
      } else {
        setVal('month', v);
      }
    }
  };

  const setYear = (value: string) => {
    const v = value.trimLeft().replace(/\D/g, '');
    if (/^[0-2]{0,1}[0-9]{0,1}[0-9]{0,1}[0-9]{0,1}$/.test(v)) {
      setVal('year', v);
    }
  };

  return (
    <div css={styles.onRow}>
      <InputTypeA
        label="Dia"
        value={values.day}
        onChange={(e) => setDay(e.target.value)}
        flatRight={true}
      />
      <InputTypeA
        label="Mês"
        value={values.month}
        onChange={(e) => setMonth(e.target.value)}
        flatLeft={true}
        flatRight={true}
      />
      <InputTypeA
        label="Ano"
        value={values.year}
        onChange={(e) => setYear(e.target.value)}
        flatLeft={true}
      />
    </div>
  );
};
