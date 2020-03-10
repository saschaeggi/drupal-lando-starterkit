/**
 * @file Starterkit Module Example
 *
 * @module starterkit-example
 *
 */

import helperDom from '../helpers/helper-dom';

const instance = {},
    defaults = {
        container: '.m-starterkit'
    },
    settings = {};

// Module Variables
let container;

// Private Functions
const delegate = (e) => {
  console.log(e);
};

/**
 * Initialize module
 *
 * @param {object} options - Override default settings with options object.
 * @return {object} Instance of created module.
 */

instance.init = (options) => {
    Object.assign(settings, defaults, options);

    // Public Code

    return instance;
};

export default instance;
