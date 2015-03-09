module.exports = (function(window, prefixes, i, p, fnc) {
    while (!fnc && i < prefixes.length) {
        fnc = window[prefixes[i++] + 'equestAnimationFrame'];
    }
    return (fnc && fnc.bind(window)) || window.setImmediate || function(fnc) {window.setTimeout(fnc, 0);};
})(window, 'r webkitR mozR msR oR'.split(' '), 0);
