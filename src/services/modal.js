import React from 'react';
import { render } from 'react-dom';

import { Modal } from '../components';

/**
 *  Opens a new modal window with the specified content and supplied options.
 *  @param {any} content
 *  @param {Object} options
 *  @param {string} options.title
 *  @param {string} options.cancelBtnText
 *  @param {string} options.okBtnText
 *  @param {Function} options.onCancel
 *  @param {Function} options.onSuccess
 *  @param {HTMLElement} options.parentElement
 *  @returns {void}
 */
export const open = (content, options) => {
  const parent = options.parentElement;
  render(<Modal {...options} body={content} />, parent);
};
