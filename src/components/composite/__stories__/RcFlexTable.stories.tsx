import { Story, Meta } from '@storybook/react/types-6-0';
import { RcFlexTable, RcFlexTableProps } from '../RcFlexTable';

const rowsDefault = [
  {
    name: 'Bender Rodriguez',
    job: 'Delivery robot',
    ability: 'Robbery',
    knowledge: <strong>Bending girders</strong>,
    id: 10101,
    itemId: 'bender-rodriguez',
  },
  {
    name: 'Turanga Leela',
    job: 'Ship captain',
    ability: 'Kung fu',
    knowledge: <strong>Pilot ship</strong>,
    id: 22222,
    itemId: 'turanga-leela',
  },
  {
    name: 'Philip J Fry',
    // job: 'Delivery boy', // << missing
    ability: 'Useless',
    knowledge: <strong>Nada</strong>,
    id: 0,
    itemId: 'philip-j-fry',
  },
  {
    // name: 'Hermes Conrad', // << missing
    job: 'Bureaucrat',
    ability: 'Stamping',
    knowledge: <strong>Paperwork</strong>,
    id: 23,
    itemId: 'hermers-conrad',
  },
];

const rowsComplete = [
  {
    name: 'Bender Rodriguez',
    job: 'Assistent to the delivery boy, supposedly',
    ability: 'Robbery',
    knowledge: 'Bending girders',
    id: 10101,
    itemId: 'bender-rodriguez',
  },
  {
    name: 'Turanga Leela',
    job: 'Ship captain',
    ability: 'Kung fu',
    knowledge: 'Pilot ship',
    id: 22222,
    itemId: 'turanga-leela',
  },
  {
    name: 'Philip J Fry',
    job: 'Delivery boy',
    ability: 'Useless',
    knowledge: 'Nada',
    id: 0,
    itemId: 'philip-j-fry',
  },
  {
    name: 'Hermes Conrad',
    job: 'Bureaucrat',
    ability: 'Stamping',
    knowledge: 'Paperwork',
    id: 23,
    itemId: 'hermers-conrad',
  },
];

const rowsLong = [
  {
    name: 'Bender Rodriguez',
    email: 'bender.rodriguez@futurama.xyz',
    phone: '+1 (650) 1234-5678',
    userId: 'f5224e29-8690-4824-91c9-f85bd171d113',
    job: 'Assistent to the delivery boy, supposedly',
    ability: 'Robbery',
    knowledge: 'Bending girders',
    info: 'More information about Bender',
  },
  {
    name: 'Turanga Leela',
    email: 'turanga.leela@futurama.xyz',
    phone: '+1 (650) 1234-5678',
    userId: 'f5224e29-8690-4824-91c9-f85bd171d113',
    job: 'Ship captain',
    ability: 'Kung fu',
    knowledge: 'Pilot ship',
    info: 'More information about Leela',
  },
  {
    name: 'Philip J Fry',
    email: 'philip.j.fry@futurama.xyz',
    phone: '+1 (650) 1234-5678',
    userId: 'f5224e29-8690-4824-91c9-f85bd171d113',
    job: 'Delivery boy',
    ability: 'Useless',
    knowledge: 'Nada',
    info: 'More information about Fry',
  },
  {
    name: 'Hermes Conrad',
    info: 'More information about Hermers',
  },
];

const renderId = (d: any) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      wordBreak: 'break-all',
      color: 'white',
    }}
  >
    {/* name */}
    <div
      style={{
        fontWeight: 'bold',
        fontSize: '2em',
      }}
    >
      {d.name}
    </div>

    {/* info */}
    <div
      style={{
        fontSize: '0.9em',
        color: '#4d50c6',
        marginBottom: 3,
      }}
    >{`(info: ${d.info})`}</div>

    {/* email */}
    <div
      style={{
        fontSize: '1.5em',
      }}
    >
      {d.email}
    </div>

    {/* phone */}
    <div
      style={{
        color: '#484848',
      }}
    >
      {d.phone}
    </div>

    {/* userId */}
    <div
      style={{
        fontStyle: 'italic',
      }}
    >
      {d.userId}
    </div>
  </div>
);

export default {
  title: 'Composite/RcFlexTable',
  component: RcFlexTable,
  argTypes: {
    hideMainLabelWide: { control: 'boolean' },
    showLabelsNarrow: { control: 'boolean' },
    showLabelsWide: { control: 'boolean' },
    showMissingLabels: { control: 'boolean' },
    showControlButtons: { control: 'boolean' },
    colorMainNarrow: { control: 'color' },
    colorMainWide: { control: 'color' },
    colorMissing: { control: 'color' },
    colorIconMainColumn: { control: 'color' },
    colorBorderNarrow: { control: 'color' },
    colorBorderWide: { control: 'color' },
    colorBorderMainNarrow: { control: 'color' },
    colorBorderMainWide: { control: 'color' },
  },
} as Meta;

const Template: Story<RcFlexTableProps> = (args) => <RcFlexTable {...args} />;

export const Default = Template.bind({});
Default.args = {
  ...Template.args,
  mainColumn: 'name',
  rows: rowsDefault,
};

export const AllLabels = Template.bind({});
AllLabels.args = {
  ...Template.args,
  mainColumn: 'name',
  rows: rowsDefault,
  labels: {
    name: 'Character',
    job: 'Job',
    ability: 'Ability',
    knowledge: 'Knowledge',
    id: 'Id',
  },
};

export const SomeLabels = Template.bind({});
SomeLabels.args = {
  ...Template.args,
  mainColumn: 'name',
  rows: rowsDefault,
  labels: {
    job: 'Job',
    knowledge: 'Knowledge',
    id: 'Id',
  },
};

export const Selection = Template.bind({});
Selection.args = {
  ...Template.args,
  mainColumn: 'name',
  rows: rowsDefault,
  columns: ['job', 'knowledge'],
};

export const Styled = Template.bind({});
Styled.args = {
  ...Template.args,
  mainColumn: 'name',
  rows: rowsDefault,
  labels: {
    job: 'Job',
    ability: 'Ability',
    knowledge: 'Knowledge',
    id: 'Id',
  },
  columns: ['id', 'job', 'ability', 'knowledge'],
  cssLabelsNarrow: `color: #8b7309; font-size: 0.9em; font-weight: 500;`,
  cssLabelsWide: `color: #c2b010; font-size: 1.1em; font-weight: 500;`,
  cssMainNarrow: `color: #86afa1; font-weight: bold;`,
  colorBorderNarrow: '#44085c',
  colorBorderWide: 'red',
  colorMainNarrow: '#456083',
  controlButtonsProps: {
    color: '#316678',
    backgroundColor: '#35913d',
    hoverColor: '#a07b44',
    borderRadius: 300,
    height: 28,
  },
  controlHideAllText: 'Esconder todos',
  controlShowAllText: 'Mostrar todos',
};

export const Proportions = Template.bind({});
Proportions.args = {
  ...Template.args,
  mainColumn: 'name',
  rows: rowsDefault,
  labels: {
    job: 'Job',
    ability: 'Ability',
    knowledge: 'Knowledge',
    id: 'Id',
  },
  columns: ['name', 'id', 'job', 'ability', 'knowledge'],
  proportions: [2, 0.7, 1, 1, 2.3],
};

export const OnEdit = Template.bind({});
OnEdit.args = {
  ...Template.args,
  mainColumn: 'name',
  rows: rowsComplete,
  onEdit: (i: number) =>
    window.alert(`row ${i} clicked: id = ${rowsComplete[i].id}. name = ${rowsComplete[i].name}`),
};

export const OnEditWithItemId = Template.bind({});
OnEditWithItemId.args = {
  ...Template.args,
  mainColumn: 'name',
  rows: rowsComplete,
  onEdit: (i: number, itemId?: string) =>
    window.alert(
      `row ${i} clicked: id = ${rowsComplete[i].id}. name = ${rowsComplete[i].name}. itemId=${itemId}`,
    ),
};

export const RenderId = Template.bind({});
RenderId.args = {
  ...Template.args,
  mainColumn: 'id',
  rows: rowsLong.map((d) => ({
    id: renderId(d),
    job: d.job,
    ability: d.ability,
    knowledge: d.knowledge,
  })),
  onEdit: (i: number) => window.alert(`row ${i} clicked: name = ${rowsLong[i].name}`),
};
