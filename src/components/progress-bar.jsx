import React from 'react';

export const ProgressBar = ({
  progress,
  total,
  backgroundColor = 'transparent',
  progressBarColor = 'black',
  ...props
}) => {
  return (
    <div {...props}
      className={`flex align-stretch h-1 bg-${backgroundColor} ` + props.className}>
      <div className={`bg-${progressBarColor} h-full`}
        style={{ width: `${(progress/total) * 100}%` }}
      />
    </div>
  );
};