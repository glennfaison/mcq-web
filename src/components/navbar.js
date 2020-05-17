import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../app';
import { routes } from '../constants';

export const Navbar = ({ pageTitle, navbarLinks }) => {
  const { thisUser } = useContext(AppContext);
  return (
    <div className="flex items-center justify-between py-2 h-16 border-b-2 border-black mx-4">

      <Link className="font-extrabold text-2xl" to={routes.landing}>{pageTitle}</Link>

      <span className="flex justify-end items-center invisible md:visible">
        {navbarLinks.map(
          (lnk, i) =>
            <Link to={lnk.url} className="px-2 hover:underline" key={i}>
              {lnk.text}
            </Link>
        )}
      </span>

      <span className="flex justify-end items-center cursor-pointer">
        <span>{(thisUser && thisUser.displayName) || 'Username'}</span>
        <i className="material-icons text-5xl p-0">account_circle</i>
      </span>

    </div>
  );
};
