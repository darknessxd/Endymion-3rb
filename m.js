!function (_0x1c478d, _0x14f7b2, _0x24f9ab) {
  const _0x1fd443 = function () {
    let _0x294ed8 = true;
    return function (_0x21be21, _0x1a0b0e) {
      const _0x1b4c66 = _0x294ed8 ? function () {
        if (_0x1a0b0e) {
          const _0x44e015 = _0x1a0b0e.apply(_0x21be21, arguments);
          _0x1a0b0e = null;
          return _0x44e015;
        }
      } : function () {};
      _0x294ed8 = false;
      return _0x1b4c66;
    };
  }();
  const _0x5749c5 = _0x1fd443(this, function () {
    const _0x3d4924 = function () {
      let _0x2a5e0f;
      try {
        _0x2a5e0f = Function("return (function() {}.constructor(\"return this\")( ));")();
      } catch (_0x21ce0e) {
        _0x2a5e0f = window;
      }
      return _0x2a5e0f;
    };
    const _0x321a87 = _0x3d4924();
    const _0x348dac = _0x321a87.console = _0x321a87.console || {};
    const _0x3f0159 = ["log", "warn", 'info', "error", 'exception', "table", 'trace'];
    for (let _0x9c6fd0 = 0; _0x9c6fd0 < _0x3f0159.length; _0x9c6fd0++) {
      const _0x2b378c = _0x1fd443.constructor.prototype.bind(_0x1fd443);
      const _0x10323e = _0x3f0159[_0x9c6fd0];
      const _0x2a8521 = _0x348dac[_0x10323e] || _0x2b378c;
      _0x2b378c.__proto__ = _0x1fd443.bind(_0x1fd443);
      _0x2b378c.toString = _0x2a8521.toString.bind(_0x2a8521);
      _0x348dac[_0x10323e] = _0x2b378c;
    }
  });
  _0x5749c5();
  class _0x19d5af {
    static ["init"]() {
      this.prefix = "MX-";
      this.oldPrefix = 'MX-';
      this.reset();
    }
    static ["get"](_0x5b0c61, _0x19d740) {
      const _0x457af7 = JSON.parse(localStorage.getItem(this.prefix + _0x5b0c61));
      return null !== _0x457af7 && undefined !== _0x457af7[_0x19d740] && _0x457af7[_0x19d740];
    }
    static ["set"](_0x1ffa71, _0x53564e, _0x122c33) {
      let _0x1d766f = JSON.parse(localStorage.getItem(this.prefix + _0x1ffa71));
      if (null === _0x1d766f) {
        _0x1d766f = {};
      }
      _0x1d766f[_0x53564e] = _0x122c33;
      localStorage.setItem(this.prefix + _0x1ffa71, JSON.stringify(_0x1d766f));
    }
    static ['reset']() {
      if (!this.get('extras', "resetted")) {
        for (const _0x1a99e1 in localStorage) if (_0x1a99e1.substring(0, 5) === this.oldPrefix) {
          localStorage.removeItem(_0x1a99e1);
        }
        this.set("extras", "resetted", true);
      }
    }
  }
  class _0x4660a8 {
    constructor(_0x217245) {
      this.event = _0x217245;
      this.maxFps = 30;
      this.lastFrameTime = 0;
      _0x1c478d.requestAnimationFrame(_0x18ec9c => {
        this.run(_0x18ec9c);
      });
    }
    ["run"](_0x211bd0) {
      _0x1c478d.requestAnimationFrame(_0x40f544 => {
        this.run(_0x40f544);
      });
      this.updateRafTime(_0x211bd0);
      this.event();
    }
    ["updateRafTime"](_0x126f0f) {
      const _0x14e32a = _0x126f0f - this.lastFrameTime;
      this.lastFrameTime = _0x126f0f;
      if (0.05 > Math.abs(33.333333333333336 - _0x14e32a)) {
        this.maxFps = 30;
      } else if (0.05 > Math.abs(16.666666666666668 - _0x14e32a)) {
        this.maxFps = 60;
      } else if (0.05 > Math.abs(13.333333333333334 - _0x14e32a)) {
        this.maxFps = 75;
      } else if (0.05 > Math.abs(10 - _0x14e32a)) {
        this.maxFps = 100;
      } else if (0.05 > Math.abs(8.333333333333334 - _0x14e32a)) {
        this.maxFps = 120;
      } else if (0.05 > Math.abs(6.944444444444445 - _0x14e32a)) {
        this.maxFps = 144;
      }
    }
    get ["rafLoopTime"]() {
      return 1000 / this.maxFps;
    }
  }
  class _0x59f59a {
    static ['init']() {
      this["default"] = 'EN';
      this.supported = ['EN', 'JA', 'ZH', 'KO', 'ES'];
    }
    static ["change"]() {
      const _0x1a12d8 = _0x14f7b2("[data]");
      for (let _0x3ec507 = 0; _0x3ec507 < _0x1a12d8.length; _0x3ec507++) {
        this.update(_0x14f7b2(_0x1a12d8[_0x3ec507]));
      }
    }
    static ["update"](_0x2c6634) {
      const _0x1681a8 = _0x2c6634.attr("data").split('.');
      let _0x1c9c6f = _0x1c478d["lang_" + this.selected] || _0x1c478d.lang_EN;
      const _0x56e7ab = _0x1681a8[0];
      const _0x4de997 = _0x1681a8[1];
      const _0x2624ac = _0x1681a8[2];
      if (!(_0x1c9c6f[_0x4de997] && _0x1c9c6f[_0x4de997][_0x2624ac])) {
        _0x1c9c6f = _0x1c478d["lang_" + this['default']];
      }
      if ("html" === _0x56e7ab) {
        _0x2c6634.html(_0x1c9c6f[_0x4de997][_0x2624ac]);
      } else if ("placeholder" === _0x56e7ab) {
        _0x2c6634.attr(_0x56e7ab, _0x1c9c6f[_0x4de997][_0x2624ac]);
      }
    }
    static get ["selected"]() {
      return _0x2cc0f3.language;
    }
    static get ["current"]() {
      return _0x1c478d["lang_" + this.selected];
    }
    static get ["browser"]() {
      const _0x103b11 = _0x1c478d.navigator.language.toUpperCase();
      const _0x62570a = _0x103b11.indexOf('-') ? _0x103b11.split('-')[0] : _0x103b11;
      return 0 <= this.supported.indexOf(_0x62570a) ? _0x62570a : this["default"];
    }
  }
  const _0xbb8dcf = {
    btn_settings: "Settings",
    btn_play: 'Play',
    btn_spectate: "Spectate",
    btn_inputs: "Inputs",
    "btn_theme": "Theme",
    input_tag1: "Tag",
    "input_tag2": "Tag 2",
    input_nick: "Nick",
    input_3rbSkin: "3rb.io Skin",
    input_skinUrl: "Skin URL (imgur)",
    "select_ffa": "FFA",
    select_party: "Party",
    select_teams: "Teams",
    select_experimental: "Experimental",
    input_token: "Party token",
    "btn_join": "Join",
    "btn_create": "Create"
  };
  const _0x86fef5 = {
    cantPlay2Tag: "You can't play in double tag mode.",
    "MXNetConn": "Connected to Networks.",
    MXNetDisconn: "Disconnected from networks.",
    invalidSkinUrl: "Invalid skin URL",
    login_lastSession: "Logged in from last session data.",
    "sdk_error": "SDK not loaded",
    alreadyLoggedIn: "Already logged in.",
    login_success: "Logged in",
    login_error: "Login error!",
    "logout": "Logged out",
    nickChangeInGame: "You can't change nick while in game.",
    targeting_on: "Click a cell to begin targeting it. See instructions in mouse settings menu.",
    targeting_off: "Targeting is turned off. Turn it on in settings menu in order to use it.",
    target_unnamed: "Cannot target unnamed cells.",
    MXSkin_noAcc: "Account does not exist."
  };
  const _0x170eeb = {
    title: "Multibox"
  };
  const _0x342cb5 = {
    enterChatMsg: "Enter chat message...",
    teamlist_title: "Team Players",
    "score": "Score",
    num1position: "#1 position",
    "paused": 'Paused',
    targeting_bigCellVp: "BIGGEST CELL VIEWPORT",
    targeting_followVp: "VIEWPORT FOLLOWING MOUSE",
    targeting_totalMass: "TOTAL MASS",
    targeting_players: "TARGETING PLAYERS"
  };
  const _0x30d9bc = {
    "language": "Language",
    CellAnimation: "Animation delay",
    zoomSpeed: "Zoom speed",
    cameraSpeed: "Camera speed [2 default]",
    eatAnimation: "Cell eat [sucking] animation",
    "autoZoom": "Auto zoom",
    cellTextAnimation: "Cell text animation",
    autoHideText: "Auto hide text",
    hideOwnNick: "Hide own nick",
    hideOwnMass: "Hide own mass",
    "cellNick": "Cell nick",
    cellMass: "Cell mass",
    nickShadow: "Nick shadow",
    "massShadow": "Mass shadow",
    "urlSkins": "URL skins",
    "arbSkins": "3rb.io skins",
    food: "Food",
    vanillaGrid: "Vanilla grid",
    "bgSectors": "Background sectors",
    "cursorLine": "Cursor lines",
    opponentRings: "Opponent rings",
    "splitRings": "Split rings",
    "virusRange": "Viruses range",
    teamIndicator: "Teammate indicator",
    commander: "Commander",
    "chatType": "Chat type",
    virusMass: "Virus mass",
    showMassInLB: "Show mass in leaderboard",
    cellLuminous: "Cell Luminous",
    multiboxShield: "Multibox Shield",
    grayscaleInactive: "Grayscale Inactive",
    antiAliasing: "Anti-aliasing",
    virusRing: "Virus Ring",
    foodGlow: "Food Glow",
    targeting: "Cell Targeting [Spectate mode]",
    "opt_on": 'On',
    "opt_off": 'Off',
    opt_stepped: "Stepped",
    "opt_linear": "Linear",
    opt_shortened: "Shortened",
    "opt_full": "Full",
    "opt_nick": 'Nick',
    "opt_mass": "Mass",
    "opt_both": "Nick + Mass",
    opt_perf: "Performance",
    "opt_normal": 'Normal',
    opt_urlSkin: "Url skins",
    opt_MXSkin: "3rb.io skins",
    opt_allSkin: "All skins",
    opt_singleClr: "Mono colored",
    opt_rainbow: 'Rainbow',
    opt_onlyLines: "Only lines",
    opt_snowflakes: "Snowflakes",
    opt_chatroom: "Chatroom",
    "opt_popup": "Pop up chat",
    opt_fill: "Fill",
    opt_text: "Text"
  };
  const _0xc530a1 = {
    "title": 'Hotkeys',
    toggleMenuKey: "Toggle main menu",
    feedKey: "Feed",
    macroFeedKey: "Macro feed",
    splitKey: "Split",
    doubleSplitKey: "Double split",
    "split16Key": "Split 64",
    "stopKey": "Stop cell movement",
    "chatKey": "Toggle chat",
    privateChatKey: "Toggle private chat",
    freeSpectateKey: "Toggle spectate mode",
    toggleSplitRings: "Toggle split rings",
    toggleOpponentRings: "Toggle opponent rings",
    "toggleNick": "Toggle cell nick",
    toggleMass: "Toggle cell mass",
    "toggleSkin": "Toggle skin",
    toggleCustomSkin: "Toggle Custom Skin",
    "toggleFood": "Toggle food",
    toggleMaouCircle: "Toggle Maou circle",
    respawnKey: "Quick respawn",
    multiboxTab: "Multibox switch",
    command0Key: "Command 0",
    command1Key: "Command 1",
    command2Key: "Command 2",
    command3Key: "Command 3",
    command4Key: "Command 4",
    command5Key: "Command 5",
    command6Key: "Command 6",
    command7Key: "Command 7",
    command8Key: "Command 8",
    command9Key: "Command 9",
    "zoom1key": "Zoom level 1",
    zoom2key: "Zoom level 2",
    zoom3key: "Zoom level 3",
    zoom4key: "Zoom level 4",
    "zoom5key": "Zoom level 5"
  };
  const _0x1e7379 = {
    "title": 'Mouse',
    feed: "Feed",
    "macroFeed": "Macro feed",
    "split": "Split",
    doubleSplit: "Double split",
    split16: "Split 64",
    commander: 'Commander',
    "off": "Off",
    lmb: "Left click",
    "rmb": "Right click",
    scroll: "Middle click",
    targeting_h1: "Targeting",
    targeting_txt1: "Lock target 1",
    targeting_txt2: "Lock target 2",
    targeting_txt3: "Middle click or Toggle spectate key",
    targeting_txt4: "Toggle top cell mode to follow mouse mode",
    targeting_txt5: "Toggle targeting mode to follow mouse mode",
    targeting_txt6: "Toggle follow mouse mode to top cell mode"
  };
  const _0x48fb44 = {
    "title": "Commands",
    "command0": "Fuck!",
    "command1": "Feed Me!",
    "command2": "Split into me!",
    "command3": "Need backup at %sector%!",
    "command4": "Enemy spotted at %sector%!",
    command5: "Need a teammate!",
    "command6": "Tank the virus!",
    "command7": "Eat the virus!",
    command8: "Let's bait!",
    "command9": "Fake tricksplit!"
  };
  const _0x38b74 = {
    selectedPreset: "Theme preset",
    cursor: "Cursor",
    "lbSize": "Leaderboard size",
    chatFontSize: "Chat font size",
    minimapSize: "Minimap size",
    "skinBorder": "Skin border",
    rainbowBorder: "Rainbow border",
    virusGlow: "Virus glow",
    virusGlowDistance: "Virus glow distance",
    virusGlowColor: "Virus glow color",
    foodGlow: "Food glow",
    maouCircle: "Maou circle",
    cellTransparency: "Cell transparency",
    lightenCellColor: "Lighten cell color",
    borderColor: "Border color",
    borderWidth: "Border width",
    gridColor: "Grid color",
    gridTextColor: "Grid text color",
    gridTextSize: "Grid text size",
    gridTextFont: "Grid text font",
    gridWidth: "Grid width",
    "nickColor": "Nick color",
    nickStrokeColor: "Nick stroke color",
    cellNickSize: "Nick size",
    "nickFont": "Nick font",
    "massColor": "Mass color",
    massStrokeColor: "Mass stroke color",
    cellMassSize: "Mass size",
    "massFont": "Mass font",
    "foodColor": "Food color",
    foodSize: "Food size",
    "virusColor": "Virus color",
    virusBorderColor: "Virus border color",
    virusBorderWidth: "virus border width",
    "virusDecor": "Virus Decoration",
    backgroundColor: "Background color",
    commanderColor: "Commander color",
    commanderImageUrl: "Commander image URL",
    indicatorSize: "Teammate indicator size",
    "team1color": "Team 1 color [Double Tag Mode]",
    "team2color": "Team 2 color [Double Tag Mode]",
    borderOpacity: "Border Opacity",
    borderGlowSize: "Border glow size",
    borderGlowStrength: "Border glow strength",
    borderGlowColor: "Border glow color",
    cursorLineColor: "Cursor Line Color",
    leaderboardTitleColor: "Leaderboard title color",
    customLeaderboardHead: "Custom Leaderboard Head",
    globalRotationSpeed: "Global Rotation Speed",
    maouCircleUrl: "Maou Circle Skin URL",
    multiboxShieldUrl: "Multibox Shield URL",
    virusGlowSize: "Virus glow size",
    virusGlowStrength: "Virus glow strength",
    virusRingWidth: "Virus Ring Width",
    virusRingColor: "Virus Ring Color",
    virusGearColor: "Virus Gear Color",
    foodGlowSize: "Food Glow Size",
    foodGlowStrength: "Food Glow Strength",
    foodGlowColor: "Food Glow Color",
    ghostColor: "Ghost cell color [minimap]",
    selfColor: "Self cell color [minimap]",
    selfViewportColor: "Self viewport color [minimap]",
    selfViewportAlpha: "Self viewport alpha",
    topViewportColor: "Top viewport color [minimap]",
    topViewportAlpha: "Top viewport alpha",
    teammateColor: "Teammate cells color [minimap]",
    teammateNameColor: "Teammate name color [minimap]",
    backgroundImage: "Background Image URL",
    on: 'On',
    "off": "Off"
  };
  const _0x3f5045 = {
    mainMenu: _0xbb8dcf,
    "notif": _0x86fef5,
    leaderboard: _0x170eeb,
    huds: _0x342cb5,
    settingMenu: _0x30d9bc,
    hkMenu: _0xc530a1,
    "mouseMenu": _0x1e7379,
    commandsMenu: _0x48fb44,
    "themeMenu": _0x38b74
  };
  _0x1c478d.lang_EN = _0x3f5045;
  class _0x2cc0f3 {
    static ["init"]() {
      this.isOpened = false;
      this.div = _0x14f7b2("#settings");
      this.language = _0x19d5af.get('settings', 'language') || _0x59f59a.browser;
      this.CellAnimation = ~~_0x19d5af.get("settings", "CellAnimation") || 140;
      this.eatAnimation = _0x19d5af.get("settings", "eatAnimation") || 'on';
      this.zoomSpeed = ~~_0x19d5af.get("settings", "zoomSpeed") || 92;
      this.cameraSpeed = ~~_0x19d5af.get("settings", "cameraSpeed") || 2;
      this.autoZoom = _0x19d5af.get("settings", "autoZoom") || "off";
      this.cellTextAnimation = _0x19d5af.get("settings", "cellTextAnimation") || 'on';
      this.autoHideText = _0x19d5af.get("settings", "autoHideText") || 'on';
      this.cellNick = _0x19d5af.get("settings", 'cellNick') || 'on';
      this.nickShadow = _0x19d5af.get("settings", "nickShadow") || "off";
      this.cellMass = _0x19d5af.get("settings", "cellMass") || "shortened";
      this.massShadow = _0x19d5af.get("settings", "massShadow") || 'off';
      this.hideOwnNick = _0x19d5af.get("settings", "hideOwnNick") || 'on';
      this.hideOwnMass = _0x19d5af.get("settings", "hideOwnMass") || "off";
      this.urlSkins = _0x19d5af.get("settings", "urlSkins") || 'on';
      this.arbSkins = _0x19d5af.get("settings", "arbSkins") || 'on';
      this.food = _0x19d5af.get("settings", 'food') || "monoColored";
      this.bgSectors = _0x19d5af.get("settings", "bgSectors") || 'normal';
      this.vanillaGrid = _0x19d5af.get("settings", "vanillaGrid") || "off";
      this.cursorLine = _0x19d5af.get("settings", 'cursorLine') || "off";
      this.teamIndicator = _0x19d5af.get('settings', "teamIndicator") || 'on';
      this.opponentRings = _0x19d5af.get("settings", "opponentRings") || 'off';
      this.splitRings = _0x19d5af.get('settings', "splitRings") || "off";
      this.virusRange = _0x19d5af.get("settings", 'virusRange') || 'off';
      this.multiboxRing = _0x19d5af.get('settings', "multiboxRing") || 'on';
      this.commander = _0x19d5af.get('settings', 'commander') || 'on';
      this.targeting = _0x19d5af.get("settings", "targeting") || "off";
      this.chatType = _0x19d5af.get("settings", "chatType") || 'popup';
      this.multiboxMode = _0x19d5af.get('settings', "multiboxMode") || 'on';
      this.virusMass = _0x19d5af.get("settings", "virusMass") || 'off';
      this.showMassInLB = _0x19d5af.get("settings", "showMassInLB") || 'off';
      this.cellLuminous = _0x19d5af.get("settings", "cellLuminous") || 'off';
      this.multiboxShield = _0x19d5af.get("settings", "multiboxShield") || 'off';
      this.grayscaleInactive = _0x19d5af.get("settings", "grayscaleInactive") || 'off';
      this.antiAliasing = _0x19d5af.get("settings", "antiAliasing") || 'on';
      this.virusRing = _0x19d5af.get("settings", "virusRing") || 'off';
      this.foodGlow = _0x19d5af.get("settings", "foodGlow") || 'off';
      this.setDomValues();
      this.addEvents();
    }
    static ["setDomValues"]() {
      _0x14f7b2(".settings-options").each(function () {
        const _0x19bdca = _0x14f7b2(this).attr("type");
        if ("range" === _0x19bdca) {
          _0x2cc0f3.handleRange(this, 2);
        } else if ("options" === _0x19bdca) {
          _0x2cc0f3.handleOptions(this, 2);
        }
      });
      this.toggleChatroom();
      this.changeLanguage();
    }
    static ["addEvents"]() {
      _0x14f7b2(".settings-container").perfectScrollbar();
      _0x14f7b2(".settings-container .fa-chevron-left").each(function () {
        _0x14f7b2(this).click(() => {
          const _0x2b7d99 = _0x14f7b2(this).parent();
          const _0x107fe3 = _0x14f7b2(_0x2b7d99).attr("type");
          if ('options' === _0x107fe3) {
            _0x2cc0f3.handleOptions(_0x2b7d99, 0);
          } else if ("range" === _0x107fe3) {
            _0x2cc0f3.handleRange(_0x2b7d99, 0);
          }
        });
      });
      _0x14f7b2(".settings-container span.outer").each(function () {
        _0x14f7b2(this).click(_0x4da8bf => {
          const _0x37646f = _0x14f7b2(this).parent();
          _0x2cc0f3.handleRange(_0x37646f, 3, _0x4da8bf.offsetX);
        });
      });
      _0x14f7b2(".settings-container .fa-chevron-right").each(function () {
        _0x14f7b2(this).click(() => {
          const _0x2926ad = _0x14f7b2(this).parent();
          const _0x79898a = _0x14f7b2(_0x2926ad).attr('type');
          if ('options' === _0x79898a) {
            _0x2cc0f3.handleOptions(_0x2926ad, 1);
          } else if ("range" === _0x79898a) {
            _0x2cc0f3.handleRange(_0x2926ad, 1);
          }
        });
      });
      _0x14f7b2(".settings-close").click(() => this.close());
    }
    static ["toggle"]() {
      if (this.isOpened) {
        this.close();
      } else {
        this.open();
      }
    }
    static ["close"]() {
      this.isOpened = false;
      this.div.fadeOut(250);
    }
    static ["open"]() {
      this.isOpened = true;
      this.div.fadeIn(250);
    }
    static ["handleOptions"](_0x2055b6, _0x54244c) {
      const _0x57cfde = _0x14f7b2(_0x2055b6).attr("name");
      const _0x488dc9 = _0x14f7b2(_0x2055b6).find('b');
      const _0x46f276 = _0x488dc9.length;
      let _0x4a5dfc = _0x46f276;
      let _0x312b17 = 0;
      for (; _0x4a5dfc--;) {
        let _0x93ac42 = _0x488dc9[_0x4a5dfc];
        if ("active" === _0x14f7b2(_0x93ac42).attr("class")) {
          _0x312b17 = _0x4a5dfc;
        }
      }
      if (1 === _0x54244c) {
        const _0x59251c = _0x312b17 + 1 < _0x46f276 ? _0x312b17 + 1 : 0;
        _0x14f7b2(_0x488dc9[_0x312b17]).removeAttr("class");
        _0x14f7b2(_0x488dc9[_0x59251c]).attr("class", "active");
        const _0x41b74f = _0x14f7b2(_0x488dc9[_0x59251c]).attr('value');
        this.saveSettings(_0x57cfde, _0x41b74f);
      } else {
        if (0 === _0x54244c) {
          const _0x44a974 = 0 < _0x312b17 ? _0x312b17 - 1 : _0x46f276 - 1;
          _0x14f7b2(_0x488dc9[_0x312b17]).removeAttr("class");
          _0x14f7b2(_0x488dc9[_0x44a974]).attr("class", "active");
          const _0x15281c = _0x14f7b2(_0x488dc9[_0x44a974]).attr("value");
          this.saveSettings(_0x57cfde, _0x15281c);
        } else {
          if (2 === _0x54244c) {
            _0x14f7b2(_0x488dc9[_0x312b17]).removeAttr("class");
            let _0x457c88;
            for (let _0x40ad78 = _0x46f276; _0x40ad78--;) {
              _0x457c88 = _0x488dc9[_0x40ad78];
              if (_0x14f7b2(_0x457c88).attr("value") === this[_0x57cfde]) {
                _0x14f7b2(_0x457c88).attr("class", 'active');
                break;
              }
            }
          }
        }
      }
    }
    static ["handleRange"](_0x5dd1f0, _0x236718, _0x1be4a9 = 0) {
      const _0x14cf3c = _0x14f7b2(_0x5dd1f0).attr("name");
      const _0xe3b0d2 = _0x14f7b2(_0x5dd1f0).find('span');
      const _0x12b89f = _0xe3b0d2[0];
      const _0x36ffde = _0xe3b0d2[1];
      const _0x3e7498 = _0x14f7b2(_0xe3b0d2[2]);
      const _0xf87a91 = ~~_0x14f7b2(_0x12b89f).attr("min");
      const _0x3112cc = ~~_0x14f7b2(_0x12b89f).attr("max");
      const _0x4fc442 = ~~_0x14f7b2(_0x12b89f).attr('step');
      const _0x310db3 = ~~_0x14f7b2(_0x12b89f).attr("value");
      if (1 === _0x236718 && _0x310db3 + _0x4fc442 <= _0x3112cc) {
        const _0x34058a = _0x4fc442 + _0x310db3;
        _0x14f7b2(_0x12b89f).attr('value', _0x34058a);
        _0x14f7b2(_0x36ffde).css("width", ~~(100 * (_0x34058a - _0xf87a91) / (_0x3112cc - _0xf87a91)) + 'px');
        _0x3e7498.text('[' + _0x34058a + ']');
        this.saveSettings(_0x14cf3c, ~~_0x34058a);
      } else {
        if (0 === _0x236718 && _0x310db3 - _0x4fc442 >= _0xf87a91) {
          const _0x510077 = _0x310db3 - _0x4fc442;
          _0x14f7b2(_0x12b89f).attr("value", _0x510077);
          _0x14f7b2(_0x36ffde).css('width', ~~(100 * (_0x510077 - _0xf87a91) / (_0x3112cc - _0xf87a91)) + 'px');
          _0x3e7498.text('[' + _0x510077 + ']');
          this.saveSettings(_0x14cf3c, ~~_0x510077);
        } else {
          if (2 === _0x236718) {
            const _0x306acf = this[_0x14cf3c];
            _0x14f7b2(_0x12b89f).attr("value", _0x306acf);
            _0x14f7b2(_0x36ffde).css("width", ~~(100 * (_0x306acf - _0xf87a91) / (_0x3112cc - _0xf87a91)) + 'px');
            _0x3e7498.text('[' + _0x306acf + ']');
          } else {
            if (3 === _0x236718) {
              let _0x3c81f8 = 0 | _0x1be4a9 / 100 * (_0x3112cc - _0xf87a91);
              _0x3c81f8 = (0 | _0x3c81f8 / _0x4fc442) * _0x4fc442;
              const _0x14c231 = 100 * ((_0x3c81f8 += _0xf87a91) - _0xf87a91) / (_0x3112cc - _0xf87a91);
              _0x14f7b2(_0x12b89f).attr("value", _0x3c81f8);
              _0x14f7b2(_0x36ffde).css('width', ~~_0x14c231 + 'px');
              _0x3e7498.text('[' + _0x3c81f8 + ']');
              this.saveSettings(_0x14cf3c, ~~_0x3c81f8);
            }
          }
        }
      }
    }
    static ["saveSettings"](_0x2dee0e, _0x1ffdc3) {
      this[_0x2dee0e] = _0x1ffdc3;
      if ("multiboxMode" === _0x2dee0e) {
        _0x40f48a.alert("Multibox", "Please rejoin the server!");
      }
      if ("chatType" === _0x2dee0e) {
        this.toggleChatroom();
      }
      if ("language" === _0x2dee0e) {
        this.changeLanguage();
      }
      if ("nickShadow" === _0x2dee0e) {
        _0x34f3bb.nickCaches.clear();
      }
      if ("massShadow" === _0x2dee0e) {
        _0x34f3bb.massCaches.clear();
      }
      _0x19d5af.set("settings", _0x2dee0e, _0x1ffdc3);
      if ("custom" !== _0x480be4.selectedPreset) {
        _0x480be4.selectedPreset = 'custom';
        _0x19d5af.set("theme", "selectedPreset", 'custom');
        _0x480be4.setDomValues();
      }
    }
    static ["changeLanguage"]() {
      _0x59f59a.change();
      _0x10ab3c.refresh();
    }
    static ["toggleChatroom"]() {
      if ("chatroom" === this.chatType) {
        _0x14f7b2("#chatroom").show();
      } else {
        _0x14f7b2("#chatroom").hide();
      }
    }
  }
  class _0x49cc31 {
    static ["init"]() {
      this.isOpened = false;
      this.target = "hotkeys";
      this.div = _0x14f7b2("#inputs");
      this.addEvents();
      _0x22a8df.init();
      _0x56ef98.init();
      _0x128142.init();
      _0x10ab3c.init();
    }
    static ['toggle']() {
      if (this.isOpened) {
        this.close();
      } else {
        this.open();
      }
    }
    static ["close"]() {
      this.isOpened = false;
      this.div.fadeOut(250);
    }
    static ['open']() {
      this.isOpened = true;
      this.div.fadeIn(250);
    }
    static ["addEvents"]() {
      _0x14f7b2(".inputs-tab").each(function () {
        _0x14f7b2(this).click(() => {
          const _0x2ae3a8 = _0x14f7b2(this).attr('target');
          if ("#hotkeys" === _0x2ae3a8) {
            _0x14f7b2("#hotkeys").addClass('active');
            _0x14f7b2("#commands").removeClass("active");
            _0x14f7b2("#mouse").removeClass('active');
            _0x14f7b2(".inputs-tab[target=\"#hotkeys\"]").addClass("active");
            _0x14f7b2(".inputs-tab[target=\"#mouse\"]").removeClass("active");
            _0x14f7b2(".inputs-tab[target=\"#commands\"]").removeClass("active");
            _0x49cc31.target = "hotkeys";
          } else if ("#mouse" === _0x2ae3a8) {
            _0x14f7b2("#mouse").addClass("active");
            _0x14f7b2("#hotkeys").removeClass("active");
            _0x14f7b2("#commands").removeClass("active");
            _0x14f7b2(".inputs-tab[target=\"#hotkeys\"]").removeClass('active');
            _0x14f7b2(".inputs-tab[target=\"#commands\"]").removeClass("active");
            _0x14f7b2(".inputs-tab[target=\"#mouse\"]").addClass("active");
            _0x49cc31.target = "mouse";
          } else if ("#commands" === _0x2ae3a8) {
            _0x14f7b2('#commands').addClass("active");
            _0x14f7b2('#hotkeys').removeClass("active");
            _0x14f7b2("#mouse").removeClass("active");
            _0x14f7b2(".inputs-tab[target=\"#commands\"]").addClass("active");
            _0x14f7b2(".inputs-tab[target=\"#hotkeys\"]").removeClass("active");
            _0x14f7b2(".inputs-tab[target=\"#mouse\"]").removeClass('active');
            _0x49cc31.target = 'commands';
          }
        });
      });
      _0x14f7b2(".inputs-tab.close").click(() => {
        this.close();
      });
    }
  }
  class _0x50f0c6 {
    static ["init"]() {
      this.selected = ~~_0x19d5af.get("profiles", "selected") || 1;
      this.wheelIsOpened = false;
      this.tag = _0x19d5af.get("profiles", 'tag') || '';
      this.arbSkin = _0x19d5af.get("profiles", "arbSkin") || '';
      this.setDomValues();
      this.addEvents();
    }
    static ["setDomValues"]() {
      let _0x518ea9 = _0x19d5af.get('profiles', "profile" + this.selected);
      const _0xededcf = {
        "nick": "profile " + this.selected,
        skin: "https://i.imgur.com/nRqSis7.png",
        "arbSkin": '',
        "nick2": '',
        "skin2": ''
      };
      if (!_0x518ea9) {
        _0x518ea9 = _0xededcf;
      }
      _0x19d5af.set('profiles', "profile" + this.selected, _0x518ea9);
      _0x14f7b2("#nick").val(_0x518ea9.nick);
      _0x14f7b2("#nick2").val(_0x518ea9.nick2 || '');
      _0x14f7b2("#skin").val(_0x518ea9.skin);
      _0x14f7b2("#skin2").val(_0x518ea9.skin2 || '');
      _0x14f7b2("#tag").val(this.tag);
      _0x14f7b2("#arbSkin").val(_0x518ea9.arbSkin);
      this.updateMainSkin();
      for (let _0x365a86 = 8; 0 < _0x365a86;) {
        this.updatePreviewSkin(_0x365a86);
        _0x365a86--;
      }
    }
    static ["addEvents"]() {
      _0x14f7b2(".bar-circle-outer").click(() => {
        if (this.wheelIsOpened) {
          _0x14f7b2(".skin-wheel").fadeOut(250);
          return this.wheelIsOpened = false;
        }
        _0x14f7b2(".skin-wheel").fadeIn(250);
        this.wheelIsOpened = true;
      });
      _0x14f7b2(".skin-selector").each(function () {
        _0x14f7b2(this).click(() => {
          const _0x34b0bf = ~~_0x14f7b2(this).attr('value');
          _0x50f0c6["switch"](_0x34b0bf);
          _0x14f7b2(".skin-wheel").fadeOut(250);
        });
      });
      _0x14f7b2(".menu-blur").click(() => {
        if (this.wheelIsOpened) {
          _0x14f7b2(".skin-wheel").fadeOut(250);
          this.wheelIsOpened = false;
        }
      });
      _0x14f7b2("#tag").blur(() => {
        this.setTag(_0x14f7b2("#tag").val());
        _0x2d5cce.spectator(true);
      });
      _0x14f7b2("#tag2").blur(() => {
        this.setTag(_0x14f7b2('#tag').val());
        _0x2d5cce.spectator(true);
      });
      _0x14f7b2("#nick").blur(() => {
        this.setNick(_0x14f7b2("#nick").val());
      });
      _0x14f7b2('#arbSkin').blur(() => {
        this.setarbSkin();
      });
      _0x14f7b2("#skin").blur(() => {
        let _0x145a78 = _0x14f7b2('#skin').val();
        if (!_0x386cbc.code2Url(_0x386cbc.getImgurCode(_0x145a78 || '')).includes('XXXXXXX')) {
          return this.setSkin(_0x145a78);
        }
        this.setarbSkin();
      });
      _0x14f7b2("#nick2").blur(() => {
        let _0xprofile2 = _0x19d5af.get('profiles', "profile" + this.selected);
        if (!_0xprofile2) _0xprofile2 = {};
        _0xprofile2.nick2 = _0x14f7b2("#nick2").val();
        _0x19d5af.set('profiles', "profile" + this.selected, _0xprofile2);
        _0x90a1a7.nick2 = _0xprofile2.nick2 || '';
      });
      _0x14f7b2("#skin2").blur(() => {
        let _0xprofile2 = _0x19d5af.get('profiles', "profile" + this.selected);
        if (!_0xprofile2) _0xprofile2 = {};
        _0xprofile2.skin2 = _0x14f7b2("#skin2").val();
        _0x19d5af.set('profiles', "profile" + this.selected, _0xprofile2);
        _0x90a1a7.skin2 = _0x14f7b2("#skin2").val();
      });
    }
    static ["switch"](_0x5517bb) {
      this.selected = ~~_0x5517bb;
      _0x19d5af.set("profiles", "selected", _0x5517bb);
      let _0x4d475c = _0x19d5af.get("profiles", "profile" + _0x5517bb);
      const _0x319c35 = {
        nick: "profile " + this.selected,
        skin: "https://i.imgur.com/nRqSis7.png",
        arbSkin: '',
        nick2: '',
        skin2: ''
      };
      if (!_0x4d475c) {
        _0x4d475c = _0x319c35;
      }
      _0x14f7b2("#nick").val(_0x4d475c.nick);
      _0x14f7b2("#nick2").val(_0x4d475c.nick2 || '');
      _0x14f7b2('#skin').val(_0x4d475c.skin);
      _0x14f7b2("#skin2").val(_0x4d475c.skin2 || '');
      _0x14f7b2("#arbSkin").val(_0x4d475c.arbSkin);
      _0x90a1a7.nick = '' === _0x4d475c.nick ? "Unnamed Cell" : _0x4d475c.nick;
      _0x90a1a7.nick2 = _0x4d475c.nick2 || '';
      _0x90a1a7.skin = _0x4d475c.skin;
      _0x90a1a7.skin2 = _0x4d475c.skin2 || '';
      _0x19d5af.set('profiles', "profile" + this.selected, _0x4d475c);
      this.updateMainSkin();
    }
    static ["setNick"](_0x27d7eb) {
      if (_0x90a1a7.isAlive) {
        _0x14f7b2("#nick").val(_0x90a1a7.nick);
        _0x40f48a.alert('Multibox', _0x59f59a.current.notif.nickChangeInGame);
      }
      let _0x235246 = _0x19d5af.get("profiles", "profile" + this.selected);
      const _0x1170bc = {
        "nick": "profile " + this.selected,
        "skin": "https://i.imgur.com/nRqSis7.png",
        "arbSkin": '',
        "nick2": '',
        "skin2": ''
      };
      if (!_0x235246) {
        _0x235246 = _0x1170bc;
      }
      _0x235246.nick = _0x27d7eb;
      _0x19d5af.set("profiles", "profile" + this.selected, _0x235246);
      _0x90a1a7.nick = '' === _0x27d7eb ? "Unnamed Cell" : _0x27d7eb;
    }
    static ["setarbSkin"]() {
      var _0x431fed = _0x14f7b2("#arbSkin").val();
      _0x90a1a7.arbSkin = _0x431fed;
      let _0x4b4ffa = _0x14f7b2("#skin").val();
      if (_0x386cbc.code2Url(_0x386cbc.getImgurCode(_0x4b4ffa || '')).includes("XXXXXXX")) {
        const _0xprev = _0x19d5af.get('profiles', "profile" + this.selected) || {};
        const _0x5d3148 = {
          "nick": "profile " + this.selected,
          "skin": '',
          "arbSkin": _0x431fed,
          skin: _0x386cbc.code2Url(_0x386cbc.getImgurCode(_0x4b4ffa)),
          "arbSkin": _0x431fed,
          nick2: _0xprev.nick2 || '',
          skin2: _0xprev.skin2 || ''
        };
        _0x90a1a7.skin = _0x386cbc.code2Url(_0x386cbc.getImgurCode(_0x4b4ffa));
        _0x19d5af.set('profiles', "profile" + this.selected, _0x5d3148);
        this.updateMainSkin("https://patient-leaf-2f1a.maamargasouma.workers.dev/res/skins/free/" + _0x431fed.replace(/free\/|.png/g, '') + ".png");
        this.updatePreviewSkin(this.selected);
      }
    }
    static ["setSkin"](_0x10e480) {
      let _0x2716a1 = _0x19d5af.get('profiles', "profile" + this.selected);
      const _0x1197ad = {
        "nick": "profile " + this.selected,
        skin: "https://i.imgur.com/nRqSis7.png",
        "arbSkin": '',
        "nick2": '',
        "skin2": ''
      };
      if (!_0x2716a1) {
        _0x2716a1 = _0x1197ad;
      }
      _0x2716a1.skin = _0x386cbc.code2Url(_0x386cbc.getImgurCode(_0x10e480));
      _0x19d5af.set("profiles", 'profile' + this.selected, _0x2716a1);
      this.updateMainSkin();
      this.updatePreviewSkin(this.selected);
      _0x90a1a7.skin = _0x10e480;
    }
    static ['setTag'](_0x57c637) {
      _0x90a1a7.tag = _0x57c637;
      _0x19d5af.set('profiles', "tag", _0x57c637);
    }
    static ["updateMainSkin"](_0x55f338) {
      const _0x1f6a96 = _0x14f7b2('#skin').val();
      _0x55f338 = _0x55f338 || _0x14f7b2('#arbSkin').val();
      const _0x2517b0 = !_0x386cbc.code2Url(_0x386cbc.getImgurCode(_0x1f6a96 || '')).includes("XXXXXXX") ? _0x1f6a96 : "https://patient-leaf-2f1a.maamargasouma.workers.dev/res/skins/free/" + _0x55f338.replace(/free\/|.png/g, '') + ".png";
      _0x14f7b2(".skin-preview").css('background', "url(" + _0x2517b0 + ')');
    }
    static ["updatePreviewSkin"](_0x4207bd) {
      let _0x5cc1ac = _0x19d5af.get("profiles", "profile" + _0x4207bd);
      if (_0x5cc1ac) {
        const _0x3d8c60 = !_0x386cbc.code2Url(_0x386cbc.getImgurCode(_0x5cc1ac.skin || '')).includes("XXXXXXX") ? _0x5cc1ac.skin : _0x5cc1ac.arbSkin && "https://patient-leaf-2f1a.maamargasouma.workers.dev/res/skins/free/" + _0x5cc1ac.arbSkin.replace(/free\/|.png/g, '') + "png";
        _0x14f7b2(".skin-selector[value=" + _0x4207bd + ']').css("background", "url(" + _0x3d8c60 + ')');
      }
    }
  }
  class _0x56ef98 {
    static ["init"]() {
      this.toggleMenuKey = _0x19d5af.get('hotkeys', "toggleMenuKey") || "ESC";
      this.feedKey = _0x19d5af.get('hotkeys', "feedKey") || 'W';
      this.macroFeedKey = _0x19d5af.get("hotkeys", "macroFeedKey") || 'E';
      this.splitKey = _0x19d5af.get("hotkeys", "splitKey") || 'SPACE';
      this.doubleSplitKey = _0x19d5af.get("hotkeys", "doubleSplitKey") || 'R';
      this.split16Key = _0x19d5af.get("hotkeys", "split16Key") || 'G';
      this.stopKey = _0x19d5af.get("hotkeys", "stopKey") || 'S';
      this.chatKey = _0x19d5af.get("hotkeys", "chatKey") || 'ENTER';
      this.privateChatKey = _0x19d5af.get("hotkeys", "privateChatKey") || "ALT+0";
      this.freeSpectateKey = _0x19d5af.get("hotkeys", "freeSpectateKey") || 'Q';
      this.toggleSplitRings = _0x19d5af.get("hotkeys", "toggleSplitRings") || 'U';
      this.toggleOpponentRings = _0x19d5af.get("hotkeys", "toggleOpponentRings") || 'I';
      this.toggleNick = _0x19d5af.get("hotkeys", 'toggleNick') || 'N';
      this.toggleMass = _0x19d5af.get("hotkeys", "toggleMass") || 'M';
      this.toggleBGsectors = _0x19d5af.get("hotkeys", "toggleBGsectors") || 'B';
      this.toggleFood = _0x19d5af.get("hotkeys", "toggleFood") || 'F';
      this.toggleSkin = _0x19d5af.get("hotkeys", "toggleSkin") || 'A';
      this.toggleCustomSkin = _0x19d5af.get("hotkeys", "toggleCustomSkin") || 'X';
      this.respawnKey = _0x19d5af.get("hotkeys", "respawnKey") || "TILDE";
      this.multiboxTab = _0x19d5af.get('hotkeys', "multiboxTab") || "TAB";
      this.togglemultiboxRing = _0x19d5af.get("hotkeys", "togglemultiboxRing") || 'L';
      this.toggleMaouCircle = _0x19d5af.get("hotkeys", "toggleMaouCircle") || 'K';
      this.command0Key = _0x19d5af.get("hotkeys", "command0Key") || '0';
      this.command1Key = _0x19d5af.get("hotkeys", "command1Key") || '1';
      this.command2Key = _0x19d5af.get("hotkeys", "command2Key") || '2';
      this.command3Key = _0x19d5af.get("hotkeys", "command3Key") || '3';
      this.command4Key = _0x19d5af.get('hotkeys', "command4Key") || '4';
      this.command5Key = _0x19d5af.get("hotkeys", "command5Key") || '5';
      this.command6Key = _0x19d5af.get("hotkeys", "command6Key") || '6';
      this.command7Key = _0x19d5af.get("hotkeys", "command7Key") || '7';
      this.command8Key = _0x19d5af.get("hotkeys", "command8Key") || '8';
      this.command9Key = _0x19d5af.get("hotkeys", "command9Key") || '9';
      this.zoom1key = _0x19d5af.get("hotkeys", "zoom1key") || "ALT+1";
      this.zoom2key = _0x19d5af.get("hotkeys", "zoom2key") || "ALT+2";
      this.zoom3key = _0x19d5af.get('hotkeys', 'zoom3key') || "ALT+3";
      this.zoom4key = _0x19d5af.get("hotkeys", "zoom4key") || "ALT+4";
      this.zoom5key = _0x19d5af.get("hotkeys", "zoom5key") || "ALT+5";
      this.pressedKeys = new Map();
      this.setDomKeys();
      this.addEvents();
    }
    static ["setDomKeys"]() {
      _0x14f7b2("#hotkeys .row").each(function () {
        const _0x372497 = _0x14f7b2(this).attr("name");
        const _0x58b8b6 = _0x14f7b2(this).find(".key")[0];
        _0x14f7b2(_0x58b8b6).val(_0x56ef98[_0x372497]);
      });
    }
    static ["addEvents"]() {
      _0x14f7b2('#hotkeys').perfectScrollbar();
      _0x14f7b2("#hotkeys .row .key").each(function () {
        _0x14f7b2(this).keydown(_0x37578f => {
          _0x37578f.preventDefault();
          const _0x39eacf = _0x14f7b2(this).parent();
          _0x56ef98.setKey(_0x39eacf, _0x37578f, this);
        });
      });
      _0x24f9ab.addEventListener("keydown", _0x23acd0 => this.onKeyDown(_0x23acd0));
      _0x24f9ab.addEventListener("keyup", _0x35e25b => this.onKeyUp(_0x35e25b));
    }
    static ["onKeyDown"](_0x4f6eb0) {
      if (9 === _0x4f6eb0.keyCode) {
        _0x4f6eb0.preventDefault();
      }
      const _0x226f1c = this.getKey(_0x4f6eb0);
      if (_0x226f1c && !this.pressedKeys.has(_0x226f1c) && (this.pressedKeys.set(_0x226f1c, true), !_0x49cc31.isOpened || "hotkeys" !== _0x49cc31.target)) {
        if (_0x226f1c === this.chatKey) {
          return void _0x22a8df.chat(1);
        }
        if (_0x226f1c === this.privateChatKey) {
          return void _0x22a8df.chat(2);
        }
        if (!_0x59ca82.isFocused) {
          if (_0x226f1c === this.toggleMenuKey) {
            return void _0x31c9b4.toggle();
          }
          if (!_0x31c9b4.isOpened) {
            _0x4f6eb0.preventDefault();
            return _0x226f1c !== this.freeSpectateKey || _0x90a1a7.isAlive ? _0x226f1c === this.respawnKey ? void _0x22a8df.respawn() : _0x226f1c === this.macroFeedKey ? void _0x22a8df.macroFeed(true) : _0x226f1c === this.feedKey ? void _0x22a8df.feed() : _0x226f1c === this.splitKey ? void _0x22a8df.split() : _0x226f1c === this.doubleSplitKey ? void _0x22a8df.doubleSplit() : _0x226f1c === this.split16Key ? void _0x22a8df.split16() : _0x226f1c === this.multiboxTab ? void _0x22a8df.multiboxTab() : _0x226f1c === this.stopKey ? void _0x22a8df.stopMovementToggle() : _0x226f1c === this.toggleSplitRings ? void _0x22a8df.toggleSplitRings() : _0x226f1c === this.toggleOpponentRings ? void _0x22a8df.toggleOpponentRings() : _0x226f1c === this.toggleNick ? void _0x22a8df.toggleCellNick() : _0x226f1c === this.toggleMass ? void _0x22a8df.toggleCellMass() : _0x226f1c === this.toggleBGsectors ? void _0x22a8df.toggleBGsectors() : _0x226f1c === this.toggleFood ? void _0x22a8df.toggleGameFood() : _0x226f1c === this.toggleSkin ? void _0x22a8df.toggleSkin() : _0x226f1c === this.toggleCustomSkin ? void _0x22a8df.toggleCustomSkin() : _0x226f1c === this.togglemultiboxRing ? void _0x22a8df.togglemultiboxRing() : _0x226f1c === this.toggleMaouCircle ? void _0x22a8df.toggleMaouCircle() : _0x226f1c === this.command0Key ? void _0x22a8df.command(0) : _0x226f1c === this.command1Key ? void _0x22a8df.command(1) : _0x226f1c === this.command2Key ? void _0x22a8df.command(2) : _0x226f1c === this.command3Key ? void _0x22a8df.command(3) : _0x226f1c === this.command4Key ? void _0x22a8df.command(4) : _0x226f1c === this.command5Key ? void _0x22a8df.command(5) : _0x226f1c === this.command6Key ? void _0x22a8df.command(6) : _0x226f1c === this.command7Key ? void _0x22a8df.command(7) : _0x226f1c === this.command8Key ? void _0x22a8df.command(8) : _0x226f1c === this.command9Key ? void _0x22a8df.command(9) : _0x226f1c === this.zoom1key ? void _0x22a8df.setZoom(0.5) : _0x226f1c === this.zoom2key ? void _0x22a8df.setZoom(0.25) : _0x226f1c === this.zoom3key ? void _0x22a8df.setZoom(0.125) : _0x226f1c === this.zoom4key ? void _0x22a8df.setZoom(0.075) : _0x226f1c === this.zoom5key ? void _0x22a8df.setZoom(0.05) : undefined : void _0x22a8df.toggleSpectate();
          }
        }
      }
    }
    static ['onKeyUp'](_0x391fb9) {
      const _0x4164bc = this.getKey(_0x391fb9);
      if (_0x4164bc && (this.pressedKeys["delete"](_0x4164bc), _0x4164bc === this.macroFeedKey)) {
        _0x22a8df.macroFeed(false);
      }
    }
    static ["setKey"](_0x3848df, _0x10f53a, _0x327dad) {
      let _0x16b872 = this.getKey(_0x10f53a);
      let _0x5537db = _0x14f7b2(_0x3848df).attr("name");
      if (false !== _0x16b872) {
        if ("freeSpectateKey" !== _0x5537db) {
          this.alreadyBinded(_0x16b872);
        }
        if ("DEL" === _0x16b872) {
          _0x16b872 = '';
        }
        _0x14f7b2(_0x327dad).val(_0x16b872);
        this[_0x5537db] = _0x16b872;
        _0x19d5af.set("hotkeys", _0x5537db, _0x16b872);
      }
    }
    static ["alreadyBinded"](_0x353177) {
      let _0x5b9fc6 = false;
      if (_0x353177 === this.toggleMenuKey) {
        _0x5b9fc6 = "toggleMenuKey";
      } else if (_0x353177 === this.feedKey) {
        _0x5b9fc6 = 'feedKey';
      } else if (_0x353177 === this.macroFeedKey) {
        _0x5b9fc6 = "macroFeedKey";
      } else if (_0x353177 === this.splitKey) {
        _0x5b9fc6 = "splitKey";
      } else if (_0x353177 === this.doubleSplitKey) {
        _0x5b9fc6 = "doubleSplitKey";
      } else if (_0x353177 === this.split16Key) {
        _0x5b9fc6 = "split16Key";
      } else if (_0x353177 === this.stopKey) {
        _0x5b9fc6 = "stopKey";
      } else if (_0x353177 === this.chatKey) {
        _0x5b9fc6 = "chatKey";
      } else if (_0x353177 === this.privateChatKey) {
        _0x5b9fc6 = "privateChatKey";
      } else if (_0x353177 === this.toggleSplitRings) {
        _0x5b9fc6 = "toggleSplitRings";
      } else if (_0x353177 === this.toggleOpponentRings) {
        _0x5b9fc6 = "toggleOpponentRings";
      } else if (_0x353177 === this.toggleNick) {
        _0x5b9fc6 = "toggleNick";
      } else if (_0x353177 === this.toggleMass) {
        _0x5b9fc6 = "toggleMass";
      } else if (_0x353177 === this.toggleBGsectors) {
        _0x5b9fc6 = "toggleBGsectors";
      } else if (_0x353177 === this.toggleFood) {
        _0x5b9fc6 = "toggleFood";
      } else if (_0x353177 === this.toggleSkin) {
        _0x5b9fc6 = "toggleSkin";
      } else if (_0x353177 === this.toggleCustomSkin) {
        _0x5b9fc6 = "toggleCustomSkin";
      } else if (_0x353177 === this.togglemultiboxRing) {
        _0x5b9fc6 = "togglemultiboxRing";
      } else if (_0x353177 === this.toggleMaouCircle) {
        _0x5b9fc6 = "toggleMaouCircle";
      } else if (_0x353177 === this.respawnKey) {
        _0x5b9fc6 = 'respawnKey';
      } else if (_0x353177 === this.command0Key) {
        _0x5b9fc6 = "command0Key";
      } else if (_0x353177 === this.command1Key) {
        _0x5b9fc6 = "command1Key";
      } else if (_0x353177 === this.command2Key) {
        _0x5b9fc6 = "command2Key";
      } else if (_0x353177 === this.command3Key) {
        _0x5b9fc6 = "command3Key";
      } else if (_0x353177 === this.command4Key) {
        _0x5b9fc6 = "command4Key";
      } else if (_0x353177 === this.command5Key) {
        _0x5b9fc6 = "command5Key";
      } else if (_0x353177 === this.command6Key) {
        _0x5b9fc6 = "command6Key";
      } else if (_0x353177 === this.command7Key) {
        _0x5b9fc6 = "command7Key";
      } else if (_0x353177 === this.command8Key) {
        _0x5b9fc6 = "command8Key";
      } else if (_0x353177 === this.command9Key) {
        _0x5b9fc6 = "command9Key";
      } else if (_0x353177 === this.zoom1key) {
        _0x5b9fc6 = "zoom1key";
      } else if (_0x353177 === this.zoom2key) {
        _0x5b9fc6 = "zoom2key";
      } else if (_0x353177 === this.zoom3key) {
        _0x5b9fc6 = "zoom3key";
      } else if (_0x353177 === this.zoom4key) {
        _0x5b9fc6 = "zoom4key";
      } else if (_0x353177 === this.zoom5key) {
        _0x5b9fc6 = "zoom5key";
      }
      if (_0x5b9fc6) {
        this[_0x5b9fc6] = '';
        _0x19d5af.set("hotkeys", _0x5b9fc6, '');
        _0x14f7b2("#hotkeys .row[name=" + _0x5b9fc6 + "] input").val('');
      }
    }
    static ["isValidKey"](_0xa8ed8a) {
      const _0x1bc256 = _0xa8ed8a.keyCode || _0xa8ed8a.which;
      return 64 < _0x1bc256 && 91 > _0x1bc256 || 47 < _0x1bc256 && 58 > _0x1bc256 || 13 === _0x1bc256 || 27 === _0x1bc256 || 32 === _0x1bc256 || 16 === _0x1bc256 || 46 === _0x1bc256 || 192 === _0x1bc256 || 9 === _0x1bc256;
    }
    static ["getKey"](_0x1747b6) {
      if (!this.isValidKey(_0x1747b6)) {
        return false;
      }
      const _0x1d3089 = _0x1747b6.keyCode || _0x1747b6.which;
      let _0x15ee1c = false;
      let _0x4b3a43 = false;
      if (_0x1747b6.ctrlKey) {
        _0x15ee1c = "CTRL+";
      } else if (_0x1747b6.altKey) {
        _0x15ee1c = 'ALT+';
      }
      if (64 < _0x1d3089 && 91 > _0x1d3089) {
        _0x4b3a43 = String.fromCharCode(_0x1d3089);
      } else if (47 < _0x1d3089 && 58 > _0x1d3089) {
        _0x4b3a43 = '' + (_0x1d3089 - 48);
      } else if (!_0x15ee1c) {
        if (13 === _0x1d3089) {
          _0x4b3a43 = "ENTER";
        } else if (27 === _0x1d3089) {
          _0x4b3a43 = "ESC";
        } else if (32 === _0x1d3089) {
          _0x4b3a43 = "SPACE";
        } else if (16 === _0x1d3089) {
          _0x4b3a43 = "SHIFT";
        } else if (9 === _0x1d3089) {
          _0x4b3a43 = "TAB";
        } else if (46 === _0x1d3089) {
          _0x4b3a43 = "DEL";
        } else if (192 === _0x1d3089) {
          _0x4b3a43 = "TILDE";
        }
      }
      return !!_0x4b3a43 && (_0x15ee1c ? _0x15ee1c + _0x4b3a43 : _0x4b3a43);
    }
  }
  class _0x128142 {
    static ['init']() {
      this.leftClick = _0x19d5af.get("mouse", "leftClick") || 'off';
      this.middleClick = _0x19d5af.get("mouse", "middleClick") || "commander";
      this.rightClick = _0x19d5af.get('mouse', 'rightClick') || "off";
      this.x = 0;
      this.y = 0;
      this.canvas = _0x24f9ab.getElementById("canvas");
      this.canvasX = 0;
      this.canvasY = 0;
      this.setDomValues();
      this.addEvents();
    }
    static ["send"]() {
      const _0x37635b = {
        x: 0x0,
        y: 0x0
      };
      const _0x2295c7 = 2 === _0x90a1a7.typeID ? _0x996564.position : _0x37635b;
      this.canvasX = (this.x - this.canvas.width / 2) / _0xddb6d6.viewport + _0xddb6d6.x + _0x2295c7.x;
      this.canvasY = (this.y - this.canvas.height / 2) / _0xddb6d6.viewport + _0xddb6d6.y + _0x2295c7.y;
      return _0xddb6d6.isSpectating && _0x3a83be.isTurnedOn ? void _0x302a2c.mouse(0 | _0x3a83be.center.x, 0 | _0x3a83be.center.y) : _0x90a1a7.movementPaused ? void _0x302a2c.mouse(0 | _0x90a1a7.x, 0 | _0x90a1a7.y) : void _0x302a2c.mouse(0 | this.canvasX, 0 | this.canvasY);
    }
    static ["setDomValues"]() {
      _0x14f7b2(".mouse-options").each(function () {
        const _0x2a9f88 = _0x14f7b2(this).attr("type");
        if ("range" === _0x2a9f88) {
          _0x128142.handleRange(this, 2);
        } else if ("options" === _0x2a9f88) {
          _0x128142.handleOptions(this, 2);
        }
      });
    }
    static ["addEvents"]() {
      _0x14f7b2("#mouse").perfectScrollbar();
      _0x14f7b2("#mouse .fa-chevron-left").each(function () {
        _0x14f7b2(this).click(() => {
          const _0x2a7485 = _0x14f7b2(this).parent();
          const _0x5ac730 = _0x14f7b2(_0x2a7485).attr("type");
          if ("options" === _0x5ac730) {
            _0x128142.handleOptions(_0x2a7485, 0);
          } else if ('range' === _0x5ac730) {
            _0x128142.handleRange(_0x2a7485, 0);
          }
        });
      });
      _0x14f7b2("#mouse .fa-chevron-right").each(function () {
        _0x14f7b2(this).click(() => {
          const _0x53f175 = _0x14f7b2(this).parent();
          const _0x47905c = _0x14f7b2(_0x53f175).attr("type");
          if ("options" === _0x47905c) {
            _0x128142.handleOptions(_0x53f175, 1);
          } else if ('range' === _0x47905c) {
            _0x128142.handleRange(_0x53f175, 1);
          }
        });
      });
      this.canvas.addEventListener("mousemove", _0x1c9462 => {
        this.x = _0x1c9462.clientX;
        this.y = _0x1c9462.clientY;
      });
      this.canvas.addEventListener('mousedown', _0xc5c07d => {
        this.onMouseClick(_0xc5c07d);
      });
      this.canvas.addEventListener('mouseup', _0xf7c24a => {
        this.onMouseRelease(_0xf7c24a);
      });
      this.canvas.addEventListener("wheel", _0x48c72e => {
        this.onMouseWheel(_0x48c72e);
      });
      this.canvas.addEventListener("contextmenu", _0x230a32 => {
        _0x230a32.preventDefault();
      });
    }
    static ["onMouseWheel"](_0x6ba23b) {
      let _0x43363b = _0xddb6d6.targetViewport;
      if (0 > _0x6ba23b.wheelDelta) {
        _0x43363b *= _0x2cc0f3.zoomSpeed / 100;
      } else {
        _0x43363b /= _0x2cc0f3.zoomSpeed / 100;
      }
      _0x43363b = 2 < _0x43363b ? 2 : 0.02 > _0x43363b ? 0.02 : _0x43363b;
      _0xddb6d6.targetViewport = _0x43363b;
    }
    static ["onMouseClick"](_0x47116f) {
      let _0x26dc43 = false;
      switch (_0x47116f.which) {
        case 1:
          _0x26dc43 = 'leftClick';
          break;
        case 2:
          _0x26dc43 = "middleClick";
          break;
        case 3:
          _0x26dc43 = "rightClick";
      }
      if (_0x26dc43) {
        if (_0xddb6d6.isSpectating && 'on' === _0x2cc0f3.targeting) {
          const _0x100551 = (_0x47116f.clientX - (_0x1c478d.innerWidth >> 1)) / _0xddb6d6.viewport + _0xddb6d6.x;
          const _0x1d1b96 = (_0x47116f.clientY - (_0x1c478d.innerHeight >> 1)) / _0xddb6d6.viewport + _0xddb6d6.y;
          return void ('leftClick' === _0x26dc43 ? _0x3a83be.lockTarget(_0x100551, _0x1d1b96, 1) : "middleClick" === _0x26dc43 ? _0x3a83be.reset() : "rightClick" == _0x26dc43 && _0x3a83be.lockTarget(_0x100551, _0x1d1b96, 2));
        }
        const _0x468bbf = this[_0x26dc43];
        return "off" === _0x468bbf ? undefined : "feed" === _0x468bbf ? void _0x22a8df.feed() : 'macroFeed' === _0x468bbf ? void _0x22a8df.macroFeed(true) : 'split' === _0x468bbf ? void _0x22a8df.split() : "doubleSplit" === _0x468bbf ? void _0x22a8df.doubleSplit() : 'split16' === _0x468bbf ? void _0x22a8df.split16() : "commander" === _0x468bbf ? void _0x2d5cce.commander() : undefined;
      }
    }
    static ["onMouseRelease"](_0x3fd5b1) {
      let _0x3cf92e = false;
      switch (_0x3fd5b1.which) {
        case 1:
          _0x3cf92e = 'leftClick';
          break;
        case 2:
          _0x3cf92e = "middleClick";
          break;
        case 3:
          _0x3cf92e = "rightClick";
      }
      if (_0x3cf92e) {
        if ("macroFeed" === this[_0x3cf92e]) {
          return void _0x22a8df.macroFeed(false);
        }
      }
    }
    static ["handleOptions"](_0x4b1e6e, _0x3b3390) {
      const _0x28bf25 = _0x14f7b2(_0x4b1e6e).attr('name');
      const _0x3ad54c = _0x14f7b2(_0x4b1e6e).find('b');
      const _0x476442 = _0x3ad54c.length;
      let _0x4a39c1 = _0x476442;
      let _0x2b5b94 = 0;
      for (; _0x4a39c1--;) {
        let _0x2f7f1e = _0x3ad54c[_0x4a39c1];
        if ('active' === _0x14f7b2(_0x2f7f1e).attr("class")) {
          _0x2b5b94 = _0x4a39c1;
        }
      }
      if (1 === _0x3b3390) {
        const _0xf23814 = _0x2b5b94 + 1 < _0x476442 ? _0x2b5b94 + 1 : 0;
        _0x14f7b2(_0x3ad54c[_0x2b5b94]).removeAttr("class");
        _0x14f7b2(_0x3ad54c[_0xf23814]).attr("class", "active");
        const _0x21622c = _0x14f7b2(_0x3ad54c[_0xf23814]).attr('value');
        this.saveMouseOptions(_0x28bf25, _0x21622c);
      } else {
        if (0 === _0x3b3390) {
          const _0x5ab8e2 = 0 < _0x2b5b94 ? _0x2b5b94 - 1 : _0x476442 - 1;
          _0x14f7b2(_0x3ad54c[_0x2b5b94]).removeAttr('class');
          _0x14f7b2(_0x3ad54c[_0x5ab8e2]).attr("class", "active");
          const _0x4d8662 = _0x14f7b2(_0x3ad54c[_0x5ab8e2]).attr("value");
          this.saveMouseOptions(_0x28bf25, _0x4d8662);
        } else {
          if (2 === _0x3b3390) {
            _0x14f7b2(_0x3ad54c[_0x2b5b94]).removeAttr("class");
            let _0x2ebfee;
            for (let _0x253e9f = _0x476442; _0x253e9f--;) {
              _0x2ebfee = _0x3ad54c[_0x253e9f];
              if (_0x14f7b2(_0x2ebfee).attr("value") === this[_0x28bf25]) {
                _0x14f7b2(_0x2ebfee).attr("class", "active");
                break;
              }
            }
          }
        }
      }
    }
    static ["handleRange"](_0x459cfd, _0x38026c) {
      const _0x5b5f0a = _0x14f7b2(_0x459cfd).attr("name");
      const _0x44de45 = _0x14f7b2(_0x459cfd).find("span");
      const _0x29da59 = _0x44de45[0];
      const _0x2e034d = _0x44de45[1];
      const _0x4f7ee4 = ~~_0x14f7b2(_0x29da59).attr("min");
      const _0x887f8c = ~~_0x14f7b2(_0x29da59).attr("max");
      const _0x1761fe = ~~_0x14f7b2(_0x29da59).attr("step");
      const _0x1cd1f0 = ~~_0x14f7b2(_0x29da59).attr("value");
      if (1 === _0x38026c && _0x1cd1f0 + _0x1761fe <= _0x887f8c) {
        const _0x4fbb29 = _0x1761fe + _0x1cd1f0;
        _0x14f7b2(_0x29da59).attr("value", _0x4fbb29);
        _0x14f7b2(_0x2e034d).css("width", ~~(100 * (_0x4fbb29 - _0x4f7ee4) / (_0x887f8c - _0x4f7ee4)) + 'px');
        this.saveMouseOptions(_0x5b5f0a, _0x4fbb29);
      } else {
        if (0 === _0x38026c && _0x1cd1f0 - _0x1761fe >= _0x4f7ee4) {
          const _0x28a886 = _0x1cd1f0 - _0x1761fe;
          _0x14f7b2(_0x29da59).attr('value', _0x28a886);
          _0x14f7b2(_0x2e034d).css('width', ~~(100 * (_0x28a886 - _0x4f7ee4) / (_0x887f8c - _0x4f7ee4)) + 'px');
          this.saveMouseOptions(_0x5b5f0a, _0x28a886);
        } else {
          if (2 === _0x38026c) {
            const _0x4e3b9d = this[_0x5b5f0a];
            _0x14f7b2(_0x29da59).attr("value", _0x4e3b9d);
            _0x14f7b2(_0x2e034d).css("width", ~~(100 * (_0x4e3b9d - _0x4f7ee4) / (_0x887f8c - _0x4f7ee4)) + 'px');
          }
        }
      }
    }
    static ["saveMouseOptions"](_0x23ebd1, _0x55d92b) {
      this[_0x23ebd1] = _0x55d92b;
      _0x19d5af.set('mouse', _0x23ebd1, _0x55d92b);
    }
  }
  class _0x10ab3c {
    static ['init']() {
      this.load();
      this.setDomValues();
      this.addEvents();
    }
    static ["load"]() {
      this.command1 = _0x19d5af.get("commands", "command1") || _0x59f59a.current.commandsMenu.command1;
      this.command2 = _0x19d5af.get("commands", "command2") || _0x59f59a.current.commandsMenu.command2;
      this.command3 = _0x19d5af.get("commands", "command3") || _0x59f59a.current.commandsMenu.command3;
      this.command4 = _0x19d5af.get('commands', "command4") || _0x59f59a.current.commandsMenu.command4;
      this.command5 = _0x19d5af.get("commands", "command5") || _0x59f59a.current.commandsMenu.command5;
      this.command6 = _0x19d5af.get('commands', 'command6') || _0x59f59a.current.commandsMenu.command6;
      this.command7 = _0x19d5af.get("commands", 'command7') || _0x59f59a.current.commandsMenu.command7;
      this.command8 = _0x19d5af.get("commands", "command8") || _0x59f59a.current.commandsMenu.command8;
      this.command9 = _0x19d5af.get("commands", "command9") || _0x59f59a.current.commandsMenu.command9;
      this.command0 = _0x19d5af.get("commands", 'command0') || _0x59f59a.current.commandsMenu.command0;
    }
    static ["addEvents"]() {
      _0x14f7b2("#commands").perfectScrollbar();
      let _0xcbd57;
      for (let _0x36400f = 10; _0x36400f--;) {
        _0xcbd57 = "command" + _0x36400f;
        _0x14f7b2('#' + _0xcbd57).blur(() => {
          this.setCommand(_0xcbd57, _0x14f7b2('#' + _0xcbd57).val());
        });
      }
    }
    static ["setCommand"](_0x5a8d5b, _0x4d2612) {
      this[_0x5a8d5b] = _0x4d2612;
      _0x19d5af.set('commands', _0x5a8d5b, _0x4d2612);
    }
    static ["setDomValues"]() {
      let _0x134c8f;
      for (let _0x40c482 = 10; _0x40c482--;) {
        _0x134c8f = "command" + _0x40c482;
        _0x14f7b2('#' + _0x134c8f).val(this[_0x134c8f]);
      }
    }
    static ['refresh']() {
      this.load();
      this.setDomValues();
    }
  }
  class _0x22a8df {
    static ["init"]() {
      this.ejectInterval = false;
    }
    static ["stopMovementToggle"]() {
      _0x90a1a7.movementPaused = !_0x90a1a7.movementPaused;
    }
    static ['feed']() {
      _0x128142.send();
      _0x302a2c.eject();
    }
    static ["macroFeed"](_0x2045c7) {
      if (_0x2045c7) {
        if (this.ejectInterval) {
          return;
        }
        this.feed();
        this.ejectInterval = setInterval(() => {
          this.feed();
        }, 25);
      } else if (this.ejectInterval) {
        clearInterval(this.ejectInterval);
        this.ejectInterval = false;
      }
    }
    static ["split"]() {
      _0x128142.send();
      _0x302a2c.split();
    }
    static ["doubleSplit"]() {
      this.split();
      setTimeout(() => {
        this.split();
      }, 40);
    }
    static ['split16']() {
      this.split();
      setTimeout(() => {
        this.split();
      }, 40);
      setTimeout(() => {
        this.split();
      }, 60);
      setTimeout(() => {
        this.split();
      }, 80);
      setTimeout(() => {
        this.split();
      }, 100);
      setTimeout(() => {
        this.split();
      }, 120);
      setTimeout(() => {
        this.split();
      }, 140);
    }
    static ["toggleSpectate"]() {
      return _0x3a83be.isTurnedOn ? (_0x3a83be.reset(), _0x3a83be.target1.turnedOn = false, _0x3a83be.target2.turnedOn = false, void _0x3a43e7.mouseViewport()) : (_0x302a2c.freeSpectate(), _0xddb6d6.freeSpectate ? _0x3a43e7.mouseViewport() : _0x3a43e7.topViewport(), _0x3a83be.target1.turnedOn = false, void (_0x3a83be.target2.turnedOn = false));
    }
    static ["chat"](_0x37e550) {
      _0x59ca82.enter(_0x37e550);
    }
    static ["command"](_0x4a99af) {
      let _0x2dfda6 = _0x10ab3c["command" + _0x4a99af];
      if (0 <= _0x2dfda6.indexOf("%sector%")) {
        const _0x43246e = _0x996564.getLocation(_0xddb6d6.x, _0xddb6d6.y);
        _0x2dfda6 = _0x2dfda6.replace("%sector%", _0x43246e);
      }
      _0x302a2c.chat(_0x2dfda6);
      _0x2d5cce.chat(2, _0x2dfda6);
    }
    static ['setZoom'](_0x4b51ed) {
      _0xddb6d6.targetViewport = _0x4b51ed;
    }
    static ["toggleCellNick"]() {
      const _0x390341 = _0x19d5af.get("settings", "cellNick");
      _0x2cc0f3.cellNick = 'off' === _0x2cc0f3.cellNick ? "off" !== _0x390341 && _0x390341 || 'on' : "off";
    }
    static ["toggleCellMass"]() {
      const _0x283e57 = _0x19d5af.get("settings", "cellMass");
      _0x2cc0f3.cellMass = "off" === _0x2cc0f3.cellMass ? "off" !== _0x283e57 && _0x283e57 || "shortened" : 'off';
    }
    static ["toggleGameFood"]() {
      const _0x6f503d = _0x19d5af.get("settings", "food");
      _0x2cc0f3.food = "off" === _0x2cc0f3.food ? 'off' !== _0x6f503d && _0x6f503d || "monoColored" : "off";
    }
    static ["toggleBGsectors"]() {
      const _0xfd7451 = _0x19d5af.get('settings', "bgSectors");
      _0x2cc0f3.bgSectors = "off" === _0x2cc0f3.bgSectors ? "off" !== _0xfd7451 && _0xfd7451 || "normal" : "off";
    }
    static ["toggleSkin"]() {
      const _0x25ada7 = _0x19d5af.get('settings', "arbSkins");
      _0x2cc0f3.arbSkins = "off" === _0x2cc0f3.arbSkins ? "off" !== _0x25ada7 && _0x25ada7 || 'on' : "off";
    }
    static ["toggleCustomSkin"]() {
      const _0x37c923 = _0x19d5af.get("settings", "urlSkins");
      _0x2cc0f3.urlSkins = "off" === _0x2cc0f3.urlSkins ? "off" !== _0x37c923 && _0x37c923 || 'on' : "off";
    }
    static ["toggleSplitRings"]() {
      const _0x45fe0b = _0x19d5af.get("settings", "splitRings");
      _0x2cc0f3.splitRings = "off" === _0x2cc0f3.splitRings ? "off" !== _0x45fe0b && _0x45fe0b || 'on' : "off";
    }
    static ["toggleOpponentRings"]() {
      const _0x502302 = _0x19d5af.get("settings", "opponentRings");
      _0x2cc0f3.opponentRings = "off" === _0x2cc0f3.opponentRings ? "off" !== _0x502302 && _0x502302 || 'on' : "off";
    }
    static ["togglemultiboxRing"]() {
      const _0x319d03 = _0x19d5af.get("settings", "multiboxRing");
      _0x2cc0f3.multiboxRing = "off" === _0x2cc0f3.multiboxRing ? 'off' !== _0x319d03 && _0x319d03 || 'on' : "off";
    }
    static ["toggleMaouCircle"]() {
      const _0x3c9a1b = _0x19d5af.get("theme", "maouCircle");
      _0x480be4.maouCircle = "off" === _0x480be4.maouCircle ? 'off' !== _0x3c9a1b && _0x3c9a1b || 'on' : 'off';
    }
    static ["respawn"]() {
      const _0x247aae = setInterval(() => {
        if (_0x18a8d1.connected) {
          _0x302a2c.spawn();
          clearInterval(_0x247aae);
        }
      }, 100);
    }
    static ["multiboxTab"]() {
      if (1 === _0x90a1a7.typeID) {
        _0x90a1a7.typeID = 2;
        if (!_0x90a1a7._isAlive2) {
          _0x302a2c.spawn();
        }
      } else {
        _0x90a1a7.typeID = 1;
        if (!_0x90a1a7._isAlive) {
          _0x302a2c.spawn();
        }
      }
    }
  }
  class _0x77d3cd {
    static ["init"]() {
      this.addEvents();
      this.setServers();
    }
    static ["addEvents"]() {
      _0x14f7b2("#servers").change(() => {
        let _0x16b9d8 = _0x14f7b2("#servers").val();
        if ('' != _0x16b9d8) {
          this.joinServer(_0x16b9d8);
        }
      });
    }
    static ["fetchServerinfo"]() {
      let _0x3be13b;
      let _0x4f61db = new XMLHttpRequest();
      _0x4f61db.open('GET', "https://3rb.io/php/Servers.php", false);
      _0x4f61db.send();
      try {
        _0x3be13b = JSON.parse(_0x4f61db.responseText);
      } catch (_0xa4a5bc) {
        _0x3be13b = null;
      }
      return _0x3be13b;
    }
    static ["getServers"]() {
      try {
        var _0x53f748 = [];
        var _0x5171cd = [];
        var _0x522225 = this.fetchServerinfo();
        var {
          ip: _0x352371,
          modes: _0x325373
        } = _0x522225;
        Object.keys(_0x325373).forEach(_0x52b40f => {
          var {
            total: _0x16a8aa,
            max: _0x434fe4,
            servers: [{
              port: _0xf96a1f
            }]
          } = _0x325373[_0x52b40f];
          _0x53f748[_0x52b40f] = {
            'ip': "wss://" + _0x352371 + ':' + _0xf96a1f + "/V5",
            'gamemode': _0x52b40f,
            'max_players': _0x434fe4,
            'current_players': _0x16a8aa
          };
          _0x5171cd[_0x52b40f] = "wss://" + _0x352371 + ':' + _0xf96a1f + "/V5";
        });
      } catch (_0x4d7dc1) {
        _0x40f48a.warn("Multibox", "Unexpected error occured while parsing servers info.");
        throw _0x4d7dc1;
      }
      return [_0x5171cd, _0x53f748];
    }
    static ['setServers']() {
      let [_0x5e6c1, _0x11c4ff] = this.getServers();
      let _0x47b577 = '';
      let _0x3e7ddf = null;
      let _0x182337 = null;
      Object.keys(_0x5e6c1).forEach((_0x5db14f, _0x19dca1) => {
        _0x182337 = _0x5db14f.replace(/[^a-zA-Z0-9 ]/g, '');
        _0x47b577 = null != _0x11c4ff[_0x5db14f] ? _0x47b577 + "<option id=\"ffa" + parseInt(_0x19dca1 + 1) + "\" value=\"" + _0x5e6c1[_0x5db14f] + "\">" + _0x182337 + " [" + _0x11c4ff[_0x5db14f].current_players + '/' + _0x11c4ff[_0x5db14f].max_players + "]</option>" : _0x47b577 + "<option id=\"ffa" + parseInt(_0x19dca1 + 1) + "\" value=\"" + _0x5e6c1[_0x5db14f] + "\">" + _0x5db14f + '</option>';
      });
      _0x3e7ddf = Math.floor(_0x5e6c1.length * Math.random()) + 1;
      _0x14f7b2("#servers").html(_0x47b577);
      _0x14f7b2("#opt_ffa" + _0x3e7ddf).prop("selected", true);
      _0x14f7b2(document).ready(function () {
        _0x77d3cd.joinServer(_0x14f7b2("#servers").val());
      });
    }
    static ["joinServer"](_0x4fdb09) {
      _0x18a8d1.connect(_0x4fdb09);
    }
  }
  class _0x480be4 {
    static ["init"]() {
      this.isOpened = false;
      this.div = _0x14f7b2('#theme');
      this.selectedPreset = _0x19d5af.get("theme", "selectedPreset") || "custom";
      this.skinBorder = ~~_0x19d5af.get("theme", "skinBorder") || 100;
      this.lbSize = ~~_0x19d5af.get('theme', "lbSize") || 110;
      this.minimapSize = ~~_0x19d5af.get('theme', "minimapSize") || 200;
      this.chatFontSize = ~~_0x19d5af.get("theme", "chatFontSize") || 14;
      this.cellTransparency = ~~_0x19d5af.get('theme', "cellTransparency") || 100;
      this.lightenCellColor = ~~_0x19d5af.get("theme", "lightenCellColor") || 100;
      this.borderWidth = ~~_0x19d5af.get("theme", "borderWidth") || 60;
      this.borderColor = _0x19d5af.get('theme', "borderColor") || "#ffffff";
      this.rainbowBorder = _0x19d5af.get("theme", "rainbowBorder") || "off";
      this._rainbowHue = 0;
      this.virusGlow = _0x19d5af.get("theme", "virusGlow") || "off";
      this.virusGlowDistance = ~~_0x19d5af.get("theme", "virusGlowDistance") || 50;
      this.virusGlowColor = _0x19d5af.get('theme', "virusGlowColor") || "#00bcff";
      this.foodGlowColor = _0x19d5af.get('theme', "foodGlowColor") || "#00ff00";
      this.foodGlowSize = ~~_0x19d5af.get("theme", "foodGlowSize") || 20;
      this.foodGlowStrength = ~~_0x19d5af.get("theme", "foodGlowStrength") || 1;
      this.maouCircle = _0x19d5af.get("theme", "maouCircle") || "off";
      this.team1color = _0x19d5af.get("theme", "team1color") || "#aeaeae";
      this.team2color = _0x19d5af.get("theme", 'team2color') || "#ff171f";
      this.multiboxActive = _0x19d5af.get("theme", "multiboxActive") || "#ff61f8";
      this.multiboxInactive = _0x19d5af.get("theme", "multiboxInactive") || "#fff";
      this.multiboxRingWidth = ~~_0x19d5af.get("theme", "multiboxRingWidth") || 10;
      this.nickColor = _0x19d5af.get("theme", "nickColor") || "#fff";
      this.nickStrokeColor = _0x19d5af.get('theme', "nickStrokeColor") || "#000";
      this.cellNickSize = ~~_0x19d5af.get('theme', "cellNickSize") || 120;
      this.nickFont = _0x19d5af.get("theme", "nickFont") || 'ubuntu';
      this.massColor = _0x19d5af.get('theme', 'massColor') || "#fff";
      this.massStrokeColor = _0x19d5af.get('theme', "massStrokeColor") || "#000";
      this.cellMassSize = ~~_0x19d5af.get('theme', "cellMassSize") || 150;
      this.massFont = _0x19d5af.get("theme", "massFont") || "ubuntu";
      this.gridWidth = ~~_0x19d5af.get("theme", "gridWidth") || 100;
      this.gridColor = _0x19d5af.get("theme", 'gridColor') || "#111";
      this.gridTextColor = _0x19d5af.get("theme", "gridTextColor") || "#111";
      this.gridTextSize = _0x19d5af.get("theme", "gridTextSize") || 1500;
      this.gridTextFont = _0x19d5af.get('theme', "gridTextFont") || 'ubuntu';
      this.foodSize = ~~_0x19d5af.get('theme', "foodSize") || 1;
      this.foodColor = _0x19d5af.get("theme", "foodColor") || "#6111ff";
      this.virusColor = _0x19d5af.get('theme', "virusColor") || "#8f8f8f";
      this.virusBorderColor = _0x19d5af.get('theme', "virusBorderColor") || "#c2c2c2";
      this.virusBorderWidth = ~~_0x19d5af.get("theme", "virusBorderWidth") || 10;
      this.commanderColor = _0x19d5af.get("theme", "commanderColor") || "#f5e35d";
      this.commanderImageUrl = _0x19d5af.get("theme", "commanderImageUrl") || "";
      this.backgroundColor = _0x19d5af.get("theme", "backgroundColor") || "#000000";
      this.indicatorSize = ~~_0x19d5af.get("theme", "indicatorSize") || 100;
      this.cursor = _0x19d5af.get("theme", "cursor") || 13;
      this.borderOpacity = ~~_0x19d5af.get("theme", "borderOpacity") || 10;
      this.borderGlowSize = ~~_0x19d5af.get("theme", "borderGlowSize") || 10;
      this.borderGlowStrength = ~~_0x19d5af.get("theme", "borderGlowStrength") || 5;
      this.borderGlowColor = _0x19d5af.get("theme", "borderGlowColor") || "#ffffff";
      this.cursorLineColor = _0x19d5af.get("theme", "cursorLineColor") || "#ff0000";
      this.leaderboardTitleColor = _0x19d5af.get("theme", "leaderboardTitleColor") || "#ffffff";
      this.customLeaderboardHead = _0x19d5af.get("theme", "customLeaderboardHead") || "off";
      this.globalRotationSpeed = ~~_0x19d5af.get("theme", "globalRotationSpeed") || 5;
      this.maouCircleUrl = _0x19d5af.get("theme", "maouCircleUrl") || "";
      this.multiboxShieldUrl = _0x19d5af.get("theme", "multiboxShieldUrl") || "";
      this.virusGlowSize = ~~_0x19d5af.get("theme", "virusGlowSize") || 50;
      this.virusGlowStrength = ~~_0x19d5af.get("theme", "virusGlowStrength") || 5;
      this.virusRingWidth = ~~_0x19d5af.get("theme", "virusRingWidth") || 10;
      this.virusRingColor = _0x19d5af.get("theme", "virusRingColor") || "#ffffff";
      this.virusGearColor = _0x19d5af.get("theme", "virusGearColor") || "#ff0066";
      this.ghostColor = _0x19d5af.get("theme", "ghostColor") || "#aaa";
      this.selfColor = _0x19d5af.get("theme", "selfColor") || "#fff";
      this.selfViewportColor = _0x19d5af.get("theme", "selfViewportColor") || "#fff";
      this.selfViewportAlpha = ~~_0x19d5af.get("theme", "selfViewportAlpha") || 5;
      this.topViewportColor = _0x19d5af.get("theme", "topViewportColor") || "#fff";
      this.topViewportAlpha = ~~_0x19d5af.get("theme", "topViewportAlpha") || 5;
      this.teammateColor = _0x19d5af.get("theme", "teammateColor") || "#555";
      this.teammateNameColor = _0x19d5af.get("theme", "teammateNameColor") || "#fff";
      this.backgroundImage = _0x19d5af.get("theme", "backgroundImage") || "";
      this.addPresets();
      this.setDomValues();
      this.addEvents();
      this.setLeaderboardTitle();
      this.setBackgroundImage(this.backgroundImage);
      this._initMaouCircle();
      this._initMultiboxShield();
    }
    static ["_initMultiboxShield"]() {
      this._shieldReady = false;
      this.shieldImage = new Image();
      this.shieldImage.crossOrigin = "anonymous";
      this.shieldImage.onload = () => { this._shieldReady = true; };
      this.shieldImage.src = this.multiboxShieldUrl && this.multiboxShieldUrl.length > 0
        ? this.multiboxShieldUrl
        : "https://raw.githubusercontent.com/darknessxd/3rbio-multibox/main/hslo_ring.png";
    }
    static ["_initMaouCircle"]() {
      this.maouRotation = 0;
      this._maouReady = false;
      this.maouCanvas = document.createElement('canvas');
      this.maouCanvas.width = this.maouCanvas.height = 513;
      this.maouCtx = this.maouCanvas.getContext('2d');
      this.maouOuter = new Image();
      this.maouInner = new Image();
      this.maouOuter.crossOrigin = "anonymous";
      this.maouInner.crossOrigin = "anonymous";
      const _0xb0d1c2 = this.maouCircleUrl && this.maouCircleUrl.length > 0 ? this.maouCircleUrl : "https://raw.githubusercontent.com/darknessxd/3rbio-multibox/main/";
      this.maouOuter.onload = () => { this._maouReady = true; };
      this.maouInner.onload = () => { if (this.maouOuter.complete) this._maouReady = true; };
      this.maouOuter.src = _0xb0d1c2 + "hslo_ring.png";
      this.maouInner.src = _0xb0d1c2 + "maou_inner.png";
      setInterval(() => {
        if (this.maouCircle !== "on" || !this._maouReady) return;
        this.maouRotation = (this.maouRotation + (this.globalRotationSpeed || 1)) % 360;
        const _0x5e3f1a = 256.5;
        this.maouCtx.save();
        this.maouCtx.setTransform(1, 0, 0, -1, _0x5e3f1a + 0.5, _0x5e3f1a + 0.5);
        this.maouCtx.clearRect(-_0x5e3f1a, -_0x5e3f1a, 513, 513);
        const _0x3a7b2c = this.maouRotation * Math.PI / 180;
        this.maouCtx.rotate(_0x3a7b2c);
        this.maouCtx.drawImage(this.maouOuter, -_0x5e3f1a, -_0x5e3f1a);
        this.maouCtx.rotate(-_0x3a7b2c * 2);
        this.maouCtx.drawImage(this.maouInner, -_0x5e3f1a, -_0x5e3f1a);
        this.maouCtx.restore();
      }, 40);
    }
    static ["setDomValues"]() {
      _0x14f7b2(".theme-options").each(function () {
        const _0x46ba3f = _0x14f7b2(this).attr("type");
        if ("range" === _0x46ba3f) {
          _0x480be4.handleRange(this, 2);
        } else if ("options" === _0x46ba3f) {
          _0x480be4.handleOptions(this, 2);
        } else if ("colorpicker" === _0x46ba3f) {
          _0x480be4.initColorpicker(this);
        }
      });
      this.setChatFontSize(this.chatFontSize);
      this.setBackground(this.backgroundColor);
      this.setLeaderboard(this.lbSize);
      this.setMinimap(this.minimapSize);
      this.setCursor(this.cursor);
    }
    static ["addEvents"]() {
      _0x14f7b2(".theme-container").perfectScrollbar();
      _0x14f7b2(".theme-container .fa-chevron-left").each(function () {
        _0x14f7b2(this).click(() => {
          const _0x398d1b = _0x14f7b2(this).parent();
          const _0x4f91e6 = _0x14f7b2(_0x398d1b).attr("type");
          if ('options' === _0x4f91e6) {
            _0x480be4.handleOptions(_0x398d1b, 0);
          } else if ("range" === _0x4f91e6) {
            _0x480be4.handleRange(_0x398d1b, 0);
          }
        });
      });
      _0x14f7b2(".theme-container span.outer").each(function () {
        _0x14f7b2(this).click(_0xd56321 => {
          const _0x4d37d = _0x14f7b2(this).parent();
          _0x480be4.handleRange(_0x4d37d, 3, _0xd56321.offsetX);
        });
      });
      _0x14f7b2(".theme-container .fa-chevron-right").each(function () {
        _0x14f7b2(this).click(() => {
          const _0x3c1d33 = _0x14f7b2(this).parent();
          const _0x2d84ac = _0x14f7b2(_0x3c1d33).attr('type');
          if ("options" === _0x2d84ac) {
            _0x480be4.handleOptions(_0x3c1d33, 1);
          } else if ("range" === _0x2d84ac) {
            _0x480be4.handleRange(_0x3c1d33, 1);
          }
        });
      });
      _0x14f7b2(".theme-close").click(() => this.close());
      _0x14f7b2("input#backgroundImage, input#maouCircleUrl, input#multiboxShieldUrl, input#commanderImageUrl").each(function () {
        const _0x558bc6 = _0x14f7b2(this).attr('id');
        _0x14f7b2(this).val(_0x480be4[_0x558bc6] || '');
        _0x14f7b2(this).on('input', function () {
          const _0x2b7e1d = _0x14f7b2(this).val();
          _0x480be4.saveTheme(_0x558bc6, _0x2b7e1d);
          if ('commanderImageUrl' === _0x558bc6) {
            _0x386cbc._loadCeImage(_0x2b7e1d);
          }
        });
      });
    }
    static ['toggle']() {
      if (this.isOpened) {
        this.close();
      } else {
        this.open();
      }
    }
    static ["close"]() {
      this.isOpened = false;
      this.div.fadeOut(250);
    }
    static ['open']() {
      this.isOpened = true;
      this.div.fadeIn(250);
    }
    static ["handleOptions"](_0xed1b67, _0x597539) {
      const _0x5aa17f = _0x14f7b2(_0xed1b67).attr("name");
      const _0x5147f6 = _0x14f7b2(_0xed1b67).find('b');
      const _0x44bdf9 = _0x5147f6.length;
      let _0x21024e = _0x44bdf9;
      let _0x1d5d41 = 0;
      for (; _0x21024e--;) {
        let _0x466967 = _0x5147f6[_0x21024e];
        if ("active" === _0x14f7b2(_0x466967).attr("class")) {
          _0x1d5d41 = _0x21024e;
        }
      }
      if (1 === _0x597539) {
        const _0xafd047 = _0x1d5d41 + 1 < _0x44bdf9 ? _0x1d5d41 + 1 : 0;
        _0x14f7b2(_0x5147f6[_0x1d5d41]).removeAttr('class');
        _0x14f7b2(_0x5147f6[_0xafd047]).attr('class', "active");
        const _0x5fa32 = _0x14f7b2(_0x5147f6[_0xafd047]).attr('value');
        this.saveTheme(_0x5aa17f, _0x5fa32);
      } else {
        if (0 === _0x597539) {
          const _0x5d5dfc = 0 < _0x1d5d41 ? _0x1d5d41 - 1 : _0x44bdf9 - 1;
          _0x14f7b2(_0x5147f6[_0x1d5d41]).removeAttr("class");
          _0x14f7b2(_0x5147f6[_0x5d5dfc]).attr("class", "active");
          const _0x359d61 = _0x14f7b2(_0x5147f6[_0x5d5dfc]).attr("value");
          this.saveTheme(_0x5aa17f, _0x359d61);
        } else {
          if (2 === _0x597539) {
            _0x14f7b2(_0x5147f6[_0x1d5d41]).removeAttr("class");
            let _0x5d6174;
            for (let _0x5cf991 = _0x44bdf9; _0x5cf991--;) {
              _0x5d6174 = _0x5147f6[_0x5cf991];
              if (_0x14f7b2(_0x5d6174).attr("value") === this[_0x5aa17f]) {
                _0x14f7b2(_0x5d6174).attr("class", "active");
                break;
              }
            }
          }
        }
      }
    }
    static ["handleRange"](_0x200bd4, _0x21746b, _0x5cdbab = 0) {
      const _0xf883e3 = _0x14f7b2(_0x200bd4).attr("name");
      const _0xcdedf8 = _0x14f7b2(_0x200bd4).find("span");
      const _0x35ea55 = _0xcdedf8[0];
      const _0x1dd6bb = _0xcdedf8[1];
      const _0x43cad7 = _0x14f7b2(_0xcdedf8[2]);
      const _0x207e11 = ~~_0x14f7b2(_0x35ea55).attr("min");
      const _0x2a491d = ~~_0x14f7b2(_0x35ea55).attr("max");
      const _0x4d07cd = ~~_0x14f7b2(_0x35ea55).attr("step");
      const _0x4a5bd7 = ~~_0x14f7b2(_0x35ea55).attr("value");
      if (1 === _0x21746b && _0x4a5bd7 + _0x4d07cd <= _0x2a491d) {
        const _0x589000 = _0x4d07cd + _0x4a5bd7;
        _0x14f7b2(_0x35ea55).attr("value", _0x589000);
        _0x14f7b2(_0x1dd6bb).css("width", ~~(100 * (_0x589000 - _0x207e11) / (_0x2a491d - _0x207e11)) + 'px');
        _0x43cad7.text('[' + _0x589000 + ']');
        this.saveTheme(_0xf883e3, ~~_0x589000);
      } else {
        if (0 === _0x21746b && _0x4a5bd7 - _0x4d07cd >= _0x207e11) {
          const _0xdd44a1 = _0x4a5bd7 - _0x4d07cd;
          _0x14f7b2(_0x35ea55).attr("value", _0xdd44a1);
          _0x14f7b2(_0x1dd6bb).css("width", ~~(100 * (_0xdd44a1 - _0x207e11) / (_0x2a491d - _0x207e11)) + 'px');
          _0x43cad7.text('[' + _0xdd44a1 + ']');
          this.saveTheme(_0xf883e3, ~~_0xdd44a1);
        } else {
          if (2 === _0x21746b) {
            const _0xda887a = this[_0xf883e3];
            _0x14f7b2(_0x35ea55).attr("value", _0xda887a);
            _0x14f7b2(_0x1dd6bb).css("width", ~~(100 * (_0xda887a - _0x207e11) / (_0x2a491d - _0x207e11)) + 'px');
            _0x43cad7.text('[' + _0xda887a + ']');
          } else {
            if (3 === _0x21746b) {
              let _0x5cf273 = 0 | _0x5cdbab / 100 * (_0x2a491d - _0x207e11);
              _0x5cf273 = (0 | _0x5cf273 / _0x4d07cd) * _0x4d07cd;
              const _0x41837e = 100 * ((_0x5cf273 += _0x207e11) - _0x207e11) / (_0x2a491d - _0x207e11);
              _0x14f7b2(_0x35ea55).attr("value", _0x5cf273);
              _0x14f7b2(_0x1dd6bb).css("width", ~~_0x41837e + 'px');
              _0x43cad7.text('[' + _0x5cf273 + ']');
              this.saveTheme(_0xf883e3, ~~_0x5cf273);
            }
          }
        }
      }
    }
    static ["initColorpicker"](_0x5c4eed) {
      const _0x2560ae = _0x14f7b2(_0x5c4eed).find("input");
      const _0x4372e5 = _0x2560ae.attr('id');
      const _0xc279bf = this[_0x4372e5];
      _0x14f7b2(_0x2560ae).val(_0xc279bf);
      const _0x1b8ec5 = !!~~_0x2560ae.attr("opacity");
      _0x14f7b2('#' + _0x4372e5).minicolors({
        'opacity': _0x1b8ec5,
        'position': "bottom right",
        'change': _0x2e58c9 => {
          this.saveTheme(_0x4372e5, _0x2e58c9);
        }
      });
    }
    static ["saveTheme"](_0x589c1b, _0x33fe69) {
      this[_0x589c1b] = _0x33fe69;
      if ("selectedPreset" === _0x589c1b) {
        this.selectPreset(_0x33fe69);
      } else if ("custom" !== this.selectedPreset) {
        this.selectedPreset = "custom";
        _0x19d5af.set("theme", "selectedPreset", "custom");
        this.setDomValues();
      }
      if ("backgroundColor" === _0x589c1b) {
        this.setBackground(_0x33fe69);
      }
      if ("chatFontSize" === _0x589c1b) {
        this.setChatFontSize(_0x33fe69);
      }
      if ("lbSize" === _0x589c1b) {
        this.setLeaderboard(_0x33fe69);
      }
      if ("minimapSize" === _0x589c1b) {
        this.setMinimap(_0x33fe69);
      }
      if ('cursor' === _0x589c1b) {
        this.setCursor(_0x33fe69);
      }
      if ("massFont" === _0x589c1b) {
        _0x34f3bb.setMassCtxFont();
      }
      if ('nickFont' === _0x589c1b) {
        _0x34f3bb.setNickCtxFont();
      }
      if ("massStrokeColor" === _0x589c1b) {
        _0x34f3bb.massCaches.clear();
      }
      if ("nickStrokeColor" === _0x589c1b) {
        _0x34f3bb.nickCaches.clear();
      }
      if ("massColor" === _0x589c1b) {
        _0x34f3bb.massCaches.clear();
      }
      if ("nickColor" === _0x589c1b) {
        _0x34f3bb.nickCaches.clear();
      }
      if ("leaderboardTitleColor" === _0x589c1b || "customLeaderboardHead" === _0x589c1b) {
        this.setLeaderboardTitle();
      }
      if ("backgroundImage" === _0x589c1b) {
        this.setBackgroundImage(_0x33fe69);
      }
      _0x19d5af.set('theme', _0x589c1b, _0x33fe69);
    }
    static ["setBackground"](_0x4ffb10) {
      _0x14f7b2('body').css("background", _0x4ffb10);
    }
    static ["setChatFontSize"](_0xb43d48) {
      _0x14f7b2("#notifications").css("font-size", _0xb43d48 + 'px');
    }
    static ["setLeaderboard"](_0x48a858) {
      const _0x5136af = _0x48a858 / 100;
      _0x14f7b2("#leaderboard-head").css("font-size", (0 | 24 * _0x5136af) + 'px');
      _0x14f7b2("#leaderboard-positions").css("font-size", (0 | 13 * _0x5136af) + 'px');
    }
    static ["setMinimap"](_0x567cb6) {
      if (_0x5cda9b.initted) {
        _0x5cda9b.size = _0x567cb6;
        _0x5cda9b.canvas.width = _0x567cb6;
        _0x5cda9b.canvas.height = _0x567cb6;
      }
      _0x14f7b2("#minimap-hud, .minimap-grid").css({
        'width': _0x567cb6 + 'px',
        'height': _0x567cb6 + 'px'
      });
      _0x14f7b2(".minimap-row").css({
        'width': _0x567cb6 + 'px',
        'height': (0 | _0x567cb6 / 5) + 'px'
      });
      _0x14f7b2(".minimap-sector").css({
        'width': (0 | _0x567cb6 / 5) + 'px',
        'height': (0 | _0x567cb6 / 5) + 'px',
        'font-size': (0 | 15 * _0x567cb6 / 200) + 'px',
        'padding-top': (0 | 11 * _0x567cb6 / 200) + 'px'
      });
      _0x14f7b2(".minimap-head").css("bottom", _0x567cb6 + 9 + 'px');
    }
    static ['setCursor'](_0xef6b4e) {}
    static ["setLeaderboardTitle"]() {
      const _0x2933e8 = this.customLeaderboardHead;
      const _0x245fbe = "off" === _0x2933e8 ? "DarknessV1" : _0x2933e8;
      _0x14f7b2("#leaderboard-head").css("color", this.leaderboardTitleColor);
      _0x14f7b2("#leaderboard-head span").text(_0x245fbe);
    }
    static ["setBackgroundImage"](_0x3e7195) {
      _0x386cbc._loadBgImage(_0x3e7195);
    }
    static ["selectPreset"](_0x4da382) {
      const _0x5ae372 = this.presets[_0x4da382];
      if ("custom" !== _0x4da382 && _0x5ae372) {
        for (const _0x4e0263 in _0x5ae372.theme) if (_0x5ae372.theme.hasOwnProperty(_0x4e0263) && undefined !== this[_0x4e0263]) {
          this[_0x4e0263] = _0x5ae372.theme[_0x4e0263];
          _0x19d5af.set("theme", _0x4e0263, this[_0x4e0263]);
        }
        this.setDomValues();
        for (const _0x305881 in _0x5ae372.settings) if (_0x5ae372.settings.hasOwnProperty(_0x305881) && undefined !== _0x2cc0f3[_0x305881]) {
          _0x2cc0f3[_0x305881] = _0x5ae372.settings[_0x305881];
          _0x19d5af.set("settings", _0x305881, _0x2cc0f3[_0x305881]);
        }
        _0x2cc0f3.setDomValues();
      }
    }
    static ["addPresets"]() {
      const _0x1b5f87 = {
        "skinBorder": 0x64,
        "lbSize": 0x64,
        minimapSize: 0xc8,
        chatFontSize: 0xe,
        cellTransparency: 0x64,
        lightenCellColor: 0x64,
        borderWidth: 0x28,
        borderColor: "#fff",
        "team1color": '#aeaeae',
        "team2color": "#fff700",
        "nickColor": "#fff",
        nickStrokeColor: "#000",
        cellNickSize: 0x78,
        "nickFont": "ubuntu",
        "massColor": '#fff',
        massStrokeColor: '#000',
        cellMassSize: 0xa0,
        "massFont": 'ubuntu',
        "gridWidth": 0x28,
        "gridColor": '#1a1a1a',
        gridTextColor: "#1a1a1a",
        gridTextSize: 0x4b0,
        gridTextFont: "ubuntu",
        foodSize: 0x1,
        foodColor: '#ffffff',
        virusColor: "#000",
        virusBorderColor: "#d4d6dd",
        virusBorderWidth: 0xe,
        commanderColor: "#0849d4",
        backgroundColor: "#000",
        indicatorSize: 0x64,
        "cursor": 0x7,
        borderOpacity: 0xa,
        borderGlowSize: 0xa,
        borderGlowStrength: 0x5,
        borderGlowColor: "#ffffff",
        cursorLineColor: "#ff0000",
        leaderboardTitleColor: "#ffffff",
        customLeaderboardHead: "off",
        globalRotationSpeed: 0x5,
        maouCircleUrl: "",
        multiboxShieldUrl: "",
        virusGlowSize: 0x32,
        virusGlowStrength: 0x5,
        ghostColor: "#aaa",
        selfColor: "#fff",
        selfViewportColor: "#fff",
        selfViewportAlpha: 0x5,
        topViewportColor: "#fff",
        topViewportAlpha: 0x5,
        teammateColor: "#555",
        teammateNameColor: "#fff",
        backgroundImage: ""
      };
      const _0x4d89ea = {
        CellAnimation: 0xa0,
        eatAnimation: 'on',
        cellTextAnimation: 'on',
        "cellMass": "shortened",
        food: "monoColored",
        bgSectors: "normal",
        vanillaGrid: 'off'
      };
      const _0x4def84 = {
        "author": 'Cyper',
        theme: _0x1b5f87,
        "settings": _0x4d89ea
      };
      const _0x45e5ca = {
        "skinBorder": 0x64,
        lbSize: 0x6e,
        minimapSize: 0xc8,
        chatFontSize: 0x12,
        cellTransparency: 0x64,
        lightenCellColor: 0x64,
        borderWidth: 0x28,
        borderColor: "#ffffff",
        team1color: "#aeaeae",
        "team2color": "#fff700",
        nickColor: "#fff",
        nickStrokeColor: "#000",
        cellNickSize: 0x8c,
        "nickFont": "ubuntu",
        "massColor": "#fff",
        massStrokeColor: "#000",
        cellMassSize: 0x8c,
        "massFont": 'ubuntu',
        "gridWidth": 0x64,
        "gridColor": "#1a1a1a",
        gridTextColor: "#1a1a1a",
        gridTextSize: 0x6a4,
        gridTextFont: "ubuntu",
        "foodSize": 0x5,
        "foodColor": '#0849d4',
        "virusColor": "#808080",
        virusBorderColor: '#9e9e9e',
        virusBorderWidth: 0xa,
        commanderColor: "#0849d4",
        backgroundColor: '#000000',
        indicatorSize: 0x64,
        cursor: 0x1,
        borderOpacity: 0xa,
        borderGlowSize: 0xa,
        borderGlowStrength: 0x5,
        borderGlowColor: "#ffffff",
        cursorLineColor: "#ff0000",
        leaderboardTitleColor: "#ffffff",
        customLeaderboardHead: "off",
        globalRotationSpeed: 0x5,
        maouCircleUrl: "",
        multiboxShieldUrl: "",
        virusGlowSize: 0x32,
        virusGlowStrength: 0x5,
        ghostColor: "#aaa",
        selfColor: "#fff",
        selfViewportColor: "#fff",
        selfViewportAlpha: 0x5,
        topViewportColor: "#fff",
        topViewportAlpha: 0x5,
        teammateColor: "#555",
        teammateNameColor: "#fff",
        backgroundImage: ""
      };
      const _0x351870 = {
        CellAnimation: 0x78,
        eatAnimation: 'on',
        cellTextAnimation: 'on',
        cellMass: 'full',
        "food": "monoColored",
        "bgSectors": 'normal',
        vanillaGrid: 'off'
      };
      const _0x28e9d7 = {
        "author": "Acydwarp",
        theme: _0x45e5ca,
        "settings": _0x351870
      };
      const _0x4ccef7 = {
        skinBorder: 0x64,
        "lbSize": 0x6e,
        minimapSize: 0xc8,
        chatFontSize: 0x12,
        cellTransparency: 0x64,
        lightenCellColor: 0x64,
        borderWidth: 0x3c,
        borderColor: '#ffffff',
        "team1color": "#aeaeae",
        team2color: "#fff700",
        nickColor: "#fff",
        nickStrokeColor: "#000",
        cellNickSize: 0x82,
        nickFont: 'sans-serif',
        "massColor": '#fff',
        massStrokeColor: "#000",
        cellMassSize: 0x82,
        "massFont": 'sans-serif',
        "gridWidth": 0x64,
        gridColor: "#1a1a1a",
        gridTextColor: "#1a1a1a",
        gridTextSize: 0x6a4,
        gridTextFont: "ubuntu",
        "foodSize": 0x5,
        "foodColor": "#6111ff",
        virusColor: "#808080",
        virusBorderColor: "#9e9e9e",
        virusBorderWidth: 0xa,
        commanderColor: "#0849d4",
        backgroundColor: "#000000",
        indicatorSize: 0x64,
        "cursor": 0x1,
        borderOpacity: 0xa,
        borderGlowSize: 0xa,
        borderGlowStrength: 0x5,
        borderGlowColor: "#ffffff",
        cursorLineColor: "#ff0000",
        leaderboardTitleColor: "#ffffff",
        customLeaderboardHead: "off",
        globalRotationSpeed: 0x5,
        maouCircleUrl: "",
        multiboxShieldUrl: "",
        virusGlowSize: 0x32,
        virusGlowStrength: 0x5,
        ghostColor: "#aaa",
        selfColor: "#fff",
        selfViewportColor: "#fff",
        selfViewportAlpha: 0x5,
        topViewportColor: "#fff",
        topViewportAlpha: 0x5,
        teammateColor: "#555",
        teammateNameColor: "#fff",
        backgroundImage: ""
      };
      const _0x4cb220 = {
        CellAnimation: 0x78,
        eatAnimation: 'on',
        cellTextAnimation: "off",
        "cellMass": "full",
        "food": "monoColored",
        "bgSectors": "off",
        vanillaGrid: "off"
      };
      const _0x5680ed = {
        "author": "Num Jai",
        "theme": _0x4ccef7,
        "settings": _0x4cb220
      };
      const _0x2f0677 = {
        "skinBorder": 0x64,
        "lbSize": 0x64,
        minimapSize: 0xf0,
        chatFontSize: 0x12,
        cellTransparency: 0x64,
        lightenCellColor: 0x5a,
        borderWidth: 0x28,
        borderColor: "#01d9cc",
        "team1color": "#aeaeae",
        "team2color": '#fff700',
        "nickColor": "#fff",
        nickStrokeColor: '#000',
        cellNickSize: 0x78,
        "nickFont": 'ubuntu',
        massColor: "#fff",
        massStrokeColor: "#000",
        cellMassSize: 0xa0,
        "massFont": "ubuntu",
        "gridWidth": 0x28,
        "gridColor": "#00243e",
        gridTextColor: "#00243e",
        gridTextSize: 0x4b0,
        gridTextFont: "ubuntu",
        foodSize: 0x5,
        "foodColor": '#5000ff',
        "virusColor": "#002f52",
        virusBorderColor: "#00b9e8",
        virusBorderWidth: 0xe,
        commanderColor: "#0849d4",
        backgroundColor: "#000a11",
        indicatorSize: 0x64,
        "cursor": 0x1,
        borderOpacity: 0xa,
        borderGlowSize: 0xa,
        borderGlowStrength: 0x5,
        borderGlowColor: "#ffffff",
        cursorLineColor: "#ff0000",
        leaderboardTitleColor: "#ffffff",
        customLeaderboardHead: "off",
        globalRotationSpeed: 0x5,
        maouCircleUrl: "",
        multiboxShieldUrl: "",
        virusGlowSize: 0x32,
        virusGlowStrength: 0x5,
        ghostColor: "#aaa",
        selfColor: "#fff",
        selfViewportColor: "#fff",
        selfViewportAlpha: 0x5,
        topViewportColor: "#fff",
        topViewportAlpha: 0x5,
        teammateColor: "#555",
        teammateNameColor: "#fff",
        backgroundImage: ""
      };
      const _0x8508de = {
        CellAnimation: 0x8c,
        eatAnimation: 'on',
        cellTextAnimation: 'on',
        "cellMass": "shortened",
        food: "monoColored",
        "bgSectors": "normal",
        vanillaGrid: "off"
      };
      const _0x5e84f4 = {
        "author": "Szymy",
        "theme": _0x2f0677,
        "settings": _0x8508de
      };
      const _0x3865bb = {
        "skinBorder": 0x64,
        "lbSize": 0x82,
        minimapSize: 0xc8,
        chatFontSize: 0x12,
        cellTransparency: 0x64,
        lightenCellColor: 0x64,
        borderWidth: 0xa,
        borderColor: "#116111",
        team1color: '#aeaeae',
        "team2color": "#fff700",
        "nickColor": "#fff",
        nickStrokeColor: "#000",
        cellNickSize: 0x64,
        "nickFont": "ubuntu",
        "massColor": "#fff",
        massStrokeColor: "#000",
        cellMassSize: 0x64,
        "massFont": "ubuntu",
        "gridWidth": 0xa,
        "gridColor": "#333333",
        gridTextColor: "#333333",
        gridTextSize: 0x6a4,
        gridTextFont: "ubuntu",
        "foodSize": 0x1,
        "foodColor": "#555",
        "virusColor": "#6fff00",
        virusBorderColor: "#55b304",
        virusBorderWidth: 0xe,
        commanderColor: "#00fff7",
        backgroundColor: "#000000",
        indicatorSize: 0x64,
        "cursor": 0x1,
        borderOpacity: 0xa,
        borderGlowSize: 0xa,
        borderGlowStrength: 0x5,
        borderGlowColor: "#ffffff",
        cursorLineColor: "#ff0000",
        leaderboardTitleColor: "#ffffff",
        customLeaderboardHead: "off",
        globalRotationSpeed: 0x5,
        maouCircleUrl: "",
        multiboxShieldUrl: "",
        virusGlowSize: 0x32,
        virusGlowStrength: 0x5,
        ghostColor: "#aaa",
        selfColor: "#fff",
        selfViewportColor: "#fff",
        selfViewportAlpha: 0x5,
        topViewportColor: "#fff",
        topViewportAlpha: 0x5,
        teammateColor: "#555",
        teammateNameColor: "#fff",
        backgroundImage: ""
      };
      const _0xa9ef03 = {
        CellAnimation: 0x78,
        eatAnimation: 'on',
        cellTextAnimation: 'on',
        "cellMass": "full",
        food: "rainbow",
        bgSectors: "normal",
        vanillaGrid: "off"
      };
      const _0xf48ba = {
        "author": 'DaChong',
        "theme": _0x3865bb,
        settings: _0xa9ef03
      };
      const _0x5ebeed = {
        skinBorder: 0x64,
        lbSize: 0x64,
        minimapSize: 0xc8,
        chatFontSize: 0x12,
        cellTransparency: 0x64,
        lightenCellColor: 0x64,
        borderWidth: 0xa,
        borderColor: "#333333",
        "team1color": "#aeaeae",
        "team2color": '#fff700',
        "nickColor": '#fff',
        nickStrokeColor: "#000",
        cellNickSize: 0x6e,
        "nickFont": "ubuntu",
        "massColor": '#fff',
        massStrokeColor: "#000",
        cellMassSize: 0x6e,
        massFont: 'ubuntu',
        "gridWidth": 0xa,
        gridColor: "#333333",
        gridTextColor: "#444444",
        gridTextSize: 0x4b0,
        gridTextFont: "ubuntu",
        "foodSize": 0x1,
        "foodColor": "#4b6efa",
        virusColor: "#6fff00",
        virusBorderColor: "#55b304",
        virusBorderWidth: 0xe,
        commanderColor: "#00fff7",
        backgroundColor: "#111",
        indicatorSize: 0x64,
        cursor: 0x1,
        borderOpacity: 0xa,
        borderGlowSize: 0xa,
        borderGlowStrength: 0x5,
        borderGlowColor: "#ffffff",
        cursorLineColor: "#ff0000",
        leaderboardTitleColor: "#ffffff",
        customLeaderboardHead: "off",
        globalRotationSpeed: 0x5,
        maouCircleUrl: "",
        multiboxShieldUrl: "",
        virusGlowSize: 0x32,
        virusGlowStrength: 0x5,
        ghostColor: "#aaa",
        selfColor: "#fff",
        selfViewportColor: "#fff",
        selfViewportAlpha: 0x5,
        topViewportColor: "#fff",
        topViewportAlpha: 0x5,
        teammateColor: "#555",
        teammateNameColor: "#fff",
        backgroundImage: ""
      };
      const _0x59aee0 = {
        CellAnimation: 0x78,
        eatAnimation: 'on',
        cellTextAnimation: "stepped",
        cellMass: "shortened",
        "food": "monoColored",
        "bgSectors": "normal",
        vanillaGrid: "off"
      };
      const _0x4e79f3 = {
        "author": "KSCC",
        theme: _0x5ebeed,
        "settings": _0x59aee0
      };
      const _0x1bb62a = {
        "skinBorder": 0x64,
        "lbSize": 0x64,
        minimapSize: 0xc8,
        chatFontSize: 0xe,
        cellTransparency: 0x64,
        lightenCellColor: 0x64,
        borderWidth: 0x14,
        borderColor: "#666666",
        "team1color": "#aeaeae",
        "team2color": "#fff700",
        "nickColor": "#fff",
        nickStrokeColor: "#000",
        cellNickSize: 0x6e,
        nickFont: "ubuntu",
        "massColor": "#fff",
        massStrokeColor: "#444",
        cellMassSize: 0x8c,
        "massFont": "oswald",
        "gridWidth": 0x64,
        "gridColor": "#222222",
        gridTextColor: "#222222",
        gridTextSize: 0x578,
        gridTextFont: 'sans-serif',
        "foodSize": 0x1,
        "foodColor": "#c9d3f5",
        "virusColor": "#e0e0e0",
        virusBorderColor: "#9c9c9c",
        virusBorderWidth: 0xa,
        commanderColor: "#ffffff",
        backgroundColor: "#000000",
        indicatorSize: 0x64,
        "cursor": 0x1,
        borderOpacity: 0xa,
        borderGlowSize: 0xa,
        borderGlowStrength: 0x5,
        borderGlowColor: "#ffffff",
        cursorLineColor: "#ff0000",
        leaderboardTitleColor: "#ffffff",
        customLeaderboardHead: "off",
        globalRotationSpeed: 0x5,
        maouCircleUrl: "",
        multiboxShieldUrl: "",
        virusGlowSize: 0x32,
        virusGlowStrength: 0x5,
        ghostColor: "#aaa",
        selfColor: "#fff",
        selfViewportColor: "#fff",
        selfViewportAlpha: 0x5,
        topViewportColor: "#fff",
        topViewportAlpha: 0x5,
        teammateColor: "#555",
        teammateNameColor: "#fff",
        backgroundImage: ""
      };
      const _0x66c0ae = {
        CellAnimation: 0x78,
        eatAnimation: 'on',
        cellTextAnimation: 'on',
        "cellMass": "full",
        food: "monoColored",
        "bgSectors": "normal",
        vanillaGrid: 'off'
      };
      const _0x129ce6 = {
        author: "Eric",
        "theme": _0x1bb62a,
        "settings": _0x66c0ae
      };
      const _0x375db3 = {
        "skinBorder": 0x5a,
        "lbSize": 0x64,
        minimapSize: 0xb4,
        chatFontSize: 0xe,
        cellTransparency: 0x64,
        lightenCellColor: 0x64,
        borderWidth: 0x28,
        borderColor: "#f5d25f",
        team1color: "#aeaeae",
        "team2color": "#ff006f",
        "nickColor": '#fff',
        nickStrokeColor: "#000000",
        cellNickSize: 0x6e,
        "nickFont": "ubuntu",
        massColor: "#fff",
        massStrokeColor: "#000000",
        cellMassSize: 0x78,
        massFont: 'ubuntu',
        "gridWidth": 0xa,
        "gridColor": '#fa676c',
        gridTextColor: "#333333",
        gridTextSize: 0x514,
        gridTextFont: 'oswald',
        foodSize: 0x1,
        "foodColor": "#555555",
        "virusColor": "#7a4ba3",
        virusBorderColor: '#ead2fa',
        virusBorderWidth: 0xe,
        commanderColor: "#ff006f",
        backgroundColor: "#222222",
        indicatorSize: 0x64,
        cursor: 0x1,
        borderOpacity: 0xa,
        borderGlowSize: 0xa,
        borderGlowStrength: 0x5,
        borderGlowColor: "#ffffff",
        cursorLineColor: "#ff0000",
        leaderboardTitleColor: "#ffffff",
        customLeaderboardHead: "off",
        globalRotationSpeed: 0x5,
        maouCircleUrl: "",
        multiboxShieldUrl: "",
        virusGlowSize: 0x32,
        virusGlowStrength: 0x5,
        ghostColor: "#aaa",
        selfColor: "#fff",
        selfViewportColor: "#fff",
        selfViewportAlpha: 0x5,
        topViewportColor: "#fff",
        topViewportAlpha: 0x5,
        teammateColor: "#555",
        teammateNameColor: "#fff",
        backgroundImage: ""
      };
      const _0x32fa65 = {
        CellAnimation: 0x8c,
        eatAnimation: 'on',
        cellTextAnimation: 'on',
        "cellMass": "shortened",
        "food": "monoColored",
        bgSectors: "normal",
        vanillaGrid: "off"
      };
      const _0x7d4929 = {
        "author": "2coolife",
        "theme": _0x375db3,
        "settings": _0x32fa65
      };
      const _0x1ff161 = {
        "Multibox": _0x4def84,
        "Agarplus v2": _0x28e9d7,
        "HKG": _0x5680ed,
        "Ogario v4": _0x5e84f4,
        "Yin": _0xf48ba,
        "VNDOT": _0x4e79f3,
        OZYDOT: _0x129ce6,
        "Pastels": _0x7d4929
      };
      this.presets = _0x1ff161;
    }
  }
  class _0x40f48a {
    static ["init"]() {
      this.div = _0x14f7b2("#notifications");
      this.duration = 10000;
      this.animDuration = 500;
      this.iconChat = "<i class=\"fa fa-comment\"></i>";
      this.iconAlert = "<i class=\"fa fa-exclamation-circle\"></i>";
      this.iconBell = "<i class=\"fa fa-bell\"></i>";
      this.warningIcon = "<i class=\"fa-solid fa-triangle-exclamation\"></i>";
      this.chatroomdiv = _0x14f7b2("#chatroom");
      this.emojiPath = './';
      this.emojis = {};
      this.displayEmojis();
    }
    static ["displayEmojis"]() {
      const _0x1b6e7b = _0x14f7b2("#emojiContainer");
      for (const _0x2d8c15 in this.emojis) {
        const _0x2d208b = _0x14f7b2("<img src=\"" + (this.emojiPath + this.emojis[_0x2d8c15]) + "\" class=\"emojiPreview\">");
        _0x2d208b.click(() => {
          const _0x5172b4 = _0x14f7b2('#message');
          const _0x2000a8 = _0x5172b4.val();
          _0x5172b4.val(_0x2000a8 + " " + _0x2d8c15);
          _0x59ca82.input.focus();
        });
        _0x1b6e7b.append(_0x2d208b);
      }
    }
    static ['normal'](_0x21b406, _0x579e04) {
      this.chatroom(_0x21b406, _0x579e04, this.iconChat);
      if ('chatroom' !== _0x2cc0f3.chatType) {
        const _0x4e27c7 = "<div><div class=\"normal\">" + this.iconChat + "<span class=\"nick\">" + _0x21b406 + "</span><span class=\"message\">" + this.putEmojis(this.cleanMessage(_0x579e04)) + "</span></div></div>";
        this.append(_0x4e27c7);
      }
    }
    static ["command"](_0x5efb37, _0x3be8a3) {
      this.chatroom(_0x5efb37, _0x3be8a3, this.iconAlert);
      if ('chatroom' !== _0x2cc0f3.chatType) {
        const _0x8b1c84 = "<div><div class=\"command\">" + this.iconAlert + "<span class=\"nick\">" + _0x5efb37 + "</span><span class=\"message\">" + this.cleanMessage(_0x3be8a3) + "</span></div></div>";
        this.append(_0x8b1c84);
      }
    }
    static ["warn"](_0x19cd28, _0x1397c0) {
      this.chatroom(_0x19cd28, _0x1397c0, this.warningIcon);
      if ("chatroom" !== _0x2cc0f3.chatType) {
        const _0x2feb56 = "<div><div class=\"alert\">" + this.warningIcon + "<span class=\"nick\">" + _0x19cd28 + "</span><span class=\"message\">" + this.cleanMessage(_0x1397c0) + "</span></div></div>";
        this.append(_0x2feb56);
      }
    }
    static ["alert"](_0x406bca, _0x2b385c) {
      this.chatroom(_0x406bca, _0x2b385c, this.iconBell);
      if ("chatroom" !== _0x2cc0f3.chatType) {
        const _0x164569 = "<div><div class=\"alert\" style=\"direction: ltr;\">" + this.iconBell + "<span class=\"nick\">" + _0x406bca + "</span><span class=\"message\">" + this.cleanMessage(_0x2b385c) + "</span></div></div>";
        this.append(_0x164569);
      }
    }
    static ['append'](_0x270fa2) {
      const _0x3f5e4f = _0x14f7b2(_0x270fa2);
      _0x3f5e4f.slideUp(0);
      _0x3f5e4f.appendTo(this.div);
      _0x3f5e4f.slideDown(this.animDuration);
      setTimeout(() => {
        _0x3f5e4f.slideUp(this.animDuration, () => {
          _0x3f5e4f.remove();
        });
      }, this.duration);
    }
    static ["cleanMessage"](_0x41baf4) {
      return _0x41baf4;
    }
    static ['putEmojis'](_0x4fd165) {
      for (const _0x3d84fc in this.emojis) {
        const _0x1fac9a = new RegExp(_0x3d84fc, 'g');
        _0x4fd165 = _0x4fd165.replace(_0x1fac9a, "<img src=\"" + (this.emojiPath + this.emojis[_0x3d84fc]) + "\">");
      }
      return _0x4fd165;
    }
    static ["chatroom"](_0x577c0f, _0x3e358a, _0x5d23c7) {
      const _0x9dd250 = new Date();
      const _0x3fd098 = _0x9dd250.getHours() + ':' + _0x9dd250.getMinutes();
      this.chatroomdiv.append("<div class=\"chatroom-row\"><span class=\"chattime\">" + _0x3fd098 + "</span> " + _0x5d23c7 + " <span class=\"nick\">" + _0x577c0f + "</span> <span class=\"message\">" + this.putEmojis(this.cleanMessage(_0x3e358a)) + "</span></div>");
      this.chatroomdiv.scrollTop(this.chatroomdiv[0].scrollHeight);
    }
  }
  class _0xa916b {
    static ["init"]() {
      this.list = new Set();
      this.div = _0x14f7b2("#leaderboard-positions")[0];
      this.teamLB = _0x14f7b2("#leaderboard-chart");
      this.teamLBvisible = false;
      this.barsCss = _0x24f9ab.createElement("style");
      _0x24f9ab.head.append(this.barsCss);
    }
    static ['add'](_0x163eb9, _0x45d22b, _0x16dc97, _0x1f5c26, _0x5e4055, _0x3c8584) {
      const _0x215fe4 = {
        "nick": _0x163eb9,
        "position": _0x45d22b,
        isSelf: _0x16dc97,
        account: _0x5e4055,
        "isFriend": _0x1f5c26,
        "mass": _0x3c8584 || 0
      };
      this.list.add(_0x215fe4);
    }
    static ['team'](_0x1a4e06, _0x23d577, _0x78ac64) {
      if (!this.teamLBvisible) {
        this.teamLB.show();
        this.div.innerHTML = '';
        this.teamLBvisible = true;
      }
      this.barsCss.innerText = ".chart-bar.red { width: " + (0 | 150 * _0x1a4e06) + "px } .chart-bar.green { width: " + (0 | 150 * _0x23d577) + "px } .chart-bar.blue { width: " + (0 | 150 * _0x78ac64) + "px }";
    }
    static ['clear']() {
      this.list.clear();
    }
    static ["update"]() {
      if (this.teamLBvisible) {
        this.teamLB.hide();
        this.teamLBvisible = false;
      }
      let _0x25ab99 = '';
      for (const _0x5341c7 of this.list.values()) {
        const _0x2d18ff = _0x2cc0f3.showMassInLB === "on" && _0x5341c7.mass > 0 ? " <span class=\"lb-mass\">" + _0x5341c7.mass + "</span>" : "";
        _0x25ab99 += "<span style=\"direction: rtl;\"><strong>" + _0x5341c7.position + "  </strong>" + this.cleanNick(_0x5341c7.nick) + _0x2d18ff + "</span>";
      }
      this.div.innerHTML = _0x25ab99;
    }
    static ["cleanNick"](_0x23f18d) {
      return _0x23f18d.replace(/</g, '(').replace(/>/g, ')').substring(0, 15);
    }
  }
  class _0x5cda9b {
    static ["init"]() {
      this.initted = true;
      this.canvas = _0x14f7b2("#minimap-nodes")[0];
      this.size = _0x480be4.minimapSize;
      this.canvas.width = this.size;
      this.canvas.height = this.size;
      this.pi2 = 2 * Math.PI;
      this.ctx = this.canvas.getContext('2d');
      this.ctx.textAlign = 'center';
      this.ctx.textBaseline = "bottom";
      this.ctx.font = "500 12px ubuntu";
      this.ctx.lineWidth = 2;
      this.selector = 0;
    }
    static ['run']() {
      const _0x46ff1c = this.ctx;
      const _0x145776 = this.size / _0x996564.edge;
      const _0x3f151d = _0xddb6d6.viewBounds;
      _0x46ff1c.clearRect(0, 0, this.size, this.size);
      const _0x3a9422 = _0x480be4.selfViewportAlpha / 10;
      _0x46ff1c.globalAlpha = _0x3a9422;
      _0x46ff1c.fillStyle = _0x480be4.selfViewportColor || "#fff";
      _0x46ff1c.fillRect(0 | (_0x3f151d.left - _0x996564.offset.x + 8000) * _0x145776, 0 | (_0x3f151d.top - _0x996564.offset.y + 8000) * _0x145776, 0 | (_0x3f151d.right - _0x3f151d.left) * _0x145776, 0 | (_0x3f151d.bottom - _0x3f151d.top) * _0x145776);
      _0x46ff1c.globalAlpha = 1;
      if (_0x12ac51.biggestIsOn && (!_0xddb6d6.isSpectating || _0xddb6d6.freeSpectate)) {
        _0x12ac51.biggest.animate();
        const _0x10ec1e = _0x12ac51.biggest.mapX;
        const _0x28b9b8 = _0x12ac51.biggest.mapY;
        const _0x24b0cd = _0x480be4.topViewportAlpha / 10;
        _0x46ff1c.beginPath();
        _0x46ff1c.arc(_0x10ec1e, _0x28b9b8, 7, 0, this.pi2, false);
        _0x46ff1c.closePath();
        _0x46ff1c.fillStyle = _0x480be4.topViewportColor || "#fff";
        _0x46ff1c.globalAlpha = _0x24b0cd;
        _0x46ff1c.fill();
        _0x46ff1c.globalAlpha = 1;
        _0x46ff1c.stroke();
        _0x46ff1c.fillText(_0x59f59a.current.huds.num1position || "#1 position", _0x10ec1e, _0x28b9b8 - 8);
      }
      _0x46ff1c.strokeStyle = _0x480be4.ghostColor || "#666";
      const _0x524787 = (8000 - _0x996564.offset.x + _0x90a1a7.deathLocation.x) * _0x145776;
      const _0x31e116 = (8000 - _0x996564.offset.y + _0x90a1a7.deathLocation.y) * _0x145776;
      _0x46ff1c.beginPath();
      _0x46ff1c.moveTo(_0x524787 - 4, _0x31e116 - 4);
      _0x46ff1c.lineTo(_0x524787 + 4, _0x31e116 + 4);
      _0x46ff1c.moveTo(_0x524787 - 4, _0x31e116 + 4);
      _0x46ff1c.lineTo(_0x524787 + 4, _0x31e116 - 4);
      _0x46ff1c.closePath();
      _0x46ff1c.stroke();
      _0x46ff1c.strokeStyle = "rgba(51, 51, 51, 0.5)";
      const _0x3a9e37 = (8000 - _0x996564.offset.x + _0xddb6d6.x) * _0x145776;
      const _0x192baa = (8000 - _0x996564.offset.y + _0xddb6d6.y) * _0x145776;
      const _0x26be95 = _0x90a1a7.isAlive ? 4 : 7;
      _0x46ff1c.beginPath();
      _0x46ff1c.arc(_0x3a9e37, _0x192baa, _0x26be95, 0, this.pi2, false);
      _0x46ff1c.closePath();
      _0x46ff1c.fillStyle = _0x480be4.selfColor || "#fff";
      _0x46ff1c.fill();
      _0x46ff1c.stroke();
      if (_0x12ac51.isSpectator) {
        this.teamMinimap();
      } else {
        this.normalMinimap();
      }
    }
    static ["teamMinimap"]() {
      const _0x5db847 = this.ctx;
      _0x5db847.textAlign = "center";
      _0x5db847.textBaseline = "bottom";
      for (const _0x3f6db4 of _0x12ac51.teamPlayers.values()) if (_0x3f6db4.isAlive && (!this.selector || this.selector === _0x3f6db4.team)) {
        _0x3f6db4.animate();
        const _0x37e58c = _0x3f6db4.mapX;
        const _0x5936f8 = _0x3f6db4.mapY;
        _0x5db847.beginPath();
        _0x5db847.arc(_0x37e58c, _0x5936f8, 5, 0, this.pi2, false);
        _0x5db847.closePath();
        if (0 < _0x3f6db4.nick.length) {
          _0x5db847.fillStyle = _0x480be4.teammateNameColor || "#fff";
          _0x5db847.fillText(_0x3f6db4.nick, _0x37e58c, _0x5936f8 - 6);
        }
        _0x5db847.fillStyle = 1 === _0x3f6db4.team ? _0x480be4.team1color : _0x480be4.team2color;
        _0x5db847.fill();
        _0x5db847.stroke();
      }
    }
    static ["normalMinimap"]() {
      const _0x121e2c = this.ctx;
      _0x121e2c.textAlign = "center";
      _0x121e2c.textBaseline = "bottom";
      _0x121e2c.beginPath();
      for (const _0x477434 of _0x12ac51.teamPlayers.values()) if (_0x477434.isAlive) {
        _0x477434.animate();
        const _0x15a5b7 = _0x477434.mapX;
        const _0x119d6b = _0x477434.mapY;
        _0x121e2c.moveTo(_0x15a5b7 + 5, _0x119d6b);
        _0x121e2c.arc(_0x15a5b7, _0x119d6b, 5, 0, this.pi2, false);
        if (0 < _0x477434.nick.length) {
          _0x121e2c.fillStyle = _0x480be4.teammateNameColor || "#fff";
          _0x121e2c.fillText(_0x477434.nick, _0x15a5b7, _0x119d6b - 6);
        }
      }
      _0x121e2c.closePath();
      _0x121e2c.fillStyle = _0x480be4.teammateColor || "#555";
      _0x121e2c.fill();
    }
  }
  class _0x2a0c5c {
    static ["init"]() {
      this.lastUpdateTime = 0;
      this.totalmass = 0;
      this.alive = 0;
      this.spectate = 0;
      this.html = '';
      this.temporaryArray = [];
      this.div = {
        'positions': _0x14f7b2("#teamlist-positions")[0],
        'alive': _0x14f7b2("#teamlist-alive span")[0],
        'spectate': _0x14f7b2("#teamlist-spectate span")[0],
        'totalmass': _0x14f7b2("#teamlist-totalmass span")[0]
      };
      this.divTeam1 = {
        'alive': _0x14f7b2("#teamlist-alive1 span")[0],
        'spectate': _0x14f7b2("#teamlist-spectate1 span")[0],
        'totalmass': _0x14f7b2("#teamlist-totalmass1 span")[0]
      };
      this.divTeam2 = {
        'alive': _0x14f7b2("#teamlist-alive2 span")[0],
        'spectate': _0x14f7b2("#teamlist-spectate2 span")[0],
        'totalmass': _0x14f7b2("#teamlist-totalmass2 span")[0]
      };
      this.teamVsBar = _0x14f7b2(".team-vs-bar-inner");
      this.teamVsBarStyle = _0x24f9ab.getElementsByClassName("team-vs-bar")[0].style;
      this.teamVsBarInnerStyle = _0x24f9ab.getElementsByClassName("team-vs-bar-inner")[0].style;
    }
    static ["update"]() {
      if (1000 < _0xb45f1b.time - this.lastUpdateTime) {
        this.lastUpdateTime = _0xb45f1b.time;
        if (_0x12ac51.isSpectator) {
          this.updateVs();
        }
        this.generateList();
        this.div.positions.innerHTML = this.html;
        this.div.alive.innerHTML = this.alive;
        this.div.spectate.innerHTML = this.spectate;
        this.div.totalmass.innerHTML = this.totalmass;
        this.reset();
      }
    }
    static ["generateList"]() {
      _0x12ac51.teamPlayers.forEach(_0x152fdf => {
        if (_0x152fdf.isAlive) {
          this.totalmass += _0x152fdf.mass;
          this.temporaryArray.push(_0x152fdf);
          this.alive++;
        } else {
          this.spectate++;
        }
      });
      this.temporaryArray.sort((_0x510cd4, _0x4fd9f1) => _0x4fd9f1.mass - _0x510cd4.mass);
      this.temporaryArray.splice(5);
      if (!_0x12ac51.isSpectator) {
        if (_0x90a1a7.isAlive) {
          this.totalmass += _0x90a1a7.mass;
          this.temporaryArray.push(_0x90a1a7);
          this.alive++;
        } else {
          this.spectate++;
        }
      }
      for (let _0x1f17de = 0; _0x1f17de < this.temporaryArray.length; _0x1f17de++) {
        const _0x5dca94 = this.temporaryArray[_0x1f17de];
        this.addPlayer(_0x5dca94);
      }
    }
    static ["addPlayer"](_0x4d2819) {
      const _0x240f85 = 100 * _0x4d2819.mass / this.totalmass;
      this.html += "<div class=\"tl-player\"><div class=\"tl-player-mass\">" + _0x4d2819.mass + "</div><div class=\"tl-player-nick\">" + this.cleanNick(_0x4d2819.nick) + "</div><div class=\"tl-player-massbar\"><div class=\"tl-player-massbar-inner\" style=\"width: " + (0 | _0x240f85) + "%;\"></div></div></div>";
    }
    static ["updateVs"]() {
      const _0x141b95 = _0x12ac51.teamData;
      let _0x24dbe5 = _0x141b95[1].totalMass / (_0x141b95[1].totalMass + _0x141b95[2].totalMass) * 100;
      if (0 === _0x141b95[1].totalMass && 0 === _0x141b95[2].totalMass) {
        _0x24dbe5 = 50;
      }
      this.teamVsBar.css("width", (0 | _0x24dbe5) + '%');
      this.divTeam1.alive.innerHTML = _0x141b95[1].alive;
      this.divTeam1.spectate.innerHTML = _0x141b95[1].spectate;
      this.divTeam1.totalmass.innerHTML = _0x141b95[1].totalMass;
      this.divTeam2.alive.innerHTML = _0x141b95[2].alive;
      this.divTeam2.spectate.innerHTML = _0x141b95[2].spectate;
      this.divTeam2.totalmass.innerHTML = _0x141b95[2].totalMass;
      this.teamVsBarStyle.background = _0x480be4.team2color;
      this.teamVsBarInnerStyle.background = _0x480be4.team1color;
    }
    static ["reset"]() {
      this.totalmass = 0;
      this.alive = 0;
      this.spectate = 0;
      this.temporaryArray = [];
      this.html = '';
    }
    static ["cleanNick"](_0x2cbbe4) {
      return _0x2cbbe4.replace(/</g, '(').replace(/>/g, ')');
    }
  }
  class _0x59ca82 {
    static ["init"]() {
      this.containerType = null;
      this.container = _0x14f7b2("#message-hud");
      this.input = _0x14f7b2("#message");
      this.isOpened = false;
      this.isFocused = false;
      this.input.blur(() => {
        this.isFocused = false;
      });
      this.input.focus(() => {
        this.isFocused = true;
      });
      this.chatroom = _0x14f7b2("#chatroom");
      this.chatroom.perfectScrollbar();
    }
    static ["enter"](_0x2cf121) {
      if (this.isOpened) {
        if (this.isFocused) {
          this.containerType = this.input.attr("type");
          let _0x5ba76e = this.input.val();
          if (0 < _0x5ba76e.length && 100 < _0x5ba76e.length) {
            _0x5ba76e = _0x5ba76e.substring(0, 100);
          }
          if (1 == this.containerType) {
            _0x302a2c.chat(_0x5ba76e);
          } else if (2 == this.containerType) {
            _0x2d5cce.chat(1, _0x5ba76e);
          }
          this.input.val('');
          this.input.blur();
          this.container.hide();
          this.isOpened = false;
        } else {
          this.input.focus();
        }
      } else {
        this.container.show();
        this.isOpened = true;
        this.input.focus();
        this.input.attr("type", _0x2cf121);
      }
    }
  }
  class _0x9547b4 {
    static ["init"]() {
      this.fpsCount = 0;
      this.lastUpdateTime = 0;
      this.div = _0x14f7b2('#stats-hud')[0];
      this.lockClosed = "<i class=\"fa fa-lock\"></i>";
      this.lockOpened = "<i class=\"fa fa-unlock-alt\"></i>";
      this.speedometer = "<i class=\"fa fa-tachometer\"></i>";
      this.iconPause = "<i class=\"fa fa-pause-circle\"></i>";
    }
    static ["update"]() {
      this.fpsCount++;
      if (1000 < _0xb45f1b.time - this.lastUpdateTime) {
        this.lastUpdateTime = _0xb45f1b.time;
        this.refresh();
      }
    }
    static ["refresh"]() {
      let _0x5be063 = '';
      _0x5be063 += this.fps;
      if (_0x90a1a7.isAlive) {
        _0x5be063 += this.score + this.n64 + this.STE + this.speed;
      }
      _0x5be063 += this.PIO + this.paused + this.zoomLock;
      this.div.innerHTML = _0x5be063;
    }
    static get ["zoomLock"]() {
      return 'on' === _0x2cc0f3.autoZoom ? this.lockClosed : this.lockOpened;
    }
    static get ["score"]() {
      return (_0x59f59a.current.huds.score || "Score") + ": " + _0x90a1a7.score + "   ";
    }
    static get ["n64"]() {
      return '[' + _0x90a1a7.pieceCount + "/64] ";
    }
    static get ["STE"]() {
      const _0x275cde = _0x90a1a7.biggestPieceMass;
      return 35 < _0x275cde ? "STE: " + (0 | _0x275cde * (1000 > _0x275cde ? 0.35 : 0.38)) + "   " : '';
    }
    static get ["speed"]() {
      _0x90a1a7.animSpeed += (_0x90a1a7.speed - _0x90a1a7.animSpeed) / 3;
      _0x90a1a7.speed = 0;
      return this.speedometer + " " + (0 | _0x90a1a7.animSpeed) + "px/s   ";
    }
    static get ['PIO']() {
      const _0x4c04ff = _0x18a8d1.packetCount['in'];
      const _0x56e980 = _0x18a8d1.packetCount.out;
      _0x18a8d1.packetCount['in'] = 0;
      _0x18a8d1.packetCount.out = 0;
      return "PIO: " + _0x4c04ff + '|' + _0x56e980 + " ";
    }
    static get ['paused']() {
      return _0x90a1a7.movementPaused ? '[' + this.iconPause + " " + (_0x59f59a.current.huds.paused || "Paused") + "]   " : '';
    }
    static get ["fps"]() {
      const _0x29b3a1 = this.fpsCount;
      this.fpsCount = 0;
      return "FPS: " + _0x29b3a1 + "   ";
    }
  }
  class _0x3a43e7 {
    static ["init"]() {
      this.container = _0x14f7b2("#targeting-hud");
      this.DIVno1viewport = _0x14f7b2("#targeting-no-1");
      this.DIVmouse = _0x14f7b2("#targeting-mouse");
      this.DIVplayers = _0x14f7b2("#targeting-players");
      this.DIVtotalMass = _0x14f7b2("#targeting-playersMass span.mass")[0];
      this.DIVplayer1 = {
        'nick': _0x14f7b2("#targeting-player1 span.nick")[0],
        'mass': _0x14f7b2("#targeting-player1 span.mass")[0]
      };
      this.DIVplayer2 = {
        'nick': _0x14f7b2("#targeting-player2 span.nick")[0],
        'mass': _0x14f7b2("#targeting-player2 span.mass")[0]
      };
      this.lastTime = _0xb45f1b.time;
    }
    static ["update"]() {
      if (!(1000 > _0xb45f1b.time - this.lastTime) && (this.lastTime = _0xb45f1b.time, _0xddb6d6.freeSpectate && _0x3a83be.isTurnedOn)) {
        let _0x37ad91 = 0;
        if (_0x3a83be.target1.turnedOn) {
          this.DIVplayer1.nick.innerHTML = _0x3a83be.target1.nick;
          this.DIVplayer1.mass.innerHTML = _0x3a83be.target1.outOfView ? "OUT OF VIEW" : _0x3a83be.target1.mass;
          _0x37ad91 += _0x3a83be.target1.outOfView ? 0 : _0x3a83be.target1.mass;
        } else {
          this.DIVplayer1.nick.innerHTML = "Target 1";
          this.DIVplayer1.mass.innerHTML = "NOT SELECTED";
        }
        if (_0x3a83be.target2.turnedOn) {
          this.DIVplayer2.nick.innerHTML = _0x3a83be.target2.nick;
          this.DIVplayer2.mass.innerHTML = _0x3a83be.target2.outOfView ? "OUT OF VIEW" : _0x3a83be.target2.mass;
          _0x37ad91 += _0x3a83be.target2.outOfView ? 0 : _0x3a83be.target2.mass;
        } else {
          this.DIVplayer2.nick.innerHTML = "Target 2";
          this.DIVplayer2.mass.innerHTML = "NOT SELECTED";
        }
        this.DIVtotalMass.innerHTML = _0x37ad91;
      }
    }
    static ["show"]() {
      this.container.show();
    }
    static ["hide"]() {
      this.container.hide();
    }
    static ["topViewport"]() {
      this.DIVno1viewport.show();
      this.DIVmouse.hide();
      this.DIVplayers.hide();
      _0x14f7b2("#spectate-mode-top").addClass("active");
      _0x14f7b2("#spectate-mode-mouse").removeClass("active");
      _0x14f7b2("#spectate-mode-target").removeClass("active");
    }
    static ["mouseViewport"]() {
      this.DIVmouse.show();
      this.DIVno1viewport.hide();
      this.DIVplayers.hide();
      _0x14f7b2("#spectate-mode-top").removeClass("active");
      _0x14f7b2("#spectate-mode-mouse").addClass("active");
      _0x14f7b2("#spectate-mode-target").removeClass("active");
    }
    static ["targetMode"]() {
      this.DIVplayers.show();
      this.DIVmouse.hide();
      this.DIVno1viewport.hide();
      _0x14f7b2("#spectate-mode-top").removeClass("active");
      _0x14f7b2("#spectate-mode-mouse").removeClass("active");
      _0x14f7b2("#spectate-mode-target").addClass("active");
    }
  }
  class _0x31c9b4 {
    static ["init"]() {
      _0x40f48a.init();
      _0x2cc0f3.init();
      _0x49cc31.init();
      _0x50f0c6.init();
      _0x77d3cd.init();
      _0x480be4.init();
      _0xa916b.init();
      _0x5cda9b.init();
      _0x2a0c5c.init();
      _0x59ca82.init();
      _0x9547b4.init();
      _0x3a43e7.init();
      this.isOpened = true;
      this.gMode = ":party";
      this.div = _0x14f7b2("#menu-overlay");
      this.streammode = !_0x19d5af.get("extras", "streammode");
      this.toggleStreammode();
      this.buttons();
    }
    static ["buttons"]() {
      _0x14f7b2("#button-settings").click(() => {
        this.closeSubMenus();
        _0x2cc0f3.toggle();
      });
      _0x14f7b2("#button-play").click(() => {
        this.play();
      });
      _0x14f7b2("#button-spectate").click(() => {
        _0x302a2c.spectate();
        this.close();
      });
      _0x14f7b2("#button-inputs").click(() => {
        this.closeSubMenus();
        _0x49cc31.toggle();
      });
      _0x14f7b2("#button-theme").click(() => {
        this.closeSubMenus();
        _0x480be4.toggle();
      });
      _0x14f7b2("#normal-tag").click(() => {
        this.normalTag();
      });
      _0x14f7b2("#minimap-show-1").click(() => {
        _0x14f7b2("#minimap-show-" + _0x5cda9b.selector).removeClass("active");
        _0x14f7b2("#minimap-show-1").addClass('active');
        _0x5cda9b.selector = 1;
      });
      _0x14f7b2("#minimap-show-2").click(() => {
        _0x14f7b2("#minimap-show-" + _0x5cda9b.selector).removeClass("active");
        _0x14f7b2("#minimap-show-2").addClass("active");
        _0x5cda9b.selector = 2;
      });
      _0x14f7b2("#minimap-show-0").click(() => {
        _0x14f7b2("#minimap-show-" + _0x5cda9b.selector).removeClass('active');
        _0x14f7b2("#minimap-show-0").addClass("active");
        _0x5cda9b.selector = 0;
      });
      _0x14f7b2("#streamMode").click(() => {
        this.toggleStreammode();
      });
      _0x14f7b2("#spectate-mode-top").click(() => {
        this.spectateModeTop();
      });
      _0x14f7b2("#spectate-mode-mouse").click(() => {
        this.spectateModeMouse();
      });
      _0x14f7b2("#spectate-mode-target").click(() => {
        this.spectateModeTarget();
      });
      if (!_0x19d5af.get("extras", "openedChangelog")) {
        _0x14f7b2('#changelog').addClass("active");
      }
      _0x14f7b2('#changelog').click(() => {
        _0x19d5af.set('extras', "openedChangelog", true);
        _0x14f7b2("#changelog").removeClass("active");
      });
    }
    static ['doubleTag']() {
      _0x14f7b2("#double-tag").addClass("active-tag");
      _0x14f7b2("#normal-tag").removeClass('active-tag');
      _0x14f7b2("#tag2").show();
      _0x14f7b2('#nick').css("width", "189px");
      _0x14f7b2("#teams-vs").show();
      _0x14f7b2("#info-tp").hide();
      _0x12ac51.isSpectator = true;
      _0x2d5cce.spectator(true);
      _0x14f7b2(".minimap-button").each(function () {
        _0x14f7b2(this).show();
      });
    }
    static ["normalTag"]() {
      _0x14f7b2("#normal-tag").addClass("active-tag");
      _0x14f7b2("#double-tag").removeClass('active-tag');
      _0x14f7b2('#tag2').hide();
      _0x14f7b2("#nick").css("width", "45px");
      _0x14f7b2("#teams-vs").hide();
      _0x14f7b2("#info-tp").show();
      _0x2d5cce.spectator(false);
      _0x12ac51.isSpectator = false;
      _0x14f7b2(".minimap-button").each(function () {
        _0x14f7b2(this).hide();
      });
    }
    static ["play"]() {
      this.close();
      _0x302a2c.spawn();
    }
    static ["closeSubMenus"]() {
      _0x49cc31.close();
      _0x2cc0f3.close();
      _0x480be4.close();
    }
    static ["toggle"]() {
      if (this.isOpened) {
        this.close();
      } else {
        this.open();
      }
    }
    static ["close"]() {
      this.isOpened = false;
      this.div.fadeOut(250);
      _0x14f7b2("#leaderboard-hud").css('top', "-2px");
      _0x14f7b2("#teamlist-hud").css("top", "10px");
      _0x14f7b2(".menu-bar").slideUp(250);
      _0x14f7b2("#targeting-hud").css("top", "0px");
    }
    static ['open']() {
      this.isOpened = true;
      this.div.fadeIn(250);
      _0x14f7b2("#leaderboard-hud").css("top", "-2px");
      _0x14f7b2("#teamlist-hud").css("top", "10px");
      _0x14f7b2(".menu-bar").slideDown(250);
      _0x14f7b2("#targeting-hud").css("top", "0px");
    }
    static ["toggleStreammode"]() {
      if (this.streammode) {
        _0x14f7b2("#nick, #tag, #tag2").removeClass("input-hidden");
        _0x14f7b2("#streamMode").html("<i class=\"fa fa-eye fa-fw\"></i>");
        this.streammode = false;
        _0x19d5af.set('extras', "streammode", this.streammode);
      } else {
        _0x14f7b2("#nick, #tag, #tag2").addClass("input-hidden");
        _0x14f7b2("#streamMode").html("<i class=\"fa fa-eye-slash fa-fw\"></i>");
        this.streammode = true;
        _0x19d5af.set("extras", "streammode", this.streammode);
      }
    }
    static ["spectateModeTop"]() {
      if (!_0x90a1a7.isAlive && _0xddb6d6.isSpectating && _0xddb6d6.freeSpectate) {
        _0x3a43e7.topViewport();
        _0x302a2c.freeSpectate();
      }
    }
    static ["spectateModeMouse"]() {
      if (!(_0x90a1a7.isAlive || !_0xddb6d6.isSpectating || _0xddb6d6.freeSpectate && !_0x3a83be.isTurnedOn)) {
        if (_0x3a83be.isTurnedOn) {
          _0x3a83be.target1.turnedOn = false;
          _0x3a83be.target2.turnedOn = false;
          _0x3a43e7.mouseViewport();
        } else {
          _0x302a2c.freeSpectate();
          _0x3a43e7.mouseViewport();
        }
      }
    }
    static ["spectateModeTarget"]() {
      if ('on' === _0x2cc0f3.targeting) {
        _0x40f48a.command("Multibox", _0x59f59a.current.notif.targeting_on);
      } else {
        _0x40f48a.command('Multibox', _0x59f59a.current.notif.targeting_off);
      }
    }
  }
  class _0x14d4a3 {
    static ["init"]() {
      const _0x4fa31c = {
        left: 0x0,
        "top": 0x0,
        "right": 0x0,
        "bottom": 0x0
      };
      this.cells = new Map();
      this.cells2 = new Map();
      this.myCellsIDs = new Set();
      this.myCellsIDs2 = new Set();
      this.myCells = new Map();
      this.myCells2 = new Map();
      this.sortedCells = [];
      this.food = [];
      this.cellsPositions = _0x4fa31c;
    }
    static ["update"]() {
      this.positions();
      this.food = [];
      this.sortedCells = [];
      this.cells.forEach((_0x15abc5, _0x1eb010) => {
        this.cellsPos(_0x15abc5);
        if (_0x15abc5.fadeStartTime && 1 < (_0xb45f1b.time - _0x15abc5.fadeStartTime) / _0x2cc0f3.CellAnimation) {
          this.cells["delete"](_0x1eb010);
        } else if (this.isInView(_0x15abc5) && _0x15abc5.worldID !== _0x90a1a7.worldID2) {
          if (_0x15abc5.isFood) {
            this.food.push(_0x15abc5);
          } else {
            this.sortedCells.push(_0x15abc5);
          }
        }
      });
      this.cells2.forEach((_0x5c7000, _0x3f3aaf) => {
        if (_0x5c7000.fadeStartTime && 1 < (_0xb45f1b.time - _0x5c7000.fadeStartTime) / _0x2cc0f3.CellAnimation) {
          this.cells2['delete'](_0x3f3aaf);
        } else if (!(!this.isInView(_0x5c7000) || !_0x5c7000.isMine && this.check(_0x5c7000))) {
          if (_0x5c7000.isFood) {
            this.food.push(_0x5c7000);
          } else {
            this.sortedCells.push(_0x5c7000);
          }
        }
      });
      this.sortedCells.sort((_0x424a64, _0x58f7ba) => {
        const _0x55c3fe = _0x424a64.animRadius;
        const _0x403ea8 = _0x58f7ba.animRadius;
        return _0x55c3fe === _0x403ea8 ? _0x58f7ba.id - _0x424a64.id : _0x55c3fe - _0x403ea8;
      });
    }
    static ['getCell'](_0x3f80e7, _0xeb4927) {
      return (1 === _0xeb4927 ? this.cells : this.cells2).get(_0x3f80e7) || this.addCell(_0x3f80e7, _0xeb4927);
    }
    static ['addCell'](_0x413407, _0x5549f4) {
      const _0x71aec9 = 1 === _0x5549f4 ? this.cells : this.cells2;
      const _0x267674 = new _0x3b109c(_0x413407, _0x5549f4);
      _0x71aec9.set(_0x413407, _0x267674);
      this.myCellCheck(_0x413407, _0x267674, _0x5549f4);
      return _0x267674;
    }
    static ["myCellCheck"](_0x1bed1b, _0x3ec24e, _0x5afc32) {
      const _0x48358c = 1 === _0x5afc32 ? this.myCellsIDs : this.myCellsIDs2;
      const _0x27f603 = 1 === _0x5afc32 ? this.myCells : this.myCells2;
      if (_0x48358c.has(_0x1bed1b)) {
        _0x27f603.set(_0x1bed1b, _0x3ec24e);
        _0x48358c["delete"](_0x1bed1b);
        _0x3ec24e.isMine = true;
        _0x3ec24e.nick = _0x90a1a7.nick;
      }
    }
    static ["eatCell"](_0x5cbea9, _0x65a01d, _0x66ed43) {
      const _0x1abf73 = 1 === _0x66ed43 ? this.cells : this.cells2;
      const _0x3c8d5e = 1 === _0x66ed43 ? this.myCells : this.myCells2;
      const _0x4d8937 = _0x1abf73.get(_0x65a01d);
      const _0x77c0b5 = _0x1abf73.get(_0x5cbea9);
      if (_0x4d8937 && _0x77c0b5) {
        _0x4d8937.x = _0x77c0b5.x;
        _0x4d8937.y = _0x77c0b5.y;
        _0x4d8937.radius = _0x4d8937.animRadius;
        _0x4d8937.fadeStartTime = _0xb45f1b.time;
        _0x4d8937.lastUpdateTime = _0xb45f1b.time;
        if (_0x4d8937.isMine) {
          _0x3c8d5e["delete"](_0x65a01d);
        }
        _0x1abf73["delete"](_0x65a01d);
        if (!_0x4d8937.isFood) {
          _0x1abf73.set(_0x65a01d + ":removed", _0x4d8937);
        }
      }
    }
    static ['removeCell'](_0x139992, _0x28ebac) {
      const _0x1641c3 = 1 === _0x28ebac ? this.cells : this.cells2;
      const _0x75cd3c = 1 === _0x28ebac ? this.myCells : this.myCells2;
      const _0x2d052b = _0x1641c3.get(_0x139992);
      if (_0x2d052b) {
        if (_0x2d052b.isMine) {
          _0x75cd3c["delete"](_0x139992);
        }
        _0x1641c3["delete"](_0x139992);
        if (!(_0x2d052b.isFood || 'on' !== _0x2cc0f3.eatAnimation)) {
          _0x2d052b.fadeStartTime = _0xb45f1b.time;
          _0x1641c3.set(_0x139992 + ":removed", _0x2d052b);
        }
      }
    }
    static ['isInView'](_0x519429) {
      const _0x106585 = {
        x: 0x0,
        y: 0x0
      };
      const _0x1b6a0e = 2 === _0x519429.cellType ? _0x996564.position : _0x106585;
      const _0x2b674d = _0xddb6d6.viewBounds;
      return !(_0x519429.animX - _0x1b6a0e.x + _0x519429.animRadius < _0x2b674d.left || _0x519429.animX - _0x1b6a0e.x - _0x519429.animRadius > _0x2b674d.right || _0x519429.animY - _0x1b6a0e.y + _0x519429.animRadius < _0x2b674d.top || _0x519429.animY - _0x1b6a0e.y - _0x519429.animRadius > _0x2b674d.bottom);
    }
    static ["positions"]() {
      _0x14d4a3.cells.forEach((_0x5d98d5, _0x5a8733) => {
        this.cellsPositions.left = _0x5d98d5.x;
        this.cellsPositions.right = _0x5d98d5.x;
        this.cellsPositions.top = _0x5d98d5.y;
        this.cellsPositions.bottom = _0x5d98d5.y;
      });
    }
    static ["cellsPos"](_0x2be956) {
      if (this.cellsPositions.left > _0x2be956.x + _0x2be956.radius) {
        this.cellsPositions.left = _0x2be956.x + _0x2be956.radius;
      }
      if (this.cellsPositions.right < _0x2be956.x - _0x2be956.radius) {
        this.cellsPositions.right = _0x2be956.x - _0x2be956.radius;
      }
      if (this.cellsPositions.top > _0x2be956.y + _0x2be956.radius) {
        this.cellsPositions.top = _0x2be956.y + _0x2be956.radius;
      }
      if (this.cellsPositions.bottom < _0x2be956.y - _0x2be956.radius) {
        this.cellsPositions.bottom = _0x2be956.y - _0x2be956.radius;
      }
    }
    static ["check"](_0x199e69) {
      const _0x59e2b4 = _0x996564.position;
      const _0x208e66 = _0x199e69.x - _0x59e2b4.x;
      const _0x340ab6 = _0x199e69.y - _0x59e2b4.y;
      const _0x5df441 = this.cellsPositions;
      return !(_0x208e66 + _0x199e69.radius < _0x5df441.left || _0x208e66 - _0x199e69.radius > _0x5df441.right || _0x340ab6 + _0x199e69.radius < _0x5df441.top || _0x340ab6 - _0x199e69.radius > _0x5df441.bottom);
    }
  }
  class _0x3b109c {
    constructor(_0x46ae80, _0x2a2eaf) {
      const _0x19f55d = {
        r: 0x0,
        g: 0x0,
        b: 0x0
      };
      this.id = _0x46ae80;
      this.x = 0;
      this.y = 0;
      this.radius = 0;
      this.colorObject = _0x19f55d;
      this.colorHex = "#555";
      this.skin = '';
      this.skinCode = 0;
      this._nick = '';
      this.isMine = false;
      this.isFood = false;
      this.isEjected = false;
      this.isVirus = false;
      this.isFriend = false;
      this.account = '';
      this.cellType = _0x2a2eaf;

      this.animX = 0;
      this.animY = 0;
      this.animRadius = 0;
      this.lastUpdateTime = 0;
      this.fadeStartTime = 0;
    }
    set ['nick'](_0x310872) {
      if (!_0x310872) {
        return;
      }
      this._nick = _0x310872;
      const _0x507157 = _0x310872.indexOf("");
      if (0 <= _0x507157 && _0x310872.length >= _0x507157 + 1) {
        const _0x1d8d8e = _0x310872.charCodeAt(_0x507157 + 1);
        if (12000 < _0x1d8d8e) {
          this.skinCode = _0x1d8d8e;
        }
      }
    }
    get ["nick"]() {
      return this._nick;
    }
    get ["mass"]() {
      return 0 | this.animRadius * this.animRadius / 100;
    }
    get ['staticMass']() {
      return 0 | this.radius * this.radius / 100;
    }
    ["setColor"](_0x2874b8, _0x53537a, _0x270a0f) {
      this.colorObject.r = _0x2874b8;
      this.colorObject.g = _0x53537a;
      this.colorObject.b = _0x270a0f;
      this.colorHex = '#' + (16777216 + (_0x2874b8 << 16) + (_0x53537a << 8) + _0x270a0f).toString(16).slice(1);
    }
    ["animate"]() {
      let _0x4ea84a = (_0xb45f1b.time - this.lastUpdateTime) / _0x2cc0f3.CellAnimation;
      _0x4ea84a = 0 > _0x4ea84a ? 0 : 1 < _0x4ea84a ? 1 : _0x4ea84a;
      this.animX = _0x4ea84a * (this.x - this.animX) + this.animX;
      this.animY = _0x4ea84a * (this.y - this.animY) + this.animY;
      this.animRadius = _0x4ea84a * (this.radius - this.animRadius) + this.animRadius;
      this.lastUpdateTime = _0xb45f1b.time;
    }
    get ["worldID"]() {
      let _0x33f29e = this._nick.substring(this._nick.indexOf('}') + 1);
      _0x33f29e = _0x33f29e.replace('%*^', '');
      return ":party" === _0x31c9b4.gMode ? _0x33f29e + this.colorHex : _0x33f29e;
    }
    get ['isUnnamed']() {
      return 1 > this._nick.substring(this._nick.indexOf('}') + 1).length;
    }
  }
  class _0x90a1a7 {
    static ['init']() {
      const _0x75abdd = {
        r: 0x0,
        g: 0x0,
        b: 0x0
      };
      const _0x59bb60 = {
        x: 0x64,
        y: 0x64
      };
      this._nick = _0x14f7b2("#nick").val();
      this._nick2 = _0x14f7b2("#nick2").val();
      this._arbSkin = _0x14f7b2("#arbSkin").val();
      this._skin = _0x386cbc.getImgurCode(_0x14f7b2("#skin").val());
      this._skin2 = _0x386cbc.getImgurCode(_0x14f7b2("#skin2").val());
      this.tag = _0x14f7b2("#tag").val();
      this._colorObject = _0x75abdd;
      this.colorHex = '#000';
      this.colorHex2 = "#000";
      this._isAlive = false;
      this._isAlive2 = false;
      this.isRGB = false;
      this.x = 0;
      this.y = 0;
      this.speed = 0;
      this.animSpeed = 0;
      this.mass = 0;
      this.biggestPieceMass = 0;
      this.score = 0;
      this.movementPaused = false;
      this.deathLocation = _0x59bb60;
      this.type = 1;
    }
    static ["update"]() {
      if (0 < this.pieceCount1) {
        this.playing();
      } else {
        this.dead();
      }
      if (0 < this.pieceCount2) {
        this.playing2();
      } else {
        this.dead2();
      }
      this.updateData();
    }
    static ["playing"]() {
      if (!this._isAlive) {
        this._isAlive = true;
        if (!this._isAlive2) {
          _0x2d5cce.aliveStatus(2);
        }
        for (const _0x305bc5 of _0x14d4a3.myCells.values()) {
          this.colorObject = _0x305bc5.colorObject;
          this.colorHex = _0x305bc5.colorHex;
          break;
        }
        if ('on' === _0x2cc0f3.commander) {
          for (const _0x188d46 of _0x14d4a3.myCells.values()) {
            _0x386cbc.commanderPoints.add({ x: _0x188d46.animX, y: _0x188d46.animY, time: _0xb45f1b.time });
            break;
          }
        }
      }
    }
    static ['playing2']() {
      if (!this._isAlive2) {
        this._isAlive2 = true;
        if (!this._isAlive) {
          _0x2d5cce.aliveStatus(1);
        }
        for (const _0x4e2c94 of _0x14d4a3.myCells2.values()) {
          this.colorHex2 = _0x4e2c94.colorHex;
          break;
        }
        if ('on' === _0x2cc0f3.commander) {
          for (const _0x1c6de9 of _0x14d4a3.myCells2.values()) {
            _0x386cbc.commanderPoints.add({ x: _0x1c6de9.animX, y: _0x1c6de9.animY, time: _0xb45f1b.time });
            break;
          }
        }
      }
    }
    static ["updateData"]() {
      if (this.isAlive) {
        let _0x5ea492 = 0;
        let _0x36957a = 0;
        let _0x228d9b = 0;
        this.mass = 0;
        this.biggestPieceMass = 0;
        if (this._isAlive) {
          for (const _0x18f0e2 of _0x14d4a3.myCells.values()) {
            _0x18f0e2.animate();
            _0x5ea492 += _0x18f0e2.animX / this.pieceCount;
            _0x36957a += _0x18f0e2.animY / this.pieceCount;
            _0x228d9b += _0x18f0e2.animRadius;
            this.mass += _0x18f0e2.staticMass;
            if (this.biggestPieceMass < _0x18f0e2.staticMass) {
              this.biggestPieceMass = _0x18f0e2.staticMass;
            }
          }
        }
        if (this._isAlive2) {
          const _0x4b9250 = _0x996564.position;
          for (const _0x2f5f9b of _0x14d4a3.myCells2.values()) {
            _0x2f5f9b.animate();
            _0x5ea492 += (_0x2f5f9b.animX - _0x4b9250.x) / this.pieceCount;
            _0x36957a += (_0x2f5f9b.animY - _0x4b9250.y) / this.pieceCount;
            _0x228d9b += _0x2f5f9b.animRadius;
            this.mass += _0x2f5f9b.staticMass;
            if (this.biggestPieceMass < _0x2f5f9b.staticMass) {
              this.biggestPieceMass = _0x2f5f9b.staticMass;
            }
          }
        }
        if (!this.movementPaused) {
          const _0x9475df = this.x - _0x5ea492;
          const _0x1b24a7 = this.y - _0x36957a;
          const _0x54e26 = Math.sqrt(_0x9475df * _0x9475df + _0x1b24a7 * _0x1b24a7);
          this.speed += _0x54e26;
          this.x = _0x5ea492;
          this.y = _0x36957a;
        }
        if (this.score < this.mass) {
          this.score = this.mass;
        }
        const _0x346099 = Math.pow(Math.min(64 / _0x228d9b, 1), 0.4);
        const _0x4e3a9e = Math.max(_0x1c478d.innerWidth / 1920, _0x1c478d.innerHeight / 1080);
        _0xddb6d6.autoZoomViewport = _0x346099 * _0x4e3a9e;
      }
    }
    static ["dead"]() {
      if (this._isAlive) {
        this._isAlive = false;
        if (this._isAlive2) {
          this.type = 2;
          _0x302a2c.spectate(1);
        } else {
          this.setInfo();
        }
      }
    }
    static ['dead2']() {
      if (this._isAlive2) {
        this._isAlive2 = false;
        if (this._isAlive) {
          this.type = 1;
          _0x302a2c.spectate(2);
        } else {
          this.setInfo();
        }
      }
    }
    static ["setInfo"]() {
      this.score = 0;
      this.mass = 0;
      this.biggestPieceMass = 0;
      this.movementPaused = false;
      this.deathLocation.x = this.x;
      this.deathLocation.y = this.y;
      this.type = 1;
      _0x31c9b4.open();
    }
    static set ["nick"](_0x4397c5) {
      this._nick = _0x4397c5;
      _0x2d5cce.nick();
    }
    static get ['nick']() {
      return this._nick ? this._nick.substring(0, 15) : '';
    }
    static set ["nick2"](_0x4397c5) {
      this._nick2 = _0x4397c5;
    }
    static get ['nick2']() {
      return this._nick2 ? this._nick2.substring(0, 15) : '';
    }
    static set ["arbSkin"](_0x591f79) {
      this._arbSkin = _0x591f79;
    }
    static get ["arbSkin"]() {
      return this._arbSkin;
    }
    static set ["skin"](_0x1a9370) {
      const _0x5518a5 = _0x386cbc.getImgurCode(_0x1a9370);
      const _0x356638 = _0x386cbc.getRaindowFlag(_0x1a9370);
      return "XXXXXXX" !== _0x5518a5 && _0x5518a5 ? (this.isRGB !== _0x356638 && (this.isRGB = _0x356638, _0x2d5cce.rgbMode()), this._skin = _0x5518a5, void _0x2d5cce.skin()) : void _0x40f48a.alert("Multibox", _0x59f59a.current.notif.invalidSkinUrl);
    }
    static get ['skin']() {
      return this._skin;
    }
    static set ["skin2"](_0x1a9370) {
      const _0x5518a5 = _0x386cbc.getImgurCode(_0x1a9370);
      if ("XXXXXXX" !== _0x5518a5 && _0x5518a5) {
        this._skin2 = _0x5518a5;
      }
    }
    static get ['skin2']() {
      return this._skin2 || '';
    }

    static set ["colorObject"](_0x50d681) {
      this._colorObject.r = _0x50d681.r;
      this._colorObject.g = _0x50d681.g;
      this._colorObject.b = _0x50d681.b;
      _0x2d5cce.color();
    }
    static get ["colorObject"]() {
      return this._colorObject;
    }
    static set ["isAlive"](_0xb726b1) {
      this._isAlive = _0xb726b1;
      _0x2d5cce.aliveStatus(_0xb726b1);
    }
    static get ["isAlive"]() {
      return this._isAlive || this._isAlive2;
    }
    static get ["worldID"]() {
      let _0x28c4c5 = this._nick.substring(this._nick.indexOf('}') + 1);
      _0x28c4c5 = _0x28c4c5.replace('%*^', '');
      return ':party' === _0x31c9b4.gMode ? _0x28c4c5 + this.colorHex : _0x28c4c5;
    }
    static get ["worldID2"]() {
      const _0xsrc = this._nick2 || this._nick;
      let _0x5dbd66 = _0xsrc.substring(_0xsrc.indexOf('}') + 1);
      _0x5dbd66 = _0x5dbd66.replace("%*^", '');
      return ":party" === _0x31c9b4.gMode ? _0x5dbd66 + this.colorHex2 : _0x5dbd66;
    }
    static get ['location']() {
      return _0x996564.getLocation(this.x, this.y);
    }
    static get ["pieceCount1"]() {
      return _0x14d4a3.myCells.size;
    }
    static get ["pieceCount2"]() {
      return _0x14d4a3.myCells2.size;
    }
    static get ['pieceCount']() {
      return this.pieceCount1 + this.pieceCount2;
    }
    static set ["typeID"](_0x131ff6) {
      this.type = _0x131ff6;
    }
    static get ['typeID']() {
      return this.type;
    }
  }
  class _0xb33099 {
    constructor(_0x2c1c34) {
      this.id = _0x2c1c34;
      this.isNew = 2;
      this.x = 90;
      this.y = 90;
      this.isAlive = 0;
      this.mass = 0;
      this.nick = '';
      this.skin = '';
      this.colorHex = '#000';
      this.isRGB = false;
      this.animX = 90;
      this.animY = 90;
      this.timeStamp = _0xb45f1b.time;
      this.team = 1;
    }
    get ["worldID"]() {
      let _0x469bf7 = this.nick.substring(this.nick.indexOf('}') + 1);
      _0x469bf7 = _0x469bf7.replace("%*^", '');
      return ":party" === _0x31c9b4.gMode ? _0x469bf7 + this.colorHex : _0x469bf7;
    }
    get ["location"]() {
      return _0x996564.getLocation(this.x + _0x996564.offset.x, this.y + _0x996564.offset.y);
    }
    ["animate"]() {
      let _0x469008 = (_0xb45f1b.time - this.timeStamp) / 1000;
      _0x469008 = 1 < _0x469008 ? 1 : 0 > _0x469008 ? 0 : _0x469008;
      this.animX += (this.x - this.animX) * _0x469008;
      this.animY += (this.y - this.animY) * _0x469008;
      this.timeStamp = _0xb45f1b.time;
    }
    get ['mapX']() {
      return (this.animX - _0x996564.left) / _0x996564.edge * _0x5cda9b.size;
    }
    get ["mapY"]() {
      return (this.animY - _0x996564.top) / _0x996564.edge * _0x5cda9b.size;
    }
  }
  class _0x996564 {
    static ["init"]() {
      const _0x2ac531 = {
        "left": -8000,
        "top": -8000
      };
      const _0x17032a = {
        x: 0x0,
        y: 0x0
      };
      const _0x2347d8 = {
        x: 0x0,
        y: 0x0
      };
      const _0x21aea0 = {
        x: 0x0,
        y: 0x0
      };
      const _0x5854d6 = {
        x: 0x0,
        y: 0x0
      };
      this.left = -8000;
      this.top = -8000;
      this.right = 8000;
      this.bottom = 8000;
      this.edge = 16000;
      this.botOffset = _0x2ac531;
      this.offset = _0x17032a;
      this.center = _0x2347d8;
      this.offset2 = _0x21aea0;
      this.center2 = _0x5854d6;
      this.focusedAtCenter = false;
    }
    static ["update"](_0x41556a, _0x52a61a, _0x443c5a, _0x2959a4) {
      this.left = _0x41556a;
      this.top = _0x52a61a;
      this.right = _0x443c5a;
      this.edge = this.right - this.left + _0x480be4.borderWidth;
      this.bottom = _0x2959a4;
      this.offset.x = 8000 + _0x41556a;
      this.offset.y = 8000 + _0x52a61a;
      this.center.x = _0x443c5a + _0x41556a >> 1;
      this.center.y = _0x2959a4 + _0x52a61a >> 1;
      if (!this.focusedAtCenter) {
        _0xddb6d6.x = this.center.x;
        _0xddb6d6.y = this.center.y;
        this.focusedAtCenter = true;
      }
    }
    static ["update2"](_0x47093f, _0x17ddf7, _0x4bff61, _0x409379) {
      this.offset2.x = 8000 + _0x47093f;
      this.offset2.y = 8000 + _0x17ddf7;
      this.botOffset.left = _0x47093f;
      this.botOffset.top = _0x17ddf7;
    }
    static ["getLocation"](_0x240562, _0x28bd28) {
      let _0x5115b3 = 0 | (_0x240562 - this.left) / 3199;
      let _0x22399a = 0 | (_0x28bd28 - this.top) / 3199;
      _0x5115b3 = 0 > _0x5115b3 ? 0 : 4 < _0x5115b3 ? 4 : _0x5115b3;
      _0x22399a = 0 > _0x22399a ? 0 : 4 < _0x22399a ? 4 : _0x22399a;
      return String.fromCharCode(65 + _0x22399a) + (_0x5115b3 + 1);
    }
    static get ['position']() {
      this.center2.x = this.offset2.x - this.offset.x;
      this.center2.y = this.offset2.y - this.offset.y;
      return this.center2;
    }
  }
  class _0xddb6d6 {
    static ["init"]() {
      const _0x2eb015 = {
        "left": -960,
        "right": 0x3c0,
        top: -540,
        "bottom": 0x21c
      };
      const _0x49dc4f = {
        x: 0x0,
        y: 0x0
      };
      this.x = 0;
      this.y = 0;
      this.targetViewport = 1;
      this.autoZoomViewport = 1;
      this.viewport = 1;
      this.viewBounds = _0x2eb015;
      this.spectatePoint = _0x49dc4f;
      this._isSpectating = false;
      this._freeSpectate = false;
      _0x3a83be.init();
    }
    static get ["isSpectating"]() {
      return this._isSpectating;
    }
    static get ["freeSpectate"]() {
      return this._freeSpectate;
    }
    static set ["isSpectating"](_0x5841d6) {
      this._isSpectating = _0x5841d6;
      if (!_0x90a1a7.isAlive && _0x5841d6) {
        _0x3a43e7.show();
      } else {
        _0x3a43e7.hide();
      }
    }
    static set ["freeSpectate"](_0x353667) {
      this._freeSpectate = _0x353667;
      if (_0x353667) {
        _0x3a43e7.mouseViewport();
      } else {
        _0x3a43e7.topViewport();
      }
    }
    static ['update']() {
      if (this.isSpectating) {
        _0x3a83be.update();
      }
      this.move();
      this.updateView();
    }
    static ["move"]() {
      if (_0x90a1a7.isAlive) {
        this.x += (_0x90a1a7.x - this.x) / _0x2cc0f3.cameraSpeed;
        this.y += (_0x90a1a7.y - this.y) / _0x2cc0f3.cameraSpeed;
      } else if (this.isSpectating) {
        this.x = (29 * this.x + this.spectatePoint.x) / 30;
        this.y = (29 * this.y + this.spectatePoint.y) / 30;
      }
    }
    static ["updateView"]() {
      let _0x13ea50 = this.targetViewport;
      if ('on' === _0x2cc0f3.autoZoom) {
        _0x13ea50 *= this.autoZoomViewport;
      }
      this.viewport += (_0x13ea50 - this.viewport) / 8;
      const _0x598bd4 = _0x386cbc.canvas.width / 2 / this.viewport;
      const _0x4e8ec2 = _0x386cbc.canvas.height / 2 / this.viewport;
      this.viewBounds.left = Math.max(-_0x598bd4 + this.x, _0x996564.left);
      this.viewBounds.right = Math.min(_0x598bd4 + this.x, _0x996564.right);
      this.viewBounds.top = Math.max(-_0x4e8ec2 + this.y, _0x996564.top);
      this.viewBounds.bottom = Math.min(_0x4e8ec2 + this.y, _0x996564.bottom);
    }
  }
  const _0x34f3bb = new class {
    constructor() {
      this.nickCaches = new Map();
      this.massCaches = new Map();
      this.maxCacheLife = 1000;
      this.massUpdateInterval = 500;
      this.nickShadowCtx = this.newShadowContext();
      this.massShadowCtx = this.newShadowContext();
      this.canvasPool = [];
    }
    ['nick'](_0x18cbda) {
      if (_0x18cbda.isUnnamed || this.isSmall(_0x18cbda)) {
        return false;
      }
      let _0x356a8b = _0x18cbda.nick.substring(_0x18cbda.nick.indexOf('}') + 1) || '';
      const _0x490323 = this.nickCaches.get(_0x356a8b) || this.newNickCache(_0x356a8b);
      _0x490323.lastUsedAt = _0xb45f1b.time;
      const _0x202e61 = 50 > this.getScreenRadius(_0x18cbda.animRadius) ? 0 : 1;
      const _0x420665 = _0x490323.level[_0x202e61];
      if (_0x420665) {
        return _0x420665;
      }
      const _0x128fe2 = this.getNewCanvas();
      const _0x492419 = _0x128fe2.getContext('2d');
      const _0x2d7ae1 = 50 * (_0x202e61 + 1) * _0x480be4.cellNickSize / 100;
      _0x128fe2.height = 0 | 1.2 * _0x2d7ae1;
      _0x128fe2.width = 0 | 1.2 * this.getNickWidth(_0x356a8b, _0x2d7ae1);
      _0x492419.font = "700 " + (0 | _0x2d7ae1) + "px " + _0x480be4.nickFont;
      _0x492419.textBaseline = "middle";
      _0x492419.textAlign = "center";
      if ("normal" === _0x2cc0f3.nickShadow) {
        _0x492419.strokeStyle = _0x480be4.nickStrokeColor;
        _0x492419.lineWidth = 6 * (_0x202e61 + 1);
        _0x492419.strokeText(_0x356a8b, _0x128fe2.width >> 1, _0x128fe2.height >> 1);
      } else {
        if ("performance" === _0x2cc0f3.nickShadow) {
          _0x492419.fillStyle = _0x480be4.nickStrokeColor;
          _0x492419.globalAlpha = 0.75;
          const _0x5cb4c6 = 0 | _0x128fe2.width / 1.2;
          const _0x49dca4 = 0 | _0x128fe2.height / 1.2;
          _0x492419.fillRect(_0x128fe2.width - _0x5cb4c6 >> 1, _0x128fe2.height - _0x49dca4 >> 1, _0x5cb4c6, _0x49dca4);
          _0x492419.globalAlpha = 1;
        }
      }
      _0x492419.fillStyle = _0x480be4.nickColor;
      _0x492419.fillText(_0x356a8b, _0x128fe2.width >> 1, _0x128fe2.height >> 1);
      _0x490323.level[_0x202e61] = _0x128fe2;
      return _0x128fe2;
    }
    ["newNickCache"](_0x564f63) {
      const _0x160ca3 = new _0x58f96a();
      this.nickCaches.set(_0x564f63, _0x160ca3);
      return _0x160ca3;
    }
    ["getNickWidth"](_0x331b74, _0x4c5114) {
      return this.nickShadowCtx.measureText(_0x331b74).width * _0x4c5114 / 50;
    }
    ["setNickCtxFont"]() {
      this.nickCaches.clear();
      this.nickShadowCtx.font = "700 50px " + _0x480be4.nickFont;
    }
    ["mass"](_0x177638) {
      if (!_0x177638.isVirus && this.isSmall(_0x177638)) {
        return false;
      }
      const _0x5d334c = this.massCaches.get(_0x177638.id) || this.newMassCache(_0x177638.id);
      const _0x223d75 = "shortened" === _0x2cc0f3.cellMass && 999 < _0x177638.staticMass ? (0 | _0x177638.staticMass / 100) / 10 + 'k' : _0x177638.staticMass;
      const _0x3968bd = this.getScreenRadius(_0x177638.radius);
      const _0x211b77 = _0x223d75 !== _0x5d334c.lastMass;
      const _0x2c1101 = _0xb45f1b.time - _0x5d334c.lastRenderTime > this.massUpdateInterval;
      const _0x401a53 = 1.2 < _0x3968bd / _0x5d334c.lastScreenRadius || _0x211b77 && _0x2c1101;
      _0x5d334c.lastUsedAt = _0xb45f1b.time;
      if (!_0x401a53 && _0x5d334c.canvas) {
        return _0x5d334c.canvas;
      }
      if (!_0x5d334c.canvas) {
        _0x5d334c.canvas = this.getNewCanvas();
      }
      const _0x4cc465 = _0x5d334c.canvas;
      const _0x15cb06 = _0x4cc465.getContext('2d');
      const _0x400599 = 0 | _0x3968bd / 2 * (_0x480be4.cellMassSize / 100);
      _0x4cc465.height = 0 | 1.2 * _0x400599;
      _0x4cc465.width = 0 | 1.2 * this.getMassWidth(_0x223d75, _0x400599);
      _0x15cb06.font = "700 " + _0x400599 + "px " + _0x480be4.massFont;
      _0x15cb06.textBaseline = "middle";
      _0x15cb06.textAlign = "center";
      if ('normal' === _0x2cc0f3.massShadow) {
        _0x15cb06.strokeStyle = _0x480be4.massStrokeColor;
        _0x15cb06.lineWidth = 6 * _0x400599 / 50;
        _0x15cb06.strokeText(_0x223d75, _0x4cc465.width >> 1, _0x4cc465.height >> 1);
      } else {
        if ("performance" === _0x2cc0f3.massShadow) {
          _0x15cb06.fillStyle = _0x480be4.massStrokeColor;
          _0x15cb06.globalAlpha = 0.75;
          const _0x2d61b7 = 0 | _0x4cc465.width / 1.2;
          const _0x33f6c2 = 0 | _0x4cc465.height / 1.2;
          _0x15cb06.fillRect(_0x4cc465.width - _0x2d61b7 >> 1, _0x4cc465.height - _0x33f6c2 >> 1, _0x2d61b7, _0x33f6c2);
          _0x15cb06.globalAlpha = 1;
        }
      }
      _0x15cb06.fillStyle = _0x480be4.massColor;
      _0x15cb06.fillText(_0x223d75, _0x4cc465.width >> 1, _0x4cc465.height >> 1);
      _0x5d334c.lastMass = _0x223d75;
      _0x5d334c.lastScreenRadius = _0x3968bd;
      _0x5d334c.lastRenderTime = _0xb45f1b.time + _0x5d334c.timeShift;
      return _0x4cc465;
    }
    ["newMassCache"](_0x1286a5) {
      const _0x16f7e8 = new _0x2e97e4();
      this.massCaches.set(_0x1286a5, _0x16f7e8);
      return _0x16f7e8;
    }
    ["getMassWidth"](_0x1a2018, _0x5486b0) {
      return this.massShadowCtx.measureText(_0x1a2018).width * _0x5486b0 / 50;
    }
    ["setMassCtxFont"]() {
      this.massCaches.clear();
      this.massShadowCtx.font = "700 50px " + _0x480be4.massFont;
    }
    ["getScreenRadius"](_0x4669c2) {
      return _0x4669c2 * _0xddb6d6.viewport;
    }
    ["isSmall"](_0x3a934b) {
      return 'on' === _0x2cc0f3.autoHideText && 20 > this.getScreenRadius(_0x3a934b.animRadius);
    }
    ["getNewCanvas"]() {
      return this.canvasPool.shift() || _0x24f9ab.createElement("canvas");
    }
    ["newShadowContext"]() {
      const _0x474b8e = _0x24f9ab.createElement('canvas').getContext('2d');
      _0x474b8e.font = "700 50px ubuntu";
      return _0x474b8e;
    }
    ["cleaner"]() {
      this.nickCaches.forEach((_0xa3f99f, _0x1f0714) => {
        if (_0xb45f1b.time - _0xa3f99f.lastUsedAt > this.maxCacheLife) {
          this.nickCaches["delete"](_0x1f0714);
          if (50 <= this.canvasPool.length) {
            return;
          }
          const _0x27c2f7 = _0xa3f99f.level[0];
          const _0x169356 = _0xa3f99f.level[1];
          if (_0x27c2f7) {
            this.resetCanvas(_0x27c2f7);
            this.canvasPool.push(_0x27c2f7);
          }
          if (_0x169356) {
            this.resetCanvas(_0x169356);
            this.canvasPool.push(_0x169356);
          }
        }
      });
      this.massCaches.forEach((_0x4158e1, _0xf3efc2) => {
        if (_0xb45f1b.time - _0x4158e1.lastUsedAt > this.maxCacheLife) {
          this.massCaches["delete"](_0xf3efc2);
          if (50 <= this.canvasPool.length) {
            return;
          }
          const _0x8b7645 = _0x4158e1.canvas;
          if (_0x8b7645) {
            this.resetCanvas(_0x8b7645);
            this.canvasPool.push(_0x8b7645);
          }
        }
      });
    }
    ["resetCanvas"](_0x1489c8) {
      _0x1489c8.width = 0;
    }
  }();
  class _0x2e97e4 {
    constructor() {
      this.lastUsedAt = _0xb45f1b.time;
      this.timeShift = 0 | Math.random() * _0x34f3bb.massUpdateInterval;
      this.lastMass = 0;
      this.lastScreenRadius = 0;
      this.lastRenderTime = _0xb45f1b.time;
      this.canvas = null;
    }
  }
  class _0x58f96a {
    constructor() {
      this.lastUsedAt = _0xb45f1b.time;
      this.level = [null, null];
    }
  }
  class _0x4c0fb5 {
    static ["render"]() {
      if ("off" !== _0x2cc0f3.food) {
        if ("monoColored" === _0x2cc0f3.food) {
          this.monoColored();
        } else if ('rainbow' === _0x2cc0f3.food) {
          this.rainbow();
        }
      }
    }
    static ["monoColored"]() {
      const _0x35608f = _0x386cbc.ctx;
      const _0xb35fb3 = _0x480be4.foodSize;
      let _0x452dec = _0x14d4a3.food.length;
      _0x35608f.fillStyle = _0x480be4.foodColor;
      for (_0x35608f.beginPath(); _0x452dec--;) {
        const _0x6bc6c7 = {
          x: 0x0,
          y: 0x0
        };
        const _0x105e9e = _0x14d4a3.food[_0x452dec];
        const _0x12f0da = 2 === _0x105e9e.cellType ? _0x996564.position : _0x6bc6c7;
        const _0x3d8a95 = _0x105e9e.animRadius + _0xb35fb3;
        _0x35608f.moveTo(_0x105e9e.animX - _0x12f0da.x + _0x3d8a95, _0x105e9e.animY - _0x12f0da.y);
        _0x35608f.arc(_0x105e9e.animX - _0x12f0da.x, _0x105e9e.animY - _0x12f0da.y, _0x3d8a95, 0, _0x386cbc.pi2, true);
      }
      _0x35608f.closePath();
      _0x35608f.fill();
    }
    static ["rainbow"]() {
      let _0x31b51a = _0x386cbc.ctx;
      let _0x23c062 = _0x480be4.foodSize;
      for (let _0x198238 = _0x14d4a3.food.length; _0x198238--;) {
        const _0x5096a7 = {
          x: 0x0,
          y: 0x0
        };
        const _0x4e1e7f = _0x14d4a3.food[_0x198238];
        const _0x142eae = 2 === _0x4e1e7f.cellType ? _0x996564.position : _0x5096a7;
        const _0x5c6dd3 = _0x4e1e7f.animRadius + _0x23c062;
        _0x31b51a.fillStyle = _0x4e1e7f.colorHex;
        if (2 > _0x5c6dd3 * _0xddb6d6.viewport) {
          _0x31b51a.fillRect(_0x4e1e7f.animX - _0x142eae.x - _0x5c6dd3, _0x4e1e7f.animY - _0x142eae.y - _0x5c6dd3, 2 * _0x5c6dd3, 2 * _0x5c6dd3);
        } else {
          _0x31b51a.beginPath();
          _0x31b51a.arc(_0x4e1e7f.animX - _0x142eae.x, _0x4e1e7f.animY - _0x142eae.y, _0x5c6dd3, 0, _0x386cbc.pi2, true);
          _0x31b51a.closePath();
          _0x31b51a.fill();
        }
      }
    }
  }
  class _0x51fad0 {
    static ["init"]() {
      this.left = 0;
      this.top = 0;
      this.sectorEdge = 0;
      this.edge = 0;
      this.halfSectorEdge = 0;
      this.letters = ['A', 'B', 'C', 'D', 'E'];
      this.visible = new Set();
    }
    static ["render"]() {
      const _0x499cfe = _0x2cc0f3.bgSectors;
      if ("off" !== _0x499cfe) {
        const _0x4a2d38 = _0x386cbc.ctx;
        const _0x5ba8ae = _0x480be4.gridWidth >> 1;
        this.edge = _0x996564.edge - _0x480be4.gridWidth;
        this.left = _0x996564.left + _0x5ba8ae;
        this.top = _0x996564.top + _0x5ba8ae;
        this.sectorEdge = 0 | this.edge / 5;
        this.halfSectorEdge = 0 | this.edge / 10;
        _0x4a2d38.lineWidth = _0x480be4.gridWidth;
        _0x4a2d38.strokeStyle = _0x480be4.gridColor;
        this.sectors();
        if ("onlyLines" !== _0x499cfe) {
          _0x4a2d38.textAlign = "center";
          _0x4a2d38.textBaseline = "middle";
          _0x4a2d38.fillStyle = _0x480be4.gridTextColor;
          this.updateViewSectors();
          if ('snowflakes' === _0x499cfe) {
            this.snowflakes();
          } else {
            this.normal();
          }
        }
      }
    }
    static ['sectors']() {
      const _0x387dc2 = _0x386cbc.ctx;
      _0xddb6d6.viewBounds;
      _0x387dc2.beginPath();
      _0x387dc2.rect(this.left + this.sectorEdge, this.top, this.sectorEdge, this.edge);
      _0x387dc2.rect(this.left + 3 * this.sectorEdge, this.top, this.sectorEdge, this.edge);
      _0x387dc2.rect(this.left, this.top + this.sectorEdge, this.edge, this.sectorEdge);
      _0x387dc2.rect(this.left, this.top + 3 * this.sectorEdge, this.edge, this.sectorEdge);
      _0x387dc2.rect(this.left, this.top, this.edge, this.edge);
      _0x387dc2.closePath();
      _0x387dc2.stroke();
    }
    static ["updateViewSectors"]() {
      const _0x11a8bc = this.visible;
      _0x11a8bc.clear();
      const _0x40948e = _0xddb6d6.viewBounds;
      const _0x2124fe = 0 | (_0x40948e.left - 200 - _0x996564.left) / this.sectorEdge;
      const _0x2220e7 = 0 | (_0x40948e.top - 200 - _0x996564.top) / this.sectorEdge;
      const _0x179245 = 5 - (0 | (_0x996564.right - _0x40948e.right - 200) / this.sectorEdge) - _0x2124fe;
      const _0xfb889b = 5 - (0 | (_0x996564.bottom - _0x40948e.bottom - 200) / this.sectorEdge) - _0x2220e7;
      for (let _0x1bea32 = 0; _0x1bea32 < _0x179245; _0x1bea32++) {
        for (let _0x800f28 = 0; _0x800f28 < _0xfb889b; _0x800f28++) {
          _0x11a8bc.add(this.letters[_0x2220e7 + _0x800f28] + (_0x2124fe + _0x1bea32 + 1));
        }
      }
    }
    static ['normal']() {
      const _0x374eb1 = _0x386cbc.ctx;
      _0x374eb1.font = "400 " + _0x480be4.gridTextSize + "px " + _0x480be4.gridTextFont;
      for (let _0xf67ab4 = 0; 5 > _0xf67ab4; _0xf67ab4++) {
        const _0x934ba5 = this.top + this.halfSectorEdge + _0xf67ab4 * this.sectorEdge;
        for (let _0x2ec138 = 0; 5 > _0x2ec138; _0x2ec138++) {
          const _0x3d569a = this.letters[_0xf67ab4] + (_0x2ec138 + 1);
          if (this.visible.has(_0x3d569a)) {
            const _0x77491c = this.left + this.halfSectorEdge + _0x2ec138 * this.sectorEdge;
            _0x374eb1.fillText(_0x3d569a, _0x77491c, _0x934ba5);
          }
        }
      }
    }
    static ['snowflakes']() {
      const _0x29baf0 = _0x386cbc.ctx;
      _0x29baf0.font = "400 " + _0x480be4.gridTextSize + "px Ubuntu";
      for (let _0x959833 = 0; 5 > _0x959833; _0x959833++) {
        const _0x594cbf = this.top + this.halfSectorEdge + _0x959833 * this.sectorEdge;
        for (let _0x3951fe = 0; 5 > _0x3951fe; _0x3951fe++) {
          const _0x13073d = this.letters[_0x959833] + (_0x3951fe + 1);
          if (this.visible.has(_0x13073d)) {
            const _0x8a2a31 = this.left + this.halfSectorEdge + _0x3951fe * this.sectorEdge;
            _0x29baf0.fillText('❆', _0x8a2a31, _0x594cbf);
          }
        }
      }
    }
  }
  class _0x3a83be {
    static ["init"]() {
      const _0x5dffce = {
        x: 0x0,
        y: 0x0
      };
      const _0x5d903a = {
        "turnedOn": false,
        "nick": '',
        "worldID": '',
        "mass": 0x0,
        cellCount: 0x0,
        "position": _0x5dffce,
        "outOfView": false
      };
      const _0x464ccd = {
        x: 0x0,
        y: 0x0
      };
      const _0x2a5e15 = {
        "turnedOn": false,
        "nick": '',
        worldID: '',
        "mass": 0x0,
        "cellCount": 0x0,
        "position": _0x464ccd,
        "outOfView": false
      };
      const _0x210563 = {
        x: 0x0,
        y: 0x0
      };
      this.target1 = _0x5d903a;
      this.target2 = _0x2a5e15;
      this.center = _0x210563;
    }
    static ['update']() {
      if (this.target1.turnedOn || this.target2.turnedOn) {
        const _0x12bae4 = this.target1;
        const _0x5298ff = this.target2;
        _0x12bae4.mass = 0;
        _0x12bae4.position.x = 0;
        _0x12bae4.position.y = 0;
        _0x12bae4.cellCount = 0;
        _0x5298ff.mass = 0;
        _0x5298ff.position.x = 0;
        _0x5298ff.position.y = 0;
        _0x5298ff.cellCount = 0;
        _0x14d4a3.cells.forEach(_0x558cf4 => {
          if (_0x12bae4.turnedOn && _0x12bae4.worldID === _0x558cf4.worldID) {
            _0x12bae4.position.x += _0x558cf4.animX;
            _0x12bae4.position.y += _0x558cf4.animY;
            _0x12bae4.mass += _0x558cf4.mass;
            _0x12bae4.cellCount++;
          } else if (_0x5298ff.turnedOn && _0x5298ff.worldID === _0x558cf4.worldID) {
            _0x5298ff.position.x += _0x558cf4.animX;
            _0x5298ff.position.y += _0x558cf4.animY;
            _0x5298ff.mass += _0x558cf4.mass;
            _0x5298ff.cellCount++;
          }
        });
        _0x12bae4.mass |= 0;
        _0x5298ff.mass |= 0;
        let _0x3bee00 = 0;
        let _0x3edaaa = 0;
        let _0x35be38 = 0;
        if (_0x12bae4.turnedOn) {
          if (0 < _0x12bae4.cellCount) {
            _0x12bae4.position.x /= _0x12bae4.cellCount;
            _0x12bae4.position.y /= _0x12bae4.cellCount;
            _0x12bae4.outOfView = false;
            _0x3edaaa += _0x12bae4.position.x;
            _0x35be38 += _0x12bae4.position.y;
            _0x3bee00++;
          } else {
            _0x12bae4.outOfView = true;
          }
        }
        if (_0x5298ff.turnedOn) {
          if (0 < _0x5298ff.cellCount) {
            _0x5298ff.position.x /= _0x5298ff.cellCount;
            _0x5298ff.position.y /= _0x5298ff.cellCount;
            _0x5298ff.outOfView = false;
            _0x3edaaa += _0x5298ff.position.x;
            _0x35be38 += _0x5298ff.position.y;
            _0x3bee00++;
          } else {
            _0x5298ff.outOfView = true;
          }
        }
        if (0 < _0x3bee00) {
          this.center.x = 0 | _0x3edaaa / _0x3bee00;
          this.center.y = 0 | _0x35be38 / _0x3bee00;
        }
      }
    }
    static ['lockTarget'](_0x2af725, _0x5e43e5, _0x42a1a4) {
      if (!_0xddb6d6.freeSpectate) {
        _0x22a8df.toggleSpectate();
      }
      let _0x24c35b = 199996164;
      let _0x53b303 = false;
      _0x14d4a3.cells.forEach(_0x5e2d7a => {
        if (!(_0x5e2d7a.isFood || _0x5e2d7a.isVirus || _0x5e2d7a.isEjected)) {
          const _0x3c43d4 = this.getDistanceSquare(_0x2af725, _0x5e43e5, _0x5e2d7a.animX, _0x5e2d7a.animY);
          if (_0x3c43d4 < _0x24c35b) {
            _0x24c35b = _0x3c43d4;
            _0x53b303 = _0x5e2d7a;
          }
        }
      });
      if (_0x53b303) {
        if (_0x53b303.isUnnamed) {
          _0x40f48a.alert('Multibox', _0x59f59a.current.notif.target_unnamed);
        } else {
          const _0x345b88 = this[1 === _0x42a1a4 ? "target1" : "target2"];
          _0x345b88.turnedOn = true;
          _0x345b88.nick = _0x53b303.nick;
          _0x345b88.worldID = _0x53b303.worldID;
          _0x345b88.outOfView = false;
          _0x3a43e7.targetMode();
        }
      }
    }
    static ["getDistanceSquare"](_0x557cf5, _0x15a59d, _0x22c733, _0x4a9e22) {
      const _0x124a57 = _0x22c733 - _0x557cf5;
      const _0x3fa5ae = _0x4a9e22 - _0x15a59d;
      return _0x124a57 * _0x124a57 + _0x3fa5ae * _0x3fa5ae;
    }
    static ["reset"]() {
      if (!this.isTurnedOn) {
        _0x22a8df.toggleSpectate();
      }
      if (_0xddb6d6.freeSpectate) {
        _0x3a43e7.mouseViewport();
      } else {
        _0x3a43e7.topViewport();
      }
      this.target1.turnedOn = false;
      this.target2.turnedOn = false;
    }
    static ["getMass"](_0x52f2f0) {
      return _0x52f2f0 * _0x52f2f0 / 100;
    }
    static get ['isTurnedOn']() {
      return this.target1.turnedOn || this.target2.turnedOn;
    }
  }
  class _0x2ab3a8 {
    static ["init"]() {
      this.r = 0;
      this.g = 0;
      this.b = 0;
      this.targetR = 0;
      this.targetG = 0;
      this.targetB = 0;
      this.color = "#000000";
      this.lastTime = 0;
    }
    static ["update"]() {
      this.r += (this.targetR - this.r) / 80;
      this.g += (this.targetG - this.g) / 80;
      this.b += (this.targetB - this.b) / 80;
      this.color = '#' + (16777216 + (this.r << 16) + (this.g << 8) + (0 | this.b)).toString(16).slice(1);
      const _0x327775 = Math.min(_0xb45f1b.time - this.lastTime - 2000, 33);
      if (!(0 > _0x327775)) {
        this.lastTime = _0xb45f1b.time + _0x327775;
        this.newTargetRGB();
      }
    }
    static ["newTargetRGB"]() {
      let _0x218a7e = [255, 7, 0 | 255 * Math.random()];
      _0x218a7e.sort(() => 0.5 - Math.random());
      this.targetR = _0x218a7e[0];
      this.targetG = _0x218a7e[1];
      this.targetB = _0x218a7e[2];
    }
    static ["getColor"](_0x16d8f4, _0x5f426b) {
      return 'rgb(' + (0 | _0x16d8f4.r * _0x5f426b) + ',' + (0 | _0x16d8f4.g * _0x5f426b) + ',' + (0 | _0x16d8f4.b * _0x5f426b) + ')';
    }
    static ["getGrayscale"](_0x16d8f4, _0x5f426b) {
      var _0xgray = 0 | (0.299 * _0x16d8f4.r * _0x5f426b + 0.587 * _0x16d8f4.g * _0x5f426b + 0.114 * _0x16d8f4.b * _0x5f426b);
      return 'rgb(' + _0xgray + ',' + _0xgray + ',' + _0xgray + ')';
    }
  }
  class _0x4c265b {
    constructor(_0x491bf5) {
      this.dataView = _0x491bf5;
      this.index = 0;
      this.maxIndex = _0x491bf5.byteLength;
    }
    ['readUInt8']() {
      const _0x1fb3a0 = this.dataView.getUint8(this.index, true);
      this.index++;
      return _0x1fb3a0;
    }
    ["readInt8"]() {
      const _0x1cb8c7 = this.dataView.getInt8(this.index, true);
      this.index++;
      return _0x1cb8c7;
    }
    ["readUInt16"]() {
      const _0x6361ee = this.dataView.getUint16(this.index, true);
      this.index += 2;
      return _0x6361ee;
    }
    ['readInt16']() {
      const _0x55eda1 = this.dataView.getInt16(this.index, true);
      this.index += 2;
      return _0x55eda1;
    }
    ["readUInt32"]() {
      const _0x84424c = this.dataView.getUint32(this.index, true);
      this.index += 4;
      return _0x84424c;
    }
    ["readInt32"]() {
      const _0x304660 = this.dataView.getInt32(this.index, true);
      this.index += 4;
      return _0x304660;
    }
    ["readFloat32"]() {
      const _0x518805 = this.dataView.getFloat32(this.index, true);
      this.index += 4;
      return _0x518805;
    }
    ["readFloat64"]() {
      const _0x21cd32 = this.dataView.getFloat64(this.index, true);
      this.index += 8;
      return _0x21cd32;
    }
    ["readUTF8string"]() {
      let _0x22cf08;
      let _0x43f4c4 = '';
      for (; 0 !== (_0x22cf08 = this.readUInt8()) && !this.endOfBuffer();) {
        _0x43f4c4 += String.fromCharCode(_0x22cf08);
      }
      return _0x43f4c4;
    }
    ["readStringZeroUtf8"]() {
      let _0x4aa4c3 = '';
      let _0x4ce2d6 = 0;
      for (var _0x516684 = this.index; _0x516684 < this.dataView.byteLength; _0x516684++) {
        if (this.dataView.getUint8(_0x516684, true)) {
          _0x4ce2d6++;
        } else {
          break;
        }
      }
      _0x4aa4c3 += new TextDecoder().decode(new Uint8Array(this.dataView.buffer, this.index, _0x4ce2d6));
      this.index += _0x4ce2d6 + 1;
      return _0x4aa4c3;
    }
    ["readEscapedUTF8string"]() {
      const _0x3b8095 = this.readUTF8string();
      return decodeURIComponent(escape(_0x3b8095));
    }
    ["decompress"]() {
      const _0x3dfaeb = new Uint8Array(this.dataView.buffer);
      const _0x2af2bb = this.readUInt32();
      const _0x2ef075 = new Uint8Array(_0x2af2bb);
      LZ4.decodeBlock(_0x3dfaeb.slice(5), _0x2ef075);
      this.dataView = new DataView(_0x2ef075.buffer);
      this.index = 0;
      this.maxIndex = this.dataView.byteLength;
    }
    ["endOfBuffer"]() {
      return this.index >= this.maxIndex;
    }
  }
  class _0x18a8d1 {
    static ["init"]() {
      const _0x4c69f9 = {
        'in': 0x0,
        "out": 0x0
      };
      this.ip = null;
      this.ws = null;
      this.connected = false;
      this.ws2 = null;
      this.connected2 = false;
      this.packetCount = _0x4c69f9;
      _0x996564.init();
    }
    static async ["getToken"](_0xe90589) {
      return new Promise((_0x2d5600, _0x1ab686) => {
        if (_0xe90589 <= 1) {
          _0x40f48a.warn("Multibox", "Solving captcha, please wait..");
        }
        if (window.turnstile) {
          window.turnstile.render(".cf-turnstile", {
            'sitekey': "0x4AAAAAABwAtcdv_5-aS9cf",
            'callback': (_0x4a58da, _0x51a9e5) => {
              if (!_0x51a9e5 && !_0x4a58da) {
                return _0x40f48a.warn('Multibox', "Unexpected response from turnstile API.");
              }
              if (_0x14f7b2("#loading-screen") && _0x14f7b2("#loading-screen").fadeOut(500)) {
                _0x14f7b2("#loading-screen").remove();
              }
              _0x302a2c.handleDisabledProperty(false);
              _0x40f48a.warn("Multibox", "Captcha has been solved successfully for Tab " + _0xe90589);
              return _0x2d5600(_0x4a58da);
            },
            'expired-callback': _0x1ab686,
            'error-callback': _0x1ab686
          });
        }
      });
    }
    static ['connect'](_0x23e168, _0x5ad969) {
      if ("string" != typeof _0x23e168) {
        return _0x40f48a.warn('Multibox', "Server IP is invalid");
      }
      if (_0x23e168) {
        this.disconnect();
        this.resetData();
        this.ws = new WebSocket(_0x23e168, "algamees");
        this.ws.binaryType = "arraybuffer";
        this.ws.onopen = () => {
          this.onOpen(1);
        };
        this.ws.onmessage = _0x36ede8 => {
          this.onMessage(_0x36ede8, 1);
        };
        this.ws.onclose = () => {
          this.onClose(1);
        };
        this.ws.onerror = () => {
          this.onError(1);
        };
      }
      if (_0x23e168) {
        this.ws2 = new WebSocket(_0x23e168, "algamees");
        this.ws2.binaryType = "arraybuffer";
        this.ws2.onopen = () => {
          this.onOpen(2);
        };
        this.ws2.onmessage = _0x568400 => {
          this.onMessage(_0x568400, 2);
        };
        this.ws2.onclose = () => {
          this.onClose(2);
        };
        this.ws2.onerror = () => {
          this.onError(2);
        };
        this.ip = _0x23e168;
        console.log("Connecting to: " + _0x23e168);
      }
    }
    static ['disconnect']() {
      if (this.ws && this.ws.close) {
        this.ws.close();
        this.ws.onopen = null;
        this.ws.onmessage = null;
        this.ws.onclose = null;
        this.ws.onerror = null;
      }
      if (this.ws2 && this.ws2.close) {
        this.ws2.close();
        this.ws2.onopen = null;
        this.ws2.onmessage = null;
        this.ws2.onclose = null;
        this.ws2.onerror = null;
      }
      this.ws = null;
      this.connected = false;
      this.ws2 = null;
      this.connected2 = false;
      this.ip = null;
    }
    static ["resetData"]() {
      _0x14d4a3.cells.clear();
      _0x14d4a3.myCellsIDs.clear();
      _0x14d4a3.myCells.clear();
      _0x14d4a3.cells2.clear();
      _0x14d4a3.myCellsIDs2.clear();
      _0x14d4a3.myCells2.clear();
      _0x90a1a7._isAlive = false;
      _0x90a1a7._isAlive2 = false;
    }
    static ["send"](_0x545759, _0x4b600f) {
      this.packetCount.out++;
      if (1 === _0x4b600f && this.wsOpen) {
        this.ws.send(_0x545759);
      } else if (2 === _0x4b600f && this.ws2Open) {
        this.ws2.send(_0x545759);
      }
    }
    static ["onOpen"](_0x310b30) {
      _0x2d5cce.ip();
      _0x1d0165.init();
      _0x302a2c.init(_0x310b30);
      _0x40f48a.alert("Multibox", "Tab " + _0x310b30 + " connected");
    }
    static ["onMessage"](_0xdbc368, _0x57208b) {
      this.packetCount['in']++;
      _0x245b10.getBuffer(_0xdbc368, _0x57208b);
    }
    static ["onClose"](_0x1903d8) {
      if (!(this.wsOpen || this.ws2Open)) {
        _0x31c9b4.open();
      }
      if (1 === _0x1903d8) {
        this.connected = false;
      } else {
        this.connected2 = false;
      }
      _0x245b10.clearCells(_0x1903d8);
      _0x40f48a.alert("Multibox", "Tab " + _0x1903d8 + " disconnected");
      console.log("Websocket " + _0x1903d8 + " closed");
    }
    static ["onError"](_0xe834f) {
      if (!(this.wsOpen || this.ws2Open)) {
        _0x31c9b4.open();
      }
      if (1 === _0xe834f) {
        this.connected = false;
      } else {
        this.connected2 = false;
      }
      console.log("Websocket " + _0xe834f + " errored out!");
    }
    static get ["wsOpen"]() {
      return this.ws && this.ws.readyState === this.ws.OPEN;
    }
    static get ["ws2Open"]() {
      return this.ws2 && this.ws2.readyState === this.ws2.OPEN;
    }
  }
  class _0x1d0165 {
    static ["init"]() {
      this.messages = new Map();
      this.spammers = [];
    }
    static ['checkSpam'](_0x2071d8, _0x1a8ffb) {
      if (-1 !== this.spammers.indexOf(_0x2071d8)) {
        return true;
      }
      if (this.messages.has(_0x2071d8)) {
        const _0x80533c = this.messages.get(_0x2071d8);
        if (_0x80533c == _0x1a8ffb && _0x1a8ffb.length >= 30 || _0x80533c.length >= 30 && _0x1a8ffb.length >= 30) {
          this.spammers.push(_0x2071d8);
          _0x40f48a.alert('Multibox', "Spammer Catched -> " + _0x2071d8);
          return true;
        }
      } else if (_0x1a8ffb.length >= 30) {
        this.messages.set(_0x2071d8, _0x1a8ffb);
      }
      if (this.messages.size >= 10) {
        this.messages.clear();
      }
      return false;
    }
  }
  class _0x245b10 {
    static ['getBuffer'](_0x332dc4, _0x4e19d2) {
      const _0x56cf06 = new DataView(_0x332dc4.data);
      this.parse(_0x56cf06, _0x4e19d2);
    }
    static ["parse"](_0xf8bab6, _0x24de2f) {
      const _0x4f5972 = new _0x4c265b(_0xf8bab6);
      const _0x6ab5d9 = _0x4f5972.readUInt8();
      if (16 === _0x6ab5d9) {
        this.worldUpdate(_0x4f5972, _0x24de2f);
      } else if (17 === _0x6ab5d9) {
        this.getSpectateData(_0x4f5972);
      } else if (18 === _0x6ab5d9) {
        this.clearCells(_0x24de2f);
      } else if (20 === _0x6ab5d9) {
        this.clearMyCells(_0x24de2f);
      } else if (32 === _0x6ab5d9) {
        this.getMyCellId(_0x4f5972, _0x24de2f);
      } else if (50 === _0x6ab5d9 && 1 === _0x24de2f) {
        this.getLeaderboard(_0x4f5972);
      } else if (49 === _0x6ab5d9 && 1 === _0x24de2f) {
        this.getLeaderboardFFA(_0x4f5972);
      } else if (65 === _0x6ab5d9) {
        this.borderUpdate(_0x4f5972, _0x24de2f);
      }
      if (86 === _0x6ab5d9 && 1 === _0x24de2f) {
        this.handleChat(_0x4f5972);
      }
    }
    static ["handleChat"](_0x4be406) {
      var _0id = _0x4be406.readUInt32();
      for (var _0i = 0; _0i < 7; _0i++) _0x4be406.readUInt8();
      var _0name = _0x4be406.readStringZeroUtf8().replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F\ufffd]/g, '').replace(/^\[.\]/, '');
      var _0msg = _0x4be406.readStringZeroUtf8().replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F\ufffd]/g, '');
      if (_0msg) _0x40f48a.normal(_0name || 'Player', _0msg);
    }
    static ["worldUpdate"](_0x449cb9, _0x43ee07 = 1) {
      _0xb45f1b.refreshTime();
      var _0x49c709;
      var _0x55e445;
      var _0x2283b5;
      var _0x26f542 = false;
      var _0xabb49d = null;
      var _0x8aab7f = null;
      var _0x348ca4 = undefined;
      var _0x468d84 = undefined;
      var _0x178a5a = undefined;
      var _0x1b8419 = undefined;
      var _0x415005 = undefined;
      var _0x472603 = undefined;
      var _0xf3f2e0 = undefined;
      var _0xe4d42a = undefined;
      var _0x3d627b = undefined;
      var _0xd54ce1 = undefined;
      var _0x466514 = 'on' === _0x2cc0f3.eatAnimation;
      var _0x9e119e = _0x449cb9.readUInt16();
      for (var _0xbdb90c = 0; _0xbdb90c < _0x9e119e; _0xbdb90c++) {
        var _0x49c709;
        var _0x55e445;
        var _0x2283b5;
        var _0x26f542;
        var _0xabb49d;
        var _0x8aab7f;
        var _0x348ca4;
        var _0x468d84;
        var _0x178a5a;
        var _0x1b8419;
        var _0x415005;
        var _0x472603;
        var _0xf3f2e0;
        var _0xe4d42a;
        var _0x3d627b;
        var _0xd54ce1;
        var _0x466514;
        var _0x9e119e;
        var _0xbdb90c;
        _0x348ca4 = _0x449cb9.readUInt32();
        _0x468d84 = _0x449cb9.readUInt32();
        if (_0x466514) {
          _0x14d4a3.eatCell(_0x348ca4, _0x468d84, _0x43ee07);
        }
      }
      for (; 0 !== (_0x178a5a = _0x449cb9.readUInt32());) {
        _0xabb49d = _0x14d4a3.getCell(_0x178a5a, _0x43ee07);
        _0xabb49d.isFood = this.checkIsFood(_0xabb49d);
        _0x1b8419 = _0x449cb9.readInt32();
        _0x415005 = _0x449cb9.readInt32();
        _0x472603 = _0x449cb9.readUInt16();
        if (_0xabb49d.init) {
          _0xabb49d.animate();
          _0xabb49d.x = _0xabb49d.animX;
          _0xabb49d.y = _0xabb49d.animY;
          _0xabb49d.radius = _0xabb49d.animRadius;
        } else {
          _0xabb49d.animX = _0xabb49d.x = _0x1b8419;
          _0xabb49d.animY = _0xabb49d.y = _0x415005;
          _0xabb49d.radius = _0xabb49d.animRadius = _0x472603;
          _0xabb49d.lastUpdateTime = _0xb45f1b.time;
          _0xabb49d.init = true;
        }
        _0xabb49d.x = _0x1b8419;
        _0xabb49d.y = _0x415005;
        _0xabb49d.radius = _0x472603;
        _0xabb49d.lastUpdateTime = _0xb45f1b.time;
        _0x8aab7f = _0x449cb9.readUInt8();
        _0x3d627b = !!(1 & _0x8aab7f);
        _0xe4d42a = !!(4 & _0x8aab7f);
        _0xf3f2e0 = !!(8 & _0x8aab7f);
        _0x49c709 = !!(16 & _0x8aab7f);
        _0x55e445 = !!(32 & _0x8aab7f);
        _0x2283b5 = !!(64 & _0x8aab7f);
        _0xd54ce1 = !!(128 & _0x8aab7f);
        if (_0x2283b5) {
          _0x449cb9.readInt32();
        }
        if (2 & _0x8aab7f) {
          _0xabb49d.setColor(_0x449cb9.readUInt8(), _0x449cb9.readUInt8(), _0x449cb9.readUInt8());
        } else {
          null;
        }
        _0x26f542 = !!(32 & _0x8aab7f);
        if (_0xe4d42a) {
          _0xabb49d.skin = _0x449cb9.readEscapedUTF8string();
          if (_0xabb49d.skin.split('/')[1] !== "undefined") {
            _0x386cbc.get3rbSkin(_0xabb49d.skin);
          }
        }
        _0xabb49d.nick = _0xf3f2e0 ? _0x449cb9.readEscapedUTF8string() : null;
        _0xabb49d.bNick = _0xd54ce1 ? _0x449cb9.readEscapedUTF8string() : null;
        _0xabb49d.isVirus = _0x3d627b;
        _0xabb49d.isEjected = _0x26f542;
      }
      _0x9e119e = _0x449cb9.readUInt16();
      for (_0xbdb90c = 0; _0xbdb90c < _0x9e119e; _0xbdb90c++) {
        _0x468d84 = _0x449cb9.readUInt32();
        _0x14d4a3.removeCell(_0x468d84, _0x43ee07);
      }
    }
    static ["checkIsFood"](_0x451fee) {
      return _0x451fee.isUnnamed && _0x451fee.nodeType != 0 && !_0x451fee.isMine && !_0x451fee.isEjected && _0x451fee.radius < 100;
    }
    static ["getSpectateData"](_0x111b6e) {
      _0xddb6d6.spectatePoint.x = _0x111b6e.readFloat32();
      _0xddb6d6.spectatePoint.y = _0x111b6e.readFloat32();
      _0xddb6d6.autoZoomViewport = _0x111b6e.readFloat32();
    }
    static ['clearCells'](_0x402088) {
      console.log("Reseting World...");
      if (1 === _0x402088) {
        _0x14d4a3.cells.clear();
        _0x14d4a3.myCellsIDs.clear();
        _0x14d4a3.myCells.clear();
      } else {
        _0x14d4a3.cells2.clear();
        _0x14d4a3.myCellsIDs2.clear();
        _0x14d4a3.myCells2.clear();
      }
    }
    static ["clearMyCells"](_0x2ebd53) {
      if (1 === _0x2ebd53) {
        _0x14d4a3.myCellsIDs.clear();
        _0x14d4a3.myCells.clear();
      } else {
        _0x14d4a3.myCellsIDs2.clear();
        _0x14d4a3.myCells2.clear();
      }
    }
    static ["getMyCellId"](_0x5d6513, _0x5c4a06) {
      const _0x5d61ff = 1 === _0x5c4a06 ? _0x14d4a3.myCellsIDs : _0x14d4a3.myCellsIDs2;
      const _0x22f304 = _0x5d6513.readUInt32();
      _0x5d61ff.add(_0x22f304);
    }
    static ["getLeaderboard"](_0x51f993) {
      _0xa916b.clear();
      let _0x1f42cb;
      let _0x2539a8;
      let _0x58f5fe = _0x51f993.readUInt16();
      for (_0x1f42cb = 0; _0x1f42cb < _0x58f5fe; _0x1f42cb++) {
        _0x2539a8 = (_0x2539a8 = _0x51f993.readStringZeroUtf8()) || "unnamed cell";
        _0xa916b.add(_0x2539a8, _0x1f42cb + 1, false, false, false);
      }
      _0xa916b.update();
    }
    static ["getLeaderboardFFA"](_0x1d0b9f) {
      _0xa916b.clear();
      let _0x41a400;
      let _0x35833d;
      let _0x54147a;
      let _0x19bafb;
      let _0x4599fc = _0x1d0b9f.readUInt16();
      for (_0x41a400 = 0; _0x41a400 < _0x4599fc; _0x41a400++) {
        _0x35833d = _0x1d0b9f.readUInt16();
        _0x54147a = _0x1d0b9f.readUInt32();
        _0x19bafb = _0x1d0b9f.readStringZeroUtf8() || "unnamed cell";
        _0xa916b.add(_0x19bafb, _0x35833d || 1, false, false, false, _0x54147a);
      }
      _0xa916b.update();
    }
    static ["getLeaderboardTeam"](_0x96914f) {
      _0xa916b.clear();
      let _0x59ed1e;
      let _0x1272e4 = _0x96914f.readUInt32();
      let _0x225f6e = [];
      for (_0x59ed1e = 0; _0x59ed1e <= _0x1272e4 && !_0x96914f.endOfBuffer(); _0x59ed1e++) {
        _0x225f6e.push(_0x96914f.readFloat32());
      }
      _0xa916b.team(_0x225f6e[0], _0x225f6e[1], _0x225f6e[2]);
    }
    static ["borderUpdate"](_0x222f96, _0x1b97a8) {
      const _0x4d3085 = 0 | _0x222f96.readFloat64();
      const _0x4fc544 = 0 | _0x222f96.readFloat64();
      const _0x5c57dc = 0 | _0x222f96.readFloat64();
      const _0x3fb1e9 = 0 | _0x222f96.readFloat64();
      if (1 === _0x1b97a8) {
        _0x996564.update(_0x4d3085, _0x4fc544, _0x5c57dc, _0x3fb1e9);
      } else {
        _0x996564.update2(_0x4d3085, _0x4fc544, _0x5c57dc, _0x3fb1e9);
      }
    }
    static ["bytesToColor"](_0x191b5f, _0x422824, _0x26702a) {
      return '#' + ('00' + (~~_0x191b5f).toString(16)).slice(-2) + ('00' + (~~_0x422824).toString(16)).slice(-2) + ('00' + (~~_0x26702a).toString(16)).slice(-2);
    }
  }
  class _0x302a2c {
    static ['init'](_0x578a51) {
      clearInterval(this.pingInterval);
      this.handleDisabledProperty(true);
      this.handshake1(_0x578a51);
      this.handshake2(_0x578a51);
      this.initPingLoop(_0x578a51);
      this.accountPacketSent = false;
      _0xddb6d6.isSpectating = false;
      _0xddb6d6.freeSpectate = false;
      console.log("Connected to: " + _0x18a8d1.ip);
      if (1 === _0x578a51) {
        _0x18a8d1.connected = true;
      } else {
        _0x18a8d1.connected2 = true;
      }
    }
    static ["handleDisabledProperty"](_0x1b3281) {
      document.querySelector("#button-play").disabled = _0x1b3281;
      document.querySelector("#button-spectate").disabled = _0x1b3281;
    }
    static ["createView"](_0x19fbe3) {
      return new DataView(new ArrayBuffer(_0x19fbe3));
    }
    static ["chekConnection"](_0x26b575) {
      return 1 === _0x26b575 && _0x18a8d1.connected || 2 === _0x26b575 && _0x18a8d1.connected2;
    }
    static ["sendPacket"](_0x4bcbe9, _0x51333e) {
      _0x18a8d1.send(_0x4bcbe9.buffer, _0x51333e);
    }
    static ["initPingLoop"](_0x185c33) {
      this.pingInterval = setInterval(() => {
        _0x18a8d1.send(new Uint8Array([100]).buffer, _0x185c33);
      }, 1000);
    }
    static ["handshake1"](_0x5f0055) {
      const _0x36884a = new Uint8Array([255, 0, 0]);
      _0x18a8d1.send(_0x36884a, _0x5f0055);
    }
    static async ["handshake2"](_0x340056) {
      if (_0x18a8d1.connected && _0x18a8d1.connected2) {
        return;
      }
      var _0x556654 = await _0x18a8d1.getToken(_0x340056);
      var _0x1e3fda = new DataView(new ArrayBuffer(_0x556654.length + 3));
      var _0x256006 = 0;
      _0x1e3fda.setUint8(_0x256006++, 123);
      _0x1e3fda.setUint8(_0x256006++, 6);
      _0x556654.split('').forEach(_0x19bda2 => _0x1e3fda.setUint8(_0x256006++, _0x19bda2.charCodeAt(0)));
      _0x1e3fda.setUint8(_0x256006++, 0);
      _0x18a8d1.send(_0x1e3fda.buffer, _0x340056);
    }
    static ["mouse"](_0x5b3cbc, _0x1226e6) {
      const _0x5b1e06 = _0x90a1a7.typeID;
      if (this.chekConnection(_0x5b1e06)) {
        const _0x1d42bf = this.createView(17);
        _0x1d42bf.setUint8(0, 16, true);
        _0x1d42bf.setFloat64(1, Math.fround(~~_0x5b3cbc), true);
        _0x1d42bf.setFloat64(9, Math.fround(~~_0x1226e6), true);
        this.sendPacket(_0x1d42bf, _0x5b1e06);
      }
    }
    static ["chat"](_0x135efd) {
      const _0x27786b = _0x90a1a7.typeID;
      if (this.chekConnection(_0x27786b)) {
        const _0x207ee8 = unescape(encodeURIComponent(_0x135efd));
        const _0x1d139a = this.createView(6 + _0x207ee8.length);
        _0x1d139a.setUint8(0, 86);
        _0x1d139a.setUint8(1, 255);
        _0x1d139a.setUint8(2, 255);
        _0x1d139a.setUint8(3, 255);
        _0x1d139a.setUint8(4, 255);
        for (let _0xd39348 = _0x207ee8.length; _0xd39348--;) {
          _0x1d139a.setUint8(_0xd39348 + 5, _0x207ee8.charCodeAt(_0xd39348), true);
        }
        _0x1d139a.setUint8(5 + _0x207ee8.length, 0, true);
        this.sendPacket(_0x1d139a, _0x27786b);
      }
    }
    static ['spectate'](_0x73a4f5) {
      const _0x300d14 = _0x73a4f5 || 1;
      if (this.chekConnection(_0x300d14) || !_0x90a1a7.isAlive && !_0xddb6d6.isSpectating || _0x73a4f5) {
        const _0x3640ce = this.createView(1);
        _0x3640ce.setUint8(0, 1, true);
        this.sendPacket(_0x3640ce, _0x300d14);
        _0xddb6d6.isSpectating = true;
        if (!_0x90a1a7.isAlive) {
          _0xddb6d6.targetViewport = 0.1;
        }
      }
    }
    static ["spawn"]() {
      const _0x115240 = _0x90a1a7.typeID;
      if (this.chekConnection(_0x115240) && (!_0x90a1a7._isAlive && 1 === _0x115240 || !_0x90a1a7._isAlive2 && 2 === _0x115240)) {
        _0xddb6d6.isSpectating = false;
        const _0xisTab2 = _0x115240 === 2;
        if ('' === (_0xisTab2 ? _0x90a1a7.nick2 : _0x90a1a7.nick)) {
          _0xisTab2 ? _0x90a1a7.nick2 = "Unnamed cell" : _0x90a1a7.nick = "Unnamed cell";
        }
        let _0x4a58df = unescape(encodeURIComponent(_0xisTab2 ? _0x90a1a7.nick2 : _0x90a1a7.nick));
        let _0x1084d5 = unescape(encodeURIComponent("free/" + (_0xisTab2 ? _0x90a1a7.arbSkin : _0x2a0c5c.arbSkin)));
        const _0x4208f8 = {
          'n': _0x4a58df
        };
        if (_0xisTab2 && _0x90a1a7.skin2 && !String(_0x90a1a7.skin2).includes("XXXXXXX")) {
          _0x4208f8.s = unescape(encodeURIComponent(_0x90a1a7.skin2));
          _0x4208f8.w = '';
        } else if (_0x90a1a7.arbSkin) {
          _0x4208f8.s = _0x1084d5;
          _0x4208f8.w = '';
        }
        const _0x428efe = JSON.stringify(_0x4208f8);
        const _0x301649 = _0x428efe.length;
        const _0x314127 = this.createView(2 + _0x301649);
        _0x314127.setUint8(0, 0, true);
        for (let _0x2e9472 = 0; _0x2e9472 < _0x301649; _0x2e9472++) {
          _0x314127.setUint8(_0x2e9472 + 1, _0x428efe.charCodeAt(_0x2e9472), true);
        }
        _0x314127.setUint8(_0x301649 + 1, 0, true);
        this.sendPacket(_0x314127, _0x115240);
      }
    }
    static ["split"]() {
      const _0x1fd00d = _0x90a1a7.typeID;
      if (this.chekConnection(_0x1fd00d)) {
        const _0x2a8e00 = this.createView(1);
        _0x2a8e00.setUint8(0, 17, true);
        this.sendPacket(_0x2a8e00, _0x1fd00d);
      }
    }
    static ["eject"]() {
      const _0x25abd0 = _0x90a1a7.typeID;
      if (this.chekConnection(_0x25abd0)) {
        const _0x1b92ea = this.createView(1);
        _0x1b92ea.setUint8(0, 21, true);
        this.sendPacket(_0x1b92ea, _0x25abd0);
      }
    }
    static ["freeSpectate"]() {
      if (this.chekConnection(1)) {
        _0xddb6d6.freeSpectate = !_0xddb6d6.freeSpectate;
        const _0x2272b3 = this.createView(1);
        _0x2272b3.setUint8(0, 18, true);
        this.sendPacket(_0x2272b3, 1);
      }
    }
  }
  class _0x1530af {
    static ['init']() {
      this.ip = '';
      this.ws = null;
      this.connected = false;
      this.connect();
    }
    static ['connect']() {}
    static ["send"](_0x13f21e) {
      this.ws.send(_0x13f21e);
    }
    static ['onOpen']() {
      _0x2d5cce.init();
    }
    static ["onMessage"](_0x1ffd4c) {
      _0x7a58b0.parse(_0x1ffd4c);
    }
    static ["onClose"]() {
      this.connected = false;
      console.log("Disconnected from networks.");
    }
    static ["onError"]() {
      this.connected = false;
      console.log("Connection to networks errored out!");
    }
  }
  class _0x12ac51 {
    static ['init']() {
      const _0x399fc8 = {
        "totalMass": 0x0,
        alive: 0x0,
        spectate: 0x0
      };
      const _0x4fbb9e = {
        "totalMass": 0x0,
        "alive": 0x0,
        "spectate": 0x0
      };
      const _0x5e31b7 = {
        '1': _0x399fc8,
        '2': _0x4fbb9e
      };
      _0x1530af.init();
      this.teamPlayers = new Map();
      this.selfID = -1;
      this.isSpectator = false;
      this.teamAlternator = true;
      this.teamData = _0x5e31b7;
      this.biggestIsOn = false;
      this.biggest = new _0xb33099(0);
      this.partyCells = new Map();
    }
    static ["clear"]() {
      for (const _key of this.teamPlayers.keys()) {
        if (typeof _key === 'number') this.teamPlayers["delete"](_key);
      }
      this.partyCells.clear();
    }
    static ['remove'](_0x3660b6) {
      this.teamPlayers["delete"](_0x3660b6);
    }
    static ['getPlayer'](_0x47e4e6) {
      if (_0x47e4e6 === this.selfID) {
        return {};
      }
      let _0x1666d0 = this.teamPlayers.get(_0x47e4e6);
      if (undefined === _0x1666d0) {
        _0x1666d0 = this.newPlayer(_0x47e4e6);
      }
      return _0x1666d0;
    }
    static ["newPlayer"](_0x142a67) {
      const _0x1486ac = new _0xb33099(_0x142a67);
      this.teamPlayers.set(_0x142a67, _0x1486ac);
      return _0x1486ac;
    }
    static ['chat'](_0x34245f, _0x164dbf, _0x3a86a2, _0x3d910f) {
      let _0x3f5768 = _0x3d910f || "Anonymous";
      if (_0x3d910f || _0x34245f !== this.selfID) {
        const _0x2e574e = this.teamPlayers.get(_0x34245f);
        if (undefined !== _0x2e574e) {
          _0x3f5768 = _0x2e574e.nick;
        }
      } else {
        _0x3f5768 = _0x90a1a7.nick;
      }
      if (1 === _0x164dbf || 3 === _0x164dbf) {
        _0x40f48a.normal(_0x3f5768, _0x3a86a2);
      } else if (2 == _0x164dbf) {
        _0x40f48a.command(_0x3f5768, _0x3a86a2);
      }
    }
  }
  class _0x7a58b0 {
    static ['parse'](_0x53d82a) {
      const _0x34aecd = new DataView(_0x53d82a.data);
      const _0x345da0 = new _0x4c265b(_0x34aecd);
      const _0x4399b2 = _0x345da0.readUInt8();
      if (1 === _0x4399b2) {
        this.update(_0x345da0);
      } else if (2 === _0x4399b2) {
        this.chat(_0x345da0);
      } else if (3 === _0x4399b2) {
        this.commander(_0x345da0);
      } else if (4 === _0x4399b2) {
        this.selfID(_0x345da0);
      } else if (5 === _0x4399b2) {
        this.prePlayers(_0x345da0);
      }
    }
    static ["update"](_0x3adb12) {
      if (_0x90a1a7.isAlive && !_0x12ac51.isSpectator) {
        _0x2d5cce.positionMass();
      }
      if (!(_0x90a1a7.isAlive || !_0xddb6d6.isSpectating || _0xddb6d6.freeSpectate)) {
        _0x2d5cce.biggest();
      }
      const _0x125d15 = _0x12ac51.teamAlternator ? 1 : 2;
      const _0x10fd99 = _0x12ac51.teamData[_0x125d15];
      _0x10fd99.totalMass = 0;
      _0x10fd99.alive = 0;
      _0x10fd99.spectate = 0;
      let _0x5902ec = _0x3adb12.readUInt8();
      for (; _0x5902ec--;) {
        const _0x29beeb = _0x3adb12.readUInt32();
        _0x12ac51.remove(_0x29beeb);
      }
      for (_0x5902ec = _0x3adb12.readUInt8(); _0x5902ec--;) {
        const _0x4f2cf7 = _0x3adb12.readUInt32();
        const _0x5aa296 = _0x12ac51.getPlayer(_0x4f2cf7);
        const _0x51b623 = _0x3adb12.readUInt8();
        if (1 & _0x51b623) {
          const _0x442708 = _0x3adb12.readEscapedUTF8string();
          if (2 === _0x5aa296.isNew) {
            _0x40f48a.alert(_0x442708, "joined the chatroom.");
            _0x5aa296.isNew = 1;
          } else if (1 === _0x5aa296.isNew) {
            _0x40f48a.alert(_0x5aa296.nick, "changed name to " + _0x442708);
          }
          _0x5aa296.nick = _0x442708;
        }
        if (2 & _0x51b623) {
          const _0x5a641d = _0x3adb12.readUInt8();
          const _0x510beb = _0x3adb12.readUInt8();
          const _0x32ba28 = _0x3adb12.readUInt8();
          _0x5aa296.colorHex = '#' + (16777216 + (_0x5a641d << 16) + (_0x510beb << 8) + _0x32ba28).toString(16).slice(1);
        }
        if (4 & _0x51b623) {
          _0x5aa296.skin = _0x3adb12.readUTF8string();
        }
        if (16 & _0x51b623) {
          _0x5aa296.x = _0x3adb12.readInt16();
          _0x5aa296.y = _0x3adb12.readInt16();
          _0x5aa296.mass = _0x3adb12.readUInt32();
        }
        if (32 & _0x51b623) {
          _0x5aa296.isAlive = _0x3adb12.readUInt8();
        }
        if (64 & _0x51b623) {
          _0x5aa296.isRGB = _0x3adb12.readUInt8();
        }
        _0x5aa296.team = _0x125d15;
        if (_0x5aa296.isAlive) {
          _0x10fd99.totalMass += _0x5aa296.mass;
          _0x10fd99.alive++;
        } else {
          _0x10fd99.spectate++;
        }
      }
      const _0x2a227e = _0x3adb12.readUInt8();
      _0x12ac51.biggestIsOn = _0x2a227e;
      if (_0x2a227e) {
        _0x12ac51.biggest.x = _0x3adb12.readInt16();
        _0x12ac51.biggest.y = _0x3adb12.readInt16();
      }
    }
    static ['prePlayers'](_0x4641e7) {
      _0x12ac51.clear();
      for (let _0x49a4c3 = _0x4641e7.readUInt8(); _0x49a4c3--;) {
        const _0x552c8d = _0x4641e7.readUInt32();
        const _0xfe2e6f = _0x12ac51.newPlayer(_0x552c8d);
        _0xfe2e6f.nick = _0x4641e7.readEscapedUTF8string();
        const _0x3b4ef2 = _0x4641e7.readUInt8();
        const _0x2b4c89 = _0x4641e7.readUInt8();
        const _0x272dc2 = _0x4641e7.readUInt8();
        _0xfe2e6f.colorHex = '#' + (16777216 + (_0x3b4ef2 << 16) + (_0x2b4c89 << 8) + _0x272dc2).toString(16).slice(1);
        _0xfe2e6f.skin = _0x4641e7.readUTF8string();
        _0xfe2e6f.x = _0x4641e7.readInt16();
        _0xfe2e6f.y = _0x4641e7.readInt16();
        _0xfe2e6f.mass = _0x4641e7.readUInt32();
        _0xfe2e6f.isAlive = _0x4641e7.readUInt8();
        _0xfe2e6f.isRGB = _0x4641e7.readUInt8();
      }
    }
    static ["chat"](_0x4740d4) {
      const _0x312577 = _0x4740d4.readUInt32();
      const _0x28e339 = _0x4740d4.readUInt8();
      const _0x1b29af = _0x4740d4.readEscapedUTF8string();
      if (3 === _0x28e339) {
        const _0x59cd24 = _0x1b29af.split("");
        _0x12ac51.chat(_0x312577, _0x28e339, _0x59cd24[1], _0x59cd24[0]);
      } else {
        _0x12ac51.chat(_0x312577, _0x28e339, _0x1b29af);
      }
    }
    static ["commander"](_0x545a15) {
      const _0x442e7f = _0x545a15.readInt16() + _0x996564.offset.x;
      const _0x3a9146 = _0x545a15.readInt16() + _0x996564.offset.y;
      const _0x5d143c = _0xb45f1b.time;
      const _0x14eb93 = {
        x: _0x442e7f,
        y: _0x3a9146,
        time: _0x5d143c
      };
      _0x386cbc.commanderPoints.add(_0x14eb93);
    }
    static ["selfID"](_0x2c6ab1) {
      const _0x4e5b0c = _0x2c6ab1.readUInt32();
      _0x12ac51.selfID = _0x4e5b0c;
    }
  }
  class _0x2d5cce {
    static ["init"]() {
      console.log("Connected to Networks.");
      _0x1530af.connected = true;
      this.nick();
      this.skin();
      this.tag();
      this.color();
      this.ip();
      this.aliveStatus();
      this.rgbMode();
      if (_0x12ac51.isSpectator) {
        this.spectator(true);
      }
    }
    static ["createView"](_0x3d6054) {
      return new DataView(new ArrayBuffer(_0x3d6054));
    }
    static ["nick"]() {
      if (_0x1530af.connected) {
        const _0x24245f = unescape(encodeURIComponent(_0x90a1a7.nick));
        let _0x599045 = _0x24245f.length;
        const _0x4523c2 = this.createView(2 + _0x24245f.length);
        for (_0x4523c2.setUint8(0, 1, true); _0x599045--;) {
          _0x4523c2.setUint8(_0x599045 + 1, _0x24245f.charCodeAt(_0x599045), true);
        }
        _0x4523c2.setUint8(1 + _0x24245f.length, 0, true);
        _0x1530af.send(_0x4523c2.buffer);
      }
    }
    static ["color"]() {
      if (_0x1530af.connected) {
        const _0xcfacbc = this.createView(4);
        _0xcfacbc.setUint8(0, 2, true);
        _0xcfacbc.setUint8(1, _0x90a1a7.colorObject.r, true);
        _0xcfacbc.setUint8(2, _0x90a1a7.colorObject.g, true);
        _0xcfacbc.setUint8(3, _0x90a1a7.colorObject.b, true);
        _0x1530af.send(_0xcfacbc.buffer);
      }
    }
    static ["skin"]() {
      if (_0x1530af.connected) {
        const _0x5e1baa = _0x90a1a7.skin;
        let _0x582581 = _0x5e1baa.length;
        const _0x15de34 = this.createView(2 + _0x5e1baa.length);
        for (_0x15de34.setUint8(0, 4, true); _0x582581--;) {
          _0x15de34.setUint8(_0x582581 + 1, _0x5e1baa.charCodeAt(_0x582581), true);
        }
        _0x15de34.setUint8(1 + _0x5e1baa.length, 0, true);
        _0x1530af.send(_0x15de34.buffer);
      }
    }
    static ['ip']() {
      if (_0x1530af.connected && _0x18a8d1.ip) {
        const _0x2c8eb4 = this.createView(8);
        _0x2c8eb4.setUint8(0, 8, true);
        _0x2c8eb4.setUint8(1, 1, true);
        const _0x6d5c19 = _0x2d5cce.ip;
        let _0x5cf655 = _0x18a8d1.ip.split('.');
        let _0x2ddb58 = _0x5cf655[3].split(':');
        _0x6d5c19[0] = _0x5cf655[0];
        _0x6d5c19[1] = _0x5cf655[1];
        _0x6d5c19[2] = _0x5cf655[2];
        _0x6d5c19[3] = _0x2ddb58[0];
        _0x6d5c19[4] = _0x2ddb58[1];
        _0x2c8eb4.setUint8(2, 0 | _0x6d5c19[0], true);
        _0x2c8eb4.setUint8(3, 0 | _0x6d5c19[1], true);
        _0x2c8eb4.setUint8(4, 0 | _0x6d5c19[2], true);
        _0x2c8eb4.setUint8(5, 0 | _0x6d5c19[3], true);
        _0x2c8eb4.setUint16(6, 0 | _0x6d5c19[4], true);
        _0x1530af.send(_0x2c8eb4.buffer);
      }
    }
    static ["tag"]() {
      const _0x35e0be = _0x90a1a7.tag;
      if (_0x35e0be && _0x35e0be.length > 0) {
        if (_0x1530af.connected) {
          let _0x21b532 = _0x35e0be.length;
          const _0x427eb0 = this.createView(2 + _0x35e0be.length);
          _0x427eb0.setUint8(0, 4, true);
          for (; _0x21b532--;) {
            _0x427eb0.setUint8(_0x21b532 + 1, _0x35e0be.charCodeAt(_0x21b532), true);
          }
          _0x427eb0.setUint8(1 + _0x35e0be.length, 0, true);
          _0x1530af.send(_0x427eb0.buffer);
        }
      }
    }
    static ["positionMass"]() {
      if (_0x1530af.connected) {
        const _0x56c21f = this.createView(9);
        _0x56c21f.setUint8(0, 16, true);
        _0x56c21f.setInt16(1, 0 | _0x90a1a7.x - _0x996564.offset.x, true);
        _0x56c21f.setInt16(3, 0 | _0x90a1a7.y - _0x996564.offset.y, true);
        _0x56c21f.setUint32(5, _0x90a1a7.mass, true);
        _0x1530af.send(_0x56c21f.buffer);
      }
    }
    static ["aliveStatus"]() {
      if (_0x1530af.connected) {
        const _0x42182d = this.createView(2);
        const _0x4a1c40 = _0x90a1a7.isAlive ? 1 : 0;
        _0x42182d.setUint8(0, 32, true);
        _0x42182d.setUint8(1, _0x4a1c40, true);
        _0x1530af.send(_0x42182d.buffer);
      }
    }
    static ["chat"](_0x3b9cd8, _0x39cf3c) {
      if (_0x1530af.connected) {
        const _0x13b87d = unescape(encodeURIComponent(_0x39cf3c));
        const _0x215c48 = this.createView(3 + _0x13b87d.length);
        _0x215c48.setUint8(0, 64, true);
        _0x215c48.setUint8(1, _0x3b9cd8, true);
        for (let _0x4d2d0f = _0x13b87d.length; _0x4d2d0f--;) {
          _0x215c48.setUint8(_0x4d2d0f + 2, _0x13b87d.charCodeAt(_0x4d2d0f), true);
        }
        _0x215c48.setUint8(2 + _0x13b87d.length, 0, true);
        _0x1530af.send(_0x215c48.buffer);
      }
    }
    static ["commander"]() {
      if (_0x1530af.connected) {
        const _0x5bcfa5 = 1 === _0x90a1a7.typeID ? _0x996564.offset : _0x996564.offset2;
        const _0xdd3cb5 = _0x128142.canvasX - _0x5bcfa5.x;
        const _0x33bfdb = _0x128142.canvasY - _0x5bcfa5.y;
        const _0x354f1b = this.createView(5);
        _0x354f1b.setUint8(0, 128, true);
        _0x354f1b.setInt16(1, 0 | _0xdd3cb5, true);
        _0x354f1b.setInt16(3, 0 | _0x33bfdb, true);
        _0x1530af.send(_0x354f1b.buffer);
      }
    }
    static ["spectator"]() {}
    static ["rgbMode"]() {
      if (_0x1530af.connected) {
        const _0x2e4a9b = _0x90a1a7.isRGB ? 1 : 0;
        const _0x4a3312 = this.createView(3);
        _0x4a3312.setUint8(0, 0, true);
        _0x4a3312.setUint8(1, 8, true);
        _0x4a3312.setUint8(2, _0x2e4a9b, true);
        _0x1530af.send(_0x4a3312.buffer);
      }
    }
    static ["biggest"]() {
      if (_0x1530af.connected) {
        const _0x1b28af = _0xddb6d6.spectatePoint.x - _0x996564.offset.x;
        const _0x44131d = _0xddb6d6.spectatePoint.y - _0x996564.offset.y;
        const _0x4fac57 = this.createView(6);
        _0x4fac57.setUint8(0, 0, true);
        _0x4fac57.setUint8(1, 16, true);
        _0x4fac57.setInt16(2, 0 | _0x1b28af, true);
        _0x4fac57.setInt16(4, 0 | _0x44131d, true);
        _0x1530af.send(_0x4fac57.buffer);
      }
    }
  }
  class _0x386cbc {
    static ['init']() {
      this.canvas = _0x24f9ab.getElementById("canvas");
      this.ctx = this.canvas.getContext('2d');
      this.pi2 = 2 * Math.PI;
      this.skinMap = new Map();
      this.downloadedSkins = new Map();
      this.knownSkins = {};
      this.commanderPoints = new Set();
      this.rgbTeammates = new Set();
      this.indicator = this.cacheIndicator();
      this.getKnownSkins();
      this._bgImage = new Image();
      this._bgImage.crossOrigin = "anonymous";
      this._bgReady = false;
      this._ceImage = new Image();
      this._ceImage.crossOrigin = "anonymous";
      this._ceReady = false;
      this._loadCeImage(_0x480be4.commanderImageUrl);
      _0x51fad0.init();
      _0x2ab3a8.init();
      this.resizeCanvas();
      _0x1c478d.onresize = () => {
        this.resizeCanvas();
      };
    }
    static ["_loadCeImage"](_0x2c6a91) {
      this._ceReady = false;
      if (_0x2c6a91 && _0x2c6a91.length > 0) {
        this._ceImage = new Image();
        this._ceImage.crossOrigin = "anonymous";
        this._ceImage.onload = () => { this._ceReady = true; };
        this._ceImage.onerror = () => { this._ceReady = false; };
        this._ceImage.src = _0x2c6a91;
      }
    }
    static ["_loadBgImage"](_0x1a2b3c) {
      if (_0x1a2b3c && _0x1a2b3c.length > 0) {
        this._bgImage = new Image();
        this._bgImage.crossOrigin = "anonymous";
        this._bgImage.onload = () => { this._bgReady = true; };
        this._bgImage.onerror = () => { this._bgReady = false; };
        this._bgImage.src = _0x1a2b3c;
      } else {
        this._bgReady = false;
      }
    }
    static ["resizeCanvas"]() {
      this.canvas.width = 0 | _0x1c478d.innerWidth;
      this.canvas.height = 0 | _0x1c478d.innerHeight;
    }
    static ["run"]() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.imageSmoothingEnabled = _0x2cc0f3.antiAliasing === "on";
      this.ctx.save();
      this.vanillaGrid();
      const _0x810445 = (this.canvas.width >> 1) / _0xddb6d6.viewport - _0xddb6d6.x;
      const _0x2de058 = (this.canvas.height >> 1) / _0xddb6d6.viewport - _0xddb6d6.y;
      this.ctx.scale(_0xddb6d6.viewport, _0xddb6d6.viewport);
      this.ctx.translate(_0x810445, _0x2de058);
      if (this._bgReady) {
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.rect(_0x996564.left, _0x996564.top, _0x996564.edge, _0x996564.edge);
        this.ctx.clip();
        this.ctx.drawImage(this._bgImage, _0x996564.left, _0x996564.top, _0x996564.edge, _0x996564.edge);
        this.ctx.restore();
      }
      _0x2ab3a8.update();
      _0x51fad0.render();
      this.border();
      _0x4c0fb5.render();
      this.createSkinMap();
      this.createRGBset();
      this.mouseTracker();
      this.cells();
      this.partyCells();
      this.commands();
      _0x34f3bb.cleaner();
      this.ctx.restore();
    }
    static ["vanillaGrid"]() {
      if ("off" !== _0x2cc0f3.vanillaGrid) {
        const _0x68655c = this.ctx;
        const _0x2a7ec2 = _0xddb6d6.viewport;
        const _0x390693 = this.canvas.width / _0x2a7ec2;
        const _0x4ab074 = this.canvas.height / _0x2a7ec2;
        let _0x4d6612 = (-_0xddb6d6.x + _0x390693 / 2) % 50;
        let _0x173c0d = (-_0xddb6d6.y + _0x4ab074 / 2) % 50;
        _0x68655c.strokeStyle = _0x480be4.gridColor;
        _0x68655c.lineWidth = 0 | Math.min(_0x480be4.gridWidth, 20) * _0xddb6d6.viewport;
        _0x68655c.globalAlpha = 0.2 * _0x2a7ec2;
        for (_0x68655c.beginPath(); _0x4d6612 < _0x390693;) {
          _0x68655c.moveTo(_0x4d6612 * _0x2a7ec2, 0);
          _0x68655c.lineTo(_0x4d6612 * _0x2a7ec2, _0x4ab074 * _0x2a7ec2);
          _0x4d6612 += 50;
        }
        for (; _0x173c0d < _0x4ab074;) {
          _0x68655c.moveTo(0, _0x173c0d * _0x2a7ec2);
          _0x68655c.lineTo(_0x390693 * _0x2a7ec2, _0x173c0d * _0x2a7ec2);
          _0x173c0d += 50;
        }
        _0x68655c.closePath();
        _0x68655c.stroke();
        _0x68655c.globalAlpha = 1;
      }
    }
    static ["border"]() {
      const _0x3f1e55 = this.ctx;
      const _0x1b4ff4 = _0x480be4.borderWidth >> 1;
      const _0x1b2d38 = _0x480be4.borderOpacity / 10;
      _0x3f1e55.globalAlpha = _0x1b2d38;
      if (_0x480be4.borderGlowSize > 0) {
        _0x3f1e55.shadowBlur = ~~_0x480be4.borderGlowSize;
        _0x3f1e55.shadowColor = _0x480be4.borderGlowColor;
      }
      if (_0x480be4.rainbowBorder !== "on") {
        _0x3f1e55.strokeStyle = _0x480be4.borderColor;
        _0x3f1e55.lineWidth = _0x480be4.borderWidth;
        _0x3f1e55.strokeRect(_0x996564.left - _0x1b4ff4, _0x996564.top - _0x1b4ff4, _0x996564.edge + _0x480be4.borderWidth, _0x996564.edge + _0x480be4.borderWidth);
        _0x3f1e55.shadowBlur = 0;
        _0x3f1e55.shadowColor = 'transparent';
        _0x3f1e55.globalAlpha = 1;
        return;
      }
      const _0x14e95b = _0x480be4.borderWidth;
      const _0x2f4167 = _0x996564.left - _0x1b4ff4;
      const _0x531a16 = _0x996564.top - _0x1b4ff4;
      const _0x3e7362 = _0x996564.edge + _0x14e95b;
      const _0x18ec80 = _0x996564.edge + _0x14e95b;
      const _0x298e0a = (_0x480be4._rainbowHue || 0) % 360;
      _0x480be4._rainbowHue = _0x298e0a + 2;
      const _0x1fce1b = _0x298e0a;
      const _0x2c7ca7 = (_0x298e0a + 72) % 360;
      const _0x4289cc = (_0x298e0a + 144) % 360;
      const _0x1d5a73 = (_0x298e0a + 216) % 360;
      const _0x160a8f = (_0x298e0a + 288) % 360;
      let _0x22cafb = _0x3f1e55.createLinearGradient(_0x2f4167, _0x531a16, _0x2f4167, _0x531a16 + _0x18ec80);
      _0x22cafb.addColorStop(0, "hsl(" + _0x1fce1b + ",100%,50%)");
      _0x22cafb.addColorStop(0.25, "hsl(" + _0x2c7ca7 + ",100%,50%)");
      _0x22cafb.addColorStop(0.5, "hsl(" + _0x4289cc + ",100%,50%)");
      _0x22cafb.addColorStop(0.75, "hsl(" + _0x1d5a73 + ",100%,50%)");
      _0x22cafb.addColorStop(1, "hsl(" + _0x160a8f + ",100%,50%)");
      _0x3f1e55.fillStyle = _0x22cafb;
      _0x3f1e55.fillRect(_0x2f4167, _0x531a16, _0x14e95b, _0x18ec80);
      _0x22cafb = _0x3f1e55.createLinearGradient(_0x2f4167 + _0x3e7362, _0x531a16, _0x2f4167 + _0x3e7362, _0x531a16 + _0x18ec80);
      _0x22cafb.addColorStop(0, "hsl(" + _0x160a8f + ",100%,50%)");
      _0x22cafb.addColorStop(0.25, "hsl(" + _0x1d5a73 + ",100%,50%)");
      _0x22cafb.addColorStop(0.5, "hsl(" + _0x4289cc + ",100%,50%)");
      _0x22cafb.addColorStop(0.75, "hsl(" + _0x2c7ca7 + ",100%,50%)");
      _0x22cafb.addColorStop(1, "hsl(" + _0x1fce1b + ",100%,50%)");
      _0x3f1e55.fillStyle = _0x22cafb;
      _0x3f1e55.fillRect(_0x2f4167 + _0x3e7362 - _0x14e95b, _0x531a16, _0x14e95b, _0x18ec80);
      _0x22cafb = _0x3f1e55.createLinearGradient(_0x2f4167 + _0x3e7362, _0x531a16, _0x2f4167, _0x531a16);
      _0x22cafb.addColorStop(0, "hsl(" + _0x160a8f + ",100%,50%)");
      _0x22cafb.addColorStop(0.25, "hsl(" + _0x1d5a73 + ",100%,50%)");
      _0x22cafb.addColorStop(0.5, "hsl(" + _0x4289cc + ",100%,50%)");
      _0x22cafb.addColorStop(0.75, "hsl(" + _0x2c7ca7 + ",100%,50%)");
      _0x22cafb.addColorStop(1, "hsl(" + _0x1fce1b + ",100%,50%)");
      _0x3f1e55.fillStyle = _0x22cafb;
      _0x3f1e55.fillRect(_0x2f4167, _0x531a16, _0x3e7362, _0x14e95b);
      _0x22cafb = _0x3f1e55.createLinearGradient(_0x2f4167, _0x531a16 + _0x18ec80, _0x2f4167 + _0x3e7362, _0x531a16 + _0x18ec80);
      _0x22cafb.addColorStop(0, "hsl(" + _0x1fce1b + ",100%,50%)");
      _0x22cafb.addColorStop(0.25, "hsl(" + _0x2c7ca7 + ",100%,50%)");
      _0x22cafb.addColorStop(0.5, "hsl(" + _0x4289cc + ",100%,50%)");
      _0x22cafb.addColorStop(0.75, "hsl(" + _0x1d5a73 + ",100%,50%)");
      _0x22cafb.addColorStop(1, "hsl(" + _0x160a8f + ",100%,50%)");
      _0x3f1e55.fillStyle = _0x22cafb;
      _0x3f1e55.fillRect(_0x2f4167, _0x531a16 + _0x18ec80 - _0x14e95b, _0x3e7362, _0x14e95b);
      _0x3f1e55.shadowBlur = 0;
      _0x3f1e55.shadowColor = 'transparent';
      _0x3f1e55.globalAlpha = 1;
    }
    static ['cells']() {
      const _0xfdf4f4 = this.ctx;
      const _0x7ae23d = _0x2cc0f3.cellMass !== "off";
      const _0x54c029 = _0x2cc0f3.cellNick !== "off";
      const _0x8efbd4 = _0x2cc0f3.hideOwnNick === 'on';
      const _0x5c97e3 = _0x2cc0f3.hideOwnMass === 'on';
      const _0x290b1c = _0x2cc0f3.urlSkins === 'on';
      const _0x24bf81 = _0x2cc0f3.arbSkins === 'on';
      const _0x4f4928 = _0x2cc0f3.teamIndicator === 'on';
      const _0x3060bb = _0x2cc0f3.multiboxRing === 'on';
      const _0x1c7e25 = _0x480be4.indicatorSize;
      const _0x5ab10a = _0x480be4.cellTransparency / 100;
      const _0x1005b0 = _0x480be4.cellNickSize / 100;
      const _0x2549e3 = _0x480be4.cellMassSize / 100;
      const _0x494dac = _0x2cc0f3.cellTextAnimation;
      const _0x355e3d = _0x480be4.multiboxActive;
      const _0x15f66b = _0x480be4.multiboxInactive;
      const _0x26462b = _0x480be4.multiboxRingWidth;
      const _0x30af86 = _0x480be4.lightenCellColor / 100;
      _0xfdf4f4.strokeStyle = _0x480be4.virusBorderColor;
      _0xfdf4f4.lineWidth = _0x480be4.virusBorderWidth;
      for (const _0x5987fa of _0x14d4a3.sortedCells) {
        const _0x48567b = !_0x5987fa.isVirus && !_0x5987fa.isEjected && this.skinMap.has(_0x5987fa.worldID);
        _0x5987fa.animate();
        let _0x21653d = 1;
        const _0xe84373 = {
          x: 0x0,
          y: 0x0
        };
        const _0x1241cd = _0x5987fa.cellType === 2 ? _0x996564.position : _0xe84373;
        if (_0x5987fa.fadeStartTime) {
          _0x21653d = 1 - (_0xb45f1b.time - _0x5987fa.fadeStartTime) / _0x2cc0f3.CellAnimation;
          _0x21653d = Math.max(0, Math.min(1, _0x21653d));
        }
        _0xfdf4f4.beginPath();
        _0xfdf4f4.arc(_0x5987fa.animX - _0x1241cd.x, _0x5987fa.animY - _0x1241cd.y, _0x5987fa.animRadius + 5, 0, this.pi2, true);
        _0xfdf4f4.closePath();
        if (_0x5987fa.isVirus) {
          _0xfdf4f4.fillStyle = _0x480be4.virusColor;
          _0xfdf4f4.globalAlpha = 0.7;
          if (_0x480be4.virusGlow === "on") {
            _0xfdf4f4.shadowBlur = ~~(_0x480be4.virusGlowSize * _0x480be4.virusGlowStrength / 5);
            _0xfdf4f4.shadowColor = _0x480be4.virusGlowColor;
          }
          _0xfdf4f4.fill();
          _0xfdf4f4.shadowBlur = 0;
          _0xfdf4f4.shadowColor = 'transparent';
          _0xfdf4f4.globalAlpha = 1;
          _0xfdf4f4.stroke();
          if (_0x2cc0f3.virusRing === 'on') {
            const _0x2cx = _0x5987fa.animX - _0x1241cd.x;
            const _0x2cy = _0x5987fa.animY - _0x1241cd.y;
            const _0x2cr = _0x5987fa.animRadius + 5;
            const _0x2teeth = 16;
            const _0x2step = this.pi2 / _0x2teeth;
            const _0x2toothH = _0x2cr * _0x480be4.virusRingWidth / 100;
            const _0x2outerR = _0x2cr + _0x2toothH;
            const _0x2innerR = _0x2cr;
            const _0x2ctrlR = _0x2innerR + _0x2toothH * 0.7;
            const _0x2rot = (_0xb45f1b.time / 3000 * (_0x480be4.globalRotationSpeed || 5)) % this.pi2;
            _0xfdf4f4.save();
            _0xfdf4f4.translate(_0x2cx, _0x2cy);
            _0xfdf4f4.rotate(_0x2rot);
            _0xfdf4f4.fillStyle = _0x480be4.virusGearColor || _0x480be4.virusRingColor;
            _0xfdf4f4.globalAlpha = 0.8;
            for (let _0x2i = 0; _0x2i < _0x2teeth; _0x2i++) {
              const _0x2a = _0x2i * _0x2step;
              const _0x2l = _0x2a - _0x2step * 0.3;
              const _0x2c = _0x2a + _0x2step * 0.3;
              _0xfdf4f4.beginPath();
              _0xfdf4f4.moveTo(Math.cos(_0x2l) * _0x2innerR, Math.sin(_0x2l) * _0x2innerR);
              _0xfdf4f4.quadraticCurveTo(Math.cos(_0x2l) * _0x2ctrlR, Math.sin(_0x2l) * _0x2ctrlR, Math.cos(_0x2a) * _0x2outerR, Math.sin(_0x2a) * _0x2outerR);
              _0xfdf4f4.quadraticCurveTo(Math.cos(_0x2c) * _0x2ctrlR, Math.sin(_0x2c) * _0x2ctrlR, Math.cos(_0x2c) * _0x2innerR, Math.sin(_0x2c) * _0x2innerR);
              _0xfdf4f4.closePath();
              _0xfdf4f4.fill();
            }
            _0xfdf4f4.globalAlpha = 1;
            _0xfdf4f4.restore();
            _0xfdf4f4.strokeStyle = _0x480be4.virusBorderColor;
            _0xfdf4f4.lineWidth = _0x480be4.virusBorderWidth;
          }
          if (_0x2cc0f3.virusMass === "text") {
            const _0x175afd = _0x5987fa.animX - _0x1241cd.x;
            const _0x4f4e2b = _0x5987fa.animY - _0x1241cd.y;
            const _0x4edbb9 = ~~_0x5987fa.animRadius * 0.3;
            _0xfdf4f4.fillStyle = "rgba(0,0,0,0.7)";
            _0xfdf4f4.font = "bold " + Math.max(12, _0x4edbb9) + "px ubuntu";
            _0xfdf4f4.textAlign = "center";
            _0xfdf4f4.textBaseline = "middle";
            _0xfdf4f4.fillText(_0x5987fa.mass, _0x175afd + 1, _0x4f4e2b + 1);
            _0xfdf4f4.fillStyle = "#fff";
            _0xfdf4f4.fillText(_0x5987fa.mass, _0x175afd, _0x4f4e2b);
          } else if (_0x2cc0f3.virusMass === "fill") {
            const _0x175afd = _0x5987fa.animX - _0x1241cd.x;
            const _0x4f4e2b = _0x5987fa.animY - _0x1241cd.y;
            const _0x2massProg = Math.min(1, Math.max(0, (_0x5987fa.mass - 100) / 100));
            const _0x2fillR = _0x5987fa.animRadius * _0x2massProg;
            _0xfdf4f4.save();
            _0xfdf4f4.globalAlpha = 0.8;
            _0xfdf4f4.fillStyle = _0x480be4.virusBorderColor;
            _0xfdf4f4.beginPath();
            _0xfdf4f4.arc(_0x175afd, _0x4f4e2b, _0x2fillR, 0, this.pi2, true);
            _0xfdf4f4.closePath();
            _0xfdf4f4.fill();
            _0xfdf4f4.globalAlpha = 1;
            _0xfdf4f4.restore();
          }
        } else if (_0x5987fa.isFood && _0x2cc0f3.foodGlow === "on") {
          _0xfdf4f4.fillStyle = _0x2ab3a8.getColor(_0x5987fa.colorObject, _0x30af86);
          _0xfdf4f4.shadowBlur = ~~(_0x480be4.foodGlowSize * _0x480be4.foodGlowStrength / 5);
          _0xfdf4f4.shadowColor = _0x480be4.foodGlowColor;
          _0xfdf4f4.fill();
          _0xfdf4f4.shadowBlur = 0;
          _0xfdf4f4.shadowColor = 'transparent';
        } else {
          _0xfdf4f4.fillStyle = _0x2cc0f3.grayscaleInactive === "on" && _0x5987fa.isMine && _0x5987fa.cellType !== _0x90a1a7.typeID ? _0x2ab3a8.getGrayscale(_0x5987fa.colorObject, _0x30af86) : _0x2ab3a8.getColor(_0x5987fa.colorObject, _0x30af86);
          if (_0x5ab10a * _0x21653d < 1) {
            _0xfdf4f4.globalAlpha = _0x5ab10a * _0x21653d;
            _0xfdf4f4.fill();
            _0xfdf4f4.globalAlpha = 1;
          } else {
            _0xfdf4f4.fill();
          }
        }
        if (_0x5987fa.isEjected) {
          continue;
        }
        if (!_0x5987fa.isVirus && _0x21653d === 1 && _0x4f4928 && !_0x5987fa.isMine && _0x48567b && _0x5987fa.animRadius * _0xddb6d6.viewport < 50) {
          _0xfdf4f4.drawImage(this.indicator, _0x5987fa.animX - _0x1241cd.x - _0x1c7e25 / 2, _0x5987fa.animY - _0x1241cd.y - _0x5987fa.animRadius - 10 - _0x1c7e25, _0x1c7e25, _0x1c7e25);
        }
        if (_0x5987fa.arbSkin) {
          console.log(_0x5987fa);
        }
        let _0x20f1ed = _0x386cbc.code2Url(_0x386cbc.getImgurCode(_0x5987fa.skin || '')).includes("XXXXXXX") ? _0x5987fa.skin : _0x5987fa.arbSkin;
        const _0x1a6b68 = _0x48567b && _0x290b1c && this.getCustomSkin(_0x5987fa.worldID);
        const _0xb89262 = _0x24bf81 && !_0x1a6b68 && _0x20f1ed && this.knownSkins.hasOwnProperty(_0x20f1ed.replace(/free\/|.png/, '')) && this.get3rbSkin(_0x20f1ed);
        if (_0x1a6b68) {
          _0xfdf4f4.drawImage(_0x1a6b68, _0x5987fa.animX - _0x1241cd.x - (_0x5987fa.animRadius + 5), _0x5987fa.animY - _0x1241cd.y - (_0x5987fa.animRadius + 5), 2 * (_0x5987fa.animRadius + 5), 2 * (_0x5987fa.animRadius + 5));
        } else if (_0xb89262) {
          _0xfdf4f4.drawImage(_0xb89262, _0x5987fa.animX - _0x1241cd.x - (_0x5987fa.animRadius + 5), _0x5987fa.animY - _0x1241cd.y - (_0x5987fa.animRadius + 5), 2 * (_0x5987fa.animRadius + 5), 2 * (_0x5987fa.animRadius + 5));
        }
        if (_0x5987fa.isMine && _0x3060bb) {
          const _0x27d8ff = _0x5987fa.animRadius * _0x26462b / 100;
          _0xfdf4f4.beginPath();
          _0xfdf4f4.arc(_0x5987fa.animX - _0x1241cd.x, _0x5987fa.animY - _0x1241cd.y, _0x5987fa.animRadius + 5 - (_0x27d8ff >> 1), 0, this.pi2, true);
          _0xfdf4f4.closePath();
          _0xfdf4f4.lineWidth = _0x27d8ff | 0;
          _0xfdf4f4.strokeStyle = _0x5987fa.cellType === _0x90a1a7.typeID ? _0x355e3d : _0x15f66b;
          _0xfdf4f4.stroke();
          _0xfdf4f4.strokeStyle = _0x480be4.virusBorderColor;
          _0xfdf4f4.lineWidth = _0x480be4.virusBorderWidth;
        }
        if (_0x2cc0f3.multiboxShield === "on" && _0x5987fa.isMine && _0x480be4._shieldReady) {
          const _0x3b92c8 = _0x5987fa.animRadius * 2.8;
          _0xfdf4f4.drawImage(_0x480be4.shieldImage, _0x5987fa.animX - _0x1241cd.x - _0x3b92c8 / 2, _0x5987fa.animY - _0x1241cd.y - _0x3b92c8 / 2, _0x3b92c8, _0x3b92c8);
        }
        if (_0x2cc0f3.cellLuminous === "on" && _0x5987fa.isMine) {
          _0xfdf4f4.shadowBlur = 30;
          _0xfdf4f4.shadowColor = _0x2ab3a8.getColor(_0x5987fa.colorObject, _0x30af86);
          _0xfdf4f4.beginPath();
          _0xfdf4f4.arc(_0x5987fa.animX - _0x1241cd.x, _0x5987fa.animY - _0x1241cd.y, _0x5987fa.animRadius + 5, 0, this.pi2, true);
          _0xfdf4f4.closePath();
          _0xfdf4f4.fill();
          _0xfdf4f4.shadowBlur = 0;
          _0xfdf4f4.shadowColor = 'transparent';
        }
        if (_0x480be4.maouCircle === "on" && _0x5987fa.isMine && _0x480be4._maouReady) {
          const _0x49e3f8 = _0x5987fa.animRadius * 2.6;
          _0xfdf4f4.drawImage(_0x480be4.maouCanvas, _0x5987fa.animX - _0x1241cd.x - _0x49e3f8 / 2, _0x5987fa.animY - _0x1241cd.y - _0x49e3f8 / 2, _0x49e3f8, _0x49e3f8);
        }
        if (_0x21653d === 1 && (_0x5987fa.isMine && !_0x8efbd4 || !_0x5987fa.isMine && _0x54c029)) {
          const _0x14859d = _0x34f3bb.nick(_0x5987fa);
          if (_0x14859d) {
            const _0x251937 = _0x494dac === 'on' ? _0x5987fa.animRadius : _0x494dac === 'stepped' ? 50 + 75 * (_0x5987fa.animRadius / 75 | 0) : _0x5987fa.radius;
            const _0x3798c7 = (_0x251937 * _0x1005b0 * 0.3 + 6 / _0xddb6d6.viewport) / _0x14859d.height;
            const _0x30a436 = _0x14859d.width * _0x3798c7;
            const _0x592c7c = _0x14859d.height * _0x3798c7;
            if (_0x30a436 > 0 && _0x592c7c > 0) {
              _0xfdf4f4.drawImage(_0x14859d, _0x5987fa.animX - _0x1241cd.x - (_0x30a436 >> 1), _0x5987fa.animY - _0x1241cd.y - (_0x592c7c >> 1), _0x30a436, _0x592c7c);
            }
          }
        }
        if (_0x21653d === 1 && !_0x5987fa.isVirus && (_0x5987fa.isMine && !_0x5c97e3 || !_0x5987fa.isMine && _0x7ae23d)) {
          const _0x2e6835 = _0x34f3bb.mass(_0x5987fa);
          if (_0x2e6835) {
            const _0x1c92d8 = _0x494dac === 'on' ? _0x5987fa.animRadius : _0x494dac === "stepped" ? 50 + 75 * (_0x5987fa.animRadius / 75 | 0) : _0x5987fa.radius;
            const _0x2be8dc = (_0x1c92d8 * _0x2549e3 * 0.3 + 6 / _0xddb6d6.viewport) / _0x2e6835.height;
            const _0x348dc3 = _0x2e6835.width * _0x2be8dc;
            const _0x418aca = _0x2e6835.height * _0x2be8dc;
            const _0x20bbfa = _0x5987fa.isUnnamed || _0x5987fa.isMine && _0x8efbd4 || !_0x5987fa.isMine && !_0x54c029 ? -(_0x418aca >> 1) : _0x418aca >> 2;
            if (_0x348dc3 > 0 && _0x418aca > 0) {
              _0xfdf4f4.drawImage(_0x2e6835, _0x5987fa.animX - _0x1241cd.x - (_0x348dc3 >> 1), _0x5987fa.animY - _0x1241cd.y + _0x20bbfa, _0x348dc3, _0x418aca);
            }
          }
        }
      }
    }
    static ["partyCells"]() {
      const _ctx = this.ctx;
      const _viewAlpha = _0x480be4.cellTransparency / 100;
      for (const [_pid, _cells] of _0x12ac51.partyCells) {
        const _pp = _0x12ac51.teamPlayers.get(_pid);
        if (!_pp) continue;
        const _wid = _pp.worldID;
        const _hasSkin = this.skinMap.has(_wid);
        for (let _ci = 0; _ci < _cells.length; _ci++) {
          const _c = _cells[_ci];
          const _pr = _c.r;
          const _px = _c.x;
          const _py = _c.y;
          _ctx.beginPath();
          _ctx.arc(_px, _py, _pr + 5, 0, this.pi2, true);
          _ctx.closePath();
          if (_hasSkin) {
            const _ps = this.getCustomSkin(_pp.worldID);
            if (_ps) {
              _ctx.drawImage(_ps, _px - _pr - 5, _py - _pr - 5, 2 * (_pr + 5), 2 * (_pr + 5));
            }
          } else {
            _ctx.globalAlpha = _viewAlpha;
            _ctx.fillStyle = _pp.colorHex || '#555';
            _ctx.fill();
            _ctx.globalAlpha = 1;
          }
          _ctx.strokeStyle = 'rgba(255,255,255,0.3)';
          _ctx.lineWidth = 2;
          _ctx.stroke();
          if (_ci === 0 && _pp.nick) {
            const _nf = 'bold ' + Math.max(12, _pr * 0.3) + 'px Ubuntu';
            _ctx.font = _nf;
            _ctx.fillStyle = '#fff';
            _ctx.textAlign = 'center';
            _ctx.textBaseline = 'bottom';
            _ctx.fillText(_pp.nick, _px, _py - _pr - 5);
          }
          if (_c.m > 0) {
            const _mf = Math.max(12, _pr * 0.3) + 'px Ubuntu';
            _ctx.font = _mf;
            _ctx.fillStyle = '#fff';
            _ctx.textAlign = 'center';
            _ctx.textBaseline = 'middle';
            _ctx.fillText(_c.m, _px, _py);
          }
        }
      }
    }
    static ["createSkinMap"]() {
      this.arbSkin = _0x14f7b2("#arbSkin").val();
      this.skinMap.clear();
      if (!_0x90a1a7.skin.includes("XXXXXXX")) {
        this.skinMap.set(_0x90a1a7.worldID, this.code2Url(_0x90a1a7.skin));
      } else if (this.arbSkin) {
        this.skinMap.set(_0x90a1a7.worldID, "https://patient-leaf-2f1a.maamargasouma.workers.dev/res/skins/free/" + this.arbSkin.replace(/free\/|.png/g, '') + ".png");
      }
      if (_0x90a1a7.skin2 && !_0x90a1a7.skin2.includes("XXXXXXX")) {
        this.skinMap.set(_0x90a1a7.worldID2, this.code2Url(_0x90a1a7.skin2));
      } else if (!_0x90a1a7.skin.includes("XXXXXXX")) {
        this.skinMap.set(_0x90a1a7.worldID2, this.code2Url(_0x90a1a7.skin));
      } else if (this.arbSkin) {
        this.skinMap.set(_0x90a1a7.worldID2, "https://patient-leaf-2f1a.maamargasouma.workers.dev/res/skins/free/" + this.arbSkin.replace(/free\/|.png/g, '') + '.png');
      }
      for (const _0x5d3988 of _0x12ac51.teamPlayers.values()) if (_0x5d3988.isAlive && !_0x5d3988.skin.includes("XXXXXXX")) {
        this.skinMap.set(_0x5d3988.worldID, this.code2Url(_0x5d3988.skin));
      }
    }
    static ["createRGBset"]() {
      this.rgbTeammates.clear();
      if (_0x90a1a7.isRGB) {
        this.rgbTeammates.add(_0x90a1a7.worldID);
      }
      for (const _0x33940b of _0x12ac51.teamPlayers.values()) if (_0x33940b.isAlive && _0x33940b.isRGB) {
        this.rgbTeammates.add(_0x33940b.worldID);
      }
    }
    static ["getCustomSkin"](_0xb1bf13) {
      const _0x35f9db = this.skinMap.get(_0xb1bf13);
      if (!_0x35f9db) {
        return false;
      }
      const _0x4bd4ce = this.downloadedSkins.get(_0x35f9db);
      return undefined === _0x4bd4ce ? (this.downloadSkin(_0x35f9db), false) : _0x4bd4ce;
    }
    static ["get3rbSkin"](_0x1d8246) {
      const _0x3bf8cf = this.downloadedSkins.get(_0x1d8246);
      return undefined === _0x3bf8cf ? (this.download3rbSkin(_0x1d8246), false) : _0x3bf8cf;
    }
    static ["download3rbSkin"](_0x26f184) {
      this.downloadedSkins.set(_0x26f184, false);
      const _0x323825 = new Image();
      _0x323825.crossOrigin = "anonymous";
      _0x323825.onload = () => {
        const _0x5753ba = _0x24f9ab.createElement("canvas");
        const _0x552ac8 = _0x5753ba.getContext('2d');
        _0x5753ba.width = 512;
        _0x5753ba.height = 512;
        _0x552ac8.beginPath();
        _0x552ac8.arc(256, 256, 256, 0, this.pi2, true);
        _0x552ac8.closePath();
        _0x552ac8.clip();
        _0x552ac8.drawImage(_0x323825, 0, 0, 512, 512);
        _0x323825.onload = null;
        _0x323825.src = _0x5753ba.toDataURL();
        this.downloadedSkins.set(_0x26f184, _0x323825);
      };
      _0x323825.src = "https://patient-leaf-2f1a.maamargasouma.workers.dev/res/skins/free/" + _0x26f184.replace(/free\/|.png/g, '') + ".png";
    }
    static ["downloadSkin"](_0x31eb71) {
      this.downloadedSkins.set(_0x31eb71, false);
      const _0x252d42 = new Image();
      _0x252d42.crossOrigin = "anonymous";
      _0x252d42.onload = () => {
        const _0x4282fb = _0x24f9ab.createElement("canvas");
        const _0x56a6bc = _0x4282fb.getContext('2d');
        _0x4282fb.width = 512;
        _0x4282fb.height = 512;
        _0x56a6bc.beginPath();
        _0x56a6bc.arc(256, 256, 256, 0, this.pi2, true);
        _0x56a6bc.closePath();
        _0x56a6bc.clip();
        _0x56a6bc.drawImage(_0x252d42, 0, 0, 512, 512);
        _0x252d42.onload = null;
        _0x252d42.src = _0x4282fb.toDataURL();
        this.downloadedSkins.set(_0x31eb71, _0x252d42);
      };
      _0x252d42.src = _0x31eb71;
    }
    static ["getImgurCode"](_0x96fe5e) {
      const _0x5e0df5 = _0x96fe5e.match(/https?:\/\/.+\.(png|jpg|gif|webp)/i);
      return null === _0x5e0df5 ? "XXXXXXX" : _0x5e0df5[0];
    }
    static ["getRaindowFlag"](_0x4a64ed) {
      return null !== _0x4a64ed.match(/#hue\s??=\s??auto\s??,\s??blend\s??=\s??auto/i);
    }
    static ["code2Url"](_0x4e8aaa) {
      return _0x4e8aaa.startsWith("http") ? _0x4e8aaa : "https://i.imgur.com/" + _0x4e8aaa + '.png';
    }
    static ["commands"]() {
      const _0x5b9c43 = this.ctx;
      const _0x41c288 = 'off' === _0x2cc0f3.commander;
      for (const _0x52ff22 of this.commanderPoints.values()) {
        const _0x537d77 = _0x52ff22.x;
        const _0x130956 = _0x52ff22.y;
        const _0x266134 = _0xb45f1b.time - _0x52ff22.time;
        if (_0x266134 > 2000) {
          this.commanderPoints['delete'](_0x52ff22);
        } else {
          if (!(_0x41c288 || 50 > _0x266134)) {
            const _0xa9830a = 1000 * _0x266134 / 2000;
            const _0x3bc5a1 = _0xa9830a > 333 ? (1000 - _0xa9830a) / 667 : 1;
            const _0x5c9d41 = 200 * _0xa9830a / 1000 * 8;
            const _0x1d25a8 = _0x266134 / 1000 * (_0x480be4.globalRotationSpeed || 5);
            _0x5b9c43.save();
            _0x5b9c43.globalAlpha = _0x3bc5a1;
            _0x5b9c43.translate(_0x537d77, _0x130956);
            if (this._ceReady) {
              _0x5b9c43.save();
              _0x5b9c43.rotate(_0x1d25a8 * 3);
              _0x5b9c43.drawImage(this._ceImage, -_0x5c9d41, -_0x5c9d41, _0x5c9d41 * 2, _0x5c9d41 * 2);
              _0x5b9c43.restore();
            } else if (_0x480be4._maouReady) {
              _0x5b9c43.save();
              _0x5b9c43.rotate(_0x1d25a8 * 3);
              _0x5b9c43.drawImage(_0x480be4.maouOuter, -_0x5c9d41, -_0x5c9d41, _0x5c9d41 * 2, _0x5c9d41 * 2);
              _0x5b9c43.restore();
              _0x5b9c43.save();
              _0x5b9c43.rotate(-_0x1d25a8 * 2);
              _0x5b9c43.drawImage(_0x480be4.maouInner, -_0x5c9d41, -_0x5c9d41, _0x5c9d41 * 2, _0x5c9d41 * 2);
              _0x5b9c43.restore();
            } else {
              const _0x47c30e = 1000 * _0x266134 / 2000;
              const _0x490014 = _0x5b9c43.createRadialGradient(0, 0, 0.7 * _0x47c30e, 0, 0, _0x47c30e);
              _0x490014.addColorStop(0, "rgba(0,0,0,0)");
              _0x490014.addColorStop(1, _0x480be4.commanderColor);
              _0x5b9c43.fillStyle = _0x490014;
              _0x5b9c43.beginPath();
              _0x5b9c43.arc(0, 0, _0x47c30e, 0, this.pi2);
              _0x5b9c43.closePath();
              _0x5b9c43.fill();
              _0x5b9c43.strokeStyle = "#ffffff";
              _0x5b9c43.lineWidth = 5;
              _0x5b9c43.stroke();
            }
            _0x5b9c43.restore();
          }
        }
      }
    }
    static ["mouseTracker"]() {
      if ("off" !== _0x2cc0f3.cursorLine) {
        const _0x33c20a = this.ctx;
        _0x33c20a.strokeStyle = _0x480be4.cursorLineColor;
        _0x33c20a.lineWidth = 4;
        _0x33c20a.lineCap = "round";
        _0x33c20a.lineJoin = "round";
        const _0xe7932f = (_0x128142.x - this.canvas.width / 2) / _0xddb6d6.viewport + _0xddb6d6.x;
        const _0x162ae5 = (_0x128142.y - this.canvas.height / 2) / _0xddb6d6.viewport + _0xddb6d6.y;
        _0x33c20a.beginPath();
        const _0x480493 = {
          x: 0x0,
          y: 0x0
        };
        const _0x50f43c = 1 === _0x90a1a7.typeID ? _0x14d4a3.myCells : _0x14d4a3.myCells2;
        const _0x522f5e = 1 === _0x90a1a7.typeID ? _0x480493 : _0x996564.position;
        for (const _0x545b71 of _0x50f43c.values()) {
          _0x33c20a.moveTo(_0x545b71.animX - _0x522f5e.x, _0x545b71.animY - _0x522f5e.y);
          _0x33c20a.lineTo(_0xe7932f, _0x162ae5);
        }
        _0x33c20a.closePath();
        _0x33c20a.stroke();
      }
    }
    static async ["getKnownSkins"]() {
      var _0x2fed90 = await fetch("https://3rb.io/php/Skins.php?type=free");
      var _0x525e1b = await _0x2fed90.json();
      var _0x406cf8 = Date.now();
      for (let _0x303c1f = 0; _0x303c1f < _0x525e1b.length; _0x303c1f++) {
        _0x386cbc.knownSkins[_0x525e1b[_0x303c1f]] = _0x406cf8;
      }
      for (let _0x4f2d13 in _0x386cbc.knownSkins) if (_0x386cbc.knownSkins[_0x4f2d13] != _0x406cf8) {
        delete _0x386cbc.knownSkins[_0x4f2d13];
      }
    }
    static ["cacheIndicator"]() {
      const _0x1339ea = _0x24f9ab.createElement("canvas");
      _0x1339ea.width = 150;
      _0x1339ea.height = 150;
      const _0x435b08 = _0x1339ea.getContext('2d');
      _0x435b08.textAlign = "center";
      _0x435b08.textBaseline = "middle";
      _0x435b08.font = "600 150px FontAwesome";
      _0x435b08.fillStyle = "rgba(255,255,255,1)";
      _0x435b08.fillText("ï¸", 75, 75);
      return _0x1339ea;
    }
  }
  class _0xb45f1b {
    static ["init"]() {
      this.time = Date.now();
      _0x18a8d1.init();
      _0x19d5af.init();
      _0x31c9b4.init();
      _0x14d4a3.init();
      _0x90a1a7.init();
      _0xddb6d6.init();
      _0x12ac51.init();
      _0x386cbc.init();
      this.loop = new _0x4660a8(() => {
        this.run();
      });
      setInterval(() => {
        _0x128142.send();
      }, 40);
    }
    static ['run']() {
      _0xb45f1b.refreshTime();
      _0x14d4a3.update();
      _0x90a1a7.update();
      _0xddb6d6.update();
      _0x386cbc.run();
      _0x5cda9b.run();
      _0x2a0c5c.update();
      _0x9547b4.update();
      _0x3a43e7.update();
    }
    static ["browserVersion"]() {
      const _0x79e4dd = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
      return !!_0x79e4dd && parseInt(_0x79e4dd[2], 10);
    }
    static ["refreshTime"]() {
      this.time = Date.now();
    }
  }
  _0x1c478d.onload = () => (_0x14f7b2("#loading-screen").html("<div class=\"ls-title\">3rb.io Multibox</div><div class=\"ls-spinner\"><span id=\"ls-icon\"><i class=\"fa fa-solid fa-circle-notch fa-spin\"></i></span><span style=\"display:block;\" id=\"ls-message\">Loading...</span></div>"), 49 > _0xb45f1b.browserVersion() ? (_0x14f7b2("#ls-icon").html("<i class=\"fa fa-chrome\" aria-hidden=\"true\"></i>"), void _0x14f7b2("#ls-message").text(" Only Chrome version 49 or higher are supported.")) : (_0x59f59a.init(), _0xb45f1b.init(), class {
    static ["init"]() {
      this.apiUrl = '';
      this.codeChecked = false;
      this.salt = _0x19d5af.get("profiles", "salt") || '';
      this.Code = _0x19d5af.get("profiles", "MXCode") || '';
      _0x14f7b2("#private-code").val(this.Code);
      this.addEvents();
      this.checkCode();
    }
    static ['addCode']() {
      this.salt = this.generateCode(5);
      _0x19d5af.set("profiles", "salt", this.salt);
      this.MXCode = this.generateCode(10);
      _0x19d5af.set("profiles", 'Code', this.Code);
      this.sendAddCode();
    }
    static ["addEvents"]() {
      _0x14f7b2("#user-code-check").click(() => {
        _0x14f7b2("#userCode").fadeOut(250);
        this.checkCode();
      });
    }
    static ["sendAddCode"]() {}
    static ["checkCode"]() {}
    static ["generateCode"](_0x385be4) {
      var _0x2121bd = '';
      for (var _0xde3000 = 0; _0xde3000 < _0x385be4; _0xde3000++) {
        var _0x2bac44 = Math.floor(62 * Math.random());
        var _0x461243 = _0x2bac44 += _0x2bac44 > 9 ? _0x2bac44 < 36 ? 55 : 61 : 48;
        _0x2121bd += String.fromCharCode(_0x461243);
      }
      return _0x2121bd;
    }
    static ["getApiUrl"]() {
      return window.atob(window.atob(window.atob(this.apiUrl)));
    }
  }.init()));
  const PARTY_SERVER = 'wss://endymion-party.ssdarkness70.workers.dev';
  class _0xpartyNet {
    static init() {
      this.ws = null;
      this.connected = false;
      this.roomCode = '';
      this.myId = '';
      this.posInterval = null;
      this.reconnectTimer = null;
      _0x14f7b2("#join-party").click(() => this.joinParty());
      _0x14f7b2("#create-party").click(() => this.createParty());
    }
    static joinParty() {
      const code = _0x14f7b2("#party-token").val().trim().toUpperCase();
      if (!code) return _0x40f48a.alert("Party", "Enter a party code!");
      this.roomCode = code;
      this.connect();
    }
    static createParty() {
      const code = Math.random().toString(36).substring(2, 8).toUpperCase();
      _0x14f7b2("#party-token").val(code);
      this.roomCode = code;
      this.connect();
    }
    static connect() {
      if (this.reconnectTimer) { clearTimeout(this.reconnectTimer); this.reconnectTimer = null; }
      if (this.ws) this.disconnect();
      this.ws = new WebSocket(PARTY_SERVER + '/party/' + this.roomCode + '/ws');
      this.ws.onopen = () => {
        this.connected = true;
        _0x40f48a.normal("Party", "Connected to room: " + this.roomCode);
        this.ws.send(JSON.stringify({
          type: 'join',
          nickname: _0x90a1a7.nick || 'Player',
          skin: _0x90a1a7.skin || '',
          tag: _0x90a1a7.tag || '',
          team: 1
        }));
        this.startPositionLoop();
      };
      this.ws.onmessage = (e) => {
        try { this.handleMessage(JSON.parse(e.data)); } catch (err) {}
      };
      this.ws.onclose = () => {
        this.ws = null;
        this.connected = false;
        this.stopPositionLoop();
        _0x40f48a.alert("Party", "Disconnected");
        this.reconnectTimer = setTimeout(() => { if (this.roomCode) this.connect(); }, 5000);
      };
      this.ws.onerror = () => {};
    }
    static disconnect() {
      if (this.reconnectTimer) { clearTimeout(this.reconnectTimer); this.reconnectTimer = null; }
      this.stopPositionLoop();
      if (this.ws) { this.ws.onclose = null; this.ws.close(); this.ws = null; }
      this.connected = false;
      this.roomCode = '';
      for (const _k of _0x12ac51.teamPlayers.keys()) {
        if (typeof _k === 'string') _0x12ac51.teamPlayers["delete"](_k);
      }
      _0x12ac51.partyCells.clear();
    }
    static startPositionLoop() {
      this.stopPositionLoop();
      this.posInterval = setInterval(() => {
        if (!this.connected || !this.ws || !_0x90a1a7.isAlive) return;
        const cells = [];
        for (const c of _0x14d4a3.myCells.values()) {
          cells.push({ x: ~~c.animX, y: ~~c.animY, r: ~~c.animRadius, m: c.staticMass });
        }
        for (const c of _0x14d4a3.myCells2.values()) {
          cells.push({ x: ~~c.animX, y: ~~c.animY, r: ~~c.animRadius, m: c.staticMass });
        }
        this.ws.send(JSON.stringify({
          type: 'position',
          cells: cells
        }));
      }, 200);
    }
    static stopPositionLoop() {
      if (this.posInterval) { clearInterval(this.posInterval); this.posInterval = null; }
    }
    static handleMessage(msg) {
      switch (msg.type) {
        case 'joined':
          this.myId = msg.id;
          break;
        case 'player_join':
        case 'player_update':
          _0x12ac51.teamPlayers.set(msg.id, new _0xb33099(msg.id));
          const p = _0x12ac51.teamPlayers.get(msg.id);
          p.nick = msg.tag ? '[' + msg.tag + '] ' + msg.nickname : msg.nickname;
          p.skin = msg.skin || '';
          p.colorHex = '#' + (Math.abs(msg.id.split('').reduce((a, c) => a + c.charCodeAt(0), 0) % 0xffffff)).toString(16).padStart(6, '0');
          p.team = msg.team || 1;
          p.isAlive = 1;
          break;
        case 'player_list':
          for (const _k of _0x12ac51.teamPlayers.keys()) {
            if (typeof _k === 'string') _0x12ac51.teamPlayers["delete"](_k);
          }
          _0x12ac51.partyCells.clear();
          for (const pl of msg.players) {
            if (pl.id === this.myId) continue;
            _0x12ac51.teamPlayers.set(pl.id, new _0xb33099(pl.id));
            const pp = _0x12ac51.teamPlayers.get(pl.id);
            pp.nick = pl.tag ? '[' + pl.tag + '] ' + pl.nickname : pl.nickname;
            pp.skin = pl.skin || '';
            pp.colorHex = '#' + (Math.abs(pl.id.split('').reduce((a, c) => a + c.charCodeAt(0), 0) % 0xffffff)).toString(16).padStart(6, '0');
            pp.team = pl.team || 1;
            pp.isAlive = 1;
          }
          break;
        case 'position':
          _0x12ac51.partyCells["delete"](msg.id);
          if (msg.cells) {
            const arr = [];
            let _tx = 0, _ty = 0, _tm = 0;
            for (const c of msg.cells) {
              arr.push({ x: c.x, y: c.y, r: c.r, m: c.m, id: msg.id });
              _tx += c.x; _ty += c.y; _tm += c.m;
            }
            _0x12ac51.partyCells.set(msg.id, arr);
            const tp = _0x12ac51.teamPlayers.get(msg.id);
            if (tp) {
              tp.x = _tx / arr.length;
              tp.y = _ty / arr.length;
              tp.mass = _tm;
            }
          }
          break;
        case 'leave':
          _0x12ac51.teamPlayers["delete"](msg.id);
          _0x12ac51.partyCells["delete"](msg.id);
          break;
        case 'chat':
          _0x40f48a.normal(msg.nickname || 'Party', msg.text);
          break;
      }
    }
  }
  _0xpartyNet.init();
}(window, $, document);
