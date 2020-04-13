import React, { useState, useEffect } from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { InputTypeA } from './InputTypeA';
import { FormErrorField } from './highlevel';

export interface IDateTypeATranslation {
  year: string;
  month: string;
  day: string;
  errorYear: string;
  errorMonth: string;
  errorDay: string;
  errorDate: string;
}

export const dateTypeAtranslationEn: IDateTypeATranslation = {
  year: 'Year',
  month: 'Month',
  day: 'Day',
  errorYear: 'Please enter year (4 digits)',
  errorMonth: 'Please enter month',
  errorDay: 'Please enter day',
  errorDate: 'Date {{date}} is invalid',
};

export const dateTypeAtranslationPt: IDateTypeATranslation = {
  year: 'Ano',
  month: 'Mês',
  day: 'Dia',
  errorYear: 'Please enter year (4 digits)',
  errorMonth: 'Please enter month',
  errorDay: 'Please enter day',
  errorDate: 'Date {{date}} is invalid',
};

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

interface IVerrors {
  year: string;
  month: string;
  day: string;
  date: string;
}

const newZeroValues = (): IValues => ({ year: '', month: '', day: '' });

const newZeroVerrors = (): IVerrors => ({ year: '', month: '', day: '', date: '' });

const date2values = (date?: Date): IValues => {
  if (!date) {
    return { year: '', month: '', day: '' };
  }
  return {
    year: date.getFullYear().toString(),
    month: (date.getMonth() + 1).toString(),
    day: date.getDate().toString(),
  };
};

const values2dateString = (values: IValues): string => {
  const month = values.month.padStart(2, '0');
  const day = values.day.padStart(2, '0');
  return `${values.year}-${month}-${day}`;
};

const values2errors = (
  values: IValues,
  translation: IDateTypeATranslation,
): { errors: IVerrors; dateString: string } => {
  const errors: IVerrors = {
    year: values.year && values.year.length === 4 ? '' : translation.errorYear,
    month: values.month && values.month !== '0' ? '' : translation.errorMonth,
    day: values.day && values.day !== '0' ? '' : translation.errorDay,
    date: '',
  };
  const hasError = !!errors.year || !!errors.month || !!errors.day;
  if (hasError) {
    return { errors, dateString: '' };
  }
  const dateString = values2dateString(values);
  const date = new Date(dateString);
  const isValid =
    date.getFullYear().toString() === values.year &&
    (date.getMonth() + 1).toString() === values.month &&
    date.getDate().toString() === values.day;
  if (!isValid) {
    errors.date = translation.errorDate.replace('{{date}}', dateString);
    return { errors, dateString: '' };
  }
  return { errors, dateString };
};

export interface IDateTypeAProps {
  unix?: number; // JS unix timestamp in milliseconds... or
  date?: Date; // ...the date
  touched?: boolean;
  onChange?: (dateString: string) => Promise<void>; // returns only valid dates, or empty
  monthFirst?: boolean;
  translation?: IDateTypeATranslation;
}

export const DateTypeA: React.FC<IDateTypeAProps> = ({
  unix,
  date,
  touched,
  onChange,
  monthFirst,
  translation = dateTypeAtranslationEn,
}) => {
  const [values, setValues] = useState<IValues>(newZeroValues());
  const [vErrors, setVerrors] = useState<IVerrors>(newZeroVerrors());

  useEffect(() => {
    if (unix) {
      const v = date2values(new Date(unix));
      setValues(v);
      if (touched) {
        setVerrors(values2errors(v, translation).errors);
      }
    } else if (date) {
      const v = date2values(date);
      setValues(v);
      if (touched) {
        setVerrors(values2errors(v, translation).errors);
      }
    } else if (touched) {
      setVerrors(values2errors(values, translation).errors);
    }
  }, [date, touched, translation]);

  const setVal = <K extends keyof IValues>(key: K, valOk: string) => {
    const newValues = { ...values, [key]: valOk };
    setValues(newValues);
    const { errors, dateString } = values2errors(newValues, translation);
    if (touched) {
      setVerrors(errors);
    }
    if (onChange) {
      onChange(dateString);
    }
  };

  const setDay = (value: string) => {
    const v = value.trimLeft().replace(/\D/g, '');
    if (/^[0-3]{0,1}[0-9]{0,1}$/.test(v)) {
      if (v.length === 2) {
        if (/^(0?[1-9]|[12][0-9]|3[01])$/.test(v)) {
          setVal('day', v);
        }
      } else {
        setVal('day', v);
      }
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

  if (monthFirst) {
    return (
      <React.Fragment>
        <div css={styles.onRow}>
          <InputTypeA
            label={translation.month}
            value={values.month}
            onChange={(e) => setMonth(e.target.value)}
            flatRight={true}
          />
          <InputTypeA
            label={translation.day}
            value={values.day}
            onChange={(e) => setDay(e.target.value)}
            flatLeft={true}
            flatRight={true}
          />
          <InputTypeA
            label={translation.year}
            value={values.year}
            onChange={(e) => setYear(e.target.value)}
            flatLeft={true}
          />
        </div>
        <FormErrorField error={vErrors.day} />
        <FormErrorField error={vErrors.month} />
        <FormErrorField error={vErrors.year} />
        <FormErrorField error={vErrors.date} />
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <div css={styles.onRow}>
        <InputTypeA
          label={translation.day}
          value={values.day}
          onChange={(e) => setDay(e.target.value)}
          flatRight={true}
        />
        <InputTypeA
          label={translation.month}
          value={values.month}
          onChange={(e) => setMonth(e.target.value)}
          flatLeft={true}
          flatRight={true}
        />
        <InputTypeA
          label={translation.year}
          value={values.year}
          onChange={(e) => setYear(e.target.value)}
          flatLeft={true}
        />
      </div>
      <FormErrorField error={vErrors.day} />
      <FormErrorField error={vErrors.month} />
      <FormErrorField error={vErrors.year} />
      <FormErrorField error={vErrors.date} />
    </React.Fragment>
  );
};
