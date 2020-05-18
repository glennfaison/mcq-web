import React, { useContext } from 'react';

import { LabeledInput } from './labeled-input';
import { routes } from '../constants';
import { register, login } from '../services/api';
import { AppContext } from '../app';
import { Checkbox } from './checkbox';

/**
 *  Submit Registration form
 *  @param {React.FormEvent<HTMLFormElement>} e
 *  @param {React.Context} context
 *  @returns {Promise<void>}
 */
const submitRegistration = async (e, context) => {
  e.preventDefault();
  const user = {
    displayName: e.target.elements.displayName.value,
    firstName: e.target.elements.firstName.value,
    otherNames: e.target.elements.otherNames.value,
    email: e.target.elements.email.value,
    password: e.target.elements.password.value,
    repeatPassword: e.target.elements.repeatPassword.value,
    tosAgreement: e.target.elements.tosAgreement.checked,
  };
  const registrationRes = await register(user);
  // If the registration is successful, log the user in
  if (registrationRes) {
    const loginRes = await login(user);
    // if login is successful, redirect to dashboard
    if (loginRes) {
      context.setThisUser(loginRes);
      return context.history.push(routes.dashboard);
    }
    // If we're here, login failed
  }
  // If we're here, registration failed
  console.log(registrationRes.data);
}

export const RegistrationForm = () => {
  const appContext = useContext(AppContext);
  return (
    <form className="border-2 border-black p-5" onSubmit={e => submitRegistration(e, appContext)}>

      <LabeledInput type="text" identifier="firstName" label="First Name" />
      <LabeledInput type="text" identifier="otherNames" label="Other Names" />
      <LabeledInput type="text" identifier="displayName" label="Username" required />
      <LabeledInput type="email" identifier="email" label="Email" required />
      <LabeledInput type="password" identifier="password" label="Password" required />
      <LabeledInput type="password" identifier="repeatPassword" label="Repeat Password" required />

      <div className="pt-3 pb-6">
        <span className="h-8 flex align-middle">
          <Checkbox
            id="tosAgreement"
            name="tosAgreement"
          />
          <label htmlFor="tosAgreement" className="cursor-pointer">I agree to the Terms of Service</label>
        </span>
        <input type="submit" value="Register"
          className="w-full bg-black text-white h-8 p-1 cursor-pointer"
        />
      </div>

    </form>
  );
};
