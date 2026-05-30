// ==UserScript==
// @name         3rb.io — HSLO MultiBox
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  3rb.io HSLO MultiBox (Albion UI)
// @author       Me
// @match        *://3rb.io/*
// @run-at       document-start
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// ==/UserScript==

const HOST = 'https://raw.githubusercontent.com/darknessxd/Endymion-3rb/main';

let resources = [
    HOST + '/v.js',
    HOST + '/m.js'
];

window.onerror = function(msg, src, line, col, err) {
    confirm('خطأ: ' + msg + '\n at ' + src + ':' + line);
};

setTimeout(function() {
    if (document.getElementById('loading-screen')) {
        document.getElementById('loading-screen').style.display = 'none';
    }
}, 10000);

document.open();
new class {
    constructor() {
        this.pageUrl = HOST + '/index.html';
        this.resources = resources;
        this.init();
    }

    init() {
        this.loadPage(() => {
            this.loadTurnstile(() => {
                this.wrapTurnstile();
                this.loadJS(this.resources[0], () => {
                    this.loadJS(this.resources[1], () => {
                        this.fixMenuOverlay();
                    });
                });
            });
        });
    }

    loadTurnstile(callback) {
        var s = document.createElement('script');
        s.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
        s.onload = function() { if (callback) callback(); };
        s.onerror = function() { if (callback) callback(); };
        document.head.appendChild(s);
    }

    wrapTurnstile() {
        var uw = unsafeWindow;
        var _ts = uw.turnstile;
        if (_ts && _ts.render) {
            var origR = _ts.render;
            var c = 0;
            _ts.render = function(sel, opts) {
                c++;
                var el = document.getElementById('ts-' + c);
                if (!el) {
                    el = document.createElement('div');
                    el.id = 'ts-' + c;
                    el.style.cssText = 'position:fixed;top:10px;right:' + (10 + (c-1)*340) + 'px;z-index:9999;opacity:0.15;transform:scale(0.7)';
                    document.body.appendChild(el);
                }
                if (opts && opts.callback) {
                    var cb = opts.callback;
                    opts.callback = function(t) {
                        var ls = document.getElementById('loading-screen');
                        if (ls) ls.style.display = 'none';
                        return cb(t);
                    };
                }
                return origR.call(_ts, el, opts);
            };
        }
    }

    fixMenuOverlay() {
        var ov = document.getElementById('menu-overlay');
        if (ov) ov.onclick = function() {};
    }

    loadJS(url, callback) {
        GM_xmlhttpRequest({
            method: "GET",
            url: url,
            headers: {cache: "no-store"},
            onload: function({responseText}) {
                if (!responseText) {
                    confirm('فشل تحميل: ' + url + '\n Failed to load resource.');
                    return;
                }
                try {
                    new Function(responseText)();
                } catch (error) {
                    confirm('خطأ: ' + url + '\n ' + error);
                }
                if (callback) callback();
            },
            onerror: function() {
                confirm('فشل تحميل: ' + url + '\n Failed to load resource.');
            }
        });
    }

    loadPage(callback) {
        GM_xmlhttpRequest({
            method: "GET",
            url: this.pageUrl,
            headers: {cache: "no-store"},
            onload: function({responseText}) {
                document.write(responseText);
                document.close();
                if (callback) callback();
            }
        });
    }
}();
