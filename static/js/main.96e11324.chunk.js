(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    104: function(e, t, n) {
      "use strict";
      n.r(t);
      var a,
        r = n(75),
        c = n(7),
        u = n(0),
        o = n.n(u),
        i = n(43),
        l = n.n(i),
        s = n(27),
        b = n(8),
        f = n(33),
        p = n(70),
        h = n.n(p),
        v = n(17),
        y = n(71),
        d = n(110),
        m = n(72),
        O = n(57),
        j = n(31),
        C = { GBP: "GBP", EUR: "EUR", USD: "USD" },
        g = "@exchange-app/FETCH_RATES_REQUEST",
        E = "@exchange-app/FETCH_RATES_SUCCESS",
        R = "@exchange-app/FETCH_RATES_FAILURE",
        x = "@exchange-app/FETCH_RATES_CANCEL";
      function k(e) {
        return { type: g, payload: { base: e } };
      }
      function w() {
        return { type: x };
      }
      var A = {
        base: C.GBP,
        date: "",
        rates: ((a = {}),
        Object(j.a)(a, C.GBP, 1),
        Object(j.a)(a, C.EUR, 1),
        Object(j.a)(a, C.USD, 1),
        a),
      };
      function S(e) {
        return Math.random() * e;
      }
      var N = { GBP: S(100), EUR: S(200), USD: S(500) };
      var U = Object(v.combineReducers)({
          account: function() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : N;
            return arguments.length > 1 && arguments[1], e;
          },
          exchange: function() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : A,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case g:
                var n = t.payload.base,
                  a = Object.keys(C).reduce(function(e, t) {
                    return Object(O.a)({}, e, Object(j.a)({}, t, 1));
                  }, {});
                return Object(O.a)({}, e, { base: n, rates: a });
              case E:
                var r = t.payload,
                  c = r.base,
                  u = r.date,
                  o = r.rates;
                return {
                  base: c,
                  date: u,
                  rates: Object.keys(C).reduce(function(e, t) {
                    return Object(O.a)({}, e, Object(j.a)({}, t, o[t] || 1));
                  }, {}),
                };
              default:
                return e;
            }
          },
        }),
        T = n(113),
        B = n(54),
        D = n(114),
        F = n(107),
        P = n(111),
        V = n(28),
        _ = n(108),
        I = n(109),
        G = n(105),
        H = n(112),
        z = Object(H.a)(function(e) {
          return e.pipe(
            Object(G.a)(g),
            Object(F.a)(function(t) {
              var n = t.payload.base,
                a = Object.keys(C)
                  .filter(function(e) {
                    return e !== n;
                  })
                  .join(",");
              return Object(T.a)(1e4).pipe(
                Object(P.a)(0),
                Object(F.a)(function() {
                  return D.a
                    .getJSON(
                      "https://api.exchangeratesapi.io/latest?base="
                        .concat(n, "&symbols=")
                        .concat(a)
                    )
                    .pipe(
                      Object(V.a)(function(e) {
                        return { type: E, payload: e };
                      }),
                      Object(_.a)(function(e) {
                        return Object(B.a)(
                          (function(e, t) {
                            return { type: R, error: !0, payload: t };
                          })(t.payload.base, e)
                        );
                      })
                    );
                }),
                Object(I.a)(e.pipe(Object(G.a)(x)))
              );
            })
          );
        }),
        M = Object(d.a)();
      var W = function(e) {
        var t = Object(v.createStore)(
          U,
          e,
          Object(m.composeWithDevTools)(Object(v.applyMiddleware)(y.a, M))
        );
        return M.run(z), t;
      };
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      var J = n(9),
        L = n(10),
        $ = n(12),
        Q = n(11),
        Y = n(13);
      function q() {
        var e = Object(c.a)([
          "\n  font-size: 2rem;\n  text-align: right;\n  outline: none;\n",
        ]);
        return (
          (q = function() {
            return e;
          }),
          e
        );
      }
      var K = b.b.input.attrs({ type: "text", size: 10 })(q()),
        X = (function(e) {
          function t() {
            var e, n;
            Object(J.a)(this, t);
            for (var a = arguments.length, r = new Array(a), c = 0; c < a; c++)
              r[c] = arguments[c];
            return (
              ((n = Object($.a)(
                this,
                (e = Object(Q.a)(t)).call.apply(e, [this].concat(r))
              )).inputRef = Object(u.createRef)()),
              (n.focus = function() {
                n.inputRef.current && n.inputRef.current.focus();
              }),
              (n.handleChange = function(e) {
                var t = n.props,
                  a = t.sign,
                  r = t.onChange,
                  c = e.target.value,
                  u = c[0] === a ? c.slice(1) : c,
                  o = /^([1-9]\d*|0)(\.\d*)?$/.test(u),
                  i = "" === c || c === a;
                e.preventDefault(), (o || i) && r(u);
              }),
              n
            );
          }
          return (
            Object(Y.a)(t, e),
            Object(L.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this.props.readOnly;
                  return o.a.createElement(K, {
                    ref: this.inputRef,
                    readOnly: e,
                    "aria-label": "number-input",
                    value: this.renderValue,
                    onChange: this.handleChange,
                  });
                },
              },
              {
                key: "renderValue",
                get: function() {
                  var e = this.props,
                    t = e.value,
                    n = e.sign;
                  return "0" === t || "" === t ? t : "".concat(n).concat(t);
                },
              },
            ]),
            t
          );
        })(u.Component);
      X.defaultProps = { readOnly: !1, onChange: function() {} };
      var Z = X;
      function ee() {
        var e = Object(c.a)(["\n  margin-top: 1rem;\n  text-align: center;\n"]);
        return (
          (ee = function() {
            return e;
          }),
          e
        );
      }
      var te = b.b.div(ee()),
        ne = (function(e) {
          function t() {
            var e, n;
            Object(J.a)(this, t);
            for (var a = arguments.length, r = new Array(a), c = 0; c < a; c++)
              r[c] = arguments[c];
            return (
              ((n = Object($.a)(
                this,
                (e = Object(Q.a)(t)).call.apply(e, [this].concat(r))
              )).handleCurrencyChange = function(e) {
                var t = e.target.value;
                n.props.onChange(t);
              }),
              n
            );
          }
          return (
            Object(Y.a)(t, e),
            Object(L.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this,
                    t = this.props.selectedCurrency;
                  return o.a.createElement(
                    te,
                    null,
                    Object.keys(C).map(function(n) {
                      return o.a.createElement(
                        "label",
                        { key: n },
                        o.a.createElement("input", {
                          type: "radio",
                          value: n,
                          checked: n === t,
                          onChange: e.handleCurrencyChange,
                        }),
                        n
                      );
                    })
                  );
                },
              },
            ]),
            t
          );
        })(u.Component),
        ae = function(e) {
          var t = e.currency,
            n = e.value;
          return o.a.createElement(f.b, {
            style: "currency",
            currency: t,
            maximumFractionDigits: 2,
            value: n,
          });
        },
        re = function(e) {
          var t = e.currency,
            n = e.value;
          return o.a.createElement(f.a, {
            id: "total",
            values: { value: o.a.createElement(ae, { currency: t, value: n }) },
          });
        },
        ce = function(e) {
          var t = e.baseCurrency,
            n = e.targetCurrency,
            a = e.value;
          return o.a.createElement(f.a, {
            id: "exchangeRate",
            values: {
              target: o.a.createElement(ae, { currency: n, value: 1 }),
              base: o.a.createElement(ae, { currency: t, value: a }),
            },
          });
        };
      function ue() {
        var e = Object(c.a)(["\n  font-size: 2rem;\n"]);
        return (
          (ue = function() {
            return e;
          }),
          e
        );
      }
      function oe() {
        var e = Object(c.a)(["\n  font-size: 1rem;\n"]);
        return (
          (oe = function() {
            return e;
          }),
          e
        );
      }
      function ie() {
        var e = Object(c.a)([
          "\n  display: flex;\n  justify-content: space-between;\n",
        ]);
        return (
          (ie = function() {
            return e;
          }),
          e
        );
      }
      function le() {
        var e = Object(c.a)([
          "\n  display: flex;\n  justify-content: space-between;\n",
        ]);
        return (
          (le = function() {
            return e;
          }),
          e
        );
      }
      function se() {
        var e = Object(c.a)(["\n  padding: 20px;\n"]);
        return (
          (se = function() {
            return e;
          }),
          e
        );
      }
      var be = b.b.div(se()),
        fe = b.b.div(le()),
        pe = b.b.div(ie()),
        he = b.b.div(oe()),
        ve = b.b.div(ue()),
        ye = (function(e) {
          function t() {
            var e, n;
            Object(J.a)(this, t);
            for (var a = arguments.length, r = new Array(a), c = 0; c < a; c++)
              r[c] = arguments[c];
            return (
              ((n = Object($.a)(
                this,
                (e = Object(Q.a)(t)).call.apply(e, [this].concat(r))
              )).inputRef = Object(u.createRef)()),
              n
            );
          }
          return (
            Object(Y.a)(t, e),
            Object(L.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  this.inputRef.current && this.inputRef.current.focus();
                },
              },
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.className,
                    n = e.selectedCurrency,
                    a = e.total,
                    r = e.value,
                    c = e.onValueChange,
                    u = e.onCurrencyChange;
                  return o.a.createElement(
                    be,
                    { className: t },
                    o.a.createElement(
                      fe,
                      null,
                      o.a.createElement(ve, null, n),
                      o.a.createElement(Z, {
                        ref: this.inputRef,
                        value: r,
                        sign: "-",
                        onChange: c,
                      })
                    ),
                    o.a.createElement(
                      pe,
                      null,
                      o.a.createElement(re, { currency: n, value: a })
                    ),
                    o.a.createElement(ne, { selectedCurrency: n, onChange: u })
                  );
                },
              },
            ]),
            t
          );
        })(u.Component);
      ye.defaultProps = { className: "" };
      var de = ye,
        me = (function(e) {
          function t() {
            return (
              Object(J.a)(this, t),
              Object($.a)(this, Object(Q.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(Y.a)(t, e),
            Object(L.a)(t, [
              {
                key: "render",
                value: function() {
                  return o.a.createElement(de, this.props);
                },
              },
            ]),
            t
          );
        })(u.Component),
        Oe = Object(s.b)(function(e, t) {
          return { total: e.account[t.selectedCurrency] };
        })(me),
        je = function(e) {
          var t = e.className,
            n = void 0 === t ? "" : t,
            a = e.rate,
            r = e.total,
            c = e.baseCurrency,
            u = e.baseCurrencyAmount,
            i = e.selectedCurrency,
            l = e.onCurrencyChange,
            s = u ? (a * u).toFixed(2) : "";
          return o.a.createElement(
            be,
            { className: n },
            o.a.createElement(
              fe,
              null,
              o.a.createElement(ve, null, i),
              o.a.createElement(Z, { readOnly: !0, value: s, sign: "+" })
            ),
            o.a.createElement(
              pe,
              null,
              o.a.createElement(
                he,
                null,
                o.a.createElement(re, { currency: i, value: r })
              ),
              o.a.createElement(
                he,
                null,
                o.a.createElement(ce, {
                  baseCurrency: c,
                  targetCurrency: i,
                  value: 1 / a,
                })
              )
            ),
            o.a.createElement(ne, { selectedCurrency: i, onChange: l })
          );
        },
        Ce = (function(e) {
          function t() {
            return (
              Object(J.a)(this, t),
              Object($.a)(this, Object(Q.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(Y.a)(t, e),
            Object(L.a)(t, [
              {
                key: "render",
                value: function() {
                  return o.a.createElement(je, this.props);
                },
              },
            ]),
            t
          );
        })(u.Component),
        ge = Object(s.b)(function(e, t) {
          return {
            rate: e.exchange.rates[t.selectedCurrency],
            total: e.account[t.selectedCurrency],
          };
        })(Ce);
      function Ee() {
        var e = Object(c.a)(["\n  flex: 1 0 50%;\n"]);
        return (
          (Ee = function() {
            return e;
          }),
          e
        );
      }
      function Re() {
        var e = Object(c.a)(["\n  flex: 1 0 50%;\n"]);
        return (
          (Re = function() {
            return e;
          }),
          e
        );
      }
      function xe() {
        var e = Object(c.a)([
          "\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n",
        ]);
        return (
          (xe = function() {
            return e;
          }),
          e
        );
      }
      var ke = b.b.div(xe()),
        we = Object(b.b)(Oe)(Re()),
        Ae = Object(b.b)(ge)(Ee()),
        Se = (function(e) {
          function t() {
            var e, n;
            Object(J.a)(this, t);
            for (var a = arguments.length, r = new Array(a), c = 0; c < a; c++)
              r[c] = arguments[c];
            return (
              ((n = Object($.a)(
                this,
                (e = Object(Q.a)(t)).call.apply(e, [this].concat(r))
              )).state = { targetCurrency: C.EUR, baseCurrencyInputValue: "" }),
              (n.handleTargetChange = function(e) {
                n.setState({ targetCurrency: e });
              }),
              (n.handleBaseCurrencyAmountChange = function(e) {
                n.setState({ baseCurrencyInputValue: e });
              }),
              n
            );
          }
          return (
            Object(Y.a)(t, e),
            Object(L.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.className,
                    n = e.base,
                    a = e.onBaseChange,
                    r = this.state,
                    c = r.targetCurrency,
                    u = r.baseCurrencyInputValue;
                  return o.a.createElement(
                    ke,
                    { className: t },
                    o.a.createElement(we, {
                      selectedCurrency: n,
                      value: u,
                      onCurrencyChange: a,
                      onValueChange: this.handleBaseCurrencyAmountChange,
                    }),
                    o.a.createElement(Ae, {
                      selectedCurrency: c,
                      baseCurrency: n,
                      baseCurrencyAmount: this.baseCurrencyAmount,
                      onCurrencyChange: this.handleTargetChange,
                    })
                  );
                },
              },
              {
                key: "baseCurrencyAmount",
                get: function() {
                  var e = this.state.baseCurrencyInputValue;
                  return parseFloat(e);
                },
              },
            ]),
            t
          );
        })(u.Component),
        Ne = (function(e) {
          function t() {
            return (
              Object(J.a)(this, t),
              Object($.a)(this, Object(Q.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(Y.a)(t, e),
            Object(L.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  this.props.fetchRates(this.props.base);
                },
              },
              {
                key: "componentWillUnmount",
                value: function() {
                  this.props.fetchRatesCancel();
                },
              },
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.base,
                    n = e.fetchRates;
                  return o.a.createElement(Se, {
                    className: this.props.className,
                    base: t,
                    onBaseChange: n,
                  });
                },
              },
            ]),
            t
          );
        })(u.Component);
      Ne.defaultProps = { className: "" };
      var Ue = Object(s.b)(
        function(e) {
          return { base: e.exchange.base };
        },
        function(e) {
          return Object(v.bindActionCreators)(
            { fetchRates: k, fetchRatesCancel: w },
            e
          );
        }
      )(Ne);
      function Te() {
        var e = Object(c.a)([
          '\n  html, body {\n    margin: 0;\n    padding: 0;\n  }\n  \n  body {\n    font: normal 16px/1.5 "Helvetica Neue", Arial, sans-serif;\n  }\n',
        ]);
        return (
          (Te = function() {
            return e;
          }),
          e
        );
      }
      var Be = W(),
        De = Object(b.a)(Te());
      Object(f.d)(Object(r.a)(h.a)),
        l.a.render(
          o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(De, null),
            o.a.createElement(
              f.c,
              {
                locale: "en",
                messages: {
                  total: "You have {value}",
                  exchangeRate: "{target} = {base}",
                },
              },
              o.a.createElement(s.a, { store: Be }, o.a.createElement(Ue, null))
            )
          ),
          document.getElementById("root")
        ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready.then(function(e) {
            e.unregister();
          });
    },
    68: function(e, t) {},
    78: function(e, t, n) {
      e.exports = n(104);
    },
    93: function(e, t) {},
    99: function(e, t) {},
  },
  [[78, 2, 1]],
]);
//# sourceMappingURL=main.96e11324.chunk.js.map