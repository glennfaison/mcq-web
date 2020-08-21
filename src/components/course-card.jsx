import React from 'react';
import { Checkbox } from './checkbox';
import { ProgressBar } from './progress-bar';

export const CourseCard = ({
  item,
  onDeleteClicked = () => {},
  onUpdateClicked = () => {},
  onSelectToggled = () => {},
}) => {
  return (
    <div className="flex flex-col border-2 border-black overflow-hidden">

      <div className="flex justify-between px-1">
        <Checkbox onChange={onSelectToggled} />
        <span>
          <span className="material-icons-outlined cursor-pointer"
            onClick={() => onUpdateClicked(item)}>
            edit
          </span>
          <span className="material-icons-outlined cursor-pointer"
            onClick={() => onDeleteClicked(item)}>
            delete
          </span>
        </span>
      </div>
      
      <div className="flex-grow mx-2 max-h-24 overflow-hidden text-justify">
        <h1 className="text-2xl font-extrabold overflow-x-hidden">{item.name}</h1>
        {item.description}
      </div>

      {/*
      <span className="p-2">
        <div className="pt-2 text-center">{`${77}%`}</div>
        <ProgressBar progress={77} total={100} className="border border-black" />
      </span>

      <div className="flex justify-between items-end px-2 py-2">
        <button className="h-8 w-16 bg-black text-white">sit</button>
        <span className="text-xs">{item.expiresAt.toISOString().substr(0, 10)}</span>
      </div>
      */}

    </div>
  );
};