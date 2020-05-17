import React from 'react';

export const Toolbar = ({
  onFilter,
  layouts,
  onLayoutChange,
  hasSelection = false,
  onBulkDelete = () => {},
}) => {
  return (
    <div className="flex items-center justify-between py-2 flex-wrap">

      <span className="relative flex items-center w-full max-w-xs">
        <i className="material-icons text-2xl absolute pl-1">search</i>
        <input type="search"
          className="border-2 border-black h-8 p-1 pl-6 w-full"
          onChange={e => onFilter(e.target.value)}
        />
      </span>

      <span className="flex justify-end items-center ml-auto">
        <span className="border border-black mr-5">
          <button className="border border-black h-8 w-8 p-1">
            <i className="material-icons text-2xl">select_all</i>
          </button>
          {(!!hasSelection) &&
            <button className="border border-black h-8 w-8 p-1"
              onClick={onBulkDelete}>
              <i className="material-icons text-2xl">delete_sweep</i>
            </button>
          }
          <button className="border border-black h-8 w-8 p-1">
            <i className="material-icons text-2xl">settings</i>
          </button>
        </span>

        <span className="border border-black">
          {layouts.map(layout =>
            <button className="border border-black h-8 w-8 p-1"
              title={layout.description}
              onClick={() => onLayoutChange(layout.name)}
              key={layout.name}>
              <i className="material-icons text-2xl">{layout.icon}</i>
            </button>
          )}
        </span>

      </span>

    </div>
  );
};
