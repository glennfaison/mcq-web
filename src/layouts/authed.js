import React from 'react';
import { Navbar } from '../components';
import { ListviewHOC } from '../layouts';

function Icon({ iconId }) {
  return (
    <span className="flex justify-center cursor-pointer">
      <i className="material-icons text-3xl p-0 py-1">
        {iconId}
      </i>
    </span>
  );
}

export const AuthedLayout = ({
  pageTitle,
  navbarLinks,
  listItems,
}) => {

  return (
    <div className="flex flex-row h-screen">

      {/* Sidebar */}
      <div className="flex flex-col items-stretch
        justify-between py-2 pt-16 w-16 border-r-2 border-black">

        <span className="flex flex-col items-stretch mt-2">
          <Icon iconId="account_circle" />
          <Icon iconId="account_circle" />
          <Icon iconId="account_circle" />
          <Icon iconId="account_circle" />
        </span>
        
        <span className="flex flex-col">
          <Icon iconId="account_circle" />
          <Icon iconId="account_circle" />
        </span>

      </div>
      {/* End Sidebar */}

      {/* Main Content */}
      <div className="flex flex-col mx-4 w-full">

        <Navbar pageTitle={pageTitle} navbarLinks={navbarLinks} />
        <ListviewHOC listItems={listItems} />

      </div>
      {/* End Main Content */}

    </div>
  );
};


