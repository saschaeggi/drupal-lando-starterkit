/**
* Get CSS Breakpoints
* Usage: window.breakpoint gives you the actual breakpoint
* E.g.: if(window.breakpoint == 'mobile') { Your Code }
*/
var breakpointRefreshValue = function () {
  window.breakpoint = window.getComputedStyle(document.querySelector('html'), ':before').getPropertyValue('content').replace(/\"/g, '');
};

window.addEventListener('resize', function() {
  breakpointRefreshValue();
}, true);
