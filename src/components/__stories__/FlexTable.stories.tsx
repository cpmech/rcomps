import React from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { FlexTable } from '../FlexTable';

const stories = storiesOf('FlexTable', module);

stories.addDecorator(withKnobs);

const rowsDefault = [
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

const rowsComplete = [
  {
    name: 'Bender Rodriguez',
    job: 'Assistent to the delivery boy, supposedly',
    ability: 'Robbery',
    knowledge: 'Bending girders',
    id: 10101,
  },
  {
    name: 'Turanga Leela',
    job: 'Ship captain',
    ability: 'Kung fu',
    knowledge: 'Pilot ship',
    id: 22222,
  },
  {
    name: 'Philip J Fry',
    job: 'Delivery boy',
    ability: 'Useless',
    knowledge: 'Nada',
    id: 0,
  },
  {
    name: 'Hermes Conrad',
    job: 'Bureaucrat',
    ability: 'Stamping',
    knowledge: 'Paperwork',
    id: 23,
  },
];

stories.add('default', () => (
  <FlexTable
    mainColumn="name"
    rows={rowsDefault}
    hideMainLabelWide={boolean('hideMainLabelWide', true)}
    showLabelsWide={boolean('showLabelsWide', true)}
    showLabelsNarrow={boolean('showLabelsNarrow', true)}
    showMissingLabels={boolean('showMissingLabels', true)}
  />
));

stories.add('labels', () => {
  const labels = {
    // name: 'Character name', // << missing
    job: 'Job description',
    // ability: 'Ability', // << missing
    knowledge: 'Knowledge',
    id: 'Id',
  };
  return (
    <FlexTable
      mainColumn="name"
      rows={rowsComplete}
      labels={labels}
      hideMainLabelWide={boolean('hideMainLabelWide', true)}
      showLabelsWide={boolean('showLabelsWide', true)}
      showLabelsNarrow={boolean('showLabelsNarrow', true)}
      showMissingLabels={boolean('showMissingLabels', true)}
    />
  );
});

stories.add('selected and sorted columns', () => {
  const labels = {
    name: 'Character name', // << missing
    job: 'Job description',
    ability: 'Ability',
    knowledge: 'Knowledge',
    id: 'Id',
  };
  const columns = ['job', 'knowledge']; // ability is missing
  return (
    <FlexTable
      mainColumn="name"
      rows={rowsComplete}
      columns={columns}
      labels={labels}
      showMissingLabels={boolean('showMissingLabels', true)}
    />
  );
});

stories.add('styled', () => {
  const labels = {
    job: 'Job description',
    ability: 'Ability',
    knowledge: 'Knowledge',
    id: 'Id',
  };
  const columns = ['id', 'job', 'ability', 'knowledge'];
  return (
    <FlexTable
      mainColumn="name"
      rows={rowsComplete}
      columns={columns}
      labels={labels}
      styleLabelsNarrow={css`
        color: #09868b;
        font-size: 0.9em;
        font-weight: 500;
      `}
      styleLabelsWide={css`
        color: #09868b;
        font-size: 1.1em;
        font-weight: 500;
      `}
      styleMainNarrow={css`
        color: white;
        font-weight: bold;
      `}
      colorBorderNarrow="#dedede"
      colorBorderWide="red"
      colorMainNarrow="#bccbde"
      controlButtonsProps={{
        color: '#316678',
        backgroundColor: '#c2dde6',
        hoverColor: '#a3ccd9',
        borderRadius: 300,
        height: 28,
      }}
      controlHideAllText="Esconder todos"
      controlShowAllText="Mostrar todos"
    />
  );
});

stories.add('proportions', () => {
  const labels = {
    job: 'Job description',
    ability: 'Ability',
    knowledge: 'Knowledge',
    id: 'Id',
  };
  const columns = ['name', 'id', 'job', 'ability', 'knowledge'];
  const proportions = [2, 0.7, 1, 1, 2.3];
  return (
    <FlexTable
      mainColumn="name"
      rows={rowsComplete}
      columns={columns}
      labels={labels}
      proportions={proportions}
    />
  );
});

stories.add('onEdit', () => {
  const labels = {
    job: 'Job description',
    ability: 'Ability',
    knowledge: 'Knowledge',
    id: 'Id',
  };
  const columns = ['name', 'id', 'job', 'ability', 'knowledge'];
  return (
    <FlexTable
      mainColumn="name"
      rows={rowsComplete}
      columns={columns}
      labels={labels}
      onEdit={(i: number) =>
        action(`row ${i} clicked: id = ${rowsComplete[i].id}. name = ${rowsComplete[i].name}`)()
      }
    />
  );
});
