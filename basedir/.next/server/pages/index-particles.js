"use strict";
(() => {
var exports = {};
exports.id = 851;
exports.ids = [851];
exports.modules = {

/***/ 9618:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ index_particles)
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
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-tsparticles"
const external_react_tsparticles_namespaceObject = require("react-tsparticles");
var external_react_tsparticles_default = /*#__PURE__*/__webpack_require__.n(external_react_tsparticles_namespaceObject);
;// CONCATENATED MODULE: external "tsparticles"
const external_tsparticles_namespaceObject = require("tsparticles");
;// CONCATENATED MODULE: ./src/components/ParticlesBackground.js




const ParticlesBackground = ()=>{
    const particlesInit = (0,external_react_.useCallback)(async (engine)=>{
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await (0,external_tsparticles_namespaceObject.loadFull)(engine);
    }, []);
    const particlesLoaded = (0,external_react_.useCallback)(async (container)=>{
        await console.log(container);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx((external_react_tsparticles_default()), {
        id: "particles-box",
        className: "particles",
        init: particlesInit,
        loaded: particlesLoaded,
        options: {
            fullScreen: {
                enable: false
            },
            fpsLimit: 1000,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push"
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse"
                    },
                    resize: true
                },
                modes: {
                    push: {
                        quantity: 4
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    }
                }
            },
            particles: {
                color: {
                    value: "#ffffff"
                },
                links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 0.8,
                    width: 0.5
                },
                collisions: {
                    enable: false
                },
                move: {
                    directions: "none",
                    enable: true,
                    outModes: {
                        default: "bounce"
                    },
                    random: false,
                    speed: 3,
                    straight: false
                },
                number: {
                    density: {
                        enable: true,
                        area: 1000
                    },
                    value: 50
                },
                opacity: {
                    value: 0.5
                },
                // shape: {
                //   type: "circle",
                // },
                size: {
                    value: {
                        min: 1,
                        max: 5
                    }
                }
            },
            detectRetina: true
        }
    });
};
/* harmony default export */ const components_ParticlesBackground = (ParticlesBackground);

// EXTERNAL MODULE: ./src/components/Services.js
var Services = __webpack_require__(9923);
// EXTERNAL MODULE: ./src/layout/Layout.js + 5 modules
var Layout = __webpack_require__(3909);
;// CONCATENATED MODULE: ./pages/index-particles.js








const Portfolio = dynamic_default()(null, {
    loadableGenerated: {
        modules: [
            "index-particles.js -> " + "../src/components/Portfolio"
        ]
    },
    ssr: false
});
const IndexParticles = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Layout/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                id: "home",
                "data-nav-tooltip": "Home",
                className: "pp-section pp-scrollable",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "home-banner",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(components_ParticlesBackground, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
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
                                                    children: "Hello, I am"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                    className: "font-alt",
                                                    children: "Sergio Gadot"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                    className: "lead",
                                                    children: [
                                                        "I Am Passionate ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            id: "type-it"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "desc",
                                                    children: "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores."
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "btn-bar",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "px-btn px-btn-theme",
                                                        href: "#",
                                                        children: "Donwload CV"
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
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(About/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Services/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Portfolio, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Blog/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Contact/* default */.Z, {})
        ]
    });
};
/* harmony default export */ const index_particles = (IndexParticles);


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
var __webpack_exports__ = __webpack_require__.X(0, [699,676,664,152,909,194], () => (__webpack_exec__(9618)));
module.exports = __webpack_exports__;

})();