import React, { useState } from 'react';

export const Checkbox = ({
  checked = false,
  className,
  onChange = () => {},
  ...props
}) => {
  const [isChecked, setIsChecked] = useState(checked);
  const clickHandler = () => {
    onChange(!isChecked);
    setIsChecked(!isChecked);
  };
  return (
      <span className={"material-icons-outlined cursor-pointer " + className}
        onClick={clickHandler}>
        {isChecked ? 'check_box' : 'check_box_outline_blank'}
        <input type="checkbox"
          className="hidden"
          {...props}
          checked={isChecked}
          readOnly />
      </span>
  );
};