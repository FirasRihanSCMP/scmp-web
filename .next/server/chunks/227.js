exports.id = 227;
exports.ids = [227];
exports.modules = {

/***/ 7246:
/***/ ((module) => {

// Exports
module.exports = {
	"img": "carouselSCMP_img__huXnF",
	"ImgCont": "carouselSCMP_ImgCont__fW4LL",
	"bodyWidth": "carouselSCMP_bodyWidth__MZJ1s"
};


/***/ }),

/***/ 9298:
/***/ ((module) => {

// Exports
module.exports = {
	"spinnerdiv": "spinner_spinnerdiv__UmvZj"
};


/***/ }),

/***/ 3446:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CarouselScmp)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _carouselSCMP_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7246);
/* harmony import */ var _carouselSCMP_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_carouselSCMP_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9252);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);








function CarouselScmp(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_carouselSCMP_module_css__WEBPACK_IMPORTED_MODULE_6___default().bodyWidth),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Carousel, {
            children: props.img ? props.img.map((img)=>{
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Carousel.Item, {
                    interval: img.duration || 5000,
                    className: (_carouselSCMP_module_css__WEBPACK_IMPORTED_MODULE_6___default().carouselmain),
                    children: img.link ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_carouselSCMP_module_css__WEBPACK_IMPORTED_MODULE_6___default().ImgCont),
                        style: {
                            height: `${props.style}vw`
                        },
                        children: [
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                href: `/${img.link}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    priority: true,
                                    /* placeholder="blur"
                                blurDataURL={'/imgs/' + img.img} */ loading: "eager",
                                    src: "/imgs/" + img.img,
                                    className: `d-block w-100 ${(_carouselSCMP_module_css__WEBPACK_IMPORTED_MODULE_6___default().img)}`,
                                    alt: "",
                                    layout: "fill"
                                })
                            })
                        ]
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: {
                            height: `${props.style}vw`
                        },
                        className: (_carouselSCMP_module_css__WEBPACK_IMPORTED_MODULE_6___default().ImgCont),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                            priority: true,
                            /*  placeholder="blur"
                                blurDataURL={'/imgs/' + img.img} */ loading: "eager",
                            src: "/imgs/" + img.img,
                            className: `d-block w-100 ${(_carouselSCMP_module_css__WEBPACK_IMPORTED_MODULE_6___default().img)}`,
                            alt: "",
                            layout: "fill"
                        })
                    })
                }, img.id);
            }) : ""
        })
    });
};


/***/ }),

/***/ 3295:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Spinner)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _spinner_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9298);
/* harmony import */ var _spinner_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_spinner_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3278);
/* harmony import */ var react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_2__);




function Spinner() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_spinner_module_css__WEBPACK_IMPORTED_MODULE_3___default().spinnerdiv),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_2___default()), {
                color: "#ffc41d",
                size: 150,
                css: " "
            }),
            " "
        ]
    });
};


/***/ })

};
;