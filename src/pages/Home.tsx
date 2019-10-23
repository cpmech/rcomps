import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { DropDown, IDropDownEntry } from '../components';
import { MainMenu } from './MainMenu';

interface IHomeProps extends RouteComponentProps {}

const dropdownEntries: IDropDownEntry[] = [
  {
    message: 'First entry',
    link: {
      onClick: () => console.log('First entry was clicked'),
    },
  },
  {
    message: 'Second entry',
    link: {
      onClick: () => console.log('Second entry was clicked'),
    },
  },
  {
    message: 'Third entry',
    link: {
      onClick: () => console.log('Third entry was clicked'),
    },
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
          styles={{
            button: {
              backgroundColor: '#803ced',
              hoverColor: '#9f6cf1',
            },
          }}
        />
        <DropDown
          title="Please select another one"
          entries={dropdownEntries}
          styles={{
            button: {
              backgroundColor: '#236cd2',
              hoverColor: '#548fe2',
            },
          }}
        />
      </div>
    </div>
  );
};
