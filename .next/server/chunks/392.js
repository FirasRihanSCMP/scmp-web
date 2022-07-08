exports.id = 392;
exports.ids = [392];
exports.modules = {

/***/ 3269:
/***/ ((module) => {

// Exports
module.exports = {
	"pardiv": "paragraph_pardiv__avntm",
	"topTitle": "paragraph_topTitle__yjn2y",
	"parCol": "paragraph_parCol__s9H9Q",
	"bodyWidth": "paragraph_bodyWidth__n3bPo",
	"title": "paragraph_title__ukARF",
	"imgCol": "paragraph_imgCol__NAqA1",
	"img": "paragraph_img__39W7z",
	"gradient": "paragraph_gradient__dkQXP",
	"paragraph": "paragraph_paragraph__pHtEy",
	"par": "paragraph_par__cDbPj",
	"depTitle": "paragraph_depTitle__55hWH"
};


/***/ }),

/***/ 3305:
/***/ ((module) => {

// Exports
module.exports = {
	"width": "SepDepartment_width__9fT0K",
	"depTitle": "SepDepartment_depTitle__Xnt0n"
};


/***/ }),

/***/ 392:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ paragraph)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _paragraph_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3269);
/* harmony import */ var _paragraph_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_paragraph_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_SepDepartment_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3305);
/* harmony import */ var _styles_SepDepartment_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_SepDepartment_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);







function paragraph(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: (_styles_SepDepartment_module_css__WEBPACK_IMPORTED_MODULE_4___default().depTitle),
                children: props.topTitle
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
                className: [
                    (_paragraph_module_css__WEBPACK_IMPORTED_MODULE_5___default().pardiv)
                ],
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                        className: (_paragraph_module_css__WEBPACK_IMPORTED_MODULE_5___default().parCol),
                        xs: 12,
                        sm: 12,
                        md: 12,
                        lg: 12,
                        xl: {
                            span: 6,
                            offset: 0
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_paragraph_module_css__WEBPACK_IMPORTED_MODULE_5___default().divPar),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: (_paragraph_module_css__WEBPACK_IMPORTED_MODULE_5___default().paragraph),
                                    children: props.text
                                }),
                                " "
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                        className: (_paragraph_module_css__WEBPACK_IMPORTED_MODULE_5___default().imgCol),
                        xs: 12,
                        sm: 12,
                        md: 12,
                        lg: 12,
                        xl: {
                            span: 6,
                            offset: 0
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                            priority: true,
                            placeholder: "blur",
                            blurDataURL: "/" + props.img,
                            /* loading="eager" */ className: (_paragraph_module_css__WEBPACK_IMPORTED_MODULE_5___default().img),
                            src: "/" + props.img,
                            alt: "",
                            layout: "fill"
                        })
                    })
                ]
            })
        ]
    });
};


/***/ })

};
;