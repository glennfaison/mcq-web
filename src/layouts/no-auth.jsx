import React from 'react';
import { Link } from 'react-router-dom';

export const NoAuthLayout = ({
  pageTitle, welcomeMessage, formComponent, altMessage, altText, altRoute
}) => {
  return (
    <div className="flex flex-grow flex-col md:flex-row md:h-screen">

      {/* Left Pane */}
      <div className="flex-1 flex bg-black text-white">
        <span className="text-justify my-auto p-5 text-3xl">
          {welcomeMessage}
        </span>
      </div>
      {/* End Left Pane */}

      {/* Right Pane */}
      <div className="flex-1 flex bg-transparent p-5 pt-0">
        <div className="flex flex-col max-h-screen w-full overflow-y-scroll">
          <div className="my-auto">
            <h1 className="text-center text-3xl h-16">{pageTitle}</h1>

            {formComponent()}

            <div className="text-center text-sm">
              <div>{altMessage}</div>
              <span className="hover:underline"><Link to={altRoute}>{altText}</Link></span>
            </div>

          </div>
        </div>
      </div>
      {/* End Right Pane */}

    </div>
  );
};