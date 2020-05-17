import React from 'react';

import { AuthedLayout, ListviewHOC } from '../layouts';

const navbarLinks = [
  { text: 'Link #1', url: '#', icon: '' },
  { text: 'Link #2', url: '#', icon: '' },
  { text: 'Link #3', url: '#', icon: '' },
];

const listItems = new Array(11).fill().map((v, i) => {
  return {
    id: "" + i,
    name: "Quiz " + (i + 1),
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    expiresAt: new Date(),
    createdBy: "👩🏾‍⚕",
  };
});

export const Quizzes = () => {
  return (
    <AuthedLayout
      pageTitle={process.env.REACT_APP_TITLE}
      navbarLinks={navbarLinks}
      content={<ListviewHOC listItems={listItems} />}
    />
  );
};