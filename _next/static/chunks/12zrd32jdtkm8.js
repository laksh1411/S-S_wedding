(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
    "object" == typeof document ? document.currentScript : void 0,
    33525,
    (e, t, r) => {
        "use strict";
        (Object.defineProperty(r, "__esModule", { value: !0 }),
            Object.defineProperty(r, "warnOnce", {
                enumerable: !0,
                get: function () {
                    return n;
                },
            }));
        let n = (e) => { };
    },
    18967,
    (e, t, r) => {
        "use strict";
        Object.defineProperty(r, "__esModule", { value: !0 });
        var n = {
            DecodeError: function () {
                return g;
            },
            MiddlewareNotFoundError: function () {
                return E;
            },
            MissingStaticPage: function () {
                return x;
            },
            NormalizeError: function () {
                return b;
            },
            PageNotFoundError: function () {
                return v;
            },
            SP: function () {
                return y;
            },
            ST: function () {
                return h;
            },
            WEB_VITALS: function () {
                return i;
            },
            execOnce: function () {
                return s;
            },
            getDisplayName: function () {
                return d;
            },
            getLocationOrigin: function () {
                return c;
            },
            getURL: function () {
                return u;
            },
            isAbsoluteUrl: function () {
                return l;
            },
            isResSent: function () {
                return m;
            },
            loadGetInitialProps: function () {
                return p;
            },
            normalizeRepeatedSlashes: function () {
                return f;
            },
            stringifyError: function () {
                return _;
            },
        };
        for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
        let i = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
        function s(e) {
            let t,
                r = !1;
            return (...n) => (r || ((r = !0), (t = e(...n))), t);
        }
        let a = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
            l = (e) => a.test(e);
        function c() {
            let { protocol: e, hostname: t, port: r } = window.location;
            return `${e}//${t}${r ? ":" + r : ""}`;
        }
        function u() {
            let { href: e } = window.location,
                t = c();
            return e.substring(t.length);
        }
        function d(e) {
            return "string" == typeof e ? e : e.displayName || e.name || "Unknown";
        }
        function m(e) {
            return e.finished || e.headersSent;
        }
        function f(e) {
            let t = e.split("?");
            return (
                t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") +
                (t[1] ? `?${t.slice(1).join("?")}` : "")
            );
        }
        async function p(e, t) {
            let r = t.res || (t.ctx && t.ctx.res);
            if (!e.getInitialProps)
                return t.ctx && t.Component
                    ? { pageProps: await p(t.Component, t.ctx) }
                    : {};
            let n = await e.getInitialProps(t);
            if (r && m(r)) return n;
            if (!n)
                throw Object.defineProperty(
                    Error(
                        `"${d(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`,
                    ),
                    "__NEXT_ERROR_CODE",
                    { value: "E1025", enumerable: !1, configurable: !0 },
                );
            return n;
        }
        let y = "u" > typeof performance,
            h =
                y &&
                ["mark", "measure", "getEntriesByName"].every(
                    (e) => "function" == typeof performance[e],
                );
        class g extends Error { }
        class b extends Error { }
        class v extends Error {
            constructor(e) {
                (super(),
                    (this.code = "ENOENT"),
                    (this.name = "PageNotFoundError"),
                    (this.message = `Cannot find module for page: ${e}`));
            }
        }
        class x extends Error {
            constructor(e, t) {
                (super(),
                    (this.message = `Failed to load static file for page: ${e} ${t}`));
            }
        }
        class E extends Error {
            constructor() {
                (super(),
                    (this.code = "ENOENT"),
                    (this.message = "Cannot find the middleware module"));
            }
        }
        function _(e) {
            return JSON.stringify({ message: e.message, stack: e.stack });
        }
    },
    98183,
    (e, t, r) => {
        "use strict";
        Object.defineProperty(r, "__esModule", { value: !0 });
        var n = {
            assign: function () {
                return l;
            },
            searchParamsToUrlQuery: function () {
                return i;
            },
            urlQueryToSearchParams: function () {
                return a;
            },
        };
        for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
        function i(e) {
            let t = {};
            for (let [r, n] of e.entries()) {
                let e = t[r];
                void 0 === e
                    ? (t[r] = n)
                    : Array.isArray(e)
                        ? e.push(n)
                        : (t[r] = [e, n]);
            }
            return t;
        }
        function s(e) {
            return "string" == typeof e
                ? e
                : ("number" != typeof e || isNaN(e)) && "boolean" != typeof e
                    ? ""
                    : String(e);
        }
        function a(e) {
            let t = new URLSearchParams();
            for (let [r, n] of Object.entries(e))
                if (Array.isArray(n)) for (let e of n) t.append(r, s(e));
                else t.set(r, s(n));
            return t;
        }
        function l(e, ...t) {
            for (let r of t) {
                for (let t of r.keys()) e.delete(t);
                for (let [t, n] of r.entries()) e.append(t, n);
            }
            return e;
        }
    },
    27099,
    (e) => {
        "use strict";
        var t = e.i(43476),
            r = e.i(932),
            n = e.i(71645);
        e.s([
            "default",
            0,
            function () {
                let e,
                    o,
                    i,
                    s = (0, r.c)(3),
                    a = (0, n.useRef)(null),
                    l = (0, n.useRef)(null);
                return (
                    s[0] === Symbol.for("react.memo_cache_sentinel")
                        ? ((e = () => {
                            let e,
                                t = a.current,
                                r = l.current;
                            if (!t || !r) return;
                            let n = 0,
                                o = 0,
                                i = 0,
                                s = 0,
                                c = (e) => {
                                    ((n = e.clientX),
                                        (o = e.clientY),
                                        (t.style.left = `${n}px`),
                                        (t.style.top = `${o}px`),
                                        t.classList.remove("hidden"),
                                        r.classList.remove("hidden"));
                                },
                                u = () => {
                                    ((i += (n - i) * 0.12),
                                        (s += (o - s) * 0.12),
                                        (r.style.left = `${i}px`),
                                        (r.style.top = `${s}px`),
                                        (e = requestAnimationFrame(u)));
                                };
                            e = requestAnimationFrame(u);
                            let d = () => r.classList.add("hovering"),
                                m = () => r.classList.remove("hovering");
                            document
                                .querySelectorAll(
                                    "a, button, [role='button'], input, textarea, label, select",
                                )
                                .forEach((e) => {
                                    (e.addEventListener("mouseenter", d),
                                        e.addEventListener("mouseleave", m));
                                });
                            let f = () => {
                                (t.classList.add("hidden"), r.classList.add("hidden"));
                            },
                                p = () => {
                                    (t.classList.remove("hidden"),
                                        r.classList.remove("hidden"));
                                };
                            return (
                                document.addEventListener("mousemove", c),
                                document.addEventListener("mouseleave", f),
                                document.addEventListener("mouseenter", p),
                                () => {
                                    (cancelAnimationFrame(e),
                                        document.removeEventListener("mousemove", c),
                                        document.removeEventListener("mouseleave", f),
                                        document.removeEventListener("mouseenter", p));
                                }
                            );
                        }),
                            (o = []),
                            (s[0] = e),
                            (s[1] = o))
                        : ((e = s[0]), (o = s[1])),
                    (0, n.useEffect)(e, o),
                    s[2] === Symbol.for("react.memo_cache_sentinel")
                        ? ((i = (0, t.jsxs)(t.Fragment, {
                            children: [
                                (0, t.jsx)("div", {
                                    ref: a,
                                    className: "cursor-dot  hidden",
                                }),
                                (0, t.jsx)("div", {
                                    ref: l,
                                    className: "cursor-ring hidden",
                                }),
                            ],
                        })),
                            (s[2] = i))
                        : (i = s[2]),
                    i
                );
            },
        ]);
    },
    51225,
    (e) => {
        "use strict";
        var t = e.i(43476),
            r = e.i(932),
            n = e.i(71645),
            o = e.i(46932),
            i = e.i(88653);
        function s() {
            let e,
                n = (0, r.c)(1);
            return (
                n[0] === Symbol.for("react.memo_cache_sentinel")
                    ? ((e = (0, t.jsx)("div", {
                        className: "flex items-end gap-[2.5px]",
                        style: { height: "14px" },
                        children: [0.6, 1, 0.75, 0.45, 0.85].map(a),
                    })),
                        (n[0] = e))
                    : (e = n[0]),
                e
            );
        }
        function a(e, r) {
            return (0, t.jsx)(
                o.motion.span,
                {
                    className: "w-0.5 rounded-full bg-gold",
                    animate: { scaleY: [e, 1, 0.5 * e, 1, e] },
                    transition: {
                        duration: 1.1,
                        repeat: 1 / 0,
                        ease: "easeInOut",
                        delay: 0.13 * r,
                    },
                    style: {
                        height: "14px",
                        transformOrigin: "bottom",
                        display: "block",
                    },
                },
                r,
            );
        }
        function l() {
            let e,
                n = (0, r.c)(1);
            return (
                n[0] === Symbol.for("react.memo_cache_sentinel")
                    ? ((e = (0, t.jsx)("div", {
                        style: {
                            width: 0,
                            height: 0,
                            borderTop: "5px solid transparent",
                            borderBottom: "5px solid transparent",
                            borderLeft: "9px solid #c8a45d",
                            marginLeft: "2px",
                        },
                    })),
                        (n[0] = e))
                    : (e = n[0]),
                e
            );
        }
        e.s([
            "default",
            0,
            function () {
                let e,
                    a,
                    c,
                    u,
                    d,
                    m,
                    f,
                    p,
                    y,
                    h,
                    g,
                    b,
                    v,
                    x = (0, r.c)(21),
                    E = (0, n.useRef)(null),
                    [_, L] = (0, n.useState)(!1);
                (x[0] === Symbol.for("react.memo_cache_sentinel")
                    ? ((e = () => {
                        let e = E.current;
                        if (!e) return;
                        ((e.volume = 0.45), (e.loop = !0));
                        let t = () => L(!0),
                            r = () => L(!1);
                        return (
                            e.addEventListener("play", t),
                            e.addEventListener("pause", r),
                            () => {
                                (e.removeEventListener("play", t),
                                    e.removeEventListener("pause", r),
                                    e.pause());
                            }
                        );
                    }),
                        (a = []),
                        (x[0] = e),
                        (x[1] = a))
                    : ((e = x[0]), (a = x[1])),
                    (0, n.useEffect)(e, a),
                    x[2] !== _
                        ? ((c = () => {
                            let e = E.current;
                            e && (_ ? e.pause() : e.play());
                        }),
                            (x[2] = _),
                            (x[3] = c))
                        : (c = x[3]));
                let j = c;
                x[4] === Symbol.for("react.memo_cache_sentinel")
                    ? ((u = (0, t.jsx)("audio", {
                        ref: E,
                        src: "/audio/ganapathy-stotram-ganapathy-stotram-g-gayathri-devi-s-saindhavi-r-shruti_6ZaW3Utj.mp3",
                        preload: "auto",
                    })),
                        (x[4] = u))
                    : (u = x[4]);
                let P = _ ? "Pause music" : "Play music";
                return (
                    x[5] === Symbol.for("react.memo_cache_sentinel")
                        ? ((d = { opacity: 0, scale: 0.85 }),
                            (m = { opacity: 1, scale: 1 }),
                            (x[5] = d),
                            (x[6] = m))
                        : ((d = x[5]), (m = x[6])),
                    x[7] === Symbol.for("react.memo_cache_sentinel")
                        ? ((f = { delay: 1.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }),
                            (p = { scale: 0.92 }),
                            (x[7] = f),
                            (x[8] = p))
                        : ((f = x[7]), (p = x[8])),
                    x[9] === Symbol.for("react.memo_cache_sentinel")
                        ? ((y = {
                            width: "42px",
                            height: "42px",
                            border: "1px solid rgba(200,164,93,0.35)",
                            background: "rgba(18,11,8,0.72)",
                            backdropFilter: "blur(12px)",
                        }),
                            (x[9] = y))
                        : (y = x[9]),
                    x[10] !== _
                        ? ((h =
                            _ &&
                            (0, t.jsx)(
                                o.motion.span,
                                {
                                    className: "absolute inset-0",
                                    initial: { opacity: 0.5, scale: 1 },
                                    animate: { opacity: 0, scale: 1.7 },
                                    exit: { opacity: 0 },
                                    transition: { duration: 2, repeat: 1 / 0, ease: "easeOut" },
                                    style: { border: "1px solid rgba(200,164,93,0.3)" },
                                },
                                "ring",
                            )),
                            (x[10] = _),
                            (x[11] = h))
                        : (h = x[11]),
                    x[12] !== h
                        ? ((g = (0, t.jsx)(i.AnimatePresence, { children: h })),
                            (x[12] = h),
                            (x[13] = g))
                        : (g = x[13]),
                    x[14] !== _
                        ? ((b = (0, t.jsx)("div", {
                            className: "relative z-10",
                            children: _ ? (0, t.jsx)(s, {}) : (0, t.jsx)(l, {}),
                        })),
                            (x[14] = _),
                            (x[15] = b))
                        : (b = x[15]),
                    x[16] !== g || x[17] !== b || x[18] !== P || x[19] !== j
                        ? ((v = (0, t.jsxs)(t.Fragment, {
                            children: [
                                u,
                                (0, t.jsx)("div", {
                                    className:
                                        "fixed bottom-6 left-5 z-9990 sm:bottom-8 sm:left-7",
                                    children: (0, t.jsxs)(o.motion.button, {
                                        onClick: j,
                                        "aria-label": P,
                                        initial: d,
                                        animate: m,
                                        transition: f,
                                        whileTap: p,
                                        className: "relative flex items-center justify-center",
                                        style: y,
                                        children: [g, b],
                                    }),
                                }),
                            ],
                        })),
                            (x[16] = g),
                            (x[17] = b),
                            (x[18] = P),
                            (x[19] = j),
                            (x[20] = v))
                        : (v = x[20]),
                    v
                );
            },
        ]);
    },
]);
