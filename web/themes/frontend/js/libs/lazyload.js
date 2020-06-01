/**
 * @file LazyLoad
 * @author sascha.eggenberger@unic.com
 *
 * @module lazyload
 *
 */

import LazyLoad from 'vanilla-lazyload';

const instance = {},
  defaults = {
    selector: '.img',
    loading: 'img-loading',
    loaded: 'img-loaded'
  },
  settings = {};

// Module Variables
let myLazyLoad;

/**
 * Initialize module
 *
 * @param {object} options - Override default settings with options object.
 * @return {object} Instance of created module.
 */

instance.init = (context, options) => {
  Object.assign(settings, defaults, options);

  // Public Code
  myLazyLoad = new LazyLoad({
    elements_selector: settings.selector,
    class_loading: settings.loading,
    class_loaded: settings.loaded
  });

  return instance;
},
instance.update = (context, options) => {
  Object.assign(settings, defaults, options);

  // Public Code
  myLazyLoad.update();

  return instance;
};

export default instance;
