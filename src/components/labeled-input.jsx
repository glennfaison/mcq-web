import React from 'react';

/**
 *  An input with a label
 *  @param {Object} props
 *  @param {RegExp} props.pattern
 *  @param {string} props.identifier
 *  @param {string} [props.label = identifier]
 *  @param {'text'|'password'|'email'} type
 *  @param {boolean} [props.required = false]
 *  @returns {JSX.Element}
 */
export const LabeledInput = ({ pattern, identifier, label = identifier, type, required = false }) => {
  return (
    <div className="pt-3">
      <label htmlFor={identifier} className="w-full h-8">
        {label}
        {required && <span className="text-red-500 pl-1">*</span>}
      </label>
      <input type={type}
        id={identifier}
        name={identifier}
        pattern={pattern}
        className="w-full border-2 border-black h-8 p-1" />
    </div>
  );
};