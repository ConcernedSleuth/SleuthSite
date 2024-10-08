/*! Built with http://stenciljs.com */
const { h: t } = window.QrCode,
  e = () =>
    Math.floor(65536 * (1 + Math.random()))
      .toString(16)
      .substring(1),
  r = () => e() + e() + e() + e() + e() + e() + e() + e();
function n(t) {
  return !!t || 0 === t || !1 === t;
}
function o(t) {
  return 'function' == typeof t;
}
function i(t) {
  return 'number' == typeof t;
}
function a(t) {
  return 'object' == typeof t && !!t;
}
function u(t) {
  return 'string' == typeof t;
}
function s(t) {
  return t && isFinite(t.length) && !u(t) && !o(t);
}
function f(t) {
  return t.nodeType || t instanceof SVGElement;
}
function c(t, e) {
  return t.hasOwnProperty(e);
}
const l = 1,
  d = 2,
  g = 3,
  h = void 0,
  p = /^([+|-]*[0-9]*[.]*?[0-9]+)([a-z%]+)*$/i;
function v(t, e) {
  return (
    -1 !==
    (function (t, e) {
      return t.indexOf(e);
    })(t, e)
  );
}
function m(t, e, r) {
  const n = t && t.length;
  if (!n) return h;
  if (e === h) return t[r ? n - 1 : 0];
  if (r) {
    for (let r = n - 1; r > -1; r--) if (e(t[r])) return t[r];
  } else for (let r = 0; r < n; r++) if (e(t[r])) return t[r];
  return h;
}
function y(t, e) {
  const r = t.indexOf(e);
  return -1 !== r ? t.splice(r, 1) : h;
}
function w(t) {
  return (e, r) => {
    const n = e[t],
      o = r[t];
    return n < o ? -1 : n > o ? 1 : 0;
  };
}
function b(t) {
  return n(t) ? (s(t) ? t : [t]) : [];
}
function C(t, e) {
  return e !== h && Array.prototype.push.call(t, e), e;
}
function k(t, e) {
  return v(t, e) || C(t, e), e;
}
function B(t, e) {
  var r = [];
  return (
    A(t, (t) => {
      var n = e(t);
      s(n) ? A(n, (t) => C(r, t)) : C(r, n);
    }),
    r
  );
}
function A(t, e) {
  const r = b(t);
  for (let t = 0, n = r.length; t < n; t++) e(r[t], t, n);
}
const M = 'tick',
  R = requestAnimationFrame,
  x = cancelAnimationFrame,
  S = () => performance.now(),
  L = [];
let T = h,
  D = h;
function I() {
  x(T), (T = D = h);
}
function $() {
  const t = L.length;
  if (((D = D || S()), !t)) return void I();
  const e = S(),
    r = e - D;
  (D = e), (T = R($));
  for (let e = t - 1; e > -1; e--) {
    const t = L[e];
    pt(M, t, r);
  }
}
function z(t) {
  y(L, t), L.length || I();
}
const q = (t, e, r) => {
    A(t.players, (t) => t.cancel()),
      (t.state = l),
      (t.time = h),
      (t.round = h),
      (t.players = h),
      z(t.id),
      r.trigger('cancel');
  },
  P = (t, e, r) => {
    q(t, 0, r), (r.destroyed = !0);
  },
  E = Math.abs,
  F = Math.floor,
  j = Math.max,
  Q = Math.min;
function Y(t, e, r) {
  return t !== h && e <= t && t <= r;
}
const O = {};
function X(t) {
  O[t.name] = t;
}
let W = 0;
const H = /\[object ([a-z]+)\]/i;
function N(t, e) {
  for (var r in t) if (t[r] === e) return r;
  const n = (function (t) {
    let e = t.id || t.name;
    if (!e) {
      e = Object.prototype.toString.call(t);
      const r = H.exec(e);
      r && (e = r[1]);
    }
    return '@' + e + '_' + ++W;
  })(e);
  return (t[n] = e), n;
}
function G(t) {
  return u(t)
    ? Array.prototype.slice.call(document.querySelectorAll(t))
    : o(t)
      ? G(t())
      : s(t)
        ? B(t, G)
        : a(t)
          ? [t]
          : [];
}
function U() {
  var t = {};
  return (
    A(arguments, (e) => {
      for (var r in e) c(e, r) && (t[r] = e[r]);
    }),
    t
  );
}
function V(t, e, r, n) {
  return o(t) ? V(t(e, r, n), e, r, n) : t;
}
const Z = w('offset');
function _(t) {
  var e;
  A(t, (t) => {
    t.value !== h ? (e = t.value) : (t.value = e);
  });
}
function J(t) {
  for (var e, r = t.length - 1; r > -1; r--) {
    var n = t[r];
    n.interpolate !== h ? (e = n.interpolate) : (n.interpolate = e);
  }
}
function K(t, e, r, n, o) {
  var i = m(e, (t) => 0 === t.offset);
  if (i === h || i.value === h) {
    var a = n.getValue(r, o);
    i === h
      ? e.splice(0, 0, { offset: 0, value: a, easing: t.easing, interpolate: h })
      : ((i.value = a), (i.easing = t.easing), (i.interpolate = h));
  }
}
function tt(t, e) {
  var r = m(e, (t) => 1 === t.offset, !0);
  if (r === h || r.value === h) {
    var n = e[e.length - 1].value;
    r === h
      ? C(e, { offset: 1, value: n, easing: t.easing, interpolate: h })
      : ((r.value = n), (r.easing = r.easing || t.easing));
  }
}
const et = (t, e, r) => {
  t.players === h &&
    (((t = t).players = []),
    A(t.configs, (e) =>
      (function (t, e) {
        A(
          (function (t) {
            const e = t.keyframes,
              r = t.from,
              n = t.to,
              o = t.stagger || 0,
              i = t.duration,
              a = [];
            return (
              A(G(t.target), (u, s, f) => {
                var c = {},
                  l = {};
                for (var d in (A(e, (t) => {
                  const e = c[t.prop] || (c[t.prop] = []),
                    n = (t.time - r) / (i || 1),
                    o = t.easing,
                    a = t.interpolate,
                    s = V(t.value, u, t.index, f);
                  l[t.prop] = t.plugin;
                  const d =
                    m(e, (t) => t.offset === n) ||
                    C(e, { easing: o, offset: n, value: s, interpolate: a });
                  (d.easing = o), (d.value = s), (d.interpolate = a);
                }),
                O)) {
                  var g = O[d];
                  if (g.onWillAnimate && t.keyframes.some((t) => t.plugin === d)) {
                    var h = U(t, { target: u });
                    g.onWillAnimate(h, c, l);
                  }
                }
                for (var p in c) {
                  var v = c[p],
                    y = l[p],
                    w = O[y];
                  v &&
                    (v.sort(Z),
                    K(t, v, u, w, p),
                    _(v),
                    J(v),
                    tt(t, v),
                    C(a, {
                      plugin: l[p],
                      target: u,
                      prop: p,
                      from: r + (o ? o * s : 0),
                      to: n + (o ? o * s : 0),
                      keyframes: v,
                    }));
                }
              }),
              a
            );
          })(
            (function t(e, r, a) {
              if (!n(r) || i(r) || o(r)) return r;
              if (u(r)) {
                const t = r;
                return c(e, t) && '@' === t.charAt(0) ? e[t] : t;
              }
              if (s(r)) {
                const n = [];
                return A(r, (r) => C(n, t(e, r, a))), n;
              }
              if (!a || f(r)) return r;
              var l = {};
              for (var d in r)
                if (c(r, d)) {
                  const n = r[d];
                  l[d] = a ? t(e, n, 'targets' !== d) : n;
                }
              return l;
            })(t.refs, e, !0),
          ),
          (e) => {
            const r = O[e.plugin].animate(e);
            r && ((r.from = e.from), (r.to = e.to), C(t.players, r));
          },
        );
      })(t, e),
    ),
    (function (t) {
      (t.duration = j.apply(
        h,
        t.players.filter((t) => isFinite(t.to)).map((t) => t.to),
      )),
        (t.time = isFinite(t.time) ? t.time : t.rate < 0 ? t.duration : 0);
    })(t));
  const a = t.state === g,
    l = t.time;
  a || z(t.id),
    A(t.players, (e) => {
      const r = e.from,
        n = e.to,
        o = a && Y(F(l), r, n),
        i = (1, Q(j((l - r) / (n - r), 0), 1));
      e.update(i, t.rate, o);
    }),
    r.trigger('update');
};
var rt;
const nt = (t, e, r) => {
    (t.round = 0),
      (t.state = d),
      t.yoyo || (t.time = t.rate < 0 ? 0 : t.duration),
      z(t.id),
      et(t, 0, r),
      r.trigger('finish'),
      t.destroy && P(t, 0, r);
  },
  ot = (t, e, r) => {
    (t.state = d), z(t.id), et(t, 0, r), r.trigger('pause');
  },
  it = (t, e, r) => {
    e && ((t.repeat = e.repeat), (t.yoyo = !!e.alternate), (t.destroy = !!e.destroy)),
      (t.repeat = t.repeat || 1),
      (t.yoyo = t.yoyo || !1),
      (t.state = g);
    const n = t.rate >= 0;
    n && t.time === t.duration ? (t.time = 0) : n || 0 !== t.time || (t.time = t.duration),
      (at = t.id),
      v(L, at) || C(L, at),
      T || (T = R($)),
      et(t, 0, r),
      r.trigger('play');
  };
var at;
const ut = (t) => {
    for (var e = 0, r = 0, n = t.configs, o = 0, i = n.length; o < i; o++) {
      var a = n[o],
        u = a.keyframes.map((t) => t.time),
        s = j.apply(h, u),
        f = Q.apply(h, u);
      (a.to = s), (a.from = f), (a.duration = s - f), (e = j(s, e)), (r = j(s + a.endDelay, r));
    }
    (t.cursor = r), (t.duration = e);
  },
  st = w('time'),
  ft = (t, e, r) => {
    A(e, (e) => {
      if (e.to === h) throw new Error('missing duration');
      A(
        (e = (function t(e, r, a) {
          if (!n(r) || u(r) || i(r)) return r;
          if (s(r)) return B(r, (r) => t(e, r, a));
          if (o(r)) return N(e, r);
          if (a) {
            for (var f in r) c(r, f) && (r[f] = t(e, r[f], a && 'targets' !== f));
            return r;
          }
          return N(e, r);
        })(t.refs, e, !0)).targets,
        (o, i, a) => {
          const u = (function (t, e, r, o, i) {
            const a = V(i.delay, e, r, o) || 0,
              u =
                m(t.configs, (t) => t.target === e) ||
                C(t.configs, {
                  from: j(i.from + a, 0),
                  to: j(i.to + a, 0),
                  easing: i.easing || 'ease',
                  duration: i.to - i.from,
                  endDelay: V(i.endDelay, e, r, o) || 0,
                  stagger: i.stagger || 0,
                  target: e,
                  targetLength: o,
                  propNames: [],
                  keyframes: [],
                }),
              s = (i.stagger && i.stagger * (r + 1)) || 0,
              f = V(i.delay, u, r, u.targetLength) || 0,
              l = j(s + f + i.from, 0),
              d = i.to - i.from,
              g = i.easing || 'ease';
            for (var h in O)
              if (c(i, h)) {
                const t = i[h];
                for (var p in t) {
                  var v = t[p];
                  c(t, p) && n(v) && ct(u, h, r, p, v, d, l, g);
                }
              }
            return u.keyframes.sort(st), u;
          })(t, o, i, a, e);
          r.dirty(u);
        },
      );
    }),
      ut(t),
      r.trigger('config');
  };
function ct(t, e, r, o, u, f, c, l) {
  let d, g;
  if (!s(u) && a(u)) {
    const t = u;
    t.easing && (l = t.easing), t.interpolate && (d = t.interpolate), (g = b(t.value));
  } else g = b(u);
  const p = g.map((e, n, o) => {
    const u = V(e, t.target, r, t.targetLength),
      s = u,
      f = a(u),
      c = f ? s.value : u,
      g = f && i(s.offset) ? s.offset : n === o.length - 1 ? 1 : 0 === n ? 0 : h,
      p = (s && s.interpolate) || d;
    return { offset: g, value: c, easing: (s && s.easing) || l, interpolate: p };
  });
  !(function (t) {
    if (!t.length) return;
    const e = m(t, (t) => 0 === t.offset) || t[0];
    n(e.offset) || (e.offset = 0);
    const r = m(t, (t) => 1 === t.offset, !0) || t[t.length - 1];
    t.length > 1 && !n(r.offset) && (r.offset = 1);
    for (let e = 1, r = t.length; e < r; e++) {
      if (!n(t[e].offset))
        for (let o = e + 1; o < r; o++) {
          const r = t[o].offset;
          if (n(r)) {
            const n = t[e - 1].offset,
              i = r - n,
              a = o - e + 1;
            for (let r = 1; r < a; r++) t[r - 1 + e].offset = (r / o) * i + n;
            e = o;
            break;
          }
        }
    }
  })(p),
    A(p, (n) => {
      const { offset: i, value: a } = n,
        u = F(f * i + c);
      (
        m(t.keyframes, (t) => t.prop === o && t.time === u) ||
        C(t.keyframes, {
          plugin: e,
          easing: n.easing,
          index: r,
          prop: o,
          time: u,
          value: a,
          interpolate: n.interpolate,
        })
      ).value = a;
    }),
    m(t.keyframes, (t) => t.prop === o && t.time === c) ||
      C(t.keyframes, {
        plugin: e,
        easing: l,
        index: r,
        prop: o,
        time: c,
        value: h,
        interpolate: d,
      });
  var v = c + f;
  m(t.keyframes, (t) => t.prop === o && t.time === v, !0) ||
    C(t.keyframes, { plugin: e, easing: l, index: r, prop: o, time: v, value: h, interpolate: d }),
    k(t.propNames, o);
}
const lt = [],
  dt = {},
  gt = {
    append: (t, e, r) => {
      const o = t.cursor,
        i = b(e).map((t) => {
          const { to: e, from: r, duration: i } = t,
            a = n(e),
            u = n(r),
            s = n(i),
            f = t;
          return (
            (f.to = a && (u || s) ? e : s && u ? r + i : a && !s ? o + e : s ? o + i : h),
            (f.from = u && (a || s) ? r : a && s ? e - i : a || s ? o : h),
            f
          );
        });
      ft(t, i, r);
    },
    cancel: q,
    destroy: P,
    finish: nt,
    insert: ft,
    pause: ot,
    play: it,
    reverse: (t, e, r) => {
      (t.rate *= -1), et(t, 0, r), r.trigger('reverse');
    },
    set: (t, e, r) => {
      const n = Object.keys(O),
        o = b(e).map((e) => {
          const r = e.at || t.cursor,
            o = {};
          for (var i in e)
            if (v(n, i)) {
              const t = e[i],
                r = {};
              for (var a in t) {
                var u = t[a];
                r[a] = [h, u];
              }
              o[i] = r;
            } else o[i] = e[i];
          return (o.from = r - 1e-9), (o.to = r), o;
        });
      ft(t, o, r);
    },
    [M]: (t, e, r) => {
      const n = t.duration,
        o = t.repeat,
        i = t.rate;
      let a = t.time === h ? (i < 0 ? n : 0) : t.time,
        u = t.round || 0;
      const s = i < 0;
      let f = !1;
      Y((a += e * i), 0, n) ||
        ((t.round = ++u),
        (a = s ? 0 : n),
        (f = !0),
        t.yoyo && (t.rate = -1 * (t.rate || 0)),
        (a = t.rate < 0 ? n : 0)),
        (t.time = a),
        (t.round = u),
        f && o === u ? nt(t, 0, r) : et(t, 0, r);
    },
    update: et,
    rate: (t, e, r) => {
      (t.rate = e || 1), et(t, 0, r);
    },
    time: (t, e, r) => {
      const n = +e;
      (t.time = isFinite(n) ? n : t.rate < 0 ? t.duration : 0), et(t, 0, r);
    },
  };
function ht(t) {
  const e = dt[t];
  if (!e) throw new Error('not found');
  return e.state;
}
function pt(t, e, r) {
  const n = gt[t],
    o = dt[e];
  if (!n || !o) throw new Error('not found');
  const i = { events: [], needUpdate: [], trigger: vt, dirty: mt },
    a = o.state;
  n(a, r, i),
    A(i.events, (t) => {
      const e = o.subs[t];
      e &&
        A(e, (t) => {
          t(a.time);
        });
    }),
    i.destroyed
      ? delete dt[e]
      : i.needUpdate.length &&
        (a.state !== l
          ? (function (t, e) {
              const r = t.state;
              switch ((A(t.players, (t) => t.cancel()), (t.players = h), r)) {
                case d:
                  ot(t, h, e);
                  break;
                case g:
                  it(t, h, e);
              }
            })(a, i)
          : ut(a),
        A(lt, (t) => {
          t(o);
        }));
}
function vt(t) {
  k(this.events, t);
}
function mt(t) {
  k(this.needUpdate, t);
}
'undefined' != typeof window &&
  (window.just_devtools = {
    dispatch: pt,
    subscribe(t) {
      k(lt, t);
    },
    unsubscribe(t) {
      y(lt, t);
    },
  });
const yt = {
  get state() {
    return ht(this.id).state;
  },
  get duration() {
    return ht(this.id).duration;
  },
  get currentTime() {
    return ht(this.id).time;
  },
  set currentTime(t) {
    pt('time', this.id, t);
  },
  get playbackRate() {
    return ht(this.id).rate;
  },
  set playbackRate(t) {
    pt('rate', this.id, t);
  },
  add(t) {
    return pt('append', this.id, t), this;
  },
  animate(t) {
    return pt('append', this.id, t), this;
  },
  fromTo(t, e, r) {
    return (
      A(r, (r) => {
        (r.to = e), (r.from = t);
      }),
      pt('insert', this.id, r),
      this
    );
  },
  cancel() {
    return pt('cancel', this.id), this;
  },
  destroy() {
    pt('destroy', this.id);
  },
  finish() {
    return pt('finish', this.id), this;
  },
  on(t, e) {
    return (
      (function (t, e, r) {
        const n = dt[t];
        n && k((n.subs[e] = n.subs[e] || []), r);
      })(this.id, t, e),
      this
    );
  },
  once(t, e) {
    const r = this;
    return (
      r.on(t, function n(o) {
        r.off(t, n), e(o);
      }),
      r
    );
  },
  off(t, e) {
    return (
      (function (t, e, r) {
        const n = dt[t];
        n && y(n.subs[e], r);
      })(this.id, t, e),
      this
    );
  },
  pause() {
    return pt('pause', this.id), this;
  },
  play(t) {
    return pt('play', this.id, t), this;
  },
  reverse() {
    return pt('reverse', this.id), this;
  },
  seek(t) {
    return pt('time', this.id, t), this;
  },
  sequence(t) {
    return A(t, (t) => pt('append', this.id, t)), this;
  },
  set(t) {
    return pt('set', this.id, t), this;
  },
};
Math.PI;
var wt = function (t, e, r) {
    return 3 * t * (1 - r) * (1 - r) * r + 3 * e * (1 - r) * r * r + r * r * r;
  },
  bt = /([a-z])[- ]([a-z])/gi,
  Ct = /^([a-z-]+)\(([^\)]+)\)$/i,
  kt = {
    ease: 'cubic-bezier(.25,.1,.25,1)',
    easeIn: 'cubic-bezier(.42,0,1,1)',
    easeOut: 'cubic-bezier(0,0,.58,1)',
    easeInOut: 'cubic-bezier(.42,0,.58,1)',
    stepStart: 'steps(1,1)',
    stepEnd: 'steps(1,0)',
    linear: 'cubic-bezier(0,0,1,1)',
  },
  Bt = function (t, e, r) {
    return e + r.toUpperCase();
  },
  At = Math.abs;
function Mt(t) {
  const e = [];
  return function () {
    const r = arguments;
    for (var n = 0, o = e.length; n < o; n++) {
      var i = e[n].args,
        a = r.length;
      if (i.length === a) {
        for (var u = 0, s = 0; s < a && i[s] === r[s]; s++) ++u;
        if (u === a) return e[n].value;
      }
    }
    var f = t.apply(h, r);
    return e.push({ args: r, value: f }), f;
  };
}
const Rt = Mt(function (t) {
    var e,
      r,
      n,
      o,
      i = (function (t) {
        var e,
          r = 'string' == typeof (e = t) ? e.replace(bt, Bt) : '',
          n = kt[r] || t,
          o = Ct.exec(n);
        if (!o) throw new Error('css parse error');
        return [o[1]].concat(o[2].split(','));
      })(t),
      a = i[0];
    if ('steps' === a)
      return (function (t, e) {
        var r = t / 1,
          n = 'end' === e ? 0 : 'start' === e ? 1 : e || 0;
        return function (t) {
          return t >= 1 ? 1 : n * r + t - ((n * r + t) % r);
        };
      })(+i[1], i[2]);
    if ('cubic-bezier' === a)
      return (
        (e = +i[1]),
        (r = +i[2]),
        (n = +i[3]),
        (o = +i[4]),
        e < 0 || e > 1 || n < 0 || n > 1
          ? function (t) {
              return t;
            }
          : function (t) {
              if (0 === t || 1 === t) return t;
              var i = 0,
                a = 1,
                u = 19;
              do {
                var s = 0.5 * (i + a),
                  f = wt(e, n, s);
                if (At(t - f) < 1e-4) return wt(r, o, s);
                f < t ? (i = s) : (a = s);
              } while (--u);
              return t;
            }
      );
    throw new Error('css parse error');
  }),
  xt = Mt((t) => Mt(t));
function St(t, e, r) {
  return t + (e - t) * r;
}
function Lt(t, e, r) {
  return r < 0.5 ? t : e;
}
function Tt(t) {
  return t.replace(/([A-Z])/g, (t) => '-' + t[0].toLowerCase());
}
function Dt(t) {
  return t.split(',');
}
const It = 0,
  $t = 1,
  zt = 2,
  qt = 3,
  Pt = /^\-\-[a-z0-9\-]+$/i,
  Et = ['viewBox'],
  Ft = ['viewBox'];
function jt(t, e) {
  return f(t) ? (Pt.test(e) ? qt : void 0 === t[e] || v(Et, e) ? (v(Ft, e) ? $t : zt) : It) : It;
}
function Qt(t, e) {
  const r = jt(t, e);
  return r === qt
    ? (function (t, e) {
        return () => t.style.getPropertyValue(e);
      })(t, e)
    : r === $t
      ? (function (t, e) {
          return () => t.getAttribute(e);
        })(t, e)
      : r === zt
        ? (function (t, r) {
            const n = Tt(e);
            return () => t.getAttribute(n);
          })(t)
        : (function (t, e) {
            return () => t[e];
          })(t, e);
}
function Yt(t) {
  return (function (t) {
    const e = Object.create(yt);
    return (
      ((t = t || {}).id = t.id || r()),
      (e.id = t.id),
      (function (t) {
        dt[t.id] = {
          state: (function (t) {
            const e = {};
            if (t.references) for (var r in t.references) e['@' + r] = t.references[r];
            return {
              configs: [],
              cursor: 0,
              duration: 0,
              id: t.id,
              players: h,
              rate: 1,
              refs: e,
              repeat: h,
              round: h,
              state: l,
              time: h,
              yoyo: !1,
            };
          })(t),
          subs: {},
        };
      })(t),
      e
    );
  })().add(t);
}
X({
  name: 'props',
  animate(t) {
    const { target: e, prop: r } = t,
      n = (function (t, e) {
        const r = e.map((e) => e.offset * t);
        return (
          A(e, (t) => {
            const e = !o(t.interpolate);
            (t.simpleFn = e), (t.interpolate = e ? (i(t.value) ? St : Lt) : xt(t.interpolate));
          }),
          function (n) {
            const o = t * n,
              i = (function (t, e) {
                const r = t.length;
                for (let n = 0; n < r; n++) if (t[n] > e) return n;
                return r - 1;
              })(r, o),
              a = i ? i - 1 : 0,
              u = r[i],
              s = r[a],
              f = e[a],
              c = (o - s) / (u - s),
              l = f.easing ? Rt(f.easing)(c) : c;
            return f.simpleFn
              ? f.interpolate(f.value, e[i].value, l)
              : f.interpolate(f.value, e[i].value)(l);
          }
        );
      })(t.to - t.from, t.keyframes),
      a = (function (t, e) {
        const r = jt(t, e);
        return r === qt
          ? (function (t, e) {
              return (r) => t.style.setProperty(e, r ? r + '' : '');
            })(t, e)
          : r === $t
            ? (function (t, e) {
                return (r) => t.setAttribute(e, r);
              })(t, e)
            : r === zt
              ? (function (t, r) {
                  const n = Tt(e);
                  return (e) => t.setAttribute(n, e);
                })(t)
              : (function (t, e) {
                  return (r) => (t[e] = r);
                })(t, e);
      })(e, r),
      u = Qt(e, r);
    let s = h;
    return {
      cancel() {
        s !== h && a(s), (s = h);
      },
      update(t, e, r) {
        s === h && (s = u()), a(n(t));
      },
    };
  },
  getValue: (t, e) => Qt(t, e)(),
});
const Ot = Dt('rotateX,rotateY,rotateZ,rotate'),
  Xt = Dt('scaleX,scaleY,scaleZ,scale'),
  Wt = Dt('perspective,x,y,z'),
  Ht = Ot.concat(Xt, Wt),
  Nt = { x: 'translateX', y: 'translateY', z: 'translateZ' },
  Gt = Dt(
    'backgroundSize,border,borderBottom,borderBottomLeftRadius,borderBottomRightRadius,borderBottomWidth,borderLeft,borderLeftWidth,borderRadius,borderRight,borderRightWidth,borderTop,borderTopLeftRadius,borderTopRightRadius,borderTopWidth,borderWidth,bottom,columnGap,columnRuleWidth,columnWidth,columns,flexBasis,font,fontSize,gridColumnGap,gridGap,gridRowGap,height,left,letterSpacing,lineHeight,margin,marginBottom,marginLeft,marginRight,marginTop,maskSize,maxHeight,maxWidth,minHeight,minWidth,outline,outlineOffset,outlineWidth,padding,paddingBottom,paddingLeft,paddingRight,paddingTop,perspective,right,shapeMargin,tabSize,top,width,wordSpacing',
  );
function Ut(t) {
  const e = { unit: h, value: h };
  if (!n(t)) return e;
  if (Number(t)) return (e.value = +t), e;
  const r = p.exec(t);
  return r && ((e.unit = r[2] || h), (e.value = r[1] ? parseFloat(r[1]) : h)), e;
}
const Vt = {
  name: 'web',
  animate: function (t) {
    const { keyframes: e, prop: r, from: n, to: o, target: i } = t,
      a = o - n,
      u = Mt(() => {
        const t = e.map(({ offset: t, value: e, easing: n }) => ({ offset: t, [r]: e, easing: n })),
          n = i.animate(t, { duration: a, fill: 'both' });
        return n.pause(), n;
      });
    return {
      cancel() {
        u().cancel();
      },
      update(t, e, r) {
        const n = u(),
          o = a * t;
        if ((E(n.currentTime - o) > 1 && (n.currentTime = o), r && n.playbackRate !== e)) {
          const t = n.currentTime;
          t < 1 ? (n.currentTime = 1) : t >= a - 1 && (n.currentTime = a - 1), (n.playbackRate = e);
        }
        r &&
          !('running' === n.playState || 'finish' === n.playState) &&
          !(e < 0 && o < 17) &&
          !(e >= 0 && o > a - 17) &&
          n.play(),
          !r && ('running' === n.playState || 'pending' === n.playState) && n.pause();
      },
    };
  },
  getValue: (t, e) => getComputedStyle(t)[e],
  onWillAnimate(t, e, r) {
    f(t.target) &&
      ((function (t) {
        for (var e in t)
          if (v(Gt, e)) {
            var r = t[e];
            for (var o in r) {
              var a = r[o];
              n(a) && i(a.value) && (a.value += 'px');
            }
          }
      })(e),
      (function (t, e, r) {
        const o = t.propNames.filter((t) => v(Ht, t));
        if (!o.length) return;
        if (v(t.propNames, 'transform')) throw new Error('transform + shorthand is not allowed');
        const i = [],
          a = {};
        A(o, (t) => {
          const r = e[t];
          r &&
            A(r, (t) => {
              (a[t.offset] = t.easing), k(i, t.offset);
            });
        }),
          i.sort();
        const u = i.map((t) => {
            const r = {};
            return (
              A(o, (n) => {
                const o = m(e[n], (e) => e.offset === t);
                r[n] = o ? o.value : h;
              }),
              { offset: t, easing: a[t], values: r }
            );
          }),
          s = u.length;
        for (let t = s - 1; t > -1; --t) {
          const e = u[t];
          for (const r in e.values) {
            if (n(e.values[r])) continue;
            let o = h;
            for (var f = t - 1; f > -1; f--)
              if (n(u[f].values[r])) {
                o = f;
                break;
              }
            let a = h;
            for (var c = t + 1; c < s; c++)
              if (n(u[c].values[r])) {
                a = c;
                break;
              }
            const l = o !== h;
            if (l && a !== h) {
              const t = u[o],
                e = u[a],
                n = Ut(t.values[r]),
                s = Ut(e.values[r]);
              for (let f = o + 1; f < a; f++) {
                const o = (i[f] - t.offset) / (e.offset - t.offset),
                  a = n.value + (s.value - n.value) * o + (s.unit || n.unit || '');
                u[f].values[r] = a;
              }
            } else if (l) for (let t = o + 1; t < s; t++) u[t].values[r] = u[o].values[r];
          }
        }
        if (u.length) {
          A(o, (t) => {
            e[t] = h;
          });
          const t = [];
          A(u, (e) => {
            let r = h;
            for (var n in e.values) {
              const t = Ut(e.values[n]);
              t.value !== h &&
                (t.unit || (t.unit = v(Wt, n) ? 'px' : v(Ot, n) ? 'deg' : ''),
                (r = (r ? r + ' ' : '') + (Nt[n] || n) + '(' + t.value + t.unit + ')'));
            }
            t.push({ offset: e.offset, value: r, easing: e.easing, interpolate: h });
          }),
            (e.transform = t),
            (r.transform = 'web');
        }
      })(t, e, r));
  },
};
var Zt,
  _t =
    ((function (t, e) {
      var r,
        n = (function () {
          var t = function (t, e) {
            var r = t,
              n = o[e],
              a = null,
              h = 0,
              p = null,
              m = [],
              y = {},
              w = function (t, e) {
                (a = (function (t) {
                  for (var e = new Array(t), r = 0; r < t; r += 1) {
                    e[r] = new Array(t);
                    for (var n = 0; n < t; n += 1) e[r][n] = null;
                  }
                  return e;
                })((h = 4 * r + 17))),
                  b(0, 0),
                  b(h - 7, 0),
                  b(0, h - 7),
                  k(),
                  C(),
                  A(t, e),
                  r >= 7 && B(t),
                  null == p && (p = R(r, n, m)),
                  M(p, e);
              },
              b = function (t, e) {
                for (var r = -1; r <= 7; r += 1)
                  if (!(t + r <= -1 || h <= t + r))
                    for (var n = -1; n <= 7; n += 1)
                      e + n <= -1 ||
                        h <= e + n ||
                        (a[t + r][e + n] =
                          (0 <= r && r <= 6 && (0 == n || 6 == n)) ||
                          (0 <= n && n <= 6 && (0 == r || 6 == r)) ||
                          (2 <= r && r <= 4 && 2 <= n && n <= 4));
              },
              C = function () {
                for (var t = 8; t < h - 8; t += 1) null == a[t][6] && (a[t][6] = t % 2 == 0);
                for (var e = 8; e < h - 8; e += 1) null == a[6][e] && (a[6][e] = e % 2 == 0);
              },
              k = function () {
                for (var t = i.getPatternPosition(r), e = 0; e < t.length; e += 1)
                  for (var n = 0; n < t.length; n += 1) {
                    var o = t[e],
                      u = t[n];
                    if (null == a[o][u])
                      for (var s = -2; s <= 2; s += 1)
                        for (var f = -2; f <= 2; f += 1)
                          a[o + s][u + f] =
                            -2 == s || 2 == s || -2 == f || 2 == f || (0 == s && 0 == f);
                  }
              },
              B = function (t) {
                for (var e = i.getBCHTypeNumber(r), n = 0; n < 18; n += 1) {
                  var o = !t && 1 == ((e >> n) & 1);
                  a[Math.floor(n / 3)][(n % 3) + h - 8 - 3] = o;
                }
                for (n = 0; n < 18; n += 1)
                  (o = !t && 1 == ((e >> n) & 1)), (a[(n % 3) + h - 8 - 3][Math.floor(n / 3)] = o);
              },
              A = function (t, e) {
                for (var r = (n << 3) | e, o = i.getBCHTypeInfo(r), u = 0; u < 15; u += 1) {
                  var s = !t && 1 == ((o >> u) & 1);
                  u < 6 ? (a[u][8] = s) : u < 8 ? (a[u + 1][8] = s) : (a[h - 15 + u][8] = s);
                }
                for (u = 0; u < 15; u += 1)
                  (s = !t && 1 == ((o >> u) & 1)),
                    u < 8
                      ? (a[8][h - u - 1] = s)
                      : u < 9
                        ? (a[8][15 - u - 1 + 1] = s)
                        : (a[8][15 - u - 1] = s);
                a[h - 8][8] = !t;
              },
              M = function (t, e) {
                for (
                  var r = -1, n = h - 1, o = 7, u = 0, s = i.getMaskFunction(e), f = h - 1;
                  f > 0;
                  f -= 2
                )
                  for (6 == f && (f -= 1); ; ) {
                    for (var c = 0; c < 2; c += 1)
                      if (null == a[n][f - c]) {
                        var l = !1;
                        u < t.length && (l = 1 == ((t[u] >>> o) & 1)),
                          s(n, f - c) && (l = !l),
                          (a[n][f - c] = l),
                          -1 == (o -= 1) && ((u += 1), (o = 7));
                      }
                    if ((n += r) < 0 || h <= n) {
                      (n -= r), (r = -r);
                      break;
                    }
                  }
              },
              R = function (t, e, r) {
                for (var n = s.getRSBlocks(t, e), o = f(), a = 0; a < r.length; a += 1) {
                  var c = r[a];
                  o.put(c.getMode(), 4),
                    o.put(c.getLength(), i.getLengthInBits(c.getMode(), t)),
                    c.write(o);
                }
                var l = 0;
                for (a = 0; a < n.length; a += 1) l += n[a].dataCount;
                if (o.getLengthInBits() > 8 * l)
                  throw 'code length overflow. (' + o.getLengthInBits() + '>' + 8 * l + ')';
                for (
                  o.getLengthInBits() + 4 <= 8 * l && o.put(0, 4);
                  o.getLengthInBits() % 8 != 0;

                )
                  o.putBit(!1);
                for (
                  ;
                  !(o.getLengthInBits() >= 8 * l || (o.put(236, 8), o.getLengthInBits() >= 8 * l));

                )
                  o.put(17, 8);
                return (function (t, e) {
                  for (
                    var r = 0,
                      n = 0,
                      o = 0,
                      a = new Array(e.length),
                      s = new Array(e.length),
                      f = 0;
                    f < e.length;
                    f += 1
                  ) {
                    var c = e[f].dataCount,
                      l = e[f].totalCount - c;
                    (n = Math.max(n, c)), (o = Math.max(o, l)), (a[f] = new Array(c));
                    for (var d = 0; d < a[f].length; d += 1) a[f][d] = 255 & t.getBuffer()[d + r];
                    r += c;
                    var g = i.getErrorCorrectPolynomial(l),
                      h = u(a[f], g.getLength() - 1).mod(g);
                    for (s[f] = new Array(g.getLength() - 1), d = 0; d < s[f].length; d += 1) {
                      var p = d + h.getLength() - s[f].length;
                      s[f][d] = p >= 0 ? h.getAt(p) : 0;
                    }
                  }
                  var v = 0;
                  for (d = 0; d < e.length; d += 1) v += e[d].totalCount;
                  var m = new Array(v),
                    y = 0;
                  for (d = 0; d < n; d += 1)
                    for (f = 0; f < e.length; f += 1)
                      d < a[f].length && ((m[y] = a[f][d]), (y += 1));
                  for (d = 0; d < o; d += 1)
                    for (f = 0; f < e.length; f += 1)
                      d < s[f].length && ((m[y] = s[f][d]), (y += 1));
                  return m;
                })(o, n);
              };
            return (
              (y.addData = function (t, e) {
                var r = null;
                switch ((e = e || 'Byte')) {
                  case 'Numeric':
                    r = c(t);
                    break;
                  case 'Alphanumeric':
                    r = l(t);
                    break;
                  case 'Byte':
                    r = d(t);
                    break;
                  case 'Kanji':
                    r = g(t);
                    break;
                  default:
                    throw 'mode:' + e;
                }
                m.push(r), (p = null);
              }),
              (y.isDark = function (t, e) {
                if (t < 0 || h <= t || e < 0 || h <= e) throw t + ',' + e;
                return a[t][e];
              }),
              (y.getModuleCount = function () {
                return h;
              }),
              (y.make = function () {
                if (r < 1) {
                  for (var t = 1; t < 40; t++) {
                    for (var e = s.getRSBlocks(t, n), o = f(), a = 0; a < m.length; a++) {
                      var u = m[a];
                      o.put(u.getMode(), 4),
                        o.put(u.getLength(), i.getLengthInBits(u.getMode(), t)),
                        u.write(o);
                    }
                    var c = 0;
                    for (a = 0; a < e.length; a++) c += e[a].dataCount;
                    if (o.getLengthInBits() <= 8 * c) break;
                  }
                  r = t;
                }
                w(
                  !1,
                  (function () {
                    for (var t = 0, e = 0, r = 0; r < 8; r += 1) {
                      w(!0, r);
                      var n = i.getLostPoint(y);
                      (0 == r || t > n) && ((t = n), (e = r));
                    }
                    return e;
                  })(),
                );
              }),
              (y.createTableTag = function (t, e) {
                t = t || 2;
                var r = '';
                (r += '<table style="'),
                  (r += ' border-width: 0px; border-style: none;'),
                  (r += ' border-collapse: collapse;'),
                  (r += ' padding: 0px; margin: ' + (e = void 0 === e ? 4 * t : e) + 'px;'),
                  (r += '">'),
                  (r += '<tbody>');
                for (var n = 0; n < y.getModuleCount(); n += 1) {
                  r += '<tr>';
                  for (var o = 0; o < y.getModuleCount(); o += 1)
                    (r += '<td style="'),
                      (r += ' border-width: 0px; border-style: none;'),
                      (r += ' border-collapse: collapse;'),
                      (r += ' padding: 0px; margin: 0px;'),
                      (r += ' width: ' + t + 'px;'),
                      (r += ' height: ' + t + 'px;'),
                      (r += ' background-color: '),
                      (r += y.isDark(n, o) ? '#000000' : '#ffffff'),
                      (r += ';'),
                      (r += '"/>');
                  r += '</tr>';
                }
                return (r += '</tbody>') + '</table>';
              }),
              (y.createSvgTag = function (t, e) {
                (t = t || 2), (e = void 0 === e ? 4 * t : e);
                var r,
                  n,
                  o,
                  i,
                  a = y.getModuleCount() * t + 2 * e,
                  u = '';
                for (
                  i = 'l' + t + ',0 0,' + t + ' -' + t + ',0 0,-' + t + 'z ',
                    u += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',
                    u += ' width="' + a + 'px"',
                    u += ' height="' + a + 'px"',
                    u += ' viewBox="0 0 ' + a + ' ' + a + '" ',
                    u += ' preserveAspectRatio="xMinYMin meet">',
                    u += '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',
                    u += '<path d="',
                    n = 0;
                  n < y.getModuleCount();
                  n += 1
                )
                  for (o = n * t + e, r = 0; r < y.getModuleCount(); r += 1)
                    y.isDark(n, r) && (u += 'M' + (r * t + e) + ',' + o + i);
                return (u += '" stroke="transparent" fill="black"/>') + '</svg>';
              }),
              (y.createDataURL = function (t, e) {
                (t = t || 2), (e = void 0 === e ? 4 * t : e);
                var r = y.getModuleCount() * t + 2 * e,
                  n = e,
                  o = r - e;
                return v(r, r, function (e, r) {
                  if (n <= e && e < o && n <= r && r < o) {
                    var i = Math.floor((e - n) / t),
                      a = Math.floor((r - n) / t);
                    return y.isDark(a, i) ? 0 : 1;
                  }
                  return 1;
                });
              }),
              (y.createImgTag = function (t, e, r) {
                (t = t || 2), (e = void 0 === e ? 4 * t : e);
                var n = y.getModuleCount() * t + 2 * e,
                  o = '';
                return (
                  (o += '<img'),
                  (o += ' src="'),
                  (o += y.createDataURL(t, e)),
                  (o += '"'),
                  (o += ' width="'),
                  (o += n),
                  (o += '"'),
                  (o += ' height="'),
                  (o += n),
                  (o += '"'),
                  r && ((o += ' alt="'), (o += r), (o += '"')),
                  o + '/>'
                );
              }),
              (y.renderTo2dContext = function (t, e) {
                e = e || 2;
                for (var r = y.getModuleCount(), n = 0; n < r; n++)
                  for (var o = 0; o < r; o++)
                    (t.fillStyle = y.isDark(n, o) ? 'black' : 'white'),
                      t.fillRect(n * e, o * e, e, e);
              }),
              y
            );
          };
          (t.stringToBytes = (t.stringToBytesFuncs = {
            default: function (t) {
              for (var e = [], r = 0; r < t.length; r += 1) {
                var n = t.charCodeAt(r);
                e.push(255 & n);
              }
              return e;
            },
          }).default),
            (t.createStringToBytes = function (t, e) {
              var r = (function () {
                  for (
                    var r = p(t),
                      n = function () {
                        var t = r.read();
                        if (-1 == t) throw 'eof';
                        return t;
                      },
                      o = 0,
                      i = {};
                    ;

                  ) {
                    var a = r.read();
                    if (-1 == a) break;
                    var u = n(),
                      s = (n() << 8) | n();
                    (i[String.fromCharCode((a << 8) | u)] = s), (o += 1);
                  }
                  if (o != e) throw o + ' != ' + e;
                  return i;
                })(),
                n = '?'.charCodeAt(0);
              return function (t) {
                for (var e = [], o = 0; o < t.length; o += 1) {
                  var i = t.charCodeAt(o);
                  if (i < 128) e.push(i);
                  else {
                    var a = r[t.charAt(o)];
                    'number' == typeof a
                      ? (255 & a) == a
                        ? e.push(a)
                        : (e.push(a >>> 8), e.push(255 & a))
                      : e.push(n);
                  }
                }
                return e;
              };
            });
          var e,
            r,
            n,
            o = { L: 1, M: 0, Q: 3, H: 2 },
            i =
              ((e = [
                [],
                [6, 18],
                [6, 22],
                [6, 26],
                [6, 30],
                [6, 34],
                [6, 22, 38],
                [6, 24, 42],
                [6, 26, 46],
                [6, 28, 50],
                [6, 30, 54],
                [6, 32, 58],
                [6, 34, 62],
                [6, 26, 46, 66],
                [6, 26, 48, 70],
                [6, 26, 50, 74],
                [6, 30, 54, 78],
                [6, 30, 56, 82],
                [6, 30, 58, 86],
                [6, 34, 62, 90],
                [6, 28, 50, 72, 94],
                [6, 26, 50, 74, 98],
                [6, 30, 54, 78, 102],
                [6, 28, 54, 80, 106],
                [6, 32, 58, 84, 110],
                [6, 30, 58, 86, 114],
                [6, 34, 62, 90, 118],
                [6, 26, 50, 74, 98, 122],
                [6, 30, 54, 78, 102, 126],
                [6, 26, 52, 78, 104, 130],
                [6, 30, 56, 82, 108, 134],
                [6, 34, 60, 86, 112, 138],
                [6, 30, 58, 86, 114, 142],
                [6, 34, 62, 90, 118, 146],
                [6, 30, 54, 78, 102, 126, 150],
                [6, 24, 50, 76, 102, 128, 154],
                [6, 28, 54, 80, 106, 132, 158],
                [6, 32, 58, 84, 110, 136, 162],
                [6, 26, 54, 82, 110, 138, 166],
                [6, 30, 58, 86, 114, 142, 170],
              ]),
              (n = function (t) {
                for (var e = 0; 0 != t; ) (e += 1), (t >>>= 1);
                return e;
              }),
              ((r = {}).getBCHTypeInfo = function (t) {
                for (var e = t << 10; n(e) - n(1335) >= 0; ) e ^= 1335 << (n(e) - n(1335));
                return 21522 ^ ((t << 10) | e);
              }),
              (r.getBCHTypeNumber = function (t) {
                for (var e = t << 12; n(e) - n(7973) >= 0; ) e ^= 7973 << (n(e) - n(7973));
                return (t << 12) | e;
              }),
              (r.getPatternPosition = function (t) {
                return e[t - 1];
              }),
              (r.getMaskFunction = function (t) {
                switch (t) {
                  case 0:
                    return function (t, e) {
                      return (t + e) % 2 == 0;
                    };
                  case 1:
                    return function (t, e) {
                      return t % 2 == 0;
                    };
                  case 2:
                    return function (t, e) {
                      return e % 3 == 0;
                    };
                  case 3:
                    return function (t, e) {
                      return (t + e) % 3 == 0;
                    };
                  case 4:
                    return function (t, e) {
                      return (Math.floor(t / 2) + Math.floor(e / 3)) % 2 == 0;
                    };
                  case 5:
                    return function (t, e) {
                      return ((t * e) % 2) + ((t * e) % 3) == 0;
                    };
                  case 6:
                    return function (t, e) {
                      return (((t * e) % 2) + ((t * e) % 3)) % 2 == 0;
                    };
                  case 7:
                    return function (t, e) {
                      return (((t * e) % 3) + ((t + e) % 2)) % 2 == 0;
                    };
                  default:
                    throw 'bad maskPattern:' + t;
                }
              }),
              (r.getErrorCorrectPolynomial = function (t) {
                for (var e = u([1], 0), r = 0; r < t; r += 1) e = e.multiply(u([1, a.gexp(r)], 0));
                return e;
              }),
              (r.getLengthInBits = function (t, e) {
                if (1 <= e && e < 10)
                  switch (t) {
                    case 1:
                      return 10;
                    case 2:
                      return 9;
                    case 4:
                    case 8:
                      return 8;
                    default:
                      throw 'mode:' + t;
                  }
                else if (e < 27)
                  switch (t) {
                    case 1:
                      return 12;
                    case 2:
                      return 11;
                    case 4:
                      return 16;
                    case 8:
                      return 10;
                    default:
                      throw 'mode:' + t;
                  }
                else {
                  if (!(e < 41)) throw 'type:' + e;
                  switch (t) {
                    case 1:
                      return 14;
                    case 2:
                      return 13;
                    case 4:
                      return 16;
                    case 8:
                      return 12;
                    default:
                      throw 'mode:' + t;
                  }
                }
              }),
              (r.getLostPoint = function (t) {
                for (var e = t.getModuleCount(), r = 0, n = 0; n < e; n += 1)
                  for (var o = 0; o < e; o += 1) {
                    for (var i = 0, a = t.isDark(n, o), u = -1; u <= 1; u += 1)
                      if (!(n + u < 0 || e <= n + u))
                        for (var s = -1; s <= 1; s += 1)
                          o + s < 0 ||
                            e <= o + s ||
                            (0 == u && 0 == s) ||
                            (a == t.isDark(n + u, o + s) && (i += 1));
                    i > 5 && (r += 3 + i - 5);
                  }
                for (n = 0; n < e - 1; n += 1)
                  for (o = 0; o < e - 1; o += 1) {
                    var f = 0;
                    t.isDark(n, o) && (f += 1),
                      t.isDark(n + 1, o) && (f += 1),
                      t.isDark(n, o + 1) && (f += 1),
                      t.isDark(n + 1, o + 1) && (f += 1),
                      (0 != f && 4 != f) || (r += 3);
                  }
                for (n = 0; n < e; n += 1)
                  for (o = 0; o < e - 6; o += 1)
                    t.isDark(n, o) &&
                      !t.isDark(n, o + 1) &&
                      t.isDark(n, o + 2) &&
                      t.isDark(n, o + 3) &&
                      t.isDark(n, o + 4) &&
                      !t.isDark(n, o + 5) &&
                      t.isDark(n, o + 6) &&
                      (r += 40);
                for (o = 0; o < e; o += 1)
                  for (n = 0; n < e - 6; n += 1)
                    t.isDark(n, o) &&
                      !t.isDark(n + 1, o) &&
                      t.isDark(n + 2, o) &&
                      t.isDark(n + 3, o) &&
                      t.isDark(n + 4, o) &&
                      !t.isDark(n + 5, o) &&
                      t.isDark(n + 6, o) &&
                      (r += 40);
                var c = 0;
                for (o = 0; o < e; o += 1) for (n = 0; n < e; n += 1) t.isDark(n, o) && (c += 1);
                return r + (Math.abs((100 * c) / e / e - 50) / 5) * 10;
              }),
              r),
            a = (function () {
              for (var t = new Array(256), e = new Array(256), r = 0; r < 8; r += 1) t[r] = 1 << r;
              for (r = 8; r < 256; r += 1) t[r] = t[r - 4] ^ t[r - 5] ^ t[r - 6] ^ t[r - 8];
              for (r = 0; r < 255; r += 1) e[t[r]] = r;
              return {
                glog: function (t) {
                  if (t < 1) throw 'glog(' + t + ')';
                  return e[t];
                },
                gexp: function (e) {
                  for (; e < 0; ) e += 255;
                  for (; e >= 256; ) e -= 255;
                  return t[e];
                },
              };
            })();
          function u(t, e) {
            if (void 0 === t.length) throw t.length + '/' + e;
            var r = (function () {
                for (var r = 0; r < t.length && 0 == t[r]; ) r += 1;
                for (var n = new Array(t.length - r + e), o = 0; o < t.length - r; o += 1)
                  n[o] = t[o + r];
                return n;
              })(),
              n = {
                getAt: function (t) {
                  return r[t];
                },
                getLength: function () {
                  return r.length;
                },
                multiply: function (t) {
                  for (
                    var e = new Array(n.getLength() + t.getLength() - 1), r = 0;
                    r < n.getLength();
                    r += 1
                  )
                    for (var o = 0; o < t.getLength(); o += 1)
                      e[r + o] ^= a.gexp(a.glog(n.getAt(r)) + a.glog(t.getAt(o)));
                  return u(e, 0);
                },
                mod: function (t) {
                  if (n.getLength() - t.getLength() < 0) return n;
                  for (
                    var e = a.glog(n.getAt(0)) - a.glog(t.getAt(0)),
                      r = new Array(n.getLength()),
                      o = 0;
                    o < n.getLength();
                    o += 1
                  )
                    r[o] = n.getAt(o);
                  for (o = 0; o < t.getLength(); o += 1) r[o] ^= a.gexp(a.glog(t.getAt(o)) + e);
                  return u(r, 0).mod(t);
                },
              };
            return n;
          }
          var s = (function () {
              var t = [
                  [1, 26, 19],
                  [1, 26, 16],
                  [1, 26, 13],
                  [1, 26, 9],
                  [1, 44, 34],
                  [1, 44, 28],
                  [1, 44, 22],
                  [1, 44, 16],
                  [1, 70, 55],
                  [1, 70, 44],
                  [2, 35, 17],
                  [2, 35, 13],
                  [1, 100, 80],
                  [2, 50, 32],
                  [2, 50, 24],
                  [4, 25, 9],
                  [1, 134, 108],
                  [2, 67, 43],
                  [2, 33, 15, 2, 34, 16],
                  [2, 33, 11, 2, 34, 12],
                  [2, 86, 68],
                  [4, 43, 27],
                  [4, 43, 19],
                  [4, 43, 15],
                  [2, 98, 78],
                  [4, 49, 31],
                  [2, 32, 14, 4, 33, 15],
                  [4, 39, 13, 1, 40, 14],
                  [2, 121, 97],
                  [2, 60, 38, 2, 61, 39],
                  [4, 40, 18, 2, 41, 19],
                  [4, 40, 14, 2, 41, 15],
                  [2, 146, 116],
                  [3, 58, 36, 2, 59, 37],
                  [4, 36, 16, 4, 37, 17],
                  [4, 36, 12, 4, 37, 13],
                  [2, 86, 68, 2, 87, 69],
                  [4, 69, 43, 1, 70, 44],
                  [6, 43, 19, 2, 44, 20],
                  [6, 43, 15, 2, 44, 16],
                  [4, 101, 81],
                  [1, 80, 50, 4, 81, 51],
                  [4, 50, 22, 4, 51, 23],
                  [3, 36, 12, 8, 37, 13],
                  [2, 116, 92, 2, 117, 93],
                  [6, 58, 36, 2, 59, 37],
                  [4, 46, 20, 6, 47, 21],
                  [7, 42, 14, 4, 43, 15],
                  [4, 133, 107],
                  [8, 59, 37, 1, 60, 38],
                  [8, 44, 20, 4, 45, 21],
                  [12, 33, 11, 4, 34, 12],
                  [3, 145, 115, 1, 146, 116],
                  [4, 64, 40, 5, 65, 41],
                  [11, 36, 16, 5, 37, 17],
                  [11, 36, 12, 5, 37, 13],
                  [5, 109, 87, 1, 110, 88],
                  [5, 65, 41, 5, 66, 42],
                  [5, 54, 24, 7, 55, 25],
                  [11, 36, 12, 7, 37, 13],
                  [5, 122, 98, 1, 123, 99],
                  [7, 73, 45, 3, 74, 46],
                  [15, 43, 19, 2, 44, 20],
                  [3, 45, 15, 13, 46, 16],
                  [1, 135, 107, 5, 136, 108],
                  [10, 74, 46, 1, 75, 47],
                  [1, 50, 22, 15, 51, 23],
                  [2, 42, 14, 17, 43, 15],
                  [5, 150, 120, 1, 151, 121],
                  [9, 69, 43, 4, 70, 44],
                  [17, 50, 22, 1, 51, 23],
                  [2, 42, 14, 19, 43, 15],
                  [3, 141, 113, 4, 142, 114],
                  [3, 70, 44, 11, 71, 45],
                  [17, 47, 21, 4, 48, 22],
                  [9, 39, 13, 16, 40, 14],
                  [3, 135, 107, 5, 136, 108],
                  [3, 67, 41, 13, 68, 42],
                  [15, 54, 24, 5, 55, 25],
                  [15, 43, 15, 10, 44, 16],
                  [4, 144, 116, 4, 145, 117],
                  [17, 68, 42],
                  [17, 50, 22, 6, 51, 23],
                  [19, 46, 16, 6, 47, 17],
                  [2, 139, 111, 7, 140, 112],
                  [17, 74, 46],
                  [7, 54, 24, 16, 55, 25],
                  [34, 37, 13],
                  [4, 151, 121, 5, 152, 122],
                  [4, 75, 47, 14, 76, 48],
                  [11, 54, 24, 14, 55, 25],
                  [16, 45, 15, 14, 46, 16],
                  [6, 147, 117, 4, 148, 118],
                  [6, 73, 45, 14, 74, 46],
                  [11, 54, 24, 16, 55, 25],
                  [30, 46, 16, 2, 47, 17],
                  [8, 132, 106, 4, 133, 107],
                  [8, 75, 47, 13, 76, 48],
                  [7, 54, 24, 22, 55, 25],
                  [22, 45, 15, 13, 46, 16],
                  [10, 142, 114, 2, 143, 115],
                  [19, 74, 46, 4, 75, 47],
                  [28, 50, 22, 6, 51, 23],
                  [33, 46, 16, 4, 47, 17],
                  [8, 152, 122, 4, 153, 123],
                  [22, 73, 45, 3, 74, 46],
                  [8, 53, 23, 26, 54, 24],
                  [12, 45, 15, 28, 46, 16],
                  [3, 147, 117, 10, 148, 118],
                  [3, 73, 45, 23, 74, 46],
                  [4, 54, 24, 31, 55, 25],
                  [11, 45, 15, 31, 46, 16],
                  [7, 146, 116, 7, 147, 117],
                  [21, 73, 45, 7, 74, 46],
                  [1, 53, 23, 37, 54, 24],
                  [19, 45, 15, 26, 46, 16],
                  [5, 145, 115, 10, 146, 116],
                  [19, 75, 47, 10, 76, 48],
                  [15, 54, 24, 25, 55, 25],
                  [23, 45, 15, 25, 46, 16],
                  [13, 145, 115, 3, 146, 116],
                  [2, 74, 46, 29, 75, 47],
                  [42, 54, 24, 1, 55, 25],
                  [23, 45, 15, 28, 46, 16],
                  [17, 145, 115],
                  [10, 74, 46, 23, 75, 47],
                  [10, 54, 24, 35, 55, 25],
                  [19, 45, 15, 35, 46, 16],
                  [17, 145, 115, 1, 146, 116],
                  [14, 74, 46, 21, 75, 47],
                  [29, 54, 24, 19, 55, 25],
                  [11, 45, 15, 46, 46, 16],
                  [13, 145, 115, 6, 146, 116],
                  [14, 74, 46, 23, 75, 47],
                  [44, 54, 24, 7, 55, 25],
                  [59, 46, 16, 1, 47, 17],
                  [12, 151, 121, 7, 152, 122],
                  [12, 75, 47, 26, 76, 48],
                  [39, 54, 24, 14, 55, 25],
                  [22, 45, 15, 41, 46, 16],
                  [6, 151, 121, 14, 152, 122],
                  [6, 75, 47, 34, 76, 48],
                  [46, 54, 24, 10, 55, 25],
                  [2, 45, 15, 64, 46, 16],
                  [17, 152, 122, 4, 153, 123],
                  [29, 74, 46, 14, 75, 47],
                  [49, 54, 24, 10, 55, 25],
                  [24, 45, 15, 46, 46, 16],
                  [4, 152, 122, 18, 153, 123],
                  [13, 74, 46, 32, 75, 47],
                  [48, 54, 24, 14, 55, 25],
                  [42, 45, 15, 32, 46, 16],
                  [20, 147, 117, 4, 148, 118],
                  [40, 75, 47, 7, 76, 48],
                  [43, 54, 24, 22, 55, 25],
                  [10, 45, 15, 67, 46, 16],
                  [19, 148, 118, 6, 149, 119],
                  [18, 75, 47, 31, 76, 48],
                  [34, 54, 24, 34, 55, 25],
                  [20, 45, 15, 61, 46, 16],
                ],
                e = function (t, e) {
                  var r = {};
                  return (r.totalCount = t), (r.dataCount = e), r;
                },
                r = {
                  getRSBlocks: function (r, n) {
                    var i = (function (e, r) {
                      switch (r) {
                        case o.L:
                          return t[4 * (e - 1) + 0];
                        case o.M:
                          return t[4 * (e - 1) + 1];
                        case o.Q:
                          return t[4 * (e - 1) + 2];
                        case o.H:
                          return t[4 * (e - 1) + 3];
                        default:
                          return;
                      }
                    })(r, n);
                    if (void 0 === i)
                      throw 'bad rs block @ typeNumber:' + r + '/errorCorrectionLevel:' + n;
                    for (var a = i.length / 3, u = [], s = 0; s < a; s += 1)
                      for (
                        var f = i[3 * s + 0], c = i[3 * s + 1], l = i[3 * s + 2], d = 0;
                        d < f;
                        d += 1
                      )
                        u.push(e(c, l));
                    return u;
                  },
                };
              return r;
            })(),
            f = function () {
              var t = [],
                e = 0,
                r = {
                  getBuffer: function () {
                    return t;
                  },
                  getAt: function (e) {
                    var r = Math.floor(e / 8);
                    return 1 == ((t[r] >>> (7 - (e % 8))) & 1);
                  },
                  put: function (t, e) {
                    for (var n = 0; n < e; n += 1) r.putBit(1 == ((t >>> (e - n - 1)) & 1));
                  },
                  getLengthInBits: function () {
                    return e;
                  },
                  putBit: function (r) {
                    var n = Math.floor(e / 8);
                    t.length <= n && t.push(0), r && (t[n] |= 128 >>> e % 8), (e += 1);
                  },
                };
              return r;
            },
            c = function (t) {
              var e = t,
                r = {
                  getMode: function () {
                    return 1;
                  },
                  getLength: function (t) {
                    return e.length;
                  },
                  write: function (t) {
                    for (var r = e, o = 0; o + 2 < r.length; )
                      t.put(n(r.substring(o, o + 3)), 10), (o += 3);
                    o < r.length &&
                      (r.length - o == 1
                        ? t.put(n(r.substring(o, o + 1)), 4)
                        : r.length - o == 2 && t.put(n(r.substring(o, o + 2)), 7));
                  },
                },
                n = function (t) {
                  for (var e = 0, r = 0; r < t.length; r += 1) e = 10 * e + o(t.charAt(r));
                  return e;
                },
                o = function (t) {
                  if ('0' <= t && t <= '9') return t.charCodeAt(0) - '0'.charCodeAt(0);
                  throw 'illegal char :' + t;
                };
              return r;
            },
            l = function (t) {
              var e = t,
                r = {
                  getMode: function () {
                    return 2;
                  },
                  getLength: function (t) {
                    return e.length;
                  },
                  write: function (t) {
                    for (var r = e, o = 0; o + 1 < r.length; )
                      t.put(45 * n(r.charAt(o)) + n(r.charAt(o + 1)), 11), (o += 2);
                    o < r.length && t.put(n(r.charAt(o)), 6);
                  },
                },
                n = function (t) {
                  if ('0' <= t && t <= '9') return t.charCodeAt(0) - '0'.charCodeAt(0);
                  if ('A' <= t && t <= 'Z') return t.charCodeAt(0) - 'A'.charCodeAt(0) + 10;
                  switch (t) {
                    case ' ':
                      return 36;
                    case '$':
                      return 37;
                    case '%':
                      return 38;
                    case '*':
                      return 39;
                    case '+':
                      return 40;
                    case '-':
                      return 41;
                    case '.':
                      return 42;
                    case '/':
                      return 43;
                    case ':':
                      return 44;
                    default:
                      throw 'illegal char :' + t;
                  }
                };
              return r;
            },
            d = function (e) {
              var r = t.stringToBytes(e);
              return {
                getMode: function () {
                  return 4;
                },
                getLength: function (t) {
                  return r.length;
                },
                write: function (t) {
                  for (var e = 0; e < r.length; e += 1) t.put(r[e], 8);
                },
              };
            },
            g = function (e) {
              var r = t.stringToBytesFuncs.SJIS;
              if (!r) throw 'sjis not supported.';
              !(function (t, e) {
                var n = r('友');
                if (2 != n.length || 38726 != ((n[0] << 8) | n[1])) throw 'sjis not supported.';
              })();
              var n = r(e);
              return {
                getMode: function () {
                  return 8;
                },
                getLength: function (t) {
                  return ~~(n.length / 2);
                },
                write: function (t) {
                  for (var e = n, r = 0; r + 1 < e.length; ) {
                    var o = ((255 & e[r]) << 8) | (255 & e[r + 1]);
                    if (33088 <= o && o <= 40956) o -= 33088;
                    else {
                      if (!(57408 <= o && o <= 60351)) throw 'illegal char at ' + (r + 1) + '/' + o;
                      o -= 49472;
                    }
                    (o = 192 * ((o >>> 8) & 255) + (255 & o)), t.put(o, 13), (r += 2);
                  }
                  if (r < e.length) throw 'illegal char at ' + (r + 1);
                },
              };
            },
            h = function () {
              var t = [],
                e = {
                  writeByte: function (e) {
                    t.push(255 & e);
                  },
                  writeShort: function (t) {
                    e.writeByte(t), e.writeByte(t >>> 8);
                  },
                  writeBytes: function (t, r, n) {
                    (r = r || 0), (n = n || t.length);
                    for (var o = 0; o < n; o += 1) e.writeByte(t[o + r]);
                  },
                  writeString: function (t) {
                    for (var r = 0; r < t.length; r += 1) e.writeByte(t.charCodeAt(r));
                  },
                  toByteArray: function () {
                    return t;
                  },
                  toString: function () {
                    var e = '';
                    e += '[';
                    for (var r = 0; r < t.length; r += 1) r > 0 && (e += ','), (e += t[r]);
                    return e + ']';
                  },
                };
              return e;
            },
            p = function (t) {
              var e = t,
                r = 0,
                n = 0,
                o = 0,
                i = {
                  read: function () {
                    for (; o < 8; ) {
                      if (r >= e.length) {
                        if (0 == o) return -1;
                        throw 'unexpected end of file./' + o;
                      }
                      var t = e.charAt(r);
                      if (((r += 1), '=' == t)) return (o = 0), -1;
                      t.match(/^\s$/) || ((n = (n << 6) | a(t.charCodeAt(0))), (o += 6));
                    }
                    var i = (n >>> (o - 8)) & 255;
                    return (o -= 8), i;
                  },
                },
                a = function (t) {
                  if (65 <= t && t <= 90) return t - 65;
                  if (97 <= t && t <= 122) return t - 97 + 26;
                  if (48 <= t && t <= 57) return t - 48 + 52;
                  if (43 == t) return 62;
                  if (47 == t) return 63;
                  throw 'c:' + t;
                };
              return i;
            },
            v = function (t, e, r) {
              for (
                var n = (function (t, e) {
                    var r = t,
                      n = e,
                      o = new Array(t * e),
                      i = {
                        setPixel: function (t, e, n) {
                          o[e * r + t] = n;
                        },
                        write: function (t) {
                          t.writeString('GIF87a'),
                            t.writeShort(r),
                            t.writeShort(n),
                            t.writeByte(128),
                            t.writeByte(0),
                            t.writeByte(0),
                            t.writeByte(0),
                            t.writeByte(0),
                            t.writeByte(0),
                            t.writeByte(255),
                            t.writeByte(255),
                            t.writeByte(255),
                            t.writeString(','),
                            t.writeShort(0),
                            t.writeShort(0),
                            t.writeShort(r),
                            t.writeShort(n),
                            t.writeByte(0);
                          var e = a(2);
                          t.writeByte(2);
                          for (var o = 0; e.length - o > 255; )
                            t.writeByte(255), t.writeBytes(e, o, 255), (o += 255);
                          t.writeByte(e.length - o),
                            t.writeBytes(e, o, e.length - o),
                            t.writeByte(0),
                            t.writeString(';');
                        },
                      },
                      a = function (t) {
                        for (
                          var e = 1 << t, r = 1 + (1 << t), n = t + 1, i = u(), a = 0;
                          a < e;
                          a += 1
                        )
                          i.add(String.fromCharCode(a));
                        i.add(String.fromCharCode(e)), i.add(String.fromCharCode(r));
                        var s,
                          f,
                          c,
                          l = h(),
                          d =
                            ((s = l),
                            (f = 0),
                            (c = 0),
                            {
                              write: function (t, e) {
                                if (t >>> e != 0) throw 'length over';
                                for (; f + e >= 8; )
                                  s.writeByte(255 & ((t << f) | c)),
                                    (e -= 8 - f),
                                    (t >>>= 8 - f),
                                    (c = 0),
                                    (f = 0);
                                (c |= t << f), (f += e);
                              },
                              flush: function () {
                                f > 0 && s.writeByte(c);
                              },
                            });
                        d.write(e, n);
                        var g = 0,
                          p = String.fromCharCode(o[g]);
                        for (g += 1; g < o.length; ) {
                          var v = String.fromCharCode(o[g]);
                          (g += 1),
                            i.contains(p + v)
                              ? (p += v)
                              : (d.write(i.indexOf(p), n),
                                i.size() < 4095 && (i.size() == 1 << n && (n += 1), i.add(p + v)),
                                (p = v));
                        }
                        return d.write(i.indexOf(p), n), d.write(r, n), d.flush(), l.toByteArray();
                      },
                      u = function () {
                        var t = {},
                          e = 0,
                          r = {
                            add: function (n) {
                              if (r.contains(n)) throw 'dup key:' + n;
                              (t[n] = e), (e += 1);
                            },
                            size: function () {
                              return e;
                            },
                            indexOf: function (e) {
                              return t[e];
                            },
                            contains: function (e) {
                              return void 0 !== t[e];
                            },
                          };
                        return r;
                      };
                    return i;
                  })(t, e),
                  o = 0;
                o < e;
                o += 1
              )
                for (var i = 0; i < t; i += 1) n.setPixel(i, o, r(i, o));
              var a = h();
              n.write(a);
              for (
                var u,
                  s,
                  f,
                  c,
                  l,
                  d,
                  g,
                  p =
                    ((u = 0),
                    (s = 0),
                    (f = 0),
                    (c = ''),
                    (d = function (t) {
                      c += String.fromCharCode(g(63 & t));
                    }),
                    (g = function (t) {
                      if (t < 0);
                      else {
                        if (t < 26) return 65 + t;
                        if (t < 52) return t - 26 + 97;
                        if (t < 62) return t - 52 + 48;
                        if (62 == t) return 43;
                        if (63 == t) return 47;
                      }
                      throw 'n:' + t;
                    }),
                    ((l = {}).writeByte = function (t) {
                      for (u = (u << 8) | (255 & t), s += 8, f += 1; s >= 6; )
                        d(u >>> (s - 6)), (s -= 6);
                    }),
                    (l.flush = function () {
                      if ((s > 0 && (d(u << (6 - s)), (u = 0), (s = 0)), f % 3 != 0))
                        for (var t = 3 - (f % 3), e = 0; e < t; e += 1) c += '=';
                    }),
                    (l.toString = function () {
                      return c;
                    }),
                    l),
                  v = a.toByteArray(),
                  m = 0;
                m < v.length;
                m += 1
              )
                p.writeByte(v[m]);
              return p.flush(), 'data:image/gif;base64,' + p;
            };
          return t;
        })();
      (n.stringToBytesFuncs['UTF-8'] = function (t) {
        return (function (t) {
          for (var e = [], r = 0; r < t.length; r++) {
            var n = t.charCodeAt(r);
            n < 128
              ? e.push(n)
              : n < 2048
                ? e.push(192 | (n >> 6), 128 | (63 & n))
                : n < 55296 || n >= 57344
                  ? e.push(224 | (n >> 12), 128 | ((n >> 6) & 63), 128 | (63 & n))
                  : (r++,
                    (n = 65536 + (((1023 & n) << 10) | (1023 & t.charCodeAt(r)))),
                    e.push(
                      240 | (n >> 18),
                      128 | ((n >> 12) & 63),
                      128 | ((n >> 6) & 63),
                      128 | (63 & n),
                    ));
          }
          return e;
        })(t);
      }),
        (r = function () {
          return n;
        }),
        (t.exports = r());
    })((Zt = { exports: {} })),
    Zt.exports);
const Jt = (t, e, r, n) => Math.hypot(r - t, n - e);
var Kt, te;
!(function (t) {
  (t[(t.Left = 0)] = 'Left'), (t[(t.Middle = 1)] = 'Middle'), (t[(t.Right = 2)] = 'Right');
})(Kt || (Kt = {})),
  (function (t) {
    (t[(t.Top = 0)] = 'Top'), (t[(t.Center = 1)] = 'Center'), (t[(t.Bottom = 2)] = 'Bottom');
  })(te || (te = {}));
const ee = (t) => (e, r, n, o) => ({
    adjustedX: n === Kt.Left ? e : n === Kt.Right ? e + t : e + t / 2,
    adjustedY: o === te.Top ? r : o === te.Bottom ? r + t : r + t / 2,
  }),
  re = ee(7),
  ne = ee(3);
function oe(t, e, r, n, o) {
  return t < e ? r : t > e ? o : n;
}
const ie = (t, e, r, n) => {
    const o = r / 2,
      i = oe(t, o, Kt.Right, Kt.Middle, Kt.Left),
      a = oe(e, o, te.Bottom, te.Center, te.Top);
    return n === ue.PositionCenter
      ? ne(t, e, i, a)
      : n === ue.PositionRing
        ? re(t, e, i, a)
        : { adjustedX: t, adjustedY: e };
  },
  ae = (t, e) => t.map((t) => ({ offset: t.offset, value: e(t.value) }));
var ue, se;
!(function (t) {
  (t.Module = 'module'),
    (t.PositionRing = 'position-ring'),
    (t.PositionCenter = 'position-center'),
    (t.Icon = 'icon');
})(ue || (ue = {})),
  (function (t) {
    (t.FadeInTopDown = 'FadeInTopDown'),
      (t.FadeInCenterOut = 'FadeInCenterOut'),
      (t.RadialRipple = 'RadialRipple'),
      (t.RadialRippleIn = 'RadialRippleIn'),
      (t.MaterializeIn = 'MaterializeIn');
  })(se || (se = {}));
const fe = (t, e, r, n, o) => ({
    targets: t,
    from: 20 * r,
    duration: 300,
    web: { opacity: [0, 1] },
  }),
  ce = (t, e, r, n, o) => {
    const { adjustedX: i, adjustedY: a } = ie(e, r, n, o),
      u = n / 2;
    return { targets: t, from: 20 * Jt(i, a, u, u), duration: 200, web: { opacity: [0, 1] } };
  },
  le = (t, e, r, n, o) => ({
    targets: t,
    from: o === ue.Module ? 200 * Math.random() : 200,
    duration: 200,
    web: { opacity: [0, 1] },
  }),
  de = ((t, e, r) => {
    const n = 0.8 / r[r.length - 1].time;
    return r.map(({ time: t, amplitude: e }) => ({ offset: 0.2 + t * n, value: e }));
  })(
    0,
    0,
    ((t, e, r) => {
      const n = 50 - Math.pow(3, 2);
      if (n < 0) throw new Error('This method only supports underdamped oscillation.');
      const o = Math.sqrt(n),
        i = (t) => ((t) => 5 * Math.pow(Math.E, -3 * t))(t) * Math.cos(o * t + 0),
        a = (t) => (Math.atan(-3 / o) + t * Math.PI - 0) / o,
        u = [];
      u.push({ time: 0, amplitude: i(0) });
      for (var s = 0; Math.abs(u[u.length - 1].amplitude) > 0.01; s++)
        a(s) >= 0 && u.push({ time: a(s), amplitude: i(a(s)) });
      return u;
    })(),
  ),
  ge = (t, e, r, n, o) => {
    const { adjustedX: i, adjustedY: a } = ie(e, r, n, o),
      u = n / 2;
    return {
      targets: t,
      from: 7 * Jt(i, a, u, u),
      easing: 'cubic-bezier(0.445,  0.050, 0.550, 0.950)',
      duration: 1e3,
      web: {
        scale: [
          ...(o === ue.Icon
            ? [
                { offset: 0, value: 1 },
                { offset: 0.1, value: 0.7 },
                { offset: 0.2, value: 1 },
              ]
            : [{ offset: 0, value: 1 }]),
          ...ae(de, (t) => 1 + (t / 5) * 0.1),
          1,
        ],
      },
    };
  },
  he = (t, e, r, n, o) => {
    const { adjustedX: i, adjustedY: a } = ie(e, r, n, o),
      u = n / 2;
    return {
      targets: t,
      from: 7 * Jt(i, a, u, u),
      easing: 'cubic-bezier(0.445,  0.050, 0.550, 0.950)',
      duration: 1e3,
      web: {
        scale: [
          ...(o === ue.Icon
            ? [
                { offset: 0, value: 1 },
                { offset: 0.1, value: 0.7 },
                { offset: 0.2, value: 1 },
              ]
            : [{ offset: 0, value: 0 }]),
          ...ae(de, (t) => 1 + (t / 5) * 0.1),
          1,
        ],
        opacity: [
          { offset: 0, value: 0 },
          { offset: 0.05, value: 1 },
        ],
      },
    };
  },
  pe = (t) => {
    switch (t) {
      case se.FadeInTopDown:
        return fe;
      case se.FadeInCenterOut:
        return ce;
      case se.RadialRipple:
        return ge;
      case se.RadialRippleIn:
        return he;
      case se.MaterializeIn:
        return le;
      default:
        throw new Error(`${t} is not a valid AnimationPreset.`);
    }
  };
X(Vt);
class ve {
  constructor() {
    (this.contents = ''),
      (this.protocol = ''),
      (this.moduleColor = '#000'),
      (this.positionRingColor = '#000'),
      (this.positionCenterColor = '#000'),
      (this.maskXToYRatio = 1),
      (this.squares = !1);
  }
  componentDidLoad() {
    this.updateQR();
  }
  componentDidUpdate() {
    this.codeRendered.emit();
  }
  updateQR() {
    const t = this.qrCodeElement === this.qrCodeElement.shadowRoot,
      e = this.qrCodeElement.shadowRoot.querySelector('slot'),
      r = t ? !!this.qrCodeElement.querySelector('[slot]') : !!e && e.assignedNodes().length > 0;
    this.data = this.generateQRCodeSVG(this.contents, r);
  }
  animateQRCode(t) {
    this.executeAnimation('string' == typeof t ? pe(t) : t);
  }
  getModuleCount() {
    return this.moduleCount;
  }
  executeAnimation(t) {
    const e = Array.from(this.qrCodeElement.shadowRoot.querySelectorAll('.module')),
      r = Array.from(this.qrCodeElement.shadowRoot.querySelectorAll('.position-ring')),
      n = Array.from(this.qrCodeElement.shadowRoot.querySelectorAll('.position-center')),
      o = Array.from(this.qrCodeElement.shadowRoot.querySelectorAll('#icon-wrapper')),
      i = (t, e) => t.map((t) => ({ element: t, entityType: e }));
    Yt(
      [...i(e, ue.Module), ...i(r, ue.PositionRing), ...i(n, ue.PositionCenter), ...i(o, ue.Icon)]
        .map(({ element: t, entityType: e }) => ({
          element: t,
          positionX: parseInt(t.dataset.column, 10),
          positionY: parseInt(t.dataset.row, 10),
          entityType: e,
        }))
        .map((e) => t(e.element, e.positionX, e.positionY, this.moduleCount, e.entityType)),
    ).play();
  }
  generateQRCodeSVG(t, e) {
    const r = _t(0, 'H');
    r.addData(t), r.make(), (this.moduleCount = r.getModuleCount());
    const n = this.moduleCount + 8,
      o = n / 2;
    return `\n    <svg\n        version="1.1"\n        xmlns="http://www.w3.org/2000/svg"\n        width="100%"\n        height="100%"\n        viewBox="${0 - o} ${0 - o} ${n} ${n}"\n        preserveAspectRatio="xMinYMin meet">\n    <rect\n        width="100%"\n        height="100%"\n        fill="white"\n        fill-opacity="0"\n        cx="${-o}"\n        cy="${-o}"/>\n    ${
      this.squares
        ? void 0
        : (function (t, e, r, n, o) {
            return `\n      ${i(4, 4, 4, r, n, o)}\n      ${i(t - 7 + 4, 4, 4, r, n, o)}\n      ${i(4, t - 7 + 4, 4, r, n, o)}\n      `;
          })(this.moduleCount, 0, this.positionRingColor, this.positionCenterColor, o)
    }\n    ${(function (t, e, r, n, o, i, s, f) {
      let c = '';
      for (let r = 0; r < e; r += 1) {
        const l = r + 4;
        for (let d = 0; d < e; d += 1)
          if (t.isDark(r, d) && (i || (!a(d, r, e) && !u(d, r, e, n, o)))) {
            const t = d + 4;
            c += i
              ? `\n            <rect x="${l - 0.5 - f}" y="${t - 0.5 - f}" width="1" height="1" />\n            `
              : `\n            <circle\n                class="module"\n                fill="${s}"\n                cx="${l - f}"\n                cy="${t - f}"\n                data-column="${r}"\n                data-row="${d}"\n                r="0.5"/>`;
          }
      }
      return c;
    })(
      r,
      this.moduleCount,
      0,
      e,
      this.maskXToYRatio,
      this.squares,
      this.moduleColor,
      o,
    )}\n    </svg>`;
    function i(t, e, r, n, o, i) {
      return `\n      <path class="position-ring" fill="${n}" data-column="${t - r}" data-row="${e - r}" d="M${t - i} ${e - 0.5 - i}h6s.5 0 .5 .5v6s0 .5-.5 .5h-6s-.5 0-.5-.5v-6s0-.5 .5-.5zm.75 1s-.25 0-.25 .25v4.5s0 .25 .25 .25h4.5s.25 0 .25-.25v-4.5s0-.25 -.25 -.25h-4.5z"/>\n      <path class="position-center" fill="${o}" data-column="${t - r + 2}" data-row="${e - r + 2}" d="M${t + 2 - i} ${e + 1.5 - i}h2s.5 0 .5 .5v2s0 .5-.5 .5h-2s-.5 0-.5-.5v-2s0-.5 .5-.5z"/>\n      `;
    }
    function a(t, e, r) {
      return t <= 7 ? e <= 7 || e >= r - 7 : e <= 7 && t >= r - 7;
    }
    function u(t, e, r, n, o) {
      if (!n) return !1;
      const i = r / 2,
        a = Math.floor((r * Math.sqrt(0.1)) / 2),
        u = a * o,
        s = a / o;
      return t >= i - s && t <= i + s && e >= i - u && e <= i + u;
    }
  }
  render() {
    return t(
      'div',
      { id: 'qr-container' },
      t(
        'div',
        {
          id: 'icon-container',
          style: this.squares ? { display: 'none', visibility: 'hidden' } : {},
        },
        t(
          'div',
          {
            id: 'icon-wrapper',
            style: { width: `${18 * this.maskXToYRatio}%` },
            'data-column': this.moduleCount / 2,
            'data-row': this.moduleCount / 2,
          },
          t('slot', { name: 'icon' }),
        ),
      ),
      t('div', { innerHTML: this.data }),
    );
  }
  static get is() {
    return 'qr-code';
  }
  static get encapsulation() {
    return 'shadow';
  }
  static get properties() {
    return {
      animateQRCode: { method: !0 },
      contents: { type: String, attr: 'contents', watchCallbacks: ['updateQR'] },
      data: { state: !0 },
      getModuleCount: { method: !0 },
      maskXToYRatio: { type: Number, attr: 'mask-x-to-y-ratio', watchCallbacks: ['updateQR'] },
      moduleColor: { type: String, attr: 'module-color', watchCallbacks: ['updateQR'] },
      moduleCount: { state: !0 },
      positionCenterColor: {
        type: String,
        attr: 'position-center-color',
        watchCallbacks: ['updateQR'],
      },
      positionRingColor: {
        type: String,
        attr: 'position-ring-color',
        watchCallbacks: ['updateQR'],
      },
      protocol: { type: String, attr: 'protocol', watchCallbacks: ['updateQR'] },
      qrCodeElement: { elementRef: !0 },
      squares: { type: Boolean, attr: 'squares', watchCallbacks: ['updateQR'] },
    };
  }
  static get events() {
    return [
      { name: 'codeRendered', method: 'codeRendered', bubbles: !0, cancelable: !0, composed: !0 },
    ];
  }
  static get style() {
    return ':host{display:block;contain:content}#qr-container{position:relative}#icon-container{position:absolute;width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}';
  }
}
export { ve as QrCode };
