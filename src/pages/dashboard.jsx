import React from 'react';

import { AuthedLayout } from '../layouts';
import { navbarLinks } from '../constants';

export const Dashboard = () => {
  return (
    <AuthedLayout
      pageTitle={process.env.REACT_APP_TITLE}
      navbarLinks={navbarLinks}
    />
  );
};