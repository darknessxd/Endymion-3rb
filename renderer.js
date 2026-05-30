var _HSLO = (function() {
    var app, pixiCanvas, cellSprites = {}, foodSprites = [];

    function init() {
        var origCanvas = document.getElementById('canvas');
        if (!origCanvas) return;
        origCanvas.style.display = 'none';

        app = new PIXI.Application({
            width: window.innerWidth,
            height: window.innerHeight,
            backgroundColor: 0x313131,
            antialias: true,
            resolution: window.devicePixelRatio || 1,
            autoDensity: true
        });
        pixiCanvas = app.view;
        pixiCanvas.id = 'pixi-canvas';
        pixiCanvas.style.position = 'fixed';
        pixiCanvas.style.top = '0';
        pixiCanvas.style.left = '0';
        pixiCanvas.style.width = '100%';
        pixiCanvas.style.height = '100%';
        pixiCanvas.style.zIndex = '1';
        document.body.appendChild(pixiCanvas);

        app.ticker.maxFPS = 60;
        app.ticker.add(function() { render(); });

        window.addEventListener('resize', function() {
            app.renderer.resize(window.innerWidth, window.innerHeight);
        });
    }

    function makeGradientTexture(w, h, r, g, b) {
        var c = document.createElement('canvas');
        c.width = w;
        c.height = h;
        var ctx = c.getContext('2d');
        var grad = ctx.createRadialGradient(w/2, h/2, 0, w/2, h/2, w/2);
        grad.addColorStop(0, 'rgba(' + Math.min(r+80,255) + ',' + Math.min(g+80,255) + ',' + Math.min(b+80,255) + ',1)');
        grad.addColorStop(0.5, 'rgba(' + r + ',' + g + ',' + b + ',1)');
        grad.addColorStop(1, 'rgba(' + Math.max(r-40,0) + ',' + Math.max(g-40,0) + ',' + Math.max(b-40,0) + ',1)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(w/2, h/2, w/2, 0, Math.PI*2);
        ctx.fill();
        return PIXI.Texture.from(c);
    }

    function render() {
        var cells = window.__cells;
        var cam = window.__camera;
        var player = window.__player;
        if (!cells || !cam || !player) return;

        var cx = cam.x || 0;
        var cy = cam.y || 0;
        var zoom = cam.viewport || 1;

        var visible = cells.sortedCells || [];
        var food = cells.food || [];
        var w = window.innerWidth;
        var h = window.innerHeight;

        var liveIds = new Set();

        for (var i = 0; i < visible.length; i++) {
            var cell = visible[i];
            if (!cell || !cell.animX) continue;
            liveIds.add(cell.id);

            var sx = (cell.animX - cx) * zoom + w/2;
            var sy = (cell.animY - cy) * zoom + h/2;
            var sr = (cell.animRadius + 5) * zoom;

            if (sx + sr < 0 || sx - sr > w || sy + sr < 0 || sy - sr > h) continue;

            var spr = cellSprites[cell.id];
            if (!spr) {
                var texSize = sr * 4;
                var tex = makeGradientTexture(texSize, texSize, cell.colorObject.r, cell.colorObject.g, cell.colorObject.b);
                spr = new PIXI.Sprite(tex);
                spr.anchor.set(0.5);
                cellSprites[cell.id] = spr;
                app.stage.addChild(spr);
            }
            spr.position.set(sx, sy);
            spr.scale.set(sr / (spr.texture.width / 2));
        }

        for (var id in cellSprites) {
            if (!liveIds.has(parseInt(id))) {
                app.stage.removeChild(cellSprites[id]);
                cellSprites[id].texture.destroy(true);
                cellSprites[id].destroy();
                delete cellSprites[id];
            }
        }
    }

    return { init: init };
})();

function tryInit() {
    if (typeof PIXI !== 'undefined') {
        _HSLO.init();
    } else {
        setTimeout(tryInit, 200);
    }
}
if (document.readyState === 'complete') {
    tryInit();
} else {
    window.addEventListener('load', tryInit);
}
window.__startRenderer = tryInit;
