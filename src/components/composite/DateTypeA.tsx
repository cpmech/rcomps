/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Fragment, useState } from 'react';
import {
  IDateValues,
  IDateVerrors,
  IDateTranslation,
  date2values,
  values2errors,
  dateTranslationEn,
} from '@cpmech/util';
import { InputTypeA, FormErrorField } from '../foundation';

const styles = {
  onRow: css`
    display: flex;
    flex-direction: row;
    align-items: center;
  `,
};

const initialValues = (date?: string): IDateValues => {
  return date2values(date || '');
};

const initialVerrors = (date?: string, translation?: IDateTranslation): IDateVerrors => {
  const values = date2values(date || '');
  return values2errors(values, translation).errors;
};

export interface IDateTypeAProps {
  date?: string; // initial date: ISO date string
  touched?: boolean; // to display errors
  onChange?: (date: string) => void; // returns empty string of not ok
  monthFirst?: boolean;
  translation?: IDateTranslation;
}

export const DateTypeA: React.FC<IDateTypeAProps> = ({
  date,
  touched,
  onChange,
  monthFirst,
  translation = dateTranslationEn,
}) => {
  const [values, setValues] = useState<IDateValues>(initialValues(date));
  const [vErrors, setVerrors] = useState<IDateVerrors>(initialVerrors(date, translation));

  const setVal = <K extends keyof IDateValues>(key: K, valOk: string) => {
    const newValues = { ...values, [key]: valOk };
    setValues(newValues);
    const { errors, date } = values2errors(newValues, translation);
    setVerrors(errors);
    if (onChange) {
      onChange(date);
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
      <Fragment>
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
        {touched && (
          <Fragment>
            <FormErrorField error={vErrors.day} />
            <FormErrorField error={vErrors.month} />
            <FormErrorField error={vErrors.year} />
            <FormErrorField error={vErrors.date} />
          </Fragment>
        )}
      </Fragment>
    );
  }

  return (
    <Fragment>
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
      {touched && (
        <Fragment>
          <FormErrorField error={vErrors.day} />
          <FormErrorField error={vErrors.month} />
          <FormErrorField error={vErrors.year} />
          <FormErrorField error={vErrors.date} />
        </Fragment>
      )}
    </Fragment>
  );
};