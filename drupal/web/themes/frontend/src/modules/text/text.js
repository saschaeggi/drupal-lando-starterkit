/**
 * @file Starterkit Module Example
 *
 * @module starterkit-example
 *
 */

const instance = {};
const defaults = {
  container: ".m-text"
};
const settings = {};

// Module Variables
// let container;

// Private Functions
// const delegate = e => {};

/**
 * Initialize module
 *
 * @param {object} options - Override default settings with options object.
 * @return {object} Instance of created module.
 */

instance.init = options => {
  Object.assign(settings, defaults, options);

  // Public Code

  return instance;
};

export default instance;
