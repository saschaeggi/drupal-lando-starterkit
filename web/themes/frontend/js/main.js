// Polyfills
import 'mdn-polyfills/NodeList.prototype.forEach';
import 'mdn-polyfills/Node.prototype.remove';
import 'mdn-polyfills/Element.prototype.matches';
import 'mdn-polyfills/Element.prototype.closest';

// Bundle Config
import '../.modernizrrc';
import './libs/modernizr-custom-tests';
import lazyload from './libs/lazyload.js';

// Helpers
import './helpers/breakpoint';

// Modules
import text from '../src/modules/text/text.js';

import { runInContext } from 'vm';

// Vue app
import Vue from 'vue';
import './App.vue';

window.addEventListener('DOMContentLoaded', function() {
  new Vue({
    el: '#app',
  });
});

window.addEventListener('load', function() {
  //Page loaded
  document.querySelector('body').classList.add('loaded');
});

// Calls
(function (Drupal, drupalSettings) {
  Drupal.behaviors.lazyLoad = {
    attach: function attach(context) {
      lazyload.init(context);
    },
    update: function update(context) {
      lazyload.update();
    }
  };

  Drupal.behaviors.text = {
    attach: function attach(context) {
      text.init(context);
    }
  };

})(Drupal, drupalSettings);
