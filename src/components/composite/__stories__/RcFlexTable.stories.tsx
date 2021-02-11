import { Story, Meta } from '@storybook/react/types-6-0';
import { RcFlexTable, RcFlexTableProps } from '../RcFlexTable';
import { renderId, rowsDefault, rowsComplete, rowsLong } from './tableEntries';

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
