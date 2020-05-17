import React from 'react';

export const JsonListview = ({ listItems }) => {
  const nbsp = "\u00a0";
  return (
    <div>
      {listItems.map(item =>
        <div className="py-2 text-justify hover:bg-gray-100" key={item.id}>
          {JSON.stringify(item, null, nbsp)}
        </div>
      )}
    </div>
  );
};