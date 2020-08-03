import React from 'react';

import { AuthedLayout, ListviewHOC } from '../layouts';
import { navbarLinks } from '../constants';

const listItems = new Array(11).fill().map((v, i) => {
  return {
    id: "" + i,
    name: "Quiz " + (i + 1),
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    expiresAt: new Date(),
    createdBy: "👩🏾‍⚕",
  };
});

const headerMappings = {
  "name": "Name",
  "description": "Description",
  "expiresAt": "Expires At",
  "createdBy": "Created By",
};

const columnMappings = {
  "name": (item) => item.name,
  "description": (item) => item.description,
  "expiresAt": (item) => item.expiresAt,
  "createdBy": (item) => item.createdBy,
};

export const Quizzes = () => {
  return (
    <AuthedLayout
      pageTitle={process.env.REACT_APP_TITLE}
      navbarLinks={navbarLinks}
      content={
        <ListviewHOC listItems={listItems}
          headerMappings={headerMappings}
          columnMappings={columnMappings}
      />}
    />
  );
};