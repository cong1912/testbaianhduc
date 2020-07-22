<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
  <meta name="theme-color" content="#000000">
  <link rel="manifest" href="./manifest.json">
  <link rel="shortcut icon" href="./favicon.ico">
  <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.16/webfont.js"></script>
  <script>WebFont.load({
      google: {families: ["Poppins:300,400,500,600,700", "Roboto:300,400,500,600,700"]},
      active: function () {
        sessionStorage.fonts = !0
      }
    })</script>
  <title>WeSports {{__('client.systemManagement')}}</title>
  <link href="./static/css/7.10edaa5a.chunk.css" rel="stylesheet">
  <link href="./static/css/main.6613cfe1.chunk.css" rel="stylesheet">
</head>
<body>
<noscript>You need to enable JavaScript to run this app.</noscript>
<div id="root"></div>
<script>-1 == navigator.userAgent.toUpperCase().indexOf("TRIDENT/") && -1 == navigator.userAgent.toUpperCase().indexOf("MSIE") || (document.body.className = "browser-ie")</script>
<script>!function (e) {
    function t(t) {
      for (var n, o, f = t[0], u = t[1], i = t[2], d = 0, s = []; d < f.length; d++) o = f[d], Object.prototype.hasOwnProperty.call(a, o) && a[o] && s.push(a[o][0]), a[o] = 0;
      for (n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
      for (l && l(t); s.length;) s.shift()();
      return c.push.apply(c, i || []), r()
    }

    function r() {
      for (var e, t = 0; t < c.length; t++) {
        for (var r = c[t], n = !0, o = 1; o < r.length; o++) {
          var u = r[o];
          0 !== a[u] && (n = !1)
        }
        n && (c.splice(t--, 1), e = f(f.s = r[0]))
      }
      return e
    }

    var n = {}, o = {6: 0}, a = {6: 0}, c = [];

    function f(t) {
      if (n[t]) return n[t].exports;
      var r = n[t] = {i: t, l: !1, exports: {}};
      return e[t].call(r.exports, r, r.exports, f), r.l = !0, r.exports
    }

    f.e = function (e) {
      var t = [];
      o[e] ? t.push(o[e]) : 0 !== o[e] && {
        2: 1,
        3: 1,
        8: 1,
        9: 1,
        10: 1,
        11: 1,
        12: 1,
        15: 1
      }[e] && t.push(o[e] = new Promise((function (t, r) {
        for (var n = "static/css/" + ({}[e] || e) + "." + {
          0: "31d6cfe0",
          1: "31d6cfe0",
          2: "a623f17c",
          3: "55683bb1",
          4: "31d6cfe0",
          8: "6f041df2",
          9: "6f041df2",
          10: "78a10e83",
          11: "6f041df2",
          12: "ef8cc6d3",
          13: "31d6cfe0",
          14: "31d6cfe0",
          15: "d2779743",
          16: "31d6cfe0",
          17: "31d6cfe0",
          18: "31d6cfe0",
          19: "31d6cfe0"
        }[e] + ".chunk.css", a = f.p + n, c = document.getElementsByTagName("link"), u = 0; u < c.length; u++) {
          var i = (l = c[u]).getAttribute("data-href") || l.getAttribute("href");
          if ("stylesheet" === l.rel && (i === n || i === a)) return t()
        }
        var d = document.getElementsByTagName("style");
        for (u = 0; u < d.length; u++) {
          var l;
          if ((i = (l = d[u]).getAttribute("data-href")) === n || i === a) return t()
        }
        var s = document.createElement("link");
        s.rel = "stylesheet", s.type = "text/css", s.onload = t, s.onerror = function (t) {
          var n = t && t.target && t.target.src || a, c = new Error("Loading CSS chunk " + e + " failed.\n(" + n + ")");
          c.code = "CSS_CHUNK_LOAD_FAILED", c.request = n, delete o[e], s.parentNode.removeChild(s), r(c)
        }, s.href = a, document.getElementsByTagName("head")[0].appendChild(s)
      })).then((function () {
        o[e] = 0
      })));
      var r = a[e];
      if (0 !== r) if (r) t.push(r[2]); else {
        var n = new Promise((function (t, n) {
          r = a[e] = [t, n]
        }));
        t.push(r[2] = n);
        var c, u = document.createElement("script");
        u.charset = "utf-8", u.timeout = 120, f.nc && u.setAttribute("nonce", f.nc), u.src = function (e) {
          return f.p + "static/js/" + ({}[e] || e) + "." + {
            0: "f9f42526",
            1: "3bea5c67",
            2: "71daa5df",
            3: "4977de1c",
            4: "98f792ca",
            8: "b1d838ce",
            9: "80db7807",
            10: "40bcfd7d",
            11: "30f66bb9",
            12: "c58d279b",
            13: "a7389a3a",
            14: "841aa34d",
            15: "0fc325a2",
            16: "0d468a0e",
            17: "81e8bec2",
            18: "fece3fb1",
            19: "beadf9d5"
          }[e] + ".chunk.js"
        }(e);
        var i = new Error;
        c = function (t) {
          u.onerror = u.onload = null, clearTimeout(d);
          var r = a[e];
          if (0 !== r) {
            if (r) {
              var n = t && ("load" === t.type ? "missing" : t.type), o = t && t.target && t.target.src;
              i.message = "Loading chunk " + e + " failed.\n(" + n + ": " + o + ")", i.name = "ChunkLoadError", i.type = n, i.request = o, r[1](i)
            }
            a[e] = void 0
          }
        };
        var d = setTimeout((function () {
          c({type: "timeout", target: u})
        }), 12e4);
        u.onerror = u.onload = c, document.head.appendChild(u)
      }
      return Promise.all(t)
    }, f.m = e, f.c = n, f.d = function (e, t, r) {
      f.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: r})
    }, f.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, f.t = function (e, t) {
      if (1 & t && (e = f(e)), 8 & t) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (f.r(r), Object.defineProperty(r, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e) for (var n in e) f.d(r, n, function (t) {
        return e[t]
      }.bind(null, n));
      return r
    }, f.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default
      } : function () {
        return e
      };
      return f.d(t, "a", t), t
    }, f.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }, f.p = "./", f.oe = function (e) {
      throw console.error(e), e
    };
    var u = this["webpackJsonpdva-boot-admin"] = this["webpackJsonpdva-boot-admin"] || [], i = u.push.bind(u);
    u.push = t, u = u.slice();
    for (var d = 0; d < u.length; d++) t(u[d]);
    var l = i;
    r()
  }([])</script>
<script src="./static/js/7.435a5003.chunk.js"></script>
<script src="./static/js/main.560f37f5.chunk.js"></script>
</body>
</html>
