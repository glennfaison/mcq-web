import React from 'react';

import { NoAuthLayout } from '../layouts';
import { LoginForm } from '../components';
import { routes } from '../constants';

export const Login = () => {
  const welcomeMessage = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;
  return (
    <NoAuthLayout
      pageTitle="Sign In"
      formComponent={LoginForm}
      altMessage="Don't have an Account?"
      altText="Register"
      altRoute={routes.register}
      welcomeMessage={welcomeMessage}
    />
  );
};