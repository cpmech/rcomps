import React from 'react';
/** @jsx jsx */ import { jsx } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { FlexTable } from '../FlexTable';

const stories = storiesOf('FlexTable', module);

stories.addDecorator(withKnobs);

stories.add('default', () => {
  const keyColumn = 'name';
  const labels = {
    // name: 'Character name', // << missing
    job: 'Job description',
    ability: 'Ability', // << missing
    knowledge: 'Knowledge',
    id: 'Id', // << missing
  };
  const columns = ['name', 'id', 'ability', 'job', 'knowledge'];
  const rows = [
    {
      name: 'Bender Rodriguez',
      job: 'Delivery robot',
      ability: 'Robbery',
      knowledge: <strong>Bending girders</strong>,
      id: 10101,
    },
    {
      name: 'Turanga Leela',
      job: 'Ship captain',
      ability: 'Kung fu',
      knowledge: <strong>Pilot ship</strong>,
      id: 22222,
    },
    {
      name: 'Philip J Fry',
      // job: 'Delivery boy', // << missing
      ability: 'Useless',
      knowledge: <strong>Nada</strong>,
      id: 0,
    },
    {
      // name: 'Hermes Conrad', // << missing
      job: 'Bureaucrat',
      ability: 'Stamping',
      knowledge: <strong>Paperwork</strong>,
      id: 23,
    },
  ];

  return <FlexTable keyColumn={keyColumn} rows={rows} labels={labels} />;
  // return <FlexTable keyColumn={keyColumn} rows={rows} />;
});
