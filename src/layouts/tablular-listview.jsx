import React, { useState } from 'react';

const Row = ({ item, headerMappings, columnMappings }) => {
  return (
    <tr className="hover:bg-gray-100 border-t-2 border-black border-0">
      {Object.keys(headerMappings).map((key) => (
        <td className="px-2" key={key}>{columnMappings[key](item)}</td>
      ))}
    </tr>
  );
};

export const TabularListview = ({ listItems, headerMappings, columnMappings, pageSize }) => {
  const [pageNumber, setPageNumber] = useState(0);
  const startIndex = pageNumber * pageSize;
  const endIndex = startIndex + pageSize;
  const newListItems = listItems.slice(startIndex, endIndex);
  const lastPage = Math.ceil((listItems.length) / pageSize) || 1;
  return (
    <div>
      <table className="border-0 my-5">
        <thead>
          <tr className="border-t-2 border-black border-0">
            {Object.entries(headerMappings).map((pair) =>
              <th className="hover:bg-gray-100 px-2" key={pair[0]}>
                {pair[1]}
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {newListItems.map((item, i) =>
            <Row key={i} item={item} headerMappings={headerMappings} columnMappings={columnMappings} />
          )}
        </tbody>
        <tfoot>
          <tr className="border-t-2 border-b-2 border-black border-0">
            <td colSpan={Object.keys(headerMappings).length} className="hover:bg-gray-100 p-2">
              <div className="flex justify-between">
                <div>Page {pageNumber + 1} of {lastPage}</div>
                <div>
                  <button className="pb-0 pt-2 px-1 border-transparent border-2 hover:border-black">
                    <i className="material-icons text-2xl p-0"
                      onClick={() => setPageNumber(0)}>first_page</i>
                  </button>
                  <button className="pb-0 pt-2 px-1 border-transparent border-2 hover:border-black"
                    disabled={pageNumber <= 0}>
                    <i className="material-icons text-2xl p-0"
                      onClick={() => setPageNumber(pageNumber - 1)}>chevron_left</i>
                  </button>
                  <button className="pb-0 pt-2 px-1 border-transparent border-2 hover:border-black"
                    disabled={pageNumber >= lastPage}>
                    <i className="material-icons text-2xl p-0"
                      onClick={() => setPageNumber(pageNumber + 1)}>chevron_right</i>
                  </button>
                  <button className="pb-0 pt-2 px-1 border-transparent border-2 hover:border-black">
                    <i className="material-icons text-2xl p-0"
                      onClick={() => setPageNumber(lastPage - 1)}>last_page</i>
                  </button>
                </div>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};