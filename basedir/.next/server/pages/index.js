"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 4121:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
// EXTERNAL MODULE: ./src/components/About.js
var About = __webpack_require__(4644);
// EXTERNAL MODULE: ./src/components/Blog.js
var Blog = __webpack_require__(8319);
// EXTERNAL MODULE: ./src/components/Contact.js
var Contact = __webpack_require__(8504);
// EXTERNAL MODULE: ./src/components/Services.js
var Services = __webpack_require__(9923);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/utilits.js
var utilits = __webpack_require__(1917);
;// CONCATENATED MODULE: ./src/layout/Footer.js



const Footer = ()=>{
    (0,external_react_.useEffect)(()=>{
        if (!blog) {
            (0,utilits/* activeSection */.j1)();
        }
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: "https://www.iubenda.com/privacy-policy/77821801",
                target: "_blanck",
                class: "iubenda-nostyle no-brand iubenda-noiframe iubenda-embed iubenda-noiframe ",
                title: "Privacy Policy ",
                children: "Privacy Policy"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: "https://www.iubenda.com/privacy-policy/77821801/cookie-policy",
                target: "_blanck",
                class: "iubenda-nostyle no-brand iubenda-noiframe iubenda-embed iubenda-noiframe ",
                title: "Cookie Policy ",
                children: "Cookie Policy"
            })
        ]
    });
};
/* harmony default export */ const layout_Footer = (Footer);

// EXTERNAL MODULE: ./src/components/TypingAnimation.js + 1 modules
var TypingAnimation = __webpack_require__(6567);
// EXTERNAL MODULE: ./src/layout/Layout.js + 5 modules
var Layout = __webpack_require__(3909);
;// CONCATENATED MODULE: ./pages/index.js









const Portfolio = dynamic_default()(null, {
    loadableGenerated: {
        modules: [
            "index.js -> " + "../src/components/Portfolio"
        ]
    },
    ssr: false
});
const Index = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Layout/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                id: "home",
                "data-nav-tooltip": "Home",
                className: "pp-section pp-scrollable",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "home-banner",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row full-screen align-items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-6",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "type-box",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                children: "Candidato alle regionali del 2 e 3 aprile"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                className: "font-alt",
                                                children: "Matteo Polo"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                className: "desc",
                                                children: [
                                                    "Candidato alle elezioni regionali del 2 e 3 aprile con la lista Open Sinistra FVG di cui sono il Presidente e co-fondatore ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {})
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "btn-bar",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "px-btn px-btn-theme",
                                                    href: "#le-nostre-idee",
                                                    children: "Scopri le nostre idee"
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-6",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "hb-img",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "static/img/home-banner.png",
                                            title: "",
                                            alt: ""
                                        })
                                    })
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(About/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Services/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Blog/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Contact/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(layout_Footer, {})
        ]
    });
};
/* harmony default export */ const pages = (Index);


/***/ }),

/***/ 6567:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_TypingAnimation)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "typed.js"
const external_typed_js_namespaceObject = require("typed.js");
var external_typed_js_default = /*#__PURE__*/__webpack_require__.n(external_typed_js_namespaceObject);
;// CONCATENATED MODULE: ./src/components/TypingAnimation.js



const TypingAnimation = ()=>{
    // Create Ref element.
    const el = (0,external_react_.useRef)(null);
    (0,external_react_.useEffect)(()=>{
        const typed = new (external_typed_js_default())(el.current, {
            strings: [
                "Web Designer",
                "Developer",
                "Freelancer"
            ],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 100,
            smartBackspace: true,
            loop: true,
            showCursor: true
        });
        // Destropying
        return ()=>{
            typed.destroy();
        };
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
            id: "type-it",
            className: "subtitle subtitle-typed",
            ref: el
        })
    });
};
/* harmony default export */ const components_TypingAnimation = (TypingAnimation);


/***/ }),

/***/ 8655:
/***/ ((module) => {

module.exports = require("emailjs-com");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [699,676,664,152,909,194], () => (__webpack_exec__(4121)));
module.exports = __webpack_exports__;

})();