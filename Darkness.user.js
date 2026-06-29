// ==UserScript==
// @name         3rb.io - Darkness V1
// @namespace    http://tampermonkey.net/
// @version      2
// @description  3rb.io Ex
// @author       I don't own the extension; I just tweaked and improved it
// @match        *://3rb.io/
// @run-at       document-start
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// ==/UserScript==
const HOST = (function(){try{return new TextDecoder().decode(new Uint8Array((function(_0x){var _0x1=[];for(var _0x2=0;_0x2<_0x.length;_0x2++){var _0x3=_0x.charCodeAt(_0x2);if(_0x3<128){_0x1.push(_0x3)}else if(_0x3<2048){_0x1.push(192|_0x3>>6,128|_0x3&63)}else{_0x1.push(224|_0x3>>12,128|_0x3>>6&63,128|_0x3&63)}}return _0x1})(atob('aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2RhcmtuZXNzeGQvRW5keW1pb24tM3JiL21haW4='))));}catch(e){return ''}})();

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
                        this.fixInputs();
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
                    el.style.cssText = 'position:fixed;top:10px;right:' + (10 + (c-1)*340) + 'px;z-index:9999;opacity:0;pointer-events:none';
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

    fixInputs() {
        var self = this;
        function _r() {
            var nick = document.getElementById('nick');
            var skin = document.getElementById('skin');
            if (!nick || !skin) { setTimeout(_r, 200); return; }
            nick.style.cssText = 'min-width:0;flex:1';
            var n2 = document.getElementById('nick2'); if(n2) n2.style.width = '100px';
            var a = document.getElementById('arbSkin'); if(a) a.style.width = '70px';
            skin.style.cssText = 'min-width:0;flex:1';
            var s2 = document.getElementById('skin2'); if(s2) s2.style.width = '90px';
        }
        setTimeout(_r, 500);
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
                if (url.includes('m.js')) {
                    var _0xlsCSS = document.createElement('style');
                    _0xlsCSS.textContent = '#loading-screen{z-index:200;position:fixed;left:0;top:0;right:0;bottom:0;background-color:#1a1a2e;opacity:1;background-image:url(https://i.imgur.com/nmBQBiv.jpeg);background-position:bottom;background-size:cover;background-repeat:no-repeat;transition:opacity 1s}#loading-screen .maou-circle-container{width:512px;height:512px;position:fixed;top:calc(50% - 256px);left:calc(50% - 256px);transform:scale(1);transition:all .75s}#loading-screen .maou-circle-container:hover{transform:scale(1.1)}#loading-screen .maou-circle-container .maou-circle{width:512px;height:512px;position:absolute}#loading-screen .maou-circle-container .maou-circle.p1{background:url(https://i.imgur.com/wfSDaIH.png);animation:spinRight 32s linear infinite,fadeIn 6s}#loading-screen .maou-circle-container .maou-circle.p2{background:url(https://i.imgur.com/blWRiUv.png);animation:spinLeft 20s linear infinite,fadeIn 6s}#loading-screen .maou-circle-container .maou-circle.p3{background:url(https://i.imgur.com/GRjA1gJ.png);animation:spinRight 16s linear infinite,fadeIn 6s}#loading-screen .message{position:fixed;bottom:40px;left:50%;transform:translateX(-50%);font-family:raleway;font-size:25px;color:#fff;text-align:center;animation:fadeIn 1s;opacity:1;transition:opacity 1s}@keyframes spinRight{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes spinLeft{0%{transform:rotate(0)}100%{transform:rotate(-360deg)}}@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}';
                    document.head.appendChild(_0xlsCSS);
                    var oldHtml = '_0x14f7b2("#loading-screen").html("<div class=\\"ls-title\\">3rb.io Multibox</div><div class=\\"ls-spinner\\"><span id=\\"ls-icon\\"><i class=\\"fa fa-solid fa-circle-notch fa-spin\\"></i></span><span style=\\"display:block;\\" id=\\"ls-message\\">Loading...</span></div>")';
                    var newHtml = '_0x14f7b2("#loading-screen").html(\'<div class="maou-circle-container"><div class="maou-circle p1"></div><div class="maou-circle p2"></div><div class="maou-circle p3"></div></div><div class="message">Loading...</div>\')';
                    responseText = responseText.replace(oldHtml, newHtml);
                    responseText = responseText.replace('_0x14f7b2("#ls-message")', '_0x14f7b2("#loading-screen .message")');
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
}
