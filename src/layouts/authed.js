import React from 'react';
import { Navbar } from '../components';
import { Link } from 'react-router-dom';
import { routes } from '../constants';

function Icon({ iconId, title, url }) {
  return (
    <Link to={url}>
      <span className="flex justify-center cursor-pointer
        border-transparent border-2 hover:border-black"
        title={title}>
        <i className="material-icons text-3xl p-0 py-1">
          {iconId}
        </i>
      </span>
    </Link>
  );
}

export const AuthedLayout = ({
  pageTitle,
  navbarLinks,
  content = false
}) => {

  return (
    <div className="flex flex-row h-screen">

      {/* Sidebar */}
      <div className="flex flex-col items-stretch
        justify-between py-2 pt-16 w-16 border-r-2 border-black">

        <span className="flex flex-col items-stretch mt-2">
          <Icon iconId="dashboard" url={routes.dashboard} title="Dashboard" />
          <Icon iconId="account_circle" url={routes.quizzes} title="Quizzes" />
          <Icon iconId="account_circle" url={routes.courses} title="Courses" />
          <Icon iconId="account_circle" url={routes.topics} title="Topics" />
        </span>
        
        <span className="flex flex-col">
          <Icon iconId="account_circle" url={routes.dashboard} title="Profile" />
          <Icon iconId="settings" url={routes.settings} title="Settings" />
        </span>

      </div>
      {/* End Sidebar */}

      {/* Main Content */}
      <div className="flex flex-col w-full">

        <Navbar pageTitle={pageTitle} navbarLinks={navbarLinks} />
        {content}

      </div>
      {/* End Main Content */}

    </div>
  );
};


