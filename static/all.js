/*!
 * jQuery JavaScript Library v1.5
 * http://jquery.com/
 *
 * Copyright 2011, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2011, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Mon Jan 31 08:31:29 2011 -0500
 */
(function (aI, aG) {
    function cJ(b) {
        return aC.isWindow(b) ? b : b.nodeType === 9 ? b.defaultView || b.parentWindow : ! 1
    }

    function cf(e) {
        if (! cq[e]) {
            var d = aC("<" + e + ">").appendTo("body"), f = d.css("display");
            d.remove();
            if (f === "none" || f === "") {
                f = "block"
            }
            cq[e] = f
        }
        return cq[e]
    }

    function ch(e, d) {
        var f = {};
        aC.each(ci.concat.apply([], ci.slice(0, d)), function () {
            f[this] = e
        });
        return f
    }

    function cy(z, y) {
        z.dataFilter && (y = z.dataFilter(y, z.dataType));
        var x = z.dataTypes, w = z.converters, v, u = x.length, t, s = x[0], r, q, p, d, b;
        for (v = 1; v < u; v ++) {
            r = s, s = x[v];
            if (s === "*") {
                s = r
            } else {
                if (r !== "*" && r !== s) {
                    q = r + " " + s, p = w[q] || w["* " + s];
                    if (! p) {
                        b = aG;
                        for (d in w) {
                            t = d.split(" ");
                            if (t[0] === r || t[0] === "*") {
                                b = w[t[1] + " " + s];
                                if (b) {
                                    d = w[d], d === ! 0 ? p = b : b === ! 0 && (p = d);
                                    break
                                }
                            }
                        }
                    }
                    ! p && ! b && aC.error("No conversion from " + q.replace(" ", " to ")), p !== ! 0 && (y = p ? p(y) : b(d(y)))
                }
            }
        }
        return y
    }

    function cz(t, s, r) {
        var q = t.contents, p = t.dataTypes, o = t.responseFields, n, m, l, b;
        for (m in o) {
            m in r && (s[o[m]] = r[m])
        }
        while (p[0] === "*") {
            p.shift(), n === aG && (n = s.getResponseHeader("content-type"))
        }
        if (n) {
            for (m in q) {
                if (q[m] && q[m].test(n)) {
                    p.unshift(m);
                    break
                }
            }
        }
        if (p[0] in r) {
            l = p[0]
        } else {
            for (m in r) {
                if (! p[0] || t.converters[m + " " + p[0]]) {
                    l = m;
                    break
                }
                b || (b = m)
            }
            l = l || b
        }
        if (l) {
            l !== p[0] && p.unshift(l);
            return r[l]
        }
    }

    function cA(f, d, h, g) {
        aC.isArray(d) && d.length ? aC.each(d, function (a, c) {
            h || aM.test(f) ? g(f, c) : cA(f + "[" + (typeof c === "object" || aC.isArray(c) ? a : "") + "]", c, h, g)
        }) : h || d == null || typeof d !== "object" ? g(f, d) : aC.isArray(d) || aC.isEmptyObject(d) ? g(f, "") : aC.each(d, function (a, c) {
            cA(f + "[" + a + "]", c, h, g)
        })
    }

    function cB(v, u, t, s, r, q) {
        r = r || u.dataTypes[0], q = q || {}, q[r] = ! 0;
        var p = v[r], o = 0, n = p ? p.length : 0, m = v === cE, b;
        for (; o < n && (m || ! b); o ++) {
            b = p[o](u, t, s), typeof b === "string" && (q[b] ? b = aG : (u.dataTypes.unshift(b), b = cB(v, u, t, s, b, q)))
        }
        (m || ! b) && ! q["*"] && (b = cB(v, u, t, s, "*", q));
        return b
    }

    function cC(b) {
        return function (a, p) {
            typeof a !== "string" && (p = a, a = "*");
            if (aC.isFunction(p)) {
                var o = a.toLowerCase().split(at), n = 0, m = o.length, l, k, d;
                for (; n < m; n ++) {
                    l = o[n], d = /^\+/.test(l), d && (l = l.substr(1) || "*"), k = b[l] = b[l] || [], k[d ? "unshift" : "push"](p)
                }
            }
        }
    }

    function aO(g, d, j) {
        var i = d === "width" ? aY : aW, h = d === "width" ? g.offsetWidth : g.offsetHeight;
        if (j === "border") {
            return h
        }
        aC.each(i, function () {
            j || (h -= parseFloat(aC.css(g, "padding" + this)) || 0), j === "margin" ? h += parseFloat(aC.css(g, "margin" + this)) || 0 : h -= parseFloat(aC.css(g, "border" + this + "Width")) || 0
        });
        return h
    }

    function aL(d, c) {
        c.src ? aC.ajax({url: c.src, async: ! 1, dataType: "script"}) : aC.globalEval(c.text || c.textContent || c.innerHTML || ""), c.parentNode && c.parentNode.removeChild(c)
    }

    function cI(e, d) {
        if (d.nodeType === 1) {
            var f = d.nodeName.toLowerCase();
            d.clearAttributes(), d.mergeAttributes(e);
            if (f === "object") {
                d.outerHTML = e.outerHTML
            } else {
                if (f !== "input" || e.type !== "checkbox" && e.type !== "radio") {
                    if (f === "option") {
                        d.selected = e.defaultSelected
                    } else {
                        if (f === "input" || f === "textarea") {
                            d.defaultValue = e.defaultValue
                        }
                    }
                } else {
                    e.checked && (d.defaultChecked = d.checked = e.checked), d.value !== e.value && (d.value = e.value)
                }
            }
            d.removeAttribute(aC.expando)
        }
    }

    function aR(r, q) {
        if (q.nodeType === 1 && aC.hasData(r)) {
            var p = aC.expando, o = aC.data(r), n = aC.data(q, o);
            if (o = o[p]) {
                var m = o.events;
                n = n[p] = aC.extend({}, o);
                if (m) {
                    delete n.handle, n.events = {};
                    for (var l in m) {
                        for (var k = 0, d = m[l].length; k < d; k ++) {
                            aC.event.add(q, l, m[l][k], m[l][k].data)
                        }
                    }
                }
            }
        }
    }

    function aT(d, c) {
        return aC.nodeName(d, "table") ? d.getElementsByTagName("tbody")[0] || d.appendChild(d.ownerDocument.createElement("tbody")) : d
    }

    function b3(f, d, h) {
        if (aC.isFunction(d)) {
            return aC.grep(f, function (b, i) {
                var c = ! ! d.call(b, i, b);
                return c === h
            })
        }
        if (d.nodeType) {
            return aC.grep(f, function (b, c) {
                return b === d === h
            })
        }
        if (typeof d === "string") {
            var g = aC.grep(f, function (b) {
                return b.nodeType === 1
            });
            if (b8.test(d)) {
                return aC.filter(d, g, ! h)
            }
            d = aC.filter(d, g)
        }
        return aC.grep(f, function (b, c) {
            return aC.inArray(b, d) >= 0 === h
        })
    }

    function b4(b) {
        return ! b || ! b.parentNode || b.parentNode.nodeType === 11
    }

    function ce(d, c) {
        return(d && d !== "*" ? d + "." : "") + c.replace(aj, "`").replace(ai, "&")
    }

    function cg(J) {
        var I, H, G, F, E, D, C, B, A, z, y, x, w, v = [], u = [], o = aC._data(this, af);
        typeof o === "function" && (o = o.events);
        if (J.liveFired !== this && o && o.live && ! J.target.disabled && (! J.button || J.type !== "click")) {
            J.namespace && (x = new RegExp("(^|\\.)" + J.namespace.split(".").join("\\.(?:.*\\.)?") + "(\\.|$)")), J.liveFired = this;
            var d = o.live.slice(0);
            for (C = 0; C < d.length; C ++) {
                E = d[C], E.origType.replace(al, "") === J.type ? u.push(E.selector) : d.splice(C --, 1)
            }
            F = aC(J.target).closest(u, J.currentTarget);
            for (B = 0, A = F.length; B < A; B ++) {
                y = F[B];
                for (C = 0; C < d.length; C ++) {
                    E = d[C];
                    if (y.selector === E.selector && (! x || x.test(E.namespace))) {
                        D = y.elem, G = null;
                        if (E.preType === "mouseenter" || E.preType === "mouseleave") {
                            J.type = E.preType, G = aC(J.relatedTarget).closest(E.selector)[0]
                        }
                        (! G || G !== D) && v.push({elem: D, handleObj: E, level: y.level})
                    }
                }
            }
            for (B = 0, A = v.length; B < A; B ++) {
                F = v[B];
                if (H && F.level > H) {
                    break
                }
                J.currentTarget = F.elem, J.data = F.handleObj.data, J.handleObj = F.handleObj, w = F.handleObj.origHandler.apply(F.elem, arguments);
                if (w === ! 1 || J.isPropagationStopped()) {
                    H = F.level, w === ! 1 && (I = ! 1);
                    if (J.isImmediatePropagationStopped()) {
                        break
                    }
                }
            }
            return I
        }
    }

    function cl(e, d, f) {
        f[0].type = e;
        return aC.event.handle.apply(d, f)
    }

    function ad() {
        return ! 0
    }

    function ae() {
        return ! 1
    }

    function ay(b, h, e) {
        if (e === aG && b.nodeType === 1) {
            e = b.getAttribute("data-" + h);
            if (typeof e === "string") {
                try {
                    e = e === "true" ? ! 0 : e === "false" ? ! 1 : e === "null" ? null : aC.isNaN(e) ? aA.test(e) ? aC.parseJSON(e) : e : parseFloat(e)
                } catch (d) {
                }
                aC.data(b, h, e)
            } else {
                e = aG
            }
        }
        return e
    }

    var aE = aI.document, aC = function () {
        function J() {
            if (! bl.isReady) {
                try {
                    aE.documentElement.doScroll("left")
                } catch (d) {
                    setTimeout(J, 1);
                    return
                }
                bl.ready()
            }
        }

        var bl = function (e, d) {
            return new bl.fn.init(e, d, bi)
        }, bk = aI.jQuery, bj = aI.$, bi, bh = /^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]+)$)/, bg = /\S/, bf = /^\s+/, be = /\s+$/, bd = /\d/, bc = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, bb = /^[\],:{}\s]*$/, ba = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, Z = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, X = /(?:^|:|,)(?:\s*\[)+/g, V = /(webkit)[ \/]([\w.]+)/, T = /(opera)(?:.*version)?[ \/]([\w.]+)/, R = /(msie) ([\w.]+)/, P = /(mozilla)(?:.*? rv:([\w.]+))?/, N = navigator.userAgent, L, c = ! 1, b, a = "then done fail isResolved isRejected promise".split(" "), Y, W = Object.prototype.toString, U = Object.prototype.hasOwnProperty, S = Array.prototype.push, Q = Array.prototype.slice, O = String.prototype.trim, M = Array.prototype.indexOf, K = {};
        bl.fn = bl.prototype = {constructor: bl, init: function (d, p, o) {
            var n, m, l, h;
            if (! d) {
                return this
            }
            if (d.nodeType) {
                this.context = this[0] = d, this.length = 1;
                return this
            }
            if (d === "body" && ! p && aE.body) {
                this.context = aE, this[0] = aE.body, this.selector = "body", this.length = 1;
                return this
            }
            if (typeof d === "string") {
                n = bh.exec(d);
                if (! n || ! n[1] && p) {
                    return ! p || p.jquery ? (p || o).find(d) : this.constructor(p).find(d)
                }
                if (n[1]) {
                    p = p instanceof bl ? p[0] : p, h = p ? p.ownerDocument || p : aE, l = bc.exec(d), l ? bl.isPlainObject(p) ? (d = [aE.createElement(l[1])], bl.fn.attr.call(d, p, ! 0)) : d = [h.createElement(l[1])] : (l = bl.buildFragment([n[1]], [h]), d = (l.cacheable ? bl.clone(l.fragment) : l.fragment).childNodes);
                    return bl.merge(this, d)
                }
                m = aE.getElementById(n[2]);
                if (m && m.parentNode) {
                    if (m.id !== n[2]) {
                        return o.find(d)
                    }
                    this.length = 1, this[0] = m
                }
                this.context = aE, this.selector = d;
                return this
            }
            if (bl.isFunction(d)) {
                return o.ready(d)
            }
            d.selector !== aG && (this.selector = d.selector, this.context = d.context);
            return bl.makeArray(d, this)
        }, selector:                         "", jquery: "1.5", length: 0, size: function () {
            return this.length
        }, toArray:                          function () {
            return Q.call(this, 0)
        }, get:                              function (d) {
            return d == null ? this.toArray() : d < 0 ? this[this.length + d] : this[d]
        }, pushStack:                        function (f, d, h) {
            var g = this.constructor();
            bl.isArray(f) ? S.apply(g, f) : bl.merge(g, f), g.prevObject = this, g.context = this.context, d === "find" ? g.selector = this.selector + (this.selector ? " " : "") + h : d && (g.selector = this.selector + "." + d + "(" + h + ")");
            return g
        }, each:                             function (e, d) {
            return bl.each(this, e, d)
        }, ready:                            function (d) {
            bl.bindReady(), b.done(d);
            return this
        }, eq:                               function (d) {
            return d === - 1 ? this.slice(d) : this.slice(d, + d + 1)
        }, first:                            function () {
            return this.eq(0)
        }, last:                             function () {
            return this.eq(- 1)
        }, slice:                            function () {
            return this.pushStack(Q.apply(this, arguments), "slice", Q.call(arguments).join(","))
        }, map:                              function (d) {
            return this.pushStack(bl.map(this, function (e, f) {
                return d.call(e, f, e)
            }))
        }, end:                              function () {
            return this.prevObject || this.constructor(null)
        }, push:                             S, sort: [].sort, splice: [].splice}, bl.fn.init.prototype = bl.fn, bl.extend = bl.fn.extend = function () {
            var u, t, s, r, q, p, o = arguments[0] || {}, n = 1, m = arguments.length, d = ! 1;
            typeof o === "boolean" && (d = o, o = arguments[1] || {}, n = 2), typeof o !== "object" && ! bl.isFunction(o) && (o = {}), m === n && (o = this, -- n);
            for (; n < m; n ++) {
                if ((u = arguments[n]) != null) {
                    for (t in u) {
                        s = o[t], r = u[t];
                        if (o === r) {
                            continue
                        }
                        d && r && (bl.isPlainObject(r) || (q = bl.isArray(r))) ? (q ? (q = ! 1, p = s && bl.isArray(s) ? s : []) : p = s && bl.isPlainObject(s) ? s : {}, o[t] = bl.extend(d, p, r)) : r !== aG && (o[t] = r)
                    }
                }
            }
            return o
        }, bl.extend({noConflict: function (d) {
            aI.$ = bj, d && (aI.jQuery = bk);
            return bl
        }, isReady:               ! 1, readyWait: 1, ready: function (d) {
            d === ! 0 && bl.readyWait --;
            if (! bl.readyWait || d !== ! 0 && ! bl.isReady) {
                if (! aE.body) {
                    return setTimeout(bl.ready, 1)
                }
                bl.isReady = ! 0;
                if (d !== ! 0 && -- bl.readyWait > 0) {
                    return
                }
                b.resolveWith(aE, [bl]), bl.fn.trigger && bl(aE).trigger("ready").unbind("ready")
            }
        }, bindReady:             function () {
            if (! c) {
                c = ! 0;
                if (aE.readyState === "complete") {
                    return setTimeout(bl.ready, 1)
                }
                if (aE.addEventListener) {
                    aE.addEventListener("DOMContentLoaded", Y, ! 1), aI.addEventListener("load", bl.ready, ! 1)
                } else {
                    if (aE.attachEvent) {
                        aE.attachEvent("onreadystatechange", Y), aI.attachEvent("onload", bl.ready);
                        var d = ! 1;
                        try {
                            d = aI.frameElement == null
                        } catch (f) {
                        }
                        aE.documentElement.doScroll && d && J()
                    }
                }
            }
        }, isFunction:            function (d) {
            return bl.type(d) === "function"
        }, isArray:               Array.isArray || function (d) {
            return bl.type(d) === "array"
        }, isWindow:              function (d) {
            return d && typeof d === "object" && "setInterval" in d
        }, isNaN:                 function (d) {
            return d == null || ! bd.test(d) || isNaN(d)
        }, type:                  function (d) {
            return d == null ? String(d) : K[W.call(d)] || "object"
        }, isPlainObject:         function (d) {
            if (! d || bl.type(d) !== "object" || d.nodeType || bl.isWindow(d)) {
                return ! 1
            }
            if (d.constructor && ! U.call(d, "constructor") && ! U.call(d.constructor.prototype, "isPrototypeOf")) {
                return ! 1
            }
            var e;
            for (e in d) {
            }
            return e === aG || U.call(d, e)
        }, isEmptyObject:         function (e) {
            for (var d in e) {
                return ! 1
            }
            return ! 0
        }, error:                 function (d) {
            throw d
        }, parseJSON:             function (d) {
            if (typeof d !== "string" || ! d) {
                return null
            }
            d = bl.trim(d);
            if (bb.test(d.replace(ba, "@").replace(Z, "]").replace(X, ""))) {
                return aI.JSON && aI.JSON.parse ? aI.JSON.parse(d) : (new Function("return " + d))()
            }
            bl.error("Invalid JSON: " + d)
        }, parseXML:              function (d, g, f) {
            aI.DOMParser ? (f = new DOMParser, g = f.parseFromString(d, "text/xml")) : (g = new ActiveXObject("Microsoft.XMLDOM"), g.async = "false", g.loadXML(d)), f = g.documentElement, (! f || ! f.nodeName || f.nodeName === "parsererror") && bl.error("Invalid XML: " + d);
            return g
        }, noop:                  function () {
        }, globalEval:            function (f) {
            if (f && bg.test(f)) {
                var d = aE.getElementsByTagName("head")[0] || aE.documentElement, g = aE.createElement("script");
                g.type = "text/javascript", bl.support.scriptEval() ? g.appendChild(aE.createTextNode(f)) : g.text = f, d.insertBefore(g, d.firstChild), d.removeChild(g)
            }
        }, nodeName:              function (e, d) {
            return e.nodeName && e.nodeName.toUpperCase() === d.toUpperCase()
        }, each:                  function (d, q, p) {
            var o, n = 0, m = d.length, l = m === aG || bl.isFunction(d);
            if (p) {
                if (l) {
                    for (o in d) {
                        if (q.apply(d[o], p) === ! 1) {
                            break
                        }
                    }
                } else {
                    for (; n < m;) {
                        if (q.apply(d[n ++], p) === ! 1) {
                            break
                        }
                    }
                }
            } else {
                if (l) {
                    for (o in d) {
                        if (q.call(d[o], o, d[o]) === ! 1) {
                            break
                        }
                    }
                } else {
                    for (var k = d[0]; n < m && q.call(k, n, k) !== ! 1; k = d[++ n]) {
                    }
                }
            }
            return d
        }, trim:                  O ? function (d) {
            return d == null ? "" : O.call(d)
        } : function (d) {
            return d == null ? "" : (d + "").replace(bf, "").replace(be, "")
        }, makeArray:             function (f, d) {
            var h = d || [];
            if (f != null) {
                var g = bl.type(f);
                f.length == null || g === "string" || g === "function" || g === "regexp" || bl.isWindow(f) ? S.call(h, f) : bl.merge(h, f)
            }
            return h
        }, inArray:               function (f, e) {
            if (e.indexOf) {
                return e.indexOf(f)
            }
            for (var h = 0, g = e.length; h < g; h ++) {
                if (e[h] === f) {
                    return h
                }
            }
            return - 1
        }, merge:                 function (g, k) {
            var j = g.length, i = 0;
            if (typeof k.length === "number") {
                for (var h = k.length; i < h; i ++) {
                    g[j ++] = k[i]
                }
            } else {
                while (k[i] !== aG) {
                    g[j ++] = k[i ++]
                }
            }
            g.length = j;
            return g
        }, grep:                  function (i, h, n) {
            var m = [], l;
            n = ! ! n;
            for (var k = 0, j = i.length; k < j; k ++) {
                l = ! ! h(i[k], k), n !== l && m.push(i[k])
            }
            return m
        }, map:                   function (i, h, n) {
            var m = [], l;
            for (var k = 0, j = i.length; k < j; k ++) {
                l = h(i[k], k, n), l != null && (m[m.length] = l)
            }
            return m.concat.apply([], m)
        }, guid:                  1, proxy: function (d, g, f) {
            arguments.length === 2 && (typeof g === "string" ? (f = d, d = f[g], g = aG) : g && ! bl.isFunction(g) && (f = g, g = aG)), ! g && d && (g = function () {
                return d.apply(f || this, arguments)
            }), d && (g.guid = d.guid = d.guid || g.guid || bl.guid ++);
            return g
        }, access:                function (s, r, q, p, o, n) {
            var m = s.length;
            if (typeof r === "object") {
                for (var l in r) {
                    bl.access(s, l, r[l], p, o, q)
                }
                return s
            }
            if (q !== aG) {
                p = ! n && p && bl.isFunction(q);
                for (var d = 0; d < m; d ++) {
                    o(s[d], r, p ? q.call(s[d], d, o(s[d], r)) : q, n)
                }
                return s
            }
            return m ? o(s[0], r) : aG
        }, now:                   function () {
            return(new Date).getTime()
        }, _Deferred:             function () {
            var g = [], d, j, i, h = {done: function () {
                if (! i) {
                    var o = arguments, n, m, l, f, e;
                    d && (e = d, d = 0);
                    for (n = 0, m = o.length; n < m; n ++) {
                        l = o[n], f = bl.type(l), f === "array" ? h.done.apply(h, l) : f === "function" && g.push(l)
                    }
                    e && h.resolveWith(e[0], e[1])
                }
                return this
            }, resolveWith:                 function (k, e) {
                if (! i && ! d && ! j) {
                    j = 1;
                    try {
                        while (g[0]) {
                            g.shift().apply(k, e)
                        }
                    } finally {
                        d = [k, e], j = 0
                    }
                }
                return this
            }, resolve:                     function () {
                h.resolveWith(bl.isFunction(this.promise) ? this.promise() : this, arguments);
                return this
            }, isResolved:                  function () {
                return j || d
            }, cancel:                      function () {
                i = 1, g = [];
                return this
            }};
            return h
        }, Deferred:              function (f) {
            var d = bl._Deferred(), h = bl._Deferred(), g;
            bl.extend(d, {then: function (e, i) {
                d.done(e).fail(i);
                return this
            }, fail:            h.done, rejectWith: h.resolveWith, reject: h.resolve, isRejected: h.isResolved, promise: function (e, i) {
                if (e == null) {
                    if (g) {
                        return g
                    }
                    g = e = {}
                }
                i = a.length;
                while (i --) {
                    e[a[i]] = d[a[i]]
                }
                return e
            }}), d.then(h.cancel, d.cancel), delete d.cancel, f && f.call(d, d);
            return d
        }, when:                  function (h) {
            var d = arguments, l = d.length, k = l <= 1 && h && bl.isFunction(h.promise) ? h : bl.Deferred(), j = k.promise(), i;
            l > 1 ? (i = Array(l), bl.each(d, function (f, e) {
                bl.when(e).then(function (g) {
                    i[f] = arguments.length > 1 ? Q.call(arguments, 0) : g, -- l || k.resolveWith(j, i)
                }, k.reject)
            })) : k !== h && k.resolve(h);
            return j
        }, uaMatch:               function (e) {
            e = e.toLowerCase();
            var d = V.exec(e) || T.exec(e) || R.exec(e) || e.indexOf("compatible") < 0 && P.exec(e) || [];
            return{browser: d[1] || "", version: d[2] || "0"}
        }, sub:                   function () {
            function f(e, h) {
                return new f.fn.init(e, h)
            }

            bl.extend(! 0, f, this), f.superclass = this, f.fn = f.prototype = this(), f.fn.constructor = f, f.subclass = this.subclass, f.fn.init = function d(e, h) {
                h && h instanceof bl && ! (h instanceof f) && (h = f(h));
                return bl.fn.init.call(this, e, h, g)
            }, f.fn.init.prototype = f.fn;
            var g = f(aE);
            return f
        }, browser:               {}}), b = bl._Deferred(), bl.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (e, d) {
            K["[object " + d + "]"] = d.toLowerCase()
        }), L = bl.uaMatch(N), L.browser && (bl.browser[L.browser] = ! 0, bl.browser.version = L.version), bl.browser.webkit && (bl.browser.safari = ! 0), M && (bl.inArray = function (e, d) {
            return M.call(d, e)
        }), bg.test(" ") && (bf = /^[\s\xA0]+/, be = /[\s\xA0]+$/), bi = bl(aE), aE.addEventListener ? Y = function () {
            aE.removeEventListener("DOMContentLoaded", Y, ! 1), bl.ready()
        } : aE.attachEvent && (Y = function () {
            aE.readyState === "complete" && (aE.detachEvent("onreadystatechange", Y), bl.ready())
        });
        return aI.jQuery = aI.$ = bl
    }();
    (function () {
        aC.support = {};
        var r = aE.createElement("div");
        r.style.display = "none", r.innerHTML = "   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
        var q = r.getElementsByTagName("*"), p = r.getElementsByTagName("a")[0], o = aE.createElement("select"), n = o.appendChild(aE.createElement("option"));
        if (q && q.length && p) {
            aC.support = {leadingWhitespace: r.firstChild.nodeType === 3, tbody: ! r.getElementsByTagName("tbody").length, htmlSerialize: ! ! r.getElementsByTagName("link").length, style: /red/.test(p.getAttribute("style")), hrefNormalized: p.getAttribute("href") === "/a", opacity: /^0.55$/.test(p.style.opacity), cssFloat: ! ! p.style.cssFloat, checkOn: r.getElementsByTagName("input")[0].value === "on", optSelected: n.selected, deleteExpando: ! 0, optDisabled: ! 1, checkClone: ! 1, _scriptEval: null, noCloneEvent: ! 0, boxModel: null, inlineBlockNeedsLayout: ! 1, shrinkWrapBlocks: ! 1, reliableHiddenOffsets: ! 0}, o.disabled = ! 0, aC.support.optDisabled = ! n.disabled, aC.support.scriptEval = function () {
                if (aC.support._scriptEval === null) {
                    var h = aE.documentElement, k = aE.createElement("script"), j = "script" + aC.now();
                    k.type = "text/javascript";
                    try {
                        k.appendChild(aE.createTextNode("window." + j + "=1;"))
                    } catch (i) {
                    }
                    h.insertBefore(k, h.firstChild), aI[j] ? (aC.support._scriptEval = ! 0, delete aI[j]) : aC.support._scriptEval = ! 1, h.removeChild(k), h = k = j = null
                }
                return aC.support._scriptEval
            };
            try {
                delete r.test
            } catch (m) {
                aC.support.deleteExpando = ! 1
            }
            r.attachEvent && r.fireEvent && (r.attachEvent("onclick", function d() {
                aC.support.noCloneEvent = ! 1, r.detachEvent("onclick", d)
            }), r.cloneNode(! 0).fireEvent("onclick")), r = aE.createElement("div"), r.innerHTML = "<input type='radio' name='radiotest' checked='checked'/>";
            var c = aE.createDocumentFragment();
            c.appendChild(r.firstChild), aC.support.checkClone = c.cloneNode(! 0).cloneNode(! 0).lastChild.checked, aC(function () {
                var g = aE.createElement("div"), f = aE.getElementsByTagName("body")[0];
                if (f) {
                    g.style.width = g.style.paddingLeft = "1px", f.appendChild(g), aC.boxModel = aC.support.boxModel = g.offsetWidth === 2, "zoom" in g.style && (g.style.display = "inline", g.style.zoom = 1, aC.support.inlineBlockNeedsLayout = g.offsetWidth === 2, g.style.display = "", g.innerHTML = "<div style='width:4px;'></div>", aC.support.shrinkWrapBlocks = g.offsetWidth !== 2), g.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";
                    var h = g.getElementsByTagName("td");
                    aC.support.reliableHiddenOffsets = h[0].offsetHeight === 0, h[0].style.display = "", h[1].style.display = "none", aC.support.reliableHiddenOffsets = aC.support.reliableHiddenOffsets && h[0].offsetHeight === 0, g.innerHTML = "", f.removeChild(g).style.display = "none", g = h = null
                }
            });
            var a = function (f) {
                var e = aE.createElement("div");
                f = "on" + f;
                if (! e.attachEvent) {
                    return ! 0
                }
                var g = f in e;
                g || (e.setAttribute(f, "return;"), g = typeof e[f] === "function"), e = null;
                return g
            };
            aC.support.submitBubbles = a("submit"), aC.support.changeBubbles = a("change"), r = q = p = null
        }
    })();
    var aA = /^(?:\{.*\}|\[.*\])$/;
    aC.extend({cache: {}, uuid: 0, expando: "jQuery" + (aC.fn.jquery + Math.random()).replace(/\D/g, ""), noData: {embed: ! 0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: ! 0}, hasData: function (b) {
        b = b.nodeType ? aC.cache[b[aC.expando]] : b[aC.expando];
        return ! ! b && ! aC.isEmptyObject(b)
    }, data:          function (t, s, r, q) {
        if (aC.acceptData(t)) {
            var p = aC.expando, o = typeof s === "string", n, m = t.nodeType, d = m ? aC.cache : t, b = m ? t[aC.expando] : t[aC.expando] && aC.expando;
            if ((! b || q && b && ! d[b][p]) && o && r === aG) {
                return
            }
            b || (m ? t[aC.expando] = b = ++ aC.uuid : b = aC.expando), d[b] || (d[b] = {}), typeof s === "object" && (q ? d[b][p] = aC.extend(d[b][p], s) : d[b] = aC.extend(d[b], s)), n = d[b], q && (n[p] || (n[p] = {}), n = n[p]), r !== aG && (n[s] = r);
            if (s === "events" && ! n[s]) {
                return n[p] && n[p].events
            }
            return o ? n[s] : n
        }
    }, removeData:    function (r, q, p) {
        if (aC.acceptData(r)) {
            var o = aC.expando, n = r.nodeType, m = n ? aC.cache : r, l = n ? r[aC.expando] : aC.expando;
            if (! m[l]) {
                return
            }
            if (q) {
                var d = p ? m[l][o] : m[l];
                if (d) {
                    delete d[q];
                    if (! aC.isEmptyObject(d)) {
                        return
                    }
                }
            }
            if (p) {
                delete m[l][o];
                if (! aC.isEmptyObject(m[l])) {
                    return
                }
            }
            var a = m[l][o];
            aC.support.deleteExpando || m != aI ? delete m[l] : m[l] = null, a ? (m[l] = {}, m[l][o] = a) : n && (aC.support.deleteExpando ? delete r[aC.expando] : r.removeAttribute ? r.removeAttribute(aC.expando) : r[aC.expando] = null)
        }
    }, _data:         function (e, d, f) {
        return aC.data(e, d, f, ! 0)
    }, acceptData:    function (d) {
        if (d.nodeName) {
            var c = aC.noData[d.nodeName.toLowerCase()];
            if (c) {
                return c !== ! 0 && d.getAttribute("classid") === c
            }
        }
        return ! 0
    }}), aC.fn.extend({data: function (b, p) {
        var o = null;
        if (typeof b === "undefined") {
            if (this.length) {
                o = aC.data(this[0]);
                if (this[0].nodeType === 1) {
                    var n = this[0].attributes, m;
                    for (var l = 0, f = n.length; l < f; l ++) {
                        m = n[l].name, m.indexOf("data-") === 0 && (m = m.substr(5), ay(this[0], m, o[m]))
                    }
                }
            }
            return o
        }
        if (typeof b === "object") {
            return this.each(function () {
                aC.data(this, b)
            })
        }
        var d = b.split(".");
        d[1] = d[1] ? "." + d[1] : "";
        if (p === aG) {
            o = this.triggerHandler("getData" + d[1] + "!", [d[0]]), o === aG && this.length && (o = aC.data(this[0], b), o = ay(this[0], b, o));
            return o === aG && d[1] ? this.data(d[0]) : o
        }
        return this.each(function () {
            var a = aC(this), c = [d[0], p];
            a.triggerHandler("setData" + d[1] + "!", c), aC.data(this, b, p), a.triggerHandler("changeData" + d[1] + "!", c)
        })
    }, removeData:           function (b) {
        return this.each(function () {
            aC.removeData(this, b)
        })
    }}), aC.extend({queue: function (f, d, h) {
        if (f) {
            d = (d || "fx") + "queue";
            var g = aC._data(f, d);
            if (! h) {
                return g || []
            }
            ! g || aC.isArray(h) ? g = aC._data(f, d, aC.makeArray(h)) : g.push(h);
            return g
        }
    }, dequeue:            function (f, d) {
        d = d || "fx";
        var h = aC.queue(f, d), g = h.shift();
        g === "inprogress" && (g = h.shift()), g && (d === "fx" && h.unshift("inprogress"), g.call(f, function () {
            aC.dequeue(f, d)
        })), h.length || aC.removeData(f, d + "queue", ! 0)
    }}), aC.fn.extend({queue: function (b, d) {
        typeof b !== "string" && (d = b, b = "fx");
        if (d === aG) {
            return aC.queue(this[0], b)
        }
        return this.each(function (a) {
            var c = aC.queue(this, b, d);
            b === "fx" && c[0] !== "inprogress" && aC.dequeue(this, b)
        })
    }, dequeue:               function (b) {
        return this.each(function () {
            aC.dequeue(this, b)
        })
    }, delay:                 function (d, c) {
        d = aC.fx ? aC.fx.speeds[d] || d : d, c = c || "fx";
        return this.queue(c, function () {
            var a = this;
            setTimeout(function () {
                aC.dequeue(a, c)
            }, d)
        })
    }, clearQueue:            function (b) {
        return this.queue(b || "fx", [])
    }});
    var aw = /[\n\t\r]/g, au = /\s+/, ar = /\r/g, aq = /^(?:href|src|style)$/, ap = /^(?:button|input)$/i, ao = /^(?:button|input|object|select|textarea)$/i, an = /^a(?:rea)?$/i, am = /^(?:radio|checkbox)$/i;
    aC.props = {"for": "htmlFor", "class": "className", readonly: "readOnly", maxlength: "maxLength", cellspacing: "cellSpacing", rowspan: "rowSpan", colspan: "colSpan", tabindex: "tabIndex", usemap: "useMap", frameborder: "frameBorder"}, aC.fn.extend({attr: function (d, c) {
        return aC.access(this, d, c, ! 0, aC.attr)
    }, removeAttr:                                                                                                                                                                                                                                                 function (d, c) {
        return this.each(function () {
            aC.attr(this, d, ""), this.nodeType === 1 && this.removeAttribute(d)
        })
    }, addClass:                                                                                                                                                                                                                                                   function (r) {
        if (aC.isFunction(r)) {
            return this.each(function (a) {
                var e = aC(this);
                e.addClass(r.call(this, a, e.attr("class")))
            })
        }
        if (r && typeof r === "string") {
            var q = (r || "").split(au);
            for (var p = 0, o = this.length; p < o; p ++) {
                var n = this[p];
                if (n.nodeType === 1) {
                    if (n.className) {
                        var m = " " + n.className + " ", l = n.className;
                        for (var h = 0, d = q.length; h < d; h ++) {
                            m.indexOf(" " + q[h] + " ") < 0 && (l += " " + q[h])
                        }
                        n.className = aC.trim(l)
                    } else {
                        n.className = r
                    }
                }
            }
        }
        return this
    }, removeClass:                                                                                                                                                                                                                                                function (d) {
        if (aC.isFunction(d)) {
            return this.each(function (a) {
                var e = aC(this);
                e.removeClass(d.call(this, a, e.attr("class")))
            })
        }
        if (d && typeof d === "string" || d === aG) {
            var p = (d || "").split(au);
            for (var o = 0, n = this.length; o < n; o ++) {
                var m = this[o];
                if (m.nodeType === 1 && m.className) {
                    if (d) {
                        var h = (" " + m.className + " ").replace(aw, " ");
                        for (var g = 0, b = p.length; g < b; g ++) {
                            h = h.replace(" " + p[g] + " ", " ")
                        }
                        m.className = aC.trim(h)
                    } else {
                        m.className = ""
                    }
                }
            }
        }
        return this
    }, toggleClass:                                                                                                                                                                                                                                                function (f, d) {
        var h = typeof f, g = typeof d === "boolean";
        if (aC.isFunction(f)) {
            return this.each(function (b) {
                var a = aC(this);
                a.toggleClass(f.call(this, b, a.attr("class"), d), d)
            })
        }
        return this.each(function () {
            if (h === "string") {
                var l, e = 0, c = aC(this), b = d, a = f.split(au);
                while (l = a[e ++]) {
                    b = g ? b : ! c.hasClass(l), c[b ? "addClass" : "removeClass"](l)
                }
            } else {
                if (h === "undefined" || h === "boolean") {
                    this.className && aC._data(this, "__className__", this.className), this.className = this.className || f === ! 1 ? "" : aC._data(this, "__className__") || ""
                }
            }
        })
    }, hasClass:                                                                                                                                                                                                                                                   function (f) {
        var e = " " + f + " ";
        for (var h = 0, g = this.length; h < g; h ++) {
            if ((" " + this[h].className + " ").replace(aw, " ").indexOf(e) > - 1) {
                return ! 0
            }
        }
        return ! 1
    }, val:                                                                                                                                                                                                                                                        function (v) {
        if (! arguments.length) {
            var u = this[0];
            if (u) {
                if (aC.nodeName(u, "option")) {
                    var t = u.attributes.value;
                    return ! t || t.specified ? u.value : u.text
                }
                if (aC.nodeName(u, "select")) {
                    var s = u.selectedIndex, r = [], q = u.options, p = u.type === "select-one";
                    if (s < 0) {
                        return null
                    }
                    for (var n = p ? s : 0, i = p ? s + 1 : q.length; n < i; n ++) {
                        var d = q[n];
                        if (d.selected && (aC.support.optDisabled ? ! d.disabled : d.getAttribute("disabled") === null) && (! d.parentNode.disabled || ! aC.nodeName(d.parentNode, "optgroup"))) {
                            v = aC(d).val();
                            if (p) {
                                return v
                            }
                            r.push(v)
                        }
                    }
                    return r
                }
                if (am.test(u.type) && ! aC.support.checkOn) {
                    return u.getAttribute("value") === null ? "on" : u.value
                }
                return(u.value || "").replace(ar, "")
            }
            return aG
        }
        var b = aC.isFunction(v);
        return this.each(function (a) {
            var j = aC(this), h = v;
            if (this.nodeType === 1) {
                b && (h = v.call(this, a, j.val())), h == null ? h = "" : typeof h === "number" ? h += "" : aC.isArray(h) && (h = aC.map(h, function (c) {
                    return c == null ? "" : c + ""
                }));
                if (aC.isArray(h) && am.test(this.type)) {
                    this.checked = aC.inArray(j.val(), h) >= 0
                } else {
                    if (aC.nodeName(this, "select")) {
                        var g = aC.makeArray(h);
                        aC("option", this).each(function () {
                            this.selected = aC.inArray(aC(this).val(), g) >= 0
                        }), g.length || (this.selectedIndex = - 1)
                    } else {
                        this.value = h
                    }
                }
            }
        })
    }}), aC.extend({attrFn: {val: ! 0, css: ! 0, html: ! 0, text: ! 0, data: ! 0, width: ! 0, height: ! 0, offset: ! 0}, attr: function (t, s, r, q) {
        if (! t || t.nodeType === 3 || t.nodeType === 8 || t.nodeType === 2) {
            return aG
        }
        if (q && s in aC.attrFn) {
            return aC(t)[s](r)
        }
        var m = t.nodeType !== 1 || ! aC.isXMLDoc(t), l = r !== aG;
        s = m && aC.props[s] || s;
        if (t.nodeType === 1) {
            var k = aq.test(s);
            if (s === "selected" && ! aC.support.optSelected) {
                var j = t.parentNode;
                j && (j.selectedIndex, j.parentNode && j.parentNode.selectedIndex)
            }
            if ((s in t || t[s] !== aG) && m && ! k) {
                l && (s === "type" && ap.test(t.nodeName) && t.parentNode && aC.error("type property can't be changed"), r === null ? t.nodeType === 1 && t.removeAttribute(s) : t[s] = r);
                if (aC.nodeName(t, "form") && t.getAttributeNode(s)) {
                    return t.getAttributeNode(s).nodeValue
                }
                if (s === "tabIndex") {
                    var d = t.getAttributeNode("tabIndex");
                    return d && d.specified ? d.value : ao.test(t.nodeName) || an.test(t.nodeName) && t.href ? 0 : aG
                }
                return t[s]
            }
            if (! aC.support.style && m && s === "style") {
                l && (t.style.cssText = "" + r);
                return t.style.cssText
            }
            l && t.setAttribute(s, "" + r);
            if (! t.attributes[s] && (t.hasAttribute && ! t.hasAttribute(s))) {
                return aG
            }
            var b = ! aC.support.hrefNormalized && m && k ? t.getAttribute(s, 2) : t.getAttribute(s);
            return b === null ? aG : b
        }
        l && (t[s] = r);
        return t[s]
    }});
    var al = /\.(.*)$/, ak = /^(?:textarea|input|select)$/i, aj = /\./g, ai = / /g, ah = /[^\w\s.|`]/g, ag = function (b) {
        return b.replace(ah, "\\$&")
    }, af = "events";
    aC.event = {add: function (B, A, z, y) {
        if (B.nodeType !== 3 && B.nodeType !== 8) {
            aC.isWindow(B) && (B !== aI && ! B.frameElement) && (B = aI);
            if (z === ! 1) {
                z = ae
            } else {
                if (! z) {
                    return
                }
            }
            var x, w;
            z.handler && (x = z, z = x.handler), z.guid || (z.guid = aC.guid ++);
            var v = aC._data(B);
            if (! v) {
                return
            }
            var u = v[af], t = v.handle;
            typeof u === "function" ? (t = u.handle, u = u.events) : u || (B.nodeType || (v[af] = v = function () {
            }), v.events = u = {}), t || (v.handle = t = function () {
                return typeof aC !== "undefined" && ! aC.event.triggered ? aC.event.handle.apply(t.elem, arguments) : aG
            }), t.elem = B, A = A.split(" ");
            var s, r = 0, d;
            while (s = A[r ++]) {
                w = x ? aC.extend({}, x) : {handler: z, data: y}, s.indexOf(".") > - 1 ? (d = s.split("."), s = d.shift(), w.namespace = d.slice(0).sort().join(".")) : (d = [], w.namespace = ""), w.type = s, w.guid || (w.guid = z.guid);
                var b = u[s], a = aC.event.special[s] || {};
                if (! b) {
                    b = u[s] = [];
                    if (! a.setup || a.setup.call(B, y, d, t) === ! 1) {
                        B.addEventListener ? B.addEventListener(s, t, ! 1) : B.attachEvent && B.attachEvent("on" + s, t)
                    }
                }
                a.add && (a.add.call(B, w), w.handler.guid || (w.handler.guid = z.guid)), b.push(w), aC.event.global[s] = ! 0
            }
            B = null
        }
    }, global:       {}, remove: function (L, K, J, I) {
        if (L.nodeType !== 3 && L.nodeType !== 8) {
            J === ! 1 && (J = ae);
            var H, G, F, E, D = 0, C, B, A, z, y, v, u, t = aC.hasData(L) && aC._data(L), d = t && t[af];
            if (! t || ! d) {
                return
            }
            typeof d === "function" && (t = d, d = d.events), K && K.type && (J = K.handler, K = K.type);
            if (! K || typeof K === "string" && K.charAt(0) === ".") {
                K = K || "";
                for (G in d) {
                    aC.event.remove(L, G + K)
                }
                return
            }
            K = K.split(" ");
            while (G = K[D ++]) {
                u = G, v = null, C = G.indexOf(".") < 0, B = [], C || (B = G.split("."), G = B.shift(), A = new RegExp("(^|\\.)" + aC.map(B.slice(0).sort(), ag).join("\\.(?:.*\\.)?") + "(\\.|$)")), y = d[G];
                if (! y) {
                    continue
                }
                if (! J) {
                    for (E = 0; E < y.length; E ++) {
                        v = y[E];
                        if (C || A.test(v.namespace)) {
                            aC.event.remove(L, u, v.handler, E), y.splice(E --, 1)
                        }
                    }
                    continue
                }
                z = aC.event.special[G] || {};
                for (E = I || 0; E < y.length; E ++) {
                    v = y[E];
                    if (J.guid === v.guid) {
                        if (C || A.test(v.namespace)) {
                            I == null && y.splice(E --, 1), z.remove && z.remove.call(L, v)
                        }
                        if (I != null) {
                            break
                        }
                    }
                }
                if (y.length === 0 || I != null && y.length === 1) {
                    (! z.teardown || z.teardown.call(L, B) === ! 1) && aC.removeEvent(L, G, t.handle), H = null, delete d[G]
                }
            }
            if (aC.isEmptyObject(d)) {
                var b = t.handle;
                b && (b.elem = null), delete t.events, delete t.handle, typeof t === "function" ? aC.removeData(L, af, ! 0) : aC.isEmptyObject(t) && aC.removeData(L, aG, ! 0)
            }
        }
    }, trigger:      function (B, A, z) {
        var y = B.type || B, x = arguments[3];
        if (! x) {
            B = typeof B === "object" ? B[aC.expando] ? B : aC.extend(aC.Event(y), B) : aC.Event(y), y.indexOf("!") >= 0 && (B.type = y = y.slice(0, - 1), B.exclusive = ! 0), z || (B.stopPropagation(), aC.event.global[y] && aC.each(aC.cache, function () {
                var a = aC.expando, c = this[a];
                c && c.events && c.events[y] && aC.event.trigger(B, A, c.handle.elem)
            }));
            if (! z || z.nodeType === 3 || z.nodeType === 8) {
                return aG
            }
            B.result = aG, B.target = z, A = aC.makeArray(A), A.unshift(B)
        }
        B.currentTarget = z;
        var w = z.nodeType ? aC._data(z, "handle") : (aC._data(z, af) || {}).handle;
        w && w.apply(z, A);
        var v = z.parentNode || z.ownerDocument;
        try {
            z && z.nodeName && aC.noData[z.nodeName.toLowerCase()] || z["on" + y] && z["on" + y].apply(z, A) === ! 1 && (B.result = ! 1, B.preventDefault())
        } catch (u) {
        }
        if (! B.isPropagationStopped() && v) {
            aC.event.trigger(B, A, v, ! 0)
        } else {
            if (! B.isDefaultPrevented()) {
                var t, s = B.target, r = y.replace(al, ""), o = aC.nodeName(s, "a") && r === "click", d = aC.event.special[r] || {};
                if ((! d._default || d._default.call(z, B) === ! 1) && ! o && ! (s && s.nodeName && aC.noData[s.nodeName.toLowerCase()])) {
                    try {
                        s[r] && (t = s["on" + r], t && (s["on" + r] = null), aC.event.triggered = ! 0, s[r]())
                    } catch (b) {
                    }
                    t && (s["on" + r] = t), aC.event.triggered = ! 1
                }
            }
        }
    }, handle:       function (x) {
        var w, v, u, t, s, r = [], q = aC.makeArray(arguments);
        x = q[0] = aC.event.fix(x || aI.event), x.currentTarget = this, w = x.type.indexOf(".") < 0 && ! x.exclusive, w || (u = x.type.split("."), x.type = u.shift(), r = u.slice(0).sort(), t = new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.)?") + "(\\.|$)")), x.namespace = x.namespace || r.join("."), s = aC._data(this, af), typeof s === "function" && (s = s.events), v = (s || {})[x.type];
        if (s && v) {
            v = v.slice(0);
            for (var p = 0, d = v.length; p < d; p ++) {
                var b = v[p];
                if (w || t.test(b.namespace)) {
                    x.handler = b.handler, x.data = b.data, x.handleObj = b;
                    var a = b.handler.apply(this, q);
                    a !== aG && (x.result = a, a === ! 1 && (x.preventDefault(), x.stopPropagation()));
                    if (x.isImmediatePropagationStopped()) {
                        break
                    }
                }
            }
        }
        return x.result
    }, props:        "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "), fix: function (b) {
        if (b[aC.expando]) {
            return b
        }
        var l = b;
        b = aC.Event(l);
        for (var k = this.props.length, j; k;) {
            j = this.props[-- k], b[j] = l[j]
        }
        b.target || (b.target = b.srcElement || aE), b.target.nodeType === 3 && (b.target = b.target.parentNode), ! b.relatedTarget && b.fromElement && (b.relatedTarget = b.fromElement === b.target ? b.toElement : b.fromElement);
        if (b.pageX == null && b.clientX != null) {
            var d = aE.documentElement, c = aE.body;
            b.pageX = b.clientX + (d && d.scrollLeft || c && c.scrollLeft || 0) - (d && d.clientLeft || c && c.clientLeft || 0), b.pageY = b.clientY + (d && d.scrollTop || c && c.scrollTop || 0) - (d && d.clientTop || c && c.clientTop || 0)
        }
        b.which == null && (b.charCode != null || b.keyCode != null) && (b.which = b.charCode != null ? b.charCode : b.keyCode), ! b.metaKey && b.ctrlKey && (b.metaKey = b.ctrlKey), ! b.which && b.button !== aG && (b.which = b.button & 1 ? 1 : b.button & 2 ? 3 : b.button & 4 ? 2 : 0);
        return b
    }, guid:         100000000, proxy: aC.proxy, special: {ready: {setup: aC.bindReady, teardown: aC.noop}, live: {add: function (b) {
        aC.event.add(this, ce(b.origType, b.selector), aC.extend({}, b, {handler: cg, guid: b.handler.guid}))
    }, remove:                                                                                                          function (b) {
        aC.event.remove(this, ce(b.origType, b.selector), b)
    }}, beforeunload:                                             {setup: function (e, d, f) {
        aC.isWindow(this) && (this.onbeforeunload = f)
    }, teardown:                                                          function (d, c) {
        this.onbeforeunload === c && (this.onbeforeunload = null)
    }}}}, aC.removeEvent = aE.removeEventListener ? function (e, d, f) {
        e.removeEventListener && e.removeEventListener(d, f, ! 1)
    } : function (e, d, f) {
        e.detachEvent && e.detachEvent("on" + d, f)
    }, aC.Event = function (b) {
        if (! this.preventDefault) {
            return new aC.Event(b)
        }
        b && b.type ? (this.originalEvent = b, this.type = b.type, this.isDefaultPrevented = b.defaultPrevented || b.returnValue === ! 1 || b.getPreventDefault && b.getPreventDefault() ? ad : ae) : this.type = b, this.timeStamp = aC.now(), this[aC.expando] = ! 0
    }, aC.Event.prototype = {preventDefault: function () {
        this.isDefaultPrevented = ad;
        var b = this.originalEvent;
        b && (b.preventDefault ? b.preventDefault() : b.returnValue = ! 1)
    }, stopPropagation:                      function () {
        this.isPropagationStopped = ad;
        var b = this.originalEvent;
        b && (b.stopPropagation && b.stopPropagation(), b.cancelBubble = ! 0)
    }, stopImmediatePropagation:             function () {
        this.isImmediatePropagationStopped = ad, this.stopPropagation()
    }, isDefaultPrevented:                   ae, isPropagationStopped: ae, isImmediatePropagationStopped: ae};
    var ac = function (e) {
        var d = e.relatedTarget;
        try {
            while (d && d !== this) {
                d = d.parentNode
            }
            d !== this && (e.type = e.data, aC.event.handle.apply(this, arguments))
        } catch (f) {
        }
    }, ab = function (b) {
        b.type = b.data, aC.event.handle.apply(this, arguments)
    };
    aC.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (d, c) {
        aC.event.special[d] = {setup: function (a) {
            aC.event.add(this, c, a && a.selector ? ab : ac, d)
        }, teardown:                  function (b) {
            aC.event.remove(this, c, b && b.selector ? ab : ac)
        }}
    }), aC.support.submitBubbles || (aC.event.special.submit = {setup: function (b, d) {
        if (this.nodeName && this.nodeName.toLowerCase() !== "form") {
            aC.event.add(this, "click.specialSubmit", function (f) {
                var h = f.target, g = h.type;
                if ((g === "submit" || g === "image") && aC(h).closest("form").length) {
                    f.liveFired = aG;
                    return cl("submit", this, arguments)
                }
            }), aC.event.add(this, "keypress.specialSubmit", function (f) {
                var h = f.target, g = h.type;
                if ((g === "text" || g === "password") && aC(h).closest("form").length && f.keyCode === 13) {
                    f.liveFired = aG;
                    return cl("submit", this, arguments)
                }
            })
        } else {
            return ! 1
        }
    }, teardown:                                                       function (b) {
        aC.event.remove(this, ".specialSubmit")
    }});
    if (! aC.support.changeBubbles) {
        var aa, cp = function (e) {
            var d = e.type, f = e.value;
            d === "radio" || d === "checkbox" ? f = e.checked : d === "select-multiple" ? f = e.selectedIndex > - 1 ? aC.map(e.options,function (b) {
                return b.selected
            }).join("-") : "" : e.nodeName.toLowerCase() === "select" && (f = e.selectedIndex);
            return f
        }, cn = function cn(b) {
            var h = b.target, g, d;
            if (ak.test(h.nodeName) && ! h.readOnly) {
                g = aC._data(h, "_change_data"), d = cp(h), (b.type !== "focusout" || h.type !== "radio") && aC._data(h, "_change_data", d);
                if (g === aG || d === g) {
                    return
                }
                if (g != null || d) {
                    b.type = "change", b.liveFired = aG;
                    return aC.event.trigger(b, arguments[1], h)
                }
            }
        };
        aC.event.special.change = {filters: {focusout: cn, beforedeactivate: cn, click: function (e) {
            var d = e.target, f = d.type;
            if (f === "radio" || f === "checkbox" || d.nodeName.toLowerCase() === "select") {
                return cn.call(this, e)
            }
        }, keydown:                                    function (e) {
            var d = e.target, f = d.type;
            if (e.keyCode === 13 && d.nodeName.toLowerCase() !== "textarea" || e.keyCode === 32 && (f === "checkbox" || f === "radio") || f === "select-multiple") {
                return cn.call(this, e)
            }
        }, beforeactivate:                             function (d) {
            var c = d.target;
            aC._data(c, "_change_data", cp(c))
        }}, setup:                          function (e, d) {
            if (this.type === "file") {
                return ! 1
            }
            for (var f in aa) {
                aC.event.add(this, f + ".specialChange", aa[f])
            }
            return ak.test(this.nodeName)
        }, teardown:                        function (b) {
            aC.event.remove(this, ".specialChange");
            return ak.test(this.nodeName)
        }}, aa = aC.event.special.change.filters, aa.focus = aa.beforeactivate
    }
    aE.addEventListener && aC.each({focus: "focusin", blur: "focusout"}, function (e, d) {
        function f(b) {
            b = aC.event.fix(b), b.type = d;
            return aC.event.handle.call(this, b)
        }

        aC.event.special[d] = {setup: function () {
            this.addEventListener(e, f, ! 0)
        }, teardown:                  function () {
            this.removeEventListener(e, f, ! 0)
        }}
    }), aC.each(["bind", "one"], function (b, d) {
        aC.fn[d] = function (c, p, o) {
            if (typeof c === "object") {
                for (var n in c) {
                    this[d](n, p, c[n], o)
                }
                return this
            }
            if (aC.isFunction(p) || p === ! 1) {
                o = p, p = aG
            }
            var m = d === "one" ? aC.proxy(o, function (e) {
                aC(this).unbind(e, m);
                return o.apply(this, arguments)
            }) : o;
            if (c === "unload" && d !== "one") {
                this.one(c, p, o)
            } else {
                for (var l = 0, k = this.length; l < k; l ++) {
                    aC.event.add(this[l], c, m, p)
                }
            }
            return this
        }
    }), aC.fn.extend({unbind: function (g, d) {
        if (typeof g !== "object" || g.preventDefault) {
            for (var i = 0, h = this.length; i < h; i ++) {
                aC.event.remove(this[i], g, d)
            }
        } else {
            for (var j in g) {
                this.unbind(j, g[j])
            }
        }
        return this
    }, delegate:              function (f, e, h, g) {
        return this.live(e, h, g, f)
    }, undelegate:            function (e, d, f) {
        return arguments.length === 0 ? this.unbind("live") : this.die(d, null, f, e)
    }, trigger:               function (d, c) {
        return this.each(function () {
            aC.event.trigger(d, c, this)
        })
    }, triggerHandler:        function (e, d) {
        if (this[0]) {
            var f = aC.Event(e);
            f.preventDefault(), f.stopPropagation(), aC.event.trigger(f, d, this[0]);
            return f.result
        }
    }, toggle:                function (e) {
        var d = arguments, f = 1;
        while (f < d.length) {
            aC.proxy(e, d[f ++])
        }
        return this.click(aC.proxy(e, function (b) {
            var a = (aC._data(this, "lastToggle" + e.guid) || 0) % f;
            aC._data(this, "lastToggle" + e.guid, a + 1), b.preventDefault();
            return d[a].apply(this, arguments) || ! 1
        }))
    }, hover:                 function (d, c) {
        return this.mouseenter(d).mouseleave(c || d)
    }});
    var cj = {focus: "focusin", blur: "focusout", mouseenter: "mouseover", mouseleave: "mouseout"};
    aC.each(["live", "die"], function (b, d) {
        aC.fn[d] = function (D, C, B, A) {
            var z, y = 0, x, w, v, u = A || this.selector, t = A ? this : aC(this.context);
            if (typeof D === "object" && ! D.preventDefault) {
                for (var s in D) {
                    t[d](s, C, D[s], u)
                }
                return this
            }
            aC.isFunction(C) && (B = C, C = aG), D = (D || "").split(" ");
            while ((z = D[y ++]) != null) {
                x = al.exec(z), w = "", x && (w = x[0], z = z.replace(al, ""));
                if (z === "hover") {
                    D.push("mouseenter" + w, "mouseleave" + w);
                    continue
                }
                v = z, z === "focus" || z === "blur" ? (D.push(cj[z] + w), z = z + w) : z = (cj[z] || z) + w;
                if (d === "live") {
                    for (var o = 0, c = t.length; o < c; o ++) {
                        aC.event.add(t[o], "live." + ce(z, u), {data: C, selector: u, handler: B, origType: z, origHandler: B, preType: v})
                    }
                } else {
                    t.unbind("live." + ce(z, u), B)
                }
            }
            return this
        }
    }), aC.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "), function (d, c) {
        aC.fn[c] = function (b, e) {
            e == null && (e = b, b = null);
            return arguments.length > 0 ? this.bind(c, b, e) : this.trigger(c)
        }, aC.attrFn && (aC.attrFn[c] = ! 0)
    }), function () {
        function H(t, s, r, q, p, o) {
            for (var n = 0, m = q.length; n < m; n ++) {
                var l = q[n];
                if (l) {
                    var i = ! 1;
                    l = l[t];
                    while (l) {
                        if (l.sizcache === r) {
                            i = q[l.sizset];
                            break
                        }
                        if (l.nodeType === 1) {
                            o || (l.sizcache = r, l.sizset = n);
                            if (typeof s !== "string") {
                                if (l === s) {
                                    i = ! 0;
                                    break
                                }
                            } else {
                                if (A.filter(s, [l]).length > 0) {
                                    i = l;
                                    break
                                }
                            }
                        }
                        l = l[t]
                    }
                    q[n] = i
                }
            }
        }

        function b(t, s, r, q, p, o) {
            for (var n = 0, m = q.length; n < m; n ++) {
                var l = q[n];
                if (l) {
                    var k = ! 1;
                    l = l[t];
                    while (l) {
                        if (l.sizcache === r) {
                            k = q[l.sizset];
                            break
                        }
                        l.nodeType === 1 && ! o && (l.sizcache = r, l.sizset = n);
                        if (l.nodeName.toLowerCase() === s) {
                            k = l;
                            break
                        }
                        l = l[t]
                    }
                    q[n] = k
                }
            }
        }

        var F = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g, E = 0, D = Object.prototype.toString, C = ! 1, B = ! 0;
        [0, 0].sort(function () {
            B = ! 1;
            return 0
        });
        var A = function (M, K, J, I) {
            J = J || [], K = K || aE;
            var t = K;
            if (K.nodeType !== 1 && K.nodeType !== 9) {
                return[]
            }
            if (! M || typeof M !== "string") {
                return J
            }
            var n, k, j, i, f, a, R, Q, P = ! 0, O = A.isXML(K), N = [], L = M;
            do {
                F.exec(""), n = F.exec(L);
                if (n) {
                    L = n[3], N.push(n[1]);
                    if (n[2]) {
                        i = n[3];
                        break
                    }
                }
            } while (n);
            if (N.length > 1 && y.exec(M)) {
                if (N.length === 2 && z.relative[N[0]]) {
                    k = G(N[0] + N[1], K)
                } else {
                    k = z.relative[N[0]] ? [K] : A(N.shift(), K);
                    while (N.length) {
                        M = N.shift(), z.relative[M] && (M += N.shift()), k = G(M, k)
                    }
                }
            } else {
                ! I && N.length > 1 && K.nodeType === 9 && ! O && z.match.ID.test(N[0]) && ! z.match.ID.test(N[N.length - 1]) && (f = A.find(N.shift(), K, O), K = f.expr ? A.filter(f.expr, f.set)[0] : f.set[0]);
                if (K) {
                    f = I ? {expr: N.pop(), set: v(I)} : A.find(N.pop(), N.length === 1 && (N[0] === "~" || N[0] === "+") && K.parentNode ? K.parentNode : K, O), k = f.expr ? A.filter(f.expr, f.set) : f.set, N.length > 0 ? j = v(k) : P = ! 1;
                    while (N.length) {
                        a = N.pop(), R = a, z.relative[a] ? R = N.pop() : a = "", R == null && (R = K), z.relative[a](j, R, O)
                    }
                } else {
                    j = N = []
                }
            }
            j || (j = k), j || A.error(a || M);
            if (D.call(j) === "[object Array]") {
                if (P) {
                    if (K && K.nodeType === 1) {
                        for (Q = 0; j[Q] != null; Q ++) {
                            j[Q] && (j[Q] === ! 0 || j[Q].nodeType === 1 && A.contains(K, j[Q])) && J.push(k[Q])
                        }
                    } else {
                        for (Q = 0; j[Q] != null; Q ++) {
                            j[Q] && j[Q].nodeType === 1 && J.push(k[Q])
                        }
                    }
                } else {
                    J.push.apply(J, j)
                }
            } else {
                v(j, J)
            }
            i && (A(i, t, J, I), A.uniqueSort(J));
            return J
        };
        A.uniqueSort = function (f) {
            if (d) {
                C = B, f.sort(d);
                if (C) {
                    for (var e = 1; e < f.length; e ++) {
                        f[e] === f[e - 1] && f.splice(e --, 1)
                    }
                }
            }
            return f
        }, A.matches = function (f, e) {
            return A(f, null, null, e)
        }, A.matchesSelector = function (f, e) {
            return A(e, null, null, [f]).length > 0
        }, A.find = function (r, q, p) {
            var o;
            if (! r) {
                return[]
            }
            for (var n = 0, m = z.order.length; n < m; n ++) {
                var l, k = z.order[n];
                if (l = z.leftMatch[k].exec(r)) {
                    var j = l[1];
                    l.splice(1, 1);
                    if (j.substr(j.length - 1) !== "\\") {
                        l[1] = (l[1] || "").replace(/\\/g, ""), o = z.find[k](l, q, p);
                        if (o != null) {
                            r = r.replace(z.match[k], "");
                            break
                        }
                    }
                }
            }
            o || (o = typeof q.getElementsByTagName !== "undefined" ? q.getElementsByTagName("*") : []);
            return{set: o, expr: r}
        }, A.filter = function (U, T, S, R) {
            var Q, P, O = U, N = [], M = T, L = T && T[0] && A.isXML(T[0]);
            while (U && T.length) {
                for (var K in z.filter) {
                    if ((Q = z.leftMatch[K].exec(U)) != null && Q[2]) {
                        var J, I, j = z.filter[K], i = Q[1];
                        P = ! 1, Q.splice(1, 1);
                        if (i.substr(i.length - 1) === "\\") {
                            continue
                        }
                        M === N && (N = []);
                        if (z.preFilter[K]) {
                            Q = z.preFilter[K](Q, M, S, N, R, L);
                            if (Q) {
                                if (Q === ! 0) {
                                    continue
                                }
                            } else {
                                P = J = ! 0
                            }
                        }
                        if (Q) {
                            for (var W = 0; (I = M[W]) != null; W ++) {
                                if (I) {
                                    J = j(I, Q, W, M);
                                    var V = R ^ ! ! J;
                                    S && J != null ? V ? P = ! 0 : M[W] = ! 1 : V && (N.push(I), P = ! 0)
                                }
                            }
                        }
                        if (J !== aG) {
                            S || (M = N), U = U.replace(z.match[K], "");
                            if (! P) {
                                return[]
                            }
                            break
                        }
                    }
                }
                if (U === O) {
                    if (P == null) {
                        A.error(U)
                    } else {
                        break
                    }
                }
                O = U
            }
            return M
        }, A.error = function (e) {
            throw"Syntax error, unrecognized expression: " + e
        };
        var z = A.selectors = {order: ["ID", "NAME", "TAG"], match: {ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/, CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/, NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/, ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/, TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/, CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/, POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/, PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/}, leftMatch: {}, attrMap: {"class": "className", "for": "htmlFor"}, attrHandle: {href: function (e) {
            return e.getAttribute("href")
        }}, relative:                 {"+": function (j, i) {
            var p = typeof i === "string", o = p && ! /\W/.test(i), n = p && ! o;
            o && (i = i.toLowerCase());
            for (var m = 0, l = j.length, k; m < l; m ++) {
                if (k = j[m]) {
                    while ((k = k.previousSibling) && k.nodeType !== 1) {
                    }
                    j[m] = n || k && k.nodeName.toLowerCase() === i ? k || ! 1 : k === i
                }
            }
            n && A.filter(i, j, ! 0)
        }, ">":                             function (i, h) {
            var n, m = typeof h === "string", l = 0, k = i.length;
            if (m && ! /\W/.test(h)) {
                h = h.toLowerCase();
                for (; l < k; l ++) {
                    n = i[l];
                    if (n) {
                        var j = n.parentNode;
                        i[l] = j.nodeName.toLowerCase() === h ? j : ! 1
                    }
                }
            } else {
                for (; l < k; l ++) {
                    n = i[l], n && (i[l] = m ? n.parentNode : n.parentNode === h)
                }
                m && A.filter(h, i, ! 0)
            }
        }, "":                              function (h, e, l) {
            var k, j = E ++, i = H;
            typeof e === "string" && ! /\W/.test(e) && (e = e.toLowerCase(), k = e, i = b), i("parentNode", e, j, h, k, l)
        }, "~":                             function (h, e, l) {
            var k, j = E ++, i = H;
            typeof e === "string" && ! /\W/.test(e) && (e = e.toLowerCase(), k = e, i = b), i("previousSibling", e, j, h, k, l)
        }}, find:                     {ID: function (f, e, h) {
            if (typeof e.getElementById !== "undefined" && ! h) {
                var g = e.getElementById(f[1]);
                return g && g.parentNode ? [g] : []
            }
        }, NAME:                           function (h, g) {
            if (typeof g.getElementsByName !== "undefined") {
                var l = [], k = g.getElementsByName(h[1]);
                for (var j = 0, i = k.length; j < i; j ++) {
                    k[j].getAttribute("name") === h[1] && l.push(k[j])
                }
                return l.length === 0 ? null : l
            }
        }, TAG:                            function (f, e) {
            if (typeof e.getElementsByTagName !== "undefined") {
                return e.getElementsByTagName(f[1])
            }
        }}, preFilter:                {CLASS: function (j, i, p, o, n, m) {
            j = " " + j[1].replace(/\\/g, "") + " ";
            if (m) {
                return j
            }
            for (var l = 0, k; (k = i[l]) != null; l ++) {
                k && (n ^ (k.className && (" " + k.className + " ").replace(/[\t\n\r]/g, " ").indexOf(j) >= 0) ? p || o.push(k) : p && (i[l] = ! 1))
            }
            return ! 1
        }, ID:                                function (e) {
            return e[1].replace(/\\/g, "")
        }, TAG:                               function (f, e) {
            return f[1].toLowerCase()
        }, CHILD:                             function (f) {
            if (f[1] === "nth") {
                f[2] || A.error(f[0]), f[2] = f[2].replace(/^\+|\s*/g, "");
                var e = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(f[2] === "even" && "2n" || f[2] === "odd" && "2n+1" || ! /\D/.test(f[2]) && "0n+" + f[2] || f[2]);
                f[2] = e[1] + (e[2] || 1) - 0, f[3] = e[3] - 0
            } else {
                f[2] && A.error(f[0])
            }
            f[0] = E ++;
            return f
        }, ATTR:                              function (i, h, n, m, l, k) {
            var j = i[1] = i[1].replace(/\\/g, "");
            ! k && z.attrMap[j] && (i[1] = z.attrMap[j]), i[4] = (i[4] || i[5] || "").replace(/\\/g, ""), i[2] === "~=" && (i[4] = " " + i[4] + " ");
            return i
        }, PSEUDO:                            function (a, l, k, j, i) {
            if (a[1] === "not") {
                if ((F.exec(a[3]) || "").length > 1 || /^\w/.test(a[3])) {
                    a[3] = A(a[3], null, null, l)
                } else {
                    var h = A.filter(a[3], l, k, ! 0 ^ i);
                    k || j.push.apply(j, h);
                    return ! 1
                }
            } else {
                if (z.match.POS.test(a[0]) || z.match.CHILD.test(a[0])) {
                    return ! 0
                }
            }
            return a
        }, POS:                               function (e) {
            e.unshift(! 0);
            return e
        }}, filters:                  {enabled: function (e) {
            return e.disabled === ! 1 && e.type !== "hidden"
        }, disabled:                            function (e) {
            return e.disabled === ! 0
        }, checked:                             function (e) {
            return e.checked === ! 0
        }, selected:                            function (e) {
            e.parentNode.selectedIndex;
            return e.selected === ! 0
        }, parent:                              function (e) {
            return ! ! e.firstChild
        }, empty:                               function (e) {
            return ! e.firstChild
        }, has:                                 function (f, e, g) {
            return ! ! A(g[3], f).length
        }, header:                              function (e) {
            return/h\d/i.test(e.nodeName)
        }, text:                                function (e) {
            return"text" === e.type
        }, radio:                               function (e) {
            return"radio" === e.type
        }, checkbox:                            function (e) {
            return"checkbox" === e.type
        }, file:                                function (e) {
            return"file" === e.type
        }, password:                            function (e) {
            return"password" === e.type
        }, submit:                              function (e) {
            return"submit" === e.type
        }, image:                               function (e) {
            return"image" === e.type
        }, reset:                               function (e) {
            return"reset" === e.type
        }, button:                              function (e) {
            return"button" === e.type || e.nodeName.toLowerCase() === "button"
        }, input:                               function (e) {
            return/input|select|textarea|button/i.test(e.nodeName)
        }}, setFilters:               {first: function (f, e) {
            return e === 0
        }, last:                              function (f, e, h, g) {
            return e === g.length - 1
        }, even:                              function (f, e) {
            return e % 2 === 0
        }, odd:                               function (f, e) {
            return e % 2 === 1
        }, lt:                                function (f, e, g) {
            return e < g[3] - 0
        }, gt:                                function (f, e, g) {
            return e > g[3] - 0
        }, nth:                               function (f, e, g) {
            return g[3] - 0 === e
        }, eq:                                function (f, e, g) {
            return g[3] - 0 === e
        }}, filter:                   {PSEUDO: function (r, q, p, o) {
            var n = q[1], m = z.filters[n];
            if (m) {
                return m(r, p, q, o)
            }
            if (n === "contains") {
                return(r.textContent || r.innerText || A.getText([r]) || "").indexOf(q[3]) >= 0
            }
            if (n === "not") {
                var l = q[3];
                for (var j = 0, i = l.length; j < i; j ++) {
                    if (l[j] === r) {
                        return ! 1
                    }
                }
                return ! 0
            }
            A.error(n)
        }, CHILD:                              function (t, s) {
            var r = s[1], q = t;
            switch (r) {
                case"only":
                case"first":
                    while (q = q.previousSibling) {
                        if (q.nodeType === 1) {
                            return ! 1
                        }
                    }
                    if (r === "first") {
                        return ! 0
                    }
                    q = t;
                case"last":
                    while (q = q.nextSibling) {
                        if (q.nodeType === 1) {
                            return ! 1
                        }
                    }
                    return ! 0;
                case"nth":
                    var p = s[2], o = s[3];
                    if (p === 1 && o === 0) {
                        return ! 0
                    }
                    var n = s[0], m = t.parentNode;
                    if (m && (m.sizcache !== n || ! t.nodeIndex)) {
                        var l = 0;
                        for (q = m.firstChild; q; q = q.nextSibling) {
                            q.nodeType === 1 && (q.nodeIndex = ++ l)
                        }
                        m.sizcache = n
                    }
                    var k = t.nodeIndex - o;
                    return p === 0 ? k === 0 : k % p === 0 && k / p >= 0
            }
        }, ID:                                 function (f, e) {
            return f.nodeType === 1 && f.getAttribute("id") === e
        }, TAG:                                function (f, e) {
            return e === "*" && f.nodeType === 1 || f.nodeName.toLowerCase() === e
        }, CLASS:                              function (f, e) {
            return(" " + (f.className || f.getAttribute("class")) + " ").indexOf(e) > - 1
        }, ATTR:                               function (i, h) {
            var n = h[1], m = z.attrHandle[n] ? z.attrHandle[n](i) : i[n] != null ? i[n] : i.getAttribute(n), l = m + "", k = h[2], j = h[4];
            return m == null ? k === "!=" : k === "=" ? l === j : k === "*=" ? l.indexOf(j) >= 0 : k === "~=" ? (" " + l + " ").indexOf(j) >= 0 : j ? k === "!=" ? l !== j : k === "^=" ? l.indexOf(j) === 0 : k === "$=" ? l.substr(l.length - j.length) === j : k === "|=" ? l === j || l.substr(0, j.length + 1) === j + "-" : ! 1 : l && m !== ! 1
        }, POS:                                function (h, g, l, k) {
            var j = g[2], i = z.setFilters[j];
            if (i) {
                return i(h, l, g, k)
            }
        }}}, y = z.match.POS, x = function (f, e) {
            return"\\" + (e - 0 + 1)
        };
        for (var w in z.match) {
            z.match[w] = new RegExp(z.match[w].source + /(?![^\[]*\])(?![^\(]*\))/.source), z.leftMatch[w] = new RegExp(/(^(?:.|\r|\n)*?)/.source + z.match[w].source.replace(/\\(\d+)/g, x))
        }
        var v = function (f, e) {
            f = Array.prototype.slice.call(f, 0);
            if (e) {
                e.push.apply(e, f);
                return e
            }
            return f
        };
        try {
            Array.prototype.slice.call(aE.documentElement.childNodes, 0)[0].nodeType
        } catch (u) {
            v = function (g, f) {
                var j = 0, i = f || [];
                if (D.call(g) === "[object Array]") {
                    Array.prototype.push.apply(i, g)
                } else {
                    if (typeof g.length === "number") {
                        for (var h = g.length; j < h; j ++) {
                            i.push(g[j])
                        }
                    } else {
                        for (; g[j]; j ++) {
                            i.push(g[j])
                        }
                    }
                }
                return i
            }
        }
        var d, c;
        aE.documentElement.compareDocumentPosition ? d = function (f, e) {
            if (f === e) {
                C = ! 0;
                return 0
            }
            if (! f.compareDocumentPosition || ! e.compareDocumentPosition) {
                return f.compareDocumentPosition ? - 1 : 1
            }
            return f.compareDocumentPosition(e) & 4 ? - 1 : 1
        } : (d = function (t, s) {
            var r, q, p = [], o = [], n = t.parentNode, m = s.parentNode, l = n;
            if (t === s) {
                C = ! 0;
                return 0
            }
            if (n === m) {
                return c(t, s)
            }
            if (! n) {
                return - 1
            }
            if (! m) {
                return 1
            }
            while (l) {
                p.unshift(l), l = l.parentNode
            }
            l = m;
            while (l) {
                o.unshift(l), l = l.parentNode
            }
            r = p.length, q = o.length;
            for (var g = 0; g < r && g < q; g ++) {
                if (p[g] !== o[g]) {
                    return c(p[g], o[g])
                }
            }
            return g === r ? c(t, o[g], - 1) : c(p[g], s, 1)
        }, c = function (f, e, h) {
            if (f === e) {
                return h
            }
            var g = f.nextSibling;
            while (g) {
                if (g === e) {
                    return - 1
                }
                g = g.nextSibling
            }
            return 1
        }), A.getText = function (f) {
            var e = "", h;
            for (var g = 0; f[g]; g ++) {
                h = f[g], h.nodeType === 3 || h.nodeType === 4 ? e += h.nodeValue : h.nodeType !== 8 && (e += A.getText(h.childNodes))
            }
            return e
        }, function () {
            var f = aE.createElement("div"), h = "script" + (new Date).getTime(), g = aE.documentElement;
            f.innerHTML = "<a name='" + h + "'/>", g.insertBefore(f, g.firstChild), aE.getElementById(h) && (z.find.ID = function (i, l, k) {
                if (typeof l.getElementById !== "undefined" && ! k) {
                    var j = l.getElementById(i[1]);
                    return j ? j.id === i[1] || typeof j.getAttributeNode !== "undefined" && j.getAttributeNode("id").nodeValue === i[1] ? [j] : aG : []
                }
            }, z.filter.ID = function (i, e) {
                var j = typeof i.getAttributeNode !== "undefined" && i.getAttributeNode("id");
                return i.nodeType === 1 && j && j.nodeValue === e
            }), g.removeChild(f), g = f = null
        }(), function () {
            var e = aE.createElement("div");
            e.appendChild(aE.createComment("")), e.getElementsByTagName("*").length > 0 && (z.find.TAG = function (g, f) {
                var j = f.getElementsByTagName(g[1]);
                if (g[1] === "*") {
                    var i = [];
                    for (var h = 0; j[h]; h ++) {
                        j[h].nodeType === 1 && i.push(j[h])
                    }
                    j = i
                }
                return j
            }), e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== "undefined" && e.firstChild.getAttribute("href") !== "#" && (z.attrHandle.href = function (f) {
                return f.getAttribute("href", 2)
            }), e = null
        }(), aE.querySelectorAll && function () {
            var g = A, f = aE.createElement("div"), i = "__sizzle__";
            f.innerHTML = "<p class='TEST'></p>";
            if (! f.querySelectorAll || f.querySelectorAll(".TEST").length !== 0) {
                A = function (O, N, M, L) {
                    N = N || aE;
                    if (! L && ! A.isXML(N)) {
                        var K = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(O);
                        if (K && (N.nodeType === 1 || N.nodeType === 9)) {
                            if (K[1]) {
                                return v(N.getElementsByTagName(O), M)
                            }
                            if (K[2] && z.find.CLASS && N.getElementsByClassName) {
                                return v(N.getElementsByClassName(K[2]), M)
                            }
                        }
                        if (N.nodeType === 9) {
                            if (O === "body" && N.body) {
                                return v([N.body], M)
                            }
                            if (K && K[3]) {
                                var J = N.getElementById(K[3]);
                                if (! J || ! J.parentNode) {
                                    return v([], M)
                                }
                                if (J.id === K[3]) {
                                    return v([J], M)
                                }
                            }
                            try {
                                return v(N.querySelectorAll(O), M)
                            } catch (I) {
                            }
                        } else {
                            if (N.nodeType === 1 && N.nodeName.toLowerCase() !== "object") {
                                var t = N.getAttribute("id"), s = t || i, n = N.parentNode, j = /^\s*[+~]/.test(O);
                                t ? s = s.replace(/'/g, "\\$&") : N.setAttribute("id", s), j && n && (N = N.parentNode);
                                try {
                                    if (! j || n) {
                                        return v(N.querySelectorAll("[id='" + s + "'] " + O), M)
                                    }
                                } catch (a) {
                                } finally {
                                    t || N.removeAttribute("id")
                                }
                            }
                        }
                    }
                    return g(O, N, M, L)
                };
                for (var h in g) {
                    A[h] = g[h]
                }
                f = null
            }
        }(), function () {
            var g = aE.documentElement, f = g.matchesSelector || g.mozMatchesSelector || g.webkitMatchesSelector || g.msMatchesSelector, i = ! 1;
            try {
                f.call(aE.documentElement, "[test!='']:sizzle")
            } catch (h) {
                i = ! 0
            }
            f && (A.matchesSelector = function (j, l) {
                l = l.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                if (! A.isXML(j)) {
                    try {
                        if (i || ! z.match.PSEUDO.test(l) && ! /!=/.test(l)) {
                            return f.call(j, l)
                        }
                    } catch (k) {
                    }
                }
                return A(l, null, null, [j]).length > 0
            })
        }(), function () {
            var e = aE.createElement("div");
            e.innerHTML = "<div class='test e'></div><div class='test'></div>";
            if (e.getElementsByClassName && e.getElementsByClassName("e").length !== 0) {
                e.lastChild.className = "e";
                if (e.getElementsByClassName("e").length === 1) {
                    return
                }
                z.order.splice(1, 0, "CLASS"), z.find.CLASS = function (g, f, h) {
                    if (typeof f.getElementsByClassName !== "undefined" && ! h) {
                        return f.getElementsByClassName(g[1])
                    }
                }, e = null
            }
        }(), aE.documentElement.contains ? A.contains = function (f, e) {
            return f !== e && (f.contains ? f.contains(e) : ! 0)
        } : aE.documentElement.compareDocumentPosition ? A.contains = function (f, e) {
            return ! ! (f.compareDocumentPosition(e) & 16)
        } : A.contains = function () {
            return ! 1
        }, A.isXML = function (f) {
            var e = (f ? f.ownerDocument || f : 0).documentElement;
            return e ? e.nodeName !== "HTML" : ! 1
        };
        var G = function (j, i) {
            var p, o = [], n = "", m = i.nodeType ? [i] : i;
            while (p = z.match.PSEUDO.exec(j)) {
                n += p[0], j = j.replace(z.match.PSEUDO, "")
            }
            j = z.relative[j] ? j + "*" : j;
            for (var l = 0, k = m.length; l < k; l ++) {
                A(j, m[l], o)
            }
            return A.filter(n, o)
        };
        aC.find = A, aC.expr = A.selectors, aC.expr[":"] = aC.expr.filters, aC.unique = A.uniqueSort, aC.text = A.getText, aC.isXMLDoc = A.isXML, aC.contains = A.contains
    }();
    var cd = /Until$/, cb = /^(?:parents|prevUntil|prevAll)/, b9 = /,/, b8 = /^.[^:#\[\.,]*$/, b7 = Array.prototype.slice, b6 = aC.expr.match.POS, b5 = {children: ! 0, contents: ! 0, next: ! 0, prev: ! 0};
    aC.fn.extend({find: function (i) {
        var d = this.pushStack("", "find", i), n = 0;
        for (var m = 0, l = this.length; m < l; m ++) {
            n = d.length, aC.find(i, this[m], d);
            if (m > 0) {
                for (var k = n; k < d.length; k ++) {
                    for (var j = 0; j < n; j ++) {
                        if (d[j] === d[k]) {
                            d.splice(k --, 1);
                            break
                        }
                    }
                }
            }
        }
        return d
    }, has:             function (d) {
        var c = aC(d);
        return this.filter(function () {
            for (var b = 0, e = c.length; b < e; b ++) {
                if (aC.contains(this, c[b])) {
                    return ! 0
                }
            }
        })
    }, not:             function (b) {
        return this.pushStack(b3(this, b, ! 1), "not", b)
    }, filter:          function (b) {
        return this.pushStack(b3(this, b, ! 0), "filter", b)
    }, is:              function (b) {
        return ! ! b && aC.filter(b, this).length > 0
    }, closest:         function (v, u) {
        var t = [], s, r, q = this[0];
        if (aC.isArray(v)) {
            var p, o, n = {}, m = 1;
            if (q && v.length) {
                for (s = 0, r = v.length; s < r; s ++) {
                    o = v[s], n[o] || (n[o] = aC.expr.match.POS.test(o) ? aC(o, u || this.context) : o)
                }
                while (q && q.ownerDocument && q !== u) {
                    for (o in n) {
                        p = n[o], (p.jquery ? p.index(q) > - 1 : aC(q).is(p)) && t.push({selector: o, elem: q, level: m})
                    }
                    q = q.parentNode, m ++
                }
            }
            return t
        }
        var d = b6.test(v) ? aC(v, u || this.context) : null;
        for (s = 0, r = this.length; s < r; s ++) {
            q = this[s];
            while (q) {
                if (d ? d.index(q) > - 1 : aC.find.matchesSelector(q, v)) {
                    t.push(q);
                    break
                }
                q = q.parentNode;
                if (! q || ! q.ownerDocument || q === u) {
                    break
                }
            }
        }
        t = t.length > 1 ? aC.unique(t) : t;
        return this.pushStack(t, "closest", v)
    }, index:           function (b) {
        if (! b || typeof b === "string") {
            return aC.inArray(this[0], b ? aC(b) : this.parent().children())
        }
        return aC.inArray(b.jquery ? b[0] : b, this)
    }, add:             function (f, d) {
        var h = typeof f === "string" ? aC(f, d) : aC.makeArray(f), g = aC.merge(this.get(), h);
        return this.pushStack(b4(h[0]) || b4(g[0]) ? g : aC.unique(g))
    }, andSelf:         function () {
        return this.add(this.prevObject)
    }}), aC.each({parent: function (d) {
        var c = d.parentNode;
        return c && c.nodeType !== 11 ? c : null
    }, parents:           function (b) {
        return aC.dir(b, "parentNode")
    }, parentsUntil:      function (e, d, f) {
        return aC.dir(e, "parentNode", f)
    }, next:              function (b) {
        return aC.nth(b, 2, "nextSibling")
    }, prev:              function (b) {
        return aC.nth(b, 2, "previousSibling")
    }, nextAll:           function (b) {
        return aC.dir(b, "nextSibling")
    }, prevAll:           function (b) {
        return aC.dir(b, "previousSibling")
    }, nextUntil:         function (e, d, f) {
        return aC.dir(e, "nextSibling", f)
    }, prevUntil:         function (e, d, f) {
        return aC.dir(e, "previousSibling", f)
    }, siblings:          function (b) {
        return aC.sibling(b.parentNode.firstChild, b)
    }, children:          function (b) {
        return aC.sibling(b.firstChild)
    }, contents:          function (b) {
        return aC.nodeName(b, "iframe") ? b.contentDocument || b.contentWindow.document : aC.makeArray(b.childNodes)
    }}, function (d, c) {
        aC.fn[d] = function (i, h) {
            var b = aC.map(this, c, i), a = b7.call(arguments);
            cd.test(d) || (h = i), h && typeof h === "string" && (b = aC.filter(h, b)), b = this.length > 1 && ! b5[d] ? aC.unique(b) : b, (this.length > 1 || b9.test(h)) && cb.test(d) && (b = b.reverse());
            return this.pushStack(b, d, a.join(","))
        }
    }), aC.extend({filter: function (e, d, f) {
        f && (e = ":not(" + e + ")");
        return d.length === 1 ? aC.find.matchesSelector(d[0], e) ? [d[0]] : [] : aC.find.matches(e, d)
    }, dir:                function (b, j, i) {
        var h = [], d = b[j];
        while (d && d.nodeType !== 9 && (i === aG || d.nodeType !== 1 || ! aC(d).is(i))) {
            d.nodeType === 1 && h.push(d), d = d[j]
        }
        return h
    }, nth:                function (g, f, j, i) {
        f = f || 1;
        var h = 0;
        for (; g; g = g[j]) {
            if (g.nodeType === 1 && ++ h === f) {
                break
            }
        }
        return g
    }, sibling:            function (e, d) {
        var f = [];
        for (; e; e = e.nextSibling) {
            e.nodeType === 1 && e !== d && f.push(e)
        }
        return f
    }});
    var b1 = / jQuery\d+="(?:\d+|null)"/g, a9 = /^\s+/, a7 = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig, a5 = /<([\w:]+)/, a3 = /<tbody/i, a1 = /<|&#?\w+;/, aZ = /<(?:script|object|embed|option|style)/i, aX = /checked\s*(?:[^=]|=\s*.checked.)/i, aV = {option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], area: [1, "<map>", "</map>"], _default: [0, "", ""]};
    aV.optgroup = aV.option, aV.tbody = aV.tfoot = aV.colgroup = aV.caption = aV.thead, aV.th = aV.td, aC.support.htmlSerialize || (aV._default = [1, "div<div>", "</div>"]), aC.fn.extend({text: function (b) {
        if (aC.isFunction(b)) {
            return this.each(function (a) {
                var d = aC(this);
                d.text(b.call(this, a, d.text()))
            })
        }
        if (typeof b !== "object" && b !== aG) {
            return this.empty().append((this[0] && this[0].ownerDocument || aE).createTextNode(b))
        }
        return aC.text(this)
    }, wrapAll:                                                                                                                                                                                   function (d) {
        if (aC.isFunction(d)) {
            return this.each(function (a) {
                aC(this).wrapAll(d.call(this, a))
            })
        }
        if (this[0]) {
            var c = aC(d, this[0].ownerDocument).eq(0).clone(! 0);
            this[0].parentNode && c.insertBefore(this[0]), c.map(function () {
                var b = this;
                while (b.firstChild && b.firstChild.nodeType === 1) {
                    b = b.firstChild
                }
                return b
            }).append(this)
        }
        return this
    }, wrapInner:                                                                                                                                                                                 function (b) {
        if (aC.isFunction(b)) {
            return this.each(function (a) {
                aC(this).wrapInner(b.call(this, a))
            })
        }
        return this.each(function () {
            var a = aC(this), d = a.contents();
            d.length ? d.wrapAll(b) : a.append(b)
        })
    }, wrap:                                                                                                                                                                                      function (b) {
        return this.each(function () {
            aC(this).wrapAll(b)
        })
    }, unwrap:                                                                                                                                                                                    function () {
        return this.parent().each(function () {
            aC.nodeName(this, "body") || aC(this).replaceWith(this.childNodes)
        }).end()
    }, append:                                                                                                                                                                                    function () {
        return this.domManip(arguments, ! 0, function (b) {
            this.nodeType === 1 && this.appendChild(b)
        })
    }, prepend:                                                                                                                                                                                   function () {
        return this.domManip(arguments, ! 0, function (b) {
            this.nodeType === 1 && this.insertBefore(b, this.firstChild)
        })
    }, before:                                                                                                                                                                                    function () {
        if (this[0] && this[0].parentNode) {
            return this.domManip(arguments, ! 1, function (c) {
                this.parentNode.insertBefore(c, this)
            })
        }
        if (arguments.length) {
            var b = aC(arguments[0]);
            b.push.apply(b, this.toArray());
            return this.pushStack(b, "before", arguments)
        }
    }, after:                                                                                                                                                                                     function () {
        if (this[0] && this[0].parentNode) {
            return this.domManip(arguments, ! 1, function (c) {
                this.parentNode.insertBefore(c, this.nextSibling)
            })
        }
        if (arguments.length) {
            var b = this.pushStack(this, "after", arguments);
            b.push.apply(b, aC(arguments[0]).toArray());
            return b
        }
    }, remove:                                                                                                                                                                                    function (f, d) {
        for (var h = 0, g; (g = this[h]) != null; h ++) {
            if (! f || aC.filter(f, [g]).length) {
                ! d && g.nodeType === 1 && (aC.cleanData(g.getElementsByTagName("*")), aC.cleanData([g])), g.parentNode && g.parentNode.removeChild(g)
            }
        }
        return this
    }, empty:                                                                                                                                                                                     function () {
        for (var d = 0, c; (c = this[d]) != null; d ++) {
            c.nodeType === 1 && aC.cleanData(c.getElementsByTagName("*"));
            while (c.firstChild) {
                c.removeChild(c.firstChild)
            }
        }
        return this
    }, clone:                                                                                                                                                                                     function (d, c) {
        d = d == null ? ! 0 : d, c = c == null ? d : c;
        return this.map(function () {
            return aC.clone(this, d, c)
        })
    }, html:                                                                                                                                                                                      function (b) {
        if (b === aG) {
            return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(b1, "") : null
        }
        if (typeof b !== "string" || aZ.test(b) || ! aC.support.leadingWhitespace && a9.test(b) || aV[(a5.exec(b) || ["", ""])[1].toLowerCase()]) {
            aC.isFunction(b) ? this.each(function (a) {
                var e = aC(this);
                e.html(b.call(this, a, e.html()))
            }) : this.empty().append(b)
        } else {
            b = b.replace(a7, "<$1></$2>");
            try {
                for (var h = 0, g = this.length; h < g; h ++) {
                    this[h].nodeType === 1 && (aC.cleanData(this[h].getElementsByTagName("*")), this[h].innerHTML = b)
                }
            } catch (d) {
                this.empty().append(b)
            }
        }
        return this
    }, replaceWith:                                                                                                                                                                               function (b) {
        if (this[0] && this[0].parentNode) {
            if (aC.isFunction(b)) {
                return this.each(function (a) {
                    var f = aC(this), d = f.html();
                    f.replaceWith(b.call(this, a, d))
                })
            }
            typeof b !== "string" && (b = aC(b).detach());
            return this.each(function () {
                var a = this.nextSibling, d = this.parentNode;
                aC(this).remove(), a ? aC(a).before(b) : aC(d).append(b)
            })
        }
        return this.pushStack(aC(aC.isFunction(b) ? b() : b), "replaceWith", b)
    }, detach:                                                                                                                                                                                    function (b) {
        return this.remove(b, ! 0)
    }, domManip:                                                                                                                                                                                  function (x, w, v) {
        var u, t, s, r, q = x[0], p = [];
        if (! aC.support.checkClone && arguments.length === 3 && typeof q === "string" && aX.test(q)) {
            return this.each(function () {
                aC(this).domManip(x, w, v, ! 0)
            })
        }
        if (aC.isFunction(q)) {
            return this.each(function (c) {
                var a = aC(this);
                x[0] = q.call(this, c, w ? a.html() : aG), a.domManip(x, w, v)
            })
        }
        if (this[0]) {
            r = q && q.parentNode, aC.support.parentNode && r && r.nodeType === 11 && r.childNodes.length === this.length ? u = {fragment: r} : u = aC.buildFragment(x, this, p), s = u.fragment, s.childNodes.length === 1 ? t = s = s.firstChild : t = s.firstChild;
            if (t) {
                w = w && aC.nodeName(t, "tr");
                for (var o = 0, d = this.length, b = d - 1; o < d; o ++) {
                    v.call(w ? aT(this[o], t) : this[o], u.cacheable || d > 1 && o < b ? aC.clone(s, ! 0, ! 0) : s)
                }
            }
            p.length && aC.each(p, aL)
        }
        return this
    }}), aC.buildFragment = function (d, c, n) {
        var m, l, k, j = c && c[0] ? c[0].ownerDocument || c[0] : aE;
        d.length === 1 && typeof d[0] === "string" && d[0].length < 512 && j === aE && d[0].charAt(0) === "<" && ! aZ.test(d[0]) && (aC.support.checkClone || ! aX.test(d[0])) && (l = ! 0, k = aC.fragments[d[0]], k && (k !== 1 && (m = k))), m || (m = j.createDocumentFragment(), aC.clean(d, j, m, n)), l && (aC.fragments[d[0]] = k ? m : 1);
        return{fragment: m, cacheable: l}
    }, aC.fragments = {}, aC.each({appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith"}, function (d, c) {
        aC.fn[d] = function (o) {
            var n = [], m = aC(o), l = this.length === 1 && this[0].parentNode;
            if (l && l.nodeType === 11 && l.childNodes.length === 1 && m.length === 1) {
                m[c](this[0]);
                return this
            }
            for (var k = 0, b = m.length; k < b; k ++) {
                var a = (k > 0 ? this.clone(! 0) : this).get();
                aC(m[k])[c](a), n = n.concat(a)
            }
            return this.pushStack(n, d, m.selector)
        }
    }), aC.extend({clone: function (i, d, n) {
        var m = i.cloneNode(! 0), l, k, j;
        if (! aC.support.noCloneEvent && (i.nodeType === 1 || i.nodeType === 11) && ! aC.isXMLDoc(i)) {
            l = i.getElementsByTagName("*"), k = m.getElementsByTagName("*");
            for (j = 0; l[j]; ++ j) {
                cI(l[j], k[j])
            }
            cI(i, m)
        }
        if (d) {
            aR(i, m);
            if (n && "getElementsByTagName" in i) {
                l = i.getElementsByTagName("*"), k = m.getElementsByTagName("*");
                if (l.length) {
                    for (j = 0; l[j]; ++ j) {
                        aR(l[j], k[j])
                    }
                }
            }
        }
        return m
    }, clean:             function (B, A, z, y) {
        A = A || aE, typeof A.createElement === "undefined" && (A = A.ownerDocument || A[0] && A[0].ownerDocument || aE);
        var x = [];
        for (var w = 0, v; (v = B[w]) != null; w ++) {
            typeof v === "number" && (v += "");
            if (! v) {
                continue
            }
            if (typeof v !== "string" || a1.test(v)) {
                if (typeof v === "string") {
                    v = v.replace(a7, "<$1></$2>");
                    var u = (a5.exec(v) || ["", ""])[1].toLowerCase(), t = aV[u] || aV._default, s = t[0], r = A.createElement("div");
                    r.innerHTML = t[1] + v + t[2];
                    while (s --) {
                        r = r.lastChild
                    }
                    if (! aC.support.tbody) {
                        var q = a3.test(v), d = u === "table" && ! q ? r.firstChild && r.firstChild.childNodes : t[1] === "<table>" && ! q ? r.childNodes : [];
                        for (var c = d.length - 1; c >= 0; -- c) {
                            aC.nodeName(d[c], "tbody") && ! d[c].childNodes.length && d[c].parentNode.removeChild(d[c])
                        }
                    }
                    ! aC.support.leadingWhitespace && a9.test(v) && r.insertBefore(A.createTextNode(a9.exec(v)[0]), r.firstChild), v = r.childNodes
                }
            } else {
                v = A.createTextNode(v)
            }
            v.nodeType ? x.push(v) : x = aC.merge(x, v)
        }
        if (z) {
            for (w = 0; x[w]; w ++) {
                ! y || ! aC.nodeName(x[w], "script") || x[w].type && x[w].type.toLowerCase() !== "text/javascript" ? (x[w].nodeType === 1 && x.splice.apply(x, [w + 1, 0].concat(aC.makeArray(x[w].getElementsByTagName("script")))), z.appendChild(x[w])) : y.push(x[w].parentNode ? x[w].parentNode.removeChild(x[w]) : x[w])
            }
        }
        return x
    }, cleanData:         function (t) {
        var s, r, q = aC.cache, p = aC.expando, o = aC.event.special, n = aC.support.deleteExpando;
        for (var m = 0, l; (l = t[m]) != null; m ++) {
            if (l.nodeName && aC.noData[l.nodeName.toLowerCase()]) {
                continue
            }
            r = l[aC.expando];
            if (r) {
                s = q[r] && q[r][p];
                if (s && s.events) {
                    for (var d in s.events) {
                        o[d] ? aC.event.remove(l, d) : aC.removeEvent(l, d, s.handle)
                    }
                    s.handle && (s.handle.elem = null)
                }
                n ? delete l[aC.expando] : l.removeAttribute && l.removeAttribute(aC.expando), delete q[r]
            }
        }
    }});
    var b2 = /alpha\([^)]*\)/i, b0 = /opacity=([^)]*)/, a8 = /-([a-z])/ig, a6 = /([A-Z])/g, a4 = /^-?\d+(?:px)?$/i, a2 = /^-?\d/, a0 = {position: "absolute", visibility: "hidden", display: "block"}, aY = ["Left", "Right"], aW = ["Top", "Bottom"], aU, aS, aQ, aP = function (d, c) {
        return c.toUpperCase()
    };
    aC.fn.css = function (b, d) {
        if (arguments.length === 2 && d === aG) {
            return this
        }
        return aC.access(this, b, d, ! 0, function (f, h, g) {
            return g !== aG ? aC.style(f, h, g) : aC.css(f, h)
        })
    }, aC.extend({cssHooks: {opacity: {get: function (e, d) {
        if (d) {
            var f = aU(e, "opacity", "opacity");
            return f === "" ? "1" : f
        }
        return e.style.opacity
    }}}, cssNumber:         {zIndex: ! 0, fontWeight: ! 0, opacity: ! 0, zoom: ! 0, lineHeight: ! 0}, cssProps: {"float": aC.support.cssFloat ? "cssFloat" : "styleFloat"}, style: function (r, q, p, o) {
        if (r && r.nodeType !== 3 && r.nodeType !== 8 && r.style) {
            var n, m = aC.camelCase(q), l = r.style, d = aC.cssHooks[m];
            q = aC.cssProps[m] || m;
            if (p === aG) {
                if (d && "get" in d && (n = d.get(r, ! 1, o)) !== aG) {
                    return n
                }
                return l[q]
            }
            if (typeof p === "number" && isNaN(p) || p == null) {
                return
            }
            typeof p === "number" && ! aC.cssNumber[m] && (p += "px");
            if (! d || ! ("set" in d) || (p = d.set(r, p)) !== aG) {
                try {
                    l[q] = p
                } catch (b) {
                }
            }
        }
    }, css:                 function (b, l, k) {
        var j, i = aC.camelCase(l), d = aC.cssHooks[i];
        l = aC.cssProps[i] || i;
        if (d && "get" in d && (j = d.get(b, ! 0, k)) !== aG) {
            return j
        }
        if (aU) {
            return aU(b, l, i)
        }
    }, swap:                function (g, f, j) {
        var i = {};
        for (var h in f) {
            i[h] = g.style[h], g.style[h] = f[h]
        }
        j.call(g);
        for (h in f) {
            g.style[h] = i[h]
        }
    }, camelCase:           function (b) {
        return b.replace(a8, aP)
    }}), aC.curCSS = aC.css, aC.each(["height", "width"], function (d, c) {
        aC.cssHooks[c] = {get: function (b, i, h) {
            var g;
            if (i) {
                b.offsetWidth !== 0 ? g = aO(b, c, h) : aC.swap(b, a0, function () {
                    g = aO(b, c, h)
                });
                if (g <= 0) {
                    g = aU(b, c, c), g === "0px" && aQ && (g = aQ(b, c, c));
                    if (g != null) {
                        return g === "" || g === "auto" ? "0px" : g
                    }
                }
                if (g < 0 || g == null) {
                    g = b.style[c];
                    return g === "" || g === "auto" ? "0px" : g
                }
                return typeof g === "string" ? g : g + "px"
            }
        }, set:                function (f, e) {
            if (! a4.test(e)) {
                return e
            }
            e = parseFloat(e);
            if (e >= 0) {
                return e + "px"
            }
        }}
    }), aC.support.opacity || (aC.cssHooks.opacity = {get: function (d, c) {
        return b0.test((c && d.currentStyle ? d.currentStyle.filter : d.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : c ? "1" : ""
    }, set:                                                function (g, d) {
        var j = g.style;
        j.zoom = 1;
        var i = aC.isNaN(d) ? "" : "alpha(opacity=" + d * 100 + ")", h = j.filter || "";
        j.filter = b2.test(h) ? h.replace(b2, i) : j.filter + " " + i
    }}), aE.defaultView && aE.defaultView.getComputedStyle && (aS = function (b, l, k) {
        var j, i, d;
        k = k.replace(a6, "-$1").toLowerCase();
        if (! (i = b.ownerDocument.defaultView)) {
            return aG
        }
        if (d = i.getComputedStyle(b, null)) {
            j = d.getPropertyValue(k), j === "" && ! aC.contains(b.ownerDocument.documentElement, b) && (j = aC.style(b, k))
        }
        return j
    }), aE.documentElement.currentStyle && (aQ = function (h, g) {
        var l, k = h.currentStyle && h.currentStyle[g], j = h.runtimeStyle && h.runtimeStyle[g], i = h.style;
        ! a4.test(k) && a2.test(k) && (l = i.left, j && (h.runtimeStyle.left = h.currentStyle.left), i.left = g === "fontSize" ? "1em" : k || 0, k = i.pixelLeft + "px", i.left = l, j && (h.runtimeStyle.left = j));
        return k === "" ? "auto" : k
    }), aU = aS || aQ, aC.expr && aC.expr.filters && (aC.expr.filters.hidden = function (e) {
        var d = e.offsetWidth, f = e.offsetHeight;
        return d === 0 && f === 0 || ! aC.support.reliableHiddenOffsets && (e.style.display || aC.css(e, "display")) === "none"
    }, aC.expr.filters.visible = function (b) {
        return ! aC.expr.filters.hidden(b)
    });
    var aN = /%20/g, aM = /\[\]$/, aK = /\r?\n/g, aJ = /#.*$/, aH = /^(.*?):\s*(.*?)\r?$/mg, aF = /^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i, aD = /^(?:GET|HEAD)$/, aB = /^\/\//, az = /\?/, ax = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, av = /^(?:select|textarea)/i, at = /\s+/, cH = /([?&])_=[^&]*/, cG = /^(\w+:)\/\/([^\/?#:]+)(?::(\d+))?/, cF = aC.fn.load, cE = {}, cD = {};
    aC.fn.extend({load: function (i, d, n) {
        if (typeof i !== "string" && cF) {
            return cF.apply(this, arguments)
        }
        if (! this.length) {
            return this
        }
        var m = i.indexOf(" ");
        if (m >= 0) {
            var l = i.slice(m, i.length);
            i = i.slice(0, m)
        }
        var k = "GET";
        d && (aC.isFunction(d) ? (n = d, d = null) : typeof d === "object" && (d = aC.param(d, aC.ajaxSettings.traditional), k = "POST"));
        var j = this;
        aC.ajax({url: i, type: k, dataType: "html", data: d, complete: function (f, c, g) {
            g = f.responseText, f.isResolved() && (f.done(function (b) {
                g = b
            }), j.html(l ? aC("<div>").append(g.replace(ax, "")).find(l) : g)), n && j.each(n, [g, c, f])
        }});
        return this
    }, serialize:       function () {
        return aC.param(this.serializeArray())
    }, serializeArray:  function () {
        return this.map(function () {
            return this.elements ? aC.makeArray(this.elements) : this
        }).filter(function () {
            return this.name && ! this.disabled && (this.checked || av.test(this.nodeName) || aF.test(this.type))
        }).map(function (e, d) {
            var f = aC(this).val();
            return f == null ? null : aC.isArray(f) ? aC.map(f, function (b, g) {
                return{name: d.name, value: b.replace(aK, "\r\n")}
            }) : {name: d.name, value: f.replace(aK, "\r\n")}
        }).get()
    }}), aC.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (d, c) {
        aC.fn[c] = function (b) {
            return this.bind(c, b)
        }
    }), aC.each(["get", "post"], function (d, c) {
        aC[c] = function (b, i, h, g) {
            aC.isFunction(i) && (g = g || h, h = i, i = null);
            return aC.ajax({type: c, url: b, data: i, success: h, dataType: g})
        }
    }), aC.extend({getScript: function (d, c) {
        return aC.get(d, null, c, "script")
    }, getJSON:               function (e, d, f) {
        return aC.get(e, d, f, "json")
    }, ajaxSetup:             function (b) {
        aC.extend(! 0, aC.ajaxSettings, b), b.context && (aC.ajaxSettings.context = b.context)
    }, ajaxSettings:          {url: location.href, global: ! 0, type: "GET", contentType: "application/x-www-form-urlencoded", processData: ! 0, async: ! 0, accepts: {xml: "application/xml, text/xml", html: "text/html", text: "text/plain", json: "application/json, text/javascript", "*": "*/*"}, contents: {xml: /xml/, html: /html/, json: /json/}, responseFields: {xml: "responseXML", text: "responseText"}, converters: {"* text": aI.String, "text html": ! 0, "text json": aC.parseJSON, "text xml": aC.parseXML}}, ajaxPrefilter: cC(cE), ajaxTransport: cC(cD), ajax: function (T, S) {
        function A(o, k, j, i) {
            if (D !== 2) {
                D = 2, H && clearTimeout(H), I = aG, K = i || "", B.readyState = o ? 4 : 0;
                var h, g, f, v = j ? cz(R, B, j) : aG, t, p;
                if (o >= 200 && o < 300 || o === 304) {
                    if (R.ifModified) {
                        if (t = B.getResponseHeader("Last-Modified")) {
                            aC.lastModified[R.url] = t
                        }
                        if (p = B.getResponseHeader("Etag")) {
                            aC.etag[R.url] = p
                        }
                    }
                    if (o === 304) {
                        k = "notmodified", h = ! 0
                    } else {
                        try {
                            g = cy(R, v), k = "success", h = ! 0
                        } catch (m) {
                            k = "parsererror", f = m
                        }
                    }
                } else {
                    f = k, o && (k = "error", o < 0 && (o = 0))
                }
                B.status = o, B.statusText = k, h ? O.resolveWith(Q, [g, k, B]) : O.rejectWith(Q, [B, k, f]), B.statusCode(M), M = aG, R.global && P.trigger("ajax" + (h ? "Success" : "Error"), [B, R, h ? g : f]), N.resolveWith(Q, [B, k]), R.global && (P.trigger("ajaxComplete", [B, R]), -- aC.active || aC.event.trigger("ajaxStop"))
            }
        }

        typeof S !== "object" && (S = T, T = aG), S = S || {};
        var R = aC.extend(! 0, {}, aC.ajaxSettings, S), Q = (R.context = ("context" in S ? S : aC.ajaxSettings).context) || R, P = Q === R ? aC.event : aC(Q), O = aC.Deferred(), N = aC._Deferred(), M = R.statusCode || {}, L = {}, K, J, I, H, G = aE.location, F = G.protocol || "http:", E, D = 0, C, B = {readyState: 0, setRequestHeader: function (f, e) {
            D === 0 && (L[f.toLowerCase()] = e);
            return this
        }, getAllResponseHeaders:                                                                                                                                                                                                                                                                                           function () {
            return D === 2 ? K : null
        }, getResponseHeader:                                                                                                                                                                                                                                                                                               function (f) {
            var e;
            if (D === 2) {
                if (! J) {
                    J = {};
                    while (e = aH.exec(K)) {
                        J[e[1].toLowerCase()] = e[2]
                    }
                }
                e = J[f.toLowerCase()]
            }
            return e || null
        }, abort:                                                                                                                                                                                                                                                                                                           function (e) {
            e = e || "abort", I && I.abort(e), A(0, e);
            return this
        }};
        O.promise(B), B.success = B.done, B.error = B.fail, B.complete = N.done, B.statusCode = function (f) {
            if (f) {
                var e;
                if (D < 2) {
                    for (e in f) {
                        M[e] = [M[e], f[e]]
                    }
                } else {
                    e = f[B.status], B.then(e, e)
                }
            }
            return this
        }, R.url = ("" + (T || R.url)).replace(aJ, "").replace(aB, F + "//"), R.dataTypes = aC.trim(R.dataType || "*").toLowerCase().split(at), R.crossDomain || (E = cG.exec(R.url.toLowerCase()), R.crossDomain = E && (E[1] != F || E[2] != G.hostname || (E[3] || (E[1] === "http:" ? 80 : 443)) != (G.port || (F === "http:" ? 80 : 443)))), R.data && R.processData && typeof R.data !== "string" && (R.data = aC.param(R.data, R.traditional)), cB(cE, R, S, B), R.type = R.type.toUpperCase(), R.hasContent = ! aD.test(R.type), R.global && aC.active ++ === 0 && aC.event.trigger("ajaxStart");
        if (! R.hasContent) {
            R.data && (R.url += (az.test(R.url) ? "&" : "?") + R.data);
            if (R.cache === ! 1) {
                var d = aC.now(), c = R.url.replace(cH, "$1_=" + d);
                R.url = c + (c === R.url ? (az.test(R.url) ? "&" : "?") + "_=" + d : "")
            }
        }
        if (R.data && R.hasContent && R.contentType !== ! 1 || S.contentType) {
            L["content-type"] = R.contentType
        }
        R.ifModified && (aC.lastModified[R.url] && (L["if-modified-since"] = aC.lastModified[R.url]), aC.etag[R.url] && (L["if-none-match"] = aC.etag[R.url])), L.accept = R.dataTypes[0] && R.accepts[R.dataTypes[0]] ? R.accepts[R.dataTypes[0]] + (R.dataTypes[0] !== "*" ? ", */*; q=0.01" : "") : R.accepts["*"];
        for (C in R.headers) {
            L[C.toLowerCase()] = R.headers[C]
        }
        if (! R.beforeSend || R.beforeSend.call(Q, B, R) !== ! 1 && D !== 2) {
            for (C in {success: 1, error: 1, complete: 1}) {
                B[C](R[C])
            }
            I = cB(cD, R, S, B);
            if (I) {
                D = B.readyState = 1, R.global && P.trigger("ajaxSend", [B, R]), R.async && R.timeout > 0 && (H = setTimeout(function () {
                    B.abort("timeout")
                }, R.timeout));
                try {
                    I.send(L, A)
                } catch (b) {
                    status < 2 ? A(- 1, b) : aC.error(b)
                }
            } else {
                A(- 1, "No Transport")
            }
        } else {
            A(0, "abort"), B = ! 1
        }
        return B
    }, param:                 function (b, j) {
        var i = [], h = function (e, c) {
            c = aC.isFunction(c) ? c() : c, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(c)
        };
        j === aG && (j = aC.ajaxSettings.traditional);
        if (aC.isArray(b) || b.jquery) {
            aC.each(b, function () {
                h(this.name, this.value)
            })
        } else {
            for (var d in b) {
                cA(d, b[d], j, h)
            }
        }
        return i.join("&").replace(aN, "+")
    }}), aC.extend({active: 0, lastModified: {}, etag: {}});
    var cx = aC.now(), cw = /(\=)\?(&|$)|()\?\?()/i;
    aC.ajaxSetup({jsonp: "callback", jsonpCallback: function () {
        return aC.expando + "_" + cx ++
    }}), aC.ajaxPrefilter("json jsonp", function (r, q, p) {
        p = typeof r.data === "string";
        if (r.dataTypes[0] === "jsonp" || q.jsonpCallback || q.jsonp != null || r.jsonp !== ! 1 && (cw.test(r.url) || p && cw.test(r.data))) {
            var o, n = r.jsonpCallback = aC.isFunction(r.jsonpCallback) ? r.jsonpCallback() : r.jsonpCallback, m = aI[n], l = r.url, d = r.data, a = "$1" + n + "$2";
            r.jsonp !== ! 1 && (l = l.replace(cw, a), r.url === l && (p && (d = d.replace(cw, a)), r.data === d && (l += (/\?/.test(l) ? "&" : "?") + r.jsonp + "=" + n))), r.url = l, r.data = d, aI[n] = function (b) {
                o = [b]
            }, r.complete = [function () {
                aI[n] = m;
                if (m) {
                    o && aC.isFunction(m) && aI[n](o[0])
                } else {
                    try {
                        delete aI[n]
                    } catch (c) {
                    }
                }
            }, r.complete], r.converters["script json"] = function () {
                o || aC.error(n + " was not called");
                return o[0]
            }, r.dataTypes[0] = "json";
            return"script"
        }
    }), aC.ajaxSetup({accepts: {script: "text/javascript, application/javascript"}, contents: {script: /javascript/}, converters: {"text script": function (b) {
        aC.globalEval(b);
        return b
    }}}), aC.ajaxPrefilter("script", function (b) {
        b.cache === aG && (b.cache = ! 1), b.crossDomain && (b.type = "GET", b.global = ! 1)
    }), aC.ajaxTransport("script", function (b) {
        if (b.crossDomain) {
            var f, c = aE.getElementsByTagName("head")[0] || aE.documentElement;
            return{send: function (d, a) {
                f = aE.createElement("script"), f.async = "async", b.scriptCharset && (f.charset = b.scriptCharset), f.src = b.url, f.onload = f.onreadystatechange = function (e, g) {
                    if (! f.readyState || /loaded|complete/.test(f.readyState)) {
                        f.onload = f.onreadystatechange = null, c && f.parentNode && c.removeChild(f), f = aG, g || a(200, "success")
                    }
                }, c.insertBefore(f, c.firstChild)
            }, abort:    function () {
                f && f.onload(0, 1)
            }}
        }
    });
    var cv = aC.now(), cu = {}, ct, cs;
    aC.ajaxSettings.xhr = aI.ActiveXObject ? function () {
        if (aI.location.protocol !== "file:") {
            try {
                return new aI.XMLHttpRequest
            } catch (a) {
            }
        }
        try {
            return new aI.ActiveXObject("Microsoft.XMLHTTP")
        } catch (d) {
        }
    } : function () {
        return new aI.XMLHttpRequest
    };
    try {
        cs = aC.ajaxSettings.xhr()
    } catch (cr) {
    }
    aC.support.ajax = ! ! cs, aC.support.cors = cs && "withCredentials" in cs, cs = aG, aC.support.ajax && aC.ajaxTransport(function (a) {
        if (! a.crossDomain || aC.support.cors) {
            var d;
            return{send: function (l, k) {
                ct || (ct = 1, aC(aI).bind("unload", function () {
                    aC.each(cu, function (f, e) {
                        e.onreadystatechange && e.onreadystatechange(1)
                    })
                }));
                var j = a.xhr(), c;
                a.username ? j.open(a.type, a.url, a.async, a.username, a.password) : j.open(a.type, a.url, a.async), (! a.crossDomain || a.hasContent) && ! l["x-requested-with"] && (l["x-requested-with"] = "XMLHttpRequest");
                try {
                    aC.each(l, function (f, e) {
                        j.setRequestHeader(f, e)
                    })
                } catch (b) {
                }
                j.send(a.hasContent && a.data || null), d = function (h, r) {
                    if (d && (r || j.readyState === 4)) {
                        d = 0, c && (j.onreadystatechange = aC.noop, delete cu[c]);
                        if (r) {
                            j.readyState !== 4 && j.abort()
                        } else {
                            var q = j.status, p, o = j.getAllResponseHeaders(), g = {}, f = j.responseXML;
                            f && f.documentElement && (g.xml = f), g.text = j.responseText;
                            try {
                                p = j.statusText
                            } catch (s) {
                                p = ""
                            }
                            q = q === 0 ? ! a.crossDomain || p ? o ? 304 : 0 : 302 : q == 1223 ? 204 : q, k(q, p, g, o)
                        }
                    }
                }, a.async && j.readyState !== 4 ? (c = cv ++, cu[c] = j, j.onreadystatechange = d) : d()
            }, abort:    function () {
                d && d(0, 1)
            }}
        }
    });
    var cq = {}, co = /^(?:toggle|show|hide)$/, cm = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i, ck, ci = [
        ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
        ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
        ["opacity"]
    ];
    aC.fn.extend({show: function (i, d, n) {
        var m, l;
        if (i || i === 0) {
            return this.animate(ch("show", 3), i, d, n)
        }
        for (var k = 0, j = this.length; k < j; k ++) {
            m = this[k], l = m.style.display, ! aC._data(m, "olddisplay") && l === "none" && (l = m.style.display = ""), l === "" && aC.css(m, "display") === "none" && aC._data(m, "olddisplay", cf(m.nodeName))
        }
        for (k = 0; k < j; k ++) {
            m = this[k], l = m.style.display;
            if (l === "" || l === "none") {
                m.style.display = aC._data(m, "olddisplay") || ""
            }
        }
        return this
    }, hide:            function (h, d, l) {
        if (h || h === 0) {
            return this.animate(ch("hide", 3), h, d, l)
        }
        for (var k = 0, j = this.length; k < j; k ++) {
            var i = aC.css(this[k], "display");
            i !== "none" && ! aC._data(this[k], "olddisplay") && aC._data(this[k], "olddisplay", i)
        }
        for (k = 0; k < j; k ++) {
            this[k].style.display = "none"
        }
        return this
    }, _toggle:         aC.fn.toggle, toggle: function (f, d, h) {
        var g = typeof f === "boolean";
        aC.isFunction(f) && aC.isFunction(d) ? this._toggle.apply(this, arguments) : f == null || g ? this.each(function () {
            var a = g ? f : aC(this).is(":hidden");
            aC(this)[a ? "show" : "hide"]()
        }) : this.animate(ch("toggle", 3), f, d, h);
        return this
    }, fadeTo:          function (f, e, h, g) {
        return this.filter(":hidden").css("opacity", 0).show().end().animate({opacity: e}, f, h, g)
    }, animate:         function (g, d, j, i) {
        var h = aC.speed(d, j, i);
        if (aC.isEmptyObject(g)) {
            return this.each(h.complete)
        }
        return this[h.queue === ! 1 ? "each" : "queue"](function () {
            var a = aC.extend({}, h), o, n = this.nodeType === 1, m = n && aC(this).is(":hidden"), l = this;
            for (o in g) {
                var k = aC.camelCase(o);
                o !== k && (g[k] = g[o], delete g[o], o = k);
                if (g[o] === "hide" && m || g[o] === "show" && ! m) {
                    return a.complete.call(this)
                }
                if (n && (o === "height" || o === "width")) {
                    a.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY];
                    if (aC.css(this, "display") === "inline" && aC.css(this, "float") === "none") {
                        if (aC.support.inlineBlockNeedsLayout) {
                            var f = cf(this.nodeName);
                            f === "inline" ? this.style.display = "inline-block" : (this.style.display = "inline", this.style.zoom = 1)
                        } else {
                            this.style.display = "inline-block"
                        }
                    }
                }
                aC.isArray(g[o]) && ((a.specialEasing = a.specialEasing || {})[o] = g[o][1], g[o] = g[o][0])
            }
            a.overflow != null && (this.style.overflow = "hidden"), a.curAnim = aC.extend({}, g), aC.each(g, function (u, t) {
                var s = new aC.fx(l, a, u);
                if (co.test(t)) {
                    s[t === "toggle" ? m ? "show" : "hide" : t](g)
                } else {
                    var r = cm.exec(t), q = s.cur() || 0;
                    if (r) {
                        var p = parseFloat(r[2]), b = r[3] || "px";
                        b !== "px" && (aC.style(l, u, (p || 1) + b), q = (p || 1) / s.cur() * q, aC.style(l, u, q + b)), r[1] && (p = (r[1] === "-=" ? - 1 : 1) * p + q), s.custom(q, p, b)
                    } else {
                        s.custom(q, t, "")
                    }
                }
            });
            return ! 0
        })
    }, stop:            function (e, d) {
        var f = aC.timers;
        e && this.queue([]), this.each(function () {
            for (var b = f.length - 1; b >= 0; b --) {
                f[b].elem === this && (d && f[b](! 0), f.splice(b, 1))
            }
        }), d || this.dequeue();
        return this
    }}), aC.each({slideDown: ch("show", 1), slideUp: ch("hide", 1), slideToggle: ch("toggle", 1), fadeIn: {opacity: "show"}, fadeOut: {opacity: "hide"}, fadeToggle: {opacity: "toggle"}}, function (d, c) {
        aC.fn[d] = function (b, f, e) {
            return this.animate(c, b, f, e)
        }
    }), aC.extend({speed: function (f, d, h) {
        var g = f && typeof f === "object" ? aC.extend({}, f) : {complete: h || ! h && d || aC.isFunction(f) && f, duration: f, easing: h && d || d && ! aC.isFunction(d) && d};
        g.duration = aC.fx.off ? 0 : typeof g.duration === "number" ? g.duration : g.duration in aC.fx.speeds ? aC.fx.speeds[g.duration] : aC.fx.speeds._default, g.old = g.complete, g.complete = function () {
            g.queue !== ! 1 && aC(this).dequeue(), aC.isFunction(g.old) && g.old.call(this)
        };
        return g
    }, easing:            {linear: function (f, e, h, g) {
        return h + g * f
    }, swing:                      function (f, e, h, g) {
        return(- Math.cos(f * Math.PI) / 2 + 0.5) * g + h
    }}, timers:           [], fx: function (e, d, f) {
        this.options = d, this.elem = e, this.prop = f, d.orig || (d.orig = {})
    }}), aC.fx.prototype = {update: function () {
        this.options.step && this.options.step.call(this.elem, this.now, this), (aC.fx.step[this.prop] || aC.fx.step._default)(this)
    }, cur:                         function () {
        if (this.elem[this.prop] != null && (! this.elem.style || this.elem.style[this.prop] == null)) {
            return this.elem[this.prop]
        }
        var b = parseFloat(aC.css(this.elem, this.prop));
        return b || 0
    }, custom:                      function (h, d, l) {
        function i(b) {
            return k.step(b)
        }

        var k = this, j = aC.fx;
        this.startTime = aC.now(), this.start = h, this.end = d, this.unit = l || this.unit || "px", this.now = this.start, this.pos = this.state = 0, i.elem = this.elem, i() && aC.timers.push(i) && ! ck && (ck = setInterval(j.tick, j.interval))
    }, show:                        function () {
        this.options.orig[this.prop] = aC.style(this.elem, this.prop), this.options.show = ! 0, this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()), aC(this.elem).show()
    }, hide:                        function () {
        this.options.orig[this.prop] = aC.style(this.elem, this.prop), this.options.hide = ! 0, this.custom(this.cur(), 0)
    }, step:                        function (t) {
        var s = aC.now(), r = ! 0;
        if (t || s >= this.options.duration + this.startTime) {
            this.now = this.end, this.pos = this.state = 1, this.update(), this.options.curAnim[this.prop] = ! 0;
            for (var q in this.options.curAnim) {
                this.options.curAnim[q] !== ! 0 && (r = ! 1)
            }
            if (r) {
                if (this.options.overflow != null && ! aC.support.shrinkWrapBlocks) {
                    var p = this.elem, o = this.options;
                    aC.each(["", "X", "Y"], function (e, c) {
                        p.style["overflow" + c] = o.overflow[e]
                    })
                }
                this.options.hide && aC(this.elem).hide();
                if (this.options.hide || this.options.show) {
                    for (var n in this.options.curAnim) {
                        aC.style(this.elem, n, this.options.orig[n])
                    }
                }
                this.options.complete.call(this.elem)
            }
            return ! 1
        }
        var m = s - this.startTime;
        this.state = m / this.options.duration;
        var l = this.options.specialEasing && this.options.specialEasing[this.prop], d = this.options.easing || (aC.easing.swing ? "swing" : "linear");
        this.pos = aC.easing[l || d](this.state, m, 0, 1, this.options.duration), this.now = this.start + (this.end - this.start) * this.pos, this.update();
        return ! 0
    }}, aC.extend(aC.fx, {tick: function () {
        var d = aC.timers;
        for (var c = 0; c < d.length; c ++) {
            d[c]() || d.splice(c --, 1)
        }
        d.length || aC.fx.stop()
    }, interval:                13, stop: function () {
        clearInterval(ck), ck = null
    }, speeds:                  {slow: 600, fast: 200, _default: 400}, step: {opacity: function (b) {
        aC.style(b.elem, "opacity", b.now)
    }, _default:                                                                       function (b) {
        b.elem.style && b.elem.style[b.prop] != null ? b.elem.style[b.prop] = (b.prop === "width" || b.prop === "height" ? Math.max(0, b.now) : b.now) + b.unit : b.elem[b.prop] = b.now
    }}}), aC.expr && aC.expr.filters && (aC.expr.filters.animated = function (b) {
        return aC.grep(aC.timers,function (a) {
            return b === a.elem
        }).length
    });
    var cc = /^t(?:able|d|h)$/i, ca = /^(?:body|html)$/i;
    "getBoundingClientRect" in aE.documentElement ? aC.fn.offset = function (B) {
        var A = this[0], z;
        if (B) {
            return this.each(function (a) {
                aC.offset.setOffset(this, B, a)
            })
        }
        if (! A || ! A.ownerDocument) {
            return null
        }
        if (A === A.ownerDocument.body) {
            return aC.offset.bodyOffset(A)
        }
        try {
            z = A.getBoundingClientRect()
        } catch (y) {
        }
        var x = A.ownerDocument, w = x.documentElement;
        if (! z || ! aC.contains(w, A)) {
            return z ? {top: z.top, left: z.left} : {top: 0, left: 0}
        }
        var v = x.body, u = cJ(x), t = w.clientTop || v.clientTop || 0, s = w.clientLeft || v.clientLeft || 0, r = u.pageYOffset || aC.support.boxModel && w.scrollTop || v.scrollTop, q = u.pageXOffset || aC.support.boxModel && w.scrollLeft || v.scrollLeft, p = z.top + r - t, d = z.left + q - s;
        return{top: p, left: d}
    } : aC.fn.offset = function (x) {
        var w = this[0];
        if (x) {
            return this.each(function (a) {
                aC.offset.setOffset(this, x, a)
            })
        }
        if (! w || ! w.ownerDocument) {
            return null
        }
        if (w === w.ownerDocument.body) {
            return aC.offset.bodyOffset(w)
        }
        aC.offset.initialize();
        var v, u = w.offsetParent, t = w, s = w.ownerDocument, r = s.documentElement, q = s.body, p = s.defaultView, o = p ? p.getComputedStyle(w, null) : w.currentStyle, n = w.offsetTop, d = w.offsetLeft;
        while ((w = w.parentNode) && w !== q && w !== r) {
            if (aC.offset.supportsFixedPosition && o.position === "fixed") {
                break
            }
            v = p ? p.getComputedStyle(w, null) : w.currentStyle, n -= w.scrollTop, d -= w.scrollLeft, w === u && (n += w.offsetTop, d += w.offsetLeft, aC.offset.doesNotAddBorder && (! aC.offset.doesAddBorderForTableAndCells || ! cc.test(w.nodeName)) && (n += parseFloat(v.borderTopWidth) || 0, d += parseFloat(v.borderLeftWidth) || 0), t = u, u = w.offsetParent), aC.offset.subtractsBorderForOverflowNotVisible && v.overflow !== "visible" && (n += parseFloat(v.borderTopWidth) || 0, d += parseFloat(v.borderLeftWidth) || 0), o = v
        }
        if (o.position === "relative" || o.position === "static") {
            n += q.offsetTop, d += q.offsetLeft
        }
        aC.offset.supportsFixedPosition && o.position === "fixed" && (n += Math.max(r.scrollTop, q.scrollTop), d += Math.max(r.scrollLeft, q.scrollLeft));
        return{top: n, left: d}
    }, aC.offset = {initialize: function () {
        var d = aE.body, c = aE.createElement("div"), p, o, n, m, l = parseFloat(aC.css(d, "marginTop")) || 0, k = "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
        aC.extend(c.style, {position: "absolute", top: 0, left: 0, margin: 0, border: 0, width: "1px", height: "1px", visibility: "hidden"}), c.innerHTML = k, d.insertBefore(c, d.firstChild), p = c.firstChild, o = p.firstChild, m = p.nextSibling.firstChild.firstChild, this.doesNotAddBorder = o.offsetTop !== 5, this.doesAddBorderForTableAndCells = m.offsetTop === 5, o.style.position = "fixed", o.style.top = "20px", this.supportsFixedPosition = o.offsetTop === 20 || o.offsetTop === 15, o.style.position = o.style.top = "", p.style.overflow = "hidden", p.style.position = "relative", this.subtractsBorderForOverflowNotVisible = o.offsetTop === - 5, this.doesNotIncludeMarginInBodyOffset = d.offsetTop !== l, d.removeChild(c), d = c = p = o = n = m = null, aC.offset.initialize = aC.noop
    }, bodyOffset:              function (e) {
        var d = e.offsetTop, f = e.offsetLeft;
        aC.offset.initialize(), aC.offset.doesNotIncludeMarginInBodyOffset && (d += parseFloat(aC.css(e, "marginTop")) || 0, f += parseFloat(aC.css(e, "marginLeft")) || 0);
        return{top: d, left: f}
    }, setOffset:               function (z, y, x) {
        var w = aC.css(z, "position");
        w === "static" && (z.style.position = "relative");
        var v = aC(z), u = v.offset(), t = aC.css(z, "top"), s = aC.css(z, "left"), r = w === "absolute" && aC.inArray("auto", [t, s]) > - 1, q = {}, p = {}, o, d;
        r && (p = v.position()), o = r ? p.top : parseInt(t, 10) || 0, d = r ? p.left : parseInt(s, 10) || 0, aC.isFunction(y) && (y = y.call(z, x, u)), y.top != null && (q.top = y.top - u.top + o), y.left != null && (q.left = y.left - u.left + d), "using" in y ? y.using.call(z, q) : v.css(q)
    }}, aC.fn.extend({position: function () {
        if (! this[0]) {
            return null
        }
        var f = this[0], d = this.offsetParent(), h = this.offset(), g = ca.test(d[0].nodeName) ? {top: 0, left: 0} : d.offset();
        h.top -= parseFloat(aC.css(f, "marginTop")) || 0, h.left -= parseFloat(aC.css(f, "marginLeft")) || 0, g.top += parseFloat(aC.css(d[0], "borderTopWidth")) || 0, g.left += parseFloat(aC.css(d[0], "borderLeftWidth")) || 0;
        return{top: h.top - g.top, left: h.left - g.left}
    }, offsetParent:            function () {
        return this.map(function () {
            var b = this.offsetParent || aE.body;
            while (b && (! ca.test(b.nodeName) && aC.css(b, "position") === "static")) {
                b = b.offsetParent
            }
            return b
        })
    }}), aC.each(["Left", "Top"], function (b, f) {
        var d = "scroll" + f;
        aC.fn[d] = function (h) {
            var e = this[0], a;
            if (! e) {
                return null
            }
            if (h !== aG) {
                return this.each(function () {
                    a = cJ(this), a ? a.scrollTo(b ? aC(a).scrollLeft() : h, b ? h : aC(a).scrollTop()) : this[d] = h
                })
            }
            a = cJ(e);
            return a ? "pageXOffset" in a ? a[b ? "pageYOffset" : "pageXOffset"] : aC.support.boxModel && a.document.documentElement[d] || a.document.body[d] : e[d]
        }
    }), aC.each(["Height", "Width"], function (b, f) {
        var d = f.toLowerCase();
        aC.fn["inner" + f] = function () {
            return this[0] ? parseFloat(aC.css(this[0], d, "padding")) : null
        }, aC.fn["outer" + f] = function (c) {
            return this[0] ? parseFloat(aC.css(this[0], d, c ? "margin" : "border")) : null
        }, aC.fn[d] = function (c) {
            var l = this[0];
            if (! l) {
                return c == null ? null : this
            }
            if (aC.isFunction(c)) {
                return this.each(function (a) {
                    var g = aC(this);
                    g[d](c.call(this, a, g[d]()))
                })
            }
            if (aC.isWindow(l)) {
                var k = l.document.documentElement["client" + f];
                return l.document.compatMode === "CSS1Compat" && k || l.document.body["client" + f] || k
            }
            if (l.nodeType === 9) {
                return Math.max(l.documentElement["client" + f], l.body["scroll" + f], l.documentElement["scroll" + f], l.body["offset" + f], l.documentElement["offset" + f])
            }
            if (c === aG) {
                var j = aC.css(l, d), e = parseFloat(j);
                return aC.isNaN(e) ? j : e
            }
            return this.css(d, typeof c === "string" ? c : c + "px")
        }
    })
})(window);
/*!
 * jQuery UI 1.8.18
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */
(function (f, e) {
    function g(a) {
        return ! f(a).parents().andSelf().filter(function () {
            return f.curCSS(this, "visibility") === "hidden" || f.expr.filters.hidden(this)
        }).length
    }

    function h(a, l) {
        var k = a.nodeName.toLowerCase();
        if ("area" === k) {
            var j = a.parentNode, i = j.name, d;
            if (! a.href || ! i || j.nodeName.toLowerCase() !== "map") {
                return ! 1
            }
            d = f("img[usemap=#" + i + "]")[0];
            return ! ! d && g(d)
        }
        return(/input|select|textarea|button|object/.test(k) ? ! a.disabled : "a" == k ? a.href || l : l) && g(a)
    }

    f.ui = f.ui || {};
    f.ui.version || (f.extend(f.ui, {version: "1.8.18", keyCode: {ALT: 18, BACKSPACE: 8, CAPS_LOCK: 20, COMMA: 188, COMMAND: 91, COMMAND_LEFT: 91, COMMAND_RIGHT: 93, CONTROL: 17, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, INSERT: 45, LEFT: 37, MENU: 93, NUMPAD_ADD: 107, NUMPAD_DECIMAL: 110, NUMPAD_DIVIDE: 111, NUMPAD_ENTER: 108, NUMPAD_MULTIPLY: 106, NUMPAD_SUBTRACT: 109, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SHIFT: 16, SPACE: 32, TAB: 9, UP: 38, WINDOWS: 91}}), f.fn.extend({propAttr: f.fn.prop || f.fn.attr, _focus: f.fn.focus, focus: function (a, d) {
        return typeof a == "number" ? this.each(function () {
            var b = this;
            setTimeout(function () {
                f(b).focus(), d && d.call(b)
            }, a)
        }) : this._focus.apply(this, arguments)
    }, scrollParent:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         function () {
        var a;
        f.browser.msie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? a = this.parents().filter(function () {
            return/(relative|absolute|fixed)/.test(f.curCSS(this, "position", 1)) && /(auto|scroll)/.test(f.curCSS(this, "overflow", 1) + f.curCSS(this, "overflow-y", 1) + f.curCSS(this, "overflow-x", 1))
        }).eq(0) : a = this.parents().filter(function () {
            return/(auto|scroll)/.test(f.curCSS(this, "overflow", 1) + f.curCSS(this, "overflow-y", 1) + f.curCSS(this, "overflow-x", 1))
        }).eq(0);
        return/fixed/.test(this.css("position")) || ! a.length ? f(document) : a
    }, zIndex:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               function (j) {
        if (j !== e) {
            return this.css("zIndex", j)
        }
        if (this.length) {
            var i = f(this[0]), b, a;
            while (i.length && i[0] !== document) {
                b = i.css("position");
                if (b === "absolute" || b === "relative" || b === "fixed") {
                    a = parseInt(i.css("zIndex"), 10);
                    if (! isNaN(a) && a !== 0) {
                        return a
                    }
                }
                i = i.parent()
            }
        }
        return 0
    }, disableSelection:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     function () {
        return this.bind((f.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (b) {
            b.preventDefault()
        })
    }, enableSelection:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      function () {
        return this.unbind(".ui-disableSelection")
    }}), f.each(["Width", "Height"], function (l, k) {
        function a(m, p, o, n) {
            f.each(j, function () {
                p -= parseFloat(f.curCSS(m, "padding" + this, ! 0)) || 0, o && (p -= parseFloat(f.curCSS(m, "border" + this + "Width", ! 0)) || 0), n && (p -= parseFloat(f.curCSS(m, "margin" + this, ! 0)) || 0)
            });
            return p
        }

        var j = k === "Width" ? ["Left", "Right"] : ["Top", "Bottom"], i = k.toLowerCase(), b = {innerWidth: f.fn.innerWidth, innerHeight: f.fn.innerHeight, outerWidth: f.fn.outerWidth, outerHeight: f.fn.outerHeight};
        f.fn["inner" + k] = function (d) {
            if (d === e) {
                return b["inner" + k].call(this)
            }
            return this.each(function () {
                f(this).css(i, a(this, d) + "px")
            })
        }, f.fn["outer" + k] = function (d, m) {
            if (typeof d != "number") {
                return b["outer" + k].call(this, d)
            }
            return this.each(function () {
                f(this).css(i, a(this, d, ! 0, m) + "px")
            })
        }
    }), f.extend(f.expr[":"], {data: function (a, j, i) {
        return ! ! f.data(a, i[3])
    }, focusable:                    function (a) {
        return h(a, ! isNaN(f.attr(a, "tabindex")))
    }, tabbable:                     function (a) {
        var i = f.attr(a, "tabindex"), c = isNaN(i);
        return(c || i >= 0) && h(a, ! c)
    }}), f(function () {
        var a = document.body, d = a.appendChild(d = document.createElement("div"));
        d.offsetHeight, f.extend(d.style, {minHeight: "100px", height: "auto", padding: 0, borderWidth: 0}), f.support.minHeight = d.offsetHeight === 100, f.support.selectstart = "onselectstart" in d, a.removeChild(d).style.display = "none"
    }), f.extend(f.ui, {plugin: {add: function (a, l, k) {
        var j = f.ui[a].prototype;
        for (var i in k) {
            j.plugins[i] = j.plugins[i] || [], j.plugins[i].push([l, k[i]])
        }
    }, call:                          function (j, i, m) {
        var l = j.plugins[i];
        if (! ! l && ! ! j.element[0].parentNode) {
            for (var k = 0; k < l.length; k ++) {
                j.options[l[k][0]] && l[k][1].apply(j.element, m)
            }
        }
    }}, contains:               function (d, c) {
        return document.compareDocumentPosition ? d.compareDocumentPosition(c) & 16 : d !== c && d.contains(c)
    }, hasScroll:               function (a, k) {
        if (f(a).css("overflow") === "hidden") {
            return ! 1
        }
        var j = k && k === "left" ? "scrollLeft" : "scrollTop", i = ! 1;
        if (a[j] > 0) {
            return ! 0
        }
        a[j] = 1, i = a[j] > 0, a[j] = 0;
        return i
    }, isOverAxis:              function (i, d, j) {
        return i > d && i < d + j
    }, isOver:                  function (a, m, l, k, j, i) {
        return f.ui.isOverAxis(a, l, j) && f.ui.isOverAxis(m, k, i)
    }}))
})(jQuery);
/*!
 * jQuery UI Widget 1.8.18
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Widget
 */
(function (f, e) {
    if (f.cleanData) {
        var h = f.cleanData;
        f.cleanData = function (a) {
            for (var j = 0, i; (i = a[j]) != null; j ++) {
                try {
                    f(i).triggerHandler("remove")
                } catch (c) {
                }
            }
            h(a)
        }
    } else {
        var g = f.fn.remove;
        f.fn.remove = function (a, d) {
            return this.each(function () {
                d || (! a || f.filter(a, [this]).length) && f("*", this).add([this]).each(function () {
                    try {
                        f(this).triggerHandler("remove")
                    } catch (c) {
                    }
                });
                return g.call(f(this), a, d)
            })
        }
    }
    f.widget = function (a, m, l) {
        var k = a.split(".")[0], j;
        a = a.split(".")[1], j = k + "-" + a, l || (l = m, m = f.Widget), f.expr[":"][j] = function (b) {
            return ! ! f.data(b, a)
        }, f[k] = f[k] || {}, f[k][a] = function (d, c) {
            arguments.length && this._createWidget(d, c)
        };
        var i = new m;
        i.options = f.extend(! 0, {}, i.options), f[k][a].prototype = f.extend(! 0, i, {namespace: k, widgetName: a, widgetEventPrefix: f[k][a].prototype.widgetEventPrefix || a, widgetBaseClass: j}, l), f.widget.bridge(a, f[k][a])
    }, f.widget.bridge = function (b, a) {
        f.fn[b] = function (j) {
            var i = typeof j == "string", d = Array.prototype.slice.call(arguments, 1), c = this;
            j = ! i && d.length ? f.extend.apply(null, [! 0, j].concat(d)) : j;
            if (i && j.charAt(0) === "_") {
                return c
            }
            i ? this.each(function () {
                var l = f.data(this, b), k = l && f.isFunction(l[j]) ? l[j].apply(l, d) : l;
                if (k !== l && k !== e) {
                    c = k;
                    return ! 1
                }
            }) : this.each(function () {
                var k = f.data(this, b);
                k ? k.option(j || {})._init() : f.data(this, b, new a(j, this))
            });
            return c
        }
    }, f.Widget = function (d, c) {
        arguments.length && this._createWidget(d, c)
    }, f.Widget.prototype = {widgetName: "widget", widgetEventPrefix: "", options: {disabled: ! 1}, _createWidget: function (a, j) {
        f.data(j, this.widgetName, this), this.element = f(j), this.options = f.extend(! 0, {}, this.options, this._getCreateOptions(), a);
        var i = this;
        this.element.bind("remove." + this.widgetName, function () {
            i.destroy()
        }), this._create(), this._trigger("create"), this._init()
    }, _getCreateOptions:                function () {
        return f.metadata && f.metadata.get(this.element[0])[this.widgetName]
    }, _create:                          function () {
    }, _init:                            function () {
    }, destroy:                          function () {
        this.element.unbind("." + this.widgetName).removeData(this.widgetName), this.widget().unbind("." + this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass + "-disabled ui-state-disabled")
    }, widget:                           function () {
        return this.element
    }, option:                           function (i, b) {
        var a = i;
        if (arguments.length === 0) {
            return f.extend({}, this.options)
        }
        if (typeof i == "string") {
            if (b === e) {
                return this.options[i]
            }
            a = {}, a[i] = b
        }
        this._setOptions(a);
        return this
    }, _setOptions:                      function (a) {
        var d = this;
        f.each(a, function (i, c) {
            d._setOption(i, c)
        });
        return this
    }, _setOption:                       function (d, c) {
        this.options[d] = c, d === "disabled" && this.widget()[c ? "addClass" : "removeClass"](this.widgetBaseClass + "-disabled ui-state-disabled").attr("aria-disabled", c);
        return this
    }, enable:                           function () {
        return this._setOption("disabled", ! 1)
    }, disable:                          function () {
        return this._setOption("disabled", ! 0)
    }, _trigger:                         function (a, m, l) {
        var k, j, i = this.options[a];
        l = l || {}, m = f.Event(m), m.type = (a === this.widgetEventPrefix ? a : this.widgetEventPrefix + a).toLowerCase(), m.target = this.element[0], j = m.originalEvent;
        if (j) {
            for (k in j) {
                k in m || (m[k] = j[k])
            }
        }
        this.element.trigger(m, l);
        return ! (f.isFunction(i) && i.call(this.element[0], m, l) === ! 1 || m.isDefaultPrevented())
    }}
})(jQuery);
(function (j, i) {
    j.ui = j.ui || {};
    var p = /left|center|right/, o = /top|center|bottom/, n = "center", m = {}, l = j.fn.position, k = j.fn.offset;
    j.fn.position = function (c) {
        if (! c || ! c.of) {
            return l.apply(this, arguments)
        }
        c = j.extend({}, c);
        var q = j(c.of), g = q[0], f = (c.collision || "flip").split(" "), e = c.offset ? c.offset.split(" ") : [0, 0], d, a, r;
        g.nodeType === 9 ? (d = q.width(), a = q.height(), r = {top: 0, left: 0}) : g.setTimeout ? (d = q.width(), a = q.height(), r = {top: q.scrollTop(), left: q.scrollLeft()}) : g.preventDefault ? (c.at = "left top", d = a = 0, r = {top: c.of.pageY, left: c.of.pageX}) : (d = q.outerWidth(), a = q.outerHeight(), r = q.offset()), j.each(["my", "at"], function () {
            var b = (c[this] || "").split(" ");
            b.length === 1 && (b = p.test(b[0]) ? b.concat([n]) : o.test(b[0]) ? [n].concat(b) : [n, n]), b[0] = p.test(b[0]) ? b[0] : n, b[1] = o.test(b[1]) ? b[1] : n, c[this] = b
        }), f.length === 1 && (f[1] = f[0]), e[0] = parseInt(e[0], 10) || 0, e.length === 1 && (e[1] = e[0]), e[1] = parseInt(e[1], 10) || 0, c.at[0] === "right" ? r.left += d : c.at[0] === n && (r.left += d / 2), c.at[1] === "bottom" ? r.top += a : c.at[1] === n && (r.top += a / 2), r.left += e[0], r.top += e[1];
        return this.each(function () {
            var z = j(this), y = z.outerWidth(), x = z.outerHeight(), w = parseInt(j.curCSS(this, "marginLeft", ! 0)) || 0, v = parseInt(j.curCSS(this, "marginTop", ! 0)) || 0, u = y + w + (parseInt(j.curCSS(this, "marginRight", ! 0)) || 0), t = x + v + (parseInt(j.curCSS(this, "marginBottom", ! 0)) || 0), s = j.extend({}, r), b;
            c.my[0] === "right" ? s.left -= y : c.my[0] === n && (s.left -= y / 2), c.my[1] === "bottom" ? s.top -= x : c.my[1] === n && (s.top -= x / 2), m.fractions || (s.left = Math.round(s.left), s.top = Math.round(s.top)), b = {left: s.left - w, top: s.top - v}, j.each(["left", "top"], function (A, h) {
                j.ui.position[f[A]] && j.ui.position[f[A]][h](s, {targetWidth: d, targetHeight: a, elemWidth: y, elemHeight: x, collisionPosition: b, collisionWidth: u, collisionHeight: t, offset: e, my: c.my, at: c.at})
            }), j.fn.bgiframe && z.bgiframe(), z.offset(j.extend(s, {using: c.using}))
        })
    }, j.ui.position = {fit: {left: function (a, h) {
        var g = j(window), f = h.collisionPosition.left + h.collisionWidth - g.width() - g.scrollLeft();
        a.left = f > 0 ? a.left - f : Math.max(a.left - h.collisionPosition.left, a.left)
    }, top:                         function (a, h) {
        var g = j(window), f = h.collisionPosition.top + h.collisionHeight - g.height() - g.scrollTop();
        a.top = f > 0 ? a.top - f : Math.max(a.top - h.collisionPosition.top, a.top)
    }}, flip:                {left: function (a, u) {
        if (u.at[0] !== n) {
            var t = j(window), s = u.collisionPosition.left + u.collisionWidth - t.width() - t.scrollLeft(), r = u.my[0] === "left" ? - u.elemWidth : u.my[0] === "right" ? u.elemWidth : 0, q = u.at[0] === "left" ? u.targetWidth : - u.targetWidth, e = - 2 * u.offset[0];
            a.left += u.collisionPosition.left < 0 ? r + q + e : s > 0 ? r + q + e : 0
        }
    }, top:                         function (a, u) {
        if (u.at[1] !== n) {
            var t = j(window), s = u.collisionPosition.top + u.collisionHeight - t.height() - t.scrollTop(), r = u.my[1] === "top" ? - u.elemHeight : u.my[1] === "bottom" ? u.elemHeight : 0, q = u.at[1] === "top" ? u.targetHeight : - u.targetHeight, e = - 2 * u.offset[1];
            a.top += u.collisionPosition.top < 0 ? r + q + e : s > 0 ? r + q + e : 0
        }
    }}}, j.offset.setOffset || (j.offset.setOffset = function (a, v) {
        /static/.test(j.curCSS(a, "position")) && (a.style.position = "relative");
        var u = j(a), t = u.offset(), s = parseInt(j.curCSS(a, "top", ! 0), 10) || 0, r = parseInt(j.curCSS(a, "left", ! 0), 10) || 0, q = {top: v.top - t.top + s, left: v.left - t.left + r};
        "using" in v ? v.using.call(a, q) : u.css(q)
    }, j.fn.offset = function (a) {
        var d = this[0];
        if (! d || ! d.ownerDocument) {
            return null
        }
        if (a) {
            return this.each(function () {
                j.offset.setOffset(this, a)
            })
        }
        return k.call(this)
    }), function () {
        var a = document.getElementsByTagName("body")[0], v = document.createElement("div"), u, t, s, r, q;
        u = document.createElement(a ? "div" : "body"), s = {visibility: "hidden", width: 0, height: 0, border: 0, margin: 0, background: "none"}, a && j.extend(s, {position: "absolute", left: "-1000px", top: "-1000px"});
        for (var f in s) {
            u.style[f] = s[f]
        }
        u.appendChild(v), t = a || document.documentElement, t.insertBefore(u, t.firstChild), v.style.cssText = "position: absolute; left: 10.7432222px; top: 10.432325px; height: 30px; width: 201px;", r = j(v).offset(function (d, c) {
            return c
        }).offset(), u.innerHTML = "", t.removeChild(u), q = r.top + r.left + (a ? 2000 : 0), m.fractions = q > 21 && q < 22
    }()
})(jQuery);
(function (e, d) {
    var f = 0;
    e.widget("ui.autocomplete", {options: {appendTo: "body", autoFocus: ! 1, delay: 300, minLength: 1, position: {my: "left top", at: "left bottom", collision: "none"}, source: null}, pending: 0, _create: function () {
        var a = this, h = this.element[0].ownerDocument, g;
        this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off").attr({role: "textbox", "aria-autocomplete": "list", "aria-haspopup": "true"}).bind("keydown.autocomplete",function (i) {
            if (! a.options.disabled && ! a.element.propAttr("readOnly")) {
                g = ! 1;
                var b = e.ui.keyCode;
                switch (i.keyCode) {
                    case b.PAGE_UP:
                        a._move("previousPage", i);
                        break;
                    case b.PAGE_DOWN:
                        a._move("nextPage", i);
                        break;
                    case b.UP:
                        a._move("previous", i), i.preventDefault();
                        break;
                    case b.DOWN:
                        a._move("next", i), i.preventDefault();
                        break;
                    case b.ENTER:
                    case b.NUMPAD_ENTER:
                        a.menu.active && (g = ! 0, i.preventDefault());
                    case b.TAB:
                        if (! a.menu.active) {
                            return
                        }
                        a.menu.select(i);
                        break;
                    case b.ESCAPE:
                        a.element.val(a.term), a.close(i);
                        break;
                    default:
                        clearTimeout(a.searching), a.searching = setTimeout(function () {
                            a.term != a.element.val() && (a.selectedItem = null, a.search(null, i))
                        }, a.options.delay)
                }
            }
        }).bind("keypress.autocomplete",function (b) {
            g && (g = ! 1, b.preventDefault())
        }).bind("focus.autocomplete",function () {
            a.options.disabled || (a.selectedItem = null, a.previous = a.element.val())
        }).bind("blur.autocomplete", function (b) {
            a.options.disabled || (clearTimeout(a.searching), a.closing = setTimeout(function () {
                a.close(b), a._change(b)
            }, 150))
        }), this._initSource(), this.response = function () {
            return a._response.apply(a, arguments)
        }, this.menu = e("<ul></ul>").addClass("ui-autocomplete").appendTo(e(this.options.appendTo || "body", h)[0]).mousedown(function (i) {
            var b = a.menu.element[0];
            e(i.target).closest(".ui-menu-item").length || setTimeout(function () {
                e(document).one("mousedown", function (j) {
                    j.target !== a.element[0] && j.target !== b && ! e.ui.contains(b, j.target) && a.close()
                })
            }, 1), setTimeout(function () {
                clearTimeout(a.closing)
            }, 13)
        }).menu({focus: function (b, j) {
            var i = j.item.data("item.autocomplete");
            ! 1 !== a._trigger("focus", b, {item: i}) && /^key/.test(b.originalEvent.type) && a.element.val(i.value)
        }, selected:    function (b, j) {
            var i = j.item.data("item.autocomplete"), c = a.previous;
            a.element[0] !== h.activeElement && (a.element.focus(), a.previous = c, setTimeout(function () {
                a.previous = c, a.selectedItem = i
            }, 1)), ! 1 !== a._trigger("select", b, {item: i}) && a.element.val(i.value), a.term = a.element.val(), a.close(b), a.selectedItem = i
        }, blur:        function (b, i) {
            a.menu.element.is(":visible") && a.element.val() !== a.term && a.element.val(a.term)
        }}).zIndex(this.element.zIndex() + 1).css({top: 0, left: 0}).hide().data("menu"), e.fn.bgiframe && this.menu.element.bgiframe(), a.beforeunloadHandler = function () {
            a.element.removeAttr("autocomplete")
        }, e(window).bind("beforeunload", a.beforeunloadHandler)
    }, destroy:                           function () {
        this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup"), this.menu.element.remove(), e(window).unbind("beforeunload", this.beforeunloadHandler), e.Widget.prototype.destroy.call(this)
    }, _setOption:                        function (a, g) {
        e.Widget.prototype._setOption.apply(this, arguments), a === "source" && this._initSource(), a === "appendTo" && this.menu.element.appendTo(e(g || "body", this.element[0].ownerDocument)[0]), a === "disabled" && g && this.xhr && this.xhr.abort()
    }, _initSource:                       function () {
        var a = this, g, c;
        e.isArray(this.options.source) ? (g = this.options.source, this.source = function (h, i) {
            i(e.ui.autocomplete.filter(g, h.term))
        }) : typeof this.options.source == "string" ? (c = this.options.source, this.source = function (h, b) {
            a.xhr && a.xhr.abort(), a.xhr = e.ajax({url: c, data: h, dataType: "json", context: {autocompleteRequest: ++ f}, success: function (j, i) {
                this.autocompleteRequest === f && b(j)
            }, error:                                    function () {
                this.autocompleteRequest === f && b([])
            }})
        }) : this.source = this.options.source
    }, search:                            function (g, c) {
        g = g != null ? g : this.element.val(), this.term = this.element.val();
        if (g.length < this.options.minLength) {
            return this.close(c)
        }
        clearTimeout(this.closing);
        if (this._trigger("search", c) !== ! 1) {
            return this._search(g)
        }
    }, _search:                           function (b) {
        this.pending ++, this.element.addClass("ui-autocomplete-loading"), this.source({term: b}, this.response)
    }, _response:                         function (b) {
        ! this.options.disabled && b && b.length ? (b = this._normalize(b), this._suggest(b), this._trigger("open")) : this.close(), this.pending --, this.pending || this.element.removeClass("ui-autocomplete-loading")
    }, close:                             function (b) {
        clearTimeout(this.closing), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.deactivate(), this._trigger("close", b))
    }, _change:                           function (b) {
        this.previous !== this.element.val() && this._trigger("change", b, {item: this.selectedItem})
    }, _normalize:                        function (a) {
        if (a.length && a[0].label && a[0].value) {
            return a
        }
        return e.map(a, function (c) {
            if (typeof c == "string") {
                return{label: c, value: c}
            }
            return e.extend({label: c.label || c.value, value: c.value || c.label}, c)
        })
    }, _suggest:                          function (a) {
        var g = this.menu.element.empty().zIndex(this.element.zIndex() + 1);
        this._renderMenu(g, a), this.menu.deactivate(), this.menu.refresh(), g.show(), this._resizeMenu(), g.position(e.extend({of: this.element}, this.options.position)), this.options.autoFocus && this.menu.next(new e.Event("mouseover"))
    }, _resizeMenu:                       function () {
        var b = this.menu.element;
        b.outerWidth(Math.max(b.width("").outerWidth() + 1, this.element.outerWidth()))
    }, _renderMenu:                       function (a, h) {
        var g = this;
        e.each(h, function (b, i) {
            g._renderItem(a, i)
        })
    }, _renderItem:                       function (a, g) {
        return e("<li></li>").data("item.autocomplete", g).append(e("<a></a>").text(g.label)).appendTo(a)
    }, _move:                             function (g, c) {
        if (! this.menu.element.is(":visible")) {
            this.search(null, c)
        } else {
            if (this.menu.first() && /^previous/.test(g) || this.menu.last() && /^next/.test(g)) {
                this.element.val(this.term), this.menu.deactivate();
                return
            }
            this.menu[g](c)
        }
    }, widget:                            function () {
        return this.menu.element
    }}), e.extend(e.ui.autocomplete, {escapeRegex: function (b) {
        return b.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
    }, filter:                                     function (a, h) {
        var g = new RegExp(e.ui.autocomplete.escapeRegex(h), "i");
        return e.grep(a, function (b) {
            return g.test(b.label || b.value || b)
        })
    }})
})(jQuery), function (b) {
    b.widget("ui.menu", {_create: function () {
        var a = this;
        this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({role: "listbox", "aria-activedescendant": "ui-active-menuitem"}).click(function (d) {
            ! b(d.target).closest(".ui-menu-item a").length || (d.preventDefault(), a.select(d))
        }), this.refresh()
    }, refresh:                   function () {
        var a = this, d = this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "menuitem");
        d.children("a").addClass("ui-corner-all").attr("tabindex", - 1).mouseenter(function (e) {
            a.activate(e, b(this).parent())
        }).mouseleave(function () {
            a.deactivate()
        })
    }, activate:                  function (g, f) {
        this.deactivate();
        if (this.hasScroll()) {
            var j = f.offset().top - this.element.offset().top, i = this.element.scrollTop(), h = this.element.height();
            j < 0 ? this.element.scrollTop(i + j) : j >= h && this.element.scrollTop(i + j - h + f.height())
        }
        this.active = f.eq(0).children("a").addClass("ui-state-hover").attr("id", "ui-active-menuitem").end(), this._trigger("focus", g, {item: f})
    }, deactivate:                function () {
        ! this.active || (this.active.children("a").removeClass("ui-state-hover").removeAttr("id"), this._trigger("blur"), this.active = null)
    }, next:                      function (c) {
        this.move("next", ".ui-menu-item:first", c)
    }, previous:                  function (c) {
        this.move("prev", ".ui-menu-item:last", c)
    }, first:                     function () {
        return this.active && ! this.active.prevAll(".ui-menu-item").length
    }, last:                      function () {
        return this.active && ! this.active.nextAll(".ui-menu-item").length
    }, move:                      function (f, e, h) {
        if (! this.active) {
            this.activate(h, this.element.children(e))
        } else {
            var g = this.active[f + "All"](".ui-menu-item").eq(0);
            g.length ? this.activate(h, g) : this.activate(h, this.element.children(e))
        }
    }, nextPage:                  function (a) {
        if (this.hasScroll()) {
            if (! this.active || this.last()) {
                this.activate(a, this.element.children(".ui-menu-item:first"));
                return
            }
            var h = this.active.offset().top, g = this.element.height(), f = this.element.children(".ui-menu-item").filter(function () {
                var c = b(this).offset().top - h - g + b(this).height();
                return c < 10 && c > - 10
            });
            f.length || (f = this.element.children(".ui-menu-item:last")), this.activate(a, f)
        } else {
            this.activate(a, this.element.children(".ui-menu-item").filter(! this.active || this.last() ? ":first" : ":last"))
        }
    }, previousPage:              function (a) {
        if (this.hasScroll()) {
            if (! this.active || this.first()) {
                this.activate(a, this.element.children(".ui-menu-item:last"));
                return
            }
            var f = this.active.offset().top, e = this.element.height();
            result = this.element.children(".ui-menu-item").filter(function () {
                var c = b(this).offset().top - f + e - b(this).height();
                return c < 10 && c > - 10
            }), result.length || (result = this.element.children(".ui-menu-item:first")), this.activate(a, result)
        } else {
            this.activate(a, this.element.children(".ui-menu-item").filter(! this.active || this.first() ? ":last" : ":first"))
        }
    }, hasScroll:                 function () {
        return this.element.height() < this.element[b.fn.prop ? "prop" : "attr"]("scrollHeight")
    }, select:                    function (c) {
        this._trigger("selected", c, {item: this.active})
    }})
}(jQuery);
$(document).ready(function () {
    $(".box_most").addClass("list_most_js_actived");
    $(".box_most > ul > li").click(function () {
        $(".selected", $(this).parent()).removeClass("selected").addClass("box_most_off");
        $(this).addClass("selected").removeClass("box_most_off");
        return false
    })
});
$(document).ready(function () {
    $("#main_menu_id > ul > li").hover(function () {
        $(".box_dropdown_wrapper", $(this)).show()
    }, function () {
        $(".box_dropdown_wrapper", $(this)).hide()
    });
    $("#main_menu_id > ul > li").has(".box_dropdown_wrapper").addClass("has_dropdown");
    $("#main_menu_id .box_dropdown_wrapper").hover(function () {
        $(this).parent().addClass("dropdown_hovered")
    }, function () {
        $(this).parent().removeClass("dropdown_hovered")
    })
});
$(document).ready(function () {
    $("div.configuration-block [class^=highlight-]").hide();
    $("div.configuration-block [class^=highlight-]").width($("div.configuration-block").width());
    $("div.configuration-block").addClass("jsactive");
    $("div.configuration-block").addClass("clearfix");
    $("div.configuration-block").each(function () {
        var a = $("[class^=highlight-]:first", $(this));
        a.show();
        a.parents("ul:eq(0)").height(a.height() + 40)
    });
    $("div.configuration-block li").each(function () {
        var a = $(":first", $(this)).html();
        $(":first ", $(this)).html("");
        $(":first ", $(this)).append('<a href="#">' + a + "</a>");
        $(":first", $(this)).bind("click", function () {
            $("[class^=highlight-]", $(this).parents("ul")).hide();
            $("li", $(this).parents("ul")).removeClass("selected");
            $(this).parent().addClass("selected");
            var b = $("[class^=highlight-]", $(this).parent("li"));
            b.show();
            b.parents("ul:eq(0)").height(b.height() + 40);
            return false
        })
    });
    $("div.configuration-block").each(function () {
        $("li:first", $(this)).addClass("selected")
    })
});
