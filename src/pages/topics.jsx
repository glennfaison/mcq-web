import React from 'react';

import { AuthedLayout, ListviewHOC } from '../layouts';
import { navbarLinks } from '../constants';
import { TopicCard } from '../components';

const listItems = new Array(11).fill().map((v, i) => {
  return {
    id: "" + i,
    name: "Topic " + (i + 1),
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    createdBy: "👩🏾‍⚕",
    topicCode: "SUP 301",
  };
});

const headerMappings = {
  "name": "Name",
  "description": "Description",
  "topicCode": "Topic Code",
  "actions": "Actions",
};

const columnMappings = {
  "name": (item) => item.name,
  "description": (item) => item.description,
  "topicCode": (item) => item.topicCode,
  "actions": () => (
    <div className="flex justify-around">
      <button><i className="material-icons text-2xl p-0">open_in_full</i></button>
    </div>
  ),
};

export const Topics = () => {
  return (
    <AuthedLayout
      pageTitle={process.env.REACT_APP_TITLE}
      navbarLinks={navbarLinks}
      content={
        <ListviewHOC listItems={listItems}
          headerMappings={headerMappings}
          columnMappings={columnMappings}
          cardComponent={TopicCard}
      />}
    />
  );
};