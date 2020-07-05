import React from 'react';
import PropTypes from 'prop-types';
import { unmountComponentAtNode } from 'react-dom';

export const Modal = ({
  title,
  body,
  cancelBtnText,
  okBtnText,
  onCancel = () => {},
  onSuccess = () => {},
  parentElement,
}) => {
  const exit = () => unmountComponentAtNode(parentElement);
  return (
    <>
      <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto
        fixed inset-0 z-50 outline-none focus:outline-none" >
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/* content */}
          <div className="border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

            {/* header */}
            <div className="flex items-start justify-between p-4 border-b-2 border-black">
              <h3 className="text-2xl font-semibold">
                {title}
              </h3>
              <button
                className="ml-auto text-4xl opacity-5 leading-none font-semibold focus:outline-none"
                onClick={(e) => { exit(); onCancel(e); }} >
                ×
              </button>
            </div>

            {/* body */}
            <div className="relative p-4 flex-auto">
              <p className="text-gray-600 text-lg leading-relaxed text-justify">
                {body}
              </p>
            </div>

            {/* footer */}
            <div className="flex items-center justify-end py-2 px-4 border-t-2 border-black">
              <button
                className="bg-white border-2 border-black active:bg-gray-400 font-bold text-sm px-4 py-2 shadow hover:shadow-lg mr-1 mb-1"
                style={{ transition: 'all .15s ease' }}
                onClick={(e) => { exit(); onCancel(e); }} >
                {cancelBtnText}
              </button>
              <button
                className="bg-black border-2 border-black text-white active:bg-gray-400 font-bold text-sm px-4 py-2 shadow hover:shadow-lg mr-1 mb-1"
                style={{ transition: 'all .15s ease' }}
                onClick={(e) => { exit(); onSuccess(e); }} >
                {okBtnText}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"
        onClick={(e) => { exit(); onCancel(e); }} >
      </div>
    </>
  );
};

Modal.propTypes = {
  show: PropTypes.bool,
  title: PropTypes.string,
  body: PropTypes.any,
  cancelBtnText: PropTypes.string,
  okBtnText: PropTypes.string,
  onCancel: PropTypes.func,
  onSuccess: PropTypes.func,
};
