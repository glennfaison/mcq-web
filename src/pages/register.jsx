import React from 'react';

import { routes } from '../constants';
import { NoAuthLayout } from '../layouts';
import { RegistrationForm } from '../components';

export const Register = () => {
  const welcomeMessage = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;
  return (
    <NoAuthLayout
      pageTitle="Register"
      formComponent={RegistrationForm}
      altMessage="Already have an Account?"
      altText="Sign In"
      altRoute={routes.login}
      welcomeMessage={welcomeMessage}
    />
  );
};