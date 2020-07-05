import React, { useRef } from 'react';
import ReactDOM from 'react-dom';

import { AuthedLayout } from '../layouts';
import { navbarLinks } from '../constants';
import { open } from '../services/modal';

export const Dashboard = () => {
  return (
    <AuthedLayout
      pageTitle={process.env.REACT_APP_TITLE}
      navbarLinks={navbarLinks}
      content={<MyContent />}
    />
  );
};

function MyContent () {
  const modalParent = useRef(null);
  const body = `I always felt like I could do anything. That’s the main
    thing people are controlled by! Thoughts- their perception
    of themselves! They're slowed down by their perception of
    themselves. If you're taught you can’t do anything, you
    won’t do anything. I was taught I could do everything${0}.`;

  const showModal = () => {
    open(body, {
      title: 'Modal Title',
      cancelBtnText: 'Cancel',
      okBtnText: 'Success',
      onSuccess: () => {},
      onCancel: () => {},
      parentElement: ReactDOM.findDOMNode(modalParent.current),
    });
  };

  return (
    <>

      <div ref={modalParent}></div>

      <button
        className="h-8 bg-black text-white mx-auto px-2"
        style={{ transition: 'all .15s ease' }}
        onClick={() => showModal()} >
        Open regular modal
      </button>

    </>
  );
}
