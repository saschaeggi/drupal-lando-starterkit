// https://www.npmjs.com/package/browser-detection
! function(e, n) {
    if (typeof define === 'function') define(n);
    else if (typeof module !== 'undefined' && module.exports) module.exports = n();
    else {
        var o = n(),
            r = this,
            i = r[e];
        o.noConflict = function() {
            return r[e] = i, o;
        }, r[e] = o;
    }
}('browserDetection', function() {

    return function(e) {
        var n = {},
            o = null,
            r = null,
            i = null;
        return function() {
            var e = navigator.userAgent.toLowerCase(),
                n = /(ie|firefox|chrome|safari|opera)(?:.*version)?(?:[ \/])?([\w.]+)/.exec(e),
                s = /(mac|win|linux|freebsd|mobile|iphone|ipod|ipad|android|blackberry|j2me|webtv)/.exec(e);
            e.match(/trident\/7\./) ? (o = 'ie', r = 11) : n && n.length > 2 && (o = n[1], r = n[2]);
            s && s.length > 1 && (i = s[1]);
        }(), i === 'mac' && (i = 'osx'), i === 'safari' && (r = r.substring(0, 1)), n.browser = o, n.version = parseInt(r, 10) || null, n.os = i, (e = e || {}).addClasses && n.os && n.browser && n.version && (document.documentElement.className += ' ' + n.os + ' ' + n.browser + ' ' + n.browser + '-' + n.version + ' '), n;
    };
});

function removeClass(elem, name) {
    if (elem.className.indexOf(name) > -1) {
        elem.className = elem.className.replace(new RegExp('(\\s|^)' + name + '(\\s|$)'), ' ').replace(/^\s+|\s+$/g, '');
    }
}

// legacy detection
var data = browserDetection();
var legacyDetection = {

    settings: {
        ie: 10,
        firefox: 38,
        chrome: 50,
        safari: 8,
        mobileSafari: 12
    },

    init: function() {
        if (data.browser === 'ie' && data.version < this.settings.ie) {
            legacyDetection.addClasses();
        } else if (data.browser === 'firefox' && data.version < this.settings.firefox) {
            legacyDetection.addClasses();
        } else if (data.browser === 'chrome' && data.version < this.settings.chrome) {
            legacyDetection.addClasses();
        } else if (data.browser === 'safari' && data.version < this.settings.safari) {
            legacyDetection.addClasses();
        } else if (data.os === 'iphone' && data.browser === 'safari' && data.version < this.settings.mobileSafari) {
            legacyDetection.addClasses();
        }
    },

    addClasses: function() {
        document.documentElement.className += ' no-validebrowser';

        browserDetection({
            addClasses: true
        });
    },

    closeLagecy: function() {
        var closeBtn;

        function closeMessage() {
            removeClass(document.documentElement, 'no-validebrowser');
            removeClass(document.documentElement, 'lt-ie10');
        }
        if (data.browser === 'ie' && data.version < this.settings.ie) {
            closeBtn = document.getElementsByClassName('legacy__closebtn')[0];
            closeBtn.addEventListener('click', closeMessage);

        } else {
            closeBtn = document.querySelector('.legacy__closebtn');
            closeBtn.addEventListener('click', closeMessage);
        }
    }
};

document.addEventListener('DOMContentLoaded', function() {
    legacyDetection.init();
    legacyDetection.closeLagecy();
});
