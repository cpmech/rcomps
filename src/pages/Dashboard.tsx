import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { MainMenu } from './MainMenu';

interface IDashboardProps extends RouteComponentProps {}

export const Dashboard: React.FC<IDashboardProps> = () => {
  return (
    <div>
      <MainMenu />
      <p style={{ fontSize: 80 }}>DASHBOARD</p>
    </div>
  );
};
