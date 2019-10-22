import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { DropDown } from '../components';

interface IHomeProps extends RouteComponentProps {}

const entries = [
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
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        maxWidth: 600,
        margin: 'auto',
      }}
    >
      <DropDown
        title="Please select one"
        entries={entries}
        styles={{
          button: {
            backgroundColor: '#803ced',
            hoverColor: '#9f6cf1',
          },
        }}
      />
      <DropDown
        title="Please select another one"
        entries={entries}
        styles={{
          button: {
            backgroundColor: '#236cd2',
            hoverColor: '#548fe2',
          },
        }}
      />
    </div>
  );
};
