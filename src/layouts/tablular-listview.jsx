import React from 'react';

const Row = ({ item, headerMappings, columnMappings }) => {
  return (
    <tr className="border-2 border-dark border-0 border-top">
      {Object.keys(headerMappings).map((key) => (
        <td key={key}>{columnMappings[key](item).toString()}</td>
      ))}
    </tr>
  );
};

export const TabularListview = ({ listItems, headerMappings, columnMappings }) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr className="border-2 border-dark border-0 border-top">
            {Object.entries(headerMappings).map((pair) =>
              <th className="hover:bg-gray-100" key={pair[0]}>
                {pair[1]}
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {listItems.map((item, i) =>
            <Row key={i} item={item} headerMappings={headerMappings} columnMappings={columnMappings} />
          )}
        </tbody>
      </table>
    </div>
  );
};