/**
 * @file <%= storyName %>
 *
 * @module <%= storyName %>
 *
 */

const instance = {},
  defaults = {
    container: '.<%= storyClass %>'
  },
  settings = {};

// Module Variables
let container;

// Private Functions
const bind = (e) => {
  // Your private code
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
    bind();

    return instance;
};

export default instance;
