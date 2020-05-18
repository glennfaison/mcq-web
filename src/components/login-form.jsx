import React, { useContext } from 'react';

import { LabeledInput } from './labeled-input';
import { routes } from '../constants';
import { login } from '../services/api';
import { AppContext } from '../app';
import { Checkbox } from './checkbox';

/**
 *  Submit Login form
 *  @param {React.FormEvent<HTMLFormElement>} e
 *  @param {React.Context} context
 *  @returns {Promise<void>}
 */
const submitLogin = async (e, context) => {
  e.preventDefault();
  const user = {
    email: e.target.elements.email.value,
    password: e.target.elements.password.value,
    keepMeSignedIn: e.target.elements.keepMeSignedIn.checked,
  };
  const loginRes = await login(user);
  // if login is successful, redirect to dashboard
  if (loginRes) {
    context.setThisUser(loginRes);
    return context.history.push(routes.dashboard);
  }
  // If we're here, login failed
}

export const LoginForm = () => {
  const appContext = useContext(AppContext);
  return (
    <form className="border-2 border-black p-5" onSubmit={e => submitLogin(e, appContext)}>

      <LabeledInput type="email" identifier="email" label="Email" required />
      <LabeledInput type="password" identifier="password" label="Password" required />

      <div className="pt-3 pb-6">
        <span className="h-8 flex align-middle">
          <Checkbox type="checkbox"
            id="keepMeSignedIn"
            name="keepMeSignedIn"
          />
          <label htmlFor="keepMeSignedIn" className="cursor-pointer">Keep me signed in</label>
        </span>
        <input type="submit" value="Sign In"
          className="w-full bg-black text-white h-8 p-1 cursor-pointer"
        />
      </div>

    </form>
  );
};
