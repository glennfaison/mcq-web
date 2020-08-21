import React from 'react';

import { AuthedLayout, ListviewHOC } from '../layouts';
import { navbarLinks } from '../constants';
import { CourseCard } from '../components';

const listItems = new Array(11).fill().map((v, i) => {
  return {
    id: "" + i,
    name: "Course " + (i + 1),
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    createdBy: "👩🏾‍⚕",
    courseCode: "SUP 301",
  };
});

const headerMappings = {
  "name": "Name",
  "description": "Description",
  "courseCode": "Course Code",
  "actions": "Actions",
};

const columnMappings = {
  "name": (item) => item.name,
  "description": (item) => item.description,
  "courseCode": (item) => item.courseCode,
  "actions": () => (
    <div className="flex justify-around">
      <button><i className="material-icons text-2xl p-0">open_in_full</i></button>
    </div>
  ),
};

export const Courses = () => {
  return (
    <AuthedLayout
      pageTitle={process.env.REACT_APP_TITLE}
      navbarLinks={navbarLinks}
      content={
        <ListviewHOC listItems={listItems}
          headerMappings={headerMappings}
          columnMappings={columnMappings}
          cardComponent={CourseCard}
      />}
    />
  );
};