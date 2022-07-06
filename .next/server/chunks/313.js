exports.id = 313;
exports.ids = [313];
exports.modules = {

/***/ 6123:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "aboutUs_root__8NB8N",
	"root1": "aboutUs_root1__JXYOI",
	"paragraphs": "aboutUs_paragraphs__sjtS6",
	"firstimage": "aboutUs_firstimage__foIDZ",
	"firstRow": "aboutUs_firstRow__7CsEH",
	"imgCol": "aboutUs_imgCol__ZIDLe",
	"Col": "aboutUs_Col__lYulo",
	"text": "aboutUs_text__w6dDo",
	"icon2": "aboutUs_icon2__cg_im",
	"icon1": "aboutUs_icon1__UNrfe",
	"iconsRow": "aboutUs_iconsRow__MOF__",
	"textDiv": "aboutUs_textDiv__TfXdi",
	"title": "aboutUs_title__P_ssK",
	"aboutHeader": "aboutUs_aboutHeader__sFmXa",
	"aboutUsPar": "aboutUs_aboutUsPar__7H9nu"
};


/***/ }),

/***/ 7313:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ AboutUsComp)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
;// CONCATENATED MODULE: ./components/AboutUs/aboutUsBottom.jsx




function aboutUsBottom() {
    return /*#__PURE__*/ _jsx("div", {
        className: stylesAboutUs.root,
        children: /*#__PURE__*/ _jsx(Row, {
            className: stylesAboutUs.paragraphs
        })
    });
};

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/AboutUs/aboutUs.module.css
var aboutUs_module = __webpack_require__(6123);
var aboutUs_module_default = /*#__PURE__*/__webpack_require__.n(aboutUs_module);
;// CONCATENATED MODULE: ./components/AboutUs/AboutUsTop.jsx





function aboutUsTop() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (aboutUs_module_default()).root1,
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Row, {
            className: (aboutUs_module_default()).firstRow,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (aboutUs_module_default()).title,
                children: [
                    " ",
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (aboutUs_module_default()).textDiv,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: (aboutUs_module_default()).aboutHeader,
                                children: "What Do We Do?"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                                className: (aboutUs_module_default()).iconsRow,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
                                        className: (aboutUs_module_default()).imgCol,
                                        sm: 6,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                className: (aboutUs_module_default()).icon2,
                                                src: "/Icons/project1.svg",
                                                alt: ""
                                            }),
                                            " "
                                        ]
                                    }),
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                        className: (aboutUs_module_default()).Col,
                                        sm: 10,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/AboutUs/Research",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: (aboutUs_module_default()).text,
                                                children: "Research"
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                                className: (aboutUs_module_default()).iconsRow,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
                                        className: (aboutUs_module_default()).imgCol,
                                        sm: 6,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                className: (aboutUs_module_default()).icon2,
                                                src: "/Icons/technology.svg",
                                                alt: ""
                                            }),
                                            " "
                                        ]
                                    }),
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                        className: (aboutUs_module_default()).Col,
                                        sm: 10,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/AboutUs/TechProvider",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: (aboutUs_module_default()).text,
                                                children: "Provide Technology"
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                                className: (aboutUs_module_default()).iconsRow,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
                                        className: (aboutUs_module_default()).imgCol,
                                        sm: 6,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                className: (aboutUs_module_default()).icon2,
                                                src: "/Icons/project2.svg",
                                                alt: ""
                                            }),
                                            " "
                                        ]
                                    }),
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                        className: (aboutUs_module_default()).Col,
                                        sm: 10,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/AboutUs/InvFund",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: (aboutUs_module_default()).text,
                                                children: "Investment Funding"
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                                className: (aboutUs_module_default()).iconsRow,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
                                        className: (aboutUs_module_default()).imgCol,
                                        sm: 6,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                className: (aboutUs_module_default()).icon2,
                                                src: "/Icons/ideas.png",
                                                alt: ""
                                            }),
                                            " "
                                        ]
                                    }),
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                        className: (aboutUs_module_default()).Col,
                                        sm: 10,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/AboutUs/Ideas",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: (aboutUs_module_default()).text,
                                                children: "Incubate Ideas"
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};

;// CONCATENATED MODULE: ./components/AboutUs/AboutUsComp.jsx




function AboutUsComp() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx(aboutUsTop, {})
    });
};


/***/ })

};
;