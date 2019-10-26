import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { IconAccount } from '@cpmech/react-icons';
import { DropDown, IDropDownEntry, Pair } from '../components';
import { MainMenu } from './MainMenu';

interface IHomeProps extends RouteComponentProps {}

const dropdownEntries: IDropDownEntry[] = [
  {
    message: 'First entry',
    onClick: () => console.log('First entry was clicked'),
  },
  {
    message: 'Second entry',
    onClick: () => console.log('Second entry was clicked'),
  },
  {
    message: 'Third entry',
    onClick: () => console.log('Third entry was clicked'),
  },
];

export const Home: React.FC<IHomeProps> = () => {
  return (
    <div>
      <MainMenu />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          maxWidth: 600,
          margin: '60px auto',
        }}
      >
        <DropDown
          title="Please select one"
          entries={dropdownEntries}
          color="white"
          backgroundColor="#803ced"
          hoverColor="#9f6cf1"
        />
        <DropDown
          title="Please select another one"
          entries={dropdownEntries}
          color="white"
          backgroundColor="#236cd2"
          hoverColor="#548fe2"
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Pair
          left={<IconAccount size={40} style={{ color: 'red' }} />}
          right="---ACCOUNT---"
          spacing={0}
          styleRight={{ fontSize: 32 }}
        />
      </div>
    </div>
  );
};
