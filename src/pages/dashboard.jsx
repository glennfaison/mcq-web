import React from 'react';

import { AuthedLayout } from '../layouts';
import { navbarLinks } from '../constants';
import { Modal } from '../components';

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
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <button
        className="h-8 bg-black text-white mx-auto px-2"
        style={{ transition: 'all .15s ease' }}
        onClick={() => setShowModal(true)} >
        Open regular modal
      </button>

      <Modal show={showModal}
        onCancel={() => setShowModal(false)}
        onSuccess={() => setShowModal(false)}
        title="Modal Title"
        body="I always felt like I could do anything. That’s the main
        thing people are controlled by! Thoughts- their perception
        of themselves! They're slowed down by their perception of
        themselves. If you're taught you can’t do anything, you
        won’t do anything. I was taught I could do everything."
        cancelBtnText="Cancel"
        okBtnText="Save"
      />
    </>
  );
}
