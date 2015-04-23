# `process.nextTick` for the browser

This can be used as either a `process.nextTick` implementation or a `window.requestAnimationFrame` polyfill.

Usage:

```javascript

var nextTick = require('browser-next-tick');

nextTick(function() {
	// Will be run on next available event loop
});
```

Actual source:

```javascript
module.exports = (function(window, prefixes, i, p, fnc) {
    while (!fnc && i < prefixes.length) {
        fnc = window[prefixes[i++] + 'equestAnimationFrame'];
    }
    return (fnc && fnc.bind(window)) || window.setImmediate || function(fnc) {window.setTimeout(fnc, 0);};
})(window, 'r webkitR mozR msR oR'.split(' '), 0);
```
