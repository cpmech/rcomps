import React from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { FlexTable } from '../FlexTable';

const stories = storiesOf('FlexTable', module);

stories.addDecorator(withKnobs);

stories.add('default', () => {
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

  return <FlexTable mainColumn="name" rows={rows} />;
});

stories.add('labels', () => {
  const labels = {
    // name: 'Character name', // << missing
    job: 'Job description',
    // ability: 'Ability', // << missing
    knowledge: 'Knowledge',
    id: 'Id',
  };
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

  return <FlexTable mainColumn="name" rows={rows} labels={labels} />;
});

stories.add('selected and sorted columns', () => {
  const labels = {
    // name: 'Character name', // << missing
    job: 'Job description',
    ability: 'Ability',
    knowledge: 'Knowledge',
    id: 'Id',
  };
  const columns = ['id', 'job', 'knowledge']; // ability is missing
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

  return <FlexTable mainColumn="name" rows={rows} columns={columns} labels={labels} />;
});

stories.add('styled', () => {
  const labels = {
    job: 'Job description',
    ability: 'Ability',
    knowledge: 'Knowledge',
    id: 'Id',
  };
  const columns = ['id', 'job', 'ability', 'knowledge'];
  const rows = [
    {
      name: 'Bender Rodriguez',
      job: 'Delivery robot',
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

  return (
    <FlexTable
      mainColumn="name"
      rows={rows}
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
      styleMainColumnText={css`
        color: white;
        font-weight: bold;
      `}
      // bgColorMainColumn="#76c1d4"
      // bgColorMainColumn="#3d7c47"
      // bgColorMainColumn="#f7f7f7"
      bgColorMainColumn="#bccbde"
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
  const rows = [
    {
      name: 'Bender Rodriguez',
      job: 'Delivery robot',
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

  return (
    <FlexTable
      mainColumn="name"
      rows={rows}
      columns={columns}
      labels={labels}
      proportions={proportions}
    />
  );
});
