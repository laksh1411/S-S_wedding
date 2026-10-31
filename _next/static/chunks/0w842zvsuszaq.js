(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  81298,
  (e, t, r) => {
    "use strict";
    var a = {
      linear: function (e, t, r, a) {
        return ((r - t) * e) / a + t;
      },
      easeInQuad: function (e, t, r, a) {
        return (r - t) * (e /= a) * e + t;
      },
      easeOutQuad: function (e, t, r, a) {
        return -(r - t) * (e /= a) * (e - 2) + t;
      },
      easeInOutQuad: function (e, t, r, a) {
        var o = r - t;
        return (e /= a / 2) < 1
          ? (o / 2) * e * e + t
          : (-o / 2) * (--e * (e - 2) - 1) + t;
      },
      easeInCubic: function (e, t, r, a) {
        return (r - t) * (e /= a) * e * e + t;
      },
      easeOutCubic: function (e, t, r, a) {
        return (r - t) * ((e = e / a - 1) * e * e + 1) + t;
      },
      easeInOutCubic: function (e, t, r, a) {
        var o = r - t;
        return (e /= a / 2) < 1
          ? (o / 2) * e * e * e + t
          : (o / 2) * ((e -= 2) * e * e + 2) + t;
      },
      easeInQuart: function (e, t, r, a) {
        return (r - t) * (e /= a) * e * e * e + t;
      },
      easeOutQuart: function (e, t, r, a) {
        return -(r - t) * ((e = e / a - 1) * e * e * e - 1) + t;
      },
      easeInOutQuart: function (e, t, r, a) {
        var o = r - t;
        return (e /= a / 2) < 1
          ? (o / 2) * e * e * e * e + t
          : (-o / 2) * ((e -= 2) * e * e * e - 2) + t;
      },
      easeInQuint: function (e, t, r, a) {
        return (r - t) * (e /= a) * e * e * e * e + t;
      },
      easeOutQuint: function (e, t, r, a) {
        return (r - t) * ((e = e / a - 1) * e * e * e * e + 1) + t;
      },
      easeInOutQuint: function (e, t, r, a) {
        var o = r - t;
        return (e /= a / 2) < 1
          ? (o / 2) * e * e * e * e * e + t
          : (o / 2) * ((e -= 2) * e * e * e * e + 2) + t;
      },
      easeInSine: function (e, t, r, a) {
        var o = r - t;
        return -o * Math.cos((e / a) * (Math.PI / 2)) + o + t;
      },
      easeOutSine: function (e, t, r, a) {
        return (r - t) * Math.sin((e / a) * (Math.PI / 2)) + t;
      },
      easeInOutSine: function (e, t, r, a) {
        return (-(r - t) / 2) * (Math.cos((Math.PI * e) / a) - 1) + t;
      },
      easeInExpo: function (e, t, r, a) {
        return 0 == e ? t : (r - t) * Math.pow(2, 10 * (e / a - 1)) + t;
      },
      easeOutExpo: function (e, t, r, a) {
        var o = r - t;
        return e == a ? t + o : o * (-Math.pow(2, (-10 * e) / a) + 1) + t;
      },
      easeInOutExpo: function (e, t, r, a) {
        var o = r - t;
        return 0 === e
          ? t
          : e === a
            ? t + o
            : (e /= a / 2) < 1
              ? (o / 2) * Math.pow(2, 10 * (e - 1)) + t
              : (o / 2) * (-Math.pow(2, -10 * --e) + 2) + t;
      },
      easeInCirc: function (e, t, r, a) {
        return -(r - t) * (Math.sqrt(1 - (e /= a) * e) - 1) + t;
      },
      easeOutCirc: function (e, t, r, a) {
        return (r - t) * Math.sqrt(1 - (e = e / a - 1) * e) + t;
      },
      easeInOutCirc: function (e, t, r, a) {
        var o = r - t;
        return (e /= a / 2) < 1
          ? (-o / 2) * (Math.sqrt(1 - e * e) - 1) + t
          : (o / 2) * (Math.sqrt(1 - (e -= 2) * e) + 1) + t;
      },
      easeInElastic: function (e, t, r, a) {
        var o,
          n,
          i,
          l = r - t;
        return ((i = 1.70158), (n = 0), (o = l), 0 === e)
          ? t
          : 1 == (e /= a)
            ? t + l
            : (n || (n = 0.3 * a),
              o < Math.abs(l)
                ? ((o = l), (i = n / 4))
                : (i = (n / (2 * Math.PI)) * Math.asin(l / o)),
              -(
                o *
                Math.pow(2, 10 * (e -= 1)) *
                Math.sin((2 * Math.PI * (e * a - i)) / n)
              ) + t);
      },
      easeOutElastic: function (e, t, r, a) {
        var o,
          n,
          i,
          l = r - t;
        return ((i = 1.70158), (n = 0), (o = l), 0 === e)
          ? t
          : 1 == (e /= a)
            ? t + l
            : (n || (n = 0.3 * a),
              o < Math.abs(l)
                ? ((o = l), (i = n / 4))
                : (i = (n / (2 * Math.PI)) * Math.asin(l / o)),
              o *
              Math.pow(2, -10 * e) *
              Math.sin((2 * Math.PI * (e * a - i)) / n) +
              l +
              t);
      },
      easeInOutElastic: function (e, t, r, a) {
        var o,
          n,
          i,
          l = r - t;
        return ((i = 1.70158), (n = 0), (o = l), 0 === e)
          ? t
          : 2 == (e /= a / 2)
            ? t + l
            : (n || (n = 0.3 * 1.5 * a),
              o < Math.abs(l)
                ? ((o = l), (i = n / 4))
                : (i = (n / (2 * Math.PI)) * Math.asin(l / o)),
              e < 1)
              ? -0.5 *
              (o *
                Math.pow(2, 10 * (e -= 1)) *
                Math.sin((2 * Math.PI * (e * a - i)) / n)) +
              t
              : o *
              Math.pow(2, -10 * (e -= 1)) *
              Math.sin((2 * Math.PI * (e * a - i)) / n) *
              0.5 +
              l +
              t;
      },
      easeInBack: function (e, t, r, a, o) {
        return (
          void 0 === o && (o = 1.70158),
          (r - t) * (e /= a) * e * ((o + 1) * e - o) + t
        );
      },
      easeOutBack: function (e, t, r, a, o) {
        return (
          void 0 === o && (o = 1.70158),
          (r - t) * ((e = e / a - 1) * e * ((o + 1) * e + o) + 1) + t
        );
      },
      easeInOutBack: function (e, t, r, a, o) {
        var n = r - t;
        return (void 0 === o && (o = 1.70158), (e /= a / 2) < 1)
          ? (n / 2) * (e * e * (((o *= 1.525) + 1) * e - o)) + t
          : (n / 2) * ((e -= 2) * e * (((o *= 1.525) + 1) * e + o) + 2) + t;
      },
      easeInBounce: function (e, t, r, o) {
        var n,
          i = r - t;
        return ((n = a.easeOutBounce(o - e, 0, i, o)), i - n + t);
      },
      easeOutBounce: function (e, t, r, a) {
        var o = r - t;
        return (e /= a) < 1 / 2.75
          ? 7.5625 * e * e * o + t
          : e < 2 / 2.75
            ? o * (7.5625 * (e -= 1.5 / 2.75) * e + 0.75) + t
            : e < 2.5 / 2.75
              ? o * (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375) + t
              : o * (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375) + t;
      },
      easeInOutBounce: function (e, t, r, o) {
        var n = r - t;
        return e < o / 2
          ? 0.5 * a.easeInBounce(2 * e, 0, n, o) + t
          : 0.5 * a.easeOutBounce(2 * e - o, 0, n, o) + 0.5 * n + t;
      },
    };
    t.exports = a;
  },
  88143,
  (e, t, r) => {
    "use strict";
    function a({
      widthInt: e,
      heightInt: t,
      blurWidth: r,
      blurHeight: o,
      blurDataURL: n,
      objectFit: i,
    }) {
      let l = r ? 40 * r : e,
        s = o ? 40 * o : t,
        c = l && s ? `viewBox='0 0 ${l} ${s}'` : "";
      return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${c}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${c ? "none" : "contain" === i ? "xMidYMid" : "cover" === i ? "xMidYMid slice" : "none"}' style='filter: url(%23b);' href='${n}'/%3E%3C/svg%3E`;
    }
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "getImageBlurSvg", {
        enumerable: !0,
        get: function () {
          return a;
        },
      }));
  },
  87690,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var a = {
      VALID_LOADERS: function () {
        return n;
      },
      imageConfigDefault: function () {
        return i;
      },
    };
    for (var o in a) Object.defineProperty(r, o, { enumerable: !0, get: a[o] });
    let n = ["default", "imgix", "cloudinary", "akamai", "custom"],
      i = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [32, 48, 64, 96, 128, 256, 384],
        path: "/_next/image",
        loader: "default",
        loaderFile: "",
        domains: [],
        disableStaticImages: !1,
        minimumCacheTTL: 14400,
        formats: ["image/webp"],
        maximumDiskCacheSize: void 0,
        maximumRedirects: 3,
        maximumResponseBody: 5e7,
        dangerouslyAllowLocalIP: !1,
        dangerouslyAllowSVG: !1,
        contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
        contentDispositionType: "attachment",
        localPatterns: void 0,
        remotePatterns: [],
        qualities: [75],
        unoptimized: !0,
        customCacheHandler: !1,
      };
  },
  8927,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "getImgProps", {
        enumerable: !0,
        get: function () {
          return c;
        },
      }),
      e.r(33525));
    let a = e.r(43369),
      o = e.r(88143),
      n = e.r(87690),
      i = ["-moz-initial", "fill", "none", "scale-down", void 0];
    function l(e) {
      return void 0 !== e.default;
    }
    function s(e) {
      return void 0 === e
        ? e
        : "number" == typeof e
          ? Number.isFinite(e)
            ? e
            : NaN
          : "string" == typeof e && /^[0-9]+$/.test(e)
            ? parseInt(e, 10)
            : NaN;
    }
    function c(
      {
        src: e,
        sizes: t,
        unoptimized: r = !1,
        priority: d = !1,
        preload: m = !1,
        loading: h,
        className: u,
        quality: p,
        width: f,
        height: g,
        fill: y = !1,
        style: v,
        overrideSrc: x,
        onLoad: b,
        onLoadingComplete: w,
        placeholder: _ = "empty",
        blurDataURL: j,
        fetchPriority: S,
        decoding: k = "async",
        layout: N,
        objectFit: z,
        objectPosition: M,
        lazyBoundary: C,
        lazyRoot: P,
        ...O
      },
      E,
    ) {
      var T;
      let I,
        $,
        L,
        { imgConf: R, showAltText: A, blurComplete: F, defaultLoader: D } = E,
        B = R || n.imageConfigDefault;
      if ("allSizes" in B) I = B;
      else {
        let e = [...B.deviceSizes, ...B.imageSizes].sort((e, t) => e - t),
          t = B.deviceSizes.sort((e, t) => e - t),
          r = B.qualities?.sort((e, t) => e - t);
        I = { ...B, allSizes: e, deviceSizes: t, qualities: r };
      }
      if (void 0 === D)
        throw Object.defineProperty(
          Error(
            "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config",
          ),
          "__NEXT_ERROR_CODE",
          { value: "E163", enumerable: !1, configurable: !0 },
        );
      let q = O.loader || D;
      (delete O.loader, delete O.srcSet);
      let H = "__next_img_default" in q;
      if (H) {
        if ("custom" === I.loader)
          throw Object.defineProperty(
            Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),
            "__NEXT_ERROR_CODE",
            { value: "E252", enumerable: !1, configurable: !0 },
          );
      } else {
        let e = q;
        q = (t) => {
          let { config: r, ...a } = t;
          return e(a);
        };
      }
      if (N) {
        "fill" === N && (y = !0);
        let e = {
          intrinsic: { maxWidth: "100%", height: "auto" },
          responsive: { width: "100%", height: "auto" },
        }[N];
        e && (v = { ...v, ...e });
        let r = { responsive: "100vw", fill: "100vw" }[N];
        r && !t && (t = r);
      }
      let V = "",
        W = s(f),
        U = s(g);
      if ((T = e) && "object" == typeof T && (l(T) || void 0 !== T.src)) {
        let t = l(e) ? e.default : e;
        if (!t.src)
          throw Object.defineProperty(
            Error(
              `An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`,
            ),
            "__NEXT_ERROR_CODE",
            { value: "E460", enumerable: !1, configurable: !0 },
          );
        if (!t.height || !t.width)
          throw Object.defineProperty(
            Error(
              `An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`,
            ),
            "__NEXT_ERROR_CODE",
            { value: "E48", enumerable: !1, configurable: !0 },
          );
        if (
          (($ = t.blurWidth),
            (L = t.blurHeight),
            (j = j || t.blurDataURL),
            (V = t.src),
            !y)
        )
          if (W || U) {
            if (W && !U) {
              let e = W / t.width;
              U = Math.round(t.height * e);
            } else if (!W && U) {
              let e = U / t.height;
              W = Math.round(t.width * e);
            }
          } else ((W = t.width), (U = t.height));
      }
      let G = !d && !m && ("lazy" === h || void 0 === h);
      ((!(e = "string" == typeof e ? e : V) ||
        e.startsWith("data:") ||
        e.startsWith("blob:")) &&
        ((r = !0), (G = !1)),
        I.unoptimized && (r = !0),
        H &&
        !I.dangerouslyAllowSVG &&
        e.split("?", 1)[0].endsWith(".svg") &&
        (r = !0));
      let J = s(p),
        X = Object.assign(
          y
            ? {
              position: "absolute",
              height: "100%",
              width: "100%",
              left: 0,
              top: 0,
              right: 0,
              bottom: 0,
              objectFit: z,
              objectPosition: M,
            }
            : {},
          A ? {} : { color: "transparent" },
          v,
        ),
        Y =
          F || "empty" === _
            ? null
            : "blur" === _
              ? `url("data:image/svg+xml;charset=utf-8,${(0, o.getImageBlurSvg)({ widthInt: W, heightInt: U, blurWidth: $, blurHeight: L, blurDataURL: j || "", objectFit: X.objectFit })}")`
              : `url("${_}")`,
        Q = i.includes(X.objectFit)
          ? "fill" === X.objectFit
            ? "100% 100%"
            : "cover"
          : X.objectFit,
        K = Y
          ? {
            backgroundSize: Q,
            backgroundPosition: X.objectPosition || "50% 50%",
            backgroundRepeat: "no-repeat",
            backgroundImage: Y,
          }
          : {},
        Z = (function ({
          config: e,
          src: t,
          unoptimized: r,
          width: o,
          quality: n,
          sizes: i,
          loader: l,
        }) {
          if (r) {
            if (t.startsWith("/") && !t.startsWith("//")) {
              let e = (0, a.getDeploymentId)();
              if (e) {
                let r = t.indexOf("?");
                if (-1 !== r) {
                  let a = new URLSearchParams(t.slice(r + 1));
                  a.get("dpl") ||
                    (a.append("dpl", e),
                      (t = t.slice(0, r) + "?" + a.toString()));
                } else t += `?dpl=${e}`;
              }
            }
            return { src: t, srcSet: void 0, sizes: void 0 };
          }
          let { widths: s, kind: c } = (function (
            { deviceSizes: e, allSizes: t },
            r,
            a,
          ) {
            if (a) {
              let r = /(^|\s)(1?\d?\d)vw/g,
                o = [];
              for (let e; (e = r.exec(a));) o.push(parseInt(e[2]));
              if (o.length) {
                let r = 0.01 * Math.min(...o);
                return { widths: t.filter((t) => t >= e[0] * r), kind: "w" };
              }
              return { widths: t, kind: "w" };
            }
            return "number" != typeof r
              ? { widths: e, kind: "w" }
              : {
                widths: [
                  ...new Set(
                    [r, 2 * r].map(
                      (e) => t.find((t) => t >= e) || t[t.length - 1],
                    ),
                  ),
                ],
                kind: "x",
              };
          })(e, o, i),
            d = s.length - 1;
          return {
            sizes: i || "w" !== c ? i : "100vw",
            srcSet: s
              .map(
                (r, a) =>
                  `${l({ config: e, src: t, quality: n, width: r })} ${"w" === c ? r : a + 1}${c}`,
              )
              .join(", "),
            src: l({ config: e, src: t, quality: n, width: s[d] }),
          };
        })({
          config: I,
          src: e,
          unoptimized: r,
          width: W,
          quality: J,
          sizes: t,
          loader: q,
        }),
        ee = G ? "lazy" : h;
      return {
        props: {
          ...O,
          loading: ee,
          fetchPriority: S,
          width: W,
          height: U,
          decoding: k,
          className: u,
          style: { ...X, ...K },
          sizes: Z.sizes,
          srcSet: Z.srcSet,
          src: x || Z.src,
        },
        meta: { unoptimized: r, preload: m || d, placeholder: _, fill: y },
      };
    }
  },
  98879,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function () {
          return l;
        },
      }));
    let a = e.r(71645),
      o = "u" < typeof window,
      n = o ? () => { } : a.useLayoutEffect,
      i = o ? () => { } : a.useEffect;
    function l(e) {
      let { headManager: t, reduceComponentsToState: r } = e;
      function l() {
        if (t && t.mountedInstances) {
          let e = a.Children.toArray(
            Array.from(t.mountedInstances).filter(Boolean),
          );
          t.updateHead(r(e));
        }
      }
      return (
        o && (t?.mountedInstances?.add(e.children), l()),
        n(
          () => (
            t?.mountedInstances?.add(e.children),
            () => {
              t?.mountedInstances?.delete(e.children);
            }
          ),
        ),
        n(
          () => (
            t && (t._pendingUpdate = l),
            () => {
              t && (t._pendingUpdate = l);
            }
          ),
        ),
        i(
          () => (
            t &&
            t._pendingUpdate &&
            (t._pendingUpdate(), (t._pendingUpdate = null)),
            () => {
              t &&
                t._pendingUpdate &&
                (t._pendingUpdate(), (t._pendingUpdate = null));
            }
          ),
        ),
        null
      );
    }
  },
  25633,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var a = {
      default: function () {
        return f;
      },
      defaultHead: function () {
        return m;
      },
    };
    for (var o in a) Object.defineProperty(r, o, { enumerable: !0, get: a[o] });
    let n = e.r(55682),
      i = e.r(90809),
      l = e.r(43476),
      s = i._(e.r(71645)),
      c = n._(e.r(98879)),
      d = e.r(42732);
    function m() {
      return [
        (0, l.jsx)("meta", { charSet: "utf-8" }, "charset"),
        (0, l.jsx)(
          "meta",
          { name: "viewport", content: "width=device-width" },
          "viewport",
        ),
      ];
    }
    function h(e, t) {
      return "string" == typeof t || "number" == typeof t
        ? e
        : t.type === s.default.Fragment
          ? e.concat(
            s.default.Children.toArray(t.props.children).reduce(
              (e, t) =>
                "string" == typeof t || "number" == typeof t
                  ? e
                  : e.concat(t),
              [],
            ),
          )
          : e.concat(t);
    }
    e.r(33525);
    let u = ["name", "httpEquiv", "charSet", "itemProp"];
    function p(e) {
      let t, r, a, o;
      return e
        .reduce(h, [])
        .reverse()
        .concat(m().reverse())
        .filter(
          ((t = new Set()),
            (r = new Set()),
            (a = new Set()),
            (o = {}),
            (e) => {
              let n = !0,
                i = !1;
              if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
                i = !0;
                let r = e.key.slice(e.key.indexOf("$") + 1);
                t.has(r) ? (n = !1) : t.add(r);
              }
              switch (e.type) {
                case "title":
                case "base":
                  r.has(e.type) ? (n = !1) : r.add(e.type);
                  break;
                case "meta":
                  for (let t = 0, r = u.length; t < r; t++) {
                    let r = u[t];
                    if (e.props.hasOwnProperty(r))
                      if ("charSet" === r) a.has(r) ? (n = !1) : a.add(r);
                      else {
                        let t = e.props[r],
                          a = o[r] || new Set();
                        ("name" !== r || !i) && a.has(t)
                          ? (n = !1)
                          : (a.add(t), (o[r] = a));
                      }
                  }
              }
              return n;
            }),
        )
        .reverse()
        .map((e, t) => {
          let r = e.key || t;
          return s.default.cloneElement(e, { key: r });
        });
    }
    let f = function ({ children: e }) {
      let t = (0, s.useContext)(d.HeadManagerContext);
      return (0, l.jsx)(c.default, {
        reduceComponentsToState: p,
        headManager: t,
        children: e,
      });
    };
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
        Object.assign(r.default, r),
        (t.exports = r.default));
  },
  18556,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "ImageConfigContext", {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
    let a = e.r(55682)._(e.r(71645)),
      o = e.r(87690),
      n = a.default.createContext(o.imageConfigDefault);
  },
  65856,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "RouterContext", {
        enumerable: !0,
        get: function () {
          return a;
        },
      }));
    let a = e.r(55682)._(e.r(71645)).default.createContext(null);
  },
  70965,
  (e, t, r) => {
    "use strict";
    function a(e, t) {
      let r = e || 75;
      return t?.qualities?.length
        ? t.qualities.reduce(
          (e, t) => (Math.abs(t - r) < Math.abs(e - r) ? t : e),
          t.qualities[0],
        )
        : r;
    }
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "findClosestQuality", {
        enumerable: !0,
        get: function () {
          return a;
        },
      }));
  },
  1948,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function () {
          return i;
        },
      }));
    let a = e.r(70965),
      o = e.r(43369);
    function n({ config: e, src: t, width: r, quality: i }) {
      let l = (0, o.getDeploymentId)();
      if (t.startsWith("/") && !t.startsWith("//")) {
        let e = t.indexOf("?");
        if (-1 !== e) {
          let r = new URLSearchParams(t.slice(e + 1)),
            a = r.get("dpl");
          if (a) {
            ((l = a), r.delete("dpl"));
            let o = r.toString();
            t = t.slice(0, e) + (o ? "?" + o : "");
          }
        }
      }
      if (
        t.startsWith("/") &&
        t.includes("?") &&
        e.localPatterns?.length === 1 &&
        "**" === e.localPatterns[0].pathname &&
        "" === e.localPatterns[0].search
      )
        throw Object.defineProperty(
          Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),
          "__NEXT_ERROR_CODE",
          { value: "E871", enumerable: !1, configurable: !0 },
        );
      let s = (0, a.findClosestQuality)(i, e);
      return `${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${s}${t.startsWith("/") && l ? `&dpl=${l}` : ""}`;
    }
    n.__next_img_default = !0;
    let i = n;
  },
  18581,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "useMergedRef", {
        enumerable: !0,
        get: function () {
          return o;
        },
      }));
    let a = e.r(71645);
    function o(e, t) {
      let r = (0, a.useRef)(null),
        o = (0, a.useRef)(null);
      return (0, a.useCallback)(
        (a) => {
          if (null === a) {
            let e = r.current;
            e && ((r.current = null), e());
            let t = o.current;
            t && ((o.current = null), t());
          } else (e && (r.current = n(e, a)), t && (o.current = n(t, a)));
        },
        [e, t],
      );
    }
    function n(e, t) {
      if ("function" != typeof e)
        return (
          (e.current = t),
          () => {
            e.current = null;
          }
        );
      {
        let r = e(t);
        return "function" == typeof r ? r : () => e(null);
      }
    }
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
        Object.assign(r.default, r),
        (t.exports = r.default));
  },
  85437,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "Image", {
        enumerable: !0,
        get: function () {
          return b;
        },
      }));
    let a = e.r(55682),
      o = e.r(90809),
      n = e.r(43476),
      i = o._(e.r(71645)),
      l = a._(e.r(74080)),
      s = a._(e.r(25633)),
      c = e.r(8927),
      d = e.r(87690),
      m = e.r(18556);
    e.r(33525);
    let h = e.r(65856),
      u = a._(e.r(1948)),
      p = e.r(18581),
      f = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [32, 48, 64, 96, 128, 256, 384],
        qualities: [75],
        path: "/_next/image",
        loader: "default",
        dangerouslyAllowSVG: !1,
        unoptimized: !0,
      };
    function g(e, t, r, a, o, n, i) {
      let l = e?.src;
      e &&
        e["data-loaded-src"] !== l &&
        ((e["data-loaded-src"] = l),
          ("decode" in e ? e.decode() : Promise.resolve())
            .catch(() => { })
            .then(() => {
              if (e.parentElement && e.isConnected) {
                if (("empty" !== t && o(!0), r?.current)) {
                  let t = new Event("load");
                  Object.defineProperty(t, "target", { writable: !1, value: e });
                  let a = !1,
                    o = !1;
                  r.current({
                    ...t,
                    nativeEvent: t,
                    currentTarget: e,
                    target: e,
                    isDefaultPrevented: () => a,
                    isPropagationStopped: () => o,
                    persist: () => { },
                    preventDefault: () => {
                      ((a = !0), t.preventDefault());
                    },
                    stopPropagation: () => {
                      ((o = !0), t.stopPropagation());
                    },
                  });
                }
                a?.current && a.current(e);
              }
            }));
    }
    function y(e) {
      return i.use ? { fetchPriority: e } : { fetchpriority: e };
    }
    "u" < typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
    let v = (0, i.forwardRef)(
      (
        {
          src: e,
          srcSet: t,
          sizes: r,
          height: a,
          width: o,
          decoding: l,
          className: s,
          style: c,
          fetchPriority: d,
          placeholder: m,
          loading: h,
          unoptimized: u,
          fill: f,
          onLoadRef: v,
          onLoadingCompleteRef: x,
          setBlurComplete: b,
          setShowAltText: w,
          sizesInput: _,
          onLoad: j,
          onError: S,
          ...k
        },
        N,
      ) => {
        let z = (0, i.useCallback)(
          (e) => {
            e && (S && (e.src = e.src), e.complete && g(e, m, v, x, b, u, _));
          },
          [e, m, v, x, b, S, u, _],
        ),
          M = (0, p.useMergedRef)(N, z);
        return (0, n.jsx)("img", {
          ...k,
          ...y(d),
          loading: h,
          width: o,
          height: a,
          decoding: l,
          "data-nimg": f ? "fill" : "1",
          className: s,
          style: c,
          sizes: r,
          srcSet: t,
          src: e,
          ref: M,
          onLoad: (e) => {
            g(e.currentTarget, m, v, x, b, u, _);
          },
          onError: (e) => {
            (w(!0), "empty" !== m && b(!0), S && S(e));
          },
        });
      },
    );
    function x({ isAppRouter: e, imgAttributes: t }) {
      let r = {
        as: "image",
        imageSrcSet: t.srcSet,
        imageSizes: t.sizes,
        crossOrigin: t.crossOrigin,
        referrerPolicy: t.referrerPolicy,
        ...y(t.fetchPriority),
      };
      return e && l.default.preload
        ? (l.default.preload(t.src, r), null)
        : (0, n.jsx)(s.default, {
          children: (0, n.jsx)(
            "link",
            { rel: "preload", href: t.srcSet ? void 0 : t.src, ...r },
            "__nimg-" + t.src + t.srcSet + t.sizes,
          ),
        });
    }
    let b = (0, i.forwardRef)((e, t) => {
      let r = (0, i.useContext)(h.RouterContext),
        a = (0, i.useContext)(m.ImageConfigContext),
        o = (0, i.useMemo)(() => {
          let e = f || a || d.imageConfigDefault,
            t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
            r = e.deviceSizes.sort((e, t) => e - t),
            o = e.qualities?.sort((e, t) => e - t);
          return {
            ...e,
            allSizes: t,
            deviceSizes: r,
            qualities: o,
            localPatterns:
              "u" < typeof window ? a?.localPatterns : e.localPatterns,
          };
        }, [a]),
        { onLoad: l, onLoadingComplete: s } = e,
        p = (0, i.useRef)(l);
      (0, i.useEffect)(() => {
        p.current = l;
      }, [l]);
      let g = (0, i.useRef)(s);
      (0, i.useEffect)(() => {
        g.current = s;
      }, [s]);
      let [y, b] = (0, i.useState)(!1),
        [w, _] = (0, i.useState)(!1),
        { props: j, meta: S } = (0, c.getImgProps)(e, {
          defaultLoader: u.default,
          imgConf: o,
          blurComplete: y,
          showAltText: w,
        });
      return (0, n.jsxs)(n.Fragment, {
        children: [
          (0, n.jsx)(v, {
            ...j,
            unoptimized: S.unoptimized,
            placeholder: S.placeholder,
            fill: S.fill,
            onLoadRef: p,
            onLoadingCompleteRef: g,
            setBlurComplete: b,
            setShowAltText: _,
            sizesInput: e.sizes,
            ref: t,
          }),
          S.preload
            ? (0, n.jsx)(x, { isAppRouter: !r, imgAttributes: j })
            : null,
        ],
      });
    });
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
        Object.assign(r.default, r),
        (t.exports = r.default));
  },
  94909,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var a = {
      default: function () {
        return d;
      },
      getImageProps: function () {
        return c;
      },
    };
    for (var o in a) Object.defineProperty(r, o, { enumerable: !0, get: a[o] });
    let n = e.r(55682),
      i = e.r(8927),
      l = e.r(85437),
      s = n._(e.r(1948));
    function c(e) {
      let { props: t } = (0, i.getImgProps)(e, {
        defaultLoader: s.default,
        imgConf: {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [32, 48, 64, 96, 128, 256, 384],
          qualities: [75],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !0,
        },
      });
      for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
      return { props: t };
    }
    let d = l.Image;
  },
  57688,
  (e, t, r) => {
    t.exports = e.r(94909);
  },
  95057,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var a = {
      formatUrl: function () {
        return l;
      },
      formatWithValidation: function () {
        return c;
      },
      urlObjectKeys: function () {
        return s;
      },
    };
    for (var o in a) Object.defineProperty(r, o, { enumerable: !0, get: a[o] });
    let n = e.r(90809)._(e.r(98183)),
      i = /https?|ftp|gopher|file/;
    function l(e) {
      let { auth: t, hostname: r } = e,
        a = e.protocol || "",
        o = e.pathname || "",
        l = e.hash || "",
        s = e.query || "",
        c = !1;
      ((t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : ""),
        e.host
          ? (c = t + e.host)
          : r &&
          ((c = t + (~r.indexOf(":") ? `[${r}]` : r)),
            e.port && (c += ":" + e.port)),
        s && "object" == typeof s && (s = String(n.urlQueryToSearchParams(s))));
      let d = e.search || (s && `?${s}`) || "";
      return (
        a && !a.endsWith(":") && (a += ":"),
        e.slashes || ((!a || i.test(a)) && !1 !== c)
          ? ((c = "//" + (c || "")), o && "/" !== o[0] && (o = "/" + o))
          : c || (c = ""),
        l && "#" !== l[0] && (l = "#" + l),
        d && "?" !== d[0] && (d = "?" + d),
        (o = o.replace(/[?#]/g, encodeURIComponent)),
        (d = d.replace("#", "%23")),
        `${a}${c}${o}${d}${l}`
      );
    }
    let s = [
      "auth",
      "hash",
      "host",
      "hostname",
      "href",
      "path",
      "pathname",
      "port",
      "protocol",
      "query",
      "search",
      "slashes",
    ];
    function c(e) {
      return l(e);
    }
  },
  73668,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "isLocalURL", {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
    let a = e.r(18967),
      o = e.r(52817);
    function n(e) {
      if (!(0, a.isAbsoluteUrl)(e)) return !0;
      try {
        let t = (0, a.getLocationOrigin)(),
          r = new URL(e, t);
        return r.origin === t && (0, o.hasBasePath)(r.pathname);
      } catch (e) {
        return !1;
      }
    }
  },
  84508,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "errorOnce", {
        enumerable: !0,
        get: function () {
          return a;
        },
      }));
    let a = (e) => { };
  },
  22016,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var a = {
      default: function () {
        return y;
      },
      useLinkStatus: function () {
        return x;
      },
    };
    for (var o in a) Object.defineProperty(r, o, { enumerable: !0, get: a[o] });
    let n = e.r(90809),
      i = e.r(43476),
      l = n._(e.r(71645)),
      s = e.r(95057),
      c = e.r(8372),
      d = e.r(18581),
      m = e.r(18967),
      h = e.r(5550);
    e.r(33525);
    let u = e.r(88540),
      p = e.r(91949),
      f = e.r(73668),
      g = e.r(9396);
    function y(t) {
      var r, a;
      let o,
        n,
        y,
        [x, b] = (0, l.useOptimistic)(p.IDLE_LINK_STATUS),
        w = (0, l.useRef)(null),
        {
          href: _,
          as: j,
          children: S,
          prefetch: k = null,
          passHref: N,
          replace: z,
          shallow: M,
          scroll: C,
          onClick: P,
          onMouseEnter: O,
          onTouchStart: E,
          legacyBehavior: T = !1,
          onNavigate: I,
          transitionTypes: $,
          ref: L,
          unstable_dynamicOnHover: R,
          ...A
        } = t;
      ((o = S),
        T &&
        ("string" == typeof o || "number" == typeof o) &&
        (o = (0, i.jsx)("a", { children: o })));
      let F = l.default.useContext(c.AppRouterContext),
        D = !1 !== k,
        B =
          !1 !== k
            ? null === (a = k) || "auto" === a
              ? g.FetchStrategy.PPR
              : g.FetchStrategy.Full
            : g.FetchStrategy.PPR,
        q = "string" == typeof (r = j || _) ? r : (0, s.formatUrl)(r);
      if (T) {
        if (o?.$$typeof === Symbol.for("react.lazy"))
          throw Object.defineProperty(
            Error(
              "`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag.",
            ),
            "__NEXT_ERROR_CODE",
            { value: "E863", enumerable: !1, configurable: !0 },
          );
        n = l.default.Children.only(o);
      }
      let H = T ? n && "object" == typeof n && n.ref : L,
        V = l.default.useCallback(
          (e) => (
            null !== F &&
            (w.current = (0, p.mountLinkInstance)(e, q, F, B, D, b)),
            () => {
              (w.current &&
                ((0, p.unmountLinkForCurrentNavigation)(w.current),
                  (w.current = null)),
                (0, p.unmountPrefetchableInstance)(e));
            }
          ),
          [D, q, F, B, b],
        ),
        W = {
          ref: (0, d.useMergedRef)(V, H),
          onClick(t) {
            (T || "function" != typeof P || P(t),
              T &&
              n.props &&
              "function" == typeof n.props.onClick &&
              n.props.onClick(t),
              !F ||
              t.defaultPrevented ||
              (function (t, r, a, o, n, i, s) {
                if ("u" > typeof window) {
                  let c,
                    { nodeName: d } = t.currentTarget;
                  if (
                    ("A" === d.toUpperCase() &&
                      (((c = t.currentTarget.getAttribute("target")) &&
                        "_self" !== c) ||
                        t.metaKey ||
                        t.ctrlKey ||
                        t.shiftKey ||
                        t.altKey ||
                        (t.nativeEvent && 2 === t.nativeEvent.which))) ||
                    t.currentTarget.hasAttribute("download")
                  )
                    return;
                  if (!(0, f.isLocalURL)(r)) {
                    o && (t.preventDefault(), location.replace(r));
                    return;
                  }
                  if ((t.preventDefault(), i)) {
                    let e = !1;
                    if (
                      (i({
                        preventDefault: () => {
                          e = !0;
                        },
                      }),
                        e)
                    )
                      return;
                  }
                  let { dispatchNavigateAction: m } = e.r(99781);
                  l.default.startTransition(() => {
                    m(
                      r,
                      o ? "replace" : "push",
                      !1 === n
                        ? u.ScrollBehavior.NoScroll
                        : u.ScrollBehavior.Default,
                      a.current,
                      s,
                    );
                  });
                }
              })(t, q, w, z, C, I, $));
          },
          onMouseEnter(e) {
            (T || "function" != typeof O || O(e),
              T &&
              n.props &&
              "function" == typeof n.props.onMouseEnter &&
              n.props.onMouseEnter(e),
              F && D && (0, p.onNavigationIntent)(e.currentTarget, !0 === R));
          },
          onTouchStart: function (e) {
            (T || "function" != typeof E || E(e),
              T &&
              n.props &&
              "function" == typeof n.props.onTouchStart &&
              n.props.onTouchStart(e),
              F && D && (0, p.onNavigationIntent)(e.currentTarget, !0 === R));
          },
        };
      return (
        (0, m.isAbsoluteUrl)(q)
          ? (W.href = q)
          : (T && !N && ("a" !== n.type || "href" in n.props)) ||
          (W.href = (0, h.addBasePath)(q)),
        (y = T
          ? l.default.cloneElement(n, W)
          : (0, i.jsx)("a", { ...A, ...W, children: o })),
        (0, i.jsx)(v.Provider, { value: x, children: y })
      );
    }
    e.r(84508);
    let v = (0, l.createContext)(p.IDLE_LINK_STATUS),
      x = () => (0, l.useContext)(v);
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
        Object.assign(r.default, r),
        (t.exports = r.default));
  },
  74647,
  (e) => {
    "use strict";
    var t,
      r,
      a,
      o,
      n = e.i(43476),
      i = e.i(932),
      l = e.i(71645),
      s = e.i(46932),
      c = {
        color: void 0,
        size: void 0,
        className: void 0,
        style: void 0,
        attr: void 0,
      },
      d = l.default.createContext && l.default.createContext(c),
      m = ["attr", "size", "title"];
    function h() {
      return (h = Object.assign.bind()).apply(null, arguments);
    }
    function u(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        (t &&
          (a = a.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, a));
      }
      return r;
    }
    function p(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? u(Object(r), !0).forEach(function (t) {
            var a, o, n;
            ((a = e),
              (o = t),
              (n = r[t]),
              (o = (function (e) {
                var t = (function (e, t) {
                  if ("object" != typeof e || !e) return e;
                  var r = e[Symbol.toPrimitive];
                  if (void 0 !== r) {
                    var a = r.call(e, t || "default");
                    if ("object" != typeof a) return a;
                    throw TypeError(
                      "@@toPrimitive must return a primitive value.",
                    );
                  }
                  return ("string" === t ? String : Number)(e);
                })(e, "string");
                return "symbol" == typeof t ? t : t + "";
              })(o)) in a
                ? Object.defineProperty(a, o, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
                : (a[o] = n));
          })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : u(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t),
              );
            });
      }
      return e;
    }
    function f(e) {
      return (t) =>
        l.default.createElement(
          g,
          h({ attr: p({}, e.attr) }, t),
          (function e(t) {
            return (
              t &&
              t.map((t, r) =>
                l.default.createElement(
                  t.tag,
                  p({ key: r }, t.attr),
                  e(t.child),
                ),
              )
            );
          })(e.child),
        );
    }
    function g(e) {
      var t = (t) => {
        var r,
          { attr: a, size: o, title: n } = e,
          i = (function (e, t) {
            if (null == e) return {};
            var r,
              a,
              o = (function (e, t) {
                if (null == e) return {};
                var r = {};
                for (var a in e)
                  if ({}.hasOwnProperty.call(e, a)) {
                    if (-1 !== t.indexOf(a)) continue;
                    r[a] = e[a];
                  }
                return r;
              })(e, t);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              for (a = 0; a < n.length; a++)
                ((r = n[a]),
                  -1 === t.indexOf(r) &&
                  {}.propertyIsEnumerable.call(e, r) &&
                  (o[r] = e[r]));
            }
            return o;
          })(e, m),
          s = o || t.size || "1em";
        return (
          t.className && (r = t.className),
          e.className && (r = (r ? r + " " : "") + e.className),
          l.default.createElement(
            "svg",
            h(
              {
                stroke: "currentColor",
                fill: "currentColor",
                strokeWidth: "0",
              },
              t.attr,
              a,
              i,
              {
                className: r,
                style: p(p({ color: e.color || t.color }, t.style), e.style),
                height: s,
                width: s,
                xmlns: "http://www.w3.org/2000/svg",
              },
            ),
            n && l.default.createElement("title", null, n),
            e.children,
          )
        );
      };
      return void 0 !== d
        ? l.default.createElement(d.Consumer, null, (e) => t(e))
        : t(c);
    }
    function y(e) {
      return f({
        tag: "svg",
        attr: { viewBox: "0 0 512 512" },
        child: [
          {
            tag: "path",
            attr: {
              d: "M379.625 19.844c-16.74.187-34.18 4.942-50.22 13.625-12.754 6.905-24.542 16.552-34.28 28.5-1.217-1.252-2.578-2.38-3.72-3.69-47.612-54.672-125.46-43.178-160.75 1.345-5.91 4.88-9.686 12.268-9.686 20.53 0 14.692 11.9 26.595 26.593 26.595 14.69 0 26.625-11.903 26.625-26.594 0-10.035-5.578-18.75-13.782-23.28 31.8-23.023 82.904-25.36 116.906 13.687 2.22 2.546 4.53 4.972 6.938 7.312-11.28 19.99-17.145 44.58-13.906 72.78-12.262-16.69-31.758-28.007-55.094-27.5-12.29.27-25.64 3.807-39.563 11.564-60.394 33.638-37.274 103.51-153.375 103.686 47.213 28.976 95.146 41.69 136.938 41.844-14.583 71.33 33.297 162.234 146.813 212-55.354-96.272 18.237-128.528 44.906-186.063 60.407 9.56 105.242-59.912 134.374 53.5 27.68-154.03-86.917-220.388-158.53-211.937-14.422 1.703-26.155 7.967-34.94 17.094-7.646-30.47-3.774-55.575 6.563-75.25 27.31 19.926 61.414 29.575 90.313 29.47 18.49-.07 35.196-3.904 46.875-13.75 11.68-9.85 16.05-26.89 9.375-44.595-8.432-22.363-27.576-35.638-48.97-39.532-5.347-.974-10.825-1.407-16.405-1.344zm.22 18.718c4.457-.065 8.76.29 12.842 1.032 16.328 2.972 28.704 11.517 34.813 27.718 4.736 12.56 2.46 18.326-3.938 23.72-6.396 5.392-19.18 9.285-34.906 9.343-24.812.092-55.875-9.065-79.78-26.47 8.326-10.05 18.477-18.082 29.405-24 13.51-7.312 28.19-11.147 41.564-11.343zm-140.69 128.313c6.397.06 13.328.942 20.907 2.78-72.17 14.765-84.3 99.482-165.156 81.782 70.31-9.934 82.423-85.154 144.25-84.562zm34 19.5c52.567 110.048-67.184 156.03-9.967 257.563-84.856-93.86 23.175-138.69 9.968-257.563zm24.908 3.906c42.292 46.343 133.717-11.018 164.093 90-43.937-71.563-131.402-22.378-164.094-90z",
            },
            child: [],
          },
        ],
      })(e);
    }
    function v(e) {
      return f({
        tag: "svg",
        attr: { viewBox: "0 0 512 512" },
        child: [
          {
            tag: "path",
            attr: {
              d: "M237.4 20.73c-6.1 42.1-26.8 64.2-63.9 64 31.6 4.5 63.8 8 63.9 64.07-.6-46.1 24.5-63.07 64.1-64.07-38-1.5-64.9-16.3-64.1-64zm127.8 11.58c-9.1 14.25-20.8 21.29-38.9 10.28 14.9 11.79 18.6 24.76 10.2 38.97 8.9-11.18 17.5-22.73 39-10.27-17.8-10.06-18.8-23.57-10.3-38.98zM59.68 41.69c-2.7 18.8-12 28.6-28.5 28.5 14.1 2 28.4 3.6 28.5 28.52-.3-20.5 10.9-28.12 28.5-28.52-16.9-.7-28.9-7.3-28.5-28.5zM431 66.28c-2.7 18.8-12 28.6-28.5 28.5 14.1 2 28.4 3.6 28.5 28.52-.3-20.5 10.9-28.12 28.5-28.52-16.9-.7-28.9-7.3-28.5-28.5zM120.3 116.4c-15.8 53.7-47.76 48-79.35 43.4C76.6 170 90.3 197.1 84.28 239.2c12.66-46 42.62-52.6 79.42-43.4-37.6-12.1-56.9-35.4-43.4-79.4zm187 5c-8.8 61.6-39.3 94-93.6 93.7 46.2 6.5 93.6 11.7 93.6 93.7-.8-67.3 35.9-92.2 93.8-93.7-55.5-2.2-94.9-23.9-93.8-93.7zm136.8 38.3c-13.1 21.6-29.5 28.8-49.7 20.1 16.3 9.7 33 19.1 20.1 49.6 10.3-25.2 27.9-28.7 49.7-20-20.3-9.7-31.6-23.9-20.1-49.7zM50.7 243.2c9.16 16.7 7.63 30.1-5.61 40 12.46-6.9 24.85-14.3 39.91 5.6-12.57-16.2-8.2-29 5.61-40-13.92 9.7-27.47 11.6-39.91-5.6zm137.2.3c11.4 26.8-.5 41.3-21.7 50.9 22.7-8.5 40.8-4.5 50.9 21.7-12.7-31.8 4.8-41.2 21.7-50.9-21 8.5-37.8.9-50.9-21.7zm228 12.6c-26.6 64.7-68.7 91.7-127.8 76.4 48.6 19.8 98.8 38.5 76.4 127.9 17.5-73.7 64.4-90.7 127.9-76.5-59.9-17.5-96.9-52-76.5-127.8zM99.94 295.5c15.66 57.8.86 98.1-47.32 118.5 43.46-11.8 87.38-25.2 118.68 47.4-26.4-59.3-3.4-95.4 47.3-118.8-50 19.2-93.1 15-118.66-47.1zm169.36 61c-21.8 20.6-43 23.6-63.2 7.3 15.5 16.3 31.6 32.4 7.2 63.3 19.8-25.6 41.2-24.1 63.3-7.3-20.2-17.4-28.6-37.5-7.3-63.3zM443.2 404c-2.7 18.8-12 28.6-28.5 28.5 14.1 2 28.4 3.6 28.5 28.5-.3-20.5 10.9-28.1 28.5-28.5-16.9-.7-28.9-7.3-28.5-28.5zm-169.7 36c-2.7 18.8-12 28.6-28.5 28.5 14.1 2 28.4 3.6 28.5 28.5-.3-20.5 10.9-28.1 28.5-28.5-16.9-.7-28.9-7.3-28.5-28.5z",
            },
            child: [],
          },
        ],
      })(e);
    }
    function x(e) {
      return f({
        tag: "svg",
        attr: { viewBox: "0 0 512 512" },
        child: [
          {
            tag: "path",
            attr: {
              d: "M254.963 40.213c-37.634 31.356-62.038 67.976-77.916 109.394 8.544 12.5 16.607 25.44 24.228 38.594 15.642-5.553 32.468-8.587 49.995-8.587 17.886 0 35.046 3.156 50.96 8.93 9.07-14.52 18.652-28.856 28.89-42.66-15.736-38.504-39.406-74.025-76.157-105.67zM434.593 72.5c-46.74 28.5-83.334 74.49-114.616 123.826 21.934 11.372 40.696 28.023 54.636 48.244 23.212-22.514 48.206-44.643 75.58-66.82-.882-31.955-5.798-67.033-15.6-105.25zm-353.03 1.094c-9.435 37.96-14.433 72.695-15.74 104.27 23.62 20.078 45.453 40.406 65.78 61.603 13.77-18.29 31.614-33.345 52.194-43.774-28.336-48.245-62.472-92.77-102.234-122.1zm-54.59 96.7C9.708 278.34 31.295 358.165 72.27 411.517c22.427 29.2 50.77 50.62 82.128 64.363-20.892-35.934-25.973-76.777-16.613-116.112 4.668-19.617 12.848-38.864 24.274-57.09-38.14-48.11-82.083-90.01-135.087-132.383zm462.588.464c-59.87 45.918-108.408 90.682-151.36 138.615 9.625 17.744 16.24 36.16 19.722 54.732 7.08 37.78 1.012 76.134-18.31 109.926 32.2-14.254 62.005-35.988 86.51-65.214 44.98-53.64 72.394-132.675 63.44-238.058zM251.27 198.3c-44.09 0-83.025 21.667-106.764 54.954 9.898 10.856 19.428 21.973 28.64 33.42 18.55-24.415 43.224-46.48 73.372-64.422l5.072-3.02 4.906 3.286c30.383 20.345 54.374 44.323 71.65 70.185 10.638-11.774 21.61-23.376 33.012-34.85-23.354-35.875-63.803-59.552-109.888-59.552zm-.268 43.182c-51.58 32.272-84.19 77.032-95.035 122.612-10.94 45.97-.302 92.658 35.986 130.607h108.904c34.806-36.38 47.222-81.652 38.696-127.15-8.466-45.177-37.988-90.634-88.55-126.068z",
            },
            child: [],
          },
        ],
      })(e);
    }
    let b = "2026-12-11T20:00:00",
      w = "",
      _ = "Bina (M.P.)",
      j =
        "Late Mrs. Ramdevi & Late Mr. Kishanlal Saluja cordially invite you to grace the wedding of their grand daughter",
      S = [
        {
          id: "mehndi",
          title: "Mehndi",
          date: "December 10, 2026",
          day: "Thursday",
          time: "Afternoon",
          venue: "The Shlok Garden",
          description:
            "Hands adorned with henna, music & laughter as the celebrations begin.",
          photo: "/images/venues/mehndi.jpg",
          address: "Khurai Road, Bina (M.P.) 470113",
        },
        {
          id: "sagan",
          title: "Sagan",
          date: "December 10, 2026",
          day: "Thursday",
          time: "8:00 PM",
          venue: "The Shlok Garden",
          description:
            "An evening of blessings as two families seal the bond with love.",
          photo: "/images/venues/sagan.jpg",
          address: "Khurai Road, Bina (M.P.) 470113",
        },
        {
          id: "haldi",
          title: "Haldi",
          date: "December 11, 2026",
          day: "Friday",
          time: "Afternoon",
          venue: "The Shlok Garden",
          description: "A sacred blessing of turmeric, love & new beginnings.",
          photo: "/images/venues/haldi.jpg",
          address: "Khurai Road, Bina (M.P.) 470113",
        },
        {
          id: "wedding",
          title: "Wedding",
          date: "December 11, 2026",
          day: "Friday",
          time: "8:00 PM Onwards",
          venue: "The Shlok Garden",
          description:
            "Join us as Dr. Sonali & Dr. Sudev begin their forever. Dinner to follow.",
          photo: "/images/venues/wedding.jpg",
          address: "Khurai Road, Bina (M.P.) 470113",
        },
      ],
      k = {
        mehndi: {
          timeLabel: "As The Afternoon Unfolds",
          venueLabel: "Where We Gather",
          icon: function (e) {
            return f({
              tag: "svg",
              attr: { viewBox: "0 0 512 512" },
              child: [
                {
                  tag: "path",
                  attr: {
                    d: "M228.47 47.906v42.908H19.53V109.5h208.94v21.875H19.53v18.688h208.94V343.03c-16.86-14.274-43.56-23.457-73.626-23.405-50.982.088-92.313 26.714-92.313 59.5s41.332 59.307 92.314 59.22c26.19-.047 49.822-7.113 66.625-18.408h277.467V401.25H240.344c4.22-6.653 6.627-13.906 6.812-21.5.006-.25.03-.5.03-.75h251.75l.002-18.688H247.155V182.25c24.89 40.517 45.422 63.12 64.5 74.656 23.127 13.983 44.285 9.79 60.688 3.28 16.403-6.508 29.112-13.624 42.406-11.655 13.294 1.97 30.884 13.118 55.594 50.595l16.5 25c-11.733-45.096-41.555-105.8-75.72-121.28 27.93-4.62 53.664 11.71 76.376 29.718l-1.53-2.313c-13.05-20.11-24.207-33.715-34.658-42.75-10.45-9.035-20.606-13.596-30.343-14.125-19.477-1.058-32.544 12.03-44.595 18.656-6.025 3.314-11.596 5.395-17.813 5.44-6.216.043-13.607-1.854-23.562-8.47-19.91-13.232-48.717-45.747-89.188-112.5L228.47 47.906z",
                  },
                  child: [],
                },
              ],
            })(e);
          },
        },
        sagan: {
          timeLabel: "As The Evening Comes Alive",
          venueLabel: "Where We Gather",
          icon: function (e) {
            return f({
              tag: "svg",
              attr: { viewBox: "0 0 512 512" },
              child: [
                {
                  tag: "path",
                  attr: {
                    d: "M98.05 18.54c-11.46-.08-23.59 1.28-36.08 3.99L130.1 261.1c-14.2-5.1-31.18-6.2-48.09-3.2-39.17 6.9-67.15 33.8-62.52 59.8 4.64 26.1 40.14 41.7 79.33 34.7 39.08-6.9 67.08-33.7 62.38-59.8-22.1-80.8-44.4-163-66.39-244.21 50.69 3.59 72.59 31.58 90.59 60.31-.5-62.33-37.7-89.81-87.35-90.16zm310.65 30.7c-13.9.1-28.8 2.59-44.1 7.22l87.1 232.44c-14.6-3.9-31.6-3.7-48.3.7-38.4 10-64.2 39-57.5 64.6 6.7 25.7 43.4 38.3 81.8 28.2 38.5-10 64.2-39 57.5-64.6-28.6-78.8-57.3-158.9-85.8-238.2 50.8-.5 74.9 25.7 95.2 52.9-5.2-58.55-40.4-83.61-85.9-83.26zM258.4 163.5l1.8 248.1c-12.3-8.6-28.4-14.3-45.6-15.9-39.4-3.8-73.7 14.5-76.2 41-2.5 26.3 27.7 50.8 67.1 54.5 39.7 3.9 73.7-14.5 76.3-40.9.2-83.8.8-168.9 1.3-253.1 47.9 17 61.6 49.8 71.2 82.4 19.9-74.1-27.9-112.3-95.9-116.1z",
                  },
                  child: [],
                },
              ],
            })(e);
          },
        },
        haldi: {
          timeLabel: "As The Afternoon Glows",
          venueLabel: "Where We Gather",
          icon: function (e) {
            return f({
              tag: "svg",
              attr: { viewBox: "0 0 512 512" },
              child: [
                {
                  tag: "path",
                  attr: {
                    d: "M476.865 25.514L282.941 145.422l19.32 9.215L486.333 40.822l-9.467-15.308zM73.6 65.508l-7.748 16.246 286.595 136.709 1.389 2.715c3.244 6.346 9.677 12.524 17.723 16.373l.003.002.004.002c8.566 4.084 17.188 5.364 23.63 4.373 6.443-.992 10.352-3.63 12.523-8.18 2.17-4.55 1.665-8.39-1.725-13.603-3.39-5.213-10.122-10.882-18.935-15.086-8.063-3.843-16.927-4.961-23.91-3.487l-2.983.63L73.6 65.507zm121.097 97.65c-40.936 2.913-77.435 8.644-106.084 16.283-21.165 5.644-38.06 12.392-48.953 19.26C28.767 205.57 25 211.723 25 216c0 4.277 3.767 10.43 14.66 17.299 10.894 6.868 27.788 13.616 48.953 19.26C130.943 263.847 190.374 271 256 271c49.18 0 94.88-4.017 132.512-10.781-8.123-.325-16.546-2.53-24.703-6.422l-.002-.002-.004-.002c-10.2-4.878-18.614-12.38-24.135-21.484l-72.705-34.68-36.498 22.566c-4.5 9.65-12.051 18.021-21.662 23.977l-.002.002-.004.002c-10.715 6.625-22.297 10.072-33.281 9.588-10.985-.484-21.794-5.485-27.856-15.29-6.062-9.803-5.366-21.696-.515-31.294 4.85-9.598 13.3-17.76 23.785-24.243l.002-.001h.002c9.63-5.951 20.504-8.973 31.16-8.688l6.904-4.27-14.3-6.82zm127.432.36l-.545.336 41.3 19.7c10.563-1.44 21.702.385 31.92 5.257h.005c11.125 5.306 20.412 12.504 26.275 21.52 5.863 9.014 7.844 20.763 2.88 31.167-3.08 6.457-8.178 11.27-14.2 14.395 4.699-1.07 9.273-2.174 13.623-3.334 21.165-5.644 38.06-12.392 48.953-19.26C483.233 226.43 487 220.277 487 216c0-4.277-3.767-10.43-14.66-17.299-10.894-6.868-27.788-13.616-48.953-19.26-27.516-7.337-62.286-12.91-101.258-15.923zm-93.81 15.677l-21.499 13.293-3.033-.3c-7.102-.708-15.793 1.364-23.39 6.058l-.002.002c-8.305 5.135-14.382 11.502-17.186 17.05-2.804 5.55-2.89 9.422-.238 13.71 2.651 4.288 6.822 6.486 13.336 6.773 6.513.287 14.949-1.923 23.023-6.916 7.58-4.699 13.305-11.538 15.842-18.199l1.086-2.85 31.383-19.404-19.323-9.217zM39.642 253.912l26.941 44.9 33.31-24.982a408.545 408.545 0 0 1-15.92-3.879c-17.352-4.627-32.253-9.928-44.331-16.039zm432.714 0c-12.078 6.11-26.98 11.412-44.332 16.04-6.926 1.846-14.283 3.565-21.949 5.175l38.926 24.377 27.355-45.592zM487 264.492l-17.576 29.293a90.955 90.955 0 0 0 2.209-.97c5.948-2.72 10.255-5.583 12.627-7.944 2.371-2.361 2.74-3.683 2.74-4.871v-15.508zm-462 .002V280c0 1.188.369 2.51 2.74 4.871 2.372 2.361 6.679 5.224 12.627 7.943.712.326 1.45.65 2.207.971L25 264.495zm98.639 14.027l-36.737 27.553c1.874.36 3.74.72 5.674 1.065 21.728 3.862 47.224 6.792 74.612 8.775l-36.143-36.143a573.54 573.54 0 0 1-7.406-1.25zm233.996 4.538c-23.345 2.877-48.603 4.787-75.155 5.552l37.08 27.809 38.075-33.361zm27.261.045l-37.195 32.59c26.286-1.979 50.764-4.83 71.723-8.555 1.011-.18 1.972-.373 2.967-.557l-37.495-23.478zm-224.369.697l32.317 32.316 36.676-27.506c-24.226-.698-47.389-2.342-68.993-4.81zM256 291.25l-36.322 27.242c12.024.332 24.171.508 36.322.508 12.15 0 24.298-.176 36.322-.508L256 291.25zM25 305.121V440c0 5.5 4.3 11.699 16.09 18.436 3.953 2.259 8.63 4.452 13.91 6.554V317.13c-8.28-2.377-15.693-5.007-22.117-7.943-2.813-1.287-5.44-2.63-7.883-4.065zm462 0c-2.443 1.435-5.07 2.778-7.883 4.065-6.424 2.936-13.838 5.566-22.117 7.943V464.99c5.28-2.103 9.957-4.295 13.91-6.554C482.7 451.699 487 445.5 487 440V305.121zM73 321.63v149.488c6.196 1.816 12.868 3.523 19.953 5.098 25.716 5.714 56.789 9.79 90.047 12.2V334.978c-34.264-1.945-66.46-5.297-93.576-10.118A430.035 430.035 0 0 1 73 321.63zm366 0a430.032 430.032 0 0 1-16.424 3.232c-27.115 4.82-59.312 8.173-93.576 10.118v153.435c33.258-2.409 64.331-6.485 90.047-12.2 7.085-1.574 13.757-3.281 19.953-5.097V321.63zM201 335.87v153.684c18.028.96 36.517 1.445 55 1.445 18.483 0 36.972-.485 55-1.445V335.87c-18.053.752-36.52 1.129-55 1.129-18.48 0-36.947-.377-55-1.129z",
                  },
                  child: [],
                },
              ],
            })(e);
          },
        },
        wedding: {
          timeLabel: "As The Stars Appear",
          venueLabel: "Where We Gather",
          icon: function (e) {
            return f({
              tag: "svg",
              attr: { viewBox: "0 0 512 512" },
              child: [
                {
                  tag: "path",
                  attr: {
                    d: "M122.7 23.32l1.7 21.87-16.7 14.25 21.4 5.17 8.4 20.25L149 66.18l21.8-1.75-14.2-16.71 5.1-21.32-20.3 8.35-18.7-11.43zM464 32a16 16 0 0 0-16 16 16 16 0 0 0 16 16 16 16 0 0 0 16-16 16 16 0 0 0-16-16zM239.8 42.5a16 16 0 0 0-16 16 16 16 0 0 0 16 16 16 16 0 0 0 16-16 16 16 0 0 0-16-16zm183.9 6.84c-9.2 1.74-17.7 7.18-25.9 14.28-7.6 6.53-14.7 14.66-20.7 23.45-18.8 3.01-37.6 10.67-50.2 21.13-16.1 13.2-30.4 35.8-38.2 59.1-7.4 3.1-14.4 6.8-20.1 10.8-15.5 10.9-23.5 31.8-29.4 50-5.9 18.3-8.8 34.3-8.8 34.3l17.8 3.2s2.7-15 8.1-31.9c5.5-16.9 14.8-35.3 22.7-40.8 1.3-.9 3-1.9 4.5-2.8-.6 5.7-.6 11.4.3 16.8 1.8 11.4 8 22.3 19 28.2 7.8 4.2 16.6 3.2 24 .2 7.4-3.1 14-8.2 19.7-14.2 5.7-6 10.4-13.1 13.2-20.6 2.8-7.5 3.8-16 .2-23.9h-.1c-3.9-8.4-11.4-13.8-19.4-16.1-8-2.3-16.6-2.2-25.2-.9-1.5.2-2.9.7-4.4 1 7.4-15.8 18-30.7 27.5-38.6 6.2-5.1 16.6-10 27.7-13.6-1.4 3.8-2.5 7.6-3 11.5-1.6 10.5.7 21.9 9.1 29.7 6.1 5.6 14.3 6.5 21.5 5.3 7.1-1.2 14-4.4 20.2-8.5 6.2-4.2 11.7-9.4 15.6-15.5 3.9-6.1 6.5-13.9 4-21.7v-.1c-3.3-10.07-11.5-16.99-20.6-20.27-3.9-1.4-8-2.19-12.2-2.66 2.9-3.26 5.9-6.31 8.9-8.92 6.8-5.84 13.7-9.5 17.6-10.23l-3.4-17.68zM174.8 84.39l-15.2 9.56 34.5 55.25-56.4 2.9 26.5 57.8 16.4-7.6-15.5-33.6 60.6-3.1-50.9-81.21zm216.4 19.31c6.1-.1 11.5.6 15.5 2.1 5.4 1.9 8.1 4.3 9.5 8.8.4 1.1.2 3.3-1.9 6.6-2.2 3.4-6.1 7.2-10.5 10.2-4.5 3-9.5 5.1-13.2 5.7-3.8.7-5.5 0-6.3-.7-3.5-3.2-4.5-7.2-3.5-13.9.8-5.4 3.3-11.9 7-18.6 1.2 0 2.3-.2 3.4-.2zM94.99 123a16 16 0 0 0-16 16 16 16 0 0 0 16 16A16 16 0 0 0 111 139a16 16 0 0 0-16.01-16zm356.11 37.2l-14.4 16.6-21.8-1.8 11.4 18.8-8.5 20.2 21.4-5 16.6 14.3 1.9-21.9 18.7-11.4-20.2-8.5-5.1-21.3zm-123.5 16.5c2.9.1 5.6.5 7.7 1.1 4.3 1.2 6.6 3 8.2 6.4.9 1.9 1 5.4-.7 10-1.7 4.7-5.2 10.1-9.4 14.6s-9.3 8.1-13.5 9.8c-4.2 1.7-6.8 1.6-8.5.7h-.1c-5.8-3.2-8.6-7.8-9.7-15.2-1-6.3-.3-14.3 1.8-22.9 4.9-1.7 9.8-3.1 14.5-3.8 3.5-.5 6.7-.7 9.7-.7zm-202.4 51.9c-7.2-.2-11.7 1.5-14.5 4.3-2.8 2.8-4.5 7.3-4.3 14.5.2 7.3 2.6 16.9 7.2 27.6 9.2 21.5 27.3 47.4 51.6 71.8 24.3 24.3 50.3 42.3 71.8 51.5 10.6 4.6 20.2 7 27.5 7.2 7.3.3 11.7-1.5 14.5-4.3 2.8-2.8 4.6-7.2 4.3-14.5-.2-7.3-2.6-16.9-7.2-27.6-9.2-21.4-27.2-47.4-51.5-71.7-24.3-24.4-50.3-42.4-71.8-51.6-10.7-4.6-20.3-7-27.6-7.2zm232 31.3l-33 54-29.1-27.9-12.4 13 45.1 43.3 33.8-55.2 38.7 32.3 89.3-38.2-7-16.6-79.3 34-46.1-38.7zM93.43 272.6l-17.64 57.9c41.41 49.1 89.71 76.7 142.11 94.7l21.6-6.6c-3.1-1.1-6.4-2.4-9.7-3.8-24.4-10.4-51.7-29.6-77.3-55.3-25.7-25.7-44.9-53-55.34-77.4-1.41-3.2-2.65-6.4-3.73-9.5zm-23.82 78.2l-14.01 46c28.89 27 59 39.2 90.6 50.2l43.4-13.2c-43.2-17.6-84-43.3-119.99-83zM368 352a16 16 0 0 0-16 16 16 16 0 0 0 16 16 16 16 0 0 0 16-16 16 16 0 0 0-16-16zM49.81 415.9l-20.29 66.6 88.28-26.9c-22.77-9.1-45.78-20.7-67.99-39.7z",
                  },
                  child: [],
                },
              ],
            })(e);
          },
        },
      },
      N = "",
      z = "",
      M = "शुभं भवतु",
      C = "+91 81095 15785",
      P = "";
    function O() {
      let e,
        t,
        r,
        a,
        o,
        l,
        c,
        d,
        m,
        h,
        u = (0, i.c)(10);
      if (u[0] === Symbol.for("react.memo_cache_sentinel")) {
        let t;
        ((t = new URLSearchParams({
          text: "Sonali & Sudev Wedding",
          details:
            "You are cordially invited to celebrate the wedding of Dr. Sonali Saluja and Dr. Sudev C.S.",
          location: "The Shlok Garden, Khurai Road, Bina (M.P.) 470113",
          dates: "20261211T200000/20261211T235900",
          ctz: "Asia/Kolkata",
        })),
          (e = `https://calendar.google.com/calendar/render?action=TEMPLATE&${t.toString()}`),
          (u[0] = e));
      } else e = u[0];
      return (
        u[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = { opacity: 0, y: 16 }),
            (r = { opacity: 1, y: 0 }),
            (a = { once: !0 }),
            (u[1] = t),
            (u[2] = r),
            (u[3] = a))
          : ((t = u[1]), (r = u[2]), (a = u[3])),
        u[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = { duration: 1, ease: [0.22, 1, 0.36, 1] }),
            (l = { scale: 0.97 }),
            (u[4] = o),
            (u[5] = l))
          : ((o = u[4]), (l = u[5])),
        u[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = { border: "1px solid var(--color-gold-border-sm)" }),
            (u[6] = c))
          : (c = u[6]),
        u[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, n.jsx)("span", {
            className:
              "absolute inset-0 -translate-x-full -skew-x-12 transition-transform duration-700 ease-out group-hover:translate-x-full",
            style: {
              background:
                "linear-gradient(105deg, transparent 30%, var(--color-gold-shimmer) 50%, transparent 70%)",
            },
          })),
            (u[7] = d))
          : (d = u[7]),
        u[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, n.jsxs)("svg", {
            width: "13",
            height: "13",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "var(--color-gold-ink)",
            strokeWidth: "1.6",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className:
              "relative shrink-0 transition-colors duration-300 group-hover:stroke-gold-light",
            children: [
              (0, n.jsx)("rect", {
                x: "3",
                y: "4",
                width: "18",
                height: "18",
                rx: "2",
                ry: "2",
              }),
              (0, n.jsx)("line", { x1: "16", y1: "2", x2: "16", y2: "6" }),
              (0, n.jsx)("line", { x1: "8", y1: "2", x2: "8", y2: "6" }),
              (0, n.jsx)("line", { x1: "3", y1: "10", x2: "21", y2: "10" }),
            ],
          })),
            (u[8] = m))
          : (m = u[8]),
        u[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = (0, n.jsxs)(s.motion.a, {
            href: e,
            target: "_blank",
            rel: "noopener noreferrer",
            initial: t,
            whileInView: r,
            viewport: a,
            transition: o,
            whileTap: l,
            className:
              "group relative inline-flex items-center gap-3 overflow-hidden px-8 py-3.5",
            style: c,
            children: [
              d,
              m,
              (0, n.jsx)("span", {
                className: "relative font-cinzel uppercase tracking-[0.42em]",
                style: {
                  fontSize: "clamp(0.65rem, 1.8vw, 0.58rem)",
                  opacity: 0.9,
                  color: "var(--color-gold-ink)",
                },
                children: "Add To Calendar",
              }),
            ],
          })),
            (u[9] = h))
          : (h = u[9]),
        h
      );
    }
    var E = e.i(88653),
      T = l,
      I = e.i(81298);
    function $(e, t) {
      return e + Math.random() * (t - e);
    }
    (((t = a || (a = {}))[(t.Circle = 0)] = "Circle"),
      (t[(t.Square = 1)] = "Square"),
      (t[(t.Strip = 2)] = "Strip"),
      ((r = o || (o = {}))[(r.Positive = 1)] = "Positive"),
      (r[(r.Negative = -1)] = "Negative"));
    let L = 1e3 / 60;
    class R {
      constructor(e, t, r, a) {
        this.getOptions = t;
        const {
          colors: n,
          initialVelocityX: i,
          initialVelocityY: l,
        } = this.getOptions();
        ((this.context = e),
          (this.x = r),
          (this.y = a),
          (this.w = $(5, 20)),
          (this.h = $(5, 20)),
          (this.radius = $(5, 10)),
          (this.vx = "number" == typeof i ? $(-i, i) : $(i.min, i.max)),
          (this.vy = "number" == typeof l ? $(-l, 0) : $(l.min, l.max)),
          (this.shape = Math.floor(0 + 3 * Math.random())),
          (this.angle = (function (e) {
            return (e * Math.PI) / 180;
          })($(0, 360))),
          (this.angularSpin = $(-0.2, 0.2)),
          (this.color = n[Math.floor(Math.random() * n.length)]),
          (this.rotateY = $(0, 1)),
          (this.rotationDirection = $(0, 1) ? o.Positive : o.Negative));
      }
      update(e) {
        let {
          gravity: t,
          wind: r,
          friction: n,
          opacity: i,
          drawShape: l,
        } = this.getOptions(),
          s = e / L;
        ((this.x += this.vx * s),
          (this.y += this.vy * s),
          (this.vy += t * s),
          (this.vx += r * s),
          (this.vx *= n ** s),
          (this.vy *= n ** s),
          this.rotateY >= 1 && this.rotationDirection === o.Positive
            ? (this.rotationDirection = o.Negative)
            : this.rotateY <= -1 &&
            this.rotationDirection === o.Negative &&
            (this.rotationDirection = o.Positive));
        let c = 0.1 * this.rotationDirection * s;
        if (
          ((this.rotateY += c),
            (this.angle += this.angularSpin),
            this.context.save(),
            this.context.translate(this.x, this.y),
            this.context.rotate(this.angle),
            this.context.scale(1, this.rotateY),
            this.context.rotate(this.angle),
            this.context.beginPath(),
            (this.context.fillStyle = this.color),
            (this.context.strokeStyle = this.color),
            (this.context.globalAlpha = i),
            (this.context.lineCap = "round"),
            (this.context.lineWidth = 2),
            l && "function" == typeof l)
        )
          l.call(this, this.context);
        else
          switch (this.shape) {
            case a.Circle:
              (this.context.beginPath(),
                this.context.arc(0, 0, this.radius, 0, 2 * Math.PI),
                this.context.fill());
              break;
            case a.Square:
              this.context.fillRect(-this.w / 2, -this.h / 2, this.w, this.h);
              break;
            case a.Strip:
              this.context.fillRect(
                -this.w / 6,
                -this.h / 2,
                this.w / 3,
                this.h,
              );
          }
        (this.context.closePath(), this.context.restore());
      }
    }
    class A {
      constructor(e, t) {
        ((this.x = 0),
          (this.y = 0),
          (this.w = 0),
          (this.h = 0),
          (this.lastNumberOfPieces = 0),
          (this.tweenProgress = 0),
          (this.tweenFrom = 0),
          (this.particles = []),
          (this.particlesGenerated = 0),
          (this.removeParticleAt = (e) => {
            this.particles.splice(e, 1);
          }),
          (this.getParticle = () => {
            let e = $(this.x, this.w + this.x),
              t = $(this.y, this.h + this.y);
            return new R(this.context, this.getOptions, e, t);
          }),
          (this.animate = (e) => {
            let {
              canvas: t,
              context: r,
              particlesGenerated: a,
              lastNumberOfPieces: o,
            } = this,
              {
                run: n,
                recycle: i,
                numberOfPieces: l,
                debug: s,
                tweenFunction: c,
                tweenDuration: d,
              } = this.getOptions();
            if (!n) return !1;
            let m = this.particles.length,
              h = i ? m : a;
            if (h < l) {
              (o !== l &&
                ((this.tweenProgress = 0),
                  (this.tweenFrom = h),
                  (this.lastNumberOfPieces = l)),
                (this.tweenProgress = Math.min(
                  d,
                  Math.max(0, this.tweenProgress + e),
                )));
              let t = Math.round(
                c(this.tweenProgress, this.tweenFrom, l, d) - h,
              );
              for (let e = 0; e < t; e++)
                this.particles.push(this.getParticle());
              this.particlesGenerated += t;
            }
            s &&
              ((r.font = "12px sans-serif"),
                (r.fillStyle = "#333"),
                (r.textAlign = "right"),
                r.fillText(`Particles: ${m}`, t.width - 10, t.height - 20));
            for (let r = this.particles.length - 1; r >= 0; r--) {
              let a = this.particles[r];
              (a.update(e),
                (a.y > t.height ||
                  a.y < -100 ||
                  a.x > t.width + 100 ||
                  a.x < -100) &&
                (i && h <= l
                  ? (this.particles[r] = this.getParticle())
                  : this.removeParticleAt(r)));
            }
            return m > 0 || h < l;
          }),
          (this.canvas = e));
        const r = this.canvas.getContext("2d");
        if (!r) throw Error("Could not get canvas context");
        ((this.context = r), (this.getOptions = t));
      }
    }
    let F = {
      width: "u" > typeof window ? window.innerWidth : 300,
      height: "u" > typeof window ? window.innerHeight : 200,
      numberOfPieces: 200,
      friction: 0.99,
      wind: 0,
      gravity: 0.1,
      initialVelocityX: 4,
      initialVelocityY: 10,
      colors: [
        "#f44336",
        "#e91e63",
        "#9c27b0",
        "#673ab7",
        "#3f51b5",
        "#2196f3",
        "#03a9f4",
        "#00bcd4",
        "#009688",
        "#4CAF50",
        "#8BC34A",
        "#CDDC39",
        "#FFEB3B",
        "#FFC107",
        "#FF9800",
        "#FF5722",
        "#795548",
      ],
      opacity: 1,
      debug: !1,
      tweenFunction: I.easeInOutQuad,
      tweenDuration: 5e3,
      recycle: !0,
      run: !0,
    };
    class D {
      constructor(e, t) {
        ((this.lastFrameTime = 0),
          (this.setOptionsWithDefaults = (e) => {
            let t = {
              confettiSource: { x: 0, y: 0, w: this.canvas.width, h: 0 },
            };
            ((this._options = { ...t, ...F, ...e }),
              Object.assign(this, e.confettiSource));
          }),
          (this.update = (e = 0) => {
            let {
              options: { run: t, onConfettiComplete: r, frameRate: a },
              canvas: o,
              context: n,
            } = this,
              i = Math.min(e - this.lastFrameTime, 50);
            if (a && i < 1e3 / a) {
              this.rafId = requestAnimationFrame(this.update);
              return;
            }
            ((this.lastFrameTime = e - (a ? i % a : 0)),
              t &&
              ((n.fillStyle = "white"), n.clearRect(0, 0, o.width, o.height)),
              this.generator.animate(i)
                ? (this.rafId = requestAnimationFrame(this.update))
                : (r &&
                  "function" == typeof r &&
                  this.generator.particlesGenerated > 0 &&
                  r.call(this, this),
                  (this._options.run = !1)));
          }),
          (this.reset = () => {
            this.generator &&
              this.generator.particlesGenerated > 0 &&
              ((this.generator.particlesGenerated = 0),
                (this.generator.particles = []),
                (this.generator.lastNumberOfPieces = 0));
          }),
          (this.stop = () => {
            ((this.options = { run: !1 }),
              this.rafId &&
              (cancelAnimationFrame(this.rafId), (this.rafId = void 0)));
          }),
          (this.canvas = e));
        const r = this.canvas.getContext("2d");
        if (!r) throw Error("Could not get canvas context");
        ((this.context = r),
          (this.generator = new A(this.canvas, () => this.options)),
          (this.options = t),
          this.update());
      }
      get options() {
        return this._options;
      }
      set options(e) {
        let t = this._options?.run,
          r = this._options?.recycle;
        (this.setOptionsWithDefaults(e),
          this.generator &&
          (Object.assign(this.generator, this.options.confettiSource),
            "boolean" == typeof e.recycle &&
            e.recycle &&
            !1 === r &&
            (this.generator.lastNumberOfPieces =
              this.generator.particles.length)),
          "boolean" == typeof e.run && e.run && !1 === t && this.update());
      }
    }
    let B = T.default.createRef();
    class q extends T.default.Component {
      constructor(e) {
        (super(e),
          (this.canvas = T.default.createRef()),
          (this.canvas = e.canvasRef || B));
      }
      componentDidMount() {
        if (this.canvas.current) {
          let e = H(this.props)[0];
          this.confetti = new D(this.canvas.current, e);
        }
      }
      componentDidUpdate() {
        let e = H(this.props)[0];
        this.confetti && (this.confetti.options = e);
      }
      componentWillUnmount() {
        (this.confetti && this.confetti.stop(), (this.confetti = void 0));
      }
      render() {
        let [e, t] = H(this.props),
          r = {
            zIndex: 2,
            position: "absolute",
            pointerEvents: "none",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            ...t.style,
          };
        return (0, n.jsx)("canvas", {
          width: e.width,
          height: e.height,
          ref: this.canvas,
          ...t,
          style: r,
        });
      }
    }
    function H(e) {
      let t = {},
        r = {},
        a = [
          ...Object.keys(F),
          "confettiSource",
          "drawShape",
          "onConfettiComplete",
          "frameRate",
        ],
        o = ["canvasRef"];
      for (let n in e) {
        let i = e[n];
        a.includes(n) ? (t[n] = i) : o.includes(n) ? (o[n] = i) : (r[n] = i);
      }
      return [t, r, {}];
    }
    ((q.defaultProps = { ...F }), (q.displayName = "ReactConfetti"));
    let V = T.default.forwardRef((e, t) =>
      (0, n.jsx)(q, { canvasRef: t, ...e }),
    ),
      W = {
        eyebrow: "",
        topText: "",
        bottomText: "",
        scratchIntro: "",
        scratchInstruction: "Go on... reveal the date of our special day ✨",
        scratchHeartLabel: "Scratch to reveal",
        scratchAriaLabel: "",
        revealDate: "11 dec 2026",
        revealDay: "Friday",
        scratchBrushSize: 50,
      };
    function U(e, t) {
      return (
        getComputedStyle(document.documentElement).getPropertyValue(e).trim() ||
        t
      );
    }
    function G(e, t) {
      let r = document.createElement("div");
      ((r.style.color = e), document.body.appendChild(r));
      let a = getComputedStyle(r).color;
      return (document.body.removeChild(r), a && "" !== a ? a : t);
    }
    function J(e) {
      let t,
        r,
        a,
        o = (0, i.c)(5),
        { onRevealed: s, onProgress: c } = e,
        d = (0, l.useRef)(null),
        m = (0, l.useRef)(!1),
        h = (0, l.useRef)(!1),
        u = (0, l.useRef)(0),
        p = (0, l.useRef)(!1),
        f = X;
      return (
        o[0] !== c || o[1] !== s
          ? ((t = () => {
            let e = d.current;
            if (!e) return;
            let t = e.getContext("2d");
            if (!t) return void s();
            let r = e.width,
              a = e.height,
              o = getComputedStyle(document.documentElement),
              n = o.getPropertyValue("--color-scratch-1").trim(),
              i = o.getPropertyValue("--color-scratch-2").trim(),
              l = o.getPropertyValue("--color-scratch-3").trim(),
              g = o.getPropertyValue("--color-scratch-4").trim(),
              y = o.getPropertyValue("--color-scratch-sparkle").trim(),
              v = document.createElement("canvas");
            ((v.width = r), (v.height = a));
            let x = v.getContext("2d"),
              b = x.createLinearGradient(0, 0, r, a);
            (b.addColorStop(0, n),
              b.addColorStop(0.35, i),
              b.addColorStop(0.65, l),
              b.addColorStop(1, g),
              (x.fillStyle = b),
              x.fillRect(0, 0, r, a));
            for (let e = 0; e < 130; e++) {
              let e = Math.random() * r,
                t = Math.random() * a,
                o = 1.4 * Math.random() + 0.3;
              (x.beginPath(),
                x.arc(e, t, o, 0, 2 * Math.PI),
                (x.fillStyle = y),
                (x.globalAlpha = 0.6 * Math.random() + 0.2),
                x.fill(),
                (x.globalAlpha = 1));
            }
            for (let e = 0; e < 10; e++) {
              var w;
              let e = Math.random() * r,
                t = Math.random() * a;
              ((w = 4 * Math.random() + 3),
                x.save(),
                x.translate(e, t),
                x.beginPath(),
                x.moveTo(0, -w),
                x.lineTo(0.25 * w, -(0.25 * w)),
                x.lineTo(w, 0),
                x.lineTo(0.25 * w, 0.25 * w),
                x.lineTo(0, w),
                x.lineTo(-(0.25 * w), 0.25 * w),
                x.lineTo(-w, 0),
                x.lineTo(-(0.25 * w), -(0.25 * w)),
                x.closePath(),
                (x.fillStyle = y),
                x.fill(),
                x.restore());
            }
            t.drawImage(v, 0, 0);
            let _ = (o) => {
              let n, i, l, d, p;
              if (!m.current || h.current) return;
              o.cancelable && o.preventDefault();
              let { x: g, y } =
                ((n = e.getBoundingClientRect()),
                  (i = e.width / n.width),
                  (l = e.height / n.height),
                  (d = o.touches ? o.touches[0].clientX : o.clientX),
                  (p = o.touches ? o.touches[0].clientY : o.clientY),
                  { x: (d - n.left) * i, y: (p - n.top) * l });
              ((t.globalCompositeOperation = "destination-out"),
                t.beginPath(),
                t.arc(g, y, W.scratchBrushSize, 0, 2 * Math.PI),
                t.fill(),
                ((o) => {
                  if (h.current || o - u.current < 90) return;
                  u.current = o;
                  let n = f(e, t);
                  (c?.(n),
                    n > 55 &&
                    ((h.current = !0), t.clearRect(0, 0, r, a), s()));
                })(performance.now()));
            },
              j = (e) => {
                ((m.current = !0),
                  p.current ||
                  ((p.current = !0),
                    window.dispatchEvent(new Event("app:prime-music"))),
                  _(e));
              },
              S = () => (m.current = !1);
            return (
              e.addEventListener("mousedown", j),
              e.addEventListener("mouseup", S),
              e.addEventListener("mouseleave", S),
              e.addEventListener("mousemove", _),
              e.addEventListener("touchstart", j, { passive: !1 }),
              e.addEventListener("touchend", S),
              e.addEventListener("touchmove", _, { passive: !1 }),
              () => {
                (e.removeEventListener("mousedown", j),
                  e.removeEventListener("mouseup", S),
                  e.removeEventListener("mouseleave", S),
                  e.removeEventListener("mousemove", _),
                  e.removeEventListener("touchstart", j),
                  e.removeEventListener("touchend", S),
                  e.removeEventListener("touchmove", _));
              }
            );
          }),
            (r = [s, c, f]),
            (o[0] = c),
            (o[1] = s),
            (o[2] = t),
            (o[3] = r))
          : ((t = o[2]), (r = o[3])),
        (0, l.useEffect)(t, r),
        o[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, n.jsx)("canvas", {
            ref: d,
            width: 340,
            height: 340,
            className:
              "block w-full h-full cursor-crosshair touch-none rounded-full",
            role: "button",
            "aria-label": W.scratchAriaLabel,
          })),
            (o[4] = a))
          : (a = o[4]),
        a
      );
    }
    function X(e, t) {
      let { data: r } = t.getImageData(0, 0, e.width, e.height),
        a = 0;
      for (let e = 3; e < r.length; e += 4) r[e] < 128 && a++;
      return (a / (e.width * e.height)) * 100;
    }
    function Y(e) {
      let t,
        r,
        a,
        o,
        l,
        c,
        d,
        m,
        h = (0, i.c)(10),
        { hidden: u } = e,
        p = +!u;
      return (
        h[0] !== p
          ? ((t = { opacity: p, transition: "opacity 0.35s ease-out" }),
            (h[0] = p),
            (h[1] = t))
          : (t = h[1]),
        h[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, n.jsx)(v, {
            size: 12,
            style: { color: "rgba(250,238,215,0.9)" },
          })),
            (h[2] = r))
          : (r = h[2]),
        h[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = { opacity: 0 }),
            (o = { opacity: [0.55, 1, 0.55] }),
            (l = {
              opacity: { duration: 2.2, repeat: 1 / 0, ease: "easeInOut" },
            }),
            (h[3] = a),
            (h[4] = o),
            (h[5] = l))
          : ((a = h[3]), (o = h[4]), (l = h[5])),
        h[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, n.jsx)(s.motion.span, {
            initial: a,
            animate: o,
            transition: l,
            className:
              "font-accent text-[0.72rem] tracking-[0.18em] uppercase text-center",
            style: {
              color: "rgba(250,238,215,0.95)",
              textShadow: "0 1px 4px rgba(0,0,0,0.4)",
              maxWidth: "11rem",
              lineHeight: 1.5,
            },
            children: W.scratchHeartLabel,
          })),
            (h[6] = c))
          : (c = h[6]),
        h[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, n.jsx)(v, {
            size: 12,
            style: { color: "rgba(250,238,215,0.9)" },
          })),
            (h[7] = d))
          : (d = h[7]),
        h[8] !== t
          ? ((m = (0, n.jsxs)("div", {
            className:
              "absolute inset-0 flex flex-col items-center justify-center gap-1.5 px-14 pointer-events-none",
            style: t,
            children: [r, c, d],
          })),
            (h[8] = t),
            (h[9] = m))
          : (m = h[9]),
        m
      );
    }
    function Q(e) {
      let t,
        r = (0, i.c)(4),
        { phase: a, progress: o } = e;
      if ("scratch" === a) {
        let e;
        if (o < 10) {
          let e;
          return (
            r[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, n.jsx)(n.Fragment, {
                children: W.scratchInstruction,
              })),
                (r[0] = e))
              : (e = r[0]),
            e
          );
        }
        if (o < 30) {
          let e;
          return (
            r[1] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, n.jsx)(n.Fragment, { children: "Keep going..." })),
                (r[1] = e))
              : (e = r[1]),
            e
          );
        }
        return (
          r[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)(n.Fragment, { children: "Almost there..." })),
              (r[2] = e))
            : (e = r[2]),
          e
        );
      }
      return (
        r[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, n.jsx)(n.Fragment, { children: "SAVE THE DATE" })),
            (r[3] = t))
          : (t = r[3]),
        t
      );
    }
    let K = [
      { top: "10%", left: "78%", size: "0.7rem", once: !1 },
      { top: "72%", left: "86%", size: "0.5rem", once: !0 },
      { top: "84%", left: "22%", size: "0.85rem", once: !1 },
      { top: "14%", left: "8%", size: "0.55rem", once: !0 },
    ];
    function Z(e) {
      let t,
        r,
        a,
        o,
        s,
        c = (0, i.c)(8),
        { show: d } = e;
      c[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = []), (c[0] = t))
        : (t = c[0]);
      let [m, h] = (0, l.useState)(t);
      return (c[1] !== d
        ? ((r = () => {
          if (!d) return void h([]);
          let e = [
            U("--color-rose-accent", "#b85c7a"),
            U("--color-gold-light", "#e0ad3c"),
            G(
              "color-mix(in srgb, var(--color-rose-accent) 55%, white)",
              "#d6a3b5",
            ),
          ];
          h(
            Array.from({ length: 9 }).map((t, r) => ({
              id: r,
              left: 8 + 84 * Math.random(),
              delay: 0.55 * r + 0.25 * Math.random(),
              duration: 7 + 2 * Math.random(),
              color: e[r % e.length],
            })),
          );
        }),
          (a = [d]),
          (c[1] = d),
          (c[2] = r),
          (c[3] = a))
        : ((r = c[2]), (a = c[3])),
        (0, l.useEffect)(r, a),
        0 === m.length)
        ? null
        : (c[4] !== m ? ((o = m.map(ee)), (c[4] = m), (c[5] = o)) : (o = c[5]),
          c[6] !== o
            ? ((s = (0, n.jsx)("div", {
              className:
                "pointer-events-none absolute inset-0 z-40 overflow-hidden",
              "aria-hidden": "true",
              children: o,
            })),
              (c[6] = o),
              (c[7] = s))
            : (s = c[7]),
          s);
    }
    function ee(e) {
      return (0, n.jsx)(
        s.motion.div,
        {
          className: "absolute bottom-0",
          style: { left: `${e.left}%` },
          initial: { y: 80, opacity: 0 },
          animate: { y: "-130%", opacity: [0, 1, 1, 0] },
          transition: { duration: e.duration, delay: e.delay, ease: "easeOut" },
          children: (0, n.jsxs)("svg", {
            width: "26",
            height: "36",
            viewBox: "0 0 30 42",
            children: [
              (0, n.jsx)("ellipse", {
                cx: "15",
                cy: "15",
                rx: "14",
                ry: "15",
                fill: e.color,
                opacity: "0.85",
              }),
              (0, n.jsx)("path", {
                d: "M15 30 L15 40",
                stroke: e.color,
                strokeWidth: "1",
                opacity: "0.5",
                fill: "none",
              }),
              (0, n.jsx)("path", {
                d: "M13 30 L15 33 L17 30 Z",
                fill: e.color,
                opacity: "0.85",
              }),
            ],
          }),
        },
        e.id,
      );
    }
    let et = ["🌸", "🌺", "🪷", "🌹", "💮", "🌼", "🌷"];
    function er(e) {
      let t,
        r,
        a,
        o,
        s,
        c = (0, i.c)(8),
        { show: d } = e;
      c[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = []), (c[0] = t))
        : (t = c[0]);
      let [m, h] = (0, l.useState)(t);
      return (c[1] !== d
        ? ((r = () => {
          if (!d) return void h([]);
          let e = eo;
          h(e(24, "w0"));
          let t = setTimeout(() => h((t) => [...t, ...e(20, "w1")]), 700),
            r = setTimeout(() => h((t) => [...t, ...e(14, "w2")]), 1600);
          return () => {
            (clearTimeout(t), clearTimeout(r));
          };
        }),
          (a = [d]),
          (c[1] = d),
          (c[2] = r),
          (c[3] = a))
        : ((r = c[2]), (a = c[3])),
        (0, l.useEffect)(r, a),
        0 === m.length)
        ? null
        : (c[4] !== m ? ((o = m.map(ea)), (c[4] = m), (c[5] = o)) : (o = c[5]),
          c[6] !== o
            ? ((s = (0, n.jsx)("div", {
              className:
                "pointer-events-none fixed inset-0 z-9999 overflow-hidden",
              "aria-hidden": "true",
              children: o,
            })),
              (c[6] = o),
              (c[7] = s))
            : (s = c[7]),
          s);
    }
    function ea(e) {
      return (0, n.jsx)(
        s.motion.span,
        {
          className: "absolute select-none leading-none",
          style: { left: `${e.left}vw`, top: "-30px", fontSize: e.size },
          initial: { y: 0, opacity: 0, scale: 0.6, rotate: 0 },
          animate: {
            y: "105vh",
            opacity: [0, 1, 1, 0.9, 0],
            scale: 1.1,
            rotate: e.spin,
          },
          transition: { duration: e.duration, delay: e.delay, ease: "linear" },
          children: e.emoji,
        },
        e.id,
      );
    }
    function eo(e, t) {
      return Array.from({ length: e }).map((e, r) => ({
        id: `${t}-${r}`,
        emoji: et[Math.floor(Math.random() * et.length)],
        left: 100 * Math.random(),
        size: 14 + 16 * Math.random(),
        duration: 2.8 + 2.6 * Math.random(),
        delay: 1.6 * Math.random(),
        spin: 480 + 480 * Math.random(),
      }));
    }
    function en(e) {
      let t,
        r,
        a,
        o,
        l,
        c,
        d,
        m,
        h,
        u,
        p,
        f,
        g,
        y,
        v,
        x,
        b,
        w,
        _,
        j,
        S,
        k = (0, i.c)(45),
        { children: N, revealed: z, config: M } = e;
      (k[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = {
          background:
            "radial-gradient(circle, var(--color-rose-glow), transparent 65%)",
          filter: "blur(28px)",
        }),
          (k[0] = t))
        : (t = k[0]),
        k[1] !== z
          ? ((r = z ? { opacity: [0.25, 0.4, 0.25] } : { opacity: 0.1 }),
            (k[1] = z),
            (k[2] = r))
          : (r = k[2]));
      let C = z ? 1 / 0 : 0;
      (k[3] !== C
        ? ((a = { repeat: C, duration: 3.4, ease: "easeInOut" }),
          (k[3] = C),
          (k[4] = a))
        : (a = k[4]),
        k[5] !== r || k[6] !== a
          ? ((o = (0, n.jsx)(s.motion.div, {
            className: "absolute inset-0 pointer-events-none",
            style: t,
            animate: r,
            transition: a,
          })),
            (k[5] = r),
            (k[6] = a),
            (k[7] = o))
          : (o = k[7]),
        k[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = {
            clipPath:
              "path('M 170 330 C 170 330 20 225 20 120 C 20 60 65 20 115 20 C 148 20 165 38 170 58 C 175 38 192 20 225 20 C 275 20 320 60 320 120 C 320 225 170 330 170 330 Z')",
          }),
            (k[8] = l))
          : (l = k[8]),
        k[9] !== z
          ? ((c = z && K.map(ei)), (k[9] = z), (k[10] = c))
          : (c = k[10]));
      let P = z
        ? "inset 0 0 0 1px var(--color-gold-media-border), inset 0 0 18px var(--color-rose-glow)"
        : "inset 0 0 0 1px var(--color-gold-border-md)";
      k[11] !== P
        ? ((d = (0, n.jsx)("div", {
          className: "absolute inset-0 pointer-events-none",
          style: { boxShadow: P },
        })),
          (k[11] = P),
          (k[12] = d))
        : (d = k[12]);
      let O = z
        ? "linear-gradient(155deg, color-mix(in srgb, var(--color-rose-accent) 65%, black) 0%, var(--color-rose-accent) 55%, color-mix(in srgb, var(--color-gold-light) 55%, white) 100%)"
        : "linear-gradient(155deg, color-mix(in srgb, var(--color-rose-accent) 55%, black) 0%, color-mix(in srgb, var(--color-rose-accent) 80%, black) 100%)";
      return (
        k[13] !== O
          ? ((m = { background: O }), (k[13] = O), (k[14] = m))
          : (m = k[14]),
        k[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = { opacity: 1 }),
            (u = { duration: 0.6 }),
            (k[15] = h),
            (k[16] = u))
          : ((h = k[15]), (u = k[16])),
        k[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, n.jsx)("div", {
            className: "absolute inset-0 pointer-events-none",
            style: {
              background:
                "radial-gradient(ellipse at 32% 24%, rgba(255,248,238,0.28) 0%, transparent 55%)",
            },
          })),
            (k[17] = p))
          : (p = k[17]),
        k[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = { color: "rgba(253, 246, 232, 0.92)", fontSize: "1.2rem" }),
            (k[18] = f))
          : (f = k[18]),
        k[19] !== M.topText
          ? ((g = (0, n.jsx)("p", {
            className: "relative font-serif italic",
            style: f,
            children: M.topText,
          })),
            (k[19] = M.topText),
            (k[20] = g))
          : (g = k[20]),
        k[21] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = { color: "rgba(253, 246, 232, 0.75)", fontSize: "0.85rem" }),
            (k[21] = y))
          : (y = k[21]),
        k[22] !== M.bottomText
          ? ((v = (0, n.jsx)("p", {
            className: "relative font-serif italic tracking-wide",
            style: y,
            children: M.bottomText,
          })),
            (k[22] = M.bottomText),
            (k[23] = v))
          : (v = k[23]),
        k[24] !== M.revealDate || k[25] !== M.revealDay || k[26] !== z
          ? ((x =
            z &&
            (0, n.jsxs)(
              s.motion.div,
              {
                className: "relative flex flex-col items-center gap-0.5 mt-1",
                initial: { opacity: 0, y: 8, scale: 0.9 },
                animate: { opacity: 1, y: 0, scale: 1 },
                transition: { duration: 0.6, ease: "easeOut", delay: 0.15 },
                children: [
                  (0, n.jsx)("p", {
                    className:
                      "font-accent uppercase tracking-[0.35em] font-semibold",
                    style: {
                      fontSize: "1rem",
                      color: "rgba(253, 246, 232, 0.85)",
                      textShadow: "0 1px 4px rgba(0,0,0,0.35)",
                    },
                    children: M.revealDay,
                  }),
                  (0, n.jsx)("p", {
                    className:
                      "font-semibold italic tracking-wide text-center",
                    style: {
                      color: "var(--color-gold-light)",
                      fontSize: "1.6rem",
                      textShadow: "0 1px 6px rgba(0,0,0,0.35)",
                    },
                    children: M.revealDate,
                  }),
                ],
              },
              "reveal-block",
            )),
            (k[24] = M.revealDate),
            (k[25] = M.revealDay),
            (k[26] = z),
            (k[27] = x))
          : (x = k[27]),
        k[28] !== x
          ? ((b = (0, n.jsx)(E.AnimatePresence, { children: x })),
            (k[28] = x),
            (k[29] = b))
          : (b = k[29]),
        k[30] !== m || k[31] !== g || k[32] !== v || k[33] !== b
          ? ((w = (0, n.jsxs)(s.motion.div, {
            className:
              "absolute inset-0 flex flex-col items-center justify-center gap-2 pb-12 md:pb-24",
            style: m,
            animate: h,
            transition: u,
            children: [p, g, v, b],
          })),
            (k[30] = m),
            (k[31] = g),
            (k[32] = v),
            (k[33] = b),
            (k[34] = w))
          : (w = k[34]),
        k[35] !== N
          ? ((_ = (0, n.jsx)("div", {
            className: "absolute inset-0 z-10",
            children: N,
          })),
            (k[35] = N),
            (k[36] = _))
          : (_ = k[36]),
        k[37] !== w || k[38] !== _ || k[39] !== c || k[40] !== d
          ? ((j = (0, n.jsxs)("div", {
            className: "absolute inset-0",
            style: l,
            children: [c, d, w, _],
          })),
            (k[37] = w),
            (k[38] = _),
            (k[39] = c),
            (k[40] = d),
            (k[41] = j))
          : (j = k[41]),
        k[42] !== j || k[43] !== o
          ? ((S = (0, n.jsxs)("div", {
            className:
              "relative flex items-center justify-center w-full h-full aspect-square",
            children: [o, j],
          })),
            (k[42] = j),
            (k[43] = o),
            (k[44] = S))
          : (S = k[44]),
        S
      );
    }
    function ei(e, t) {
      return (0, n.jsx)(
        s.motion.span,
        {
          className: "absolute pointer-events-none select-none",
          style: {
            top: e.top,
            left: e.left,
            fontSize: e.size,
            color: "var(--color-gold-light)",
            filter: "drop-shadow(0 0 3px var(--color-rose-glow))",
          },
          initial: { opacity: 0, scale: 0.3 },
          animate: e.once
            ? { opacity: [0, 0.75, 0], scale: [0.3, 1, 0.6] }
            : { opacity: [0, 0.6, 0], scale: [0.4, 0.9, 0.4] },
          transition: {
            repeat: e.once ? 0 : 1 / 0,
            duration: 3.2 + 0.5 * t,
            delay: 0.4 + 0.6 * t,
            ease: "easeInOut",
          },
          children: (0, n.jsx)(v, {}),
        },
        t,
      );
    }
    function el(e) {
      let t,
        r,
        a,
        o,
        c,
        d,
        m,
        h,
        u,
        p,
        f,
        g,
        y,
        v,
        x,
        b,
        w,
        _,
        j,
        S,
        k,
        N,
        z,
        M,
        C,
        P,
        O,
        E,
        T = (0, i.c)(56),
        { onOpen: I } = e,
        [$, L] = (0, l.useState)("scratch"),
        [R, A] = (0, l.useState)(!1);
      T[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = { width: 0, height: 0 }), (T[0] = t))
        : (t = T[0]);
      let [F, D] = (0, l.useState)(t);
      T[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = ["#e0ad3c", "#b85c7a"]), (T[1] = r))
        : (r = T[1]);
      let [B, q] = (0, l.useState)(r),
        [H, X] = (0, l.useState)(0),
        [K, ee] = (0, l.useState)(!1),
        [et, ea] = (0, l.useState)(0),
        [eo, ei] = (0, l.useState)(!1),
        [el, es] = (0, l.useState)(!1),
        ec = (0, l.useRef)(null);
      T[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = []), (T[2] = a))
        : (a = T[2]);
      let ed = (0, l.useRef)(a);
      (T[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((o = () => {
          A(!0);
          let e = () => {
            let e = ec.current;
            if (!e) return;
            let t = e.getBoundingClientRect();
            D({ width: t.width, height: t.height });
          };
          return (
            e(),
            q([
              G(
                "color-mix(in srgb, var(--color-rose-accent) 40%, black)",
                "#6e3a4c",
              ),
              U("--color-rose-accent", "#b85c7a"),
              G(
                "color-mix(in srgb, var(--color-rose-accent) 60%, white)",
                "#d999ac",
              ),
              G(
                "color-mix(in srgb, var(--color-rose-accent) 30%, white)",
                "#e8c3ce",
              ),
              G(
                "color-mix(in srgb, var(--color-gold-light) 50%, white)",
                "#f0d9a8",
              ),
              U("--color-gold-light", "#e0ad3c"),
              U("--color-dark2", "#faeed7"),
              G(
                "color-mix(in srgb, var(--color-gold-light) 50%, var(--color-rose-accent))",
                "#d99a5f",
              ),
            ]),
            window.addEventListener("resize", e),
            () => {
              (window.removeEventListener("resize", e),
                ed.current.forEach(clearTimeout),
                (ed.current = []));
            }
          );
        }),
          (c = []),
          (T[3] = o),
          (T[4] = c))
        : ((o = T[3]), (c = T[4])),
        (0, l.useEffect)(o, c),
        T[5] !== I
          ? ((d = () => {
            (L("revealed"),
              window.dispatchEvent(new Event("app:start-music")),
              I?.(),
              es(!0));
            let e = (e, t) => {
              let r = setTimeout(e, t);
              return (ed.current.push(r), r);
            };
            (e(() => {
              (L("celebration"), ee(!0), ei(!0), ea(140));
            }, 1200),
              e(() => ea(220), 2e3),
              e(() => ei(!1), 8e3),
              e(() => ee(!1), 1e4),
              e(() => es(!1), 7200));
          }),
            (T[5] = I),
            (T[6] = d))
          : (d = T[6]));
      let em = d;
      if (!R) return null;
      let eh = "scratch" !== $,
        eu = "celebration" === $;
      T[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = { ...W }), (T[7] = m))
        : (m = T[7]);
      let ep = m;
      (T[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = (0, n.jsxs)("div", {
          className: "pointer-events-none absolute inset-0 overflow-hidden",
          "aria-hidden": "true",
          children: [
            (0, n.jsx)("div", {
              className:
                "pg-blob pg-blob-1 absolute -top-32 -left-32 size-96 rounded-full blur-3xl opacity-60",
            }),
            (0, n.jsx)("div", {
              className:
                "pg-blob pg-blob-2 absolute -bottom-32 -right-32 size-96 rounded-full blur-3xl opacity-60",
            }),
          ],
        })),
          (T[8] = h))
        : (h = T[8]),
        T[9] !== K || T[10] !== B || T[11] !== et || T[12] !== eo || T[13] !== F
          ? ((u =
            K &&
            (0, n.jsx)(V, {
              width: F.width,
              height: F.height,
              numberOfPieces: et,
              recycle: eo,
              gravity: 0.16,
              colors: B,
              style: {
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 50,
                pointerEvents: "none",
              },
            })),
            (T[9] = K),
            (T[10] = B),
            (T[11] = et),
            (T[12] = eo),
            (T[13] = F),
            (T[14] = u))
          : (u = T[14]),
        T[15] !== eu
          ? ((p = (0, n.jsx)(Z, { show: eu })), (T[15] = eu), (T[16] = p))
          : (p = T[16]),
        T[17] !== el
          ? ((f = (0, n.jsx)(er, { show: el })), (T[17] = el), (T[18] = f))
          : (f = T[18]));
      let ef = +!eh,
        eg = eh ? 0 : "auto";
      return (
        T[19] !== ef || T[20] !== eg
          ? ((g = { opacity: ef, height: eg }),
            (T[19] = ef),
            (T[20] = eg),
            (T[21] = g))
          : (g = T[21]),
        T[22] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = { duration: 0.6 }),
            (v = { overflow: "hidden" }),
            (T[22] = y),
            (T[23] = v))
          : ((y = T[22]), (v = T[23])),
        T[24] === Symbol.for("react.memo_cache_sentinel")
          ? ((x = (0, n.jsx)("span", {
            className: "font-accent tracking-[0.3em] uppercase",
            style: { color: "var(--color-muted)", fontSize: "0.65rem" },
            children: W.eyebrow,
          })),
            (T[24] = x))
          : (x = T[24]),
        T[25] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = (0, n.jsx)("p", {
            className: "font-script text-2xl",
            style: { color: "var(--color-rose-accent)" },
            children: W.scratchIntro,
          })),
            (T[25] = b))
          : (b = T[25]),
        T[26] !== g
          ? ((w = (0, n.jsxs)(s.motion.div, {
            className: "flex flex-col items-center gap-1.5 text-center",
            animate: g,
            transition: y,
            style: v,
            children: [x, b],
          })),
            (T[26] = g),
            (T[27] = w))
          : (w = T[27]),
        T[28] === Symbol.for("react.memo_cache_sentinel")
          ? ((_ = {
            width: 340,
            height: 340,
            "--heart-target": "clamp(300px, 72vw, 430px)",
          }),
            (j = { scale: "calc(var(--heart-target) / 340px)" }),
            (S = { duration: 0.9, ease: "easeInOut" }),
            (T[28] = _),
            (T[29] = j),
            (T[30] = S))
          : ((_ = T[28]), (j = T[29]), (S = T[30])),
        T[31] !== em || T[32] !== $
          ? ((k =
            "scratch" === $ &&
            (0, n.jsx)(J, { onRevealed: em, onProgress: X })),
            (T[31] = em),
            (T[32] = $),
            (T[33] = k))
          : (k = T[33]),
        T[34] !== eh || T[35] !== k
          ? ((N = (0, n.jsx)(en, { revealed: eh, config: ep, children: k })),
            (T[34] = eh),
            (T[35] = k),
            (T[36] = N))
          : (N = T[36]),
        T[37] !== $ || T[38] !== H
          ? ((z = "scratch" === $ && (0, n.jsx)(Y, { hidden: H > 0 })),
            (T[37] = $),
            (T[38] = H),
            (T[39] = z))
          : (z = T[39]),
        T[40] !== N || T[41] !== z
          ? ((M = (0, n.jsxs)(s.motion.div, {
            className: "relative",
            style: _,
            animate: j,
            transition: S,
            children: [N, z],
          })),
            (T[40] = N),
            (T[41] = z),
            (T[42] = M))
          : (M = T[42]),
        T[43] === Symbol.for("react.memo_cache_sentinel")
          ? ((C = { color: "var(--color-subtle)", fontSize: "0.9rem" }),
            (T[43] = C))
          : (C = T[43]),
        T[44] !== $ || T[45] !== H
          ? ((P = (0, n.jsx)("p", {
            className: "font-serif tracking-wider",
            style: C,
            children: (0, n.jsx)(Q, { phase: $, progress: H }),
          })),
            (T[44] = $),
            (T[45] = H),
            (T[46] = P))
          : (P = T[46]),
        T[47] !== w || T[48] !== M || T[49] !== P
          ? ((O = (0, n.jsxs)("div", {
            className: "relative z-10 flex flex-col items-center gap-8 px-6",
            children: [w, M, P],
          })),
            (T[47] = w),
            (T[48] = M),
            (T[49] = P),
            (T[50] = O))
          : (O = T[50]),
        T[51] !== p || T[52] !== f || T[53] !== O || T[54] !== u
          ? ((E = (0, n.jsxs)("div", {
            ref: ec,
            className:
              "pg-wrapper relative w-full flex flex-col items-center justify-center overflow-hidden select-none",
            children: [h, u, p, f, O],
          })),
            (T[51] = p),
            (T[52] = f),
            (T[53] = O),
            (T[54] = u),
            (T[55] = E))
          : (E = T[55]),
        E
      );
    }
    let es = {
      hidden: { opacity: 0, y: 32 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
      },
    },
      ec = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.14, delayChildren: 0.2 } },
      };
    function ed(e) {
      let t,
        r,
        a,
        o,
        l,
        c,
        d,
        m,
        h,
        u,
        p,
        f,
        g = (0, i.c)(17),
        { value: y, label: v } = e;
      return (
        (g[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, n.jsx)("div", {
            className: "absolute inset-0 rounded-sm",
            style: {
              background:
                "radial-gradient(ellipse at center, var(--color-gold-glow-08) 0%, transparent 70%)",
            },
          })),
            (g[0] = t))
          : (t = g[0]),
          g[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((r = {
              width: "clamp(72px, 18vw, 108px)",
              height: "clamp(80px, 20vw, 120px)",
              border: "1px solid var(--color-gold-border-sm)",
              background: "var(--color-surface)",
              backdropFilter: "blur(8px)",
            }),
              (g[1] = r))
            : (r = g[1]),
          g[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((a = (0, n.jsx)("span", {
              className:
                "absolute top-1.5    left-1.5  h-3 w-3 border-t border-l",
              style: { borderColor: "var(--color-gold-bracket)" },
            })),
              (g[2] = a))
            : (a = g[2]),
          g[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((o = (0, n.jsx)("span", {
              className:
                "absolute top-1.5    right-1.5 h-3 w-3 border-t border-r",
              style: { borderColor: "var(--color-gold-bracket)" },
            })),
              (g[3] = o))
            : (o = g[3]),
          g[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((l = (0, n.jsx)("span", {
              className:
                "absolute bottom-1.5 left-1.5  h-3 w-3 border-b border-l",
              style: { borderColor: "var(--color-gold-bracket)" },
            })),
              (g[4] = l))
            : (l = g[4]),
          g[5] === Symbol.for("react.memo_cache_sentinel")
            ? ((c = (0, n.jsx)("span", {
              className:
                "absolute bottom-1.5 right-1.5 h-3 w-3 border-b border-r",
              style: { borderColor: "var(--color-gold-bracket)" },
            })),
              (g[5] = c))
            : (c = g[5]),
          g[6] === Symbol.for("react.memo_cache_sentinel")
            ? ((d = {
              fontSize: "clamp(2.2rem, 7vw, 3.8rem)",
              lineHeight: 1,
              letterSpacing: "-0.04em",
              color: "var(--color-name-text)",
              textShadow: "0 0 30px var(--color-gold-glow-25)",
            }),
              (g[6] = d))
            : (d = g[6]),
          g[7] !== y)
          ? ((m = String(y).padStart(2, "0")), (g[7] = y), (g[8] = m))
          : (m = g[8]),
        g[9] !== m
          ? ((h = (0, n.jsxs)("div", {
            className: "relative flex items-center justify-center",
            children: [
              t,
              (0, n.jsxs)("div", {
                className: "relative flex items-center justify-center",
                style: r,
                children: [
                  a,
                  o,
                  l,
                  c,
                  (0, n.jsx)("span", {
                    suppressHydrationWarning: !0,
                    className: "font-display font-light tabular-nums",
                    style: d,
                    children: m,
                  }),
                ],
              }),
            ],
          })),
            (g[9] = m),
            (g[10] = h))
          : (h = g[10]),
        g[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = {
            fontSize: "clamp(0.48rem, 1.4vw, 0.62rem)",
            opacity: 0.75,
          }),
            (g[11] = u))
          : (u = g[11]),
        g[12] !== v
          ? ((p = (0, n.jsx)("span", {
            className: "font-cinzel uppercase tracking-[0.38em] text-gold",
            style: u,
            children: v,
          })),
            (g[12] = v),
            (g[13] = p))
          : (p = g[13]),
        g[14] !== p || g[15] !== h
          ? ((f = (0, n.jsxs)(s.motion.div, {
            variants: es,
            className: "flex flex-col items-center gap-3",
            children: [h, p],
          })),
            (g[14] = p),
            (g[15] = h),
            (g[16] = f))
          : (f = g[16]),
        f
      );
    }
    function em() {
      let e,
        t = (0, i.c)(1);
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsxs)(s.motion.div, {
            variants: es,
            className: "mb-8 flex flex-col gap-2 self-center",
            children: [
              (0, n.jsx)("span", {
                className: "block h-1 w-1 rounded-full bg-gold opacity-50",
              }),
              (0, n.jsx)("span", {
                className: "block h-1 w-1 rounded-full bg-gold opacity-25",
              }),
            ],
          })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    function eh() {
      let e,
        t,
        r,
        a,
        o,
        c,
        d,
        m,
        h,
        u,
        p,
        f,
        g,
        y,
        v,
        x,
        w,
        _,
        j,
        S,
        k = (0, i.c)(36);
      k[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((e = { days: 0, hours: 0, minutes: 0, seconds: 0 }), (k[0] = e))
        : (e = k[0]);
      let [N, z] = (0, l.useState)(e),
        [M, C] = (0, l.useState)("upcoming"),
        [P, E] = (0, l.useState)(!1);
      (k[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = () => {
          let e = () => {
            let e, t, r, a, o;
            (z(
              (e = new Date(b) - new Date()) <= 0
                ? { days: 0, hours: 0, minutes: 0, seconds: 0 }
                : {
                  days: Math.floor(e / 864e5),
                  hours: Math.floor((e / 36e5) % 24),
                  minutes: Math.floor((e / 6e4) % 60),
                  seconds: Math.floor((e / 1e3) % 60),
                },
            ),
              C(
                ((t = new Date()),
                  (r = new Date(b)),
                  (a = new Date(t.getFullYear(), t.getMonth(), t.getDate())),
                  (o = new Date(r.getFullYear(), r.getMonth(), r.getDate())),
                  a.getTime() === o.getTime()
                    ? "today"
                    : a.getTime() > o.getTime()
                      ? "past"
                      : "upcoming"),
              ));
          };
          (e(), E(!0));
          let t = setInterval(e, 1e3);
          return () => clearInterval(t);
        }),
          (r = []),
          (k[1] = t),
          (k[2] = r))
        : ((t = k[1]), (r = k[2])),
        (0, l.useEffect)(t, r),
        k[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = { background: "var(--color-dark)" }), (k[3] = a))
          : (a = k[3]),
        k[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, n.jsx)("div", {
            className: "pointer-events-none absolute inset-0",
            style: {
              background:
                "radial-gradient(ellipse 65% 50% at 50% 50%, var(--color-gold-glow-05) 0%, transparent 70%)",
            },
          })),
            (k[4] = o))
          : (o = k[4]),
        k[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = { once: !0, amount: 0.3 }), (k[5] = c))
          : (c = k[5]));
      let T =
        "past" === M
          ? "mb-6 font-cinzel uppercase tracking-[0.3em]"
          : "mb-8 font-cinzel uppercase tracking-[0.6em] text-gold",
        I = "past" === M ? "var(--color-gold-soft)" : void 0,
        $ = "past" === M ? 1 : 0.8;
      (k[6] !== I || k[7] !== $
        ? ((d = {
          fontSize: "clamp(0.85rem, 1.5vw, 0.9rem)",
          color: I,
          opacity: $,
        }),
          (k[6] = I),
          (k[7] = $),
          (k[8] = d))
        : (d = k[8]),
        k[9] !== T || k[10] !== d
          ? ((m = (0, n.jsx)(s.motion.p, {
            variants: es,
            className: T,
            style: d,
            children: "Until Two Souls Become One",
          })),
            (k[9] = T),
            (k[10] = d),
            (k[11] = m))
          : (m = k[11]));
      let L = P ? N.days : 0;
      (k[12] !== L
        ? ((h = (0, n.jsx)(ed, { value: L, label: "Days" })),
          (k[12] = L),
          (k[13] = h))
        : (h = k[13]),
        k[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, n.jsx)(em, {})), (k[14] = u))
          : (u = k[14]));
      let R = P ? N.hours : 0;
      (k[15] !== R
        ? ((p = (0, n.jsx)(ed, { value: R, label: "Hours" })),
          (k[15] = R),
          (k[16] = p))
        : (p = k[16]),
        k[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, n.jsx)(em, {})), (k[17] = f))
          : (f = k[17]));
      let A = P ? N.minutes : 0;
      (k[18] !== A
        ? ((g = (0, n.jsx)(ed, { value: A, label: "Minutes" })),
          (k[18] = A),
          (k[19] = g))
        : (g = k[19]),
        k[20] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = (0, n.jsx)(em, {})), (k[20] = y))
          : (y = k[20]));
      let F = P ? N.seconds : 0;
      return (
        k[21] !== F
          ? ((v = (0, n.jsx)(ed, { value: F, label: "Seconds" })),
            (k[21] = F),
            (k[22] = v))
          : (v = k[22]),
        k[23] !== h || k[24] !== p || k[25] !== g || k[26] !== v
          ? ((x = (0, n.jsxs)(s.motion.div, {
            variants: ec,
            className: "flex items-start gap-1.5 sm:gap-5 mb-5",
            children: [h, u, p, f, g, y, v],
          })),
            (k[23] = h),
            (k[24] = p),
            (k[25] = g),
            (k[26] = v),
            (k[27] = x))
          : (x = k[27]),
        k[28] !== M
          ? ((w =
            "past" === M
              ? (0, n.jsxs)(s.motion.div, {
                variants: es,
                className: "flex flex-col items-center gap-4 px-4 mb-2",
                children: [
                  (0, n.jsx)("p", {
                    className: "font-cinzel uppercase tracking-[0.4em]",
                    style: {
                      fontSize: "clamp(0.55rem, 1.4vw, 0.7rem)",
                      color: "var(--color-muted)",
                    },
                    children: "✦ United in Love, Blessed by Family ✦",
                  }),
                  (0, n.jsxs)("p", {
                    className: "font-display text-gold-heading",
                    style: {
                      fontSize: "clamp(1.9rem, 5.2vw, 2.9rem)",
                      letterSpacing: "-0.02em",
                      lineHeight: 1.3,
                    },
                    children: ["Sonali", " & ", "Sudev"],
                  }),
                  (0, n.jsxs)("p", {
                    className: "font-cinzel tracking-widest",
                    style: {
                      fontSize: "clamp(0.8rem, 1.9vw, 1rem)",
                      color: "var(--color-cream-82)",
                      maxWidth: "26rem",
                      lineHeight: 1.8,
                    },
                    children: [
                      "What destiny brought together, love has now sealed —",
                      (0, n.jsx)("br", {}),
                      "together forever, hand in hand. ❤️",
                    ],
                  }),
                ],
              })
              : "today" === M
                ? (0, n.jsx)(s.motion.p, {
                  variants: es,
                  className: "font-display text-gold-light mb-2",
                  style: {
                    fontSize: "clamp(1.5rem, 4.2vw, 2.3rem)",
                    letterSpacing: "-0.02em",
                  },
                  children: "Today is the day ✦",
                })
                : null),
            (k[28] = M),
            (k[29] = w))
          : (w = k[29]),
        k[30] === Symbol.for("react.memo_cache_sentinel")
          ? ((_ = (0, n.jsx)(el, {})), (k[30] = _))
          : (_ = k[30]),
        k[31] === Symbol.for("react.memo_cache_sentinel")
          ? ((j = (0, n.jsx)(s.motion.div, {
            variants: es,
            className: "mt-8",
            children: (0, n.jsx)(O, {}),
          })),
            (k[31] = j))
          : (j = k[31]),
        k[32] !== m || k[33] !== x || k[34] !== w
          ? ((S = (0, n.jsxs)("section", {
            className:
              "relative flex flex-col items-center justify-center overflow-hidden px-6 py-24 sm:py-32",
            style: a,
            children: [
              o,
              (0, n.jsxs)(s.motion.div, {
                variants: ec,
                initial: "hidden",
                whileInView: "visible",
                viewport: c,
                className:
                  "relative z-10 flex w-full max-w-3xl flex-col items-center text-center",
                children: [m, x, w, _, j],
              }),
            ],
          })),
            (k[32] = m),
            (k[33] = x),
            (k[34] = w),
            (k[35] = S))
          : (S = k[35]),
        S
      );
    }
    var eu = e.i(57688);
    let ep = "Sonali",
      ef = "Sudev",
      eg = [
        {
          year: "Chapter One",
          title: "The Meeting",
          description:
            "Two families met — and two hearts quietly recognised each other.",
        },
        {
          year: "Chapter Two",
          title: "The Knowing",
          description:
            "Slow conversations turned into the certainty of finding the right person.",
        },
        {
          year: "Chapter Three",
          title: "The Promise",
          description:
            "With blessings all around, a connection became a forever promise.",
        },
        {
          year: "Chapter Four",
          title: "Forever Begins",
          description:
            "Surrounded by love, the most beautiful chapter of our lives begins.",
        },
      ],
      ey = {
        hidden: { opacity: 0, y: 36 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 1.3, ease: [0.22, 1, 0.36, 1] },
        },
      },
      ev = {
        hidden: { opacity: 0, x: -40 },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 1.3, ease: [0.22, 1, 0.36, 1] },
        },
      },
      ex = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.18, delayChildren: 0.1 } },
      };
    function eb(e) {
      let t,
        r,
        a,
        o,
        l,
        c,
        d,
        m,
        h,
        u,
        p,
        f = (0, i.c)(21),
        { year: g, title: y, description: v, index: x } = e;
      return (
        f[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, n.jsx)("div", {
            className:
              "mt-1 h-2.5 w-2.5 shrink-0 rounded-full border border-gold bg-dark",
            style: { boxShadow: "0 0 8px var(--color-gold-bracket)" },
          })),
            (f[0] = t))
          : (t = f[0]),
        f[1] !== x
          ? ((r =
            x < eg.length - 1 &&
            (0, n.jsx)("div", {
              className: "mt-2 w-px flex-1",
              style: {
                background:
                  "linear-gradient(to bottom, var(--color-gold-glow-35), var(--color-gold-glow-06))",
                minHeight: "60px",
              },
            })),
            (f[1] = x),
            (f[2] = r))
          : (r = f[2]),
        f[3] !== r
          ? ((a = (0, n.jsxs)("div", {
            className: "flex flex-col items-center",
            children: [t, r],
          })),
            (f[3] = r),
            (f[4] = a))
          : (a = f[4]),
        f[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = { fontSize: "0.72rem", opacity: 0.75 }), (f[5] = o))
          : (o = f[5]),
        f[6] !== g
          ? ((l = (0, n.jsx)("span", {
            className: "mb-1 block font-cinzel tracking-[0.35em] text-gold",
            style: o,
            children: g,
          })),
            (f[6] = g),
            (f[7] = l))
          : (l = f[7]),
        f[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = {
            fontSize: "clamp(1.3rem, 3.5vw, 1.75rem)",
            letterSpacing: "-0.02em",
            color: "var(--color-name-text)",
          }),
            (f[8] = c))
          : (c = f[8]),
        f[9] !== y
          ? ((d = (0, n.jsx)("h4", {
            className: "mb-2 font-display",
            style: c,
            children: y,
          })),
            (f[9] = y),
            (f[10] = d))
          : (d = f[10]),
        f[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = { fontSize: "clamp(0.88rem, 2vw, 1rem)" }), (f[11] = m))
          : (m = f[11]),
        f[12] !== v
          ? ((h = (0, n.jsx)("p", {
            className: "font-body font-light leading-relaxed text-muted",
            style: m,
            children: v,
          })),
            (f[12] = v),
            (f[13] = h))
          : (h = f[13]),
        f[14] !== l || f[15] !== d || f[16] !== h
          ? ((u = (0, n.jsxs)("div", {
            className: "pb-10",
            children: [l, d, h],
          })),
            (f[14] = l),
            (f[15] = d),
            (f[16] = h),
            (f[17] = u))
          : (u = f[17]),
        f[18] !== u || f[19] !== a
          ? ((p = (0, n.jsxs)(s.motion.div, {
            variants: ey,
            className: "relative flex gap-6",
            children: [a, u],
          })),
            (f[18] = u),
            (f[19] = a),
            (f[20] = p))
          : (p = f[20]),
        p
      );
    }
    function ew() {
      let e,
        t,
        r,
        a,
        o,
        l,
        c,
        d,
        m,
        h,
        u,
        p,
        f,
        g,
        y,
        v,
        x,
        b,
        w,
        _,
        j,
        S,
        k,
        N = (0, i.c)(23);
      return (
        N[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = { background: "var(--color-dark)" }), (N[0] = e))
          : (e = N[0]),
        N[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, n.jsx)("div", {
            className: "pointer-events-none absolute inset-0",
            style: {
              background:
                "radial-gradient(ellipse 80% 40% at 50% 20%, var(--color-gold-glow-08) 0%, var(--color-rose-wash-md) 45%, transparent 70%)",
            },
          })),
            (N[1] = t))
          : (t = N[1]),
        N[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = { once: !0, amount: 0.3 }), (N[2] = r))
          : (r = N[2]),
        N[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, n.jsx)(s.motion.p, {
            variants: ey,
            className:
              "mb-4 font-cinzel uppercase tracking-[0.5em] text-gold",
            style: {
              fontSize: "clamp(0.72rem, 1.8vw, 0.82rem)",
              opacity: 0.8,
            },
            children: "How It All Began",
          })),
            (N[3] = a))
          : (a = N[3]),
        N[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, n.jsx)(s.motion.h2, {
            variants: ey,
            className: "font-display",
            style: {
              fontSize: "clamp(2.8rem, 8vw, 5.5rem)",
              lineHeight: 0.9,
              letterSpacing: "-0.03em",
              color: "var(--color-name-text)",
            },
            children: "Our Story",
          })),
            (N[4] = o))
          : (o = N[4]),
        N[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, n.jsx)("span", {
            className: "block h-px w-16",
            style: {
              background:
                "linear-gradient(to right, transparent, var(--color-gold-line), transparent)",
            },
          })),
            (N[5] = l))
          : (l = N[5]),
        N[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, n.jsx)("span", {
            className: "text-gold opacity-70",
            style: { fontSize: "0.6rem" },
            children: "✦",
          })),
            (N[6] = c))
          : (c = N[6]),
        N[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, n.jsxs)(s.motion.div, {
            variants: ey,
            className: "mb-8 mt-6 flex items-center gap-4",
            children: [
              l,
              c,
              (0, n.jsx)("span", {
                className: "block h-px w-16",
                style: {
                  background:
                    "linear-gradient(to right, transparent, var(--color-gold-line), transparent)",
                },
              }),
            ],
          })),
            (N[7] = d))
          : (d = N[7]),
        N[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, n.jsxs)(s.motion.div, {
            variants: ex,
            initial: "hidden",
            whileInView: "visible",
            viewport: r,
            className:
              "mb-16 flex flex-col items-center text-center sm:mb-20",
            children: [
              a,
              o,
              d,
              (0, n.jsx)(s.motion.p, {
                variants: ey,
                className:
                  "max-w-xl font-body font-light leading-relaxed text-muted",
                style: { fontSize: "clamp(0.88rem, 2vw, 1rem)" },
                children:
                  "Some love stories are written in the stars — ours began with a single glance across a crowded room and has only grown more beautiful with every passing season.",
              }),
            ],
          })),
            (N[8] = m))
          : (m = N[8]),
        N[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = { once: !0, amount: 0.3 }), (N[9] = h))
          : (h = N[9]),
        N[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, n.jsx)("div", {
            className: "absolute -inset-3 rounded-sm",
            style: { border: "1px solid var(--color-gold-border-xs)" },
          })),
            (N[10] = u))
          : (u = N[10]),
        N[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, n.jsx)("span", {
            className:
              "absolute -top-3    -left-3  h-5 w-5 border-t border-l",
            style: { borderColor: "var(--color-gold-line)" },
          })),
            (N[11] = p))
          : (p = N[11]),
        N[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, n.jsx)("span", {
            className:
              "absolute -top-3    -right-3 h-5 w-5 border-t border-r",
            style: { borderColor: "var(--color-gold-line)" },
          })),
            (N[12] = f))
          : (f = N[12]),
        N[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, n.jsx)("span", {
            className:
              "absolute -bottom-3 -left-3  h-5 w-5 border-b border-l",
            style: { borderColor: "var(--color-gold-line)" },
          })),
            (N[13] = g))
          : (g = N[13]),
        N[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = (0, n.jsx)("span", {
            className:
              "absolute -bottom-3 -right-3 h-5 w-5 border-b border-r",
            style: { borderColor: "var(--color-gold-line)" },
          })),
            (N[14] = y))
          : (y = N[14]),
        N[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = { aspectRatio: "3/4" }),
            (x = (0, n.jsx)(eu.default, {
              src: "/images/couple/walking.jpg",
              alt: `${ep} & ${ef}`,
              fill: !0,
              className: "object-cover object-center",
              sizes: "(max-width: 1024px) 80vw, 38vw",
            })),
            (N[15] = v),
            (N[16] = x))
          : ((v = N[15]), (x = N[16])),
        N[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = (0, n.jsxs)("div", {
            className: "relative overflow-hidden rounded-sm",
            style: v,
            children: [
              x,
              (0, n.jsx)("div", {
                className: "absolute inset-0",
                style: {
                  background:
                    "linear-gradient(to top, var(--color-surface) 0%, var(--color-surface-xs) 50%, var(--color-surface-sm) 100%)",
                },
              }),
            ],
          })),
            (N[17] = b))
          : (b = N[17]),
        N[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((w = {
            background: "var(--color-surface-dark)",
            border: "1px solid var(--color-gold-glow-25)",
            backdropFilter: "blur(8px)",
          }),
            (N[18] = w))
          : (w = N[18]),
        N[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((_ = {
            fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
            letterSpacing: "-0.01em",
          }),
            (N[19] = _))
          : (_ = N[19]),
        N[20] === Symbol.for("react.memo_cache_sentinel")
          ? ((j = (0, n.jsxs)(s.motion.div, {
            variants: ev,
            initial: "hidden",
            whileInView: "visible",
            viewport: h,
            className:
              "relative mx-auto w-full max-w-sm shrink-0 lg:mx-0 lg:w-[38%]",
            children: [
              u,
              p,
              f,
              g,
              y,
              b,
              (0, n.jsx)("div", {
                className:
                  "absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap px-5 py-2",
                style: w,
                children: (0, n.jsxs)("p", {
                  className: "font-display text-gold-light",
                  style: _,
                  children: [
                    ep,
                    (0, n.jsx)("span", {
                      className: "mx-2 font-display italic",
                      style: {
                        fontSize: "0.8em",
                        background: "var(--gradient-rose-joiner)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      },
                      children: "&",
                    }),
                    ef,
                  ],
                }),
              }),
            ],
          })),
            (N[20] = j))
          : (j = N[20]),
        N[21] === Symbol.for("react.memo_cache_sentinel")
          ? ((S = { once: !0, amount: 0.2 }), (N[21] = S))
          : (S = N[21]),
        N[22] === Symbol.for("react.memo_cache_sentinel")
          ? ((k = (0, n.jsxs)("section", {
            className: "relative overflow-hidden px-6 py-24 sm:py-32",
            style: e,
            children: [
              t,
              (0, n.jsxs)("div", {
                className: "relative z-10 mx-auto max-w-6xl",
                children: [
                  m,
                  (0, n.jsxs)("div", {
                    className:
                      "flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16 xl:gap-24",
                    children: [
                      j,
                      (0, n.jsx)(s.motion.div, {
                        variants: ex,
                        initial: "hidden",
                        whileInView: "visible",
                        viewport: S,
                        className: "flex-1 pt-2",
                        children: eg.map(e_),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })),
            (N[22] = k))
          : (k = N[22]),
        k
      );
    }
    function e_(e, t) {
      return (0, n.jsx)(eb, { ...e, index: t }, t);
    }
    let ej = {
      hidden: { opacity: 0, y: 28 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
      },
    },
      eS = {
        hidden: { opacity: 0, y: 40 },
        visible: (e) => ({
          opacity: 1,
          y: 0,
          transition: {
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.08 * e,
          },
        }),
      },
      ek = {
        rest: { scale: 1 },
        hover: {
          scale: 1.04,
          transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
        },
      };
    function eN(e) {
      let t,
        r,
        a = (0, i.c)(3),
        { className: o } = e,
        l = `inline-block ${void 0 === o ? "" : o}`;
      return (
        a[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = {
            width: "18px",
            height: "2px",
            background: "var(--color-gold-line)",
            display: "block",
          }),
            (a[0] = t))
          : (t = a[0]),
        a[1] !== l
          ? ((r = (0, n.jsx)("span", { className: l, style: t })),
            (a[1] = l),
            (a[2] = r))
          : (r = a[2]),
        r
      );
    }
    function ez(e) {
      let t,
        r,
        a,
        o,
        l,
        c,
        d,
        m,
        h,
        u,
        p,
        f,
        g,
        y,
        v,
        x,
        b,
        w,
        _,
        j,
        S,
        N,
        z,
        M,
        C,
        P,
        O,
        E,
        T,
        I,
        $,
        L = (0, i.c)(62),
        { event: R, index: A } = e,
        F = A % 2 == 0;
      L[0] !== R.id
        ? ((t = k[R.id] ?? {
          timeLabel: "As The Moment Arrives",
          venueLabel: "At The Chosen Grounds",
          icon: null,
        }),
          (L[0] = R.id),
          (L[1] = t))
        : (t = L[1]);
      let D = t,
        B = D.icon;
      L[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = { once: !0, amount: 0.2 }), (L[2] = r))
        : (r = L[2]);
      let q = F ? "ltr" : "rtl";
      return (
        L[3] !== q
          ? ((a = {
            border: "1px solid var(--color-gold-border-sm)",
            direction: q,
          }),
            (L[3] = q),
            (L[4] = a))
          : (a = L[4]),
        L[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = { direction: "ltr" }), (L[5] = o))
          : (o = L[5]),
        L[6] !== R.photo || L[7] !== R.title
          ? ((l = (0, n.jsx)("div", {
            className:
              "relative h-56 w-full overflow-hidden lg:h-auto lg:w-[42%]",
            style: o,
            children: (0, n.jsx)(s.motion.div, {
              variants: ek,
              className: "absolute inset-0 h-full w-full",
              children: (0, n.jsx)(eu.default, {
                src: R.photo,
                alt: R.title,
                fill: !0,
                className: "object-cover object-center",
                sizes: "(max-width: 1024px) 100vw, 42vw",
              }),
            }),
          })),
            (L[6] = R.photo),
            (L[7] = R.title),
            (L[8] = l))
          : (l = L[8]),
        L[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = {
            background: "var(--color-surface-content)",
            backdropFilter: "blur(8px)",
            direction: "ltr",
          }),
            (L[9] = c))
          : (c = L[9]),
        L[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, n.jsx)(eN, {})), (L[10] = d))
          : (d = L[10]),
        L[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = { fontSize: "0.9rem", opacity: 0.9 }), (L[11] = m))
          : (m = L[11]),
        L[12] !== R.date || L[13] !== R.day
          ? ((h = (0, n.jsxs)("div", {
            className: "flex items-center gap-3",
            children: [
              d,
              (0, n.jsxs)("span", {
                className:
                  "font-cinzel uppercase tracking-[0.42em] text-gold",
                style: m,
                children: [R.day, "  ·  ", R.date],
              }),
            ],
          })),
            (L[12] = R.date),
            (L[13] = R.day),
            (L[14] = h))
          : (h = L[14]),
        L[15] !== B
          ? ((u =
            B &&
            (0, n.jsx)("span", {
              className: "text-gold opacity-80",
              style: {
                filter: "drop-shadow(0 0 6px var(--color-gold-glow-40))",
              },
              children: (0, n.jsx)(B, { className: "w-5 h-5 sm:w-6 sm:h-6" }),
            })),
            (L[15] = B),
            (L[16] = u))
          : (u = L[16]),
        L[17] !== h || L[18] !== u
          ? ((p = (0, n.jsxs)("div", {
            className: "mb-4 flex items-center justify-between",
            children: [h, u],
          })),
            (L[17] = h),
            (L[18] = u),
            (L[19] = p))
          : (p = L[19]),
        L[20] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = {
            fontSize: "clamp(2rem, 4.5vw, 2.8rem)",
            lineHeight: 0.93,
            letterSpacing: "-0.03em",
            color: "var(--color-name-text)",
          }),
            (L[20] = f))
          : (f = L[20]),
        L[21] !== R.title
          ? ((g = (0, n.jsx)("h3", {
            className: "mb-4 font-display",
            style: f,
            children: R.title,
          })),
            (L[21] = R.title),
            (L[22] = g))
          : (g = L[22]),
        L[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = {
            fontSize: "clamp(0.85rem, 1.7vw, 1rem)",
            maxWidth: "40ch",
            opacity: 0.9,
            color: "var(--color-muted)",
          }),
            (L[23] = y))
          : (y = L[23]),
        L[24] !== R.description
          ? ((v = (0, n.jsx)("p", {
            className:
              "mb-7 font-body font-light leading-relaxed tracking-wider",
            style: y,
            children: R.description,
          })),
            (L[24] = R.description),
            (L[25] = v))
          : (v = L[25]),
        L[26] === Symbol.for("react.memo_cache_sentinel")
          ? ((x = { fontSize: "0.85rem", opacity: 0.8 }), (L[26] = x))
          : (x = L[26]),
        L[27] !== D.timeLabel
          ? ((b = (0, n.jsx)("p", {
            className:
              "mb-0.5 font-cinzel uppercase tracking-[0.25em] text-gold",
            style: x,
            children: D.timeLabel,
          })),
            (L[27] = D.timeLabel),
            (L[28] = b))
          : (b = L[28]),
        L[29] === Symbol.for("react.memo_cache_sentinel")
          ? ((w = {
            fontSize: "clamp(1.2rem, 2.2vw, 1.5rem)",
            color: "var(--color-name-text)",
          }),
            (L[29] = w))
          : (w = L[29]),
        L[30] !== R.time
          ? ((_ = (0, n.jsx)("p", {
            className: "font-display tracking-wide",
            style: w,
            children: R.time,
          })),
            (L[30] = R.time),
            (L[31] = _))
          : (_ = L[31]),
        L[32] !== b || L[33] !== _
          ? ((j = (0, n.jsxs)("div", { children: [b, _] })),
            (L[32] = b),
            (L[33] = _),
            (L[34] = j))
          : (j = L[34]),
        L[35] === Symbol.for("react.memo_cache_sentinel")
          ? ((S = (0, n.jsx)("div", {
            className: "h-px w-12",
            style: { background: "var(--color-rose-soft)" },
          })),
            (L[35] = S))
          : (S = L[35]),
        L[36] === Symbol.for("react.memo_cache_sentinel")
          ? ((N = { fontSize: "0.85rem", opacity: 0.8 }), (L[36] = N))
          : (N = L[36]),
        L[37] !== D.venueLabel
          ? ((z = (0, n.jsx)("p", {
            className:
              "mb-0.5 font-cinzel uppercase tracking-[0.35em] text-gold",
            style: N,
            children: D.venueLabel,
          })),
            (L[37] = D.venueLabel),
            (L[38] = z))
          : (z = L[38]),
        L[39] === Symbol.for("react.memo_cache_sentinel")
          ? ((M = {
            fontSize: "clamp(1rem, 2.2vw, 1.15rem)",
            color: "var(--color-name-text)",
          }),
            (L[39] = M))
          : (M = L[39]),
        L[40] !== R.venue
          ? ((C = (0, n.jsx)("p", {
            className: "font-display",
            style: M,
            children: R.venue,
          })),
            (L[40] = R.venue),
            (L[41] = C))
          : (C = L[41]),
        L[42] === Symbol.for("react.memo_cache_sentinel")
          ? ((P = { fontSize: "clamp(0.68rem, 1.3vw, 0.76rem)", opacity: 0.9 }),
            (L[42] = P))
          : (P = L[42]),
        L[43] !== R.address
          ? ((O = (0, n.jsx)("p", {
            className: "mt-0.5 font-body font-light text-muted",
            style: P,
            children: R.address,
          })),
            (L[43] = R.address),
            (L[44] = O))
          : (O = L[44]),
        L[45] !== z || L[46] !== C || L[47] !== O
          ? ((E = (0, n.jsxs)("div", { children: [z, C, O] })),
            (L[45] = z),
            (L[46] = C),
            (L[47] = O),
            (L[48] = E))
          : (E = L[48]),
        L[49] !== j || L[50] !== E
          ? ((T = (0, n.jsxs)("div", {
            className: "flex flex-col gap-4",
            children: [j, S, E],
          })),
            (L[49] = j),
            (L[50] = E),
            (L[51] = T))
          : (T = L[51]),
        L[52] !== p || L[53] !== g || L[54] !== v || L[55] !== T
          ? ((I = (0, n.jsxs)("div", {
            className:
              "relative flex flex-1 flex-col justify-center px-8 py-9 sm:px-10 lg:py-10",
            style: c,
            children: [p, g, v, T],
          })),
            (L[52] = p),
            (L[53] = g),
            (L[54] = v),
            (L[55] = T),
            (L[56] = I))
          : (I = L[56]),
        L[57] !== A || L[58] !== I || L[59] !== a || L[60] !== l
          ? (($ = (0, n.jsxs)(s.motion.div, {
            custom: A,
            variants: eS,
            initial: "hidden",
            whileInView: "visible",
            viewport: r,
            whileHover: "hover",
            className: "relative flex flex-col overflow-hidden lg:flex-row",
            style: a,
            children: [l, I],
          })),
            (L[57] = A),
            (L[58] = I),
            (L[59] = a),
            (L[60] = l),
            (L[61] = $))
          : ($ = L[61]),
        $
      );
    }
    function eM() {
      let e,
        t,
        r,
        a,
        o,
        l,
        c,
        d,
        m,
        h,
        u,
        p = (0, i.c)(11);
      return (
        p[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = { background: "var(--color-dark)" }), (p[0] = e))
          : (e = p[0]),
        p[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, n.jsx)("div", {
            className: "pointer-events-none absolute inset-0",
            style: {
              background:
                "radial-gradient(ellipse 80% 40% at 50% 20%, var(--color-gold-glow-08) 0%, var(--color-rose-wash-md) 45%, transparent 70%)",
            },
          })),
            (p[1] = t))
          : (t = p[1]),
        p[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = { once: !0, amount: 0.4 }),
            (a = {
              hidden: {},
              visible: { transition: { staggerChildren: 0.14 } },
            }),
            (p[2] = r),
            (p[3] = a))
          : ((r = p[2]), (a = p[3])),
        p[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, n.jsx)(s.motion.p, {
            variants: ej,
            className:
              "mb-5 font-cinzel uppercase tracking-[0.6em] text-gold",
            style: {
              fontSize: "clamp(0.72rem, 1.8vw, 0.85rem)",
              opacity: 0.95,
            },
            children: "Join Us In Celebration",
          })),
            (p[4] = o))
          : (o = p[4]),
        p[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, n.jsx)(s.motion.h2, {
            variants: ej,
            className: "font-display",
            style: {
              fontSize: "clamp(3.5rem, 8vw, 5.5rem)",
              lineHeight: 0.9,
              letterSpacing: "-0.03em",
              color: "var(--color-name-text)",
            },
            children: "The Celebrations",
          })),
            (p[5] = l))
          : (l = p[5]),
        p[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, n.jsx)("span", {
            className: "block h-px w-16",
            style: {
              background:
                "linear-gradient(to right, transparent, var(--color-gold-line-md), transparent)",
            },
          })),
            (d = (0, n.jsx)(eN, {})),
            (p[6] = c),
            (p[7] = d))
          : ((c = p[6]), (d = p[7])),
        p[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, n.jsxs)(s.motion.div, {
            initial: "hidden",
            whileInView: "visible",
            viewport: r,
            variants: a,
            className:
              "mb-16 flex flex-col items-center text-center sm:mb-20",
            children: [
              o,
              l,
              (0, n.jsxs)(s.motion.div, {
                variants: ej,
                className: "mt-6 flex items-center gap-4",
                children: [
                  c,
                  d,
                  (0, n.jsx)("span", {
                    className: "block h-px w-16",
                    style: {
                      background:
                        "linear-gradient(to right, transparent, var(--color-gold-line-md), transparent)",
                    },
                  }),
                ],
              }),
            ],
          })),
            (p[8] = m))
          : (m = p[8]),
        p[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = (0, n.jsx)("div", {
            className:
              "pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 lg:block",
            style: {
              background:
                "linear-gradient(to bottom, transparent 0%, var(--color-gold-glow-20) 8%, var(--color-gold-glow-20) 92%, transparent 100%)",
            },
          })),
            (p[9] = h))
          : (h = p[9]),
        p[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, n.jsxs)("section", {
            className: "relative overflow-hidden px-4 py-24 sm:px-6 sm:py-32",
            style: e,
            children: [
              t,
              (0, n.jsxs)("div", {
                className: "relative z-10 mx-auto max-w-5xl",
                children: [
                  m,
                  (0, n.jsxs)("div", {
                    className: "relative flex flex-col",
                    children: [
                      h,
                      (0, n.jsx)("div", {
                        className: "flex flex-col gap-5",
                        children: S.map(eC),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })),
            (p[10] = u))
          : (u = p[10]),
        u
      );
    }
    function eC(e, t) {
      return (0, n.jsx)(ez, { event: e, index: t }, e.id);
    }
    let eP = {
      hidden: { opacity: 0, y: 24 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
      },
    },
      eO = { hidden: {}, visible: { transition: { staggerChildren: 0.13 } } };
    function eE() {
      let e,
        t = (0, i.c)(1);
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)("span", {
            style: {
              display: "block",
              width: "18px",
              height: "2px",
              background: "var(--color-gold-line)",
            },
          })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    function eT() {
      let e,
        t,
        r,
        a,
        o,
        l,
        c,
        d,
        m,
        h,
        u,
        p,
        f,
        g,
        y,
        v,
        x,
        b,
        w,
        _ = (0, i.c)(19);
      return (
        _[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = { background: "var(--color-dark)" }), (_[0] = e))
          : (e = _[0]),
        _[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, n.jsx)("div", {
            className: "pointer-events-none absolute inset-0",
            style: {
              background:
                "radial-gradient(ellipse 80% 40% at 50% 20%, var(--color-gold-glow-08) 0%, var(--color-rose-wash-md) 45%, transparent 70%)",
            },
          })),
            (_[1] = t))
          : (t = _[1]),
        _[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = { once: !0, amount: 0.3 }), (_[2] = r))
          : (r = _[2]),
        _[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, n.jsx)(s.motion.p, {
            variants: eP,
            className:
              "mb-4 font-cinzel uppercase tracking-[0.6em] text-gold",
            style: {
              fontSize: "clamp(0.72rem, 1.5vw, 0.82rem)",
              opacity: 0.8,
            },
            children: "Find Your Way To Us",
          })),
            (_[3] = a))
          : (a = _[3]),
        _[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, n.jsx)(s.motion.h2, {
            variants: eP,
            className: "font-display",
            style: {
              fontSize: "clamp(2.8rem, 8vw, 5.5rem)",
              lineHeight: 0.9,
              letterSpacing: "-0.03em",
              color: "var(--color-name-text)",
            },
            children: "The Venue",
          })),
            (_[4] = o))
          : (o = _[4]),
        _[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, n.jsx)("span", {
            className: "block h-px w-16",
            style: {
              background:
                "linear-gradient(to right, transparent, var(--color-gold-line-md), transparent)",
            },
          })),
            (c = (0, n.jsx)(eE, {})),
            (_[5] = l),
            (_[6] = c))
          : ((l = _[5]), (c = _[6])),
        _[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, n.jsxs)(s.motion.div, {
            variants: eO,
            initial: "hidden",
            whileInView: "visible",
            viewport: r,
            className:
              "mb-10 flex flex-col items-center text-center sm:mb-12",
            children: [
              a,
              o,
              (0, n.jsxs)(s.motion.div, {
                variants: eP,
                className: "mt-6 flex items-center gap-4",
                children: [
                  l,
                  c,
                  (0, n.jsx)("span", {
                    className: "block h-px w-16",
                    style: {
                      background:
                        "linear-gradient(to right, transparent, var(--color-gold-line-md), transparent)",
                    },
                  }),
                ],
              }),
              (0, n.jsx)(s.motion.p, {
                variants: eP,
                className: "mt-6 font-display italic",
                style: {
                  color: "var(--color-muted)",
                  fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
                },
                children: "The Shlok Garden, Khurai Road, Bina (M.P.) 470113",
              }),
            ],
          })),
            (_[7] = d))
          : (d = _[7]),
        _[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = { once: !0, amount: 0.2 }), (_[8] = m))
          : (m = _[8]),
        _[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = {
            border: "1px solid var(--color-gold-border-xs)",
            cursor: "none",
          }),
            (_[9] = h))
          : (h = _[9]),
        _[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, n.jsx)("span", {
            className:
              "absolute top-3 left-3   z-10 h-4 w-4 border-t border-l",
            style: { borderColor: "var(--color-gold-bracket)" },
          })),
            (_[10] = u))
          : (u = _[10]),
        _[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, n.jsx)("span", {
            className:
              "absolute top-3 right-3  z-10 h-4 w-4 border-t border-r",
            style: { borderColor: "var(--color-gold-bracket)" },
          })),
            (_[11] = p))
          : (p = _[11]),
        _[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, n.jsx)("span", {
            className:
              "absolute bottom-3 left-3  z-10 h-4 w-4 border-b border-l",
            style: { borderColor: "var(--color-gold-bracket)" },
          })),
            (_[12] = f))
          : (f = _[12]),
        _[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, n.jsx)("span", {
            className:
              "absolute bottom-3 right-3 z-10 h-4 w-4 border-b border-r",
            style: { borderColor: "var(--color-gold-bracket)" },
          })),
            (_[13] = g))
          : (g = _[13]),
        _[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = (0, n.jsx)("iframe", {
            src: "https://maps.google.com/maps?q=The+Shlok+Garden,+Khurai+Road,+Bina,+Madhya+Pradesh+470113&z=15&output=embed",
            width: "100%",
            height: "420",
            style: {
              border: 0,
              display: "block",
              pointerEvents: "none",
              filter:
                "grayscale(35%) sepia(22%) brightness(0.80) contrast(1.06)",
            },
            allowFullScreen: !0,
            loading: "lazy",
            referrerPolicy: "no-referrer-when-downgrade",
            title: "Wedding Venue",
          })),
            (_[14] = y))
          : (y = _[14]),
        _[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = (0, n.jsx)("div", {
            className: "pointer-events-none absolute inset-0",
            style: {
              background: "var(--color-surface-2xs)",
              mixBlendMode: "multiply",
            },
          })),
            (_[15] = v))
          : (v = _[15]),
        _[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((x = { background: "var(--color-surface-hover)" }), (_[16] = x))
          : (x = _[16]),
        _[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = (0, n.jsxs)("div", {
            className: "relative z-10 mx-auto max-w-5xl",
            children: [
              d,
              (0, n.jsxs)(s.motion.a, {
                href: "https://maps.google.com/?q=The+Shlok+Garden,+Khurai+Road,+Bina,+Madhya+Pradesh+470113",
                target: "_blank",
                rel: "noopener noreferrer",
                variants: eP,
                initial: "hidden",
                whileInView: "visible",
                viewport: m,
                className: "group relative block w-full overflow-hidden",
                style: h,
                children: [
                  u,
                  p,
                  f,
                  g,
                  y,
                  v,
                  (0, n.jsx)("div", {
                    className:
                      "pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-400 group-hover:opacity-100",
                    style: x,
                    children: (0, n.jsx)("span", {
                      className:
                        "font-cinzel uppercase tracking-[0.45em] text-gold-light",
                      style: { fontSize: "clamp(0.72rem, 2vw, 0.78rem)" },
                      children: "Get Directions",
                    }),
                  }),
                ],
              }),
            ],
          })),
            (_[17] = b))
          : (b = _[17]),
        _[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((w = (0, n.jsxs)("section", {
            className: "relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28",
            style: e,
            children: [
              t,
              b,
              (0, n.jsx)("div", {
                className:
                  "pointer-events-none absolute inset-x-0 bottom-0 h-px",
                style: {
                  background:
                    "linear-gradient(to right, transparent, var(--color-gold-glow-35), transparent)",
                },
              }),
            ],
          })),
            (_[18] = w))
          : (w = _[18]),
        w
      );
    }
    var eI = e.i(22016);
    let e$ = {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
      },
    },
      eL = { hidden: {}, visible: { transition: { staggerChildren: 0.14 } } };
    function eR() {
      let e,
        t,
        r,
        a,
        o,
        l,
        c,
        d,
        m,
        h,
        u,
        p,
        f,
        g,
        y,
        v,
        x,
        b,
        w,
        _ = (0, i.c)(19);
      return (
        _[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = { background: "var(--color-dark)" }), (_[0] = e))
          : (e = _[0]),
        _[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, n.jsx)("div", {
            className: "pointer-events-none absolute inset-x-0 top-0 h-px",
            style: {
              background:
                "linear-gradient(to right, transparent, var(--color-gold-glow-35), transparent)",
            },
          })),
            (_[1] = t))
          : (t = _[1]),
        _[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, n.jsx)("div", {
            className: "pointer-events-none absolute inset-0",
            style: {
              background:
                "radial-gradient(ellipse 60% 50% at 50% 100%, var(--color-gold-glow-05) 0%, var(--color-rose-wash) 45%, transparent 70%)",
            },
          })),
            (_[2] = r))
          : (r = _[2]),
        _[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = { once: !0, amount: 0.3 }), (_[3] = a))
          : (a = _[3]),
        _[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = {
            color: "var(--color-name-text)",
            fontSize: "clamp(2.4rem, 8vw, 5rem)",
            lineHeight: 0.9,
            letterSpacing: "-0.03em",
          }),
            (_[4] = o))
          : (o = _[4]),
        _[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, n.jsxs)(s.motion.h2, {
            variants: e$,
            className: "font-display",
            style: o,
            children: [
              "Sonali",
              (0, n.jsx)("span", {
                className: "mx-3 font-display italic",
                style: {
                  fontSize: "0.55em",
                  background: "var(--gradient-rose-joiner)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                },
                children: "&",
              }),
              "Sudev",
            ],
          })),
            (_[5] = l))
          : (l = _[5]),
        _[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, n.jsx)("span", {
            className: "block h-px w-14",
            style: {
              background:
                "linear-gradient(to right, transparent, var(--color-gold-line-md), transparent)",
            },
          })),
            (d = (0, n.jsx)("span", {
              style: {
                display: "block",
                width: "14px",
                height: "2px",
                background: "var(--color-gold-line-md)",
              },
            })),
            (_[6] = c),
            (_[7] = d))
          : ((c = _[6]), (d = _[7])),
        _[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = (0, n.jsxs)(s.motion.div, {
            variants: e$,
            className: "my-5 flex items-center gap-4",
            children: [
              c,
              d,
              (0, n.jsx)("span", {
                className: "block h-px w-14",
                style: {
                  background:
                    "linear-gradient(to right, transparent, var(--color-gold-line-md), transparent)",
                },
              }),
            ],
          })),
            (u =
              M &&
              (0, n.jsx)(s.motion.p, {
                variants: e$,
                className: "mb-0 font-display italic",
                style: {
                  color: "var(--color-muted)",
                  fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
                  opacity: 1,
                },
                children: M,
              })),
            (m =
              N &&
              z &&
              (0, n.jsx)(s.motion.div, {
                variants: e$,
                className: "mt-6 flex items-center gap-6",
                children: [N, z].map(eA),
              })),
            (_[8] = m),
            (_[9] = h),
            (_[10] = u))
          : ((m = _[8]), (h = _[9]), (u = _[10])),
        _[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = { opacity: 0 }),
            (f = { opacity: 1 }),
            (g = { once: !0 }),
            (y = { delay: 0.3, duration: 1 }),
            (_[11] = p),
            (_[12] = f),
            (_[13] = g),
            (_[14] = y))
          : ((p = _[11]), (f = _[12]), (g = _[13]), (y = _[14])),
        _[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = {
            borderTop: "1px solid var(--color-gold-border)",
            paddingTop: "16px",
            width: "100%",
            maxWidth: "320px",
          }),
            (x = {
              fontSize: "12px",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "var(--color-muted)",
              fontFamily: "var(--font-body)",
              opacity: 1,
            }),
            (_[15] = v),
            (_[16] = x))
          : ((v = _[15]), (x = _[16])),
        _[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = (0, n.jsxs)("span", {
            style: x,
            children: [
              "crafted with love by",
              " ",
              (0, n.jsx)(eI.default, {
                href: "https://www.memorialink.in",
                target: "_blank",
                rel: "noopener noreferrer",
                style: { color: "var(--color-gold-accent)", opacity: 0.85 },
                children: "MemoriaLink",
              }),
            ],
          })),
            (_[17] = b))
          : (b = _[17]),
        _[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((w = (0, n.jsxs)("footer", {
            className: "relative overflow-hidden px-6 py-14 sm:py-16",
            style: e,
            children: [
              t,
              r,
              (0, n.jsxs)(s.motion.div, {
                variants: eL,
                initial: "hidden",
                whileInView: "visible",
                viewport: a,
                className:
                  "relative z-10 flex flex-col items-center text-center",
                children: [
                  l,
                  h,
                  u,
                  m,
                  (0, n.jsxs)(s.motion.div, {
                    variants: e$,
                    className:
                      "mt-10 flex max-w-xl flex-col items-center gap-1 text-center",
                    children: [
                      (0, n.jsx)("p", {
                        className: "mb-2 font-cinzel uppercase text-gold",
                        style: {
                          fontSize: "0.7rem",
                          letterSpacing: "0.35em",
                        },
                        children: "With Best Compliments From",
                      }),
                      (0, n.jsx)("p", {
                        className: "font-body",
                        style: {
                          fontSize: "0.95rem",
                          color: "var(--color-cream)",
                          opacity: 0.9,
                        },
                        children: "Mrs. Geeta & Mr. Dinesh Saluja",
                      }),
                      (0, n.jsx)("p", {
                        className: "font-body",
                        style: {
                          fontSize: "0.95rem",
                          color: "var(--color-cream)",
                          opacity: 0.9,
                        },
                        children: "Mrs. Neetu & Mr. Kishore Kumar Saluja",
                      }),
                      (0, n.jsx)("p", {
                        className: "font-body",
                        style: {
                          fontSize: "0.95rem",
                          color: "var(--color-cream)",
                          opacity: 0.9,
                        },
                        children: "Mrs. Kiran & Mr. Kamal Kalra",
                      }),
                      (0, n.jsx)("p", {
                        className: "font-body",
                        style: {
                          fontSize: "0.95rem",
                          color: "var(--color-cream)",
                          opacity: 0.9,
                        },
                        children: "Mrs. Chanchal & Mr. Omprakash Saluja",
                      }),
                      (0, n.jsx)("p", {
                        className:
                          "mb-2 mt-6 font-cinzel uppercase text-gold",
                        style: {
                          fontSize: "0.7rem",
                          letterSpacing: "0.35em",
                        },
                        children: "With Love",
                      }),
                      (0, n.jsx)("p", {
                        className: "font-body leading-relaxed",
                        style: {
                          fontSize: "0.95rem",
                          color: "var(--color-cream)",
                          opacity: 0.9,
                        },
                        children:
                          "Anjali, Laksh, Monika, Gunjan, Jai, Himanshi, Neelam, Yashu, Vanshu, Deepali, Vishali, Krish, Apporav",
                      }),
                    ],
                  }),
                  (0, n.jsxs)(s.motion.div, {
                    initial: p,
                    whileInView: f,
                    viewport: g,
                    transition: y,
                    className: "mt-8 flex flex-col items-center gap-1",
                    style: v,
                    children: [
                      (0, n.jsxs)("div", {
                        className: "flex items-center gap-3",
                        children: [
                          C &&
                          (0, n.jsx)(eI.default, {
                            href: "tel:+917898425785",
                            style: {
                              fontSize: "14px",
                              color: "var(--color-muted)",
                              opacity: 1,
                            },
                            className:
                              "transition-opacity hover:opacity-90 tracking-wide",
                            children: C,
                          }),
                          C &&
                          P &&
                          (0, n.jsx)("span", {
                            style: {
                              color: "var(--color-gold-border)",
                              fontSize: "10px",
                              opacity: 0.6,
                            },
                            children: "·",
                          }),
                          P &&
                          (0, n.jsxs)(eI.default, {
                            href: `https://instagram.com/${P}`,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className:
                              "group flex items-center gap-1 transition-opacity hover:opacity-90",
                            children: [
                              (0, n.jsxs)("svg", {
                                width: "10",
                                height: "10",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "var(--color-gold-accent)",
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                style: { opacity: 0.85 },
                                children: [
                                  (0, n.jsx)("rect", {
                                    x: "2",
                                    y: "2",
                                    width: "20",
                                    height: "20",
                                    rx: "5",
                                    ry: "5",
                                  }),
                                  (0, n.jsx)("circle", {
                                    cx: "12",
                                    cy: "12",
                                    r: "4",
                                  }),
                                  (0, n.jsx)("circle", {
                                    cx: "17.5",
                                    cy: "6.5",
                                    r: "0.8",
                                    fill: "var(--color-gold-accent)",
                                  }),
                                ],
                              }),
                              (0, n.jsxs)("span", {
                                style: {
                                  fontSize: "11px",
                                  letterSpacing: "0.18em",
                                  color: "var(--color-muted)",
                                  opacity: 1,
                                  fontFamily: "var(--font-body)",
                                  textTransform: "uppercase",
                                },
                                children: ["@", P],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })),
            (_[18] = w))
          : (w = _[18]),
        w
      );
    }
    function eA(e) {
      return (0, n.jsxs)(
        eI.default,
        {
          href: `https://instagram.com/${e}`,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "group flex items-center gap-2",
          children: [
            (0, n.jsxs)("svg", {
              width: "15",
              height: "15",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "var(--color-gold-glow-65)",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className:
                "transition-all duration-300 group-hover:stroke-gold-light",
              children: [
                (0, n.jsx)("rect", {
                  x: "2",
                  y: "2",
                  width: "20",
                  height: "20",
                  rx: "5",
                  ry: "5",
                }),
                (0, n.jsx)("circle", { cx: "12", cy: "12", r: "4" }),
                (0, n.jsx)("circle", {
                  cx: "17.5",
                  cy: "6.5",
                  r: "0.8",
                  fill: "var(--color-gold-glow-65)",
                }),
              ],
            }),
            (0, n.jsxs)("span", {
              className:
                "font-cinzel uppercase tracking-[0.38em] transition-opacity duration-300 group-hover:opacity-100",
              style: {
                color: "var(--color-muted)",
                fontSize: "0.54rem",
                opacity: 1,
              },
              children: ["@", e],
            }),
          ],
        },
        e,
      );
    }
    function eF(e) {
      let t,
        r,
        a = (0, i.c)(5),
        { className: o, flip: l } = e,
        s = void 0 === l ? "" : l,
        c = `absolute w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 ${void 0 === o ? "" : o}`;
      return (
        a[0] !== s
          ? ((t = { color: "var(--color-gold)", opacity: 0.45, transform: s }),
            (a[0] = s),
            (a[1] = t))
          : (t = a[1]),
        a[2] !== c || a[3] !== t
          ? ((r = (0, n.jsx)(y, {
            "aria-hidden": "true",
            className: c,
            style: t,
          })),
            (a[2] = c),
            (a[3] = t),
            (a[4] = r))
          : (r = a[4]),
        r
      );
    }
    function eD() {
      let e,
        t,
        r,
        a,
        o,
        s,
        c,
        d,
        m,
        h,
        u,
        p,
        f,
        g,
        y,
        v,
        x,
        b,
        S,
        k,
        N,
        z,
        M,
        C,
        P,
        O,
        E,
        T,
        I = (0, i.c)(31),
        $ = (0, l.useRef)(null),
        [L, R] = (0, l.useState)(!1);
      (I[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((e = () => {
          let e = $.current;
          if (!e) return;
          let t = new IntersectionObserver(
            (e) => {
              let [r] = e;
              r.isIntersecting && (R(!0), t.disconnect());
            },
            { threshold: 0.15 },
          );
          return (t.observe(e), () => t.disconnect());
        }),
          (t = []),
          (I[0] = e),
          (I[1] = t))
        : ((e = I[0]), (t = I[1])),
        (0, l.useEffect)(e, t),
        I[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = { background: "var(--color-dark)" }), (I[2] = r))
          : (r = I[2]),
        I[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, n.jsx)("div", {
            "aria-hidden": "true",
            className: "absolute inset-0 pointer-events-none",
            style: {
              background:
                "radial-gradient(ellipse 55% 40% at 50% 50%, var(--color-gold-glow-04) 0%, transparent 100%)",
            },
          })),
            (I[3] = a))
          : (a = I[3]));
      let A = `
          relative w-full max-w-85 sm:max-w-sm md:max-w-md mx-auto
          bg-dark3 rounded-sm
          px-6 sm:px-8 md:px-10
          py-10 sm:py-12 md:py-14
          text-center
          transition-all duration-700 ease-out
          ${L ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        `;
      return (
        I[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = {
            border: "1px solid var(--color-gold-border-sm)",
            boxShadow:
              "0 0 40px var(--color-gold-glow-04), inset 0 0 28px var(--color-gold-glow-03)",
          }),
            (s = (0, n.jsx)(eF, { className: "top-3 left-3" })),
            (c = (0, n.jsx)(eF, {
              className: "top-3 right-3",
              flip: "scaleX(-1)",
            })),
            (d = (0, n.jsx)(eF, {
              className: "bottom-3 left-3",
              flip: "scaleY(-1)",
            })),
            (m = (0, n.jsx)(eF, {
              className: "bottom-3 right-3",
              flip: "scale(-1,-1)",
            })),
            (I[4] = o),
            (I[5] = s),
            (I[6] = c),
            (I[7] = d),
            (I[8] = m))
          : ((o = I[4]), (s = I[5]), (c = I[6]), (d = I[7]), (m = I[8])),
        I[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = (0, n.jsx)("p", {
            className: "font-cinzel uppercase mb-2 sm:mb-3",
            style: {
              fontSize: "clamp(0.65rem, 1.8vw, 0.75rem)",
              letterSpacing: "0.35em",
              color: "var(--color-gold)",
              opacity: 0.9,
            },
            children: "वधू परिचय",
          })),
            (I[9] = h))
          : (h = I[9]),
        I[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, n.jsx)("h3", {
            className:
              "font-display text-gold-heading font-light leading-none mb-1",
            style: { fontSize: "clamp(1.6rem, 7vw, 2.75rem)" },
            children: "Dr. Sonali Saluja",
          })),
            (I[10] = u))
          : (u = I[10]),
        I[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, n.jsx)("p", {
            className: "font-display italic mb-4 sm:mb-6",
            style: {
              fontSize: "clamp(0.88rem, 2vw, 1rem)",
              color: "var(--color-cream)",
              opacity: 0.85,
            },
            children: "The Bride",
          })),
            (I[11] = p))
          : (p = I[11]),
        I[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, n.jsxs)("p", {
            className: "font-body leading-relaxed",
            style: {
              fontSize: "clamp(0.88rem, 2vw, 1rem)",
              color: "var(--color-cream)",
              opacity: 0.88,
            },
            children: ["D/o. ", "Smt. Mamta"],
          })),
            (I[12] = f))
          : (f = I[12]),
        I[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, n.jsx)("p", {
            className: "font-body my-1",
            style: {
              fontSize: "clamp(0.88rem, 2vw, 1rem)",
              color: "var(--color-gold)",
            },
            children: "&",
          })),
            (I[13] = g))
          : (g = I[13]),
        I[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = (0, n.jsx)("p", {
            className: "font-body leading-relaxed mb-2",
            style: {
              fontSize: "clamp(0.88rem, 2vw, 1rem)",
              color: "var(--color-cream)",
              opacity: 0.88,
            },
            children: "Sh. Lekhraj Saluja",
          })),
            (v =
              _ &&
              (0, n.jsx)("p", {
                className: "font-cinzel uppercase mt-2",
                style: {
                  fontSize: "clamp(0.62rem, 1.6vw, 0.72rem)",
                  letterSpacing: "0.25em",
                  color: "var(--color-gold-accent)",
                  opacity: 0.8,
                },
                children: _,
              })),
            (I[14] = y),
            (I[15] = v))
          : ((y = I[14]), (v = I[15])),
        I[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((x = (0, n.jsx)("div", {
            className: "h-px flex-1",
            style: {
              background:
                "linear-gradient(to right, transparent, var(--color-gold-glow-35))",
            },
          })),
            (I[16] = x))
          : (x = I[16]),
        I[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = (0, n.jsx)("span", {
            className: "font-display leading-none select-none",
            style: {
              fontSize: "clamp(1.75rem, 7vw, 2.5rem)",
              color: "var(--color-gold)",
            },
            children: "&",
          })),
            (I[17] = b))
          : (b = I[17]),
        I[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((S = (0, n.jsxs)("div", {
            className:
              "flex items-center justify-center gap-3 sm:gap-4 my-8 sm:my-10",
            children: [
              x,
              b,
              (0, n.jsx)("div", {
                className: "h-px flex-1",
                style: {
                  background:
                    "linear-gradient(to left, transparent, var(--color-gold-glow-35))",
                },
              }),
            ],
          })),
            (I[18] = S))
          : (S = I[18]),
        I[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((k = (0, n.jsx)("p", {
            className: "font-cinzel uppercase mb-2 sm:mb-3",
            style: {
              fontSize: "clamp(0.65rem, 1.8vw, 0.75rem)",
              letterSpacing: "0.35em",
              color: "var(--color-gold)",
              opacity: 0.9,
            },
            children: "वर परिचय",
          })),
            (I[19] = k))
          : (k = I[19]),
        I[20] === Symbol.for("react.memo_cache_sentinel")
          ? ((N = (0, n.jsx)("h3", {
            className:
              "font-display text-cream font-light leading-none mb-1 text-gold-heading",
            style: { fontSize: "clamp(1.6rem, 7vw, 2.75rem)" },
            children: "Dr. Sudev C.S",
          })),
            (I[20] = N))
          : (N = I[20]),
        I[21] === Symbol.for("react.memo_cache_sentinel")
          ? ((z = (0, n.jsx)("p", {
            className: "font-display italic mb-4 sm:mb-6",
            style: {
              fontSize: "clamp(0.88rem, 2vw, 1rem)",
              color: "var(--color-cream)",
              opacity: 0.85,
            },
            children: "The Groom",
          })),
            (I[21] = z))
          : (z = I[21]),
        I[22] === Symbol.for("react.memo_cache_sentinel")
          ? ((M = (0, n.jsxs)("p", {
            className: "font-body leading-relaxed",
            style: {
              fontSize: "clamp(0.88rem, 2vw, 1rem)",
              color: "var(--color-cream)",
              opacity: 0.88,
            },
            children: ["S/o. ", "Smt. Kavitha M.S"],
          })),
            (I[22] = M))
          : (M = I[22]),
        I[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((C = (0, n.jsx)("p", {
            className: "font-body my-1",
            style: {
              fontSize: "clamp(0.88rem, 2vw, 1rem)",
              color: "var(--color-gold)",
            },
            children: "&",
          })),
            (I[23] = C))
          : (C = I[23]),
        I[24] === Symbol.for("react.memo_cache_sentinel")
          ? ((P = (0, n.jsx)("p", {
            className: "font-body leading-relaxed mb-2",
            style: {
              fontSize: "clamp(0.88rem, 2vw, 1rem)",
              color: "var(--color-cream)",
              opacity: 0.88,
            },
            children: "Sh. Sahadevan C.D",
          })),
            (O =
              w &&
              (0, n.jsx)("p", {
                className: "font-cinzel uppercase mt-2",
                style: {
                  fontSize: "clamp(0.62rem, 1.6vw, 0.72rem)",
                  letterSpacing: "0.25em",
                  color: "var(--color-gold-accent)",
                  opacity: 0.8,
                },
                children: w,
              })),
            (I[24] = P),
            (I[25] = O))
          : ((P = I[24]), (O = I[25])),
        I[26] !== L
          ? ((E =
            j &&
            (0, n.jsxs)("div", {
              className: `mt-10 sm:mt-12 transition-all duration-700 delay-500 ${L ? "opacity-100" : "opacity-0"}`,
              children: [
                (0, n.jsxs)("div", {
                  className:
                    "flex items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-4",
                  children: [
                    (0, n.jsx)("div", {
                      className: "h-px w-10 sm:w-12",
                      style: {
                        background:
                          "linear-gradient(to right, transparent, var(--color-gold-glow-35))",
                      },
                    }),
                    (0, n.jsx)("span", {
                      className: "select-none",
                      style: {
                        color: "var(--color-gold)",
                        opacity: 0.7,
                        fontSize: "0.75rem",
                      },
                      children: "✦",
                    }),
                    (0, n.jsx)("div", {
                      className: "h-px w-10 sm:w-12",
                      style: {
                        background:
                          "linear-gradient(to left, transparent, var(--color-gold-glow-35))",
                      },
                    }),
                  ],
                }),
                (0, n.jsx)("p", {
                  className: "font-display italic",
                  style: {
                    fontSize: "clamp(0.88rem, 2vw, 1rem)",
                    color: "var(--color-cream)",
                    opacity: 0.8,
                  },
                  children: j,
                }),
              ],
            })),
            (I[26] = L),
            (I[27] = E))
          : (E = I[27]),
        I[28] !== E || I[29] !== A
          ? ((T = (0, n.jsxs)("section", {
            className:
              "relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 overflow-hidden",
            style: r,
            children: [
              a,
              (0, n.jsxs)("div", {
                ref: $,
                className: A,
                style: o,
                children: [
                  s,
                  c,
                  d,
                  m,
                  h,
                  u,
                  p,
                  f,
                  g,
                  y,
                  v,
                  S,
                  k,
                  N,
                  z,
                  M,
                  C,
                  P,
                  O,
                  E,
                ],
              }),
            ],
          })),
            (I[28] = E),
            (I[29] = A),
            (I[30] = T))
          : (T = I[30]),
        T
      );
    }
    function eB(e) {
      return f({
        tag: "svg",
        attr: { viewBox: "0 0 256 256", fill: "currentColor" },
        child: [
          {
            tag: "path",
            attr: {
              d: "M245.83,121.63a15.53,15.53,0,0,0-9.52-7.33,73.51,73.51,0,0,0-22.17-2.22c4-19.85,1-35.55-2.06-44.86a16.15,16.15,0,0,0-18.79-10.88,85.53,85.53,0,0,0-28.55,12.12,94.58,94.58,0,0,0-27.11-33.25,16.05,16.05,0,0,0-19.26,0A94.48,94.48,0,0,0,91.26,68.46,85.53,85.53,0,0,0,62.71,56.34,16.15,16.15,0,0,0,43.92,67.22c-3,9.31-6,25-2.06,44.86a73.51,73.51,0,0,0-22.17,2.22,15.53,15.53,0,0,0-9.52,7.33,16,16,0,0,0-1.6,12.27c3.39,12.57,13.8,36.48,45.33,55.32S113.13,208,128.05,208s42.67,0,74-18.78c31.53-18.84,41.94-42.75,45.33-55.32A16,16,0,0,0,245.83,121.63ZM59.14,72.14a.2.2,0,0,1,.23-.15A70.43,70.43,0,0,1,85.18,83.66,118.65,118.65,0,0,0,80,119.17c0,18.74,3.77,34,9.11,46.28A123.59,123.59,0,0,1,69.57,140C51.55,108.62,55.3,84,59.14,72.14Zm3,103.35C35.47,159.57,26.82,140.05,24,129.7a59.82,59.82,0,0,1,22.5-1.17,129.08,129.08,0,0,0,9.15,19.41,142.28,142.28,0,0,0,34,39.56A114.92,114.92,0,0,1,62.1,175.49ZM128,190.4c-9.33-6.94-32-28.23-32-71.23C96,76.7,118.38,55.24,128,48c9.62,7.26,32,28.72,32,71.19C160,162.17,137.33,183.46,128,190.4ZM170.82,83.66A70.43,70.43,0,0,1,196.63,72a.2.2,0,0,1,.23.15C200.7,84,204.45,108.62,186.43,140a123.32,123.32,0,0,1-19.54,25.48c5.34-12.26,9.11-27.54,9.11-46.28A118.65,118.65,0,0,0,170.82,83.66ZM232,129.72c-2.77,10.25-11.4,29.81-38.09,45.77a114.92,114.92,0,0,1-27.55,12,142.28,142.28,0,0,0,34-39.56,129.08,129.08,0,0,0,9.15-19.41A59.69,59.69,0,0,1,232,129.71Z",
            },
            child: [],
          },
        ],
      })(e);
    }
    let eq = (e) => {
      let t,
        r,
        a,
        o,
        l,
        s = (0, i.c)(6),
        { className: c } = e,
        d = `flex items-center justify-center gap-3 my-2 ${void 0 === c ? "" : c}`;
      return (
        s[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, n.jsx)("span", {
            className:
              "h-px w-20 bg-linear-to-r from-transparent to-gold-dim",
          })),
            (s[0] = t))
          : (t = s[0]),
        s[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, n.jsx)(x, { size: 16, className: "opacity-60" })),
            (s[1] = r))
          : (r = s[1]),
        s[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, n.jsxs)("div", {
            className: "flex items-center gap-2 text-gold",
            children: [
              r,
              (0, n.jsx)(eB, {
                size: 22,
                style: {
                  color: "var(--color-rose-accent)",
                  opacity: 0.75,
                  filter: "drop-shadow(0 0 4px var(--color-rose-faint))",
                },
              }),
              (0, n.jsx)(x, { size: 16, className: "opacity-60" }),
            ],
          })),
            (o = (0, n.jsx)("span", {
              className:
                "h-px w-20 bg-linear-to-l from-transparent to-gold-dim",
            })),
            (s[2] = a),
            (s[3] = o))
          : ((a = s[2]), (o = s[3])),
        s[4] !== d
          ? ((l = (0, n.jsxs)("div", { className: d, children: [t, a, o] })),
            (s[4] = d),
            (s[5] = l))
          : (l = s[5]),
        l
      );
    },
      eH = [
        "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ।",
        "निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥",
      ],
      eV = {
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] },
        },
      },
      eW = {
        hidden: { scaleX: 0, opacity: 0 },
        visible: {
          scaleX: 1,
          opacity: 1,
          transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 },
        },
      },
      eU = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] },
        },
      };
    function eG() {
      let e,
        t,
        r,
        a,
        o,
        l,
        c,
        d,
        m,
        h = (0, i.c)(9);
      return (
        h[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = {
            background:
              "radial-gradient(ellipse at center, var(--color-gold-glow-06) 0%, var(--color-rose-wash) 45%, transparent 70%)",
            padding: "clamp(2.5rem, 6vw, 4.5rem) clamp(1.25rem, 6vw, 3rem)",
          }),
            (h[0] = e))
          : (e = h[0]),
        h[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, n.jsx)("div", {
            className: "absolute top-0 left-1/2 -translate-x-1/2",
            style: {
              width: "clamp(60px, 20vw, 120px)",
              height: "1px",
              background:
                "linear-gradient(to right, transparent, var(--color-gold-line), transparent)",
            },
          })),
            (h[1] = t))
          : (t = h[1]),
        h[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = { once: !0, margin: "-60px" }), (h[2] = r))
          : (r = h[2]),
        h[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = { maxWidth: "680px" }), (h[3] = a))
          : (a = h[3]),
        h[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = {
            width: "clamp(135px, 31vw, 175px)",
            height: "clamp(135px, 31vw, 175px)",
          }),
            (h[4] = o))
          : (o = h[4]),
        h[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, n.jsx)(s.motion.div, {
            variants: eU,
            className: "relative",
            style: o,
            children: (0, n.jsx)(eu.default, {
              src: "/images/ganesha.png",
              alt: "श्री गणेशाय नमः",
              fill: !0,
              sizes:
                "(max-width: 640px) 120px, (max-width: 1024px) 22vw, 160px",
              style: { objectFit: "contain" },
            }),
          })),
            (h[5] = l))
          : (l = h[5]),
        h[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, n.jsxs)(s.motion.div, {
            variants: eW,
            className: "flex items-center gap-3 w-full justify-center",
            style: { transformOrigin: "center" },
            children: [
              (0, n.jsx)("span", {
                style: {
                  display: "block",
                  height: "1px",
                  width: "clamp(40px, 12vw, 90px)",
                  background:
                    "linear-gradient(to right, transparent, var(--color-gold-line))",
                },
              }),
              (0, n.jsx)("span", {
                style: {
                  display: "block",
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  background: "var(--color-gold-accent)",
                  opacity: 0.7,
                },
              }),
              (0, n.jsx)("span", {
                style: {
                  display: "block",
                  height: "1px",
                  width: "clamp(40px, 12vw, 90px)",
                  background:
                    "linear-gradient(to left, transparent, var(--color-gold-line))",
                },
              }),
            ],
          })),
            (h[6] = c))
          : (c = h[6]),
        h[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, n.jsx)(s.motion.div, {
            variants: eV,
            className: "flex flex-col items-center gap-3",
            children: eH.map(eJ),
          })),
            (h[7] = d))
          : (d = h[7]),
        h[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, n.jsxs)("section", {
            className:
              "relative w-full flex items-center justify-center overflow-hidden",
            style: e,
            children: [
              t,
              (0, n.jsxs)(s.motion.div, {
                initial: "hidden",
                whileInView: "visible",
                viewport: r,
                className:
                  "flex flex-col items-center text-center gap-5 w-full",
                style: a,
                children: [
                  l,
                  c,
                  d,
                  (0, n.jsx)(s.motion.span, {
                    variants: eV,
                    style: {
                      fontSize: "clamp(0.62rem, 1.4vw, 0.72rem)",
                      color: "var(--color-gold-accent)",
                      letterSpacing: "0.25em",
                      textTransform: "uppercase",
                      opacity: 0.7,
                    },
                    children: "— श्री गणेशाय नमः",
                  }),
                ],
              }),
            ],
          })),
            (h[8] = m))
          : (m = h[8]),
        m
      );
    }
    function eJ(e, t) {
      return /[\u0600-\u06FF]/.test(e)
        ? (0, n.jsx)(
          "p",
          {
            dir: "rtl",
            style: {
              fontFamily: "var(--font-arabic, serif)",
              fontSize: "clamp(1.3rem, 3.2vw, 1.85rem)",
              color: "var(--color-gold-light)",
              filter: "drop-shadow(0 0 6px var(--color-gold-glow-25))",
              letterSpacing: "0.05em",
              lineHeight: 1.9,
            },
            children: e,
          },
          t,
        )
        : (0, n.jsx)(
          "p",
          {
            style: {
              fontFamily: "var(--font-display, serif)",
              fontSize: "clamp(1rem, 2.2vw, 1.12rem)",
              color: "var(--color-cream)",
              fontStyle: "italic",
              letterSpacing: "0.03em",
              lineHeight: 1.8,
              opacity: 0.92,
            },
            children: e,
          },
          t,
        );
    }
    function eX({ src: e, poster: t, onComplete: r, fadeOutMs: a = 1400 }) {
      let [o, i] = (0, l.useState)("idle"),
        c = (0, l.useRef)(null),
        d = (0, l.useRef)(!1);
      return (0, n.jsx)(E.AnimatePresence, {
        children:
          "done" !== o &&
          (0, n.jsxs)(
            s.motion.div,
            {
              initial: { opacity: 1, scale: 1 },
              exit: { opacity: 0, scale: 1.03 },
              transition: { duration: a / 1e3, ease: [0.22, 1, 0.36, 1] },
              onClick: () => {
                if ("idle" !== o) return;
                i("playing");
                let e = c.current;
                if (!e) return;
                ((e.muted = !1),
                  (e.volume = 1),
                  e.play().catch((t) => {
                    (console.warn("Unmuted play blocked:", t?.name, t?.message),
                      (e.muted = !0),
                      e.play().catch(() => { }));
                  }));
              },
              className:
                "fixed inset-0 z-99990 flex items-center justify-center bg-black cursor-pointer",
              children: [
                (0, n.jsx)("video", {
                  ref: c,
                  src: e,
                  poster: t,
                  onEnded: () => {
                    if (d.current) return;
                    ((d.current = !0), i("done"));
                    let e = document.querySelector("audio");
                    (e &&
                      (e.pause(),
                        (e.currentTime = 0),
                        (e.volume = 0),
                        e.play().catch(() => { }),
                        ((e, t = a) => {
                          let r = 0,
                            o = setInterval(() => {
                              ((e.volume = Math.min(1, (++r / 20) * 1)),
                                r >= 20 && clearInterval(o));
                            }, t / 20);
                        })(e)),
                      r?.());
                  },
                  playsInline: !0,
                  preload: "auto",
                  className: "h-full w-full object-cover",
                }),
                "idle" === o &&
                (0, n.jsx)(s.motion.div, {
                  initial: { opacity: 0, scale: 0.9 },
                  animate: {
                    opacity: [0.25, 0.6, 0.25],
                    scale: [0.95, 1.05, 0.95],
                  },
                  transition: {
                    duration: 2.4,
                    repeat: 1 / 0,
                    ease: "easeInOut",
                  },
                  className:
                    "pointer-events-none absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/70",
                }),
                "idle" === o &&
                (0, n.jsx)(s.motion.p, {
                  initial: { opacity: 0 },
                  animate: { opacity: [0.4, 0.85, 0.4] },
                  transition: {
                    duration: 2.4,
                    repeat: 1 / 0,
                    ease: "easeInOut",
                  },
                  className:
                    "pointer-events-none absolute left-1/2 top-1/2 mt-14 -translate-x-1/2 translate-y-1/2 whitespace-nowrap text-sm font-light tracking-[0.2em] text-white/80 uppercase",
                  children: "Tap to open",
                }),
              ],
            },
            "video-intro",
          ),
      });
    }
    function eY(e, t) {
      return e + Math.random() * (t - e);
    }
    function eQ(e, t, r) {
      return Math.min(r, Math.max(t, e));
    }
    function eK(e) {
      return (180 * e) / Math.PI;
    }
    function eZ() {
      return eQ(
        Math.min(window.innerWidth, window.innerHeight) / 800,
        0.45,
        1.3,
      );
    }
    let e1 = [
      {
        name: "goldAmber",
        gradFrom: "#e8c878",
        gradTo: "#8a6420",
        stroke: "#3d2b10",
        spot: "#f8efd4",
        vein: "rgba(61, 43, 16, 0.55)",
        glow: "rgba(214, 175, 90, 0.5)",
      },
      {
        name: "ivoryPearl",
        gradFrom: "#fdfaf3",
        gradTo: "#cdbf94",
        stroke: "#6b5d3a",
        spot: "#fffaf0",
        vein: "rgba(107, 93, 58, 0.5)",
        glow: "rgba(230, 218, 180, 0.5)",
      },
      {
        name: "roseGold",
        gradFrom: "#eccab2",
        gradTo: "#a8674a",
        stroke: "#4a2a1c",
        spot: "#fbe9da",
        vein: "rgba(74, 42, 28, 0.5)",
        glow: "rgba(220, 170, 140, 0.5)",
      },
    ],
      e0 = [
        function (e, t, r) {
          let { gradFrom: a, gradTo: o, stroke: n, spot: i, vein: l } = e,
            s = `wingGrad-${r}`,
            c = `
    M50 50
    C 34 24, 6 10, 4 30
    C 3 42, 12 50, 24 52
    C 14 56, 5 60, 6 64
    C 6 80, 14 94, 30 90
    C 40 87, 46 70, 50 56
    Z
  `;
          return `
    <svg width="${t}" height="${t}" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="${s}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${a}" />
          <stop offset="100%" stop-color="${o}" />
        </linearGradient>
      </defs>
      <g>
        <path d="${c}" fill="url(#${s})" stroke="${n}" stroke-width="1.4" />
        <path d="M50 46 C36 30, 20 22, 12 28" stroke="${l}" stroke-width="0.8" fill="none" />
        <path d="M50 54 C34 56, 18 62, 12 70" stroke="${l}" stroke-width="0.7" fill="none" />
        <circle cx="18" cy="34" r="3.4" fill="${i}" />
        <circle cx="20" cy="76" r="2.8" fill="${i}" />
        <g transform="scale(-1,1) translate(-100,0)">
          <path d="${c}" fill="url(#${s})" stroke="${n}" stroke-width="1.4" />
          <path d="M50 46 C36 30, 20 22, 12 28" stroke="${l}" stroke-width="0.8" fill="none" />
          <path d="M50 54 C34 56, 18 62, 12 70" stroke="${l}" stroke-width="0.7" fill="none" />
          <circle cx="18" cy="34" r="3.4" fill="${i}" />
          <circle cx="20" cy="76" r="2.8" fill="${i}" />
        </g>
      </g>
    </svg>
  `;
        },
        function (e, t, r) {
          let { gradFrom: a, gradTo: o, stroke: n, spot: i, vein: l } = e,
            s = `wingGrad-${r}`,
            c = `
    M50 48
    C 32 20, 4 6, 2 26
    C 1 38, 12 48, 24 50
    C 14 54, 4 58, 6 62
    C 5 76, 10 90, 24 92
    C 22 98, 16 100, 14 96
    C 22 94, 30 88, 34 80
    C 40 74, 46 64, 50 54
    Z
  `;
          return `
    <svg width="${t}" height="${t}" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="${s}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${a}" />
          <stop offset="100%" stop-color="${o}" />
        </linearGradient>
      </defs>
      <g>
        <path d="${c}" fill="url(#${s})" stroke="${n}" stroke-width="1.4" />
        <path d="M48 44 C34 28, 18 20, 10 26" stroke="${l}" stroke-width="0.8" fill="none" />
        <path d="M48 52 C32 54, 16 60, 10 68" stroke="${l}" stroke-width="0.7" fill="none" />
        <circle cx="16" cy="32" r="3.2" fill="${i}" />
        <circle cx="16" cy="72" r="2.6" fill="${i}" />
        <g transform="scale(-1,1) translate(-100,0)">
          <path d="${c}" fill="url(#${s})" stroke="${n}" stroke-width="1.4" />
          <path d="M48 44 C34 28, 18 20, 10 26" stroke="${l}" stroke-width="0.8" fill="none" />
          <path d="M48 52 C32 54, 16 60, 10 68" stroke="${l}" stroke-width="0.7" fill="none" />
          <circle cx="16" cy="32" r="3.2" fill="${i}" />
          <circle cx="16" cy="72" r="2.6" fill="${i}" />
        </g>
      </g>
    </svg>
  `;
        },
      ];
    function e2(e) {
      switch (e) {
        case "flutter":
          return {
            speed: eY(35, 60),
            flapFreq: eY(7, 9),
            headingJitter: 70,
            duration: eY(1200, 2600),
          };
        case "glide":
          return {
            speed: eY(20, 32),
            flapFreq: eY(1.2, 2),
            headingJitter: 14,
            duration: eY(500, 1100),
          };
        case "rest":
          return {
            speed: 0,
            flapFreq: 0.6,
            headingJitter: 4,
            duration: eY(700, 1600),
          };
        case "startled":
          return {
            speed: eY(70, 100),
            flapFreq: eY(10, 13),
            headingJitter: 140,
            duration: eY(500, 900),
          };
        default:
          return { speed: 30, flapFreq: 6, headingJitter: 30, duration: 1500 };
      }
    }
    function e3(e) {
      let t,
        r,
        a,
        o,
        s,
        c = (0, i.c)(6),
        { count: d } = e,
        m = void 0 === d ? 3 : d,
        h = (0, l.useRef)(null),
        u = (0, l.useRef)(null),
        p = (0, l.useRef)(null);
      c[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = { x: -9999, y: -9999 }), (c[0] = t))
        : (t = c[0]);
      let f = (0, l.useRef)(t),
        g = (0, l.useRef)(1);
      c[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = []), (c[1] = r))
        : (r = c[1]);
      let y = (0, l.useRef)(r);
      return (
        c[2] !== m
          ? ((a = () => {
            let e = h.current;
            if (
              !e ||
              (window.matchMedia &&
                window.matchMedia("(prefers-reduced-motion: reduce)").matches)
            )
              return;
            g.current = eZ();
            let t = window.innerWidth < 640,
              r = Math.min(m, 3),
              a = document.createElement("style");
            ((u.current = a),
              (a.textContent =
                "\n      @keyframes shimmerPulse {\n        0%, 100% { opacity: 0.85; }\n        50% { opacity: 1; }\n      }\n    "),
              document.head.appendChild(a));
            let o = t
              ? [
                {
                  scale: 1.3,
                  blur: 0,
                  opacity: 0.95,
                  z: 3,
                  speedMul: 1.1,
                },
                { scale: 1, blur: 0, opacity: 1, z: 2, speedMul: 1 },
                {
                  scale: 0.8,
                  blur: 0,
                  opacity: 0.9,
                  z: 1,
                  speedMul: 0.9,
                },
              ]
              : [
                {
                  scale: 1.5,
                  blur: 1,
                  opacity: 0.95,
                  z: 3,
                  speedMul: 1.15,
                },
                { scale: 1.1, blur: 0, opacity: 1, z: 2, speedMul: 1 },
                {
                  scale: 0.8,
                  blur: 0.5,
                  opacity: 0.85,
                  z: 1,
                  speedMul: 0.85,
                },
              ],
              n = [];
            y.current = n;
            for (let a = 0; a < r; a++) {
              let r = e1[Math.floor(Math.random() * e1.length)],
                i = o[a % o.length],
                l = e0[Math.floor(Math.random() * e0.length)],
                s = (t ? eY(24, 36) : eY(34, 52)) * i.scale,
                c = `${a}_${Math.floor(1e5 * Math.random())}`,
                d = document.createElement("div");
              d.style.cssText = `
        position: absolute;
        left: 0;
        top: 0;
        width: ${s}px;
        height: ${s}px;
        z-index: ${i.z};
        pointer-events: none;
        will-change: transform;
      `;
              let m = document.createElement("div");
              ((m.style.cssText = `
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        opacity: ${i.opacity};
        filter: ${i.blur > 0 ? `blur(${i.blur}px) ` : ""}drop-shadow(0 0 ${Math.round(0.14 * s)}px ${r.glow});
        transform-origin: 50% 50%;
        animation: shimmerPulse ${eY(2.6, 4)}s ease-in-out infinite;
      `),
                (m.innerHTML = l(r, Math.round(s), c)));
              let h = document.createElement("div");
              ((h.style.cssText = `
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        opacity: ${i.opacity};
        filter: ${i.blur > 0 ? `blur(${i.blur}px)` : "none"};
      `),
                (h.innerHTML = (function (e, t) {
                  let { stroke: r, gradTo: a } = e;
                  return `
    <svg width="${t}" height="${t}" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="50" cy="50" rx="3.2" ry="15" fill="${a}" stroke="${r}" stroke-width="0.8" />
      <circle cx="50" cy="33" r="2.8" fill="${a}" stroke="${r}" stroke-width="0.6" />
      <path d="M50 33 C47 28, 44 24, 41 22" stroke="${r}" stroke-width="0.6" fill="none" />
      <path d="M50 33 C53 28, 56 24, 59 22" stroke="${r}" stroke-width="0.6" fill="none" />
    </svg>
  `;
                })(r, Math.round(s))),
                d.appendChild(m),
                d.appendChild(h),
                e.appendChild(d));
              let u = e2("flutter");
              n.push({
                el: d,
                wingsEl: m,
                size: s,
                speedMul: i.speedMul,
                x: eY(0.1, 0.85) * window.innerWidth,
                y: eY(0.15, 0.7) * window.innerHeight,
                heading: eY(0, 360),
                displayHeading: 0,
                speed: 0,
                state: "flutter",
                stateTimer: u.duration,
                targetSpeed: u.speed,
                flapFreq: u.flapFreq,
                headingJitter: u.headingJitter,
                flapPhase: Math.random() * Math.PI * 2,
                touchCooldown: 0,
              });
            }
            let i = performance.now();
            p.current = requestAnimationFrame(function e(t) {
              let r = Math.min(0.05, (t - i) / 1e3);
              i = t;
              let a = f.current,
                o = window.innerWidth,
                l = window.innerHeight,
                s = g.current;
              (n.forEach((e) => {
                var t, n, i, c, d, m;
                if (
                  (e.touchCooldown > 0 &&
                    (e.touchCooldown = e.touchCooldown - 1e3 * r),
                    (e.stateTimer = e.stateTimer - 1e3 * r),
                    e.stateTimer <= 0)
                ) {
                  let t;
                  ((m = e.state),
                    (t = Math.random()),
                    (e.state =
                      "startled" === m
                        ? "flutter"
                        : "flutter" === m
                          ? t < 0.55
                            ? "glide"
                            : t < 0.85
                              ? "flutter"
                              : "rest"
                          : "glide" === m
                            ? t < 0.7
                              ? "flutter"
                              : "glide"
                            : "flutter"));
                  let r = e2(e.state);
                  ((e.targetSpeed = r.speed),
                    (e.flapFreq = r.flapFreq),
                    (e.headingJitter = r.headingJitter),
                    (e.stateTimer = r.duration));
                }
                ((t = e.speed),
                  (n = e.targetSpeed),
                  (e.speed =
                    t + (n - t) * ("startled" === e.state ? 0.18 : 0.04)),
                  (e.heading =
                    e.heading + eY(-e.headingJitter, e.headingJitter) * r));
                let h = e.x / o,
                  u = e.y / l,
                  p = 0,
                  f = 0;
                if (
                  (h < 0.12 ? (p = 1) : h > 0.88 && (p = -1),
                    u < 0.12 ? (f = 1) : u > 0.88 && (f = -1),
                    0 !== p || 0 !== f)
                ) {
                  let t = eK(Math.atan2(f, p));
                  ((i = e.heading), (e.heading = i + (t - i) * 0.08));
                }
                let g = e.x - a.x,
                  y = e.y - a.y,
                  v = Math.sqrt(g * g + y * y),
                  x = 140 * s;
                if (v < x) {
                  let t = eK(Math.atan2(y, g));
                  ((c = e.heading),
                    (e.heading = c + 0.15 * (1 - v / x) * (t - c)),
                    (e.targetSpeed = Math.max(e.targetSpeed, 55 * s)));
                }
                let b = (e.heading * Math.PI) / 180,
                  w = e.speed * e.speedMul * s;
                ((e.x = e.x + Math.cos(b) * w * r),
                  (e.y = e.y + Math.sin(b) * w * r),
                  (e.x = eQ(e.x, 0, o - e.size)),
                  (e.y = eQ(e.y, 0, l - e.size)),
                  (e.flapPhase = e.flapPhase + e.flapFreq * Math.PI * 2 * r));
                let _ = Math.sin(e.flapPhase),
                  j = "rest" === e.state ? 0 : 0.04 * e.size * s;
                ((d = e.displayHeading),
                  (e.displayHeading = d + (e.heading - d) * 0.06));
                let S = e.displayHeading + 90;
                ((e.el.style.transform = `translate3d(${e.x}px, ${e.y + _ * j}px, 0) rotate(${S}deg)`),
                  (e.wingsEl.style.transform = `scaleX(${0.42 + ((_ + 1) / 2) * 0.5800000000000001})`));
              }),
                (p.current = requestAnimationFrame(e)));
            });
            let l = function (e) {
              ((f.current.x = e.clientX), (f.current.y = e.clientY));
            };
            window.addEventListener("mousemove", l, { passive: !0 });
            let s = function (e, t) {
              let r = g.current;
              n.forEach((a) => {
                if (a.touchCooldown > 0) return;
                let o = a.x + a.size / 2,
                  n = a.y + a.size / 2,
                  i = o - e,
                  l = n - t;
                if (Math.sqrt(i * i + l * l) < 0.65 * a.size + 24 * r) {
                  a.state = "startled";
                  let e = e2("startled");
                  ((a.targetSpeed = e.speed),
                    (a.flapFreq = e.flapFreq),
                    (a.headingJitter = e.headingJitter),
                    (a.stateTimer = e.duration),
                    (a.heading = eK(Math.atan2(l, i))),
                    (a.touchCooldown = 350));
                }
              });
            },
              c = !1,
              d = null,
              v = function (e) {
                let t = e.touches && e.touches[0];
                t &&
                  ((c = !0),
                    d && (clearTimeout(d), (d = null)),
                    (f.current.x = t.clientX),
                    (f.current.y = t.clientY),
                    s(t.clientX, t.clientY));
              },
              x = function (e) {
                let t = e.touches && e.touches[0];
                t &&
                  ((f.current.x = t.clientX),
                    (f.current.y = t.clientY),
                    s(t.clientX, t.clientY));
              },
              b = function () {
                ((c = !1),
                  (d = setTimeout(() => {
                    c || ((f.current.x = -9999), (f.current.y = -9999));
                  }, 250)));
              };
            (window.addEventListener("touchstart", v, { passive: !0 }),
              window.addEventListener("touchmove", x, { passive: !0 }),
              window.addEventListener("touchend", b, { passive: !0 }),
              window.addEventListener("touchcancel", b, { passive: !0 }));
            let w = function () {
              g.current = eZ();
            };
            return (
              window.addEventListener("resize", w),
              () => {
                (p.current && cancelAnimationFrame(p.current),
                  d && clearTimeout(d),
                  window.removeEventListener("mousemove", l),
                  window.removeEventListener("touchstart", v),
                  window.removeEventListener("touchmove", x),
                  window.removeEventListener("touchend", b),
                  window.removeEventListener("touchcancel", b),
                  window.removeEventListener("resize", w),
                  n.forEach(e5),
                  u.current && u.current.remove());
              }
            );
          }),
            (o = [m]),
            (c[2] = m),
            (c[3] = a),
            (c[4] = o))
          : ((a = c[3]), (o = c[4])),
        (0, l.useEffect)(a, o),
        c[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, n.jsx)("div", {
            ref: h,
            style: {
              position: "fixed",
              inset: 0,
              pointerEvents: "none",
              zIndex: 9995,
              overflow: "hidden",
            },
          })),
            (c[5] = s))
          : (s = c[5]),
        s
      );
    }
    function e5(e) {
      return e.el.remove();
    }
    function e4() {
      let e,
        t,
        r,
        a,
        o,
        l,
        c,
        d,
        m,
        h,
        u = (0, i.c)(10);
      return (
        u[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = { zIndex: 9995 }),
            (t = { opacity: 0, x: -20, y: -20 }),
            (r = { opacity: 1, x: 0, y: 0 }),
            (a = { duration: 1.8, delay: 3.5, ease: "easeOut" }),
            (u[0] = e),
            (u[1] = t),
            (u[2] = r),
            (u[3] = a))
          : ((e = u[0]), (t = u[1]), (r = u[2]), (a = u[3])),
        u[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, n.jsx)(s.motion.div, {
            className: "fixed top-0 left-0 pointer-events-none",
            style: e,
            initial: t,
            animate: r,
            transition: a,
            children: (0, n.jsx)(eu.default, {
              src: "/images/flowers/petal-scatter.png",
              alt: "",
              width: 260,
              height: 153,
              style: { objectFit: "contain" },
              className: " w-64 h-auto sm:w-85",
              priority: !0,
            }),
          })),
            (u[4] = o))
          : (o = u[4]),
        u[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = { zIndex: 9994 }),
            (c = { opacity: 0, x: 20, y: 20 }),
            (d = { opacity: 1, x: 0, y: 0 }),
            (m = { duration: 1.8, delay: 3.8, ease: "easeOut" }),
            (u[5] = l),
            (u[6] = c),
            (u[7] = d),
            (u[8] = m))
          : ((l = u[5]), (c = u[6]), (d = u[7]), (m = u[8])),
        u[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = (0, n.jsxs)(n.Fragment, {
            children: [
              o,
              (0, n.jsx)(s.motion.div, {
                className: "fixed bottom-0 right-0 pointer-events-none",
                style: l,
                initial: c,
                animate: d,
                transition: m,
                children: (0, n.jsx)(eu.default, {
                  src: "/images/flowers/bottom-right-bouquet.png",
                  alt: "",
                  width: 420,
                  height: 320,
                  style: { objectFit: "contain" },
                  className: "w-72 h-auto sm:w-95",
                }),
              }),
            ],
          })),
            (u[9] = h))
          : (h = u[9]),
        h
      );
    }
    let e6 = [
      {
        id: 1,
        src: "/images/couple/walking.jpg",
        alt: "Sonali and Sudev walking hand in hand",
        aspect: "tall",
      },
      {
        id: 2,
        src: "/images/couple/praying.jpg",
        alt: "Sonali and Sudev in prayer",
        aspect: "tall",
      },
      {
        id: 3,
        src: "/images/couple/standing.jpg",
        alt: "Sonali and Sudev together",
        aspect: "tall",
      },
      {
        id: 4,
        src: "/images/couple/hands.jpg",
        alt: "Hand in hand",
        aspect: "tall",
      },
    ],
      e8 = { tall: "2/3", wide: "3/2", square: "1/1" },
      e7 = {
        hidden: { opacity: 0, y: 28 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
        },
      },
      e9 = { hidden: {}, visible: { transition: { staggerChildren: 0.14 } } },
      te = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
        exit: { opacity: 0, transition: { duration: 0.3, ease: "easeIn" } },
      },
      tt = {
        hidden: { opacity: 0, scale: 0.94 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
        },
        exit: { opacity: 0, scale: 0.96, transition: { duration: 0.3 } },
      };
    function tr(e) {
      let t,
        r,
        a,
        o,
        l,
        c,
        d,
        m,
        h,
        u,
        p,
        f,
        g,
        y = (0, i.c)(23),
        { photo: v, index: x, onOpen: b } = e;
      (y[0] !== x
        ? ((t = {
          hidden: { opacity: 0, y: 32, scale: 0.98 },
          visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              duration: 1.1,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.07 * x,
            },
          },
        }),
          (y[0] = x),
          (y[1] = t))
        : (t = y[1]),
        y[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = { once: !0, amount: 0.15 }), (y[2] = r))
          : (r = y[2]),
        y[3] !== b || y[4] !== v
          ? ((a = () => b(v)), (y[3] = b), (y[4] = v), (y[5] = a))
          : (a = y[5]));
      let w = e8[v.aspect];
      return (
        y[6] !== w
          ? ((o = {
            aspectRatio: w,
            border: "1px solid var(--color-gold-glow-10)",
          }),
            (y[6] = w),
            (y[7] = o))
          : (o = y[7]),
        y[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = { rest: { scale: 1 }, hover: { scale: 1.05 } }), (y[8] = l))
          : (l = y[8]),
        y[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = { duration: 0.9, ease: [0.22, 1, 0.36, 1] }), (y[9] = c))
          : (c = y[9]),
        y[10] !== v.alt || y[11] !== v.src
          ? ((d = (0, n.jsx)(s.motion.div, {
            variants: l,
            initial: "rest",
            whileHover: "hover",
            transition: c,
            className: "absolute inset-0 h-full w-full",
            children: (0, n.jsx)(eu.default, {
              src: v.src,
              alt: v.alt,
              fill: !0,
              className: "object-cover object-center",
              sizes:
                "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
            }),
          })),
            (y[10] = v.alt),
            (y[11] = v.src),
            (y[12] = d))
          : (d = y[12]),
        y[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, n.jsx)(s.motion.div, {
            className: "absolute inset-0",
            initial: { opacity: 0 },
            whileHover: { opacity: 1 },
            transition: { duration: 0.4 },
            style: {
              background:
                "linear-gradient(to top, var(--color-surface-lg) 0%, var(--color-surface-2xs) 60%)",
            },
          })),
            (y[13] = m))
          : (m = y[13]),
        y[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = { opacity: 0, y: 8 }),
            (u = { opacity: 1, y: 0 }),
            (p = { duration: 0.35 }),
            (y[14] = h),
            (y[15] = u),
            (y[16] = p))
          : ((h = y[14]), (u = y[15]), (p = y[16])),
        y[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, n.jsx)(s.motion.div, {
            className: "absolute bottom-4 left-0 right-0 flex justify-center",
            initial: h,
            whileHover: u,
            transition: p,
            children: (0, n.jsx)("span", {
              className:
                "font-cinzel uppercase tracking-[0.4em] text-gold-light",
              style: { fontSize: "0.6rem" },
              children: "View",
            }),
          })),
            (y[17] = f))
          : (f = y[17]),
        y[18] !== t || y[19] !== a || y[20] !== o || y[21] !== d
          ? ((g = (0, n.jsxs)(s.motion.div, {
            variants: t,
            initial: "hidden",
            whileInView: "visible",
            viewport: r,
            whileHover: "hover",
            onClick: a,
            className: "group relative cursor-none overflow-hidden",
            style: o,
            children: [d, m, f],
          })),
            (y[18] = t),
            (y[19] = a),
            (y[20] = o),
            (y[21] = d),
            (y[22] = g))
          : (g = y[22]),
        g
      );
    }
    function ta(e) {
      let t,
        r,
        a,
        o,
        c,
        d,
        m,
        h,
        u,
        p,
        f = (0, i.c)(26),
        { photo: g, onClose: y, onPrev: v, onNext: x } = e,
        b = (0, l.useRef)(null);
      (f[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = {
          background: "var(--color-overlay-lightbox)",
          backdropFilter: "blur(12px)",
        }),
          (f[0] = t))
        : (t = f[0]),
        f[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (e) => (b.current = e.touches[0].clientX)), (f[1] = r))
          : (r = f[1]),
        f[2] !== x || f[3] !== v
          ? ((a = (e) => {
            let t = b.current - e.changedTouches[0].clientX;
            (t > 50 && x(), t < -50 && v());
          }),
            (f[2] = x),
            (f[3] = v),
            (f[4] = a))
          : (a = f[4]));
      let w = e8[g.aspect];
      return (
        f[5] !== w
          ? ((o = { aspectRatio: w }), (f[5] = w), (f[6] = o))
          : (o = f[6]),
        f[7] !== g.alt || f[8] !== g.src
          ? ((c = (0, n.jsx)(eu.default, {
            src: g.src,
            alt: g.alt,
            fill: !0,
            className: "object-contain",
            sizes: "90vw",
          })),
            (f[7] = g.alt),
            (f[8] = g.src),
            (f[9] = c))
          : (c = f[9]),
        f[10] !== o || f[11] !== c
          ? ((d = (0, n.jsx)(s.motion.div, {
            variants: tt,
            className: "relative max-h-[85vh] max-w-3xl w-full",
            style: o,
            onClick: to,
            children: c,
          })),
            (f[10] = o),
            (f[11] = c),
            (f[12] = d))
          : (d = f[12]),
        f[13] !== y
          ? ((m = (0, n.jsx)("button", {
            onClick: y,
            className:
              "absolute right-6 top-6 font-cinzel text-sm uppercase tracking-[0.4em] text-amber-400 opacity-90 transition-opacity hover:opacity-100",
            children: "Close",
          })),
            (f[13] = y),
            (f[14] = m))
          : (m = f[14]),
        f[15] !== v
          ? ((h = (0, n.jsx)("button", {
            onClick: (e) => {
              (e.stopPropagation(), v());
            },
            className:
              "absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-full border border-gold/50 bg-gold/10 text-amber-400 text-2xl opacity-80 hover:opacity-100 hover:bg-gold/20 transition-all sm:left-6",
            children: "←",
          })),
            (f[15] = v),
            (f[16] = h))
          : (h = f[16]),
        f[17] !== x
          ? ((u = (0, n.jsx)("button", {
            onClick: (e) => {
              (e.stopPropagation(), x());
            },
            className:
              "absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-full border border-gold/50 bg-gold/10 text-amber-400 text-2xl opacity-80 hover:opacity-100 hover:bg-gold/20 transition-all sm:right-6",
            children: "→",
          })),
            (f[17] = x),
            (f[18] = u))
          : (u = f[18]),
        f[19] !== y ||
          f[20] !== u ||
          f[21] !== a ||
          f[22] !== d ||
          f[23] !== m ||
          f[24] !== h
          ? ((p = (0, n.jsxs)(s.motion.div, {
            variants: te,
            initial: "hidden",
            animate: "visible",
            exit: "exit",
            className:
              "fixed inset-0 z-50 flex items-center justify-center px-4",
            style: t,
            onClick: y,
            onTouchStart: r,
            onTouchEnd: a,
            children: [d, m, h, u],
          })),
            (f[19] = y),
            (f[20] = u),
            (f[21] = a),
            (f[22] = d),
            (f[23] = m),
            (f[24] = h),
            (f[25] = p))
          : (p = f[25]),
        p
      );
    }
    function to(e) {
      return e.stopPropagation();
    }
    function tn() {
      let e,
        t,
        r,
        a,
        o,
        c,
        d,
        m,
        h,
        u,
        p,
        f,
        g,
        y,
        v,
        x,
        b = (0, i.c)(23),
        [w, _] = (0, l.useState)(null);
      b[0] !== w?.id
        ? ((e = (e) => e.id === w?.id), (b[0] = w?.id), (b[1] = e))
        : (e = b[1]);
      let j = e6.findIndex(e);
      b[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (e) => _(e)), (b[2] = t))
        : (t = b[2]);
      let S = t;
      b[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = () => _(null)), (b[3] = r))
        : (r = b[3]);
      let k = r;
      b[4] !== j
        ? ((a = () => _(e6[(j - 1 + e6.length) % e6.length])),
          (b[4] = j),
          (b[5] = a))
        : (a = b[5]);
      let N = a;
      b[6] !== j
        ? ((o = () => _(e6[(j + 1) % e6.length])), (b[6] = j), (b[7] = o))
        : (o = b[7]);
      let z = o;
      return (
        b[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = { background: "var(--color-dark)" }), (b[8] = c))
          : (c = b[8]),
        b[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, n.jsx)("div", {
            className: "pointer-events-none absolute inset-0",
            style: {
              background:
                "radial-gradient(ellipse 80% 40% at 50% 20%, var(--color-gold-glow-08) 0%, var(--color-rose-wash-md) 45%, transparent 70%)",
            },
          })),
            (b[9] = d))
          : (d = b[9]),
        b[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = { once: !0, amount: 0.4 }), (b[10] = m))
          : (m = b[10]),
        b[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = (0, n.jsx)(s.motion.p, {
            variants: e7,
            className:
              "mb-5 font-cinzel uppercase tracking-[0.6em] text-gold",
            style: {
              fontSize: "clamp(0.72rem, 1.8vw, 0.82rem)",
              opacity: 0.8,
            },
            children: "Moments Together",
          })),
            (b[11] = h))
          : (h = b[11]),
        b[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, n.jsx)(s.motion.h2, {
            variants: e7,
            className: "font-display",
            style: {
              fontSize: "clamp(2.8rem, 8vw, 5.5rem)",
              lineHeight: 0.9,
              letterSpacing: "-0.03em",
              color: "var(--color-name-text)",
            },
            children: "The Gallery",
          })),
            (b[12] = u))
          : (u = b[12]),
        b[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, n.jsx)("span", {
            className: "block h-px w-16",
            style: {
              background:
                "linear-gradient(to right, transparent, var(--color-gold-line-md), transparent)",
            },
          })),
            (b[13] = p))
          : (p = b[13]),
        b[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, n.jsx)("span", {
            className: "inline-block",
            style: {
              width: "18px",
              height: "2px",
              background: "var(--color-gold-line)",
            },
          })),
            (b[14] = f))
          : (f = b[14]),
        b[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, n.jsxs)(s.motion.div, {
            variants: e9,
            initial: "hidden",
            whileInView: "visible",
            viewport: m,
            className:
              "mb-14 flex flex-col items-center text-center sm:mb-16",
            children: [
              h,
              u,
              (0, n.jsxs)(s.motion.div, {
                variants: e7,
                className: "mt-6 flex items-center gap-4",
                children: [
                  p,
                  f,
                  (0, n.jsx)("span", {
                    className: "block h-px w-16",
                    style: {
                      background:
                        "linear-gradient(to right, transparent, var(--color-gold-line-md), transparent)",
                    },
                  }),
                ],
              }),
            ],
          })),
            (b[15] = g))
          : (g = b[15]),
        b[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = (0, n.jsxs)("section", {
            className: "relative overflow-hidden px-4 py-24 sm:px-6 sm:py-32",
            style: c,
            children: [
              d,
              (0, n.jsxs)("div", {
                className: "relative z-10 mx-auto max-w-6xl",
                children: [
                  g,
                  (0, n.jsxs)("div", {
                    className: "gap-3 sm:gap-4",
                    style: {
                      columnCount: "var(--cols, 2)",
                      columnGap: "inherit",
                    },
                    children: [
                      (0, n.jsx)("style", {
                        children:
                          "\n              @media (min-width: 768px)  { :root { --cols: 3; } }\n              @media (max-width: 767px)  { :root { --cols: 2; } }\n            ",
                      }),
                      e6.map((e, t) =>
                        (0, n.jsx)(
                          "div",
                          {
                            className: "mb-3 break-inside-avoid sm:mb-4",
                            children: (0, n.jsx)(tr, {
                              photo: e,
                              index: t,
                              onOpen: S,
                            }),
                          },
                          e.id,
                        ),
                      ),
                    ],
                  }),
                ],
              }),
            ],
          })),
            (b[16] = y))
          : (y = b[16]),
        b[17] !== z || b[18] !== N || b[19] !== w
          ? ((v =
            w &&
            (0, n.jsx)(ta, { photo: w, onClose: k, onPrev: N, onNext: z })),
            (b[17] = z),
            (b[18] = N),
            (b[19] = w),
            (b[20] = v))
          : (v = b[20]),
        b[21] !== v
          ? ((x = (0, n.jsxs)(n.Fragment, {
            children: [y, (0, n.jsx)(E.AnimatePresence, { children: v })],
          })),
            (b[21] = v),
            (b[22] = x))
          : (x = b[22]),
        x
      );
    }
    function ti() {
      document.body.style.overflow = "auto";
    }
    e.s(
      [
        "default",
        0,
        function () {
          let e,
            t,
            r,
            a,
            o,
            c,
            d,
            m,
            h,
            u,
            p,
            f,
            g = (0, i.c)(20),
            [y, v] = (0, l.useState)(!1);
          g[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = () => {
              v(!0);
            }),
              (g[0] = e))
            : (e = g[0]);
          let x = e;
          (g[1] !== y
            ? ((t = () => (
              y
                ? ((document.body.style.overflow = "auto"),
                  window.scrollTo(0, 0))
                : (document.body.style.overflow = "hidden"),
              ti
            )),
              (r = [y]),
              (g[1] = y),
              (g[2] = t),
              (g[3] = r))
            : ((t = g[2]), (r = g[3])),
            (0, l.useEffect)(t, r),
            g[4] !== y
              ? ((a =
                !y &&
                (0, n.jsx)(eX, {
                  onComplete: x,
                  src: "/video/intro.mp4",
                  poster: "/video/intro-poster.png",
                })),
                (g[4] = y),
                (g[5] = a))
              : (a = g[5]));
          let b = +!!y;
          (g[6] !== b
            ? ((o = { opacity: b }), (g[6] = b), (g[7] = o))
            : (o = g[7]),
            g[8] === Symbol.for("react.memo_cache_sentinel")
              ? ((c = { duration: 1.5, ease: [0.22, 1, 0.36, 1] }), (g[8] = c))
              : (c = g[8]));
          let w = y ? "auto" : "none";
          return (
            g[9] !== w
              ? ((d = { pointerEvents: w }), (g[9] = w), (g[10] = d))
              : (d = g[10]),
            g[11] === Symbol.for("react.memo_cache_sentinel")
              ? ((h = (0, n.jsx)(e3, {})),
                (m = (0, n.jsx)(e4, {})),
                (g[11] = m),
                (g[12] = h))
              : ((m = g[11]), (h = g[12])),
            g[13] === Symbol.for("react.memo_cache_sentinel")
              ? ((u = (0, n.jsxs)("section", {
                id: "invite",
                className: "bg-dark",
                children: [
                  (0, n.jsx)(eG, {}),
                  (0, n.jsx)(eD, {}),
                  (0, n.jsx)(eq, {}),
                  (0, n.jsx)(eh, {}),
                  (0, n.jsx)(eq, {}),
                  (0, n.jsx)(ew, {}),
                  (0, n.jsx)(eq, {}),
                  (0, n.jsx)(tn, {}),
                  (0, n.jsx)(eq, {}),
                  (0, n.jsx)(eM, {}),
                  (0, n.jsx)(eq, {}),
                  (0, n.jsx)(eT, {}),
                  (0, n.jsx)(eR, {}),
                ],
              })),
                (g[13] = u))
              : (u = g[13]),
            g[14] !== o || g[15] !== d
              ? ((p = (0, n.jsxs)(s.motion.main, {
                className: "bg-dark min-h-screen pt-32",
                initial: !1,
                animate: o,
                transition: c,
                style: d,
                children: [h, m, u],
              })),
                (g[14] = o),
                (g[15] = d),
                (g[16] = p))
              : (p = g[16]),
            g[17] !== p || g[18] !== a
              ? ((f = (0, n.jsxs)(n.Fragment, { children: [a, p] })),
                (g[17] = p),
                (g[18] = a),
                (g[19] = f))
              : (f = g[19]),
            f
          );
        },
      ],
      74647,
    );
  },
]);
