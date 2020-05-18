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

function MyContent() {
  const [showModal, setShowModal] = React.useState(false);
  console.log('reloaded', showModal);
  return (
    <>
      <button
        className="h-8 bg-black text-white"
        style={{ transition: "all .15s ease" }}
        onClick={() => setShowModal(true)} >
        Open regular modal
      </button>

      <Modal show={showModal} onCancel={() => setShowModal(false)} />
    </>
  );
}