import { isValidPositiveNumber } from '@cpmech/util';

export interface IDateTranslation {
  year: string;
  month: string;
  day: string;
  date: string;
  errorYear: string;
  errorMonth: string;
  errorDay: string;
  errorDate: string;
}

export const dateTranslationEn: IDateTranslation = {
  year: 'Year',
  month: 'Month',
  day: 'Day',
  date: 'Date',
  errorYear: 'Please enter year (4 digits)',
  errorMonth: 'Please enter month',
  errorDay: 'Please enter day',
  errorDate: 'Date {{date}} is invalid',
};

export const dateTranslationPt: IDateTranslation = {
  year: 'Ano',
  month: 'Mês',
  day: 'Dia',
  date: 'Data',
  errorYear: 'Please enter year (4 digits)',
  errorMonth: 'Please enter month',
  errorDay: 'Please enter day',
  errorDate: 'Date {{date}} is invalid',
};

export interface IDateValues {
  year: string;
  month: string;
  day: string;
}

export interface IDateVerrors {
  year: string;
  month: string;
  day: string;
  date: string;
}

// returns empty on errors
export const date2values = (date: string): IDateValues => {
  const d = new Date(date);
  const values = {
    year: d.getFullYear().toString(),
    month: (d.getMonth() + 1).toString(),
    day: d.getDate().toString(),
  };
  const ok =
    isValidPositiveNumber(values.year) &&
    isValidPositiveNumber(values.month) &&
    isValidPositiveNumber(values.day);
  if (!ok) {
    values.year = '';
    values.month = '';
    values.day = '';
  }
  return values;
};

// returns empty on errors
export const values2date = (values: IDateValues): string => {
  const month = values.month.padStart(2, '0');
  const day = values.day.padStart(2, '0');
  const date = `${values.year}-${month}-${day}`;
  const d = new Date(date);
  const ok =
    d.getFullYear().toString() === values.year &&
    (d.getMonth() + 1).toString() === values.month &&
    d.getDate().toString() === values.day;
  if (!ok) {
    return '';
  }
  return date;
};

export const values2errors = (
  values: IDateValues,
  translation = dateTranslationEn,
): { errors: IDateVerrors; date: string } => {
  const errors: IDateVerrors = {
    year: values.year && values.year.length === 4 ? '' : translation.errorYear,
    month: values.month && values.month !== '0' ? '' : translation.errorMonth,
    day: values.day && values.day !== '0' ? '' : translation.errorDay,
    date: '',
  };
  if (errors.year || errors.month || errors.day) {
    return { errors, date: '' };
  }
  const date = values2date(values);
  if (!date) {
    errors.date = translation.errorDate.replace('{{date}}', date);
  }
  return { errors, date };
};
